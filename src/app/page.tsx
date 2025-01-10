// app/page.tsx
"use client";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Chat />
    </div>
  );
};

export default Home;
