import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone();
  const xurl: string = req.url;
  const baseUrl: string = req.nextUrl.origin;

  // Simulate connection with a redis cache
  const isInMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;

  const unprotectedPaths: string[] = [
    `${baseUrl}/static/images/Flags/GER.svg`,
    `${baseUrl}/static/images/Flags/BR.svg`,
    `${baseUrl}/static/images/Flags/NL.svg`,
    `${baseUrl}/static/images/Flags/TR.svg`,
    `${baseUrl}/static/images/Flags/US.svg`,
    `/favicon.ico`,
    `/_next/webpack-hmr`,
  ];

  // If is in maintenance mode, point the url pathname to the maintenance page
  if (isInMaintenanceMode && !unprotectedPaths.includes(xurl)) {
    url.pathname = `/maintenance`;

    // Rewrite to the url
    return NextResponse.rewrite(url);
  }
    
  return NextResponse.next();
}
