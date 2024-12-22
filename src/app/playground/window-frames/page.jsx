"use client";
import styles from "../pg.module.css";
import Image from "next/image";
import Link from "next/link";
import TextSplitter from "../../components/TextSplitter/TextSplitter";
import ProjectTags from "../../components/ProjectTag/ProjectTag";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useRef } from "react";

function Scene({ objPath, scale ,position}) {
        const obj = useLoader(OBJLoader, objPath); // 加载第一个模型
      
        return (
         
            <group position={position} scale={scale} rotation={[0, Math.PI / 2, 0]}>
              <primitive object={obj} />
            </group>
      
           
        );
}


function Canvas3d(objPath){
  return(
    <Canvas camera={{ position: [0, 0, 20] }} style={{ height: "500px",width: "100%" }}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 10]} />

            {/* 模型 1 */}

            <group >
            <Scene
              objPath={objPath}
              rotation={[0, Math.PI / 2, 0]}
              position={[-2, 0, 0]}
            />
           

          
            </group>

            <OrbitControls enableZoom={false}  />
          </Canvas>
  )
}

const Page = () => {




  return (
    <div>
      <div className={styles.spTitle}>Window Frames For Ancient China Pavilion</div>
      <ProjectTags projectName="Window Frames For Ancient China Pavilion" />
      <div className={styles.imgCover}>
        <Image
          style={{ objectFit: "cover" }}
          className={styles.fitimg}
          alt="mayan"
          src="/window/window.png"
          fill
        />
      </div>

      <div className={styles.spChapter}>
        <div className={styles.spChapterTitle}>About</div>
        <div className={styles.spChapterText}>
          <TextSplitter
            text={`This project remodel the window frames design in Ming Dynasty based on The Craft of Gardens(園治). This is part of Zhuolin Li’s dedication for digitalizing the cultural heritages.`}
          />
          <TextSplitter
            text={`One of the illustrations from the book The Craft of Gardens(園治)`}
          />
          <Link
            className={styles.link}
            target="_blank"
            href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://ia600703.us.archive.org/12/items/02090253.cn/02090253.cn.pdf"
          >
            Yuanzhi
          </Link>
          <Link
            className={styles.link}
            target="_blank"
            href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://ia600703.us.archive.org/12/items/02090253.cn/02090253.cn.pdf"
          >
            The digital archive
          </Link>
        </div>
      </div>

      {/* <div className={styles.spChapter}>
        <div className={styles.spChapterTitle}>Modeling</div>
        <div className={styles.spChapterText}>
          
          <Canvas3d objPath="/window/138_2.obj"/>

          <Canvas camera={{ position: [0, 0, 20] }} style={{ height: "500px",width: "100%" }} >
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 10]} />

            <group >
            <Scene
              objPath="/window/139_2.obj"
              rotation={[0, Math.PI / 2, 0]}
              position={[-2, 0, 0]}
            />
            </group>

            <OrbitControls enableZoom={false}  />
          </Canvas>
        </div>
      </div> */}

      <div className="bottomspace"></div>
    </div>
  );
};

export default Page;
