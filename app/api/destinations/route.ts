import { NextResponse } from 'next/server';
import { locations } from '@/lib/constants/locations';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const categories = searchParams.get('categories')?.split(',') || [];
    const search = searchParams.get('search') || '';
    const sortBy = searchParams.get('sortBy') || 'rating';

    // Filter locations based on search and categories
    let filteredLocations = locations.filter(location => {
        const matchesSearch = location.name.toLowerCase().includes(search.toLowerCase()) ||
            location.country.toLowerCase().includes(search.toLowerCase()) ||
            location.description.toLowerCase().includes(search.toLowerCase());

        const matchesCategory = categories.length === 0 ||
            location.categories.some(cat => categories.includes(cat));

        return matchesSearch && matchesCategory;
    });

    // Sort locations based on selected sort option
    filteredLocations = [...filteredLocations].sort((a, b) => {
        if (sortBy === 'rating') {
            return b.rating - a.rating;
        } else if (sortBy === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'name-desc') {
            return b.name.localeCompare(a.name);
        }
        return 0;
    });

    return NextResponse.json({
        destinations: filteredLocations,
        total: filteredLocations.length
    });
} 