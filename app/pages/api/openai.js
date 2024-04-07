// pages/api/openai.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      });

      return res.status(200).json(response.data);
    } catch (error) {
      return res.status(error.response.status).json({ message: error.message });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}