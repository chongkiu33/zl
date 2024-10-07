import Link from "next/link"
import styles from "./Rightbar.module.css"

const Rightbar = () => {
    const tags=[
        "-10",
        "-9",
        "-8",
        "-7",
        "-6",
        "-5",
        "-4",
        "-3",
        "-2",
        "-1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"

    ];

    return (
        <div className={styles.container}>
            {tags.map(tag => (
                <div key={tag}>{tag}</div>
            ))}
        </div>
    )
};

export default Rightbar