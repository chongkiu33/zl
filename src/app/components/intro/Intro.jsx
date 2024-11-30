import styles from './intro.module.css';
import {useRef} from "react";
import { motion } from 'framer-motion';
import SlideInFromBtn from '../animation/SlideInFromBtn'
import TextAnimation from '../animation/TextAnimation'

const Intro = () => {
    const introRef = useRef(null);

    const changeTextShadow = (e) => {
        const { clientX, clientY } = e;
        const offsetX = (clientX - (window.innerWidth/2))/ 25; // 根据鼠标位置调整偏移量
        const offsetY = (clientY - (window.innerHeight/2))/ 25;
        introRef.current.style.translate = `${offsetX}px ${offsetY}px`;
      };

    return(
      
        <>
        <div className={styles.svgcontainer}>
          <svg className={styles.svgpath1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.29 216.7">
          <motion.path 
            d="m5.29,7.89c32.97,33.71,60.07,44.95,75.27,56.64s-8.78,21.17,16.95,36.37c25.73,15.2,19.19-1.23,37.9,18.65s15.58,23.47,35.46,28.14c19.88,4.68,13.23,8.39,33.11,14.24s33.79,4.6,47.82,11.62c14.03,7.02,3.33,14.87,34.9,20.71,31.57,5.85,41.31-8.9,70.54,10.98"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
            />
            <motion.path   
            d="m86.34,68.99c8.16,9.31,3.43,4.4,17.46,4.4s7.64-5.34,19.81,4.01c12.17,9.35,18.77,31.36,24.62,31.36s12.86,5.69,24.56,5.69,9.35,4.64,24.56,4.64-15.2-10.25,21.05-10.25,17.99,1.18,44.08,1.18-3.72,8.03,32.82,6.86,32.07-20.48,51.67-18.73,8.35,13.92,23.55,20.93c15.2,7.02,20.79,15.72,37.16,21.57s19.37,9.46,29.89,16.48"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
            
            />
          </svg>

          <svg className={styles.svgpath2}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364.59 151.55">
            <motion.path 
            d="m8.09,9.53s37.39,7.98,44.87,7.98,2.72-3.99,14.82-3.99,29.3,11.41,39.02,11.41-1.5-5.7,10.47-5.13,20.19,15.97,32.9,15.97,22.4-1.71,31.02,0,1.14,13.69,14.6,13.69,32.16-3.99,38.89-3.99h11.22c9.72,0,18.7,13.12,23.93,13.12s17.95-1.14,32.53,0,16.08,5.13,27.3,14.26c11.22,9.13,16.45,12.55,16.45,27.95s5.98,43.89,5.98,50.75"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            />
            <motion.path 
            d="m166.63,36.34s3.74,3.42,8.23,5.7,8.97,10.27,13.46,10.27,7.48-2.85,7.48,4.56v7.41c0,5.13-2.99,10.84-4.49,15.4s2.24-9.7-1.5,6.84c-3.74,16.54-3.74,7.41-3.74,16.54s1.5-2.85-.75,10.27-1.5,3.99-2.24,14.26-14.21,10.84-14.96,13.12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
            />

            <path />
          </svg>

          <svg className={styles.svgpath3}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433.82 154.18">
          <motion.path   
            d="m426.77,2.89s-15.89,11.49-22.49,15.19-5.82,9.85-12.41,9.85-15.12,3.28-15.12,3.28c0,0-17.06,18.47-22.1,20.52s-8.53,4.92-8.53,4.92c0,0-16.28-6.57-25.59-6.57s-24.81,2.05-24.81,2.05c0,0,.78.41-4.26,2.46s-7.75,2.46-9.3,5.75-3.1,10.67-8.53,13.54c-5.43,2.87-5.04,4.1-9.69,6.57s-5.43,2.46-13.96,2.05-58.15.2-58.15.2h-22.49l-40.32,7.18s-2.33-3.69-16.28-3.69-7.75-6.98-18.61,3.69-17.45,11.08-28.3,9.85-29.66-7.8-60.87,25.45"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            />

            <motion.path   
            d="m227.88,82.39s2.19-2.28-2.43,6.74c-4.62,9.02-6.02,7.73-9.58,11.34s-4.78,4.12-9.16,9.79c-4.38,5.67-6.57,9.02-6.57,9.02,0,0-17.03,2.83-19.22,3.86s-5.35,10.56-7.54,12.11-4.62,3.09-8.03,3.09-7.06.77-9.49,1.29-1.22,3.86-3.16,4.64-13.38,2.32-17.52,2.32-1.46-1.55-5.35-1.55-12.17.77-14.11,1.55-1.7-3.35-3.41-3.35-8.27,7.21-8.27,7.21"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
            />
           
            
          </svg>


        </div>

        <div 
        ref={introRef}
         onMouseMove={changeTextShadow}
         className={styles.intro}
         >
          <div className={styles.text} >
            <SlideInFromBtn delay={0.1}>
            <span className={styles.block}><p>Zhuolin </p><p className={styles.subb}><TextAnimation text="Digital Accessibility" /></p></span>
            <span> Li is a student who engaged </span></SlideInFromBtn><SlideInFromBtn delay={0.2}><span className={styles.block}><p style={{marginRight: "3vw"}}> in </p><p className={styles.subb}><TextAnimation text="Material" /></p></span> 
            <span className={styles.block}><p style={{marginRight: "3vw"}}> innovative</p><p className={styles.subb}><TextAnimation text="Open web" /></p></span> 
            research to seek <span className={styles.block}><p>creative</p><p className={styles.subb}><TextAnimation text="Artificial" /></p></span> computational <span className={styles.block}><p>approaches</p>
            <p className={styles.subbup}><TextAnimation text="Window" /></p></span></SlideInFromBtn>
            <SlideInFromBtn delay={0.3}>
             
             to <span className={styles.block}><p>narration</p><p className={styles.subbup}><TextAnimation text="language" /></p>.</span></SlideInFromBtn>
          </div>


          </div>

        </>  

        
    )
}
export default Intro;