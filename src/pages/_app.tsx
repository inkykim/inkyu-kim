import "@/styles/globals.css";
import "@/styles/portfolio.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ overscrollBehavior: "none" }}>
      <Component {...pageProps} />
    </div>
  );
}
