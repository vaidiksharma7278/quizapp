import { useGlobalContext } from "./context";


const Answer = ({answerText,  index, correctAnswer }) => {
    const {checkAnswer}=useGlobalContext();


   // const letterMapping = ["A", "B", "C", "D"];
    
    return (
        <div className="answer-btn" onClick={() =>checkAnswer(correctAnswer === answerText)}>
            {/* <div className="answer-letter">{letterMapping[index]}</div> */}
            <div className="answer-text">{answerText}</div>
        </div>
    );
};

export default Answer;