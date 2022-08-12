import Image from "next/image";
import React, { useEffect, useState } from "react";
import Question from "../components/Question/Question";
import Landing from "../components/Landing/Landing";
import Scores from "../components/Scores/Scores";
import Prompt from "../components/Prompt/Prompt";
import PlayAgain from "../components/PlayAgain/PlayAgain";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [seconds, setSeconds] = useState(60);
  const [currentQuestionIndex, changeCurrentQuestionIndex] = useState(0);
  const [currentScore, changeCurrentScore] = useState(0);
  const [activePage, changeActivePage] = useState("landing");
  const [gameOver, setGameOver] = useState(false);

  const bgs = [
    "/galaxy.jpg",
    "/winter.png",
    "/jellyfish.jpg",
    "/leaves.jpg",
    "leaves2.jpg",
  ];
  const [currentBgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("quiz-scores")) {
      const newScoresObj = [];
      localStorage.setItem("quiz-scores", JSON.stringify(newScoresObj));
    }
  }, []);

  const bgIndexWrapperFunc = () =>
    currentBgIndex === bgs.length - 1
      ? setBgIndex(0)
      : setBgIndex(() => currentBgIndex + 1);

  const renderActivePage = () => {
    if (activePage === "landing") {
      return (
        <Landing
          changeActivePage={changeActivePage}
          currentBgIndex={currentBgIndex}
          incrementBgIndex={setBgIndex}
          bgIndexWrapperFunc={bgIndexWrapperFunc}
          key={"landing"}
        />
      );
    }
    if (activePage === "questions") {
      return (
        <Question
          currentQuestionIndex={currentQuestionIndex}
          changeCurrentQuestionIndex={changeCurrentQuestionIndex}
          currentScore={currentScore}
          changeCurrentScore={changeCurrentScore}
          setSeconds={setSeconds}
          seconds={seconds}
          changeActivePage={changeActivePage}
          gameOver={gameOver}
          setGameOver={setGameOver}
          key={"question"}
        />
      );
    }
    if (activePage === "scores")
      return <Scores changeActivePage={changeActivePage} />;
    if (activePage === "game-over")
      return (
        <Prompt
          currentScore={currentScore}
          changeActivePage={changeActivePage}
          key={"prompt"}
        />
      );
    if (activePage === "play-again") {
      return (
        <PlayAgain
          changeActivePage={changeActivePage}
          changeCurrentScore={changeCurrentScore}
          setSeconds={setSeconds}
          changeCurrentQuestionIndex={changeCurrentQuestionIndex}
          key={"play-again"}
        />
      );
    }
  };

  return (
    <div
      className={styles.mainContainer}
      style={{
        backgroundImage: `url(${bgs[currentBgIndex]})`,
        position: "relative",
      }}
    >
      {renderActivePage()}
    </div>
  );
};

export default Home;
