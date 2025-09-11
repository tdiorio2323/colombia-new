
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

app.post('/api/generate', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Based on the user's interest in luxury experiences, craft a personalized and enticing message. The user's message is: "${message}".`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    res.json({ personalizedMessage: text });
  } catch (error) { 
    console.error('Error generating personalized message:', error);
    res.status(500).json({ error: 'Failed to generate personalized message' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
