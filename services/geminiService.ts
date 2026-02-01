
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, TESTIMONIALS, DESIGNER_NAME, DESIGNER_TAGLINE, DESIGNER_BIO, BLOG_POSTS, DESIGNER_EMAIL, BEHANCE_URL, LINKEDIN_URL } from "../constants";

export const getAIResponse = async (userPrompt: string, history: {role: string, content: string}[]) => {
  // Always initialize with the exact environment variable as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the personal AI assistant for ${DESIGNER_NAME}, a ${DESIGNER_TAGLINE}.
    The brand name is "abdelbrands".
    Your goal is to represent Abdel professionally and help visitors find projects, read his journal, or learn about his work.
    
    Official Website: abdelbrands.com
    Contact Email: ${DESIGNER_EMAIL}
    LinkedIn: ${LINKEDIN_URL}
    Behance: ${BEHANCE_URL}
    
    Abdel's Bio: ${DESIGNER_BIO}
    
    Available Projects:
    ${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

    Available Journal/Blog Posts:
    ${BLOG_POSTS.map(b => `- ${b.title} (${b.date})`).join('\n')}

    Client Feedback:
    ${TESTIMONIALS.map(t => `- "${t.quote}" — ${t.author}, ${t.company}`).join('\n')}
    
    Guidelines:
    1. Be concise, sophisticated, and helpful.
    2. Mention the "Journal" section if people ask for Abdel's thoughts or design philosophy.
    3. Refer to Abdel by his name and the brand "abdelbrands".
    4. If the user asks for social media, provide his LinkedIn and Behance links.
    5. If the user asks for contact info, provide his email: ${DESIGNER_EMAIL}.
  `;

  try {
    // Map our application's roles (user/assistant) to Gemini's expected roles (user/model)
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Add the latest user prompt
    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: { 
        systemInstruction, 
        temperature: 0.7, 
        maxOutputTokens: 500 
      },
    });

    if (!response.text) {
      throw new Error("Empty response from model");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting to Abdel's server right now. Please try again in a moment.";
  }
};
