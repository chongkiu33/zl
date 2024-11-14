import styles from "./index.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { usePoeticMode } from '../../contexts/PoeticModeContext'
import Draggable from "react-draggable";
import { useWordContext } from '../../contexts/WordContext';

const Index = ({pathname}) => {
    const { isPoeticMode } = usePoeticMode();
    const [wordsWithPositions, setWordsWithPositions] = useState([]);
    const indexGroupRef = useRef(null);
    const [wordsWithRandomPositions, setWordsWithRandomPositions] = useState([]);

    const Title = [
        "Am I too much?", 
        "Enhanced Memory", 
        "ChatGpt as Tarot Reader", 
        "“Listen! Pied Piper is playing”", 
        "Mirror"
    ];

    useEffect(() => {
        // 获取每个标题中的单词并为它们生成随机位置
        const words = Title.flatMap(title => {
            return title.split(' ').map(word => {
                // 生成随机的 marginTop 和 marginLeft
                const randomMarginTop = `${Math.random(0,0.9) * 100}vh`; // 随机的 marginTop（百分比）
                const randomMarginLeft = `${Math.random(0,0.9) * 35}vw`; // 随机的 marginLeft（百分比）
                return { word, randomMarginTop, randomMarginLeft };
            });
        });
        setWordsWithRandomPositions(words);
    }, []);
    



    return (
        <div className={styles.container}>
            <div className={`${styles.poeticContainer} ${isPoeticMode ? styles.poeticMode : ''}`}>
            {wordsWithRandomPositions.map((item, index) => (
                <Draggable key={`draggable-${index}`}>
                <span
                    key={index}
                    style={{
                        marginTop: item.randomMarginTop,
                        marginLeft: item.randomMarginLeft,
                    }}
                >
                    {item.word}
                </span>
                </Draggable>
            ))}
        </div>
            <div className={`${isPoeticMode ? styles.poeticline : styles.line2}`}></div>
            <div >
                <div className={styles.shapeOutside}>
                    <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253 1126">
                        <path   
                            className={styles.path} 
                            d="M252.6,8.5c0,0-11.8,13.8-17.7,21.7s-27.6,29.6-35.5,35.5c-7.9,5.9-19.7,23.6-25.6,29.6s-9.9,9.9-13.8,15.8
                            s-15.8,25.6-17.7,33.5s-2,23.6,0,29.6c0,0,4.6,12.5,8.6,20.5s0,25-4,29s-10,9-22,12s-19,11-22,15s-18,30-22,37s-17,38-19,42
                            s-2,10.8,0,13.9s7,9.1,7,15.1s-2,12-5,16c-3,4-8,10-9,13s0,13,1,17s11,28,13,31s7,5,15,3s19-7,24-3s6,13,4,19s-6,20-1,26s14,11,23,9
                            s26-6,34,0s19,18,23,26s9,32,13,39s9,16,9,18s-1,4-5,5s-6,6-9,16s-1,20-3,28s-2,14-6,22s-7,23-9,30s-7,22-14,31s-24,36-29,43
                            s-12,21-16,30s-6,13-10,18s-8,11-8,22s4,16,9,23s14,15,14,21s1,20-3,29s-13,15-18,23s-10,17-15,21s-6,8-17,13s-28,18-37,30
                            s-16,25-18,35s-5,13,3,21s12,11,12,18s-2,23-4,28s-4,20-4,27"
                        />
                    </svg>
                </div>
                    <div className={styles.linkgroup}>
                        
                        <ProjectGroup 
                            pathname={pathname}
                            title="Computational Narratives" 
                            projects={["Am I too much?", "Enhanced Memory", "ChatGpt as Tarot Reader", "“Listen! Pied Piper is playing”", "Mirror"]} 
                        />

                    

                        <ProjectGroup 
                            pathname={pathname}
                            title="Bio Material Research" 
                            projects={[ "Seaweed hairband", "Cocoon"]} 

                        />

                        <ProjectGroup 
                            pathname={pathname}
                            title="Typography Experiment" 
                            projects={["Yong", "Gui", "Mayan Language", "Sound Visualization"]} 

                        />

                        <ProjectGroup 
                            pathname={pathname}
                            title="Digital Heritage" 
                            projects={["Stupa", "window frames"]} 
   
                        />

                        <ProjectGroup 
                            pathname={pathname}
                            title="Film and Animation" 
                            projects={["Solidarity", "Qilin"]} 
   
                        />
                    </div>
            </div>
        </div>
    );
};


export default Index;


const ProjectGroup = ({ title, projects, getWordsWithPositions ,pathname}) => {
    
    const isActive = (project) => {
        const projectSlug = project.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        return pathname === `/playground/${projectSlug}`;
    };

    return (
        <div className={styles.projectgroup}>
        <div className={styles.projectLink}>
          {title} <div className={styles.point}></div>
        </div>
        {projects.map((project, index) => (
          <Link
            key={index}
            className={`${styles.projectLink} ${isActive(project) ? styles.active : ''}`}
            href={`/playground/${project.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
          >
            {project}
          </Link>
        ))}
      </div>
    );
};