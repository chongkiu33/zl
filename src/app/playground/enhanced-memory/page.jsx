import styles from '../pg.module.css'
import Image from 'next/image'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import Link from 'next/link';

const Page = () => {
  return (
  <div>

        <div className={styles.spTitle}>Enhanced Memory </div>
        <div className={styles.spAbstract}><TextSplitter text={` This project is an -omancy about “predicting” your visited websites and constructing an identity based on your browser history.`}/></div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Brief</div>
            <div className={styles.spChapterText}>
            <TextSplitter text={`Internet gradually inverts the natural forgetting to an impossible thing and brings accurate and detailed memory as a norm. For example, Google could store every search result for each user, as well as every subsequent search result that each user clicks to access. By collecting these data, it could recognize it is “your activity” even if you are searching by a different IP address or on a completely different computer.`}/>
            
            <TextSplitter text={`This unforgettable history and its utilization scare me. If we think memory is a necessary part of our identity, then natural forgetting, as an important part of what constitutes our natural memory, should also strongly link to our identity. Our memories can be plastic, fungible, and shifting sometimes compared to what really happened. These features are all related to forgetting.`}/>
           
            <TextSplitter text={`However, as we put on the context, the Internet creates the illusion of a “perfect” or “ideal” memory. From the prediction of our accurate and detailed browser history, I created a fake past “-omance”. I want to challenge the idea of a “perfect memory” that is based on a presumed objective and accurate browser history, while its results could be full of bias (look at Stacy Snyder’s example below). Our imperfect memories of the past that we forget, deny, or try to memorize deeply teach us how to better lives in the present. `}/>
            </div>
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Prototype</div>
            <div className={styles.spChapterText}>
            <iframe
        width="100%"
        height="400"
        src="/enhancedMemory/EnhancedMemory_Prototype.mp4"  
        title="YouTube Video Player"
        frameBorder={"0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

<div><Link href="https://github.com/B2xx/chrome-extensions-visitedItems">The GitHub Page</Link>for historyVisitedItems is an extension for past browser history.</div>
      
        <TextSplitter text={`The GitHub Page displays the history of a website in URL form and the website is being developed. `}/>
    
            
            </div>
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Description</div>
            <div className={styles.spChapterText}>
            <div><TextSplitter text={`In brief, I talked about how memory could be tossed to construct a controversial identity. In this description, I will extend the memory under the social context, discussing how it could become a representation of power, violate our privacy, and question our relationship.`}/> </div>
            
            <div><TextSplitter text={`In “Delete: The Virtue of Forgetting in a Virtual Age“, Mayer-Schonberger mentioned a 25-year-old single mother Stacy Snyder fails to become a teacher because of an online photo of drinking named “Drunken Pirate” on her Myspace. (Chapter 1) However, she has already reached the legal drinking age, the photos do not clearly indicate what she drank, and posting personal photos on the Social Network does not violate any teacher regulations. This reminds us, that our tradition of forgetting has been challenged. With the help of technology, “forgetting has become the exception, and the remembering the default”.`}/> </div>
            
            <div>
            <Image  src='/enhancedMemory/DrunkenPirate.jpg' width={230} height={300} alt='Drunken Pirate' />
            <div>Stacy Snyder’s “Drunken Pirate” Photo</div></div>
            <div><TextSplitter text={`Such an unforgettable and detailed digital memory leads us to question who has the right to store them, delete them, and (possibly) edit them. This web-based memory is a source that could be shared with others. However, we do not know who the other is, and how they plan to utilize our information. If governments or internet companies could surveillance or track us without our acknowledgment, would we face the possibility of living under a digital monitor? Shall we act as if we are watched even if we are not?`}/></div>
            <div><TextSplitter text={`This accurate memory becomes a personal resource could also be dangerous as it may devastate our social relationships. In Episode 3, Season 2 of “Black Mirror,” The Entire History of You talks about a visual prosthetic device that helps humans to record and recall their memory. This gives the memory a sense of violation. When you can look back over and over again to see if the behavior of you and others is appropriate and analyze it extensively, then maybe your relationship breakup is not far away.`}/></div>
            </div>
            
        </div>


        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>How to predict <br/> the history</div>
            <div className={styles.spChapterText}>
            <ul>
                <li><TextSplitter text={`ChatGPT does not support predicting history through URLs in its normal prompt, it will continue to give me a response that it does not have access to the external website/ content.`}/></li>
                    <ul>
                    <li><TextSplitter text={`Possible Solution: Change the prompt to be the title of the URLs, or any other information of the URLs. However, before doing that, we shall ask ourselves what that element stands for in the browser history. Why it could be the best representative?Will Title or ID be a better identifier?`}/> </li> 
                    </ul>
                <li><TextSplitter text={`I found the Natural Journal article “Predicting History” talks about the potential and difficulty of  “developing ‘artificial archivists’ to identify potentially historic documents in very large digital corpora.” There are different methods for predicting if a present event will be important for history. However, it seems another “Physiognomy” that “rests on the presumed objectivity and independence of the inputs, outputs, and the algorithm in between.” `}/></li>
            </ul>

            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='Screenshot of Chrom Extension' src="/enhancedMemory/ChromExtension_ScreenShot.png" layout="responsive" width={100} height={100} />
            </div>
            </div>
            
        </div>


        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Further Thoughts</div>
            <div className={styles.spChapterText}>
            <TextSplitter text={`Even though it seems we could generate a past based on history, it seems could generate the future in the same way, maybe there are more dynamics about the history and the future.`}/> 
            </div>
            
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Reflection</div>
            <div className={styles.spChapterText}>
            <strong>What’s its difference between a recommendation algorithm?</strong>
            <TextSplitter text={`This is how google search works. It uses the words of your query, relevance and usability of pages, expertise of sources, and locations to give you the most accurate result.`}/> 
            </div>
            
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Reference</div>
            <div className={styles.spChapterText}>
            <ul>
                <li><TextSplitter text={`Viktor Mayer-Schonberger, Delete: The Virtue of Forgetting in a Virtual Age (Princeton University Presss, 2011)`}/> </li>
                <li><TextSplitter text={`Ted Chiang, The Truth of Fact, the Truth of Feeling`}/> </li>
                <li><TextSplitter text={`The Entire History of You (Black Mirror, season 2, episode 3)`}/> </li>
                <li><TextSplitter text={`Henry Jenkins, “Enhanced Memory,” in Through the Black Mirror: Deconstructing the Side Effects of the Digital Dark Age (Palgrave Mcmillan, 2019), p. 43-47.`}/> </li>
            </ul>
            </div>
            
        </div>

        <div className='bottomspace'></div>
    
    </div>);
};

export default Page;