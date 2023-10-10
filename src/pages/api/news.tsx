import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';

// Initialize the cors middleware
const corsHandler = cors({ methods: ['GET', 'HEAD'] });

// Helper method to run middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  // Run the cors middleware
  await runMiddleware(req, res, corsHandler);

  // Rest of the handler logic
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.newsKey}`,
    );
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.status(200).json(response.data);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching news data:', error.message);
      res
        .status(500)
        .json({ error: `Failed to fetch news data: ${error.message}` });
    } else {
      console.error('An unknown error occurred:', error);
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export default handler;
