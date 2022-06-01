import "../styles/globals.css";
import { ContextFunction } from "../context/Context";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ContextFunction>
        <Navbar />
        <Component {...pageProps} />
      </ContextFunction>
    </SessionProvider>
  );
}

export default MyApp;
