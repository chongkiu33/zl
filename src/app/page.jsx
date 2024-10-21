'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";
import Intro from "./components/intro/Intro";


export default function Home() {


  return (
    <div className={styles.container}>
          
          <Intro />
          
    </div>
  );
}
