
import React, { useState, useEffect } from "react";
import styles from "./Loading.module.css";
import TextAnimation from "../animation/TextAnimation";
import SlideInFromBtn from "../animation/SlideInFromBtn";

const LoadingText = [
    'I have a notebook about computer-term explanations, like why we use "surfing on" the internet.', 
    "I always develop a story before bed, for example, how a Mayan priestess governs her people through mazes.", 
    "I enjoy reading Reddit's NoSleep channel, especially about ritual games, and I have written an essay comparing Chinese and Western Ouija boards.", 
    "Without altering my appearance, I've been mistaken as a Jewish or Latin in New York.", 
    "I predicted Makoto Shinkai’s success after seeing his animation in Kindergarten.",
    "I lost a watch every year after entering high school, some of them are found after months or years, and those watches all ran 2 minutes faster.",
    "Although nearly drowning at three, swimming become my best sport now."
];


const Loading = () => {
    


  return (
    <div className={styles.loadingContainer} >
        <div className={styles.loadingText}>
      Do you know  that... ? <br/>
     
      <div style={{fontWeight:"400"}}>{LoadingText[Math.floor(Math.random() * LoadingText.length)]}</div>
      
      </div>
    </div>
  );
};

export default Loading;
