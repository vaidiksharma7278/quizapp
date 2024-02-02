import React,{useState,useEffect} from "react";
import { useGlobalContext } from "./context";

import Home from "./Home";
import Loading from "./Loading";
import Timer from './Timer'
import Modal from "./Model";
function QuizPage() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
    setIsActive,
    seconds
  } = useGlobalContext();
  if (waiting) {
    return  <Home />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];

  
  // const answers = [...incorrect_answers, correct_answer];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  
  return (
    
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers:{correct}/{index}
        </p>
       
        
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={() => {
                    checkAnswer(correct_answer === answer);
                  }}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion } >
          next question
        </button>
      </section>
    </main>
  );
}

export default QuizPage;
