import styles from './pg.module.css';
import Image from 'next/image';


const plagroundPage = () => {
    return (
        <div className={styles.container}>

            <div className={styles.line2}></div>
            <div className={styles.index}>

                <div className={styles.lineContainer}>
                    <Image src={"/1.png"} fill className={styles.line} />
                </div>

                
                <div className={styles.indexgroup}>
            <div className={styles.element}></div>
                <div className={styles.cn}> 

                    <div className={styles.projectindex}>Computational Narratives</div>
                    <div className={styles.projectindex}>Artificial Friend</div>
                    <div className={styles.projectindex}>The Garden of Forking Paths</div>
                    <div className={styles.projectindex}>“Listen! Pied Piper is playing”</div>
                    <div className={styles.projectindex}>Am I too much?</div>
                    <div className={styles.projectindex}>Enhanced Memory</div>
                    <div className={styles.projectindex}>ChatGpt as Tarot Reader</div>
                    <div className={styles.projectindex}>Mirror</div>
                    <div className={styles.projectindex}>Music From Soul</div>
                </div>

                <div className={styles.FD}> 
                    <div className={styles.projectindex}>Frontend Developer</div>
                    <div className={styles.projectindex}>Catcher’s Curation</div>
                    <div className={styles.projectindex}>Natural Material Lab</div>
                </div>

                <div className={styles.BMR}> 
                    <div className={styles.projectindex}>Bio Material Research</div>
                    <div className={styles.projectindex}>Bubble Procelain</div>
                    <div className={styles.projectindex}>Seaweed hairband</div>
                    <div className={styles.projectindex}>Cocoon</div>
                </div>

                

                <div className={styles.TE}> 
                    <div className={styles.projectindex}>Typography Experiment</div>
                    <div className={styles.projectindex}>Yong</div>
                    <div className={styles.projectindex}>Mayan Language</div>
                    <div className={styles.projectindex}>Sound Visualization</div>
                </div>

                <div className={styles.DH}> 
                    <div className={styles.projectindex}>Digital Heritage</div>
                    <div className={styles.projectindex}>Stupa</div>
                    <div className={styles.projectindex}>A serious window frames for Pavilion</div>
                </div>

                <div className={styles.Film}> 
                    <div className={styles.projectindex}>Film</div>
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
    )
}

export default plagroundPage;