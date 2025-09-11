
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generatePersonalizedMessage(message: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Based on the user's interest in luxury experiences, craft a personalized and enticing message. The user's message is: "${message}".`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.error("Error generating personalized message:", error);
    return "Thank you for your interest! We will be in touch shortly to discuss your exclusive experience.";
  }
}
