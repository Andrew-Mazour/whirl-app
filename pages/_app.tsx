import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "@/components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (hasSeenWelcome) {
      setShowWelcome(false);
    }
  }, []);

  const handleDismiss = () => {
    document.getElementById("welcomeScreen")!.style.opacity = "0"; // Fade out
    setTimeout(() => {
      localStorage.setItem("hasSeenWelcome", "true");
      setShowWelcome(false);
    }, 1000); // Wait for fade effect
  };
  

  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <EditModal />
      <RegisterModal />
      <LoginModal />

      {/* Show Welcome Screen if user hasn't seen it */}
      {showWelcome ? (
        <div
          id="welcomeScreen"
          className="fixed inset-0 flex items-center justify-center bg-blue-800 text-white text-4xl md:text-6xl font-bold transition-opacity duration-1000"
          onClick={handleDismiss}
        >
          Welcome to Whirl!
        </div>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
}
