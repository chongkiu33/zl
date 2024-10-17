'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";


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
          <div className={styles.intro}>
          <span className={styles.block}><p>Zhuolin </p><p className={styles.subb}>Navigation</p></span>
          <span> Li is a student who engaged </span>
          <span className={styles.block}><p> in</p><p className={styles.subb}>Material</p></span> <span className={styles.block}><p>innovative</p><p className={styles.subb}>Artificial</p></span> research to seek <span className={styles.block}><p>creative</p><p className={styles.subb}>Artificial</p></span> computational <span className={styles.block}><p>approaches</p><p className={styles.subbup}>Window</p></span> to <span className={styles.block}><p>narration</p><p className={styles.subbup}>language</p></span>.
          </div>
        {/* </motion.div> */}
      </main>
    </>
  );
}
