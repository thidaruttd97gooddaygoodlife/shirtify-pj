// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../util/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Check if user exists
    const user = await db.collection('users').findOne({ username });

    if (!user) {
      // If user doesn't exist, redirect to signup
      res.status(401).json({ error: 'User not found. Please sign up.' });
      return;
    }

    // Check if password matches
    if (user.password !== password) {
      res.status(401).json({ error: 'Password incorrect.' });
      return;
    }

    // Successful login
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
