import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

const Landing = ({
  changeActivePage,
  currentBgIndex,
  incrementBgIndex,
  bgIndexWrapperFunc,
}) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, [setInProp]);

  return (
    <>
      <CSSTransition
        in={inProp}
        timeout={500}
        classNames="example"
        unmountOnExit
      >
        <div className="landing-page">
          <button
            className="start-btn btn"
            onClick={() => changeActivePage("questions")}
          >
            Start!
          </button>
          <div className="secondary-btn-container">
            <button
              className="view-scores-btn btn"
              onClick={() => changeActivePage("scores")}
            >
              View high scores
            </button>
            <button
              className="change-bg-btn btn"
              onClick={() => bgIndexWrapperFunc()}
            >
              Change Background!
            </button>
          </div>
        </div>
      </CSSTransition>
      <style jsx>{`
        .landing-page {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .start-btn {
          height: 100px;
          width: 250px;
          /* border-radius: 12px; */
          margin: 20px;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }

        .view-scores-btn {
          padding: 5px;
          /* border-radius: 8px; */
          padding: 10px;
          font-size: 10px;
          color: white;
          font-weight: bold;
        }

        .change-bg-btn {
          padding: 5px;
          /* border-radius: 8px; */
          padding: 10px;
          font-size: 10px;
          margin-left: 5px;
          font-weight: bold;
          color: white;
        }

        .example-enter {
          opacity: 0;
        }

        .example-enter.example-enter-active {
          opacity: 1;
          transition: opacity 500ms ease-in;
        }

        .example-leave {
          opacity: 1;
        }

        .example-leave.example-leave-active {
          opacity: 0.01;
          transition: opacity 300ms ease-in;
        }
      `}</style>
    </>
  );
};

export default Landing;
