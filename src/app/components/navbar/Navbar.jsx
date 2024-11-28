
import Link from "next/link"
import styles from "./Navbar.module.css"
import { useRouter } from "next/router" 
import { useEffect } from "react";
import Switch from "react-switch";
import {usePoeticMode} from '../../contexts/PoeticModeContext'



const Navbar = ({pathname}) => {
    const {isPoeticMode, setIsPoeticMode} = usePoeticMode();
    
    const isPlaygroundPath = pathname.startsWith("/playground");

   

    
    return (
        <>
        <div className={`${styles.container} ${isPoeticMode? styles.checked : ''}`}>
            <div><Link className={styles.nav} href="/">Zhuolin Li</Link></div>
            <div className={styles.wAndp}>
            
                <Link className={styles.nav} href="/works">Works</Link>
                <div className={styles.playground}>
                <Link className={styles.nav}  href="/playground">Playground</Link>
                {isPlaygroundPath && (
              <div className={styles.switchContainer}>
                <div className={styles.side}>Side Projects</div>
                <div className={`${styles.side} ${isPoeticMode ? styles.checked : ""}`}>
                  Poetic Mode
                  <Switch
                    className={styles.switch}
                    checked={isPoeticMode}
                    onChange={setIsPoeticMode}
                    offColor="#888"
                    onColor="#0d6efd"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    height={18}
                    width={35}
                    handleDiameter={14}
                    borderRadius={20}
                  />
                </div>
              </div>
            )}
                </div>
                <Link className={`${styles.about2} ${styles.nav}`} href="/about">About</Link>
            </div>
            
            <div className={`${styles.about1} ${styles.nav}`}><Link href="/about">About</Link></div>
        </div>

        <div className={`${styles.side2} ${isPoeticMode? styles.checked : ''}`}>Poetic Mode
                <Switch
                    className={styles.switch}
                    checked={isPoeticMode}  // 设置开关的状态
                    onChange={setIsPoeticMode}  // 设置切换状态的回调
                    offColor="#888"  // 设置关闭时的颜色
                    onColor="#0d6efd"  // 设置开启时的颜色
                    uncheckedIcon={false}  // 关闭时没有图标
                    checkedIcon={false}  // 开启时没有图标
                    height={18}  // 设置开关的高度
                    width={35}  // 设置开关的宽度
                    handleDiameter={14}  // 设置滑块（内圆）的大小
                    borderRadius={20}  // 设置外圆角的大小
                   
                /></div>
        
        </>
    )
};

export default Navbar;


