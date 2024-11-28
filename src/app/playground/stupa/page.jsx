import styles from '../pg.module.css'
import Image from 'next/image'
import Link from 'next/link'
import TextSplitter from '../../components/TextSplitter/TextSplitter'
import ProjectTags from '../../components/ProjectTag/ProjectTag'

const Page = () => {
  return <div>
    <div className={styles.spTitle}>Stupa</div>
    <ProjectTags projectName="Stupa" />
    <div className={styles.imgCover}>   
            <Image style={{objectFit: 'cover'}}  className={styles.fitimg} alt='mayan'  src="/stupa/1.jpg" fill />
    </div>

    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}>About</div>
            <div className={styles.spChapterText}>
          

            <TextSplitter text={`The Stupa was built based on the concept of “abiding with nothing”(不留) in the Diamond Sutra (金刚经).`}/>
            <div>It has participated in <Link className={styles.link}  href="https://mbingenheimer.net/sutra2DNA/contest.html" target="_blank">Temple University's Miniature Stupa Contest </Link>and won the third prize.</div>
            <div>
            <TextSplitter text={`For further information on how this stupa interprets the concept of `}/><Link className={styles.link} target="_blank"  href="https://drive.google.com/file/d/1C80uSJShGLEfn7GhVph0KFI1sNxnWzLK/view?usp=sharing">“abiding with nothing”</Link>
            </div>
            </div>     
    </div>

       
  </div>;
};

export default Page;