// pages/api/connect.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../util/mogodb'; // Correct the import path

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { client, db } = await connectToDatabase();

    if (!client || !db) {
      return res.status(500).json({ error: 'Failed to connect to database' });
    }

    res.status(200).json({ message: 'Connected to database successfully' });
  } catch (error) {
    console.error('Error connecting to database:', error);
    res.status(500).json({ error: 'Database connection error' });
  }
}
