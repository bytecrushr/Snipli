// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in your environment variables");
}

const client = new MongoClient(uri);

let db;

export async function connectToDatabase() {
  if (db) {
    return { db, client };
  }

  await client.connect();
  db = client.db();
  return { db, client };
}
