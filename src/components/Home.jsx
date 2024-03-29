import React from "react";
import { useGlobalContext } from "./context";
const Home = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    
    <main>
      
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Quiz App</h2>
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={5}
            />
          </div>
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default Home;
