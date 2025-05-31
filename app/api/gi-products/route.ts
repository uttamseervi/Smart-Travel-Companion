import { NextResponse } from 'next/server';
import { products } from '@/lib/constants/products';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';

    // Filter products based on search term
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase()) ||
            product.location.toLowerCase().includes(search.toLowerCase()) ||
            product.category.toLowerCase().includes(search.toLowerCase());
    });

    return NextResponse.json({
        products: filteredProducts,
        total: filteredProducts.length
    });
} 