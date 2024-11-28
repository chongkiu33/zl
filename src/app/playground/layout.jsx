'use client';
import { usePathname } from 'next/navigation'
import Index from '../components/index/Index';
import styles from './pg.module.css';
import { WordProvider } from '../contexts/WordContext'; 
import { AnimatePresence, motion } from "framer-motion";




const PlaygroundLayout = ({ children}) => {
    const pathname = usePathname();

    return(
        <div >
           <WordProvider>
            <Index className={styles.index} pathname={pathname}/>
            
            <div className={styles.container}>
            <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // 根据 pathname 切换动画
          initial={{ opacity: 0, y: '50%' }} // 初始状态
          animate={{ opacity: 1, y: 0 }}      // 动画结束状态
          exit={{ opacity: 0, y: '-100%' }}   // 离场状态
          transition={{
            type: "tween",
            duration: 0.4, // 动画持续时间
          }}
          style={{
            
            width: '100%',
            height: '100%',
          }}
        >
            {children}
            </motion.div>
      </AnimatePresence>
            </div>
            </WordProvider>
        </div>
    )
}

export default PlaygroundLayout;