import styles from './works.module.css';
import Image from 'next/image';


const workPage = () => {
    return (
        <>
        


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
       
        </>
    )
}

export default workPage;