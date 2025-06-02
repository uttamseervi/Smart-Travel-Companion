"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import Image from 'next/image';
import { Calendar as CalendarIcon, Search, MapPin, ChevronDown, Filter, Check, Users, DoorOpen } from 'lucide-react';
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

const cityToIata: { [key: string]: string } = {
  delhi: "DEL",
  mumbai: "BOM",
  bangalore: "BLR",
  hyderabad: "HYD",
  chennai: "MAA",
  kolkata: "CCU",
  ahmedabad: "AMD",
  pune: "PNQ",
  jaipur: "JAI",
  lucknow: "LKO",
  kochi: "COK",
  goa: "GOI",
  indore: "IDR",
  chandigarh: "IXC",
  bhopal: "BHO",
  visakhapatnam: "VTZ",
  guwahati: "GAU",
  nagpur: "NAG",
  varanasi: "VNS",
  bhubaneswar: "BBI",
  surat: "STV",
  amritsar: "ATQ",
  trivandrum: "TRV",
  patna: "PAT",
  coimbatore: "CJB",
  vadodara: "BDQ",
  rajkot: "RAJ",
  raipur: "RPR",
  mangalore: "IXE",
  ranchi: "IXR",
  jodhpur: "JDH",
  madurai: "IXM",
  dehradun: "DED",
  jammu: "IXJ",
  srinagar: "SXR",
  imphal: "IMF",
  agartala: "IXA",
  mysore: "MYQ",
  udaipur: "UDR",
  gorakhpur: "GOP",
  dibrugarh: "DIB",
  silchar: "IXS",
  tirupati: "TIR",
  pondicherry: "PNY",
  hubli: "HBX",
  kanpur: "KNU",
  dimapur: "DMU",
  shillong: "SHL",
  aizawl: "AJL"
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

  // State for booking type
const [bookingType, setBookingType] = useState('flights');

// State for flights
const [flightFrom, setFlightFrom] = useState('');
const [flightTo, setFlightTo] = useState('');
const [flightDepartureDate, setFlightDepartureDate] = useState('');
const [flightReturnDate, setFlightReturnDate] = useState('');
const [flightTravelers, setFlightTravelers] = useState('1');

// State for hotels
const [hotelDestination, setHotelDestination] = useState('');
const [hotelCheckIn, setHotelCheckIn] = useState('');
const [hotelCheckOut, setHotelCheckOut] = useState('');
const [hotelRooms, setHotelRooms] = useState('1');
const [hotelGuests, setHotelGuests] = useState('1');

// Function to handle flight search


const handleFlightSearch = () => {
  const baseUrl = 'https://www.makemytrip.com/flight/search';

  if (!flightFrom || !flightTo || !flightDepartureDate) return;

  const fromCode = cityToIata[flightFrom.toLowerCase()];
  const toCode = cityToIata[flightTo.toLowerCase()];

  if (!fromCode || !toCode) {
    alert("Invalid city name entered. Please select from the available options.");
    return;
  }

  const departureDate = new Date(flightDepartureDate);
  const formattedDate = `${String(departureDate.getDate()).padStart(2, '0')}/${String(departureDate.getMonth() + 1).padStart(2, '0')}/${departureDate.getFullYear()}`;


  const itinerary = `${fromCode}-${toCode}-${formattedDate}`; // Format: DEL-BLR-06/06/2025
  const tripType = flightReturnDate ? 'R' : 'O'; // R for round trip, O for one-way
  const paxType = `A-${flightTravelers}_C-0_I-0`;

  const finalUrl = `${baseUrl}?itinerary=${itinerary}&tripType=${tripType}&paxType=${paxType}&intl=false&cabinClass=E&lang=eng`;

  window.open(finalUrl, '_blank');
};


// Function to handle hotel search
const handleHotelSearch = () => {
  // Format dates to DDMMYYYY
  const formatDateForMMT = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}${month}${year}`;
  };

  // Get city details
  const cityName = hotelDestination.toLowerCase() || 'chennai';
  const cityCode = cityToIata[cityName] ? cityToIata[cityName] + 'A' : 'MAAA'; // Append 'A' to IATA code
  const displayCityName = hotelDestination || 'Chennai';

  // Construct URL
  const baseUrl = 'https://www.makemytrip.com/hotels/hotel-listing';
  const params = new URLSearchParams();
  
  // Required parameters
  params.append('checkin', formatDateForMMT(hotelCheckIn));
  params.append('checkout', formatDateForMMT(hotelCheckOut));
  params.append('city', cityCode);
  params.append('country', 'IN');
  params.append('locusId', cityCode);
  params.append('locusType', 'city');
  params.append('searchText', displayCityName);
  params.append('regionNearByExp', '3');
  
  // Room and guests parameters
  const roomStayQualifier = `3e${hotelGuests}e0e`;
  params.append('roomStayQualifier', roomStayQualifier);
  params.append('rsc', `1e${roomStayQualifier}`);
  
  window.open(`${baseUrl}?${params.toString()}`, '_blank');
};
  
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
    <section className="relative h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2245436/pexels-photo-2245436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Travel Bookings"
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
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Book Your Perfect Trip
          </motion.h1>
          
          {/* Toggle between Flights and Hotels */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="inline-flex bg-white/10 backdrop-blur-md rounded-lg p-1">
              <button
                onClick={() => setBookingType('flights')}
                className={`px-6 py-3 rounded-md text-lg font-medium ${bookingType === 'flights' ? 'bg-white text-gray-900' : 'text-white hover:bg-white/20'}`}
              >
                Flights
              </button>
              <button
                onClick={() => setBookingType('hotels')}
                className={`px-6 py-3 rounded-md text-lg font-medium ${bookingType === 'hotels' ? 'bg-white text-gray-900' : 'text-white hover:bg-white/20'}`}
              >
                Hotels
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={bookingType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {bookingType === 'flights' ? (
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">From</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <input 
                          type="text" 
                          placeholder="City or Airport" 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={flightFrom}
                          onChange={(e) => setFlightFrom(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <input 
                          type="text" 
                          placeholder="City or Airport" 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={flightTo}
                          onChange={(e) => setFlightTo(e.target.value)}
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Departure</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <input 
                          type="date" 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={flightDepartureDate}
                          onChange={(e) => setFlightDepartureDate(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Return (Optional)</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <input 
                          type="date" 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={flightReturnDate}
                          onChange={(e) => setFlightReturnDate(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Travelers</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <select 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={flightTravelers}
                          onChange={(e) => setFlightTravelers(e.target.value)}
                        >
                          <option value="1">1 Traveler</option>
                          <option value="2">2 Travelers</option>
                          <option value="3">3 Travelers</option>
                          <option value="4">4 Travelers</option>
                        </select>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.button 
                    onClick={handleFlightSearch}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Search Flights
                  </motion.button>
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Destination</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <input 
                          type="text" 
                          placeholder="City or Hotel" 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={hotelDestination}
                          onChange={(e) => setHotelDestination(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Check-in</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <input 
                          type="date" 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={hotelCheckIn}
                          onChange={(e) => setHotelCheckIn(e.target.value)}
                        />
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Check-out</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <input 
                          type="date" 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={hotelCheckOut}
                          onChange={(e) => setHotelCheckOut(e.target.value)}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Rooms</label>
                      <div className="relative">
                        <DoorOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <select 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={hotelRooms}
                          onChange={(e) => setHotelRooms(e.target.value)}
                        >
                          <option value="1">1 Room</option>
                          <option value="2">2 Rooms</option>
                          <option value="3">3 Rooms</option>
                        </select>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-2">Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
                        <select 
                          className="w-full pl-10 p-3 bg-white/20 border border-white/30 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          value={hotelGuests}
                          onChange={(e) => setHotelGuests(e.target.value)}
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                        </select>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.button 
                    onClick={handleHotelSearch}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Search Hotels
                  </motion.button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  </div>
)};