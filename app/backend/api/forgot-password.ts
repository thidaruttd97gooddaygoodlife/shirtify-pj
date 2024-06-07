// pages/api/forgot-password.ts

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Here you would typically handle the logic to send the password reset instructions to the user's email
    // For demonstration purposes, let's simulate it
    try {
      // Simulate sending email (in real app, use your email service provider)
      console.log(`Password reset instructions sent to: ${email}`);

      res.status(200).json({ message: 'Password reset instructions sent.' });
    } catch (error) {
      console.error('Error sending password reset instructions:', error);
      res.status(500).json({ message: 'Failed to send password reset instructions.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
