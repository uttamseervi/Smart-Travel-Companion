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

async function findMuseums(latitude: number, longitude: number, radius: number, apiKey: string): Promise<void> {
    try {
        const url = `https://api.geoapify.com/v2/places?categories=entertainment.museum&filter=circle:${longitude},${latitude},${radius}&limit=10&apiKey=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: GeoapifyResponse = await response.json();

        for (const place of data.features) {
            const name = place.properties.name;
            const address = place.properties.formatted;
            console.log(`${name} - ${address}`);
        }
    } catch (error) {
        console.error('Error fetching museum data:', error);
    }
}

// Example usage
const latitude = 12.9716;
const longitude = 77.5946;
const radius = 5000; // in meters
const apiKey = "cd5226cee4b3493fb5a5402a2b0e3e83";

findMuseums(latitude, longitude, radius, apiKey); 