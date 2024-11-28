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
import { useRef } from "react";

function Scene({ objPath, position, scale, rotation, color = "grey" }) {
  const objRef = useRef();
  const obj = useLoader(OBJLoader, objPath);

  // 为模型添加颜色材质
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({ color });
    }
  });

  // 添加旋转动画
//   useFrame(() => {
//     if (objRef.current) {
//       objRef.current.rotation.y += 0.01; // 每帧绕 Y 轴旋转
//     }
//   });

  return (
    <group ref={objRef} position={position} scale={scale} rotation={rotation}>
      <primitive object={obj} />
    </group>
  );
}

const Page = () => {

const groupRef = useRef();

useFrame(() => {
        if (groupRef.current) {
          groupRef.current.rotation.y += 0.01; // Rotate the entire group around the world Y-axis
        }
});


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
          <Canvas camera={{ position: [0, 0, 10] }} style={{ height: "500px" }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />

            {/* 模型 1 */}

            <group ref={groupRef}>
            <Scene
              objPath="/window/138.obj"
              position={[0, 0, 0]}
              scale={[0.4, 0.4, 0.4]}
              rotation={[0, Math.PI / 2, 0]}
            />

            {/* 模型 2 */}
            <Scene
              objPath="/window/139.obj"
              position={[-4, 0, 0]}
              scale={[0.4, 0.4, 0.4]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            </group>

            <OrbitControls />
          </Canvas>
        </div>
      </div>

      <div className="bottomspace"></div>
    </div>
  );
};

export default Page;
