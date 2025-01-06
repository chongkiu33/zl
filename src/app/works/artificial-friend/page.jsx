'use client'
import styles from './af.module.css'
import Image from 'next/image'
import Link from 'next/link'
import 'highlight.js/styles/github.css';
import { useState } from 'react';
import SlideInFromBtn from '../../components/animation/SlideInFromBtn'
import dynamic from 'next/dynamic';
const CodeBlock = dynamic(() => import('../../components/codeblock/CodeBlock'), { ssr: false });

import coverimg from '../../../../public/ArtificialFriend/1.jpg'

import allMaterial from '../../../../public/ArtificialFriend/visualdocument/AllMaterial.png'

import arduino from '../../../../public/ArtificialFriend/visualdocument/Aruino.png'
import Motor from '../../../../public/ArtificialFriend/visualdocument/Motor.png'
import Hub from '../../../../public/ArtificialFriend/visualdocument/Hub.png'
import Preparedparts from '../../../../public/ArtificialFriend/visualdocument/Preparedparts_2.png'
import Mechanics from '../../../../public/ArtificialFriend/visualdocument/Mechanics_2.png'


import desimg  from '../../../../public/ArtificialFriend/visualdocument/robotics display Large.png'
import test  from '../../../../public/ArtificialFriend/visualdocument/test.png'
import fonts1  from '../../../../public/ArtificialFriend/visualdocument/1.png'
import fonts2 from '../../../../public/ArtificialFriend/visualdocument/2.png'
import vd1 from '../../../../public/ArtificialFriend/visualdocument/3_1.png'
import vd2 from '../../../../public/ArtificialFriend/visualdocument/4.png'
import vd3 from '../../../../public/ArtificialFriend/visualdocument/5.png'
import vd4 from '../../../../public/ArtificialFriend/visualdocument/6.png'

import ssembly1 from '../../../../public/ArtificialFriend/visualdocument/a1.png'
import ssembly2 from '../../../../public/ArtificialFriend/visualdocument/a2.png'
import ssembly3 from '../../../../public/ArtificialFriend/visualdocument/a3.png'

import Definition from '../../../../public/ArtificialFriend/visualdocument/finalhand.png'
import old  from '../../../../public/ArtificialFriend/visualdocument/olddisplay.png'

import img1 from '../../../../public/ArtificialFriend/1.jpg'
import img2 from '../../../../public/ArtificialFriend/visualdocument/holdpen_1.png'


import HandModel_Bot from '../../../../public/ArtificialFriend/visualdocument/HandModel_Bot.png'
import HandModel_Top from '../../../../public/ArtificialFriend/visualdocument/HandModel_Top.png'
import Riging from '../../../../public/ArtificialFriend/visualdocument/Rigging.png'
import Skinweight2 from '../../../../public/ArtificialFriend/visualdocument/Skinweight2.png'

import UV from '../../../../public/ArtificialFriend/visualdocument/UV.png'
import Full from '../../../../public/ArtificialFriend/visualdocument/Full.png'
import Sub from '../../../../public/ArtificialFriend/visualdocument/Sub.png'

import Light from '../../../../public/ArtificialFriend/visualdocument/Light.png'
import Render from '../../../../public/ArtificialFriend/visualdocument/Render Settings.png'

import AF1 from '../../../../public/ArtificialFriend/2.png'
import AF2 from '../../../../public/ArtificialFriend/3.png'

import Final1 from '../../../../public/ArtificialFriend/Final Design_Mirror.png'
import Final2 from '../../../../public/ArtificialFriend/Final Design.png'

const Page = () => {
  const [overview, setOverview] = useState(true);

  const toggleMode = (mode) => {
    setOverview(mode); // toggle between true and false
  };

  return <div>
    <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
        </svg>
    <div className={styles.pHeader}>
            <div className={styles.pTitle}>Artificial Friend</div>
            <div className={styles.pTag}>
            <div className={styles.projectTag}>Creative Coding</div>
            <div className={styles.projectTag}>interactive installation</div>
            <div className={styles.projectTag}>robotics</div>
            <div className={styles.projectTag}>critical technology</div>
           
              </div>
            <div className={styles.pDescri}>Have you imagined an “artificial friend” that could recognize your emotions and support you? Now, she is coming from the website to reality. Jane could recognize your emotions and respond to you in a written note along with a caring voice. This interactive installation aims to reflect on what we need in an intimate relationship if what we need could all be satisfied by a considerate “machine.”</div>
            <div className={styles.pDate}>2023</div>
    </div>

    <div className={styles.imgContainer}>   
        <Image  className={styles.img} alt='Definition' placeholder='blur' src={coverimg} layout="responsive" width={100} height={100} />
     </div>


    <div>
      <div style={{display:'flex', justifyContent:'center',marginTop:'50px'}}>
        <div style={{flex:'2',borderBottom:'1px solid black'}}></div>
      <button className={`${styles.sectionButton} ${overview ? styles.active : ''}`} onClick={() => toggleMode(true)}>
        Overview
        </button>
      <button  className={`${styles.sectionButton} ${overview ? '' : styles.active}`} onClick={() => toggleMode(false)}>Visual Documentation</button>
      <div style={{flex:'2',borderBottom:'1px solid black'}}></div>
      </div>
      {/* <svg style={{transform:'translateY(-15px)',zIndex:'-1'}}   height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <line  x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1" />
      </svg> */}
    </div>

    {!overview && (
     
    <div className={styles.chapterC}>
    <div className={styles.chapterTitle}>Visual Documentation</div>
    <div className={styles.chapterContent}>
      <div className={styles.chaptertext}>
        
        This visual documentation contains the process of assembling physical installation assembly, and making the of 3D modeling and animation.
        <div>
        <SlideInFromBtn >
        <h3>Physical Installation</h3>
        <h4>All Materials</h4>
        <div className={styles.imgContainer}>   
              <Image  className={styles.img} alt='Definition' placeholder='blur' src={allMaterial} layout="responsive" width={100} height={100} />
        </div>
        <div className={styles.imgContainer3} >   
              <div className={styles.img3}>
                <Image   alt='visualdocument' placeholder='blur'  src={arduino} layout="responsive" width={100} height={100} />
                <p className={styles.cation}>Arduino and Pen Holder</p>
              </div>

              <div className={styles.img3}>
                <Image   alt='visualdocument' placeholder='blur' src={Motor} layout="responsive" width={100} height={100} />
                <p className={styles.cation}>Motor</p>
              </div>

              <div className={styles.img3}>
                <Image   alt='visualdocument' placeholder='blur' src={Hub} layout="responsive" width={100} height={100} />
                <p className={styles.cation}>Hubs (For Poles)</p>
              </div>

              <div className={styles.img3}>
                <Image   alt='visualdocument' placeholder='blur' src={Preparedparts} layout="responsive" width={100} height={100} />
                
                <p className={styles.cation}>Prepared Parts</p>
              </div>
              <div className={styles.img3}>
                
                <Image   alt='visualdocument' placeholder='blur' src={Mechanics} layout="responsive" width={100} height={100} />
                <p className={styles.cation}>Prepared Parts</p>
              </div>
             
              
          </div>

          </SlideInFromBtn>
         
          <SlideInFromBtn >
          <h3>User Testing</h3>
          <div>
          <video
                    src="/ArtificialFriend/visualdocument/Success.mov"
                    controls
                    loop
                    width={"100%"}
                  ></video>
          </div>
          <div>1.Test Arduino’s functions</div>
          <div>2.Upload GRBL </div>
          <div>3.Open Universal Gcode Sender and Use ”Machine-Setup Wizard” to test the stepper motors</div>
          <div style={{color: "red",fontWeight: "light",opacity: "0.6"}} >Error Find: Part of My Arduino (CNC Sheild) is broken, that’s why the stepper motor did not move when I follow the instruction.  I also burnt it once</div>
          </SlideInFromBtn>
        </div>

        <SlideInFromBtn >
        <div>
          <h3>Software</h3>
          <Link className={styles.link}  href="https://howtomechatronics.com/tutorials/how-to-setup-grbl-control-cnc-machine-with-arduino/">Learning GRBL and Universal G code Sender</Link>

          <h4>Another Video’s with Tutorials for Writing Machine</h4>
          <Link className={styles.link}  href="https://www.youtube.com/watch?v=WgsTyhX311E">DIY Arduino Writing/ Drawing Machine - 2D Pen Plotter</Link>
          <Link className={styles.link}  href="https://www.youtube.com/watch?v=WgsTyhX311E">DIY Arduino CNC Drawing Machine</Link>

          <h4>Trouble Shooting: Different Cable for Z-axis motor</h4>
          <Link className={styles.link}  href="https://github.com/bdring/Grbl_Pen_Servo/tree/master/grbl">bdring/Grbl_Pen_Servo</Link>
          <div>This GRBL library use the difference of frequency to control the Z-axis</div>
        </div>
        </SlideInFromBtn>
        
        <SlideInFromBtn >
        <div>
          <h3>Final Product (be able to move X,Y ans Z axis)</h3>
          <div><iframe title="vimeo-player" src="https://player.vimeo.com/video/805846071?h=a700ec972a" width="100%" height="360" frameborder="0"    allowfullscreen></iframe></div>
          
          <h4>Coding (Send to serial port and wait for Arduino say“OK”)</h4>
          <div></div>
          <Link className={styles.link}  href="https://editor.p5js.org/gohai/sketches/UZZcwpZ6o">Text to G-Code</Link>
          <Link className={styles.link}  href="https://editor.p5js.org/gohai/sketches/zo2qyIy-Y">G-Code Flow Control</Link>

          <div></div>
          <Link className={styles.link} href="https://editor.p5js.org/B2xx/sketches/J6GwyP4Hdi"> test1combination copy</Link>

          <h4>Final Configration and Modification</h4>
          <div>A new version of GRBL library in oder to not write in 45 degree</div>

        </div>
        </SlideInFromBtn>

        
        <SlideInFromBtn >
        <div>
        <h3>Description of the components:</h3>
        <div className={styles.documentContainer}>
          <div className={styles.imgWrapper}>   
                <Image  className={styles.img} alt='Definition' placeholder='blur' src={desimg} layout="responsive" width={100} height={100} />
          </div>
          <div className={styles.videoWrapper}>
          <iframe
            src="https://drive.google.com/file/d/1lGrErK2YQh33vMMKw52CvUHj945o9guj/preview"
            width="100%"
                height="300"
            allow="autoplay"
            className={styles.video}
          ></iframe>
          <p className={styles.cation}>The video that shows how it works:</p>
        </div>
        
        </div>
        </div>
        </SlideInFromBtn>

        <SlideInFromBtn >
        <div>
          <h3>Deal with the 45angle problem:</h3>
          <div>Grbl 0.9i(45) and 1.1f</div>
          <div>Check the grbl uploading with Arduino and universal g code sender. There are problem that the Arduino said upload successfully, yet the universal g code sender might not updated.</div>
          <div className={styles.solution}>Sol: before writing, check the grbl is 1.1f</div>
        </div>
        </SlideInFromBtn>


        <SlideInFromBtn >
        <div>
          <h3>Deal With Trembling Problem</h3>
          <h4>Discover_1:</h4>
          <div>The reason why it has annoyed sound or move like a pile driver machine is because its restrictor has restricted the movement of circles(Look into the description above). A high z_up or z_down command will make the control pole collide with the restricter strongly thus create the noise.</div>
          <div className={styles.solution}>Sol: To deal with a strong collision, set z_up to low.</div>
          <div>Comparison</div>

         

           <div className={styles.documentContainer}>

          
              <div className={styles.videoWrapper}>
              <iframe
                src="https://drive.google.com/file/d/1lzlrTFztp0zMxWYPqyU930cdVO-eDepH/preview"
                width="100%"
                height="300"
                allow="autoplay"
                className={styles.video}
              ></iframe>
              <p className={styles.cation}>Large Z_up and huge noise</p>
            </div>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://drive.google.com/file/d/1lzlrTFztp0zMxWYPqyU930cdVO-eDepH/preview"
                width="100%"
                height="300"
                allow="autoplay"
                className={styles.video}
              ></iframe>
              <p className={styles.cation}>Small Z_up and small noise | </p>
            </div>

            </div> 

            <h4>Discover_2:</h4>
          <div>The reason why it is tremble is because the stepper motor do not have power when it do not receive z command.</div>
          <div className={styles.solution}>Sol: Still finding ways to deal with this problem. (better perform withour the spring)</div>
          <h4>Discover_3:</h4>
          <div>The spring is useless, it could not help to maintain the status of the pen.</div>
          <div>Comparison</div>
                 <div className={styles.documentContainer}>
                  
                      <div className={styles.videoWrapper}>
                      <iframe
                        src="https://drive.google.com/file/d/1nzZ9Bt_p3pZY5-sT-ZSkb3knf-CXCkCU/preview"
                        width="100%"
                        height="300"
                        allow="autoplay"
                        className={styles.video}
                      ></iframe>
                      <p className={styles.cation}>Move with Spring</p>
                    </div>

                    <div className={styles.videoWrapper}>
                      <iframe
                        src="https://drive.google.com/file/d/1RFFhXJtsvDjkNSsvAC0syzJwsg9NrAxf/preview"
                        width="100%"
                        height="300"
                        allow="autoplay"
                        className={styles.video}
                      ></iframe>
                      <p className={styles.cation}>Move without Spring </p>
                    </div>

                  </div> 

                    <div className={styles.solution}>Sol: Remove the spring</div>

                    <div>Documentation of what happened without the spring: Works smoother and do not have the risk of colliding springs when writing</div>

        </div>
        </SlideInFromBtn>


        <SlideInFromBtn >
        <div>
          <h3>Deal with the speed</h3>
          <div>Use single-line font to mimic human writing and save time. </div>
        </div>

        <div>
          <h3>Testing Single Letter Fonts</h3>
                  <div className={styles.documentContainer}>
                  <div className={styles.imgWrapper}>   
                        <Image  className={styles.img} alt='Definition' placeholder='blur' src={test} layout="responsive" width={100} height={100} />
                        <p className={styles.cation}>Testing different single line fonts and record how many command it send to the Arduino</p>
                  </div>
                  <div className={styles.videoWrapper}>
                  <iframe
                    src="https://drive.google.com/file/d/1WgMCOCGQn-KT-hIs92aXY2me3gANPzYa/preview"
                    width="100%"
                    height="300"
                    allow="autoplay"
                    className={styles.video}
                  ></iframe>
                  <p className={styles.cation}>Discover:

                  The Feasible Single-line has the smallest amount of the command;

                  The Feasible Single-line font has repetitive movement (see the video below)</p>
                </div>
                </div> 

            <h4>Testing and compare with the previous fonts (Wondering if the curve and the other elements will affect its writing speed)</h4>
            <div className={styles.documentContainer}>
                  <div className={styles.imgWrapper}>   
                        <Image  className={styles.img} alt='Definition' placeholder='blur' src={fonts1} layout="responsive" width={100} height={100} />
                        
                  </div>
                  <div className={styles.imgWrapper}>   
                        <Image  className={styles.img} alt='Definition'  placeholder='blur' src={fonts2} layout="responsive" width={100} height={100} />
                        
                  </div>
              
                </div>


        </div>
        

        <div>
          <h3>Solve the problem of Speed and Flip writing</h3>
          <div>Universal Gcode Sender</div><Link href="https://github.com/gnea/grbl/blob/master/doc/markdown/settings.md">gnea/grbl/settings.md</Link>
          <div>Speed: (<strong>[X,Y,Z] Acceleration, mm/sec^2</strong>) $120,$121, $122 = 250</div>
          <div>Flip writing: $3 =1 </div>
        </div>
        </SlideInFromBtn>

       

        <div>
        <SlideInFromBtn >
          <h3>Implement the 3D -printed hand model</h3>
          <h3>User-Testing with hand model</h3>
          <h4>Re-design the machine</h4>

          <div className={styles.imgContainer2} >   
              <Image  className={styles.img2} alt='visualdocument' placeholder='blur' src={vd1} layout="responsive" width={100} height={100} />
              <Image  className={styles.img2} alt='visualdocument' placeholder='blur' src={vd2} layout="responsive" width={100} height={100} />
              <Image  className={styles.img2} alt='visualdocument' placeholder='blur' src={vd3} layout="responsive" width={100} height={100} />
              <Image  className={styles.img2} alt='visualdocument' placeholder='blur' src={vd4} layout="responsive" width={100} height={100} />
              
          </div>

          <div>Use this pen-holder and 3D printed hand model instead</div>
          <h4>ssembly the pen to the hand </h4>
          
          <div className={styles.imgContainer2} >   
              <Image  className={styles.img2} alt='visualdocument' placeholder='blur' src={ssembly1} layout="responsive" width={100} height={100} />
              <Image  className={styles.img2} alt='visualdocument' placeholder='blur' src={ssembly2} layout="responsive" width={100} height={100} />      
              <Image className={styles.img2}  alt='visualdocument' placeholder='blur' src={ssembly3} layout="responsive" width={100} height={100} />
              
              
              </div>
         
          <p className={styles.cation}>Design an Angle so that the pen could touch the paper</p>
          </SlideInFromBtn>

          <SlideInFromBtn >

          <h4>The Final Hand for a continuous aesthetic</h4>
          <div className={styles.documentContainer} >
                  <div >   
                        <Image  className={styles.img} alt='Definition' placeholder='blur' src={Definition} layout="responsive" width={100} height={100} />  
                  </div>
                  <div >
                 
                  <video
                    src="/ArtificialFriend/visualdocument/Success.mov"
                    controls
                    loop
                    width={"100%"}
                  ></video>
              
                </div>
            </div>
            </SlideInFromBtn>
          

        </div>

        <SlideInFromBtn>
        <h4>Continuesly User-Testing with Screen & Webcam</h4>
        <div className={styles.documentContainer} >
        <div >
                 
                 <video
                   src="/ArtificialFriend/visualdocument/Old Display.mov"
                   controls
                   loop
                   width={"100%"}
                 ></video>
             <p className={styles.cation}>Old display</p>
               </div>
                  <div >   
                        <Image  className={styles.img} alt='old' placeholder='blur' src={old} layout="responsive" width={100} height={100} />  
                  </div>
                  
            </div>

            <div>Final Decision: The modern screen would be more suitable for the concept of “Artificial Friend.”o l</div>
            <div>Add a Bluetooth Speaker</div>
            <div style={{color: "red"}}>Add a black pedestal for the display</div>
            <div style={{color: "red"}}>Add a light for the hand</div>
            </SlideInFromBtn>

            <SlideInFromBtn>
            <h3>Final</h3>
            <div >   
                        <Image  className={styles.img} alt='old' placeholder='blur'  src={img1} layout="responsive" width={100} height={100} />  
            </div>
            </SlideInFromBtn>

            

            <h3>Digital Model</h3>
            <h4>Hand Model </h4>
            <Link href="https://drive.google.com/drive/u/0/folders/1rnO2sfSMsaKTbDTrUlcJFmCvdnmE_o6m">File</Link>
            <h4>Sketches</h4>
            <div >   
                        <Image  className={styles.img} alt='old'  placeholder='blur' src={img2} layout="responsive" width={100} height={100} />  
            </div>

            <h4>Animation:</h4>
            <ul>
              1.3D animation:
              <li>Modeling the hand:<Link href="https://drive.google.com/drive/u/0/folders/1rnO2sfSMsaKTbDTrUlcJFmCvdnmE_o6m">Folder</Link>
              <div >   
                        <Image  className={styles.img} alt='old' placeholder='blur' src={HandModel_Bot} layout="responsive" width={100} height={100} />  
                        <Image  className={styles.img} alt='old' placeholder='blur' src={HandModel_Top} layout="responsive" width={100} height={100} />  
            </div>
              </li>
              <li>Rigging
              <div >   <Image  className={styles.img} alt='old' placeholder='blur' src={Riging} layout="responsive" width={100} height={100} />   </div>
              </li>
              <li>Paint Skin Weight for each Joints<br/>
              Trouble Shooting: Put UV first then do the rigging or else the UV will get distorted so that when the finger bends it will become more nature
              <div >   <Image  className={styles.img} alt='old' placeholder='blur' src={Skinweight2} layout="responsive" width={100} height={100} />   </div>
              </li>
              <li>Unfold UV and paint UV 
                <div>   <Image  className={styles.img} alt='old' src={UV} layout="responsive" width={100} height={100} /> 
                <Image  className={styles.img} alt='old' placeholder='blur' src={Full} layout="responsive" width={100} height={100} />
                <Image  className={styles.img} alt='old' placeholder='blur' src={Sub} layout="responsive" width={100} height={100} />
                  </div>
              </li>
              <li>Rerigging and repaint the skin weight
              Adobe Substance Painte</li>
              <li>Light and Shade:Arnold Rendere and its Light</li>
              <li>Camera Work: Set Perspective Camera and Keys
              <div >   <Image  className={styles.img} alt='old' placeholder='blur' src={Light}  layout="responsive" width={100} height={100} />   </div>
              </li>
              <li>Render Animation:
              Render Settings
              <div >   <Image  className={styles.img} alt='old' placeholder='blur' src={Render} layout="responsive" width={100} height={100} />   </div>
              </li>
            </ul>
            <ul>
            2.AE complement:
              <li>Typewriter Effects</li>
              <li>Blink Expression</li>
            </ul>



      </div>

    </div>

      </div>
     
    )}


    {overview &&(

    <>
    <SlideInFromBtn >
     <div className={styles.abstract}>Have you imagined an “artificial friend” that could recognize your emotion and support you? Now she comes from the website to reality. Jane’s writable hand and face enable the users to have more tangible interaction with her, and reflect on what we need in the intimate relationship if what we need could all be satisfied by a considerate “machine”.</div>
     </SlideInFromBtn>


     <SlideInFromBtn delay={0.1}>
    <div className={styles.chapter}>
      <div className={styles.chapterTitle}>Project Description</div>
      <div className={styles.chapterContent}>
        <div className={styles.chaptertext}>
          <div>The second phase of the “Artificial Friend” aims to create a face and implement the writing machine built in the first phase. Jane will look at you and speak to you. The physical hand and face of Jane enable the users to have a more tangible interaction with her. By augmenting the realistic experience, I want to reinforce the question — “What do we need for an intimate relationship?” If the considerate Ai has “minds” and “body” and could satisfy our need of being loved, what do we need addition to that? </div>
          <div>The term and concept of “Artificial Friend” comes from “Klara and Sun” by Ishii Kazuo. This book was narrated by an artificial friend “Klara.” However, the human character in this story seems always want to project a part of them in Klara, and after her prayers for the sick girl, Joyce, took effect, she was gradually abandoned. In other world, it seems that only Klara still have a sensitive heart and able to love. It perhaps is ourself who cause our loneliness, and sometimes the intimate relationship is so narrow that only ourself is allowed to pass. Will an “artificial friend” satisfy the ultimate dream of understanding lover of our selfish human?</div>
          <div>I try to build up an artificial friend to lead my audience to think those questions and callback their love abilities.</div>
          <div>Also, the response ability of Jane relates to the Large Language Machines(LLMs) like ChatGpt or GPT-4. These LLMs  generates statistical likely continuations of word sequence. Therefore, the thought of they could communicate is a kind of anthropomorphism. This makes me think that these LLM could be the “transformer” under the human skin: they could mimic human deeds, yet they do not have such intentions. For example, LLMs could understand “little star” should follow the “twinkle twinkle,” but they do not understand the meaning of these two phrases, regardless of any related cultural context. The problem is, they iminate so well. It makes me think that they have already “live” in our society yet we could not find them. </div>
          <div>This humanization of machines shakes our human uniqueness. Many of the marks that we once considered to be human are no longer applicable. LLMs could persuade us they feel pain from learning sentences, if with physical installation, they even could persuade us that they ached.  However, they just perform these, the real pain might never occur to them. This gaming makes the mark and the measure of pain unapplicable for the machines. We needs to think other words abscribe their situations because it will become too risky to think them as one of them (The risk of anthropomorphism).</div>
        </div>

        <div className={styles.chapterimg}>
              <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='Definition' placeholder='blur' src={AF1} layout="responsive" width={100} height={100} />
              </div>

              <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='Definition' placeholder='blur' src={AF2} layout="responsive" width={100} height={100} />
              </div>
        </div>

      </div>

    </div>
    </SlideInFromBtn>



    <SlideInFromBtn delay={0.1}>
    <div className={styles.chapterC}>
      <div className={styles.chapterTitle}>Context And Perspective </div>
      <div className={styles.chapterContent}>
        <div className={styles.chaptertext}>
          <ul>
            <strong>What Do We Need in an Intimate Relationship</strong>
            <li>“Klara and Sun” - Selfish Human? Inability to give, or to love</li>
            <li>True / Fake Friend <br/>
            Special Design for “Sad”</li>
            <li>Reflection on human relationship<br/>
            If what we need could be satisfied by a customized AI, would you be satisfied? Or what do we need in addition to “AF”?</li>
          </ul>

          <ul>
          <strong>Over relying AI & Risks</strong>
            <li>“It was me that was wrong”</li>
            <li>Technology’s strong impact on defining how we feel</li>
            <li>Media & Identity: Too relied on media when we make judgement</li>
          </ul>

          <ul>
          <strong>Facial expression & cultural background</strong>
            <li>Is there universal facial expression? How many facial expressions do we have?</li>
            <li>Complexity of how people “expressed” their feelings</li>
          </ul>

          <ul>
          <strong>Large Language Machine</strong>
            <li>The mechanism for AI’s reply (lack of ‘intentional stance’)</li>
            <li>Anthropomorphism</li>
            <li>The monster under a ‘human skin’?</li>
          </ul>

          <div>
          <strong>Designs and Ideas</strong>
          I have developed a realistic clown looking in my first phase of designing. However, I believe the “artificial friend” should be “friend” with all kinds of people. Therefore, I develop multiple designs, and finally choose the ideal one, which features both the modern and technological feeling of AF and the design of the hand in the phase 1. (For more information about my previous design, <Link href="https://www.notion.so/a57103d9155f4e34aadd5a711801ae04">click here</Link>)
          </div>
          <div className={styles.imgContainer2}>   
                <Image  className={styles.img2} alt='Definition' placeholder='blur' src={Final1} layout="responsive" width={100} height={100} />
                <Image  className={styles.img2} alt='Definition' placeholder='blur' src={Final2} layout="responsive" width={100} height={100} />
          </div>

          
        </div>

        

      </div>

    </div>
    </SlideInFromBtn>

    <SlideInFromBtn>
    <div className={styles.chapterC}>
      <div className={styles.chapterTitle}> Implement the Writing Machine</div>
      <div className={styles.chapterContent}>
        <div className={styles.chaptertext}>  
          <ul>
            <strong>Hardware</strong>
            <li>Spring<br/>
            Unequip the spring to develop the stability</li>
            <li>Hand and its connect component<br/>
            Redesign the connect part of the machine</li>
          </ul>

          <ul>
            <strong>Software( Universal Gcode Sender & Single-Line Font & Code)</strong>
            <li>- Universal Gcode Sender<br/>
    
    Flip the direction: $2<br/>
    
    Speed accelerate: $120, 121, 122</li>
            <li>Single Line font</li>
            <li>Code</li>
            <li>Code implementation:</li>
              <ul>
                <li><Link className={styles.link}href="https://editor.p5js.org/B2xx/sketches/u7XbauSwT"></Link>Develop a web-based eye-tracking program (use ml5.js faceApi)</li>
                <li>Test and Develop the Single-line fonts</li>
                <li><Link className={styles.link} href="https://editor.p5js.org/B2xx/sketches/u7XbauSwT">Develop the web-display of Jane’s outlook </Link></li>
                <li><Link className={styles.link} href="https://editor.p5js.org/B2xx/sketches/J6GwyP4Hdi">Save code for speed up for the machine</Link></li>
                <li>Develop additional close port function
                <CodeBlock language='javascript' >
            {`closeBtn = createButton('Disconnect to Arduino');
closeBtn.position(80,100);
closeBtn.mousePressed(closeBtnClick);`}
            </CodeBlock>
                </li>
                <li><Link className={styles.link} href="https://idmnyu.github.io/p5.js-speech/#examples"></Link>Match the sound and the writing speed (use speaker Api)</li>
                <ul>
                  <li>- Short list of reference that I use for coding<br/>
    
    Webserial Port: Gohai’s Webserial port<br/>
    
    Face Display: Design and combined with facial detection<br/>
    
    Sound Api: Window sythesis speaker<br/>
    
    User-friendly design: close for accidentally interrupt…</li>
                </ul>
              </ul>
          </ul>
          

          
        </div>
      </div>
    </div>
    </SlideInFromBtn>

    <SlideInFromBtn >
    <div className={styles.chapterC}>
      <div className={styles.chapterTitle}>User Testing </div>
      <div className={styles.chapterContent}>
        <div className={styles.chaptertext}>
            
        <div><strong>Objectives</strong><br/>
            Feedback: Overall Experience<br/>
Physical Installation: Testers see how well the face combined with the writing plotter
Testing Method: Connect to computer and testing with softwares (Arduino & Universal Gcode)
          </div>

          <div>
          <strong>Testing Method</strong>
          <div>Ask the participants to play the machine and see if they are satisfied with the overall experience. </div>
         </div>



          <div>
          <strong>Data Collection Method</strong>
          <div>Feedback Forms, Recordings and Text Documentation (Check the progress Journal)</div>
          </div>


          <div>
          <strong>Conducting the Test(s)</strong><br/>
          <strong>Physical Installation:</strong>
          <div>1.N402 Studio with Fellow Kevin on 3.10</div>
          <div>2.N402 Studio with Andy on 3.24</div>
          <div>3.Officehour with Professor Gohai on 4.14</div>
          <div>4.N402 Studio with Fellow Kevin on 4.23</div>
          <div>5.N402 Studio with Professor Gohai on 4.26</div>
          <div>6.N306 (Classroom) with classmates on 5.2</div>
          <div>7.N306 Studio with Steve on 5.4</div>

          </div>

          <div>
          <strong>Test Results</strong>
          <ul>
          Problems and Solutions:
            <li>Speed up: $120, $121, $122 =250 (accelerate speed)</li>
            <li>Suitable writing ratio: size_x=40, size_y=10 for grbl 1.1</li>
            <li>Suitable writing ratio: size_x=20</li>
          </ul>
          </div>

          <div>
          <strong>Revisions</strong>
          <div>Decide which aesthetic of the face should go for, and how it coordinate with my whole concept. </div>
          <div>Decide the displays</div>
          </div>  
        </div>

        

      </div>

    </div>
    </SlideInFromBtn>

    <SlideInFromBtn >


    <div className={styles.chapterC}>
      <div className={styles.chapterTitle}> Presentation</div>
      <div className={styles.chapterContent}>
        <div className={styles.chaptertext}>
        My presentation includes the experience part and the presentation part. For the experience part, the player could enjoy how the machine working. Then I present the brief, context and perspective, and the techniques part.    
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000' ,marginBottom: '20px',marginTop: '20px'}}>
            <iframe
                src={`https://www.youtube.com/embed/2jZ6KTySoWY`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
        </div> 
        
        

        

      </div>

    </div>
    </SlideInFromBtn>
    <SlideInFromBtn>
    <div className={styles.chapterC}>
      <div className={styles.chapterTitle}> Conclusion</div>
      <div className={styles.chapterContent}>
        <div className={styles.chaptertext}>
              <div>From this project, I learn more about how to build machines (and fix the problems if the machine do not work, how to find the reason of that problem), how Arduino and steppor motor works, some related software like GRBL and the universal Gcode. I also learn more about the design and setting for the installation, how to use the 3D printer, how to print things. During the process, I also practices my graphic design skills.</div>
              <div>I discovered that evaluate how long the project takes and its difficulty is very important when you start a project. I think I did a great job in showing my whole concept and its visual expression. </div>
              <div>Future potential:</div>
              <div>A portable “artificial friend” according to my tape design</div>
              <div>A more natural sound for the “artificial friend”</div>
              <div>Professor Stavros Didakis advise me maybe could let this “hand” to paint some abstract patterns based on Artificial Friend Jane’s responses instead of simply write them down.</div>
              <div>This reminds me of “Story of Your Life” by Ted Chiang, the heptapods has a special written language (They write in a circle and nonlinear way) because they do not experience time linearly.</div>
              <div>I’m wondering, does Ai has their language? (not the syntax or the 0,1 thing but some language based on how they “experience” the world) - and I will make that language present in an artistic way. </div>


        </div>  

      </div>

    </div>
    </SlideInFromBtn>
    </>

    )}

    <div className='bottomspace'></div>

  </div>;
};

export default Page;