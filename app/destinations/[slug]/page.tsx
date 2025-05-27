"use client";

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    MapPin,
    Star,
    Calendar,
    Users,
    Phone,
    Mail,
    Clock,
    Wifi,
    Car,
    Coffee,
    Shield
} from 'lucide-react';
import { locations, Location } from '@/lib/constants/locations';

interface DestinationPageProps {
    params: {
        slug: string;
    };
}

export default function DestinationPage({ params }: DestinationPageProps) {
    const [selectedDates, setSelectedDates] = useState({ checkin: '', checkout: '' });
    const [guests, setGuests] = useState(2);
    const [bookingForm, setBookingForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Find the location by slug
    const location = locations.find(loc => loc.slug === params.slug);

    if (!location) {
        notFound();
    }

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle booking submission
        console.log('Booking submitted:', {
            location: location.name,
            dates: selectedDates,
            guests,
            ...bookingForm
        });
        alert('Booking request submitted! We will contact you soon.');
    };

    const amenities = [
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Car, label: 'Transportation' },
        { icon: Coffee, label: 'Local Cuisine' },
        { icon: Shield, label: 'Travel Insurance' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full">
                <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/20 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white px-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">{location.name}</h1>
                        <div className="flex items-center justify-center mb-4">
                            <MapPin className="h-6 w-6 mr-2 text-blue-200" />
                            <span className="text-xl text-blue-100">{location.country}</span>
                        </div>
                        <div className="flex items-center justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-6 w-6 ${i < Math.floor(location.rating) ? 'text-amber-400 fill-current' : 'text-blue-200'}`} />
                            ))}
                            <span className="ml-2 text-lg text-blue-100">{location.rating.toFixed(1)} / 5.0</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {location.categories.map((category, index) => (
                                <Badge key={index} className="bg-blue-600/80 text-white border-blue-400/50 text-sm px-3 py-1 backdrop-blur-sm">
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </Badge>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="bg-white/95 backdrop-blur-sm border-blue-100 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-900">About {location.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                        {location.description}
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        Discover the magic of {location.name}, where every corner tells a story and every moment becomes a cherished memory.
                                        From its rich cultural heritage to its breathtaking landscapes, this destination offers an unforgettable experience
                                        that will leave you planning your return before you've even left.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Amenities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Card className="bg-white/95 backdrop-blur-sm border-blue-100 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-900">What's Included</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {amenities.map((amenity, index) => (
                                            <div key={index} className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                                                <amenity.icon className="h-8 w-8 text-blue-600 mb-2" />
                                                <span className="text-sm font-medium text-center text-blue-900">{amenity.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Location Map Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Card className="bg-white/95 backdrop-blur-sm border-blue-100 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-blue-900">Location</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-64 rounded-xl flex items-center justify-center border border-blue-200">
                                        <div className="text-center">
                                            <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-2" />
                                            <p className="text-blue-700 font-medium">Interactive Map</p>
                                            <p className="text-sm text-blue-600">
                                                Lat: {location.coordinates.lat}, Lng: {location.coordinates.lng}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="sticky top-8"
                        >
                            <Card className="shadow-xl bg-white/95 backdrop-blur-sm border-blue-200">
                                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                                    <CardTitle className="text-2xl flex items-center">
                                        <Calendar className="h-6 w-6 mr-2" />
                                        Book Your Trip
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                                        {/* Date Selection */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <Label htmlFor="checkin" className="text-blue-900 font-medium">Check-in</Label>
                                                <Input
                                                    id="checkin"
                                                    type="date"
                                                    value={selectedDates.checkin}
                                                    onChange={(e) => setSelectedDates(prev => ({ ...prev, checkin: e.target.value }))}
                                                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="checkout" className="text-blue-900 font-medium">Check-out</Label>
                                                <Input
                                                    id="checkout"
                                                    type="date"
                                                    value={selectedDates.checkout}
                                                    onChange={(e) => setSelectedDates(prev => ({ ...prev, checkout: e.target.value }))}
                                                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Guests */}
                                        <div>
                                            <Label htmlFor="guests" className="text-blue-900 font-medium">Guests</Label>
                                            <div className="flex items-center space-x-3 mt-2">
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setGuests(Math.max(1, guests - 1))}
                                                    className="border-blue-300 text-blue-600 hover:bg-blue-50"
                                                >
                                                    -
                                                </Button>
                                                <span className="flex items-center text-blue-900 font-medium">
                                                    <Users className="h-4 w-4 mr-1 text-blue-600" />
                                                    {guests}
                                                </span>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setGuests(guests + 1)}
                                                    className="border-blue-300 text-blue-600 hover:bg-blue-50"
                                                >
                                                    +
                                                </Button>
                                            </div>
                                        </div>

                                        <hr className="my-4 border-blue-100" />

                                        {/* Contact Information */}
                                        <div>
                                            <Label htmlFor="name" className="text-blue-900 font-medium">Full Name</Label>
                                            <Input
                                                id="name"
                                                value={bookingForm.name}
                                                onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))}
                                                placeholder="Enter your full name"
                                                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email" className="text-blue-900 font-medium">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={bookingForm.email}
                                                onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))}
                                                placeholder="Enter your email"
                                                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="phone" className="text-blue-900 font-medium">Phone</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={bookingForm.phone}
                                                onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))}
                                                placeholder="Enter your phone number"
                                                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message" className="text-blue-900 font-medium">Special Requests</Label>
                                            <Textarea
                                                id="message"
                                                value={bookingForm.message}
                                                onChange={(e) => setBookingForm(prev => ({ ...prev, message: e.target.value }))}
                                                placeholder="Any special requests or questions?"
                                                rows={3}
                                                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>

                                        {/* Pricing */}
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                                            <div className="flex justify-between items-center mb-2 text-blue-800">
                                                <span>Base price (per person)</span>
                                                <span className="font-medium">$299</span>
                                            </div>
                                            <div className="flex justify-between items-center mb-2 text-blue-800">
                                                <span>Guests × {guests}</span>
                                                <span className="font-medium">${299 * guests}</span>
                                            </div>
                                            <div className="flex justify-between items-center font-bold text-lg text-blue-900 border-t border-blue-200 pt-2">
                                                <span>Total</span>
                                                <span>${299 * guests}</span>
                                            </div>
                                        </div>

                                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" size="lg">
                                            Request Booking
                                        </Button>

                                        <div className="text-center text-sm text-blue-600 mt-3">
                                            <Clock className="h-4 w-4 inline mr-1" />
                                            You won't be charged yet
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Contact Info */}
                            <Card className="mt-6 bg-white/95 backdrop-blur-sm border-blue-200">
                                <CardHeader>
                                    <CardTitle className="text-blue-900">Need Help?</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center">
                                        <Phone className="h-4 w-4 mr-2 text-blue-600" />
                                        <span className="text-sm text-blue-800">+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-4 w-4 mr-2 text-blue-600" />
                                        <span className="text-sm text-blue-800">support@travelco.com</span>
                                    </div>
                                    <div className="text-xs text-blue-600 mt-2">
                                        Available 24/7 for booking assistance
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}