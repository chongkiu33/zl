'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="main">
        <motion.div
        initial={{opacity: 0,y:-50}}
        animate={{opacity: 1,y:0}}
        exit={{opacity: 0,y:50}}
        transition={{duration: 1}}
        >
          Hello world!
        </motion.div>
      </main>
    </>
  );
}
