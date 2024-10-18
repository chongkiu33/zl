import styles from './intro.module.css';
import {useRef} from "react";

const Intro = () => {
    const introRef = useRef(null);

    const changeTextShadow = (e) => {
        const { clientX, clientY } = e;
        const offsetX = (clientX - (window.innerWidth/2))/ 25; // 根据鼠标位置调整偏移量
        const offsetY = (clientY - (window.innerHeight/2))/ 25;
        introRef.current.style.translate = `${offsetX}px ${offsetY}px`;
      };

    return(
        <div 
        ref={introRef}
         onMouseMove={changeTextShadow}
         className={styles.intro}
         >
          <div className={styles.text} >
            <span className={styles.block}><p>Zhuolin </p><p className={styles.subb}>Navigation</p></span>
            <span> Li is a student who engaged </span>
            <span className={styles.block}><p> in</p><p className={styles.subb}>Material</p></span> <span className={styles.block}><p>innovative</p><p className={styles.subb}>Artificial</p></span> research to seek <span className={styles.block}><p>creative</p><p className={styles.subb}>Artificial</p></span> computational <span className={styles.block}><p>approaches</p><p className={styles.subbup}>Window</p></span> to <span className={styles.block}><p>narration</p><p className={styles.subbup}>language</p></span>.
          </div>

          <div className={styles.svgcontainer}>
            <svg className={styles.svgpath1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 446.29 216.7">
              <path  d="m5.29,7.89c32.97,33.71,60.07,44.95,75.27,56.64s-8.78,21.17,16.95,36.37c25.73,15.2,19.19-1.23,37.9,18.65s15.58,23.47,35.46,28.14c19.88,4.68,13.23,8.39,33.11,14.24s33.79,4.6,47.82,11.62c14.03,7.02,3.33,14.87,34.9,20.71,31.57,5.85,41.31-8.9,70.54,10.98"/>
              <path  d="m86.34,68.99c8.16,9.31,3.43,4.4,17.46,4.4s7.64-5.34,19.81,4.01c12.17,9.35,18.77,31.36,24.62,31.36s12.86,5.69,24.56,5.69,9.35,4.64,24.56,4.64-15.2-10.25,21.05-10.25,17.99,1.18,44.08,1.18-3.72,8.03,32.82,6.86,32.07-20.48,51.67-18.73,8.35,13.92,23.55,20.93c15.2,7.02,20.79,15.72,37.16,21.57s19.37,9.46,29.89,16.48"/>
            </svg>

            <svg className={styles.svgpath2}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 364.59 151.55">
 
              <path  d="m8.09,9.53s37.39,7.98,44.87,7.98,2.72-3.99,14.82-3.99,29.3,11.41,39.02,11.41-1.5-5.7,10.47-5.13,20.19,15.97,32.9,15.97,22.4-1.71,31.02,0,1.14,13.69,14.6,13.69,32.16-3.99,38.89-3.99h11.22c9.72,0,18.7,13.12,23.93,13.12s17.95-1.14,32.53,0,16.08,5.13,27.3,14.26c11.22,9.13,16.45,12.55,16.45,27.95s5.98,43.89,5.98,50.75"/>
              <path d="m166.63,36.34s3.74,3.42,8.23,5.7,8.97,10.27,13.46,10.27,7.48-2.85,7.48,4.56v7.41c0,5.13-2.99,10.84-4.49,15.4s2.24-9.7-1.5,6.84c-3.74,16.54-3.74,7.41-3.74,16.54s1.5-2.85-.75,10.27-1.5,3.99-2.24,14.26-14.21,10.84-14.96,13.12"/>
            </svg>

            <svg className={styles.svgpath3}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433.82 154.18">
  
              <path  d="m20.75,124.07s14.82-17.07,30.1-21.98,25.44-1.78,25.44-1.78c0,0,4.51,4,15.75,0s6.25-12,19.25-12,9,2,24,2-19,4,15,0,8-4,34-4-1,1,26,0c20.24-.75,17.63-.69,21.51-1.12,1.3-.15,3.32-.35,7.16-.65,15.33-1.22,14.66,6.22,22,0s-1.66,3.78,10.34-8.22-2-6,12-12-3-6,14-6-16,1,17,0,12,15,33-1,13-14,23-17,3,0,10-3,22-17,31-21"/>
              <path  d="m112.29,146.31c19-15,0,0,17-4s0,0,18,0,6-6,15-6,1,0,8-1,4-1,9-8,4-4,16-7,2,0,10.68-9.5,12.32-9.5,19.32-18.5c0,0-.99-6.25,6.51-7.12"/>
            </svg>


          </div>


          </div>
    )
}
export default Intro;