import React,{useState,useEffect} from "react";
import { useGlobalContext } from "./context";

import Home from "./Home";
import Loading from "./Loading";

import Result from "./Result";
import Answer from "./Answer";
function QuizPage() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
   // checkAnswer,
    startTimer,
    seconds,
    correctAnswerClass,
    wrongAnswerClass,
    disabledClass
    
  } = useGlobalContext();
  if (waiting) {
    return  <Home />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  
   const answers = [...incorrect_answers, correct_answer];
 

  // let answers = [...incorrect_answers];
  // const tempIndex = Math.floor(Math.random() * 4);
  // if (tempIndex === 3) {
  //   answers.push(correct_answer);
  // } else {
  //   answers.push(answers[tempIndex]);
  //   answers[tempIndex] = correct_answer;
  // }
 
  return (
    
    <main>
      <Result />
      <section className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}>
        <p className="correct-answers">
          correct answers:{correct}/{questions.length}
          

        </p>
        <h4>Question No.: {index+1}</h4>
       {startTimer && <h2>Time Left - 00 : {seconds < 10 ? `0${seconds}` : seconds}</h2>}
        
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
               return (
              //   <button
              //     key={index}
              //     //className="answer-btn"
              //     className={`answer ${correctAnswerClass} ${wrongAnswerClass} ` }
              //     onClick={() => {
              //       checkAnswer(correct_answer === answer);
                    
              //     }}
              //     dangerouslySetInnerHTML={{ __html: answer }}
              //   />
              // 
              <Answer answerText={answer}  key={index} index={index} correctAnswer={correct_answer} currentAnswer={answer} />
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
