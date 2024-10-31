'use client';
import Index from '../components/index/Index';
import styles from './pg.module.css';


const PlaygroundLayout = ({ children }) => {
    return(
        <div>
            <Index  />
            <div className={styles.Container}>
            {children}
            </div>
        </div>
    )
}

export default PlaygroundLayout;