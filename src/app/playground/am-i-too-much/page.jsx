"use client"
import styles from '../pg.module.css'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import { useWord } from '../../contexts/WordContext'
import ProjectTags from '../../components/ProjectTag/ProjectTag'
import {useState} from "react";

const Page = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow); // toggle between true and false
  };
 

  return (
    <div>
        <div className={styles.spTitle}>Am I Too Much?</div>
        <ProjectTags projectName="Am I Too Much?" />
        <iframe src="/AmItoomuch/amitoomuch.html" width="100%" height="500"></iframe>
        <div className={styles.spChapter}>
          
            <div className={styles.spChapterTitle}>Introduction</div>
            <div className={styles.spChapterText}>

            
     
            <TextSplitter text={`This project is a reflexive diary about my confusion of wether the language is a suitable medium to describe the embodied feelings. It involves several loops, so remember to play it for at least three times before you open the spoiler. `}/>
            
            <botton className={styles.link}  onClick={toggleShow}>Spoiler (Click on it after you finish the game)</botton>
            {isShow && (

<>
<TextSplitter text={`“Am I too much?” is an interactive novel about the nuance and subtleness in conversations. The player could manipulate the punctuations to mimic the different tones. In repeating the conversations and reflections, I want to recreate an obsessive procedure that continuesly guessing what does the other really mean while talking.`}/>


<TextSplitter text={`Is “No, I’m just not enough” a good answer to “Am I too much?” Or shall I reply with “No! I’m just not enough!” Is he/she/they just conversing out of pleasantries or keeping appearances? Is the words of affirmation atucally an affirmation? We probably will never know.`}/>


<TextSplitter text={`Does communication really transmit what we want or the wording is pale? In rumination, comtemplation, and tossed and turned nights, I’m seeking for the answer and experiencing, trying to feel the world, others, and myself.`}/>
</>

      )}


            </div>
        </div>
        <div className='bottomspace'></div>
    </div>
  )
  }

export default Page;