import React from "react";
import { AbsoluteFill } from "remotion";
import { ConnectAnimation } from "./ConnectAnimation";
export const QRCodeVideo: React.FC = () => {
  return (
    <AbsoluteFill className="bg-gray-100 h-full w-full flex items-center justify-center">
      <div
        className="absolute h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />
      <ConnectAnimation />
    </AbsoluteFill>
  );
};
