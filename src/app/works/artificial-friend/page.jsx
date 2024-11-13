import styles from './af.module.css'
import Image from 'next/image'


const Page = () => {
  return <div>
    <div className={styles.pHeader}>
            <div className={styles.pTitle}>Artificial Friend</div>
            <div className={styles.pTag}>
            <div className={styles.projectTag}>Creative Coding</div>
            <div className={styles.projectTag}>interactive installation</div>
            <div className={styles.projectTag}>robotics</div>
            <div className={styles.projectTag}>critical technology</div>
           
              </div>
            <div className={styles.pDescri}>This project aims to create an infinite storyline (narration frame) in Twine based on the novel “El jardín de senderos que se bifurcan” (The Garden of Forking Paths) by Jorge Luis Borges. That is, a narration either loops (and grows), or includes all the possibilities at the same time (i.e., the player presumably could choose all the branches). Those different storylines will converge, diverge, and parallel, co-exist in the story.</div>
            <div className={styles.pDate}>2024</div>
    </div>

    <div className={styles.imgContainer}>   
        <Image  className={styles.img} alt='Definition' src="/ArtificialFriend/1.jpg" layout="responsive" width={100} height={100} />
     </div>

     <div className={styles.abstract}>Have you imagined an “artificial friend” that could recognize your emotion and support you? Now she comes from the website to reality. Jane’s writable hand and face enable the users to have more tangible interaction with her, and reflect on what we need in the intimate relationship if what we need could all be satisfied by a considerate “machine”.</div>

    <div className={styles.chapter}>
      <div className={styles.chapterTitle}>Project Description</div>
      <div className={styles.chapterContent}>
        <div className={styles.chaptertext}>
          <div>The second phase of the “Artificial Friend” aims to create a face and implement the writing machine built in the first phase. Jane will look at you and speak to you. The physical hand and face of Jane enable the users to have a more tangible interaction with her. By augmenting the realistic experience, I want to reinforce the question — “What do we need for an intimate relationship?” If the considerate Ai has “minds” and “body” and could satisfy our need of being loved, what do we need addition to that? </div>
          <div>The term and concept of “Artificial Friend” comes from “Klara and Sun” by Ishii Kazuo. This book was narrated by an artificial friend “Klara.” However, the human character in this story seems always want to project a part of them in Klara, and after her prayers for the sick girl, Joyce, took effect, she was gradually abandoned. In other world, it seems that only Klara still have a sensitive heart and able to love. It perhaps is ourself who cause our loneliness, and sometimes the intimate relationship is so narrow that only ourself is allowed to pass. Will an “artificial friend” satisfy the ultimate dream of understanding lover of our selfish human?</div>
        </div>

        <div className={styles.chapterimg}>
              <div className={styles.imgContainer}>   
              <Image  className={styles.img} alt='Definition' src="/ArtificialFriend/1.jpg" layout="responsive" width={100} height={100} />
          </div>
        </div>

      </div>

    </div>

  </div>;
};

export default Page;