import React from "react";

const PlayAgain = ({
  changeActivePage,
  changeCurrentScore,
  setSeconds,
  changeCurrentQuestionIndex,
}) => {
  const playAgain = (choice) => {
    changeCurrentScore(0);
    setSeconds(60);
    changeCurrentQuestionIndex(0);
    if (choice === "yes") {
      changeActivePage("questions");
      return;
    }
    changeActivePage("landing");
  };
  return (
    <>
      <div className="option-container">
        <h2>Play Again?</h2>
        <div className="options">
          <button className="option-btn" onClick={() => playAgain("yes")}>
            Yes
          </button>
          <button className="option-btn" onClick={() => playAgain("no")}>
            No
          </button>
        </div>
      </div>
      <style jsx>{`
        .option-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .options {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .option-btn {
          margin: 10px;
          height: 30px;
          width: 75px;
          background: none;
          border-radius: 12px;
          transition: 0.25s;
        }

        .option-btn:hover {
          background: gold;
        }
      `}</style>
    </>
  );
};

export default PlayAgain;
