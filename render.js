import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackOverride = (currentConfiguration) => currentConfiguration;

const start = async () => {
  const compositionId = "QRCodeVideo";
  const entry = "./src/index.tsx";

  console.log("Creating a Webpack bundle of the video");
  const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
    webpackOverride,
  });

  const inputProps = {};

  const comps = await getCompositions(bundleLocation, {
    inputProps,
  });

  const composition = comps.find((c) => c.id === compositionId);

  if (!composition) {
    throw new Error(`No composition with the ID ${compositionId} found.`);
  }

  const outputLocation = `out/${compositionId}2.gif`;
  console.log("Attempting to render:", outputLocation);
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "gif",
    outputLocation,
    inputProps,
  });
  console.log("Render done!");
};

start();
