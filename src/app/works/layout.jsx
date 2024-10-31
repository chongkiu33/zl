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

            <div className={styles.arrow}>
                <div className={styles.svgContainer}>
                    <svg id="_图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.76 20.79">
                        <path class="cls-1" fill='none' stroke='#000' strokeLinecap='round' strokeWidth={1.1} d="m188,17.69H4.42s34.04-.47,42.64-14.15"/>
                    </svg>
                </div>

                <div className={styles.svgContainer}>
                    <svg id="_图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.76 20.79">
                        <path class="cls-1" fill='none' stroke='#000' strokeLinecap='round' strokeWidth={1.1} d="m4.42,17.69h183.58s-34.04-.47-42.64-14.15"/>
                    </svg>
                </div>
            </div>

            <div className={styles.childrencontainer}>
            {children}
            </div>
        </div>
    )
}

export default WorkLayout;