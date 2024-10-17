'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";
import Intro from "./components/intro/Intro";


export default function Home() {


  return (
    <>
      <main className="main">
        {/* <motion.div
        initial={{opacity: 0,y:-50}}
        animate={{opacity: 1,y:0}}
        exit={{opacity: 0,y:50}}
        transition={{duration: 1}}
        > */}
          <Intro />
        {/* </motion.div> */}
      </main>
    </>
  );
}
