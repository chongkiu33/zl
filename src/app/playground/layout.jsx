'use client';
import { usePathname } from 'next/navigation'
import Index from '../components/index/Index';
import styles from './pg.module.css';
import { WordProvider } from '../contexts/WordContext'; 




const PlaygroundLayout = ({ children}) => {
    const pathname = usePathname();

    return(
        <div >
           <WordProvider>
            <Index className={styles.index} pathname={pathname}/>
            
            <div className={styles.container}>
            {children}
            </div>
            </WordProvider>
        </div>
    )
}

export default PlaygroundLayout;