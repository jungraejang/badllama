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
    <div className="flex p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSend();
        }}
        className="flex-grow p-2 border rounded text-black  "
        placeholder="Type your message..."
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:scale-95 transition-all duration-200"
      >
        Send
      </button>
    </div>
  );
};

export default InputBar;
