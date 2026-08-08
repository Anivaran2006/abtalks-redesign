"use client";

import * as React from "react";
import { Send, ArrowLeft, Bot, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ChatPage() {
  const router = useRouter();
  const { chatHistory, addChatMessage } = useAppContext();
  const [input, setInput] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput("");
    addChatMessage("user", userMessage);
    setIsTyping(true);

    // Mock mentor response delay
    setTimeout(() => {
      let mockResponse = "That's a great question! Keep pushing through the challenge. Consistency is key.";
      const lowerMsg = userMessage.toLowerCase();
      if (lowerMsg.includes("stuck") || lowerMsg.includes("help") || lowerMsg.includes("error")) {
        mockResponse = "I see you're stuck. First, check the console for any specific error messages. Then try breaking down the problem into smaller, testable parts. You've got this!";
      } else if (lowerMsg.includes("react") || lowerMsg.includes("state")) {
        mockResponse = "React state can be tricky! Remember that state updates are asynchronous. If you need the next state based on the previous one, use a functional update like `setState(prev => prev + 1)`.";
      } else if (lowerMsg.includes("thank") || lowerMsg.includes("thanks")) {
        mockResponse = "You're very welcome! Keep up the excellent work!";
      }

      addChatMessage("mentor", mockResponse);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // 1.5 - 2.5 seconds delay
  };

  return (
    <AuthGuard>
      <div className="flex flex-col h-[100dvh] bg-[#09090b] text-zinc-100 font-[family-name:var(--font-geist-sans)]">
        {/* Header */}
        <div className="flex-none sticky top-0 z-50 flex items-center p-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
          <Button onClick={() => router.back()} variant="ghost" className="w-10 h-10 p-0 rounded-full border border-white/10 text-zinc-400 hover:text-white mr-3">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <Bot className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h1 className="font-bold text-base leading-tight">AI Mentor</h1>
              <p className="text-xs text-indigo-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" /> Online
              </p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 pb-32 sm:pb-36 space-y-6">
          <div className="text-center mb-8 mt-4">
            <p className="text-xs text-zinc-500 font-medium">This is the beginning of your conversation.</p>
          </div>
          
          <AnimatePresence initial={false}>
            {chatHistory.map((msg, index) => {
              const isUser = msg.role === "user";
              return (
                <motion.div
                  key={msg.id || index}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
                >
                  <div className={cn("flex gap-3 max-w-[85%]", isUser ? "flex-row-reverse" : "flex-row")}>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1",
                      isUser ? "bg-zinc-800" : "bg-indigo-500/20"
                    )}>
                      {isUser ? <User className="w-4 h-4 text-zinc-400" /> : <Bot className="w-4 h-4 text-indigo-400" />}
                    </div>
                    
                    <div className={cn(
                      "px-4 py-3 rounded-2xl text-sm leading-relaxed",
                      isUser 
                        ? "bg-indigo-600 text-white rounded-tr-sm" 
                        : "bg-zinc-900 border border-white/5 text-zinc-300 rounded-tl-sm"
                    )}>
                      {msg.content}
                      <div className={cn(
                        "text-[9px] mt-1 opacity-50",
                        isUser ? "text-right text-indigo-100" : "text-left text-zinc-400"
                      )}>
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start w-full"
            >
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-zinc-900 border border-white/5 rounded-tl-sm flex items-center gap-1.5 h-[44px]">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex-none fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-950/90 backdrop-blur-xl border-t border-white/5 pb-8 sm:pb-4 max-w-md mx-auto">
          <form onSubmit={handleSend} className="relative flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for help or advice..."
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend(e);
                }
              }}
              className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-zinc-500 resize-none max-h-32"
              style={{ minHeight: "52px" }}
            />
            <Button 
              type="submit" 
              disabled={!input.trim() || isTyping}
              className={cn(
                "absolute right-2 bottom-2 w-9 h-9 p-0 rounded-xl transition-all shadow-none",
                input.trim() ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-zinc-800 text-zinc-500"
              )}
            >
              {isTyping ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4 ml-0.5" />}
            </Button>
          </form>
          <p className="text-[10px] text-center text-zinc-500 mt-2">
            AI can make mistakes. Check your terminal output.
          </p>
        </div>
      </div>
    </AuthGuard>
  );
}
