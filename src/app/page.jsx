'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {motion} from "framer-motion";

export default function Home() {
  return (
    <>
      <main className="main">
        <motion.div>
          Hello world!
        </motion.div>
      </main>
    </>
  );
}
