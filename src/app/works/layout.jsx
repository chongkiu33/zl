import styles from './works.module.css';
import Image from 'next/image';



const WorkLayout = ({ children }) => {
    return(
        <div className={styles.container}>
           
            <div className={styles.header}>
                <div className={styles.workIndex}>
                    <div>Artificial Friend</div>
                    <div>The Garden of Forking Paths</div>
                </div>

                <div className={styles.tagContainer}>
                    <div className={styles.tag}>Animation</div>
                    <div className={styles.tag}>Interaction</div>
                    <div className={styles.tag}>Graphic Design</div>
                </div>

                <div className={styles.icons}>
                    <Image src="/icon/1.png"  width={40} height={24} />
                    <Image src="/icon/2.png"  width={40} height={24} />
                    <Image src="/icon/3.png"  width={40} height={24} />
                </div>
            </div>

            <div className={styles.Container}>
            {children}
            </div>
        </div>
    )
}

export default WorkLayout;