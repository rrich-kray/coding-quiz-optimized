import React from "react";

const Infobar = ({ currentScore, seconds }) => {
  return (
    <>
      <div className="infobar">
        <div className="score">
          <span>Score:</span>
          {currentScore}
        </div>
        <div className="time-remaining">
          <span>Time Remaining:</span>
          {seconds}
        </div>
      </div>
      <style jsx>{`
        .infobar {
          display: flex;
          justify-content: space-between;
          width: 100%;
          top: 0;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          padding: 20px;
          margin-bottom: 10px;
          border-radius: 5px;
          backdrop-filter: blur(10px);
          border: 1px solid black;
        }

        .score {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .time-remaining {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 768px) {
          .infobar {
            display: flex;
            flex-direction: column;
          }

          .score {
            width: 100%;
          }

          .time-remaining {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Infobar;
