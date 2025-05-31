"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface PlaceProperties {
    name: string;
    formatted: string;
}

interface Place {
    properties: PlaceProperties;
}

interface GeoapifyResponse {
    features: Place[];
}

export function MuseumFinder() {
    const [latitude, setLatitude] = useState<string>('12.9716');
    const [longitude, setLongitude] = useState<string>('77.5946');
    const [radius, setRadius] = useState<string>('5000');
    const [museums, setMuseums] = useState<Place[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const apiKey = "cd5226cee4b3493fb5a5402a2b0e3e83";

    const findMuseums = async () => {
        try {
            setLoading(true);
            setError(null);

            const url = `https://api.geoapify.com/v2/places?categories=entertainment.museum&filter=circle:${longitude},${latitude},${radius}&limit=10&apiKey=${apiKey}`;

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: GeoapifyResponse = await response.json();
            setMuseums(data.features);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="text-sm font-medium mb-1 block">Latitude</label>
                    <Input
                        type="number"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        placeholder="Enter latitude"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium mb-1 block">Longitude</label>
                    <Input
                        type="number"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        placeholder="Enter longitude"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium mb-1 block">Radius (meters)</label>
                    <Input
                        type="number"
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
                        placeholder="Enter radius"
                    />
                </div>
            </div>

            <Button
                onClick={findMuseums}
                disabled={loading}
                className="w-full"
            >
                {loading ? 'Searching...' : 'Find Museums'}
            </Button>

            {error && (
                <div className="text-red-500 text-sm">{error}</div>
            )}

            <div className="space-y-4">
                {museums.map((museum, index) => (
                    <Card key={index} className="p-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary mt-1" />
                            <div>
                                <h3 className="font-medium">{museum.properties.name}</h3>
                                <p className="text-sm text-muted-foreground">{museum.properties.formatted}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
} 