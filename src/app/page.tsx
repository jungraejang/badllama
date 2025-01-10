// app/page.tsx
"use client";
import Chat from "./components/Chat";
import NavBar from "./components/NavBar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1">
        <Chat />
      </div>
    </div>
  );
};

export default Home;
