import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/user')) {
    // You can add additional checks here if needed
    // For now, we'll let the client-side protection handle most cases
    return NextResponse.next();
  }
  
  return NextResponse.next();
}