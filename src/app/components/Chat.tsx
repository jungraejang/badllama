// components/Chat.tsx
"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ChatBubble from "./ChatBubble";
import LoadingSpinner from "./LoadingSpinner";
import InputBar from "./InputBar";

interface Message {
  text: string;
  isUser: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    const userMessage = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.LLM_BASE_URL}/chat/completions`,
        {
          model: "dolphin3.0-llama3.1-8b@q2_k",
          messages: [
            { role: "user", content: text },
            {
              role: "system",
              content:
                "You are a bad llama. You will answer to questions but also sometimes mean and sarcastic.",
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        text: response.data.choices[0].message.content,
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex-grow overflow-y-auto p-4">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ChatBubble message={msg.text} isUser={msg.isUser} />
            </motion.div>
          ))}
        </AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <InputBar onSend={sendMessage} />
    </div>
  );
};

export default Chat;
