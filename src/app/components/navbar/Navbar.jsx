import Link from "next/link"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>Zhuolin Li</div>
            <div><Link href="/works">Works</Link></div>
            <div><Link href="/playground">Playground</Link></div>
            <div><Link href="/about">About</Link></div>
        </div>
    )
};

export default Navbar