'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";
import Intro from "./components/intro/Intro";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
        router.push("/works");
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
}, [router]);

  return (
    <div className={styles.container}>
          
          <Intro />
          
    </div>
  );
}
