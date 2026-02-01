
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { Message } from '../types';
import { BRAND_NAME } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Welcome to ${BRAND_NAME}. I'm your digital concierge. How can I help you explore Abdel's work today?` }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    
    // Add user message to UI immediately
    const updatedMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(updatedMessages);
    setIsTyping(true);

    try {
      // Pass the updated history so the AI has context
      const response = await getAIResponse(userMsg, messages);
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please check your connection." }]);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 w-[350px] md:w-[400px] h-[550px] bg-white rounded-2xl border border-zinc-200 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-5 bg-zinc-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-[10px] font-black">AI</span>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em]">Studio Concierge</h4>
                <p className="text-[9px] text-zinc-400 uppercase tracking-widest">Available 24/7</p>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-zinc-50/50"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] px-5 py-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-zinc-900 text-white rounded-tr-none shadow-md' 
                      : 'bg-white text-zinc-800 border border-zinc-100 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-100 px-5 py-4 rounded-2xl rounded-tl-none space-x-1 flex items-center shadow-sm">
                  <div className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-white border-t border-zinc-100 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-zinc-100 border-none rounded-full px-5 py-3 text-sm focus:ring-1 focus:ring-zinc-900 focus:bg-white outline-none transition-all placeholder:text-zinc-400"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className={`bg-zinc-900 text-white p-3 rounded-full hover:bg-zinc-700 transition-all ${isTyping ? 'opacity-50 cursor-not-allowed' : 'active:scale-90'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
