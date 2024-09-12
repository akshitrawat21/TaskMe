import React from "react";
import Board from "./Board";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const CustomKanban = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 bg-black">
        <div className="h-full max-w-screen-xxl mx-auto p-4">
          <Board />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

