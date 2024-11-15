'use client'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react";
import { PoeticModeProvider } from './contexts/PoeticModeContext'
import {TagProvider} from './contexts/TagContext'
import { LayoutProvider } from './contexts/LayoutContext'



const PageContent = ({ pathname, children }) => {
  const [screenHeight, setScreenHeight] = useState(900);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence mode="wait">
    <motion.div
      key={pathname}
      initial={{ 
        opacity: 0, y: screenHeight }}
      animate={{ 
        opacity: 1, 
        y: 0 
      }}
      exit={{ 
        opacity: 0,
        y: -screenHeight
      }}
      transition={{
        duration: 0.8,
        ease: [0.645, 0.045, 0.355, 1.000]
      }}
      style={{
        position: 'absolute',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {children}
    </motion.div>
    </AnimatePresence>
  );
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
 

  return (
    <html lang="en">
      <body>
      <PoeticModeProvider>
        <Navbar pathname={pathname} />
        <Rightbar className="rightbar" />
        <TagProvider>
        <LayoutProvider>
        <main style={{
          position: 'relative',
          minHeight: '100vh',
          overflowX: 'hidden'
        }}>
          
            <>
              {children}
            </>
          
        </main>
        </LayoutProvider>
        </TagProvider>
        </PoeticModeProvider>
      </body>
    </html>
  );
}