"use client";

import { useState, useEffect } from 'react';
import { Search, MapPin, Filter, Calendar, Users, Clock, Navigation } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

// Predefined categories for Geoapify
const predefinedCategories = [
  { id: 'entertainment.museum', label: 'Museums', icon: '🏛️' },
  { id: 'entertainment.cinema', label: 'Cinemas', icon: '🎬' },
  { id: 'tourism.sights', label: 'Tourist Sights', icon: '🗼' },
  { id: 'shopping.marketplace', label: 'Markets', icon: '🛍️' },
  { id: 'catering.cafe', label: 'Cafes', icon: '☕' },
  { id: 'commercial.supermarket', label: 'Supermarkets', icon: '🛒' },
];

interface Place {
  properties: {
    name: string;
    formatted: string;
    categories: string[];
    distance: number;
    lon: number;
    lat: number;
  };
}

interface TripDetails {
  placeName: string;
  numberOfPersons: number;
  date: Date;
  time: string;
  specialRequests: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('entertainment.museum');
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    placeName: '',
    numberOfPersons: 1,
    date: new Date(),
    time: '12:00',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [locationLoading, setLocationLoading] = useState(true);
  const [locationError, setLocationError] = useState<string | null>(null);

  const API_KEY = "cd5226cee4b3493fb5a5402a2b0e3e83";
  const RADIUS = 5000; // 5km radius

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setLocationLoading(false);
      return;
    }

    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationLoading(false);
      },
      (error) => {
        setLocationError('Unable to retrieve your location');
        setLocationLoading(false);
        console.error('Error getting location:', error);
      }
    );
  };

  useEffect(() => {
    if (coordinates) {
      fetchPlaces();
    }
  }, [coordinates, selectedCategory]);

  const fetchPlaces = async () => {
    if (!coordinates) return;

    setLoading(true);
    setError(null);
    try {
      const url = `https://api.geoapify.com/v2/places?categories=${selectedCategory}&filter=circle:${coordinates.longitude},${coordinates.latitude},${RADIUS}&limit=10&apiKey=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.features) {
        setPlaces(data.features);
      } else {
        setError('No places found');
      }
    } catch (err) {
      setError('Failed to fetch places');
      console.error('Error fetching places:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredPlaces = places.filter(place =>
    place.properties.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.properties.formatted.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePlaceSelect = (place: Place) => {
    setSelectedPlace(place);
    setTripDetails(prev => ({
      ...prev,
      placeName: place.properties.name,
    }));
  };

  const handleSubmitTripDetails = async () => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Log the trip details (replace with actual API call)
      console.log('Trip Details:', {
        ...tripDetails,
        place: selectedPlace,
      });

      // Show success message (you can replace this with a toast notification)
      alert('Trip details submitted successfully!');

      // Reset form
      setSelectedPlace(null);
      setTripDetails({
        placeName: '',
        numberOfPersons: 1,
        date: new Date(),
        time: '12:00',
        specialRequests: '',
      });
    } catch (error) {
      console.error('Error submitting trip details:', error);
      alert('Failed to submit trip details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDistance = (distance: number) => {
    if (!distance || isNaN(distance)) return 'Distance unknown';

    if (distance < 1000) {
      return `${Math.round(distance)}m away`;
    } else {
      return `${(distance / 1000).toFixed(1)}km away`;
    }
  };

  const calculateDistance = (place: Place) => {
    if (!coordinates || !place.properties.lat || !place.properties.lon) {
      return 'Distance unknown';
    }

    // Haversine formula to calculate distance between two points
    const R = 6371e3; // Earth's radius in meters
    const φ1 = coordinates.latitude * Math.PI / 180;
    const φ2 = place.properties.lat * Math.PI / 180;
    const Δφ = (place.properties.lat - coordinates.latitude) * Math.PI / 180;
    const Δλ = (place.properties.lon - coordinates.longitude) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in meters
    return formatDistance(distance);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-600" />
        <div className="container relative z-10 mx-auto px-4 py-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Places Near You
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Find interesting places around your location
            </p>

            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search places..."
                className="pl-10 py-6 text-base bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {locationLoading && (
              <div className="mt-4 text-sm text-gray-200">
                Getting your location...
              </div>
            )}
            {locationError && (
              <div className="mt-4 text-sm text-red-200">
                {locationError}
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 text-white border-white hover:bg-white/20"
                  onClick={getCurrentLocation}
                >
                  <Navigation className="h-4 w-4 mr-1" />
                  Retry
                </Button>
              </div>
            )}
            {coordinates && (
              <div className="mt-4 text-sm text-gray-200">
                <MapPin className="h-4 w-4 inline mr-1" />
                Location found! Searching within 5km radius
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="w-full md:w-64 lg:w-72">
              <div className="bg-card rounded-lg border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Categories</h2>
                </div>

                <div className="space-y-4">
                  {predefinedCategories.map(category => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Places Near You</h2>
                  <p className="text-muted-foreground">
                    {filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'} found
                  </p>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-8">Loading places...</div>
              ) : error ? (
                <Card className="bg-muted/40 p-8 text-center">
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <Button
                    variant="outline"
                    onClick={fetchPlaces}
                  >
                    Try Again
                  </Button>
                </Card>
              ) : filteredPlaces.length > 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredPlaces.map((place, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card
                            className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                            onClick={() => handlePlaceSelect(place)}
                          >
                            <h3 className="font-semibold text-lg mb-2">{place.properties.name}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{place.properties.formatted}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-1" />
                              {calculateDistance(place)}
                            </div>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Plan Your Visit</DialogTitle>
                            <DialogDescription>
                              Fill in the details for your visit to {place.properties.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="persons" className="text-right">
                                Persons
                              </Label>
                              <Input
                                id="persons"
                                type="number"
                                min="1"
                                value={tripDetails.numberOfPersons}
                                onChange={(e) => setTripDetails(prev => ({
                                  ...prev,
                                  numberOfPersons: parseInt(e.target.value) || 1
                                }))}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label className="text-right">
                                Date
                              </Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "col-span-3 justify-start text-left font-normal",
                                      !tripDetails.date && "text-muted-foreground"
                                    )}
                                  >
                                    <Calendar className="mr-2 h-4 w-4" />
                                    {tripDetails.date ? format(tripDetails.date, "PPP") : "Pick a date"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <CalendarComponent
                                    mode="single"
                                    selected={tripDetails.date}
                                    onSelect={(date) => date && setTripDetails(prev => ({
                                      ...prev,
                                      date
                                    }))}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="time" className="text-right">
                                Time
                              </Label>
                              <Input
                                id="time"
                                type="time"
                                value={tripDetails.time}
                                onChange={(e) => setTripDetails(prev => ({
                                  ...prev,
                                  time: e.target.value
                                }))}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="requests" className="text-right">
                                Special Requests
                              </Label>
                              <Input
                                id="requests"
                                value={tripDetails.specialRequests}
                                onChange={(e) => setTripDetails(prev => ({
                                  ...prev,
                                  specialRequests: e.target.value
                                }))}
                                placeholder="Any special requirements?"
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button
                              type="submit"
                              onClick={handleSubmitTripDetails}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? 'Submitting...' : 'Book Visit'}
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <Card className="bg-muted/40 p-8 text-center">
                  <p className="text-muted-foreground mb-4">No places found matching your search.</p>
                  <Button
                    variant="outline"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear Search
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}