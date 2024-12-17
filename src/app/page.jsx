'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";
import Intro from "./components/intro/Intro";
import { useRouter } from "next/navigation";
import {useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import { useLoading } from "./contexts/LoadingContext";


export default function Home() {
  const router = useRouter();
  const [canScroll, setCanScroll] = useState(false);
  const { isLoading, setIsLoading } = useLoading();


  useEffect(() => {
  
    let scrollTimer;

   scrollTimer = setTimeout(() => {
      setCanScroll(true); // 再等待 3 秒后允许滚动
    }, 2500); 

    return () => {
      clearTimeout(scrollTimer);
    };
  }, []);

  useEffect(() => {

    const handleScroll = () => {
      if (canScroll) {
        router.push("/works");
      }
        
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
}, [canScroll, router]);



  return (
    <div className={styles.container}>
          
          {!isLoading && <Intro />}
          
    </div>
  );
}
