import styles from '../pg.module.css';
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'
import Link from 'next/link'

const page = () => {
  return (
    <div> 
        <div className={styles.spTitle}>“Listen! Pied Piper is playing”</div>
        <ProjectTags projectName="“Listen! Pied Piper is playing”" />
        <iframe allow="autoplay" width="100%" height="500" src="https://editor.p5js.org/B2xx/full/V_meYK4fF"></iframe>
        <div className={styles.spAbstract}> WARNING! Open the sketch on Chrome or the sound will not work.</div>
        <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>Project Introduction</div>
            <div className={styles.spChapterText}>

                <div><TextSplitter text={`This is a sketch based on the story The Pied Piper of Hameln, which happened in the town named Hamelin. The most widespread version of the story goes: There’s a severe rat infestation in Hamelin, and a pied (“dressed in multi-color”) piper claimed that he could help solve the problem. The mayor promised him a large amount of money for the removal of the rats. However, after he removed the rats, the mayor broke the deal. Therefore, he used the pipe to allure the children in the town and disappeared.`}/></div>
                <div><TextSplitter text={`However, this story has many variations throughout history, and here’s my reference for making the story: `}/><Link className={styles.link} target="_blank" href="https://sites.pitt.edu/~dash/hameln.html#grimm245 ">Reference</Link></div>
                <div><TextSplitter text={`I used three different versions of The Pied Piper of Hameln to construct the main plots of the story. The beginning is about “hearing the story”, the middle is what happened, and the end is about the general impact of the story. I set branches in the middle based on whether the mayor breaks the deal. If the mayor pays the money, the money is gone; if the mayor does not, the children are gone. `}/></div>
                <div><TextSplitter text={`For the sound part, I use Tone.js so you could actually hear the pied piper playing along the way.

Overall, I think this sketch has a lot of potentials and possibly could be made into a larger story when I finish reading all the variations of The Pied Piper of Hameln.`}/></div>
                
            </div>
        </div>

        <div className='bottomspace'></div>
    </div>
  )
}

export default page;