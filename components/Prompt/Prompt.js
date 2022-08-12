import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

const Prompt = ({ currentScore, changeActivePage }) => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });

  const submitScore = (userInput) => {
    const scoresObj = [userInput, currentScore];
    const scores = JSON.parse(localStorage.getItem("quiz-scores"));
    scores.push(scoresObj);
    localStorage.setItem("quiz-scores", JSON.stringify(scores));
    changeActivePage("play-again");
  };

  return (
    <>
      <CSSTransition
        in={inProp}
        timeout={200}
        classNames="prompt-transition"
        unmountOnExit
      >
        <div className="prompt">
          <label htmlFor="username">Please enter your username:</label>
          <input name="username" className="username"></input>
          <button
            className="user-submit-btn"
            onClick={() =>
              submitScore(document.querySelector(".username").value)
            }
          >
            Submit
          </button>
        </div>
      </CSSTransition>
      <style jsx>{`
        .prompt {
          /* height: 500px;
        width: 500px; */
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid black;
          border-radius: 5px;
        }

        .prompt label {
          margin: 10px 10px;
        }

        .prompt input {
          border: none;
          border-bottom: 1px solid black;
        }

        .prompt input:focus {
          outline: none;
        }

        .prompt button {
          margin: 10px 10px;
          background: none;
          padding: 5px;
          border: 0.5px solid black;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.25s;
        }

        .prompt button:hover {
          background: rgba(149, 157, 165, 0.2);
        }

        .prompt-transition-enter {
          opacity: 0;
        }

        .prompt-transition-enter.prompt-transition-enter-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }

        .prompt-transition-leave {
          opacity: 0;
        }

        .prompt-transition-leave.prompt-transition-leave-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }
      `}</style>
    </>
  );
};

export default Prompt;
