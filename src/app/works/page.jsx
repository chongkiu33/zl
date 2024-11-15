"use client"
import styles from './works.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTag } from '../contexts/TagContext'
import { useLayout } from '../contexts/LayoutContext'

import { useState } from 'react';


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
        tags: ["serious game", "creative coding"],
        date:"2024"
    },

    {
        id: 3,
        title: 'Graphic Theory Approach to Maze',
        description: 'Hi visitor, this is Beatrix, who did an independent study this semester to research on the graphic theory approach to maze, which is an interdisciplinary research focus both on mathematical language for graphs and its relationship with algorithms and other life-experiences with maze. ',
        image: '/Maze.jpg',
        link: '/works/graphic-theory-approach-to-maze',
        tags: ["mathematic", "algorithm"],
        date:"2024"
    }
    

];


const WorkPage = () => {
    const { selectedTags } = useTag();
    const { layout } = useLayout();

   


    const filteredWorks = selectedTags.length === 0
    ? works
    : works.filter(work => 
        selectedTags.every(tag => work.tags.includes(tag)) 
      );

    return (
        <>
        
           <div className={`${styles.pageContainer} ${layout =='grid3'?styles.grid3:''}`}>
            {filteredWorks.map((work) => (
                <div key={work.id} className={styles.project}>
                    <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
                    </svg>


                <div key={work.id} className={`${styles.projectContainer} ${layout =='grid3'?styles.flexcolum:''} ${layout =='bigimg'?styles.bigimg:''}`}>
                    
                    <div className={`${styles.projectInfo} ${layout =='bigimg'?styles.flexrow:''}`}>
                    <div>
                    <Link href={work.link} className={styles.porjectTitle}>{work.title}</Link>

                    {layout !== 'bigimg' && (
                    <div className={styles.tags}>{work.tags.map((tag) => (<span key={tag} className={styles.projectTag}>{tag}</span>))}</div>
                )}
                    </div>
                    {layout === 'bigimg' && (
                        
                    <div className={styles.pTag}>{work.tags.map((tag) => (<span key={tag} className={styles.projectTag}>{tag}</span>))}</div>
                   
                )}

{layout === 'bigimg' && (
                        
                        <div className={styles.pDescri}>{work.description}</div>
                    )}
                    {layout !== 'grid3' && (
                    <div className={styles.date}>{work.date}</div>
                    )}
                    </div>

                    {layout !== 'grid3'&& layout !== 'bigimg'  && (
                                <div className={styles.projectDescription}>{work.description}</div>
                    )}

                    <div className={`${styles.projectImg} ${layout =='grid3'|| layout =='bigimg'?styles.largerflex:''}`}>   
                        <Image  className={styles.fitimg} alt={work.title} src={work.image} fill />
                    </div>

                </div>
                   
                


                </div>
            ))}
           </div>
          
        </>
    )
}

export default WorkPage;