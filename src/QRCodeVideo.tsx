import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, interpolate, spring } from "remotion";
import { QRCodeSVG } from "qrcode.react";
import { Scan, Check } from "lucide-react";
import Avatar, { genConfig } from "react-nice-avatar";

const CustomSmartphone: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 250 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="238" height="488" rx="30" fill="#1F2937" stroke="white" strokeWidth="1" />
    <path d="M0 110H6V130H0V110Z" fill="#1F2937" />
    <path d="M0 150H6V190H0V150Z" fill="#1F2937" />
    <path d="M0 210H6V250H0V210Z" fill="#1F2937" />
    <path d="M244 180H250V220H244V180Z" fill="#1F2937" />
    <rect x="90" y="15" width="70" height="15" rx="7.5" fill="#374151" />
    <circle cx="125" cy="460" r="20" stroke="white" strokeWidth="2" />
  </svg>
);

const ScanningRays: React.FC = () => {
  const frame = useCurrentFrame();
  const rayOpacity = interpolate(frame % 60, [0, 30, 60], [0, 1, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
      <rect x="40" y="34" width="19" height="18" rx="2" stroke="#4299e1" fill="#4299e1" strokeWidth="1" opacity={rayOpacity} />
      <line x1="41" y1="35" x2="90" y2="68" stroke="#4299e1" strokeWidth="1" opacity={rayOpacity} strokeLinecap="round" />
      <line x1="58" y1="35" x2="90" y2="68" stroke="#4299e1" strokeWidth="1" opacity={rayOpacity} strokeLinecap="round" />
      <line x1="41" y1="51" x2="90" y2="68" stroke="#4299e1" strokeWidth="1" opacity={rayOpacity} strokeLinecap="round" />
      <line x1="58" y1="51" x2="90" y2="68" stroke="#4299e1" strokeWidth="1" opacity={rayOpacity} strokeLinecap="round" />
    </svg>
  );
};

const config = genConfig("test");

export const QRCodeVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const qrOpacity = interpolate(frame, [0, 30, 180, 210], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  const enter = spring({
    frame: frame - 60,
    from: -100,
    to: 0,
    fps: 30,
    config: {
      damping: 200,
    },
  });

  const exit = spring({
    fps: 30,
    from: 0,
    to: -100,
    config: {
      damping: 50,
    },
    durationInFrames: 60,
    delay: 240,
    frame,
  });

  const phonePosition = enter + exit;

  const promptOpacity = interpolate(frame, [120, 150, 180, 210], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const checkScale = spring({
    frame: frame - 210,
    from: 0,
    to: 1,
    fps: 30,
    config: {
      mass: 0.5,
      damping: 10,
    },
  });

  const phoneCheckScale = spring({
    frame: frame - 180,
    from: 0,
    to: 1,
    fps: 30,
    config: {
      mass: 0.5,
      damping: 10,
    },
  });

  const buttonClickScale = spring({
    frame: frame - 170,
    from: 1,
    to: 0.9,
    fps: 30,
    durationInFrames: 10,
    config: {
      mass: 0.5,
      damping: 10,
    },
  });

  const buttonClickColor = interpolate(frame, [170, 175, 180], [59, 37, 59], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill className="bg-gray-100 h-full w-full flex items-center justify-center">
      <div
        className="absolute h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      />

      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="relative w-full h-full max-w-[1000px] max-h-[700px]">
        <div className="absolute top-[25%] left-[29%] right-[30%] h-[38%] bg-black overflow-hidden rounded-[5px]">
          <Sequence from={0} durationInFrames={210}>
            <div className="flex flex-col w-full items-center justify-center">
              <div className="m-auto p-4 bg-white shadow-lg rounded-3xl" style={{ opacity: qrOpacity }}>
                <QRCodeSVG value="https://go.vaultys.com" size={100} />
              </div>
              <div className="shadow-lg rounded-3xl" style={{ opacity: qrOpacity }}>
                <img className="m-auto w-1/2" src="https://lirp.cdn-website.com/139d7deb/dms3rep/multi/opt/Logo+Typographique+blanc+2+-+bouclier-240w.png" />
              </div>
            </div>
          </Sequence>

          <Sequence from={210} durationInFrames={90}>
            <div className="m-auto" style={{ transform: `scale(${checkScale})` }}>
              <div className="bg-green-500 rounded-full p-4">
                <Check className="w-24 h-24 text-white" />
              </div>
            </div>
          </Sequence>
        </div>
      </div>

      <Sequence from={60} durationInFrames={240}>
        <Sequence from={20} durationInFrames={60}>
          <ScanningRays />
        </Sequence>

        <div className="absolute right-[200px] transform translate-x-1/3" style={{ bottom: `${phonePosition}%` }}>
          <CustomSmartphone className="w-[300px] h-[300px] text-gray-800" />
          <div className="absolute top-[10%] left-[28%] right-[28%] h-[68%] bg-gray-800  flex flex-col items-center justify-center">
            <Sequence from={0} durationInFrames={60}>
              <Scan className="m-auto w-full h-full text-blue-500 mb-6" />
            </Sequence>
            <div className="h-full flex flex-col justify-end">
              <div
                className="h-full flex flex-col justify-end gap-5 items-center"
                style={{
                  opacity: promptOpacity,
                }}
              >
                <Avatar className="w-16 h-16" {...config} />
                <div
                  className="text-white px-6 py-3 rounded-lg text-lg font-semibold"
                  style={{
                    transform: `scale(${buttonClickScale})`,
                    backgroundColor: `rgb(${buttonClickColor}, ${Math.max(0, buttonClickColor - 22)}, 246)`,
                  }}
                >
                  Connect
                </div>
              </div>
            </div>
            <div
              className="absolute"
              style={{
                transform: `scale(${phoneCheckScale})`,
                opacity: phoneCheckScale,
              }}
            >
              <div className="bg-green-500 rounded-full p-3">
                <Check className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
