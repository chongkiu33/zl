import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'


const Page = () => {
  return <div>
    <div className={styles.spTitle}>Sound Visualization</div>
    <div className={styles.imgCover}>   
            <Image style={{objectFit: 'cover'}}  className={styles.fitimg} alt='mayan'  src="/sound/cover.png" fill />
    </div>

    <div className={styles.spAbstract}><TextSplitter text={` This project is inspired by Naiwen Yang's song “路痴” (disoriented), and the inverted "Direction" on the picture expresses the lost feeling.`}/></div>

       
  </div>;
};

export default Page;