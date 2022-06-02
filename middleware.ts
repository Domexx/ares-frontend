import { NextRequest, NextResponse } from 'next/server';

export default function Middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();

  url.searchParams.set('locale', url.locale);

  // Simulate connection with a redis cache
  const isInMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

  if (url.pathname.includes('.') || url.pathname.includes('_next/image')) {
    return NextResponse.next();
  }

  // If is in maintenance mode, point the url pathname to the maintenance page
  if (isInMaintenanceMode) {
    url.pathname = `/maintenance`;
    // Rewrite to the url
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
