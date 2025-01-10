import { Avatar } from "antd";
import { Comment } from "@ant-design/compatible";

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

const ChatBubble = ({ message, isUser }: ChatBubbleProps) => (
  <div className={`flex ${isUser ? "justify-end" : "justify-start"} p-2`}>
    <Comment
      avatar={
        <Avatar
          //   src={isUser ? "/user-avatar.png" : "/bot-avatar.png"}
          alt={isUser ? "User" : "BadLlama"}
        />
      }
      content={
        <p>
          {isUser ? "User" : "BadLlama"}: {message}
        </p>
      }
    />
  </div>
);

export default ChatBubble;
