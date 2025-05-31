"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface PlaceProperties {
    name: string;
    formatted: string;
    opening_hours?: string;
    contact?: {
        phone?: string;
    };
    description?: string;
    lat: number;
    lon: number;
}

interface Place {
    properties: PlaceProperties;
}

interface GeoapifyResponse {
    features: Place[];
}

interface PlaceFinderProps {
    category: string;
    title: string;
}

export function PlaceFinder({ category, title }: PlaceFinderProps) {
    const [places, setPlaces] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);

    const apiKey = "cd5226cee4b3493fb5a5402a2b0e3e83";

    useEffect(() => {
        // Get user's location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude
                    });
                },
                (error) => {
                    setError("Unable to get your location. Please enable location services.");
                    setLoading(false);
                }
            );
        } else {
            setError("Geolocation is not supported by your browser");
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const fetchPlaces = async () => {
            if (!userLocation) return;

            try {
                setLoading(true);
                setError(null);

                const url = `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${userLocation.lon},${userLocation.lat},5000&limit=10&apiKey=${apiKey}`;

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: GeoapifyResponse = await response.json();
                setPlaces(data.features);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, [userLocation, category]);

    if (loading) {
        return (
            <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-sm p-4 bg-red-50 rounded-lg">
                {error}
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="space-y-4">
                {places.map((place, index) => (
                    <Card key={index} className="overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <div className="space-y-2 flex-grow">
                                    <div>
                                        <h3 className="font-medium">{place.properties.name}</h3>
                                        <p className="text-sm text-muted-foreground">{place.properties.formatted}</p>
                                    </div>
                                    {place.properties.description && (
                                        <p className="text-sm text-muted-foreground">{place.properties.description}</p>
                                    )}
                                    {place.properties.opening_hours && (
                                        <p className="text-sm text-muted-foreground">
                                            <span className="font-medium">Hours:</span> {place.properties.opening_hours}
                                        </p>
                                    )}
                                    {place.properties.contact?.phone && (
                                        <p className="text-sm text-muted-foreground">
                                            <span className="font-medium">Phone:</span> {place.properties.contact.phone}
                                        </p>
                                    )}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="mt-2"
                                        onClick={() => {
                                            const url = `https://www.google.com/maps/search/?api=1&query=${place.properties.lat},${place.properties.lon}`;
                                            window.open(url, '_blank');
                                        }}
                                    >
                                        Open in Google Maps
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
} 