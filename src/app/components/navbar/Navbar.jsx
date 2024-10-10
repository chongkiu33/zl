import Link from "next/link"
import styles from "./Navbar.module.css"
import { motion } from "framer-motion";

const Navbar = () => {

  
    
    return (
        <div className={styles.container}>
            <div>Zhuolin Li</div>
            <div className={styles.wAndp}>
            
                <Link href="/works">Works</Link>
                <Link href="/playground">Playground</Link>
            </div>
            
            <div><Link href="/about">About</Link></div>
        </div>
    )
};

export default Navbar;