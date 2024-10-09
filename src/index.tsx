import React from "react";
import { registerRoot, Composition } from "remotion";
import { QRCodeVideo } from "./QRCodeVideo";
import "./index.css";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition id="QRCodeVideo" component={QRCodeVideo} durationInFrames={300} fps={30} width={1200} height={800} />
    </>
  );
};

registerRoot(RemotionVideo);
