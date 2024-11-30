'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";
import Intro from "../components/Intro/Intro";
import { useRouter } from "next/navigation";
import {useState, useEffect } from "react";


export default function Home() {
  const router = useRouter();
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanScroll(true);
    }, 2000);

    return () => clearTimeout(timer);
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
          
          <Intro />
          
    </div>
  );
}
