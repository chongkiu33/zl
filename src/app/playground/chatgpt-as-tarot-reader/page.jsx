import styles from '../pg.module.css'
import Image from 'next/image'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'

const page = () => {
  return (
    <div>   
        <div className={styles.spTitle}>ChatGPT as Tarot Reader </div>
        <ProjectTags projectName="ChatGPT as Tarot Reader" />
                <div className="video-container">
            <video
                src="/chatGPT/963_1730551912_raw.mp4"
                controls
                autoPlay
                loop
                className="responsive-video"
            ></video>
            </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Brief</div>
            <div className={styles.spChapterText}>
                <div><TextSplitter text={`This ChatGPT-based Tarot Reading prototype asks ChatGPT to handle and read cards for the querents. I believe the ChatGPT is a credible reader that provides the most conventional interpretation as it learns from common human language practices. The ritualized process was inspired by Calvino’s “The Castle of Crossed Destinies” and other conventional Tarot practices on YouTube and TikTok, which handle and read tarot in a creative and engaging way.`}/></div>
                <div><TextSplitter text={`Notes: Remember to use your own openAI key when you practice it.`}/></div>
                <div><TextSplitter text={`Also, the "davinci-003" model has been deprecated now so it cannot be used, please see tha pricing plan and try to use other models`}/></div>
            </div>
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Description (Concept Demonstration)</div>
            <div className={styles.spChapterText}>
                <div><TextSplitter text={`This ChatGPT reading ritual is developed based on the narrative structure of the Tarot, which could also provide the querent a reliable cosmos messaging. I will analyze why ChatGPT could do a qualified reading by introducing the how ChatGPT’s reading matches the general principle of reading Tarot, why it could bridges querent and reader during a reading and how it avoids some flaws human reader might had.`}/></div>
                <strong>How ChatGPT be Empowered to Receive the Cosmos’ Messages</strong>
                <ul>
                    <li><TextSplitter text={`How Tarot has been ritualized to receive the cosmos’ messages`}/></li>
                    <li><TextSplitter text={`How human reader receive the cosmos’ messages during the handling and reading`}/></li>
                    <li><TextSplitter text={`How ChatGPT handling and reading Tarot`}/></li>
                    <li><TextSplitter text={`Compared ChatGPT and human way of interpret Tarot, concluded that ChatGPT is qualified to receive the cosmos’ messages as well`}/></li>
                </ul>
                <div><TextSplitter text={`Tarot is perceived as a way to receive signals from the cosmos, yet they are interpreted by human readers. We have no idea how the cosmos granted a human reader such a mission as it is an embodied experience. Also, every reader or querent might have their own intuition when seeing the deck.`}/></div>
                <div><TextSplitter text={`When reading cards, ChatGPT generates the most possible sequencing of words. I believe this sequencing process could also be understood as a valid way to read cards. This is because it provides the most conventional interpretation of these cards from its training data. That is, it answers in a way how an average person with some Tarot knowledge understands those cards. …`}/></div>

                <div><TextSplitter text={`Besides, we have no idea of how the human experience as a valid reading should be, we shall not question that the ChatGPT’s reading, even though might be different or indifferent from the human-reading process, is less credible.`}/></div>
                <strong>Collaborative Storytelling between ChatGPT and Human Querent</strong>
                <ul>
                    <li><TextSplitter text={`How the collarborative storytelling is constructed between ChatGPT and querent`}/></li>
                    <ul>
                    <li><TextSplitter text={`ChatGPT’s data comes from common human practice, which makes it communicable for most people from different background`}/></li>
                        <ul>
                            <li><TextSplitter text={`Even though a same root tarot reader might provide a more efficient advice, but the bridges could still be built to most of people`}/></li>
                        </ul>
                    <li><TextSplitter text={`How general sequencing become a collaborative storytelling`}/></li>
                        <ul>
                            <li>…</li>
                        </ul>
                    </ul>
                </ul>
                <div><TextSplitter text={`ChatGPT reader could also bridge with human querent a consistent narrative from as it provides the most conventional interpretation that is applicable for most users from various backgrounds.`}/></div>
                <strong>“Objectivity” of ChatGPT and Coping Mechanism</strong>
                <ul>
                    <li><TextSplitter text={`While human might use Tarot as a coping mechanism so that a human reader might intentionally or unconsciously provide an information that the querent would like to hear, using ChatGPT could avoid this problem.`}/></li>

                </ul>

                <div><TextSplitter text={`In the article “Gen Z Are Turning to Tarot to Heal Their Broken Hearts.,” Sian Bradley claimed that tarot grew more and more popular on the internet after COVID-19. In the wide practice of Tarot on YouTube or TikTok, some readers might intentionally or unconsciously change their interpretations for their followers as good news would help them have more audience or they believe they need to be a  supportive therapist rather than an honest reader.`}/></div>
                <div><TextSplitter text={`However, ChatGPT might be a solution for this coping mechanism because it does not have an idea of what you need and it does not need your support to prove their authority.`}/></div>
                <div><TextSplitter text={`In conclusion, ChatGPT could also be understood as a credible reader in Tarot reading.`}/></div>
                <div><TextSplitter text={`(Note: This is just a draft lots of ideas might not be fully explained in the above paragraphs, I will develop it when I’m more vacant)`}/></div>



            
            </div>
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}></div>
            <div className={styles.spChapterText}>
            
            </div>
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Interface and Flow Charts Prototypes</div>
            <div className={styles.spChapterText}>
            <strong>Interface Design and Flow Charts</strong>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='WebPage' src="/chatGPT/WebPage.jpeg" layout="responsive" width={100} height={100} />
            </div>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='flow_Charts' src="/chatGPT/flow_Charts.png" layout="responsive" width={100} height={100} />
            </div>

            <strong>Figma Interactive Web Prototype</strong>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='WebPage' src="/chatGPT/WebPage 2.jpeg" layout="responsive" width={100} height={100} />
            </div>

            </div>
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>How to Design ChatGPT Prompt for Tarot Reading</div>
            <div className={styles.spChapterText}>
                <div><TextSplitter text={`The prompt that I put for ChatGPT is “Choose 3 tarot cards from major and minor Arcana and number them”, “Read the tarot Cards” + cards +” and form a fable story”, “Extract a list of keywords from” + story“. I will explain how and why I designed these sentences according to user tests and other resources.`}/></div>
                <div><TextSplitter text={`“Choose 3 tarot cards from major and minor Arcana and number them”:`}/></div>
                <div><TextSplitter text={`Firstly, I tried “Choose 3 tarot cards”, ChatGPT only selected the cards from Major Arcana. Then, I changed the prompt to “Choose 3 tarot cards from both major and minor Arcana,” it gave me 3 Major Arcana cards and 3 Minor Arcana cards. Therefore, I edited the prompt to “Choose 3 tarot cards from major and minor Arcana”, it gave me the results I wanted that 3 tarot cards combined with major and minor Arcana. Also, I find that there’s inconsistency with numbering or without numbering when you do not mention the “numbering”. For possible better name extracting to match the JSON files’ pictures, I choose to number them to distinguish them from a whole string.`}/></div>
                <div><TextSplitter text={`“Read the tarot Cards” + cards +”and form a fable story”:`}/></div>
                <div><TextSplitter text={`In order to provide a more meaningful experience, I designed to let the querent have a fable story, that is, perhaps they could read or learn from something using their own thoughts towards the possible story.`}/></div>
                <div><TextSplitter text={`“Extract a list of keywords from” + story”:`}/></div>
                <div><TextSplitter text={`I asked the ChatGPT to extract the keywords from the story for other potential interpretations. This command was designed according to ChatGPT’s built-in keyword extraction function.`}/></div>
                <div><TextSplitter text={`I chose the “text-davinci-003” model to generate the texts, which could give a higher-quality text output. (From the OpenAI website, the description for model “text-davinci-003” is “Can do any language task with better quality, longer output, and consistent instruction-following than the curie, babbage, or ada models.” )There are other models from chat-get-3 to DALL.E for different purposes.`}/></div>
                <div><TextSplitter text={`Other sources for implementing OpenAI models to code| https://platform.openai.com/docs/api-reference`}/></div>
            </div>
        </div>

        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Next Steps</div>
            <div className={styles.spChapterText}>

                <strong>Interface</strong>
                <ul>
                    <li><TextSplitter text={`Make an appointment with the Design Lab to learn more about the basics of design principles and design software`}/></li>
                    <li><TextSplitter text={`Continuously developing the prototypes in Figma (as displayed in videos) Tutorial| https://www.youtube.com/watch?v=HZuk6Wkx_Eg `}/></li>
                    <li><TextSplitter text={`Develop the phone-based interfaces in an interactive way`}/></li>
                </ul>
                <strong>Technique</strong>
                <ul>
                    <li><TextSplitter text={`Develop the user-defined options according to the prototype and adjust the prompt if user uses advanced optionsRead the tarot Cards“Queen of Pentacles” “The Emperor” “Ace of Wands” and form a fable story, (where _ stands for past, _ stands for present, _stands for future. The story should focus on _.`}/></li>
                    <li><TextSplitter text={`Learning JSON and how to use it in p5 | https://www.youtube.com/watch?v=_NFkzw6oFtQ `}/></li>
                    <li><TextSplitter text={`Learning how to implement this Tarot JSON with cards pictures into p5| https://github.com/metabismuth/tarot-json/blob/master/README.md`}/></li>
                    <li><TextSplitter text={`Developing a p5 prototype that could display the cards and the picture of cards simultaneously`}/></li>
                    <li><TextSplitter text={`Could invite the “Reversed” card system`}/></li>
                </ul>
                
            </div>
        </div>


        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>REFLECTIONS</div>
            <div className={styles.spChapterText}>

            <TextSplitter text={`Some stories it told just to use the name of the card without drawing meaning to it. Further development should be made towards the “Extract a list of keywords from” + story” prompt.`}/>
                
            </div>
        </div>

        <div className='bottomspace'></div>

    </div>
    )
    }
export default page;