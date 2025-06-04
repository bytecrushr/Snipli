import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(req, res) {
  const { shortUrl } = req.query;

  try {
    const { db } = await connectToDatabase();

    const urlData = await db.collection('urls').findOne({ shortUrl });

    if (!urlData) {
      return res.status(404).json({ message: 'Short URL not found' });
    }

    // Perform the redirect
    res.redirect(urlData.url);

  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
