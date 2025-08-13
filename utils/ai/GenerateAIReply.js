const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [
    {
      role: "user",
      parts: [
        { text: "Hi Gemini, you are a friendly image discussion assistant." },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Sure! I can help with that. Show me an image or comment and I will reply.",
        },
      ],
    },

    { role: "user", parts: [{ text: "This picture looks amazing!" }] },
    {
      role: "model",
      parts: [{ text: "Yes! The lighting and composition are beautiful." }],
    },

    { role: "user", parts: [{ text: "I love the colors in this photo." }] },
    {
      role: "model",
      parts: [
        { text: "Absolutely! The color palette is so vibrant and pleasing." },
      ],
    },

    { role: "user", parts: [{ text: "The subject looks very happy here." }] },
    {
      role: "model",
      parts: [{ text: "True! That smile really brings the image to life." }],
    },

    {
      role: "user",
      parts: [{ text: "Was this picture taken during sunset?" }],
    },
    {
      role: "model",
      parts: [
        {
          text: "Yes, it seems to be golden hour, giving everything a warm glow.",
        },
      ],
    },

    { role: "user", parts: [{ text: "The background is so blurry, why?" }] },
    {
      role: "model",
      parts: [
        {
          text: "That’s a shallow depth of field — it keeps the subject sharp and background soft.",
        },
      ],
    },

    {
      role: "user",
      parts: [{ text: "I think this is from a famous tourist spot." }],
    },
    {
      role: "model",
      parts: [
        {
          text: "It does look like a popular location! The scenery is stunning.",
        },
      ],
    },

    { role: "user", parts: [{ text: "This image feels peaceful to me." }] },
    {
      role: "model",
      parts: [
        {
          text: "Yes, the calm atmosphere really comes through in the picture.",
        },
      ],
    },
  ],
});

const GenerateAIReply = async (prompt, comment) => {
  const finallprompt = `prompt : ${prompt}  comment : ${comment}`;

  const response = await chat.sendMessage({
    message: finallprompt,
  });

  console.log("Chat response 1:", response.text);
  return response.text;
};

module.exports = GenerateAIReply;
