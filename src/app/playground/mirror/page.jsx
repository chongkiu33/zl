import styles from '../pg.module.css';
import Link from 'next/link';
import ProjectTags from '../../components/ProjectTag/ProjectTag'

const page = () => {
  return (
  <div>
    <div className={styles.spTitle}>Mirror</div>
    <ProjectTags projectName="Mirror" />
    <div className="video-container">
      <video
        src="/Mirror/Mirror.mp4"
        controls
        autoPlay
        loop
        className="responsive-video"
      ></video>
    </div>


    <div className={styles.spChapter}>
            <div className={styles.spChapterTitle}></div>
            <div className={styles.spChapterText}>
                <Link className={styles.link} target="_blank" href="https://editor.p5js.org/B2xx/sketches/I8LqtQtui">Click here to interact with the mirror </Link>
                <div>"Mirror" allows the visitors to observe their standard facial expression of emotions. It questions facial recognition technology and how it impact our life.</div>
                <div>It asks: Since we use facial technology so frequently, will we share a “standard face” based on facial detection (AI) technology in the future?</div>
            </div>
            
     </div>

    <div className='bottomspace'></div>




</div>

  );
};

export default page;