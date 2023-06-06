import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { QuestionState, UserAnswer } from '../../types/Question';
import { fetchQuestionsApi } from '../../api/api';
import AnswerItem, { AnswerNumbers } from '../../components/item/AnswerItem';
import { setScore, setUserAnswers } from '../../redux/feature/Quiz/quiz.slice';
import { setGlobalLoading } from '../../redux/feature/GlobalState/globalState.slice';

import "./QuizPage.scss";
import Button from '../../components/button/Button';
import { RootState } from '../../redux/store';

const QuizPage = () => {
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.quizSlice.score);

  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [choosen, setChoosen] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [error, setError] = useState<string>();
  const [timeCount, setTimeCount] = useState<number>(20 * 60);
  const [timeHold, setTimeHold] = useState<number>(timeCount);
  
  const answersRef = useRef<HTMLUListElement>(null);
  const answerTime = useRef<number>(0);

  function clearAllChoosen() {
    const items = answersRef.current?.children;
    if(items) {
      for(let i = 0; i < items?.length; i++) {
        items[i].children[0].className = items[i].children[0].className.replace("choose", "");
      }
    }
  }
  
  const handleNextQuestion = () => {
    if(choosen) {
      setCorrectAnswer(questions[number].correct_answer)
      setTimeHold(timeCount)
      answerTime.current = timeHold - timeCount
      const userAnswer: UserAnswer = { 
        question: questions[number], choose: choosen, 
        correct: choosen === questions[number].correct_answer, answerTime: answerTime.current 
      } 
      dispatch(setUserAnswers(userAnswer))

      if(choosen === questions[number].correct_answer) {
        dispatch(setScore(10 / questions.length))
      }
      
      setTimeout(() => {
        if(number < questions.length) {
          setNumber(prev => prev + 1)
        }
        clearAllChoosen()
        setChoosen("")
        setCorrectAnswer("")
      }, 2000)
    } else {
      setError("Bạn chưa chọn câu trả lời!")
    }
    console.log(questions[number].question)
  }

  const handleChooseOption = (answer: string) => {
    setError("")
    clearAllChoosen()
    setChoosen(answer)
  }

  const getTimeFormat = (): string => {
    const minute = Math.floor(timeCount / 60)
    const second = timeCount - Math.floor(minute * 60)
    return `${minute} : ${second > 10 ? second : `0${second}`}`
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      dispatch(setGlobalLoading(true))
      const response = await fetchQuestionsApi(10);
      dispatch(setGlobalLoading(false))
      setQuestions(response)
    }

    fetchQuestion()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeCount(prev => prev - 1);
    }, 1000)

    return () => clearInterval(interval)
  }, [timeCount])

  return (
    <>
      <div className='time-box'>
        <span>{ getTimeFormat() }</span>
      </div>
      <div className='section'>
        <h1>{ `Question ${number + 1}/${questions.length}` }</h1>
        <p style={{ wordBreak: "break-all" }}>{ questions.length && questions[number].question }</p>
        <ul ref={answersRef} className='section__answers'>
          { 
            questions.length && questions[number].answers.map((answer, index) => (
              <li key={index}>
                <AnswerItem 
                  answer={ answer }
                  option={ AnswerNumbers[index] }
                  correctAnswer={ correctAnswer }
                  choosen={ choosen }
                  onClick={() => handleChooseOption(answer)}
                />
              </li>
            ))
          }
        </ul>

        {
          <Button onClick={handleNextQuestion}>
            { 
              number < questions.length - 1 
              ? "Next" 
              : <Link to="finish">Finish</Link>
            }
          </Button>
        }
        { error && <span className='error_text'>{ error }</span>}
      </div>
    </>
  )
}

export default QuizPage
