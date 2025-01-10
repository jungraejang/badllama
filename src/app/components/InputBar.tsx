import { useState } from "react";
import { motion } from "framer-motion";

const InputBar = ({ onSend }: { onSend: (message: string) => void }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <div className="flex p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        className="flex-grow p-2 rounded-lg border focus:outline-none text-black focus:ring-2 focus:ring-black focus:border-transparent shadow-lg transition-all duration-200 hover:shadow-xl"
        placeholder="Type your message..."
      />
      <motion.button
        onClick={handleSend}
        whileTap={{ scale: 0.5 }}
        className="ml-2 p-2  text-white rounded hover:bg-red-700 transition-all duration-200 shadow-xl bg-slate-900"
      >
        Send
      </motion.button>
    </div>
  );
};

export default InputBar;
