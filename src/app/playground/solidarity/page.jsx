import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'

const Page = () => {
  return <div>
    <div className={styles.spTitle}>Solidarity</div>
    <ProjectTags projectName="Solidarity" />
    <div className="video-container">
      <video
        src="/Solidarity/solidarity.mp4"
        controls
        
        loop
        className="responsive-video"
      ></video>
    </div>

    
    
    

    <div className={styles.spAbstract}><TextSplitter text={`A film inspired by Italo Calvino's work "Solidarity", edited in Adobe Premiere, sound edited by Adobe Audition.
 `}/>
 <TextSplitter text={`Directed by Zhuolin Li, Acting by Tracy Wu and Zhuolin Li
 `}/>
 </div>

       
  </div>;
};

export default Page;