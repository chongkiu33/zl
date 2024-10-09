import styles from './test.module.css';

const TestPage = () => {

    const splitWordsAndLetters = (text,wordClass,letterClass) => {

        return text.split(' ').map((word,wordIndex) =>(
            <span key={wordIndex} className={styles.word}>
                {word.split('').map((char,charIndex)=>(
                    <span key={charIndex} className={styles.letter}>
                        {char}
                    </span>
                ))}
                <span className={styles.space}> </span>
            </span>
        ));
    }

    const paragraphText = `The second phase of the “Artificial Friend” aims to create a face and implement the writing machine built in the first phase. Jane will look at you and speak to you. The physical hand and face of Jane enable the users to have a more tangible interaction with her. By augmenting the realistic experience, I want to reinforce the question — “What do we need for an intimate relationship?” If the considerate Ai has “minds” and “body” and could satisfy our need of being loved, what do we need addition to that?`;

    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <h3>1.strong加粗</h3>
                <div>{splitWordsAndLetters(paragraphText,styles.word,styles.letter)}</div>
            </div>
        </div>
    )



}

export default TestPage;