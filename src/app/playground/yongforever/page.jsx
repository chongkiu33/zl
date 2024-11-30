import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'


const Page = () => {
  return <div>
    <div className={styles.spTitle}>Yong(Forever)</div>
    <ProjectTags projectName="Yong" />
    <div className={styles.imgCover}>   
            <Image style={{objectFit: 'contain'}}  className={styles.fitimg} alt='Yong'  src="/yong/Hanzi_Experienment.png" fill />
    </div>


    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Brief</div>
            <div className={styles.spChapterText}>
          

            <TextSplitter text={`This design is a transform and combination of Chinese characters and English letters to reconstruct a significant work“永”(forever). Itis  inspired by Xu Bing’s work and the uniqueness of the construction and structure of  Chinese characters.`}/>
            </div>     
    </div>

    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Concept Demonstration</div>
            <div className={styles.spChapterText}>
          

            <TextSplitter text={`Chinese characters are developed from hieroglyphical characters, and are famous for their unique creation of characters and words. Many Chinese characters can be taken apart into different components and these components are shared through characters, which is similar to English roots. While English words are constructed by 26 different letters, Chinese words are constructed with these characters and other basic rules such as pictogram（象形）, indication（指事）, ideogrammatic compound（會意）, and radical phonetic（形聲）.`}/>
            <TextSplitter text={`Xu Bing is a Chinese Artist famous for their “Book from the Sky”, an installation of hand-printed books and scrolls printed from blocks inscribed with ''false'' characters. It “upsets the intellectuals” because it suggests that our description could be meaningless or deviate from the written’s original intentions.`}/>
            <TextSplitter text={`He also has another work named “Square Word Calligraphy”, which inverts the “Book from the Sky”. He mapped the alphabet chart to Chinese strokes and then used these to construct a meaningful English word.

`}/>
            <TextSplitter text={`His work inspired me to do more research about the creation of Chinese characters and words, as well as the calligraphy or its printed form.`}/>
            <TextSplitter text={`I have collected the eight basic strokes/elements of Chinese Letters and their mapping to English letters to create a “word scarf”.`}/>
            <TextSplitter text={`“永” (Forever) is always the first word when we practice Chinese Calligraphy as it consists of eight basic elements. When the mesh intertwines, you can see the Chinese and foreign characters echoing, creating an intricate construction of language systems.`}/>
            
            </div>     
    </div>


    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Moodboard</div>
            <div className={styles.spChapterText}>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='yong' src="/yong/1.png" layout="responsive" width={100} height={100} />
            </div>

            </div>     
    </div>


    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Design Process</div>
            <div className={styles.spChapterText}>
                <TextSplitter text={`
                Just as I mentioned, “永” is vital in Chinese calligraphy practices. Therefore, I want to design a variation of “永” to demonstrate the aesthetic of Chinese calligraphy as well as a made-up word to reinforce the critical view of “textual description” in Xu Bing’s works.

            In my practice, I choose “ヒラギノ明朝 ProN” as my design source.
                    `}/>


            <div>
                <strong>Why “ヒラギノ明朝 ProN”?</strong>
                <TextSplitter text={`
                I want to choose a font that has bot curvaceous aesthetic similar to calligraphy and a modern sharpness brush that has a printed feeling.
                    `}/>
                <TextSplitter text={`
                    Therefore, it should be a serif font and stress the stroke. I chose “ヒラギノ明朝 ProN” and Songti, which is a widely used Chinese font for Mainland China.
                    `}/>

                <div className={styles.imgContainer}>   
                    <Image  className={styles.img} alt='yong' src="/yong/2.png" layout="responsive" width={100} height={100} />
                    Left: “ヒラギノ明朝 ProN” Right: Songti
                </div>

            </div>


            <div>
              
                <TextSplitter text={`
                However, “ヒラギノ明朝 ProN” has wider Rounded ends, which inclined to “calligraphy”.
                    `}/>
                <TextSplitter text={`
                    Hence I chose “ヒラギノ明朝 ProN” for my basic fonts.
                    `}/>

            <div className={styles.imgContainer}>   
                    <Image  className={styles.img} alt='yong' src="/yong/3.png" layout="responsive" width={100} height={100} />
                    Left: “ヒラギノ明朝 ProN” Right: Songti
            </div>

            <div className={styles.imgContainer}>   
                    <Image  className={styles.img} alt='yong' src="/yong/4.png" layout="responsive" width={100} height={100} />
                    English Alphabetic of “ヒラギノ明朝 ProN”
            </div>

            </div>


            <div>
                <strong>How I construct “永”？</strong>
                <TextSplitter text={`
                Using Xu Bing’s “Square Word Calligraphy”, “Forever” would be something like this.
                    `}/>
                 <div className={styles.imgContainer}>              
                    <Image  className={styles.img} alt='yong' src="/yong/6.png" layout="responsive" width={100} height={100} />      
                </div>

                <TextSplitter text={`
                    However, since “Forever” has two “ER” structure, when it become a square word, it does not seem that dynamic.
                `}/>

                <TextSplitter text={`
                    To search a different way out, I looked into how “永” has been constructed (the history of the development of “永”)
                `}/>

                <div className={styles.imgContainer}>              
                    <Image  className={styles.img} alt='yong' src="/yong/7.jpg" layout="responsive" width={100} height={100} />      
                </div>

                <TextSplitter text={`
                    “永字八法” Eight Principle of  “永” (The strokes in “永”)
                `}/>

                <div className={styles.imgContainer}>              
                    <Image  className={styles.img} alt='yong' src="/yong/8.png" layout="responsive" width={100} height={100} />      
                </div>

                <TextSplitter text={`
                    Variations in different strokes and other Chinese strokes
                `}/>

                <div className={styles.imgContainer}>              
                    <Image  className={styles.img} alt='yong' src="/yong/9.png" layout="responsive" width={100} height={100} />      
                </div>

                <TextSplitter text={`
                    The drawback of “ヒラギノ明朝 ProN” compared to the traditional calligraphy
                `}/>

                <div className={styles.imgContainer}>              
                    <Image  className={styles.img} alt='yong' src="/yong/10.png" layout="responsive" width={100} height={100} />      
                </div>

                <TextSplitter text={`
                    Famous “王羲之”’s  “永”
                `}/>

         
                    <Image   alt='yong' src="/yong/11.png" width={100} height={100} />      
               
               <strong><br/>Construct “永” on Adobe Illustratoer with “ヒラギノ明朝 ProN</strong>
                
               <div className={styles.imgContainer}>              
                    <Image  className={styles.img} alt='yong' src="/yong/Hanzi_Experienment-02.png" layout="responsive" width={100} height={100} />
                    <Image  className={styles.img} alt='yong' src="/yong/Hanzi_Experienment-03.png" layout="responsive" width={100} height={100} />   
                    <Image  className={styles.img} alt='yong' src="/yong/Hanzi_Experienment-04.png" layout="responsive" width={100} height={100} />         
                </div>

            </div>
            </div>     
    </div>


    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Production Process</div>
            <div className={styles.spChapterText}>
                    <strong>Pattern Making</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/12.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Laser Cutting</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/13.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Pin the fabric with the Patter</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/14.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Paint with lines</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/15.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Cut with edges</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/16.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Pin “永”</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/17.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Hand sewing</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/18.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Finished Front!</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/19.jpg" layout="responsive" width={100} height={100} />
                    </div>

                    <strong>Sewing Front and Back Together</strong>
                    <div className={styles.imgContainer}>              
                        <Image  className={styles.img} alt='yong' src="/yong/20.jpg" layout="responsive" width={100} height={100} />
                    </div>

            </div>
        </div>


        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>
            Further thoughts about the Design of the back</div>
            <div className={styles.spChapterText}>
            <TextSplitter text={`
               Pantha Rhei (“Everything flows”) -Heraclitus     
                `}/>

            <TextSplitter text={`
                    I want to embroider it with the digital embroidery machine. However, I have not had enough time to finish this.
                    `}/>

            <TextSplitter text={`
                    An interesting juxtaposition of “永”(“Forever”)
                    `}/>
            </div>
        </div>

        <div className='bottomspace'></div>
  </div>;
};

export default Page;