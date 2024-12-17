'use client'
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react";
import { PoeticModeProvider } from './contexts/PoeticModeContext'
import { LoadingProvider , useLoading} from "./contexts/LoadingContext"; 
import {TagProvider} from './contexts/TagContext'
import { LayoutProvider } from './contexts/LayoutContext'
import { Suspense } from 'react'
import Loading from "./components/Loading/Loading"; 




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


const Mainpage =({children ,pathname}) =>{
  const { isLoading, setIsLoading } = useLoading();


  useEffect(() => {
    let loadingTimer;


   

    return () => {
      clearTimeout(loadingTimer); // 清理定时器
    };
  }, [pathname]);

  return(
    <>
    {isLoading && <Loading />}
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
    </>
  )

}

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  
 
  return (
    <html lang="en">
      <body>
      <Suspense fallback={<div>Loading...</div>}>
        <PoeticModeProvider>
        <LoadingProvider pathname={pathname}>
            <Mainpage pathname={pathname}>{children}</Mainpage>
         
          </LoadingProvider>
        </PoeticModeProvider>
        </Suspense>
      </body>
    </html>
  );
}