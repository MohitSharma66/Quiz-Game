import React from 'react'
import './FrontPage.css'

export default function frontPage(props) {
    return(
        <div className='FrontPage'>
            <h1 className='title'>Quizzical</h1>
            <p className='content'>Quizzical is an engaging and interactive quiz game designed to test your knowledge 
                across various subjects. Challenge yourself with multiple choice questions ranging from easy to difficult levels. 
                Whether you’re a trivia enthusiast or just looking to learn something new, Quizzical offers a fun and educational experience. 
                Compete with friends or enjoy solo gameplay to improve your scores. Discover a world of facts and boost your brainpower with 
                every quiz!</p>
            <button className='Button' onClick={props.onClick}>Start Quiz</button>
        </div>
    )
}