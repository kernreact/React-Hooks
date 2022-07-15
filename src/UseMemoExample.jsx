import React, { useState, useMemo, useEffect } from 'react';


const getTimeDifference = (startTime, endTime) => {
    const res = Math.abs(endTime - startTime) / 1000;
    return res % 60;
};

const countLettersInWord = (word) => {
    let i = 0;
    while (i < 3000000000) i++;

    return word.length
};


export default () => {
    const wordList = ['Typewriter', 'Megaphone', 'Hamburger', 'Batman', 'Milkshake'];
    const timeStart = new Date();

    const [count, setCount] = useState(0);
    const [computedTime, setComputedTime] = useState(0);
    const [currentWord, setCurrentWord] = useState(wordList[0]);
       

    const handleLoadNextWord = () => {
        const wordIndex = wordList.indexOf(currentWord);
        setCurrentWord(wordList[wordIndex + 1 === wordList.length ? 0 : wordIndex + 1]);
    };

    const letterCount = useMemo(() => countLettersInWord(currentWord), [currentWord]);

    //const letterCount = countLettersInWord(currentWord);

    useEffect(() => {
        setComputedTime(getTimeDifference(timeStart, new Date()));
    }, [currentWord]);

    return (
        <section>
            <h1>Expensive counting functions</h1>           
            <p>Example word is: <strong>{currentWord}</strong></p>
            <p>
                <button onClick={handleLoadNextWord}>
                    load next word
                </button>
                <button onClick={() => setCount(count + 1)}>
                    notch up the count
                </button>
            </p>
            <hr />
            
            <p>"{currentWord}" has {letterCount} letters. This took <strong>{computedTime} seconds</strong> to process.</p>
            
            <p>Current word is still "{currentWord}", but we've {count === 0 ? 'not increased the count yet' : `increased the count ${count} times`}</p>
        </section>
    );
};