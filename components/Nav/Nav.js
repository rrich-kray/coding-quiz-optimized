import React from "react";

const Nav = ({
  changeCurrentScore,
  setSeconds,
  changeCurrentQuestionIndex,
  changeActivePage,
}) => {
  const dropGame = () => {
    changeCurrentScore(0);
    setSeconds(60);
    changeCurrentQuestionIndex(0);
    changeActivePage("landing");
  };

  return (
    <>
      <div className="nav">
        <button className="nav-btn" onClick={() => dropGame()}>
          Home
        </button>
        <button className="nav-btn" onClick={() => changeActivePage("scores")}>
          Scores
        </button>
      </div>
      <style jsx>{`
        .nav {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: space-between;
          top: 0;
          position: fixed;
        }
      `}</style>
    </>
  );
};

export default Nav;
