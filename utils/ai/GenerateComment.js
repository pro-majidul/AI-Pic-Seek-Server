import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [
    {
      role: "user",
      parts: [
        {
          text: "You are an AI assistant for a website where users can comment on images. Your only job is to discuss the image and its qualities based on the user's comments.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "I understand. I am ready to discuss this image. What would you like to know or comment on?",
        },
      ],
    },
  ],
});



const GenerateComment = () => {};

module.exports = GenerateComment;
