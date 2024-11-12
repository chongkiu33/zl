import { title } from 'process';
import styles from './works.module.css';
import Image from 'next/image';
import Link from 'next/link';


const projects = [
    { id:1 , title: 'Artificial Friend',work:true},
    { id:2 , title: 'The Garden of Forking Paths',work:true},
    { id:10 , title: 'Listen! Pied Piper is playing',work:false},
]

const allTags = ["All","robotics","interactive installation","critical technology","webpage","material","serious game","folklore","animation","fashion","graphic design","3D modeling","film","creative coding"];


const WorkLayout = ({ children }) => {
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
                        <button key={tag} className={styles.tag}>{tag}</button>
                    ))}
                </div>

                <div className={styles.icons}>
                    <Image src="/icon/1.png"  width={40} height={24} />
                    <Image src="/icon/2.png"  width={40} height={24} />
                    <Image src="/icon/3.png"  width={40} height={24} />
                </div>
            </div>

            {/* <div className={styles.arrow}>
                <div className={styles.svgContainer}>
                    <svg id="_图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.76 20.79">
                        <path class="cls-1" fill='none' stroke='#000' strokeLinecap='round' strokeWidth={1.1} d="m188,17.69H4.42s34.04-.47,42.64-14.15"/>
                    </svg>
                </div>

                <div className={styles.svgContainer}>
                    <svg id="_图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.76 20.79">
                        <path class="cls-1" fill='none' stroke='#000' strokeLinecap='round' strokeWidth={1.1} d="m4.42,17.69h183.58s-34.04-.47-42.64-14.15"/>
                    </svg>
                </div>
            </div> */}
          
            <div >
            {children}
            </div>
        </div>
    )
}

export default WorkLayout;