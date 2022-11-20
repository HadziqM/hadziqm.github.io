import "../styles/globals.css";
import "../styles/tailwind.css";
import Three from "../components/threebg";
import "react-vertical-timeline-component/style.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Three />
      <Component {...pageProps} />
    </>
  );
}
