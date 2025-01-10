import { Input, Button } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";

const InputBar = ({ onSend }: { onSend: (message: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="fixed p-4 bottom-0 w-full bg-slate-500/30 backdrop-blur-lg border-t border-slate-400/20">
      <div className="flex gap-2 max-w-7xl mx-auto">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPressEnter={handleSend}
          placeholder="Type your message..."
          className="shadow-lg hover:shadow-xl transition-all duration-200 text-base"
          style={{
            borderRadius: "0.5rem",
            padding: "0.5rem",
            fontSize: "16px",
          }}
        />
        <motion.div whileTap={{ scale: 0.5 }}>
          <Button
            type="primary"
            onClick={handleSend}
            className="bg-slate-900 hover:bg-red-600"
            style={{ height: "100%" }}
          >
            Send
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default InputBar;
