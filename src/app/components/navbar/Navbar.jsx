
import Link from "next/link"
import styles from "./Navbar.module.css"
import { motion } from "framer-motion";


const Navbar = () => {

  
    
    return (
        <div className={styles.container}>
            <div><Link href="/">Zhuolin Li</Link></div>
            <div className={styles.wAndp}>
            
                <Link href="/works">Works</Link>
                <Link href="/playground">Playground</Link>
                <Link className={styles.about2} href="/about">About</Link>
            </div>
            
            <div className={styles.about1}><Link href="/about">About</Link></div>
        </div>
    )
};

export default Navbar;