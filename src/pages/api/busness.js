import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  if (req.method === 'POST') {
    const { name, description, location } = req.body;
    // Save business details to database (mock for now)
    res.status(200).json({ message: 'Business created' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
