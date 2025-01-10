import { Avatar } from "antd";
import { Comment } from "@ant-design/compatible";
import { motion } from "framer-motion";
interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

const ChatBubble = ({ message, isUser }: ChatBubbleProps) => (
  <motion.div
    className={`flex ${isUser ? "justify-end" : "justify-start"} py-2`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <Comment
      avatar={
        <Avatar
          src={isUser ? "/knight_jr.png" : "/bad_llama.png"}
          alt={isUser ? "User" : "BadLlama"}
        />
      }
      className={`p-2 rounded-lg shadow-xl ${
        isUser
          ? "bg-gradient-to-r from-[#0055FF] to-[#007AFF] text-white"
          : "bg-gradient-to-r from-[#E9E9EB] to-[#F5F5F5] text-black"
      }`}
      content={
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mr-2 [text-shadow:1px_1px_2px_rgba(0,0,0,0.2)]"
        >
          {message}
        </motion.p>
      }
    />
  </motion.div>
);

export default ChatBubble;
