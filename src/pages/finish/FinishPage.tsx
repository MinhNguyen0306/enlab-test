import { useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../redux/store';
import Congratulation from "../../assets/Congratulation.png";
import Failed from "../../assets/Failed.png";

import Button from '../../components/button/Button';
import "./FinishPage.scss";
import { clearUserAnswers, resetScore } from '../../redux/feature/Quiz/quiz.slice';

const FinishPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { score, userAnswers } = useSelector((state: RootState) => state.quizSlice);
    const questionsCorrect = useRef<number>(userAnswers.filter(answer => answer.correct).length);
    const totalAnswerTime = useRef<number>(userAnswers.reduce((accumulator, currentValue) => accumulator + currentValue.answerTime, 0));

    function handleReplay() {
        dispatch(resetScore())
        dispatch(clearUserAnswers())
        navigate("/")
    }

    return (
        <div className='finish-section'>
            <div className='finish-section__container'>
                <div className='finish-section__header'>
                    <div className='finish-section__logo'>
                        {
                            Math.round(score) >= 7 
                                ? <img src={Congratulation} alt='Congratulation'/>
                                : <img src={Failed} alt='Failed' />
                        }
                    </div>
                    <h1>{Math.round(score) >= 7 ? "Congratulations!!" : "Cheer up!"}</h1>
                </div>

                <div className='finish-section__content'>
                    <span>{`Your score is ${Math.round(score)}`}</span>
                    <span>{Math.round(score) >= 7 ? "You are amazing!!" : "Better luck next time!"}</span>
                    <span>{`${questionsCorrect.current}/${userAnswers.length} correct answers in ${totalAnswerTime.current} second`}</span>
                </div>

                <Button rounded outline onClick={handleReplay}>
                    Play Again
                </Button>
            </div>
        </div>
    )
}

export default FinishPage
