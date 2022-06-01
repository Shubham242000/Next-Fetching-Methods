import "../styles/globals.css";
import { ContextFunction } from "../context/Context";
import Link from "next/link";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ContextFunction>
      <Navbar />
      <Component {...pageProps} />
    </ContextFunction>
  );
}

export default MyApp;
