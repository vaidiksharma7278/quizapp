import axios from "axios";
import React, { useState, useContext,useEffect } from "react";




const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 5,
    
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [seconds,setSeconds]=useState("");

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      }

      if (seconds === 0) {
          setSeconds(20);
          nextQuestion()
        } 
      
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(response.data.results);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  // let yellow = '#ffc800';
  // const [bgColor, setBgColor] = useState(yellow);
  //  const changeColor =()=>{
  //     let green = '#3BA544';
  //     setBgColor(green);
  //   }
   const [correctanswer,setCorrectanswer]=useState(false);
  const [wrongAnswer,setWronganswer]=useState(false);
  const [disabledanswer,setdisabledanswer]=useState(true);
   const correctAnswerClass = correctanswer ? 'correct-answer' : '';
   const wrongAnswerClass =  wrongAnswer? 'wrong-answer' : '';
  const disabledClass= disabledanswer?'disabled-answer' : '';
  
  
  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        setCorrectanswer(false);
        setWronganswer(false);
        setdisabledanswer(true)
        openModal();
        return 0;
      } else {
          setCorrectanswer(false);
          setWronganswer(false);
          setdisabledanswer(true)
          setSeconds(20);
        return index;

      }
    });
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
      setCorrectanswer(true);
      setdisabledanswer(false);
    } 
    if(!value){
      setWronganswer(true);
      setdisabledanswer(false);
    }
    setTimeout(() => {
      nextQuestion();
    }, 2000);
    
  };

  const openModal = () => {
    setSeconds(20);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
    setSeconds(20);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://opentdb.com/api.php?amount=5&difficulty=medium`;
    fetchQuestions(url);
    setStartTimer(true);
    setSeconds(20);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
        startTimer,
        setStartTimer,
        seconds,
        
        correctAnswerClass,
        wrongAnswerClass,
        disabledClass
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
