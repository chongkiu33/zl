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
        date:"2023"
    },
    {
        id: 10,
        title: 'Am I Too Much',
        description: 'This project is a reflexive diary about my confusion of wether the language is a suitable medium to describe the embodied feelings. It involves several loops, so remember to play it for at least three times before you open the spoiler. ',
        image: '/AmItoomuch/sampleOutput_1.1.png',
        link: '/playground/am-i-too-much',
        tags: ["serious game", "creative coding"],
        date:"2023"
    },
    {
        id: 11,
        title: 'Enhanced Memory',
        description: ' This project is an -omancy about “predicting” your visited websites and constructing an identity based on your browser history.',
        image: '/enhancedMemory/ChromExtension_ScreenShot.png',
        link: '/playground/enhanced-memory',
        tags: ["critical technology", "creative coding"],
        date:"2023"
    },
    {
        id: 12,
        title: 'ChatGpt as Tarot Reader',
        description: 'This ChatGPT-based Tarot Reading prototype asks ChatGPT to handle and read cards for the querents. I believe the ChatGPT is a credible reader that provides the most conventional interpretation as it learns from common human language practices. The ritualized process was inspired by Calvino’s “The Castle of Crossed Destinies” and other conventional Tarot practices on YouTube and TikTok, which handle and read tarot in a creative and engaging way.',
        image: '/chatGPT/flow_Charts.png',
        link: '/playground/chatgpt-as-tarot-reader',
        tags: ["critical technology", "webpage","creative coding"],
        date:"2023"
    },
    {
        id: 13,
        title: '“Listen! Pied Piper is playing”',
        description: ' This is a sketch based on the story The Pied Piper of Hameln, which happened in the town named Hamelin. ',
        image: '/listen/cover.png',
        link: '/playground/listen-pied-piper-is-playing',
        tags: ["folklore","serious game", "creative coding"],
        date:"2023"
    },
    {
        id: 14,
        title: 'Mirror',
        description: ' "Mirror" allows the visitors to observe their standard facial expression of emotions. It questions facial recognition technology and how it impact our life.',
        image: '/Mirror/Mirror.png',
        link: '/playground/mirror',
        tags: ["serious game", "creative coding"],
        date:"2023"
    },

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
                <div key={work.id} className={`${styles.projectContainer} ${layout =='grid3'?styles.flexcolum:''}`}>
                    
                    <div className={styles.projectInfo}>
                    <div>
                    <Link href={work.link} className={styles.porjectTitle}>{work.title}</Link>
                    <div className={styles.tags}>{work.tags.map((tag) => (<span key={tag} className={styles.projectTag}>{tag}</span>))}</div>
                    </div>
                    {layout !== 'grid3' && (
                    <div className={styles.date}>{work.date}</div>
                    )}
                    </div>

                {layout !== 'grid3' && (
                            <div className={styles.projectDescription}>{work.description}</div>
                        )}

                <div className={`${styles.projectImg} ${layout =='grid3'?styles.largerflex:''}`}>   
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