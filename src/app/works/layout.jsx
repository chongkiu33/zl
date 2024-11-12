"use client"
import { title } from 'process';
import styles from './works.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTag, TagProvider } from '../contexts/TagContext';
import { Tag } from 'lucide-react';



const projects = [
    { id:1 , title: 'Artificial Friend',work:true},
    { id:2 , title: 'The Garden of Forking Paths',work:true},
    { id:10 , title: 'Listen! Pied Piper is playing',work:false},
]

const allTags = ["robotics","interactive installation","critical technology","webpage","material","serious game","folklore","animation","fashion","graphic design","3D modeling","film","creative coding"];


const WorkLayout = ({ children }) => {
    const {selectedTags, toggleTag} = useTag();


    return(
        
        <div className={styles.container}>
         
            <div className={styles.header}>
            <ul className={styles.workIndex}>
                {projects
                    .filter(project => project.work) // 仅保留 work: true 的项目
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
                        className={styles.tag}
                        style={{
                            backgroundColor: selectedTags.includes(tag) ? 'black' : 'transparent' ,
                            color: selectedTags.includes(tag) ? 'white' : 'black'
                        }}
                        >{tag}</button>
                    ))}
                </div>

                <div className={styles.icons}>
                    <Image src="/icon/1.png"  width={40} height={24} />
                    <Image src="/icon/2.png"  width={40} height={24} />
                    <Image src="/icon/3.png"  width={40} height={24} />
                </div>
            </div>

          
            <div >
            {children}
            </div>
        </div>
       
    )
}

export default WorkLayout;