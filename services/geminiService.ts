
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, TESTIMONIALS, DESIGNER_NAME, DESIGNER_TAGLINE, DESIGNER_BIO, BLOG_POSTS, DESIGNER_EMAIL, BEHANCE_URL, LINKEDIN_URL, BRAND_NAME } from "../constants";
import { Message } from "../types";

export const getAIResponse = async (userPrompt: string, history: Message[]) => {
  try {
    // Initialize inside the function to ensure the latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    /**
     * Gemini multi-turn contents MUST start with a 'user' role.
     * We filter out the initial assistant welcome message from the history
     * to satisfy this requirement before mapping the roles.
     */
    const conversationHistory = history.filter((msg, idx) => {
      // Skip the very first message if it's from the assistant (the welcome message)
      return !(idx === 0 && msg.role === 'assistant');
    });

    const contents = conversationHistory.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Add the current user prompt as the final turn
    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });

    const systemInstruction = `
      You are the personal AI assistant for ${DESIGNER_NAME}, a ${DESIGNER_TAGLINE}.
      The brand name is "${BRAND_NAME}".
      Your goal is to represent Abdel professionally and help visitors find projects, read his journal, or learn about his work.
      
      Official Website: abdeldesigns.com
      Contact Email: ${DESIGNER_EMAIL}
      LinkedIn: ${LINKEDIN_URL}
      Behance: ${BEHANCE_URL}
      
      Abdel's Bio: ${DESIGNER_BIO}
      
      Available Projects:
      ${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

      Available Journal/Blog Posts:
      ${BLOG_POSTS.map(b => `- ${b.title}`).join('\n')}

      Client Feedback:
      ${TESTIMONIALS.map(t => `- "${t.quote}" — ${t.author}, ${t.role}`).join('\n')}
      
      Guidelines:
      1. Be concise, sophisticated, and helpful.
      2. If a user asks about a specific project, provide its name and a brief summary.
      3. Mention the "Journal" section if people ask for Abdel's thoughts or design philosophy.
      4. Refer to Abdel by his name and the brand "${BRAND_NAME}".
      5. If the user asks for social media or contact info, provide the official links and email.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: contents,
      config: { 
        systemInstruction, 
        temperature: 0.7,
        // Removed maxOutputTokens to avoid issues with thinkingBudget on Gemini 3 models
      },
    });

    if (!response.text) {
      throw new Error("No text returned from Gemini API");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Returning a friendly error string to be displayed in the UI
    return "I'm having a little trouble connecting to my database right now. Please check your internet or try again in a moment.";
  }
};
