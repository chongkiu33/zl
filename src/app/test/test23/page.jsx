"use client";
import React from 'react';
import styles from '../test.module.css';

const page = () => {
  const text = `The second phase of the “Artificial Friend” aims to create a face and implement the writing machine built in the first phase. Jane will look at you and speak to you. The physical hand and face of Jane enable the users to have a more tangible interaction with her. By augmenting the realistic experience, I want to reinforce the question — “What do we need for an intimate relationship?” If the considerate Ai has “minds” and “body” and could satisfy our need of being loved, what do we need addition to that?`;

  // 分割文本并嵌套字母
  const splitWordsAndLetters = (text, wordClass, letterClass) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className={wordClass}>
        {/* 将单词拆分为字母 */}
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className={letterClass}>
            {char}
          </span>
        ))}

        {/* 为了正确显示空格，添加一个空格元素 */}
        <span className={styles.space}> </span>
      </span>
    ));
  };

  return (
    <div className={styles.container}>
      {/* 调用方法并传递需要的类名 */}
      <div>
        {splitWordsAndLetters(text, styles.word, styles.letter)}
      </div>
    </div>
  );
};

export default page;
