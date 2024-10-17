import React from "react";
import { registerRoot, Composition } from "remotion";
import { QRCodeVideo as v1 } from "./QRCodeVideo";
import { QRCodeVideo as v2 } from "./QRCodeVideov2";
import "./index.css";

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition id="v1" component={v1} durationInFrames={300} fps={30} width={1200} height={800} />
      <Composition id="v2" component={v2} durationInFrames={300} fps={30} width={1200} height={800} />
    </>
  );
};

registerRoot(RemotionVideo);
