import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'


const Page = () => {
  return <div>
    <div className={styles.spTitle}>Mayan Language</div>
    <div className={styles.imgCover}>   
            <Image style={{objectFit: 'cover'}}  className={styles.fitimg} alt='mayan'  src="/mayan/1.png" fill />
    </div>

    <div className={styles.spAbstract}><TextSplitter text={` A painting inspired by Mayan pictogram`}/></div>

       
  </div>;
};

export default Page;