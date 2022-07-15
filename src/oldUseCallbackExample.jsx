import React, {useState, useCallback} from "react";

const messages = [
    'Hello dear, what a lovely day outside',
    'The 2 best times to learn React were yesterday, and today!',
    'Thanks for studying React with The Beginners Guide to React',
    'Some people, Master Bruce, just want to watch the world burn',
    'And nothing lasts forever, like the cold november rain'
];
const functionStore = new Set();

export default () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

   /* const increaseCounter = useCallback(() => {
        setCounter(counter + 1);
    }, [counter]);*/

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        setCounter(counter - 1);
    }

    const generateRandomMessage = () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setMessage(randomMessage);
    }

    functionStore.add(increaseCounter);
    functionStore.add(decreaseCounter);
    functionStore.add(generateRandomMessage);

    return (
        <>
            <p><strong>Count is:</strong> {counter}</p>
            <p>
                <strong>Random message is: </strong><br />
                "{message || 'click the button to generate a random message'}"
            </p>
            <p>
                <button onClick={increaseCounter}>counter +</button>
                <button onClick={decreaseCounter}>counter -</button>
                <button onClick={generateRandomMessage}>generate message</button>
            </p>
            <hr />
            <p>
                <strong>Number of functions in 'functionStore' is:</strong> {functionStore.size}
            </p>
        </>
    );
};