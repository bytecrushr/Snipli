// app/api/shorten/route.js
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
let db;

const connectToDB = async () => {
  if (!db) {
    const connection = await client.connect();
    db = connection.db();
  }
  return db;
};

export async function POST(req) {
  const { url, customShortUrl } = await req.json();

  if (!url) {
    return new Response(JSON.stringify({ message: 'URL is required' }), { status: 400 });
  }

  const db = await connectToDB();
  const collection = db.collection('shortenedUrls');

  let shortUrl = customShortUrl || Math.random().toString(36).substring(2, 8); // Generate a random short URL if none provided

  // Check if the custom short URL already exists
  if (customShortUrl) {
    const existingUrl = await collection.findOne({ shortUrl });
    if (existingUrl) {
      return new Response(JSON.stringify({ message: 'Custom short URL already exists' }), { status: 400 });
    }
  }

  // Insert the URL and its short URL into the database
  await collection.insertOne({ url, shortUrl });

  return new Response(JSON.stringify({ shortUrl }), { status: 200 });
}
