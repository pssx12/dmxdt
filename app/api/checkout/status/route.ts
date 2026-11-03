import { NextResponse } from 'next/server';
import { checkoutEnabled } from '@/lib/checkout-config';

export async function GET() {
  return NextResponse.json({ enabled: checkoutEnabled() }, {
    headers: { 'Cache-Control': 'no-store' },
  });
}
