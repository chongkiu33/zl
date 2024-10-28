"use client"; 
import styles from './test.module.css';
import { useEffect } from 'react';
import React from 'react';



const TestPage = () => {
    const getRandomIntInclusive = (min = -20, max = 20) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const splitWordsAndLetters = (text, wordClass, letterClass) => {
        return text.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className={wordClass}>
                {word.split('').map((char, charIndex) => (
                    <span key={charIndex} className={letterClass}>
                        {char}
                    </span>
                ))}
                
                <span className={styles.space}> </span>
            </span>
        ));
    };


const splitWordsAndLetters2 = (text, wordClass, letterClass) => {

    const getRandomIntInclusive = (min = -15, max = 15) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    // 打乱
    const handleMouseEnter = (event) => {
      const letters = event.currentTarget.querySelectorAll(`.${letterClass}`);
      letters.forEach(letter => {
        letter.style.transform = `translate(${getRandomIntInclusive()}%, ${getRandomIntInclusive()}%) rotate(${getRandomIntInclusive()}deg)`;
        letter.style.letterSpacing = `0.3px`;
        if (letter.textContent === "_") {
          letter.textContent = " ";
        }
      });
    };
  
    // 恢复字母的默认样式
    const handleMouseLeave = (event) => {
      const letters = event.currentTarget.querySelectorAll(`.${letterClass}`);
      letters.forEach(letter => {
        letter.style.transform = 'none';
        letter.style.letterSpacing = `0px`;
        if (letter.textContent === " ") {
          letter.textContent = "_";
        }
      });
    };
  
    return text.split(' ').map((word, wordIndex) => (
      <span
        key={wordIndex}
        className={wordClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className={letterClass}>
            {char}
          </span>
        ))}
        <span className={styles.space}> </span>
      </span>
    ));
  };

    const paragraphText = `The second phase of the “Artificial Friend” aims to create a face and implement the writing machine built in the first phase. Jane will look at you and speak to you. The physical hand and face of Jane enable the users to have a more tangible interaction with her. By augmenting the realistic experience, I want to reinforce the question — “What do we need for an intimate relationship?” If the considerate Ai has “minds” and “body” and could satisfy our need of being loved, what do we need addition to that?`;

    

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                
                <h3>1.strong加粗</h3>
                <div>{splitWordsAndLetters(paragraphText, styles.word, styles.letter)}</div>
            </div>

            <div className={styles.block}>
                <h3>2.字母上移</h3>
                <div>{splitWordsAndLetters(paragraphText, styles.word2, styles.letter1)}</div>
            </div>

            <div className={styles.block}>
                <h4>3.单词上移</h4>
                <div>{splitWordsAndLetters(paragraphText, styles.word3, styles.letter3)}</div>
            </div>

            <div className={styles.block}>
                <h4>4.打乱</h4>
                <div>{splitWordsAndLetters2(paragraphText, styles.word4, styles.letter4)}</div>
            </div>


            <div className={styles.block}>
                <h4>5.</h4>
                <div>{splitWordsAndLetters("Artificial Friends", styles.word5, styles.letter5)}</div>
                <div>{splitWordsAndLetters(paragraphText, styles.word5, styles.letter5)}</div>
            </div>

            <div className={styles.block}>
                <h4>6.</h4>
                <div>{splitWordsAndLetters(paragraphText, styles.word6, styles.letter6)}</div>
            </div>

            <div className={styles.block}>
                <h4>7.skew</h4>
                <div>{splitWordsAndLetters(paragraphText, styles.word7, styles.letter7)}</div>
            </div>

            <div className={styles.block}>
                <h4>8.blur</h4>
                <div>{splitWordsAndLetters(paragraphText, styles.word8, styles.letter8)}</div>
            </div>

            <div className={styles.block}>
                <h4>9.disppear</h4>
                <div>{splitWordsAndLetters(paragraphText, styles.word9, styles.letter9)}</div>
            </div>

            <div className={styles.block}>
                <h4>10.</h4>
                <div>{splitWordsAndLetters(paragraphText, styles.word10, styles.letter10)}</div>
            </div>

        </div>
    );
};

export default TestPage;


// "use client"
// import { useEffect } from 'react';
// import p5 from 'p5';

// const Ascii = () => {
//   // useEffect(() => {
//   //   const asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. ";
//   //   let video;
//   //   let vidw = 64; // 视频宽度
//   //   let vidh = 48; // 视频高度
//   //   let scl = 24; // 缩放比例
//   //   let w, h;

//   //   const sketch = (p) => {
//   //     p.setup = () => {
//   //       p.createCanvas(vidw * scl, vidh * scl);
//   //       video = p.createCapture(p.VIDEO);
//   //       video.hide(); 
//   //       video.size(vidw, vidh);
//   //       w = p.width / video.width;
//   //       h = p.height / video.height;
//   //     };

//   //     p.draw = () => {
//   //       p.background(255);
//   //       video.loadPixels();

//   //       for (let i = 0; i < video.width; i++) {
//   //         for (let j = 0; j < video.height; j++) {
//   //           let pixelIndex = (i + j * video.width) * 4;
//   //           let r = video.pixels[pixelIndex + 0];
//   //           let g = video.pixels[pixelIndex + 1];
//   //           let b = video.pixels[pixelIndex + 2];

//   //           let bright = (r + g + b) / 3;
//   //           let tIndex = p.floor(p.map(bright, 0, 255, 0, asciiChar.length));

//   //           let x = i * w + w / 2;
//   //           let y = j * h + h / 2;
//   //           let t = asciiChar.charAt(tIndex);
//   //           p.stroke(255);
//   //           p.textSize(w);
//   //           p.textAlign(p.CENTER, p.CENTER);
//   //           p.text(t, x, y);
//   //         }
//   //       }
//   //     };

//   //     p.windowResized = () => {
//   //       p.resizeCanvas(vidw * scl, vidh * scl);
//   //     };
//   //   };

//   //   const p5Instance = new p5(sketch);

//   //   // 清理函数
//   //   return () => {
//   //     p5Instance.remove(); // 清理 p5 实例
//   //     if (video) {
//   //       video.stop();
//   //       video.remove();
//   //     }
//   //   };
//   // }, []);

//   return <div>ascii</div>;
// };

// export default Ascii;

