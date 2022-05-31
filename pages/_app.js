import "../styles/globals.css";
import { ContextFunction } from "../context/Context";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <ContextFunction>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ContextFunction>
  );
}

export default MyApp;
