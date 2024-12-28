import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'

const Page = () => {
  return <div>
    <div className={styles.spTitle}>Disoriented</div>
    <ProjectTags projectName="Sound Visualization" />
    <div className={styles.imgCover}>   
            <Image style={{objectFit: 'contain'}}  className={styles.fitimg} alt='mayan'  src="/sound/Artboard.png" fill />
    </div>

    <div className={styles.spAbstract}><TextSplitter text={` This project is inspired by Naiwen Yang's song “路痴” (disoriented), and the inverted "Direction" on the picture expresses the lost feeling.`}/></div>

       
  </div>;
};

export default Page;