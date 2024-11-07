'use client'
import styles from './about.module.css'
import { useEffect, useState } from "react";
import React from 'react';

import { useCollapse } from 'react-collapsed';

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
                <div>
                Zhuolin Li is a senior student and technician with a strong foundation in 3D animation, visual design, and physical fabrication techniques, including robotics. She is also actively engaged in innovative research to seek creative computational approaches to narration.
                </div>

                <div>
                After her previous research in implementing a pedagogical machine learning library (ml5.js) and building a therapeutic accompanying robot, she is aiming to seek to combine embodied experiences with scientific technology.
                </div>

                <div>
                New York, NY<br/>    
                (646) 753-4259 <br/>                                     
                zl4241@nyu.edu <br/>  
                </div>

                </div>
                <div className={styles.introimage}>XXXX</div>
            </div>

            </div>


            <div>
            <button className={styles.titleButton}>Education</button>
            <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
            </svg>

                <div className={styles.introtext}>
                    
                        <div className={styles.experience}>
                            <div className={styles.header}>
                            <div><strong>New York University</strong>, New York, NU and Shanghai, China </div>
                            <span className={styles.date}>Sept 2021 - May 2025</span>
                            </div>
                            <ul className={styles.description}>
                            <li>Bachelor of Science in Mathematics and Interactive Media Arts</li>
                            <li>Overall GPA: 3.91</li>
                            </ul>
                        </div>  
                </div>
             </div> 

           

 
            <div>
            <button className={styles.titleButton}>Work Experience</button>
            <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
            </svg>

                <div className={styles.introtext}>
                    
                        <div className={styles.experience}>
                            <div className={styles.header}>
                            <div>Full Stack Website Developer, NYU Interactive Media Arts Department</div>
                            <span className={styles.date}>Mar. 2024 – present</span>
                            </div>
                            <ul className={styles.description}>
                            <li>Designed and developed 15 webpages for the Natural Material Lab in Interactive Media Arts department</li>
                            </ul>
                        </div>  

                        <div className={styles.experience}>
                            <div className={styles.header}>
                            <div></div>
                            <span className={styles.date}></span>
                            </div>
                            <ul className={styles.description}>
                            <li></li>
                            </ul>
                        </div> 

                        
                </div>

            </div> 

            

        </div>

        </>
    )
}

export default AboutPage;

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
return (
    <div className="collapsible">
        <div className={styles.header} {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className={styles.content}>
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
    );
}