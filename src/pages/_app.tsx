import "@/styles/globals.css";
import "@/styles/portfolio.css";
import type { AppProps } from "next/app";
import { GlobalCanvas } from "@/components/ui/global-canvas";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ overscrollBehavior: "none", position: "relative", minHeight: "100vh", background: "#000" }}>
      <GlobalCanvas />
      <div style={{ position: "relative", zIndex: 30 }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
