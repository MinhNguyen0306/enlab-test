import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setIsStart } from '../../redux/feature/GlobalState/globalState.slice';
import Button from '../../components/button/Button';
import "./HomePage.scss";
import { useEffect } from "react";

const HomePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function startQuiz() {
    dispatch(setIsStart(true))
    navigate("/quiz")
  }

  useEffect(() => {
    dispatch(setIsStart(false))
  }, [])

  return (
    <div className='home_section'>
      <Button rounded onClick={startQuiz}>
        Start Quiz!
      </Button>
      <span className='timeline'>
        Timeline: <span style={{ color: "red" }}>20 Minutes</span> 
      </span>
    </div>
  )
}

export default HomePage
