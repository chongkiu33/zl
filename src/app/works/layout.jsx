"use client"
import { title } from 'process';
import styles from './works.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTag, TagProvider } from '../contexts/TagContext';
import { Tag } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
import { useLayout } from '../contexts/LayoutContext';



const projects = [
    { id:1 , title: 'Artificial Friend',work:true},
    { id:2 , title: 'The Garden of Forking Paths',work:true},
    { id:10 , title: 'Listen! Pied Piper is playing',work:false},
]

const allTags = ["robotics","interactive installation","critical technology","serious game","creative coding"];


const WorkLayout = ({ children }) => {
    const {selectedTags, toggleTag} = useTag();
    const { layout, toggleLayout } = useLayout();

   


    return(
        
        <div className={styles.container}>
         
            <div className={styles.header}>
            <ul className={styles.workIndex}>
                {projects
                    .filter(project => project.work) 
                    .map(project => (
                        <li key={project.id}>
                            <Link href={`/works/${project.title.replace(/\s+/g,'-').toLowerCase()}`}>
                                {project.title}
                            </Link>
                        </li>
                    ))}
            </ul>

                <div className={styles.tagContainer}>
                    {allTags.map(tag => (
                        <button 
                        key={tag}
                        onClick={() => toggleTag(tag)}  
                        className={`${styles.tag} ${selectedTags.includes(tag) ? styles.selectedTag : ''}`}
                        >{tag}</button>
                    ))}
                </div>

                <div className={styles.icons}>
                    <Image src="/icon/1.png"  onClick={() => toggleLayout('default')} width={40} height={24} />
                    <Image src="/icon/2.png" onClick={() => toggleLayout('grid3')}  width={40} height={24} />
                    <Image src="/icon/3.png" onClick={() => toggleLayout('bigimg')} width={40} height={24} />
                </div>
            </div>

          
            <div >
            {React.cloneElement(children, { layout })}
            </div>
        </div>
       
    )
}

export default WorkLayout;