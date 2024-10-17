import styles from './intro.module.css';
import {useRef} from "react";

const Intro = () => {
    const introRef = useRef(null);

    const changeTextShadow = (e) => {
        const { clientX, clientY } = e;
        const offsetX = (clientX - (window.innerWidth/2))/ 25; // 根据鼠标位置调整偏移量
        const offsetY = (clientY - (window.innerHeight/2))/ 25;
        introRef.current.style.textShadow = `${offsetX}px ${offsetY}px 8px rgba(0, 0, 0, 0.2)`;
      };

    return(
        <div 
         ref={introRef}
         onMouseMove={changeTextShadow}
         className={styles.intro}
         >

          <span className={styles.block}><p>Zhuolin </p><p className={styles.subb}>Navigation</p></span>
          <span> Li is a student who engaged </span>
          <span className={styles.block}><p> in</p><p className={styles.subb}>Material</p></span> <span className={styles.block}><p>innovative</p><p className={styles.subb}>Artificial</p></span> research to seek <span className={styles.block}><p>creative</p><p className={styles.subb}>Artificial</p></span> computational <span className={styles.block}><p>approaches</p><p className={styles.subbup}>Window</p></span> to <span className={styles.block}><p>narration</p><p className={styles.subbup}>language</p></span>.
          </div>
    )
}
export default Intro;