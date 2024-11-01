'use client';
import Index from '../components/index/Index';
import styles from './pg.module.css';


const PlaygroundLayout = ({ children }) => {
    return(
        <div>
            <Index  />
            <div className={styles.container}>
            {children}
            </div>
        </div>
    )
}

export default PlaygroundLayout;