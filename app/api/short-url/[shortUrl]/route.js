// app/api/short-url/[shortUrl]/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Ensure MongoDB connection
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;
async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db();
  }
  return db;
}

export async function GET(request,  context) {
  try {
    const { params } = context;
    const { shortUrl } = params;
    
    // Connect to database
    const db = await connectDB();
    const collection = db.collection('shortenedUrls');

    // Find the URL
    const record = await collection.findOne({ shortUrl });

    if (!record) {
      return NextResponse.json({ error: 'URL not found' }, { status: 404 });
    }

    // Return the original URL
    return NextResponse.json({ url: record.url });

  } catch (error) {
    console.error('Error fetching short URL:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}