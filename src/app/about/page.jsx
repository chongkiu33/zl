'use client'
import styles from './about.module.css'
import { useEffect, useState } from "react";

const AboutPage = () => {
    const [svgWidth, setSvgWidth] = useState(0);
   


      

    return (
        <>
        <div className={styles.container}>

            <div>
             <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
             </svg>

            <div className={styles.intro}>
            
                <div className={styles.introtext}>
                Zhuolin Li is a senior student and technician with a strong foundation in 3D animation, visual design, and physical fabrication techniques, including robotics. She is also actively engaged in innovative research to seek creative computational approaches to narration.
                <br></br>
                <br></br>
                After her previous research in implementing a pedagogical machine learning library (ml5.js) and building a therapeutic accompanying robot, she is aiming to seek to combine embodied experiences with scientific technology.
                </div>
                <div className={styles.introimage}></div>
            </div>

            </div>

            <div className={styles.education}>
                <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
                </svg>
                <div className={styles.content}>
                    <div>University of Arts, Camberwell</div>
                    <div className={styles.edumajor}>Graphic Design</div>
                    <div>2023</div>
                </div>
                <div className={styles.content}>
                    <div>University of Arts, Camberwell</div>
                    <div className={styles.edumajor}>Graphic Design</div>
                    <div>2023</div>
                </div>
                
            </div>

            <div className={styles.awards}>
                <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
                </svg>
                <div className={styles.content}>
                    <div>University of Arts, Camberwell</div>
                    
                    <div>2023</div>
                </div>
                
                
            </div>
        </div>

        </>
    )
}

export default AboutPage;