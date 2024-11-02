import styles from '../works.module.css'
import Image from 'next/image'

const Page = () => {
  return <div>
    <div className={styles.pHeader}>
            <div className={styles.pTitle}>The Garden of Forking Paths</div>
            <div className={styles.pTag}>Serious Game, Creative Coding</div>
            <div className={styles.pDescri}>This project aims to create an infinite storyline (narration frame) in Twine based on the novel “El jardín de senderos que se bifurcan” (The Garden of Forking Paths) by Jorge Luis Borges. That is, a narration either loops (and grows), or includes all the possibilities at the same time (i.e., the player presumably could choose all the branches). Those different storylines will converge, diverge, and parallel, co-exist in the story.</div>
            <div className={styles.pDate}>2024</div>
        </div>
  </div>;
};

export default Page;