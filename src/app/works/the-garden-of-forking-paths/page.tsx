"use client"
import styles from '../works.module.css'
import Image from 'next/image'
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import dynamic from 'next/dynamic';
const CodeBlock = dynamic(() => import('../../components/codeblock/CodeBlock'), { ssr: false });
import {useState} from "react";


const Page = () => {
  const [isEasyMode, setIsEasyMode] = useState(true);

  const toggleMode = () => {
    setIsEasyMode(!isEasyMode); // toggle between true and false
  };

  return (
    <div className={styles.pContainer}>
      <svg className={styles.line} height="2" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="1" x2="100%" y2="1" stroke="black" strokeWidth="1.5" />
        </svg>
        <div className={styles.pHeader}>
        
            <div className={styles.pTitle}>The Garden of Forking Paths</div>
            <div className={styles.pTag}>
              <div className={styles.projectTag}>Serious Game</div>
              <div className={styles.projectTag}>Creative Coding</div>
              </div>
            <div className={styles.pDescri}>This project aims to create an infinite storyline (narration frame) in Twine based on the novel “El jardín de senderos que se bifurcan” (The Garden of Forking Paths) by Jorge Luis Borges. That is, a narration either loops (and grows), or includes all the possibilities at the same time (i.e., the player presumably could choose all the branches). Those different storylines will converge, diverge, and parallel, co-exist in the story.</div>
            <div className={styles.pDate}>2024</div>
        </div>

        <div className={styles.iframeContainer}>
            <iframe src={isEasyMode ? "/path/EasyMode.html" : "/path/hardMode2.html"}  width="100%" height="600"></iframe>
            <button className={styles.modeButton} onClick={toggleMode} >{isEasyMode ? "Switch to Hard Mode" : "Switch to Easy Mode"}</button>
            
        </div>

        

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Concept Demonstration</div>
            <div>
            In the novel “El jardín de senderos que se bifurcan”, Ts’ui Pên, who was governor of Yunnan province in China, proposed to write a book that could be read infinitely. He believes there are three ways to write such a book:
            </div>
            <ul>
                <li>“A volume whose last page would be the same as the first and so have the possibility of continuing indefinitely”</li>
                <li>“In all fiction, when a man is faced with alternatives he chooses one at the expense of the others. In the almost unfathomable Ts’ui Pen, he chooses – simultaneously – all of them. He thus creates various futures, various times which start others that will in their turn branch out and bifurcate in other times.”</li>
                <li>“Differing from Newton and Schopenhauer, your ancestor did not think of time as absolute and uniform. He believed in an infinite series of times, in a dizzily growing, ever spreading network of diverging, converging and parallel times. This web of time – the strands of which approach one another, bifurcate, intersect or ignore each other through the centuries一embraces every possibility.”</li>
            </ul>

            <div>I generalize those three ways into:</div>
            <ul>
                <li>Start and End are the same (Loop (and Grow))</li>
                <li>Choose different possibilities at the same time</li>
                <li>Diverging, converging, and parallel</li>
            </ul>

            <div>As I want to use Twine as a medium of showing such infinite narration I choose to take reference from narration patterns from “Standard Patterns in Choice-Based Games” to show this narration. Here are some important definitions.</div>
        </div>



        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Definitions</div>
            <strong>Step</strong>
            <div>
            From a regular plot (Orange Rectangle) to the next Orange Rectangle(Different for Branch and Bottleneck and Quest mode, they use modules for a regular plot, I will elaborate on that in the development part)</div>

            <strong>Plot</strong>
            <ul>
            
                <li>Regular Plots (Orange Rectangle in graphs, ORecText in code)</li>
                <li>Special Plots (Yellow Rectangle in graphs, YRecText in code)</li>
                <li>sucEnd (Green Rectangle in graphs, sucEnd in code)</li>
                <li>failEnd (Red Rectangle in graphs, failing in code)</li>
            </ul>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='Definition' src="/path/Definition-768x339.jpeg" layout="responsive" width={100} height={100} />
            </div>

            

            <CodeBlock language='javascript'>
{`
function generateTC() {
  const randomNum = random([2, 3]);
  const generateText = " || " + randomNum + " " + oRecText;
  console.log("Time Cave");
}

function generateTCEnd() {
  EndText += " || " + random([2, 3]) + " " + sucEnd + " " + random([0, 1]) + " ";
  console.log("TCEnd");
}`}
            </CodeBlock>

        </div>

       

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Development</div>
            <strong>Firstly, I summarize the rules for Time Cave and Gauntlet narration from the article. Then, I draft codes for each step of the Time Cave Narration and Gauntlet Narration.</strong>
    
            
            <ul className="dashed-list">
            The Rule for Time Cave
                <li>Heavily Branches</li>

                <li>Many, many Ends</li>
            </ul>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='Definition' src="/path/timecaveb.png" layout="responsive" width={100} height={100} />
            </div>

            <CodeBlock language='javascript'>
            {`
function generateG() {
  randomNum = random([0, 1]);
  generateText =" || " + 1 + " " + oRecText + " " + randomNum + " " + random([failEnd, oRecText, yRecText]);

  console.log("Guantlet");
}

function generateGEnd() {
  let k = int(random(1, 5));
  if (k <= 2) {
    EndText += " || " + failEnd + " " + sucEnd;
  } else {
    EndText += " || " + int(k - 1) + " " + failEnd + " " + sucEnd;
  }

            `}
            </CodeBlock>

            <ul className="dashed-list">
            The Rule for Gauntlet
                <li>Linear Central Story</li>

                <li>Pruned by branches that end in death, backtrack</li>
            </ul>
            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='gauntlet' src="/path/gauntlet.png" layout="responsive" width={100} height={100} />
            </div>

            <CodeBlock>
                {`createP("The Start");
  stepArrayFunc[int(random(0, stepArrayFunc.length))]();
  createP(generateText);
  let matches = generateText.match(pattern);
  if (matches !== null) {
    LoopNum = 0;
    // Loop through each match and add it to the sum
    for (let i = 0; i < matches.length; i++) {
      LoopNum += parseInt(matches[i]); // Convert the match to a number and add it to the sum
    }
  }
                `}
            </CodeBlock>

            <CodeBlock>
                {`
    for (let i = 0; i < steps; i++) {
    generateAllText = "";
    for (let i = 0; i < LoopNum; i++) {
      generateText = "";
      stepArrayFunc[int(random(0, stepArrayFunc.length))]();
      generateAllText += generateText + " ";
    }
    createP("Step " + int(i + 1));
    createP(generateAllText);

    let matches = generateAllText.match(pattern);

    // Check if matches were found
    if (matches !== null) {
      LoopNum = 0;
      // Loop through each match and add it to the sum
      for (let i = 0; i < matches.length; i++) {
        LoopNum += parseInt(matches[i]); // Convert the match to a number and add it to the sum
      }
      console.log("LoopNum:", LoopNum);
    }
  }
                `}
            </CodeBlock>
            <strong>
            Thirdly, I summarize the rules for Branches and Bottleneck Narration. Then, I draft codes for each step of Branches and Bottleneck Narration.
            </strong>


            <ul>
            The Rule for Branches and Bottleneck Narration
                <li>Branches but regularly rejoin</li>
                <li>State-Track: Affect the end of the story</li>
            </ul>

            <div>
            How do I design steps that branch but regularly rejoin (Each step of Branches and Bottleneck Narration contains two or more orange rectangles to make sure convergence happens, I delete one orange rectangle for LoopNum to make sure each step in Branches and Bottleneck Narration is recognized as one step)
            </div>

            <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='bottlebranch' src="/path/bottlebranch.png" layout="responsive" width={100} height={100} />
            </div>
            
            <CodeBlock>
                {`
function generateBnB() {
  randomNum = 1;
  generateText = 
    " || " +
    1 +
    " " +
    oRecText +
    "\\ " +
    random([3, 4, 5]) +
    " " +
    yRecText +
    " " +
    random([0, 1]) +
    " " +
    failEnd +
    "\\ " +
    1 +
    " " +
    oRecText +
    " " +
    "(BnB)";
  console.log("BnB");
  BnBNum++;
}
                `}
            </CodeBlock>
        <div>
        Design of the step<br/>
     Delete one LoopNum as each step in BnB has 2 orange rectangles
        </div>

        <CodeBlock>
 {`
 if (matches !== null) {
    LoopNum = 0;
    // Loop through each match and add it to the sum
    for (let i = 0; i < matches.length; i++) {
      LoopNum += parseInt(matches[i]); // Convert the match to a number and add it to the sum
    }
    LoopNum -= BnBNum;
    BnBNum = 0;
  }
`}
        </CodeBlock>

        <ul>
        The Rule for Branches and Bottleneck Narration
            <li>Branches but regularly rejoin</li>
            <li><strong>State-Track: Affect the end of the story</strong></li>
        </ul>

        <div>
        I add a grow system to track the state of the story. The grow system will count how many yellow rectangles are there in the narration and add “counting” a random number from -1, 0, 1. This number of “counting” will affect the end of bottleneck and branch narration.
        </div>

        <CodeBlock>
{`
function Grow() {
  let paragraphs = selectAll("p");
  let passages;

  for (let i = 0; i < paragraphs.length; i++) {
    passages += paragraphs[i].elt.textContent;
  }

  let matches = passages.match(patternYRec);
  let occurrences = 0;

  // Check if matches were found
  if (matches !== null) {
    // Loop through each match and add it to the sum
    for (let i = 0; i < matches.length; i++) {
      occurrences += parseInt(matches[i]); // Convert the match to a number and add it to the sum
    }
  }

  counting = 0;
  for (i = 0; i < occurrences; i++) {
    counting += random([-1, 0, 1]);
  }
  // console.log("counting:", counting)
}
`}
        </CodeBlock>

        <CodeBlock>
{`
function generateBnBEnd(){
  if (counting < 0){
    EndText += " || " + 3 + " " + failEnd
  }else if(counting == 0){
    EndText += " || " + 3 + " " + sucEnd + " " + 3 + " " + failEnd
  }else if(counting > 0){ 
    EndText += " || " + 3 + " " + sucEnd
  }
  console.log("BnBEnd")
}
`}
        </CodeBlock>

        <strong>
        Last but not least, I try to summarize the rule for Quest narration and code to generate a step for the Quest Narration. (Haven’t successfully finished yet for LoopNum)
        </strong>

        <ul>
        The Rule for Quest Narration
            <li>tend to rejoin to reach a relatively small number of winning endings (often only one).</li>
            <li>small, tightly grouped clusters of nodes allowing many ways to approach a single situation, with lots of interconnection within each cluster and relatively little outside it</li>
        </ul>


        <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='quest' src="/path/quest.png" layout="responsive" width={100} height={100} />
        </div>

        <div>What the cluster looks like in one step of Quest Narration.

Because of the complicated relationship between rectangles within one step, I use the mathematical way of describing a graph to code it.</div>
        

        <div className={styles.imgContainer}>   
                <Image  className={styles.img} alt='Screenshott' src="/path/Screenshot.png" layout="responsive" width={100} height={100} />
        </div>

        <div>
        The Mathematical way of describing a Quest.<br/>

The demo of how I use a mathematical way to generate the step for quest narration | https://editor.p5js.org/B2xx/sketches/vp3egvtrg
<br/>
A sketch for the combination of four narration types: https://editor.p5js.org/B2xx/sketches/b3AjUFh8H
        </div>

        </div>


        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Comments & Thoughts</div>
            <ul>
                <li>It could be utilized as a tool for building a story by Twine (give you a rule about narration structure)</li>
                <li>Against the traditional way of “constructing a narration” based on plots, it provides a frame and leaves the plot undecided. While the traditional way of “constructing a narration” might start with plots that analyze the narration frame.</li>
                <li>Similar to Tracery (assume a story has a beginning, middle, and end then fill in it)</li>
                <li>Will Twine be enough (for an infinite story)?Some researchers claim that Inform7 misleads the concept of space while wandering around the rooms using simply 8 directions.</li>
            </ul>
        </div>

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Next Steps</div>
            <ul>
                <li>Polish the Code</li>
                <li>Figure out how to make a Loop and Grow System</li>
                <li>(The beginning and the end are the same is not enough for a Loop and Grow System. The system will grow (has some different branches every turn) while looping.)</li>
                <li>Other Implementation</li>
                <ul className={styles.rightlist}>
                    <li>deleZeros (delete 0 rectangles in the text part for a clearer view)</li>
                    <li>openMaps (player could move back and forth)</li>
                    <li>converging (converging storylines)</li>
                </ul>
                <li>From p5 to Twine (automatically) – [The Demo in Twine is made by me manually] – Thinking about using Twee or Gephi as tools</li>
            </ul>
            
        </div>

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>End Notes</div>
            I would like to end this documentation with my favorite part of the novel. Here it goes:
            <div className={styles.quote}>

            “Under the trees of England I meditated on this lost and perhaps mythical labyrinth. <br/>

            I imagined it untouched and perfect on the secret summit of some mountain;<br/>

            I imagined it drowned under rice paddies or beneath the sea;<br/>

            I imagined it infinite, made not only of eight-sided pavilions and of twisting paths but also of rivers, provinces and kingdoms…<br/>

            I thought of a maze of mazes, of a sinuous, ever-growing maze which would take in both past and future and would somehow involve the stars.<br/>

            Lost in these imaginary illusions I forgot my destiny一that of the hunted.<br/>

            For an undetermined period of time I felt myself cut off from the world, an abstract spectator.<br/>

            The hazy and murmuring countryside, the moon, the decline of the evening, stirred within me.<br/>

            Going down the gently sloping road I could not feel fatigue.<br/>

            The evening was at once intimate and infinite.<br/>

            </div>

            “The Garden of Forking Paths” 
            
        </div>


        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Other Links</div>
            <div><strong>Twine Demos</strong>:Easy Mode: https://b2xx.itch.io/easymode-garden-demoHard Mode: [https://itch.io/game/edit/2673879#published](https://b2xx.itch.io/hardmode-garden-demo)</div>

            <div><strong>Presentation Slides</strong>: https://docs.google.com/presentation/d/1Mw7vax5O5SxaeuSGWet5iaas_gaw8X52oodZqI7i21A/edit?usp=sharing</div>

            <div><strong>p5 Links</strong>:Time Cave + Gauntlet: https://editor.p5js.org/B2xx/sketches/BKuuzfkEtTime Cave + Gauntlet + Branch and BottleNeck: https://editor.p5js.org/B2xx/sketches/pltbr8YFKQuest: https://editor.p5js.org/B2xx/sketches/vp3egvtrgCombination: https://editor.p5js.org/B2xx/sketches/b3AjUFh8H</div>
            
        </div> 

        <div className={styles.pChapter}>
            <div className={styles.pChapterTitle}>Reference</div>
            Standard Patterns in Choice-Based Games
        </div>

    <div className='bottomspace'></div>

    </div>
);

};

export default Page;