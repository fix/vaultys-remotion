import React from "react";
import { Player } from "@remotion/player";
import { QRCodeVideo } from "./QRCodeVideov2";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <Player
          component={QRCodeVideo}
          durationInFrames={300}
          compositionWidth={1200}
          compositionHeight={800}
          fps={30}
          style={{
            width: "100%",
            aspectRatio: "3 / 2",
          }}
          controls
        />
      </div>
    </div>
  );
};

export default App;
