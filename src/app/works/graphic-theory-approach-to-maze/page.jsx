import styles from '../works.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {    
  return (
    <div className={styles.pContainer}> 
    <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
        </svg>
        <div className={styles.pHeader}>
            <div className={styles.pTitle}>Graphic Theory Approach to Maze</div>
            <div className={styles.pTag}>
              <div className={styles.projectTag}>mathmematics</div>
              <div className={styles.projectTag}>algorithm</div>
              </div>
            <div className={styles.pDescri}>Hi visitor, this is Beatrix, who did an independent study this semester to research on the graphic theory approach to maze, which is an interdisciplinary research focus both on mathematical language for graphs and its relationship with algorithms and other life-experiences with maze.</div>
            <div className={styles.pDate}>2024</div>
        </div>

        <div className={styles.imgContainer}>   
        <Image  className={styles.img} alt='Definition' src="/Maze.jpg" layout="responsive" width={100} height={100} />
     </div>


     <div className={styles.abstract}>
        Hi visitor, this is Beatrix, who did an independent study this semester to research on the graphic theory approach to maze, which is an interdisciplinary research focus both on mathematical language for graphs and its relationship with algorithms and other life-experiences with maze. If you are interested, please follow me to look at the materials together!
        <br/>
        <Link href="https://drive.google.com/drive/folders/1myJaiXxAKtMZMfZz7dkSzha-YyBICz_y?usp=share_link">The google drive link with all materials</Link>
     </div>


     <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Week 1 - 2: Review Graphic Theory</div>
            <div className={styles.pChapterContent}>
                <h3>A Brief review of important theories</h3>
                <div style={{ width: '100%', height: '500px' }}>
                    <iframe
                        src="https://docs.google.com/presentation/d/1X_3HQ7NroabdK3Eik3Vt18Hyr5BI6EWI7JFPjfRUV3g/edit#slide=id.g2894b770c42_0_46"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    ></iframe>
                    </div>
                <div>
                Reference: 
                R.J. Wilson: Introduction to Graph Theory, Longman.<br/>
                Edward R. Scheinerman: Mathematics, a Discrete Discussion, 3rd Edition. (Chapter 9 Graph pp.331-374)<br/>
                For you guys who might interested in other classic problems in Graph Theory:<Link href="https://maggiezli.medium.com/graph-theory-101-590d13d00074">Graph Theory</Link>
                </div>

                <h3>Important proof and application of Graphic Theory: 
                Kuratowski’s Theorem</h3>
                <div>(Kuratowski theorem is a good example of testing wether yourself is familiar with the graph and its theory)</div>
                <div style={{ width: '100%', height: '500px' }}>
                    <iframe
                        src="https://docs.google.com/presentation/d/10TeykVQ17KS97ZsK-F1UOEQoh5uAg_FeWVZLE_Dj-PU/edit#slide=id.p"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    ></iframe>
                    </div>
                <div>
                Video presentation: 
                </div>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' ,marginBottom: '20px'}}>
            <iframe
                src={`https://www.youtube.com/embed/zPmfppvokUY&t=28s`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
                </div>
        </div>
               

    </div>


    <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Week 3-4: Maze Solving Algorithm</div>
            <div className={styles.pChapterContent}>

            <div style={{ width: '100%', height: '500px' }}>
                    <iframe
                        src="https://docs.google.com/presentation/d/1i3EpDTNSZf9YayJuTahMReH7N0L75skf8nVhSL_cRRQ/edit"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                    ></iframe>
            </div>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' ,marginBottom: '20px',marginTop: '20px'}}>
            <iframe
                src={`https://www.youtube.com/embed/Wx3hfRri8P0&t=143s`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
                </div>


                <div>BFS Example: </div>
                <Link href="https://colab.research.google.com/drive/1y10DqvQ_hiEQIwzKNqfuGOAdlWrb6bEW?usp=share_link">Google Colab</Link>
                <div>Reference: </div>
                <div>avin Kumar and Sandeep Kaur : A Review of Various Maze Solving Algorithms Based on Graph Theory, IJSRD - International Journal for Scientific Research & Development| Vol. 6, Issue 12, 2019 | ISSN (online): 2321-0613.</div>
                <div>Adil M. J. Sadik, Maruf A. Dhali, Hasib M. A. B. Farid, Tafhim U Rashid, A. Syeed: A Comprehensive and Comparative Study of Maze-Solving Techniques by Implementing Graph Theory. International Conference on Artificial Intelligence and Computational Intelligence (AICI), 2010  Volume: 1 </div>
            </div>

    </div>



    <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Week 5 - 6: Symbolic Approach to Graph</div>
            <div className={styles.pChapterContent}>



               
                <div>Reference: </div>
                <div>G.D. Hachtel and F. Somenzi. A symbolic algorithm for maximum flow in 0–1
                networks. Formal Methods in System Design, 10:207–219, 1997</div>
                <div>Sawitzki, D. (2004). <Link href="https://doi.org/10.1007/978-3-540-30559-0_13">A Symbolic Approach to the All-Pairs Shortest-Paths Problem.</Link> In: Hromkovič, J., Nagl, M., Westfechtel, B. (eds) Graph-Theoretic Concepts in Computer Science. WG 2004. Lecture Notes in Computer Science, vol 3353. Springer, Berlin, Heidelberg.  </div>
            </div>

    </div>


    <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Week 7: Maze Types</div>
            <div className={styles.pChapterContent}>



                
                <Link href="https://www.astrolog.org/labyrnth/algrithm.htm#solve">Walter D.Pullen Think Labyrinth:Maze Algorithms</Link>
                
                <div>A great source of reviewing maze types and maze solving algorithms. </div>
            </div>

    </div>




    <div className='bottomspace'></div>
    </div>

    )
}
   
 export default Page;