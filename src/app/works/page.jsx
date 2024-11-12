import styles from './works.module.css';
import Image from 'next/image';
import Link from 'next/link';

const works = [
    {
        id: 1,
        title: 'Artificial Friend',
        description: 'Have you imagined an “artificial friend” that could recognize your emotion and support you? Now she comes from the website to reality. Jane’s writable hand and face enable the users to have more tangible interaction with her, and reflect on what we need in the intimate relationship if what we need could all be satisfied by a considerate “machine”.',
        image: '/ArtificialFriend/1.jpg',
        link: '/works/artificial-friend',
        tags: ["interactive installation", "robotics","critical technology","creative coding"],
        date:"2023"
    },
    {
        id: 2,
        title: 'The Garden of Forking Paths',
        description: 'This project aims to create an infinite storyline (narration frame) in Twine based on the novel “El jardín de senderos que se bifurcan” (The Garden of Forking Paths) by Jorge Luis Borges. That is, a narration either loops (and grows), or includes all the possibilities at the same time (i.e., the player presumably could choose all the branches). Those different storylines will converge, diverge, and parallel, co-exist in the story.',
        image: '/path/Definition-768x339.jpeg',
        link: '/works/the-garden-of-forking-paths',
        tags: ["serous game", "creative coding"],
        date:"2023"
    },
];


const workPage = () => {
    return (
        <>
           <div className={styles.pageContainer}>
            {works.map((work) => (
                <>
                <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
                    </svg>
                <div key={work.id} className={styles.projectContainer}>
                    
                    <div className={styles.projectInfo}>
                    <div>
                    <Link href={work.link} className={styles.porjectTitle}>{work.title}</Link>
                    <div className={styles.tags}>{work.tags.map((tag) => (<span key={tag} className={styles.projectTag}>{tag}</span>))}</div>
                    </div>
                    <div className={styles.date}>{work.date}</div>
                    </div>

                <div className={styles.projectDescription}>{work.description}</div>

                <div className={styles.projectImg}>   
                    <Image  className={styles.fitimg} alt={work.title} src={work.image} fill />
                </div>





                </div>
                </>
            ))}
           </div>
        </>
    )
}

export default workPage;