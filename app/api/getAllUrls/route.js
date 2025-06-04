// app/api/getAllUrls/route.js
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

export async function GET(req) {
  const db = await connectToDB();
  const collection = db.collection('shortenedUrls');

  try {
    const urls = await collection.find({}).toArray();
    return new Response(JSON.stringify(urls), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching URLs:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to fetch URLs' }),
      { status: 500 }
    );
  }
}
