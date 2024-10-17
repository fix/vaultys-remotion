import React from "react";
import { AbsoluteFill, staticFile } from "remotion";
import { ConnectAnimation } from "./ConnectAnimation";
export const QRCodeVideo: React.FC = () => {
  return (
    <AbsoluteFill className="h-full w-full flex items-center justify-center">
      <div className="absolute h-full w-full">
        <div className="absolute top-[130px] bottom-[130px] right-[130px] left-[130px] bg-cover bg-center" style={{ backgroundImage: "url(" + staticFile("/laptop_macbook.png") + ")" }} />
        <div className="absolute top-[180px] bottom-[200px] right-[260px] left-[250px] bg-black" />
      </div>
      yodsdfsdsfsdfsdfsdfsdf
      <ConnectAnimation />
    </AbsoluteFill>
  );
};
