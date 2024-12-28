"use client"
import { useScroll } from '@react-three/drei'
import styles from '../works.module.css'
import Image from 'next/image'
import { useState } from 'react'
import ExpandableList from '../../components/ExpandableList/ExpandableList'




const Page = () => {
    const [isOpen, setIsOpen] = useState(false)


    const listItems = [
        "Kozaburo Hamamoto (68): owner of the Ice Floe Mansion and President of Hama Diesel",
        "Eiko Hamamoto (23): Kozaburo’s daughter",
        "Kohei Hayakawa (50): live-in butler and chauffeur",
        "Chikako Hayakawa (44): Kohei’s wife, live-in housekeeper",
        "Haruo Kajiwara (27): live-in chef"
      ];

      const listItems2 = [
        "Eikichi Kikuoka (65): President of Kikuoka Bearings",
        "Kumi Aikura (22): Mr Kikuoka’s secretary and mistress",
        "Kazuya Ueda (30): Mr Kikuoka’s chauffeur",
        "Michio Kanai (47): executive at Kikuoka Bearings",
        "Hatsue Kanai (38): Michio’s wife",
        "Shun Sasaki (26): student at Jikei University School of Medicine",
        "Masaki Togai (24): Tokyo University student",
        "Yoshihiko Hamamoto (19): Keio University student, grandson of Kozaburo Hamamoto’s brother”"


      ];

      const listItems3 = [
        "Kozaburo Hamamoto (68): owner of the Ice Floe Mansion and President of Hama Diesel"];

    const toggleShow = () => {
        setIsOpen(!isOpen); // toggle between true and false
      };


  return (
    <div  className={styles.pContainer}>
        <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
        </svg>
        <div className={styles.pHeader}>
        
            <div className={styles.pTitle}>The Murder in Crooked House: interactive fiction version</div>
            <div className={styles.pTag}>
              <div className={styles.projectTag}>Serious Game</div>
              <div className={styles.projectTag}>Creative Coding</div>
              </div>
            <div className={styles.pDescri}>I use interactive fiction to reconstruct the experience of a horror murder in a crooked house, which adopted certain setting and storyline from the book The Murder in Crooked House by Soji Shimada. </div>
            <div className={styles.pDate}>2024</div>
        </div>


        <div className={styles.iframeContainer}>
            <iframe src={"/TheMurder/Release/play.html"}  width="100%" height="600"></iframe>
            
            
        </div>

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Project Brief</div>
            <div>I use interactive fiction to reconstruct the experience of a horror murder in a crooked house, which adopted certain setting and storyline from the book The Murder in Crooked House by Soji Shimada. </div>
            
        </div>

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>What is Interactive Fiction</div>
            <div>Interactive Fiction is a form of software that creates simulated environments in which players control characters and affect the environment using text commands. </div>
            
        </div>

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Brief Introduction of The Murder in Crooked House by Soji Shimada</div>
            <div>The Crooked House sits on a snowbound cliff overlooking icy seas at the remote northern tip of Japan, which is a curious place for the millionaire Kozaburo Hamamoto to build a house. However, even more curious is the house itself – a disorienting maze of sloping floors and strangely situated staircases, full of bloodcurdling masks and uncanny, lifesize dolls. When a man is found dead in one of the mansion’s rooms, murdered in seemingly impossible circumstances, the police are called. But they are unable to solve the puzzle, and powerless to protect the party of house guests as more bizarre deaths follow.</div>
            
        </div>


        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Why to use Interactive Fiction to recreate the experience?</div>
            <ul>
                <li>Interactive Fiction allows users to interact with the characters in the novel, creating a real-time case investigation experience.</li>
                <li>Interactive Fiction allows users to access to maps, character sheets, and crime scenes and many other crime solving tools without flipping through a book.</li>
                <li>Unlike mobile games, interactive fiction do not have a portrait of main character, so it makes the user easier to recognize themselves as the detector</li>
            </ul>
            
        </div>

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Map</div>
            <div>The house is designed tilted to the south, and there’s only 3 ways to access to the front door, which is shown on the graph below</div>
            <div style={{display: 'flex',gap:'40px'}}>
                <div style={{flex:0.7,display:"flex",flexDirection:"column",gap:'5px'}}>
                    <div className={styles.imgContainer}>   
                        <Image  className={styles.img} alt='Definition' src="/TheMurder/Map_1.png" layout="responsive" width={100} height={100} />
                    </div>
                    <div className={styles.imgContainer}>   
                        <Image  className={styles.img} alt='Definition' src="/TheMurder/ice floe mansion.png" layout="responsive" width={100} height={100} />
                    </div>
                </div>
                <div style={{flex:1,display:"flex",flexDirection:"column"}}>
                    
                Room 1: Kumi Aikura <br/>
                Room 2: Eiko Hamamoto <br/>
                Room 3: Display / Tengu Room <br/>
                Room 4: Library <br/>
                Room 5: Salon <br/>
                Room 6: Haruo Kajiwara <br/>
                Room 7: Kohei and Chikako Hayakawa <br/>
                Room 8: Yoshihiko Hamamoto <br/>
                Room 9: Michio and Hatsue Kanai <br/>
                Room 10: Kazuya Ueda (sports equipment storeroom) <br/>
                Room 11: Table tennis room <br/>
                Room 12: Masaki Togai <br/>
                Room 13: Shun Sasaki <br/>
                Room 14: Eikichi Kikuoka (study) <br/>
                Room 15: Unoccupied<br/>
                Room 16: Kitchen<br/>
                The Tower: Kozaburo Hamamoto<br/>
                
                </div>
            </div>
            
        </div>


        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Character Sheet</div>
            <div>There are lots of characters in the novel, some are only appear for only one or two times, in the interactive novel version, I will delete some of the unnecessary characters to create a more immersive and clear playing experience.</div>
            <div>This is the updated character sheet: </div>
            <ExpandableList title="The Residents of the Ice Floe Mansion" items={listItems} />
            <ExpandableList title="The Guests" items={listItems2} />
            <ExpandableList title="The Police" items={listItems3} />
            </div>


            <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Designs</div>
            <div>
                <h3>Detective Settings</h3>
                <div>To create a detective setting for the player to solve the problem, I typically designed multiple tools for crime-solving. They are notes, maps, character, scene, and help: the classic toolset from detective games.
                </div>
            </div>
            

            <div>
            <strong>Notes:</strong> Notes will automatically record the important information that you encountered to help you solve the crime. If you need to recall any important thing or want to review the suspicious items. You could type in notes to find some help.
            </div>


            <div>
            <strong>Maps:</strong> Maps will display the plan of the house.
            </div>

            <div>
            <strong>Character: </strong>Characters will provide you with a character sheet to remind you who they are. Since the guests are in the Salon, You could also examine(x) them there.[Too many characters, need to delete some and talkable for playability; a table of characters that is readable everywhere might be better; plot design related to characters which will talked about in the changes and adaptations section]
            </div>

            <div>
            <strong>Scene: </strong>(I will change the name later as I found it’s a default name of IF Rules) Scene could provide you a graph of the murder room for you to reflect.
            </div>
            

            <div>
            <strong>Help:</strong> Reminds you of these helpful tools that you could use during solving the crime.
            </div>

            <div>
            <strong>Solve: </strong>Additionally, I created a solve action so that the player could use it to solve the crime when they are ready, which shares some similarities with the questioning process in court.   (Consider changing it with the scene as it might be easy to forget and add ane bad end with scene rules. )
            </div>

            <div>
            <h3>Key Values and Judgments</h3>

            According to the original story.  I pick 5 important elements from the novel as the key to investigating the crime. After the player examines the 5 important things and types “solve“, they will be able to solve the crime using the clues.
            </div>

            <div>
            <h3>Key Typical directions according to the Map</h3>
            <div>I designed the directions based on the accessibility of the room instead of its absolute location.</div>
            <div>For example, the room 10 is absolutely above room 12. However, room 10 is actually only accessible from the west outside ground. Therefore, you could not use “up” or “u” to move the player from room 12 to room 10. </div>
            <div>The designs in the stairway also follow this rule. The “up” or “u” or room 3 is room 8.
            These examples are shown below</div>

            <div className={styles.imgContainer} style={{padding:'20px 0px 20px 0px'}}>   
                <Image  className={styles.img}  alt='Definition' src="/TheMurder/Map_2.png" layout="responsive" width={100} height={100} />
            </div>

            <div>Also, there are only 3 ways to access to go to the outside, please take reference to the previous map.</div>
            </div>


            <div >
            <h3>Changes and Adaptations of the original story</h3>
                <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
                <div>The most significant change I made is when the player “enters” the story. In order not to interrupt the planning of the first-night murder. Instead of reading the novel as a documentation of the detective assistant as the reader, the player in the game arrives and investigates the crime at the same time as the police officers. Therefore, the player could be the detective. However, I realize this change with result in the unfamiliarity of the characters, especially since there are so many. To solve this unfamiliarity, I designed that each of them should have some chance to talk with the player so that the player could know better what happened to them last night (not completed yet).</div>
                <div>I cut down lots of descriptive text from the novel, but not sure if I need to cut more, (Advises welcome! )</div>
                <div>Unfortunately due to the fact that I haven’t fully decided on how to adapt the second murder into IF (The detective in the novel also fakes several small accidents to put pressure on the real murderer, I’m not sure about how to deal with the part. )</div>
                </div>
            </div>

            <div>
            <h3>IF Game Flow Design</h3>
            <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
            <div>I would like my IF game to have some tutorial part to introduce the tools and the way they are recommended to interact with the others/ environment before the investigation starts. Therefore, at the beginning of the story, the player is invited to try on two actions.</div>
            <div>At the police’s car, the user could try the “ask” action, which is super important for the later investigation.</div>
            <div>During the process, lots of other tools are introduced and could be used by the user before solving the crime.</div>
            </div>
            </div>


        </div>


        <div className='bottomspace'></div>
    </div>
    )
}

export default Page;