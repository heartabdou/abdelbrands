
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, TESTIMONIALS, DESIGNER_NAME, DESIGNER_TAGLINE, DESIGNER_BIO } from "../constants";

export const getAIResponse = async (userPrompt: string, history: {role: string, content: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const systemInstruction = `
    You are the personal AI assistant for ${DESIGNER_NAME}, a ${DESIGNER_TAGLINE}.
    Your goal is to represent Nova professionally and help visitors find projects or learn about Nova's work.
    
    Nova's Bio: ${DESIGNER_BIO}
    
    Available Projects:
    ${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

    Client Feedback (Social Proof):
    ${TESTIMONIALS.map(t => `- "${t.quote}" — ${t.author}, ${t.company}`).join('\n')}
    
    Guidelines:
    1. Be concise, elegant, and helpful.
    2. If someone asks about Nova's reputation or working style, you can reference the client feedback.
    3. If someone asks about a specific project, mention its category and Nova's role.
    4. Keep the tone minimalist and sophisticated.
    5. If you don't know the answer, politely suggest they contact Nova via the contact form.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting right now. Please feel free to explore the gallery or contact Nova directly.";
  }
};
