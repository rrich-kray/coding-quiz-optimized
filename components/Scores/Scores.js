import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Scores = ({ changeActivePage }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  });

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
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(localStorage.getItem("scores")).map((score) => (
                <tr key={score[0]}>
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
            className="exit-btn"
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
        }

        .user-info {
          width: 100%;
        }

        .exit-btn {
          padding: 5px;
          height: 50px;
          width: 100px;
          border-radius: 8px;
          background: none;
          margin-top: 20px;
          transition: 0.25s;
        }

        .exit-btn:hover {
          cursor: pointer;
          color: #266784;
          background: #2196f3;
          box-shadow: 0 0 41px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
        }

        .username,
        .user-score {
          margin: 10px;
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
