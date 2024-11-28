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
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";



const projects = [
    { id:1 , title: 'Artificial Friend',work:true},
    { id:2 , title: 'The Garden of Forking Paths',work:true},
    { id:3 , title: 'Graphic Theory Approach to Maze',work:true},
]

const allTags = ["robotics","interactive installation","critical technology","serious game","creative coding","mathematic", "algorithm"];


const WorkLayout = ({ children }) => {
    const {selectedTags, toggleTag} = useTag();
    const { layout, toggleLayout } = useLayout();
    
    const pathname = usePathname();

    // 提前生成每个项目的路径
    const isActive = (projectTitle) => {
        const projectSlug = projectTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        return pathname === `/works/${projectSlug}`;
    };
    

   


    return(
        
        <div className={styles.container}>
            <div >
            {React.cloneElement(children, { layout })}
            </div>
        </div>
       
    )
}

export default WorkLayout;