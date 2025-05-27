"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Search, MapPin, ChevronDown, Filter, Check } from 'lucide-react';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { activities } from '@/lib/constants/activities';
import { locations } from '@/lib/constants/locations';

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    }
  }
};

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('rating');
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [bookingDetails, setBookingDetails] = useState({
    adults: 2,
    children: 0,
    date: undefined as Date | undefined,
    time: '',
  });
  
  // Get unique categories
  const allCategories: string[] = [];
  activities.forEach(activity => {
    activity.category.forEach(cat => {
      if (!allCategories.includes(cat)) {
        allCategories.push(cat);
      }
    });
  });
  
  // Filter activities based on search and filters
  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          activity.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = selectedLocations.length === 0 || 
                           selectedLocations.includes(activity.locationSlug);
    
    const matchesCategory = selectedCategories.length === 0 || 
                           activity.category.some(cat => selectedCategories.includes(cat));
    
    const matchesPrice = priceRange.length === 0 || 
                         priceRange.includes(activity.price);
    
    return matchesSearch && matchesLocation && matchesCategory && matchesPrice;
  });
  
  // Sort activities based on selected sort option
  const sortedActivities = [...filteredActivities].sort((a, b) => {
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'price-asc') {
      return a.price.length - b.price.length;
    } else if (sortBy === 'price-desc') {
      return b.price.length - a.price.length;
    } else if (sortBy === 'duration') {
      return a.duration.localeCompare(b.duration);
    }
    return 0;
  });
  
  // Handle location filter change
  const handleLocationChange = (locationSlug: string) => {
    setSelectedLocations(prev => {
      if (prev.includes(locationSlug)) {
        return prev.filter(l => l !== locationSlug);
      } else {
        return [...prev, locationSlug];
      }
    });
  };
  
  // Handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };
  
  // Handle price range filter change
  const handlePriceChange = (price: string) => {
    setPriceRange(prev => {
      if (prev.includes(price)) {
        return prev.filter(p => p !== price);
      } else {
        return [...prev, price];
      }
    });
  };
  
  // Open booking dialog
  const openBookingDialog = (activity: any) => {
    setSelectedActivity(activity);
    setBookingDetails({
      ...bookingDetails,
      date: selectedDate,
    });
  };

  const timeSlots = [
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" }
  ];

  const guestOptions = Array.from({ length: 8 }, (_, i) => ({ value: (i + 1).toString(), label: (i + 1).toString() }));
  const childrenOptions = Array.from({ length: 6 }, (_, i) => ({ value: i.toString(), label: i.toString() }));
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Bookings and Tours"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 py-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Local Experiences
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Find and book unique activities and tours for your next adventure
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search activities..."
                  className="pl-10 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  className="w-full pl-10 py-2 bg-white/10 backdrop-blur-md border-white/20 text-white rounded-md"
                  onChange={(e) => setSelectedLocations(e.target.value ? [e.target.value] : [])}
                  value={selectedLocations[0] || ""}
                >
                  <option value="">All locations</option>
                  {locations.map(location => (
                    <option key={location.slug} value={location.slug}>{location.name}</option>
                  ))}
                </select>
              </div>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="pl-3 text-left font-normal bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="w-full md:w-64 lg:w-72 hidden md:block">
              <div className="bg-card rounded-lg border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold text-lg">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      setSelectedLocations([]);
                      setSelectedCategories([]);
                      setPriceRange([]);
                      setSelectedDate(undefined);
                    }}
                    className="h-8 text-xs"
                  >
                    Reset
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Date filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Date</h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <Separator />
                  
                  {/* Location filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Destinations</h3>
                    <div className="space-y-2">
                      {locations.map(location => (
                        <div className="flex items-center space-x-2\" key={location.slug}>
                          <Checkbox 
                            id={`location-${location.slug}`} 
                            checked={selectedLocations.includes(location.slug)}
                            onCheckedChange={() => handleLocationChange(location.slug)}
                          />
                          <Label 
                            htmlFor={`location-${location.slug}`}
                            className="text-sm"
                          >
                            {location.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Category filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {allCategories.map(category => (
                        <div className="flex items-center space-x-2\" key={category}>
                          <Checkbox 
                            id={`category-${category}`} 
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => handleCategoryChange(category)}
                          />
                          <Label 
                            htmlFor={`category-${category}`}
                            className="text-sm capitalize"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  {/* Price range filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {['$', '$$', '$$$', '$$$$'].map(price => (
                        <div className="flex items-center space-x-2\" key={price}>
                          <Checkbox 
                            id={`price-${price}`} 
                            checked={priceRange.includes(price)}
                            onCheckedChange={() => handlePriceChange(price)}
                          />
                          <Label 
                            htmlFor={`price-${price}`}
                            className="text-sm"
                          >
                            {price}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile filters */}
            <div className="md:hidden mb-6">
              <div className="flex items-center justify-between gap-4">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6 space-y-6">
                      {/* Date filter */}
                      <div>
                        <h3 className="text-sm font-medium mb-3">Date</h3>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <Separator />
                      
                      {/* Other filters */}
                      <div className="space-y-6">
                        {/* Location filter */}
                        <div>
                          <h3 className="text-sm font-medium mb-3">Destinations</h3>
                          <div className="space-y-3">
                            {locations.map(location => (
                              <div className="flex items-center space-x-2\" key={location.slug}>
                                <Checkbox 
                                  id={`mobile-location-${location.slug}`} 
                                  checked={selectedLocations.includes(location.slug)}
                                  onCheckedChange={() => handleLocationChange(location.slug)}
                                />
                                <Label 
                                  htmlFor={`mobile-location-${location.slug}`}
                                  className="text-sm"
                                >
                                  {location.name}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        {/* Category filter */}
                        <div>
                          <h3 className="text-sm font-medium mb-3">Categories</h3>
                          <div className="space-y-3">
                            {allCategories.map(category => (
                              <div className="flex items-center space-x-2\" key={category}>
                                <Checkbox 
                                  id={`mobile-category-${category}`} 
                                  checked={selectedCategories.includes(category)}
                                  onCheckedChange={() => handleCategoryChange(category)}
                                />
                                <Label 
                                  htmlFor={`mobile-category-${category}`}
                                  className="text-sm capitalize"
                                >
                                  {category}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Separator />
                        
                        {/* Price range filter */}
                        <div>
                          <h3 className="text-sm font-medium mb-3">Price Range</h3>
                          <div className="space-y-3">
                            {['$', '$$', '$$$', '$$$$'].map(price => (
                              <div className="flex items-center space-x-2\" key={price}>
                                <Checkbox 
                                  id={`mobile-price-${price}`} 
                                  checked={priceRange.includes(price)}
                                  onCheckedChange={() => handlePriceChange(price)}
                                />
                                <Label 
                                  htmlFor={`mobile-price-${price}`}
                                  className="text-sm"
                                >
                                  {price}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          onClick={() => {
                            setSelectedLocations([]);
                            setSelectedCategories([]);
                            setPriceRange([]);
                            setSelectedDate(undefined);
                          }}
                          variant="outline"
                          className="w-full"
                        >
                          Reset Filters
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                
                <select
                  className="w-full py-2 px-3 rounded-md border"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="rating">Highest Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Available Experiences</h2>
                  <p className="text-muted-foreground">
                    {filteredActivities.length} {filteredActivities.length === 1 ? 'experience' : 'experiences'} found
                    {selectedDate && ` for ${format(selectedDate, "PPP")}`}
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <select
                    className="w-[180px] py-2 px-3 rounded-md border"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="rating">Highest Rated</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="duration">Duration</option>
                  </select>
                </div>
              </div>
              
              {filteredActivities.length > 0 ? (
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {sortedActivities.map((activity) => (
                    <motion.div key={activity.id} variants={itemVariants}>
                      <Card className="overflow-hidden h-full">
                        <div className="md:flex h-full">
                          <div className="md:w-2/5 relative h-56 md:h-auto">
                            <Image
                              src={activity.image}
                              alt={activity.name}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute top-3 left-3">
                              <Badge className="bg-primary text-primary-foreground">{activity.price}</Badge>
                            </div>
                          </div>
                          <div className="md:w-3/5 p-6 flex flex-col">
                            <div className="flex-grow">
                              <div className="flex items-center gap-2 mb-1">
                                {activity.category.slice(0, 2).map((cat: string, index: number) => (
                                
                                  <Badge key={index} variant="outline" className="capitalize text-xs">{cat}</Badge>
                                ))}
                              </div>
                              <h3 className="text-xl font-semibold mb-2">{activity.name}</h3>
                              <div className="flex items-center text-muted-foreground mb-2 text-sm">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                <span>{activity.location}</span>
                                <span className="mx-2">•</span>
                                <span>{activity.duration}</span>
                              </div>
                              <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={`text-xs ${i < Math.floor(activity.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                                ))}
                                <span className="ml-1 text-xs text-muted-foreground">{activity.rating.toFixed(1)}</span>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {activity.description}
                              </p>
                            </div>
                            
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  className="w-full mt-auto"
                                  onClick={() => openBookingDialog(activity)}
                                >
                                  Book Now
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>Book {activity.name}</DialogTitle>
                                  <DialogDescription>
                                    Complete your booking details below
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-1 gap-2">
                                    <Label htmlFor="booking-date">Date</Label>
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <Button
                                          id="booking-date"
                                          variant="outline"
                                          className="w-full justify-start text-left font-normal"
                                        >
                                          <CalendarIcon className="mr-2 h-4 w-4" />
                                          {bookingDetails.date ? format(bookingDetails.date, "PPP") : <span>Select date</span>}
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0">
                                        <Calendar
                                          mode="single"
                                          selected={bookingDetails.date}
                                          onSelect={(date) => setBookingDetails({...bookingDetails, date})}
                                          initialFocus
                                          disabled={(date) => date < new Date()}
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 gap-2">
                                    <Label htmlFor="booking-time">Time</Label>
                                    <select
                                      id="booking-time"
                                      className="w-full py-2 px-3 rounded-md border"
                                      value={bookingDetails.time}
                                      onChange={(e) => setBookingDetails({...bookingDetails, time: e.target.value})}
                                    >
                                      <option value="">Select time</option>
                                      {timeSlots.map(slot => (
                                        <option key={slot.value} value={slot.value}>{slot.label}</option>
                                      ))}
                                    </select>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="grid grid-cols-1 gap-2">
                                      <Label htmlFor="adults">Adults</Label>
                                      <select
                                        id="adults"
                                        className="w-full py-2 px-3 rounded-md border"
                                        value={bookingDetails.adults.toString()}
                                        onChange={(e) => setBookingDetails({...bookingDetails, adults: parseInt(e.target.value)})}
                                      >
                                        {guestOptions.map(option => (
                                          <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                      <Label htmlFor="children">Children</Label>
                                      <select
                                        id="children"
                                        className="w-full py-2 px-3 rounded-md border"
                                        value={bookingDetails.children.toString()}
                                        onChange={(e) => setBookingDetails({...bookingDetails, children: parseInt(e.target.value)})}
                                      >
                                        {childrenOptions.map(option => (
                                          <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  
                                  <div className="grid grid-cols-1 gap-1 pt-3">
                                    <div className="flex justify-between text-sm">
                                      <span>Price per person:</span>
                                      <span>{activity?.price}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                      <span>Number of guests:</span>
                                      <span>{bookingDetails.adults + bookingDetails.children}</span>
                                    </div>
                                    <Separator className="my-2" />
                                    <div className="flex justify-between font-semibold">
                                      <span>Total:</span>
                                      <span>{activity?.price} × {bookingDetails.adults + bookingDetails.children}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex justify-end">
                                  <Button type="submit">
                                    Complete Booking
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <Card className="bg-muted/40 p-8 text-center">
                  <p className="text-muted-foreground mb-4">No experiences found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedLocations([]);
                      setSelectedCategories([]);
                      setPriceRange([]);
                      setSelectedDate(undefined);
                    }}
                  >
                    Reset Filters
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Benefits */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Book With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Free Cancellation",
                description: "Flexible booking options with free cancellation up to 24 hours before the experience.",
                icon: "🔄"
              },
              {
                title: "Verified Activities",
                description: "All experiences are verified and meet our high quality standards.",
                icon: "✓"
              },
              {
                title: "Best Price Guarantee",
                description: "Find a lower price elsewhere and we'll match it plus give you 10% off.",
                icon: "💰"
              },
              {
                title: "24/7 Support",
                description: "Our customer support team is available 24/7 to assist you with any questions.",
                icon: "🛎️"
              }
            ].map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}