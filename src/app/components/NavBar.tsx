import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white p-4 shadow-lg fixed top-0 w-full z-50 h-20 overflow-hidden"
    >
      <motion.h1
        className="text-xl font-bold text-center"
        whileHover={{ scale: 1.02 }}
      >
        Bad Llama: Uncensored Chatbot😈⁉️
      </motion.h1>
    </motion.div>
  );
};

export default NavBar;
