import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  X, 
  Send, 
  Sparkles, 
  Trash2, 
  User, 
  Phone, 
  MessageSquare, 
  MapPin, 
  HelpCircle,
  Clock
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "Namaste, sis! 🌸 Welcome to Everfit Ladies Gym Lucknow! I am your virtual fitness companion.\n\nAsk me anything about our timing schedules, safe ladies-only environment, location at Raja Bazar/Yahiyaganj, or our high-energy Zumba and CrossFit classes. Let's make your health goals a reality! How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { label: "🕕 Gym Timings", text: "What are the timings and opening hours of the gym?" },
    { label: "📍 Gym Location", text: "Can you provide the physical address and location landmarks?" },
    { label: "💃 Zumba & Classes", text: "Tell me about Zumba and other fitness programs available." },
    { label: "🔒 Ladies-only Safety", text: "Is the safety standard 100% women-only?" },
    { label: "🎁 Get Free Trial Pass", text: "How do I claim and book my free workout pass?" }
  ];

  // Auto-scroll to lowest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);
    setErrorStatus(null);

    const apiHistory = [...messages, userMsg].map((m) => ({
      role: m.role,
      text: m.text,
    }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: apiHistory })
      });

      if (!res.ok) {
        throw new Error("Unable to establish proper chat connection.");
      }

      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const gymResponse = data.text || "I am always here to support your fitness journey. Can you repeat that?";
      
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}-ai`,
          role: "model",
          text: gymResponse,
          timestamp: new Date()
        }
      ]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus("CONNECTION_LAG");
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}-ai-error`,
          role: "model",
          text: "I am experiencing a slight offline pause right now, sis. but don't worry! You can call us directly on **089604 18286** or chat over WhatsApp – we will lock in your free trial slot dynamically!",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (window.confirm("Do you want to reset your conversation history?")) {
      setMessages([
        {
          id: "welcome",
          role: "model",
          text: "Let's start fresh, sis! 🌸 Ask me anything about Everfit Ladies Gym's programs or free trial passes.",
          timestamp: new Date()
        }
      ]);
      setErrorStatus(null);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-white">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[90vw] sm:w-[400px] h-[550px] bg-[#0c0c0e]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4"
            style={{ boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)" }}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-brand-pink via-brand-purple to-brand-coral border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/25">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0c0c0e] rounded-full" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm leading-tight">Sisterhood Advisor</h3>
                  <p className="text-[10px] text-white/70 font-light flex items-center">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 mr-1.5 inline-block animate-ping" />
                    Online · Powered by Gemini
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {messages.length > 1 && (
                  <button
                    onClick={clearChat}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-all"
                    title="Clear Chat Room"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/85 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 classname-scroller max-h-[380px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} items-start space-x-2`}
                >
                  {message.role === "model" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-pink to-brand-coral shrink-0 flex items-center justify-center text-[10px] font-bold border border-white/10">
                      EF
                    </div>
                  )}
                  
                  <div className="max-w-[80%] flex flex-col">
                    <div
                      className={`px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-light leading-relaxed whitespace-pre-wrap ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white rounded-tr-none self-end"
                          : "bg-white/5 border border-white/5 text-gray-200 rounded-tl-none"
                      }`}
                    >
                      {message.text}
                    </div>
                    <span
                      className={`text-[9px] text-gray-500 mt-1 ${
                        message.role === "user" ? "self-end mr-1" : "self-start ml-1"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {message.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-white/10 shrink-0 flex items-center justify-center border border-white/10">
                      <User className="w-4 h-4 text-brand-pink" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loader Typing dots */}
              {isLoading && (
                <div className="flex justify-start items-start space-x-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-pink to-brand-coral shrink-0 flex items-center justify-center text-[10px] font-bold border border-white/10">
                    EF
                  </div>
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none self-start flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce" />
                  </div>
                </div>
              )}

              {/* Error Status quick action helper */}
              {errorStatus === "CONNECTION_LAG" && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-2xl space-y-2 mt-2">
                  <p className="text-[10px] text-red-200 uppercase tracking-wider font-bold">Resilient Booking Channels</p>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <a
                      href="tel:08960418286"
                      className="px-3 py-2 bg-brand-pink text-white rounded-lg hover:scale-103 transition-transform font-semibold flex items-center justify-center space-x-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call Gym</span>
                    </a>
                    <a
                      href="https://wa.me/918960418286"
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 bg-[#25D366] text-white rounded-lg hover:scale-103 transition-transform font-semibold flex items-center justify-center space-x-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions presets */}
            <div className="px-4 py-2 bg-black/20 border-t border-white/5 flex flex-wrap gap-1.5 justify-start overflow-x-auto select-none no-scrollbar max-h-[85px]">
              {quickPrompts.map((p) => (
                <button
                  key={p.label}
                  onClick={() => handleSendMessage(p.text)}
                  className="px-2.5 py-1 text-[10px] bg-white/5 hover:bg-brand-pink hover:text-white border border-white/5 rounded-full text-gray-300 font-medium whitespace-nowrap transition-all active:scale-95 cursor-pointer flex items-center space-x-1"
                >
                  <span>{p.label}</span>
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="p-3 bg-[#0a0a0c] border-t border-white/5 flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Zumba, Yoga, location, free pass..."
                className="flex-1 px-4 py-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-pink focus:bg-white/10 transition-all font-light"
                maxLength={400}
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand-pink to-brand-coral text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-40 disabled:scale-100 cursor-pointer flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sparkly Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-tr from-brand-pink via-brand-purple to-brand-coral rounded-full flex items-center justify-center shadow-xl cursor-pointer relative group"
        style={{ boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)" }}
        title="Chat with Sisterhood Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border border-brand-pink rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
