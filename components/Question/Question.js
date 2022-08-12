import React, { useEffect, useState } from "react";
import questions from "./questionData";
import Infobar from "../Infobar/Infobar";
import { CSSTransition } from "react-transition-group";

const Question = ({
  currentQuestionIndex,
  changeCurrentQuestionIndex,
  currentScore,
  changeCurrentScore,
  seconds,
  setSeconds,
  changeActivePage,
}) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);

    const interval = setInterval(() => {
      setSeconds(() => seconds - 1);
    }, 1000);
    if (seconds === 0) changeActivePage("game-over");
    return () => clearInterval(interval);
  }, [seconds, setSeconds, changeActivePage]);

  const checkAnswer = (e) => {
    if (e.target.textContent === questions[currentQuestionIndex].answer) {
      changeCurrentScore(() => currentScore + 10);
      changeCurrentQuestionIndex(() => currentQuestionIndex + 1);
      if (currentQuestionIndex === questions.length - 1) {
        changeActivePage("game-over");
        return;
      }
      return;
    }

    changeCurrentQuestionIndex(() => currentQuestionIndex + 1);
    changeCurrentScore(() => currentScore - 10);
    setSeconds(() => seconds - 10);

    if (currentQuestionIndex === questions.length - 1) {
      changeActivePage("game-over");
      return;
    }
  };

  return (
    <>
      <CSSTransition
        in={inProp}
        classNames="question"
        timeout={200}
        unmountOnExit
      >
        <div className="quiz-container">
          <Infobar currentScore={currentScore} seconds={seconds} />
          <div className="question-container">
            <h1 className="question">
              {questions[currentQuestionIndex].question}
            </h1>
            <div className="answers-container">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  className="answer-btn btn"
                  onClick={checkAnswer}
                  key={option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CSSTransition>
      <style jsx>{`
        .question-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 80%;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          padding: 50px;
          border-radius: 5px;
          backdrop-filter: blur(10px);
          border: 1px solid black;
        }

        .question {
          margin: 10px 10px;
        }

        .answers-container {
          display: flex;
          flex-direction: column;
          width: 50%;
        }

        .answers-container button {
          width: 50%;
          margin: 10px 10px;
          background: none;
          width: 100%;
          transition: 0.25s;
          border-radius: 12px;
          height: 30px;
        }

        .answers-container button:hover {
          background: gold;
        }

        .question-enter {
          opacity: 0;
        }

        .question-enter.question-enter-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }

        .question-leave {
          opacity: 0;
        }

        .question-leave.question-leave-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }
      `}</style>
    </>
  );
};

export default Question;
