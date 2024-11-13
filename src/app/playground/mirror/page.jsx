import styles from '../pg.module.css';

const page = () => {
  return (
  <div>
    <div className={styles.spTitle}>Mirror</div>
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
                <div>"Mirror" allows the visitors to observe their standard facial expression of emotions. It questions facial recognition technology and how it impact our life.</div>
                <div>It asks: Since we use facial technology so frequently, will we share a “standard face” based on facial detection (AI) technology in the future?</div>
            </div>
            
     </div>

    <div className='bottomspace'></div>




</div>

  );
};

export default page;