import styles from './about.module.css'

const AboutPage = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.intro}>
            <div className={styles.introtext}>
            Zhuolin Li is a senior student and technician with a strong foundation in 3D animation, visual design, and physical fabrication techniques, including robotics. She is also actively engaged in innovative research to seek creative computational approaches to narration.
            <br></br>
            <br></br>
            After her previous research in implementing a pedagogical machine learning library (ml5.js) and building a therapeutic accompanying robot, she is aiming to seek to combine embodied experiences with scientific technology.
            </div>
            <div className={styles.introimage}></div>
            </div>

            <div className={styles.education}>
                <div className={styles.blockTitle}>Education</div>
                <div className={styles.content}>
                    <div>University of Arts, Camberwell</div>
                    <div className={styles.edumajor}>Graphic Design</div>
                    <div>2023</div>
                </div>
                <div className={styles.content}>
                    <div>University of Arts, Camberwell</div>
                    <div className={styles.edumajor}>Graphic Design</div>
                    <div>2023</div>
                </div>
                
            </div>

            <div className={styles.awards}>
                <div className={styles.blockTitle}>Awards</div>
                <div className={styles.content}>
                    <div>University of Arts, Camberwell</div>
                    
                    <div>2023</div>
                </div>
                
                
            </div>
        </div>

        </>
    )
}

export default AboutPage;