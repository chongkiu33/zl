import styles from '../pg.module.css'
import Image from 'next/image'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'
import Link from 'next/link'

const Page = () => {
  return (
    <div> 
        <div className={styles.spTitle}>Cocoon</div>
        
        <ProjectTags projectName="Cocoon" />
        <div className={styles.imgCover} style={{backgroundColor: 'black'}}>   
            <Image  className={styles.fitimg} style={{objectFit: 'contain'}} alt='Cocoon'  src="/cocoon/Animation_3.gif" fill />
        </div>

        <div className={styles.spAbstract}><TextSplitter text={` 
            More than once that I walk on the street without glasses, and everthing was reduced to impalpable, blurred shadows immersed in vague halos. I remem- bered that the first time I found myself nearsighted, could not see the Detective Conan in TV and my mother’s blinking eyes. Dad was mad at me after seeing the oculist, but I felt cool with glasses. Myopia is a disease, and growth so hurting. I could only seeing the silent mixing blue and green in a distance, relinquishing my innocenent thrill ever.
            `}/></div>

        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Brief</div>
            <div className={styles.spChapterText}>
            
            <TextSplitter text={`“Cocoon” is a transformation status for a caterpillar to become a butterfly. It looks unadorned, mysterious, and protective - nobody knows what happened inside. In this project, the paper-made cocoon symbolizes a habitat for my fragile and sturdy shell for the discouragements I encountered in pursuing my career. I would like to invite the audience to imagine their bitter-sweet growth from what they originally wanted to shun beyond the protective meaning of the shell.`}/>
            
            
            </div>
        </div>

        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>The Concept Demonstration</div>
            <div className={styles.spChapterText}>
            
            <TextSplitter text={`
            Cocoon symbolizes my complicated relationship with my mother and my growth in getting along with her.
            `}/>
            <TextSplitter text={`
            My mother is a powerful woman, she raised me after my father's death when I was 8. However, it does not mean that she is a supportive mother, we "fight" a lot especially when it comes to my art-related career.
            `}/>
            <TextSplitter text={`
            Sometimes I feel like I must have a "cocoon" to defend myself from her hurting words and misunderstanding. However, when I left her and went to college, the cocoon turned me into a "butterfly" that I had the urge to express or to prove myself more eagerly than my peers. Growth is a kind of silent violence.
            `}/>

            </div>
        </div>


        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Working Progress</div>
            <div className={styles.spChapterText}>
            <strong>Experiments on Paper Sculpture</strong>
            <TextSplitter text={`
            Experiments with some small paper pieces
            `}/>

            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='cocoon' src="/cocoon/1.png" layout="responsive" width={100} height={100} />
            </div>

            <TextSplitter text={`
            Notes: The final paper I decided to use is the normal wrapping paper, which is recyclable and you could get them from your packages
            `}/>

        <strong>Lager Scale Trials</strong>
            <TextSplitter text={`
            Step 1: Apply Wood Glue to papers and hang them to dry out
            `}/>

            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='cocoon' src="/cocoon/2.png" layout="responsive" width={100} height={100} />
            </div>

            <TextSplitter text={`
            Step2: Attach Wires in two layers of papers (Wrap the iron wire with the paper rolls in case of stain)
            `}/>

            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='cocoon' src="/cocoon/3.png" layout="responsive" width={100} height={100} />
            </div>

            <TextSplitter text={`
            Step3: Sculpturing
            `}/>

            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='cocoon' src="/cocoon/4.png" layout="responsive" width={100} height={100} />
            </div>

            
            

 

            
            



            </div>
        </div>

        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Coloring</div>
          <div className={styles.spChapterText}>
          
          <TextSplitter text={`
            I decided to color the inside of the cocoon with ink as it reflects my experience with the darkness. I was scared when I first slept on my own and was surrounded by the darkness. However, I feel a weird warmth when I get used to it and find it super fascinating as it arouses infinite dreams and imaginations.
            `}/>
            <TextSplitter text={`
            Also, it has a great effect on reflecting the texture.
            `}/>

          </div>
      </div>

        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Sculpture’s Finalization</div>
          <div className={styles.spChapterText}>
          <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='cocoon' src="/cocoon/Animation_3.gif" layout="responsive" width={100} height={100} />
        </div>
          

          </div>
      </div>

        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Sketches of Cloth Version</div>
          <div className={styles.spChapterText}>
          <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='cocoon' src="/cocoon/5.png" layout="responsive" width={100} height={100} />
            </div>
          

          </div>
      </div>


        <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Reference</div>
          <div className={styles.spChapterText}>
          
          <div>

            <Link className={styles.link} target="_blank" href="https://www.dezeen.com/2020/10/07/erez-nevi-pana-tropical-milan-climate-change/">Erez Nevi Pana designs banana-plant "cocoons" for humans to shelter from climate change</Link>
          
          </div>
          <Link className={styles.link} target="_blank" href="https://gentenaar-torley.nl/"> gentenaar-torley.nl</Link>
          </div>
      </div>


      <div className={styles.spChapter}>
          
          <div className={styles.spChapterTitle}>Moodboard</div>
          <div className={styles.spChapterText}>
          <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='cocoon' src="/cocoon/6.png" layout="responsive" width={100} height={100} />
            </div>
          

          </div>
      </div>
      <div className='bottomspace'></div>
        
    </div>
    )
    }

export default Page;