"use client"
import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense } from "react";

function Scene({ objPath, scale ,position}) {
  const obj = useLoader(OBJLoader, objPath); // 加载第一个模型

  return (
   
      <group position={position} scale={scale} rotation={[0, Math.PI / 2, 0]}>
        <primitive object={obj} />
      </group>

     
  );
}

const Page = () => {
  return <div>
    <div className={styles.spTitle}>Stupa</div>
    <ProjectTags projectName="Stupa" />
    <div className={styles.imgCover}>   
            <Image style={{objectFit: 'cover'}}  className={styles.fitimg} alt='mayan'  src="/stupa/1.jpg" fill />
    </div>

    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>About</div>
            <div className={styles.spChapterText}>
          

            <TextSplitter text={`The Stupa was built based on the concept of “abiding with nothing”(不留) in the Diamond Sutra (金刚经).`}/>
            <div>It has participated in <Link className={styles.link}  href="https://mbingenheimer.net/sutra2DNA/contest.html" target="_blank">Temple University's Miniature Stupa Contest </Link>and won the third prize.</div>
            <div>
            <TextSplitter text={`For further information on how this stupa interprets the concept of `}/><Link className={styles.link} target="_blank"  href="https://drive.google.com/file/d/1C80uSJShGLEfn7GhVph0KFI1sNxnWzLK/view?usp=sharing">“abiding with nothing”</Link>
            </div>
            </div>     
    </div>


    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Modeling</div>
            <div className={styles.spChapterText}>
          
                <Canvas camera={{ position: [0, 0, 12] }} style={{ height: "500px",width: "100%" }} >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.2} />
                  <directionalLight position={[10, 10, 10]} />

                  <group >
                  <Scene
                    objPath="/stupa/stupa2.obj"
                    scale={[1, 1, 1]}
                    position={[0, 0, 0]}
                  />
                  </group>

                  <OrbitControls enableZoom={false}  />
                  </Suspense>
                </Canvas>

                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/stupa/2.jpg" layout="responsive" width={100} height={100} />
                
                </div>

                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/stupa/3.jpg" layout="responsive" width={100} height={100} />
                
                </div>
            
            </div>     
    </div>

  


     
      


    <div className='bottomspace'></div>
       
  </div>;
};

export default Page;