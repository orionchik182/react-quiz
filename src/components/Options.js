import React from "react";
import { useQuiz } from "../context/QuizContext";

const Options = () => {
  const { questions, dispatch, answer, index } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, ind) => (
        <button
          className={`btn btn-option ${ind === answer ? "answer" : ""} ${
            hasAnswered
              ? ind === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: ind })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
