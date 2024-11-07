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
                            <div>Full Stack Website Developer,<strong>NYU Interactive Media Arts Department</strong> </div>
                            <span className={styles.date}>Mar. 2024 – present</span>
                            </div>
                            <ul className={styles.description}>
                            <li>Designed and developed 15 webpages for the Natural Material Lab in Interactive Media Arts department</li>
                            </ul>
                        </div>  

                        <div className={styles.experience}>
                            <div className={styles.header}>
                            <div>Network Assistant, <strong>NYU Interactive Telecommunication Program Department</strong> </div>
                            <span className={styles.date}>Sept. 2023– Aug. 2024</span>
                            </div>
                            <ul className={styles.description}>
                            <li>Solvedover 1500 digital accessibility issues, standardizing code structure and enhancing readability</li>
                            <li>Created a problem-solving manual based on different kinds of accessibility issues</li>
                            </ul>
                        </div> 

                        <div className={styles.experience}>
                            <div className={styles.header}>
                            <div>Software Engineer, <strong>ml5.js</strong>, hybrid</div>
                            <span className={styles.date}>Mar. 2023– Aug. 2023</span>
                            </div>
                            <ul className={styles.description}>
                            Cooperated with Professors Daniel Shiffman and Gottfried Haider
                            <li>Updatedthe face-landmark-detection model for pedagogical purposes in ml5.js, a machine learning library</li>
                            <li>Restructured over 300 output landmark points to improve user-friendliness, providing creative usage examples</li>
                            </ul>
                        </div> 

                        <div className={styles.experience}>
                            <div className={styles.header}>
                                
                            <div>Graphic Designer, <strong>Circle2 Boutique</strong></div>
                            <span className={styles.date}>Dec. 2021– Dec. 2022</span>
                            </div>
                            <ul className={styles.description}>
                            <li>Designed logos, seasonal posters, and commercials for the boutique Circle2 to boost its sales to over $20,000</li>
                            </ul>
                        </div> 

                        
                </div>

            </div> 



            <div>
            <button className={styles.titleButton}>PROJECTS</button>
            <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
            </svg>
                <div className={styles.experience}>
                                <div className={styles.header}>
                                <div>Graph Theory and Maze Generating and Solving Algorithms, <strong>NYU Shanghai</strong></div>
                                <span className={styles.date}>Fall 2024– present</span>
                                </div>
                                <ul className={styles.description}>
                                Cooperated with Professor Roberto Fernandez
                                <li>Researched relationships between graph theory and maze-generating and solving algorithms</li>
                                <li>Aimedtodevelop a 3D maze generating algorithm</li>
                                </ul>
                </div> 
                <div className={styles.experience}>
                                <div className={styles.header}>
                                <div>Artificial Friend, <strong>NYU Shanghai</strong></div>
                                <span className={styles.date}>Fall 2022 – Spring 2023</span>
                                </div>
                                <ul className={styles.description}>
                                <li>Exhibited at the First China Beijing Animation Festival, and received over 100,000 visitors</li>
                                <li>Developed an artificial companion that responds to clients' emotions and writes responses using robotic arms</li>
                                </ul>
                </div> 
                
             </div> 


             <div>
            <button className={styles.titleButton}>EXTRACURRICULAR</button>
            <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
            </svg>
                <div className={styles.experience}>
                                <div className={styles.header}>
                                <div>Video Editor,<strong> A Free Bird Organization</strong></div>
                                <span className={styles.date}>May. 2024 – Aug. 2024</span>
                                </div>
                                <ul className={styles.description}>
                                
                                <li>Volunteered for over 250 hours to edit a video for broadcasting art therapy for kids suffering from cancer</li>
                           
                                </ul>
                </div> 
                <div className={styles.experience}>
                                <div className={styles.header}>
                                <div>Curatorial Team Leader, <strong>Catcher’s Curation</strong></div>
                                <span className={styles.date}>Mar. 2023– Nov. 2023</span>
                                </div>
                                <ul className={styles.description}>
                                
                                <li>Collaborated with students from the School of Visual Arts, Pratt, and Parsons to curate the exhibition Tales of Abandoned, featuring over 170 artworks left behind at schools after the semester, receiving over 300 visitors</li>
                                <li>Oversawcuratorial aspects, including drafting and developing proposals, brochures, and wall texts</li>
                                </ul>
                </div> 
               
                
             </div> 


             <div>
            <button className={styles.titleButton}>SKILL</button>
            <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
            </svg>
                <div className={styles.experience}>
                                <div className={styles.header}>
                                <div><strong>Coding Languages:</strong> CSS, HTML, Java, JavaScript, Python, SQL</div>
                               
                                </div>
                                <div className={styles.header}>
                                <div><strong>Design and Development Software:</strong> Adobe Suite, Autodesk Maya, AutoCAD, Unity</div>
                               
                                </div>
                             
                 </div>
               
                
             </div> 



             <div>
            <button className={styles.titleButton}>AWARDS</button>
            <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
            </svg>
                <div className={styles.experience}>
                                <div className={styles.header}>
                                <div>Temple University Minatare Stupa Design Contest, <strong>Temple University</strong>, 3rd Winner</div>
                                <span className={styles.date}></span>
                                </div>
                                <ul className={styles.description}>
                                
                                <li>Designed, 3D modeled the stupa, and wrote an essay based on “without relying on anything” in Diamond Sutra</li>
                           
                                </ul>
                </div> 
                
               
                
             </div> 

             <div className='bottomspace'></div>

             
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