import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization');
  
  // Verify webhook secret
  if (authHeader !== `Bearer ${process.env.CLOUDINARY_WEBHOOK_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Revalidate press kit images
    revalidateTag('press-kit-images');
    
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    );
  }
}
