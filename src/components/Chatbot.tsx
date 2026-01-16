import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface UserCredentials {
  name: string;
  phone: string;
  timestamp: string;
}

const STORAGE_KEY = "vit_chat_leads";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"name" | "phone" | "chat">("name");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const saveCredentials = (credentials: UserCredentials) => {
    const existingData = localStorage.getItem(STORAGE_KEY);
    const leads: UserCredentials[] = existingData ? JSON.parse(existingData) : [];
    leads.push(credentials);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setStep("phone");
    }
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      saveCredentials({
        name: name.trim(),
        phone: phone.trim(),
        timestamp: new Date().toISOString(),
      });
      setStep("chat");
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: `Hello ${name}! 👋 Welcome to VIT University. I'm here to help you with any questions about admissions, programs, campus life, or anything else. How can I assist you today?`,
        },
      ]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Call local Ollama API
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "llama3.2",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant for VIT University (Vellore Institute of Technology). You help students and parents with queries about admissions, programs, campus facilities, placements, and general information. Be friendly, informative, and concise. The user's name is ${name}.`,
            },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: userMessage.content },
          ],
          stream: false,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from Ollama");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message?.content || "I apologize, but I couldn't process your request. Please try again.",
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Ollama error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm sorry, I couldn't connect to the AI service. Please make sure Ollama is running locally on port 11434 with the llama3.2 model. You can start it with: `ollama run llama3.2`",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-vit-gold text-vit-navy shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center animate-pulse-glow ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card rounded-2xl chatbot-shadow flex flex-col overflow-hidden animate-fade-in border border-border">
          {/* Header */}
          <div className="bg-vit-navy text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-vit-gold text-vit-navy flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">VIT Assistant</h3>
                <p className="text-xs text-white/70">Online | Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 bg-muted/30">
            {step === "name" && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-vit-gold/20 flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-vit-gold" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Welcome to VIT!</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Please enter your name to get started
                </p>
                <form onSubmit={handleNameSubmit} className="w-full max-w-xs space-y-3">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-center"
                    autoFocus
                  />
                  <Button type="submit" className="w-full bg-vit-gold text-vit-navy hover:bg-vit-gold/90">
                    Continue
                  </Button>
                </form>
              </div>
            )}

            {step === "phone" && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-vit-gold/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-vit-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">Hi, {name}! 👋</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Please enter your phone number
                </p>
                <form onSubmit={handlePhoneSubmit} className="w-full max-w-xs space-y-3">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-center"
                    autoFocus
                  />
                  <Button type="submit" className="w-full bg-vit-gold text-vit-navy hover:bg-vit-gold/90">
                    Start Chat
                  </Button>
                </form>
              </div>
            )}

            {step === "chat" && (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-vit-navy text-white rounded-br-md"
                          : "bg-card border border-border rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3">
                      <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input */}
          {step === "chat" && (
            <div className="p-3 border-t border-border bg-card">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-vit-gold text-vit-navy hover:bg-vit-gold/90 px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
