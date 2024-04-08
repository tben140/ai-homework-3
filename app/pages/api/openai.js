// pages/api/openai.js

import axios from 'axios';
import OpenAI from 'openai';

export default async function handler(req, res) {

  const openai = new OpenAI();

  if (req.method === 'POST') {
    const { prompt } = req.body;

    try {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "Paintring Describer", content: "Describe the Landscape painting theme" }],
        model: "gpt-3.5-turbo",
    });
    console.log("chatCompletion.data", chatCompletion.data);


      return chatCompletion;
    } catch (error) {
      return res.status(error.response.status).json({ message: error.message });
    }
  } else {
    // Handle any other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}