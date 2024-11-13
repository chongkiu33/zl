import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'


const Page = () => {
  return <div>
    <div className={styles.spTitle}>Window Frames For Ancient China Pavilion</div>
    <div className={styles.imgCover}>   
            <Image style={{objectFit: 'cover'}}  className={styles.fitimg} alt='mayan'  src="/window/window.png" fill />
    </div>

    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>About</div>
            <div className={styles.spChapterText}>
          

            <TextSplitter text={`This project remodel the window frames design in Ming Dynasty based on The Craft of Gardens(園治). This is part of Zhuolin Li’s dedication for digitalizing the cultural heritages. `}/>
            <TextSplitter text={`One of the illustrations from the book The Craft of Gardens(園治)`}/>
            <Link className={styles.link} href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://ia600703.us.archive.org/12/items/02090253.cn/02090253.cn.pdf">Yuanzi</Link>
            <Link className={styles.link} href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://ia600703.us.archive.org/12/items/02090253.cn/02090253.cn.pdf">The digital archive</Link>
            </div>     
    </div>

    <div className='bottomspace'></div>
  </div>;
};

export default Page;