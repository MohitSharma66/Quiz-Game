import React, { useEffect, useState } from 'react';
import './QuizPage.css';
import Question from './Question';
import Confetti from 'react-confetti';

export default function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [check, setCheck] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await fetch("https://opentdb.com/api.php?amount=5");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const formattedQuestions = data.results.map(question => {
                    const allAnswers = shuffleArray([question.correct_answer, ...question.incorrect_answers]);
                    return {
                        ...question,
                        allAnswers
                    };
                });
                setQuestions(formattedQuestions);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        
        fetchQuestions();
    }, []);

    function handleClick() {
        setCheck(true);
    }

    function handleReset() {
        setQuestions([])
        setCheck(false)
        setCount(0)
        async function fetchQuestions() {
            try {
                const response = await fetch("https://opentdb.com/api.php?amount=5");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const formattedQuestions = data.results.map(question => {
                    const allAnswers = shuffleArray([question.correct_answer, ...question.incorrect_answers]);
                    return {
                        ...question,
                        allAnswers
                    };
                });
                setQuestions(formattedQuestions);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }
        fetchQuestions();
    }

    return (
        <div className='QuizPage'>
            {questions.length === 0 ? (
                <p>Loading questions...</p>
            ) : (
                questions.map((question, index) => (
                    <React.Fragment key={index}>
                        <Question
                            question={question.question}
                            answers={question.allAnswers}
                            correct_answer={question.correct_answer}
                            check={check}
                            incrementCount={() => setCount(count => count + 1)}
                        />
                        {index < questions.length - 1 && <hr />}
                    </React.Fragment>
                ))
            )}
            <div className='End'>
                <button onClick={check ? handleReset : handleClick}>{check ? 'Play Again' : 'Check Answers!'}</button>
                {check && <p className='para'>{`You have correctly answered ${count} out of ${questions.length}`}</p>}
            </div>
            {check && <Confetti />}
        </div>
    );
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
