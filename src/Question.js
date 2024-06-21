import React from 'react';
import './Question.css';

export default function Question({ question, answers, correct_answer, check, incrementCount }) {
    const [selected, setSelected] = React.useState(null);
    const [counted, setCounted] = React.useState(false)

    React.useEffect(() => {
        if (check && !counted && selected === correct_answer) {
            incrementCount();
            setCounted(true);
        }
    }, [check, selected, correct_answer, counted, incrementCount]);

    function handleClick(answer) {
        if (!check) {
            setSelected(prevSelected => (prevSelected === answer ? null : answer));
        }
    }

    function getClass(answer) {
        if (check) {
            if (answer === correct_answer) {
                return 'green';
            } 
            else if (answer === selected){
                return 'red';
            }
            else {
                return '';
            }
        } else {
            if (selected === answer) {
                return 'blue';
            }
            return '';
        }
    }

    return (
        <div className='Question'>
            <h3 dangerouslySetInnerHTML={{ __html: question }} />
            <ul>
                {answers.map((answer, i) => (
                    <div 
                        onClick={() => handleClick(answer)} 
                        className={`answer ${getClass(answer)}`} 
                        key={i}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                ))}
            </ul>
        </div>
    );
}
