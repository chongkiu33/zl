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
import { Suspense } from 'react'



const PageContent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.1
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </motion.div>
  );
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
 
  return (
    <html lang="en">
      <body>
      <Suspense fallback={<div>Loading...</div>}>
        <PoeticModeProvider>
          <Navbar pathname={pathname} />
          <Rightbar className="rightbar" />
          <TagProvider>
            <LayoutProvider>
             
                <motion.main 
            style={{
              position: 'relative',
              minHeight: '100vh',
              overflowX: 'hidden'
            }}
          >
            <AnimatePresence mode="popLayout">
              
                
                  <PageContent pathname={pathname} key={pathname}>
                    {children}
                  </PageContent>
                  </AnimatePresence>
                  </motion.main>
                  
            </LayoutProvider>
          </TagProvider>
        </PoeticModeProvider>
        </Suspense>
      </body>
    </html>
  );
}