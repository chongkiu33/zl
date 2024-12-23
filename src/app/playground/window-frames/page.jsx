"use client";
import styles from "../pg.module.css";
import Image from "next/image";
import Link from "next/link";
import TextSplitter from "../../components/TextSplitter/TextSplitter";
import ProjectTags from "../../components/ProjectTag/ProjectTag";
import * as THREE from "three";
import { OrbitControls , useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React from 'react'
import Model from "../../components/Model/Model";
import { Suspense } from "react";

function Model139(props) {
  const { nodes, materials } = useGLTF('/window/139.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['139001'].geometry}
        material={materials.wood}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
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

      <div className={styles.spChapter}>
        <div className={styles.spChapterTitle}>Modeling</div>
        <div className={styles.spChapterText}>
          <Model objPath="/window/138.gltf" />


         <Canvas camera={{ position: [0, 0, 25] }} style={{ height: "500px",width: "100%" }} >
            <Suspense fallback={null}>
            <ambientLight intensity={4} />
            <directionalLight position={[10, 10, 10]} />

            <Model139 position={[-2, 0, 0]} />
            
            <OrbitControls enableZoom={false}  />
            </Suspense>
          </Canvas>

          
        </div>
      </div>

      <div className="bottomspace"></div>
    </div>
  );
};

export default Page;
