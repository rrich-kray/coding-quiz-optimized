import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Scores = ({ changeActivePage }) => {
  const [inProp, setInProp] = useState(false);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("quiz-scores")) {
      setScores(JSON.parse(localStorage.getItem("quiz-scores")));
    }
  }, []);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <>
      <CSSTransition
        in={inProp}
        timeout={1000}
        classNames="scores-transitions"
        unmountOnExit
      >
        <div className="scores-list">
          <table>
            <thead>
              <tr>
                <th className="username-header">Username</th>
                <th className="score-header">Score</th>
              </tr>
            </thead>
            <tbody>
              {scores &&
                scores.map((score) => (
                  <tr key={score[0]} className="score-entry">
                    <td className="username" key={score[0]}>
                      {score[0]}
                    </td>
                    <td className="user-score" key={score[0]}>
                      {score[1]}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button
            className="exit-btn btn"
            onClick={() => changeActivePage("landing")}
          >
            Exit
          </button>
        </div>
      </CSSTransition>
      <style jsx>{`
        .scores-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 250px;
        }

        .scores-list table {
          width: 100%;
          text-align: center;
        }

        .exit-btn {
          height: 50px;
          width: 100px;
          /* border-radius: 12px; */
          margin: 20px;
          font-size: 1rem;
          font-weight: bold;
          color: white;
        }

        .username-header,
        .score-header {
          font-size: 1.5rem;
        }

        .username,
        .user-score {
          margin: 10px;
          font-weight: bold;
        }

        .scores-transitions-enter {
          opacity: 0;
        }

        .scores-transitions-enter.scores-transitions-enter-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }

        .scores-transitions-leave {
          opacity: 0;
        }

        .scores-transitions-leave.scores-transitions-leave-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }
      `}</style>
    </>
  );
};

export default Scores;
