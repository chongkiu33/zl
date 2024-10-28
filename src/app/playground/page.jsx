"use client"
import styles from './pg.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';


const plagroundPage = () => {
    // const pageTransition = {
    //     initial:{
    //       y:1000,
          
    //     },
    //     animate:{
          
    //       y:0,
          
    //     },
    //     exit:{
          
    //       y:-1000,
    //     },
    //   };


    return (

        // <motion.div
        //   key={typeof window!== "undefined" ? window.location.pathname:''}
        //   initial="initial"
        //   animate="animate"
        //   exit="exit"
        //   variants={pageTransition}
        //   transition={{duration:1}}
          
        //   > 
        <>    
        <div className={styles.container}>
            <div className={styles.line2}></div>
          
            <div className={styles.index}>
            
                <div className={styles.lineContainer}>
                    <svg className={styles.line} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253 1126">
                    <motion.path   
                        d="M252.6,8.5c0,0-11.8,13.8-17.7,21.7s-27.6,29.6-35.5,35.5c-7.9,5.9-19.7,23.6-25.6,29.6s-9.9,9.9-13.8,15.8
                        s-15.8,25.6-17.7,33.5s-2,23.6,0,29.6c0,0,4.6,12.5,8.6,20.5s0,25-4,29s-10,9-22,12s-19,11-22,15s-18,30-22,37s-17,38-19,42
                        s-2,10.8,0,13.9s7,9.1,7,15.1s-2,12-5,16c-3,4-8,10-9,13s0,13,1,17s11,28,13,31s7,5,15,3s19-7,24-3s6,13,4,19s-6,20-1,26s14,11,23,9
                        s26-6,34,0s19,18,23,26s9,32,13,39s9,16,9,18s-1,4-5,5s-6,6-9,16s-1,20-3,28s-2,14-6,22s-7,23-9,30s-7,22-14,31s-24,36-29,43
                        s-12,21-16,30s-6,13-10,18s-8,11-8,22s4,16,9,23s14,15,14,21s1,20-3,29s-13,15-18,23s-10,17-15,21s-6,8-17,13s-28,18-37,30
                        s-16,25-18,35s-5,13,3,21s12,11,12,18s-2,23-4,28s-4,20-4,27"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 4 }}
                        />
                        
                    </svg>
                </div>

            
            <div className={styles.indexgroup}>
               <div className={styles.element}></div>
            
                <div className={styles.cn}> 
                    

                    <Link href={"/index"} className={styles.projectindex}>Computational Narratives<div className={styles.point}></div></Link>
                    
                    <div className={styles.projectindex}>Am I too much?</div>
                    <div className={styles.projectindex}>Enhanced Memory</div>
                    <div className={styles.projectindex}>ChatGpt as Tarot Reader</div>
                    <div className={styles.projectindex}>Mirror</div>
                    <div className={styles.projectindex}>Music From Soul</div>
                </div>

                <div className={styles.FD}> 
                    <div className={styles.projectindex}>Frontend Developer <div className={styles.point}></div></div>
                    <div className={styles.projectindex}>Catcher’s Curation</div>
                    <div className={styles.projectindex}>Natural Material Lab</div>
                </div>

                <div className={styles.BMR}> 
                    <div className={styles.projectindex}>Bio Material Research <div className={styles.point}></div></div>
                    <div className={styles.projectindex}>Bubble Procelain</div>
                    <div className={styles.projectindex}>Seaweed hairband</div>
                    <div className={styles.projectindex}>Cocoon</div>
                </div>

                

                <div className={styles.TE}> 
                    <div className={styles.projectindex}>Typography Experiment <div className={styles.point}></div></div>
                    <div className={styles.projectindex}>Yong</div>
                    <div className={styles.projectindex}>Mayan Language</div>
                    <div className={styles.projectindex}>Sound Visualization</div>
                </div>

                <div className={styles.DH}> 
                    <div className={styles.projectindex}>Digital Heritage <div className={styles.point}></div></div>
                    <div className={styles.projectindex}>Stupa</div>
                    <div className={styles.projectindex}>A serious window frames for Pavilion</div>
                </div>

                <div className={styles.Film}> 
                    <div className={styles.projectindex}>Film <div className={styles.point}></div></div>
                    <div className={styles.projectindex}>Solidarity</div>
                    <div className={styles.projectindex}>Qilin</div>
                </div>

                
            </div>

              

            </div>

            

            <div className={styles.project}>
                
                <div className={styles.projectTitle}>Artificial Friend</div>
                <div className={styles.ImgContainer}>
                    <Image src="/1.jpg" alt="" fill className={styles.projectImg} />
                </div>
                <div className={styles.content}>
                    <div className={styles.abstract}>Have you imagined an “artificial friend” that could recognize your emotion and support you? Now she comes from the website to reality. Jane’s writable hand and face enable the users to have more tangible interaction with her, and reflect on what we need in the intimate relationship if what we need could all be satisfied by a considerate “machine”.</div>
                    <div className={styles.chapter}>
                        <div className={styles.chapterName}>Project 
                        Description</div>
                        <div className={styles.chaptercontent}>
                        <div>
                        The second phase of the “Artificial Friend” aims to create a face and implement the writing machine built in the first phase. Jane will look at you and speak to you. The physical hand and face of Jane enable the users to have a more tangible interaction with her. By augmenting the realistic experience, I want to reinforce the question — “What do we need for an intimate relationship?” If the considerate Ai has “minds” and “body” and could satisfy our need of being loved, what do we need addition to that?
                        </div>
                        <div>
                        I try to build up an artificial friend to lead my audience to think those questions and callback their love abilities.
                        </div>
                        <div>
                        Also, the response ability of Jane relates to the Large Language Machines(LLMs) like ChatGpt or GPT-4. These LLMs  generates statistical likely continuations of word sequence. Therefore, the thought of they could communicate is a kind of anthropomorphism. This makes me think that these LLM could be the “transformer” under the human skin: they could mimic human deeds, yet they do not have such intentions. For example, LLMs could understand “little star” should follow the “twinkle twinkle,” but they do not understand the meaning of these two phrases, regardless of any related cultural context. The problem is, they iminate so well. It makes me think that they have already “live” in our society yet we could not find them.
                        </div>
                        <div>
                        This humanization of machines shakes our human uniqueness. Many of the marks that we once considered to be human are no longer applicable. LLMs could persuade us they feel pain from learning sentences, if with physical installation, they even could persuade us that they ached.  However, they just perform these, the real pain might never occur to them. This gaming makes the mark and the measure of pain unapplicable for the machines. We needs to think other words abscribe their situations because it will become too risky to think them as one of them (The risk of anthropomorphism).
                        </div>
                        </div>
                    </div>

                    
                </div>

                
            </div>

            
        </div>


       

      
        </>

        // </motion.div>
    )
}

export default plagroundPage;