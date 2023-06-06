import React from 'react';
import "./AnswerItem.scss";

export const AnswerNumbers = [
    'A',
    'B',
    'C',
    'D'
]

interface AnswerItemProps {
    answer: string,
    option: string,
    correctAnswer: string,
    choosen: string,
    onClick: () => void,
}

const AnswerItem = (props: AnswerItemProps) => {
    const { answer, option, correctAnswer, choosen, onClick } = props
    const itemRef = React.useRef<HTMLDivElement>(null);

    const handleClick = () => {
        onClick()
        if(itemRef.current) {
            itemRef.current.className = 'item choose'
        }
    }

    return (
        <div ref={itemRef} className="item" onClick={handleClick}>
            <div 
                className={`item__wrap ${ answer === correctAnswer ? "correct" : ""} 
                ${answer === choosen && correctAnswer !== "" && answer !== correctAnswer ? "error" : ""}`}
            >
                <div className='item__option'>
                    <span>{ option }</span>
                </div>
                <span>{ answer }</span>
            </div>
        </div>
    )
}

export default AnswerItem
