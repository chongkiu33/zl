import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'

import bg1 from "../../../../public/qilin/background.png";
import bg2 from "../../../../public/qilin/background_2.png";
import bg3 from "../../../../public/qilin/background 3.jpeg";
import bg4 from "../../../../public/qilin/background 4.png";


const Page = () => {
  return <div>
    <div className={styles.spTitle}>Qilin</div>
    <ProjectTags projectName="Qilin" />
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' ,marginBottom: '20px'}}>
            <iframe
                src={`https://www.youtube.com/embed/1XQoDi44sSk`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>

    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Inspiration</div>
            <div className={styles.spChapterText}>
                <strong>開光見青(“Enlightened”)：</strong>
                <TextSplitter text={`The ‘Enlightened’ is a traditional art form performed in Hong Kong and Guangdong. It must happen after 1 a.m. after the full moon’s night, and before dawn. And the Qilin should be enlightened under the old tree. The priests should carry the head of Qilin and the Brass Gong, silently walking to the selected tree at the arranged time.`} />
                <TextSplitter text={`Burning incense and making offerings to the gods, there will be a most respected elder to uncover the red cloth from the head of Qilin and let the head of the Qilin bathe in the moonlight, which is the first part of “Enlightenment”.`} />
                <TextSplitter text={`After bathing in the moonlight, Qilin must see the green leaves immediately to complete the “Enlightenment”, since green leaves symbolize life and vitality.`} />
                <TextSplitter text={`Only the “Enlightened” Qilin would have the spirit to call auspiciousness, eliminating disasters and removing evil.`} />
                <TextSplitter text={`After “Enlightenment”, Qilin would walk from the old tree to the flower square, and worship by the other villagers.`} />
            </div>
            
     </div>

     <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Play</div>
            <div className={styles.spChapterText}>
                <TextSplitter text={`Lin is a child who lives in the mountains, and his village lives by sheep herding. There is a town at the foot of the mountain and they are engaged in farming.`} />
                <TextSplitter text={`He loves watching the whole world in the mountain.`} />
                <TextSplitter text={`(Sometimes he plays the flute, and sometimes he sat on the mountain and watched the scenery below (the old trees of the temple).)`} />
                <TextSplitter text={`He often wondered what the world was like below (in the village at the bottom of the mountain). `} />
                <TextSplitter text={`One day he sneaked into the village below at night during the full moon and came across a Qilin that had not yet been “enlightened”(開光見青) and could not see the living.`} />
                <TextSplitter text={`He secretly lifted the red cloth covering the Qilin, then the Qilin’s spirit possessed him. The farmers and villagers who came to see attend the ritual found out and they were furious. Lin ran away.`} />
                <TextSplitter text={`In the process of running(Parallel with the coming of the morning), he found that he started to grow horns and a tail, and flowers would bloom wherever he touched – he felt very scared and he become lost.`} />
                <TextSplitter text={`Don’t know if it was a dream or reality, but he came to a place he had never seen before, Qilin came to him, where the step and flowers bloomed.`} />
                <TextSplitter text={`And the Qilin spat out a ball from his mouth and gave it to the child.`} />
                <TextSplitter text={`The ball guides the child to walk across the forest and comes to the villagers’ Qilin head.`} />
                <TextSplitter text={`The vine gradually grows in the head of the Qilin, and it eventually becomes a flower.`} />
               
            </div>
            
     </div>

   


     <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Background Setting</div>
            <div className={styles.spChapterText}>
                <strong> 梯田 (Stepping Field)</strong>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='stepping field' src="/qilin/stepping field.png" layout="responsive" width={100} height={100} />
                </div>
                <strong>吊腳樓(Stilted Building)</strong>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='Stilt-Building' src="/qilin/Stilt-Building_1-768x432.png" layout="responsive" width={100} height={100} />
                </div>
            </div>
            
     </div>

     <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Background Rendering</div>
            <div className={styles.spChapterText}>
           
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} placeholder='blur'  alt='background' src={bg1} layout="responsive" width={100} height={100} />
                <Image  className={styles.img} placeholder='blur'  alt='background' src={bg2} layout="responsive" width={100} height={100} />
                <Image  className={styles.img} placeholder='blur'  alt='background' src={bg3} layout="responsive" width={100} height={100} />
                <Image  className={styles.img}  placeholder='blur' alt='background' src={bg4} layout="responsive" width={100} height={100} />
                </div>
               
            </div>
            
     </div>

     <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Character Setting</div>
            <div className={styles.spChapterText}>
                <ul>
                <strong> 引龍人(Qilin Tamer)</strong>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/qilin/qilin tamer.png" layout="responsive" width={100} height={100} />
                
                </div>
                <li>Qilin Adult</li>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/qilin/Qilin-Adult-768x332.png" layout="responsive" width={100} height={100} />
                </div>
                <li>Qilin Teenager</li>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/qilin/Qilin-Teenager-768x384.png" layout="responsive" width={100} height={100} />
                </div>
                <li>Qilin Ball</li>

                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/qilin/Qilin-Ball.png" layout="responsive" width={100} height={100} />
                </div>
                <li>Qilin Crop</li>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/qilin/qilin_crop.png" layout="responsive" width={100} height={100} />
                </div>
                <li>Qilin Crop (After “Enlightened”)</li>
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='background' src="/qilin/qilin crop after enlightment.png" layout="responsive" width={100} height={100} />
                </div>
                </ul>
            </div>
            
     </div>

     <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Storyboard</div>
            <div className={styles.spChapterText}>
           
                <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='storyboard' src="/qilin/storyboard/1.png" layout="responsive" width={100} height={100} />
                <Image  className={styles.img} alt='storyboard' src="/qilin/storyboard/2.png" layout="responsive" width={100} height={100} />
                <Image  className={styles.img} alt='storyboard' src="/qilin/storyboard/3.png" layout="responsive" width={100} height={100} />
                <Image  className={styles.img} alt='storyboard' src="/qilin/storyboard/4.png" layout="responsive" width={100} height={100} />   
                <Image  className={styles.img} alt='storyboard' src="/qilin/storyboard/5.png" layout="responsive" width={100} height={100} />
                </div>
               
            </div>
            
     </div>


     <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Production Reel</div>
            <div className={styles.spChapterText}>
            <div className="video-container">
                <video
                    src="/qilin/reel.mp4"
                    controls
                   
                    loop
                    className="responsive-video"
                ></video>
                </div>
            </div>
            
     </div>

     <div className='bottomspace'></div>
       
  </div>;
};

export default Page;