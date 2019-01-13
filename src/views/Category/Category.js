import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput, endCategory, result }) => {
  const currentQuestion = category.clues[currentQuestionIndex];
  return (
    <section className="category">
      <Link to ='/'>
        Back to the category selection
      </Link>
      <form className="categoryContainer" onSubmit={handleSubmit}>
        <h1>You choosed: {category.title}</h1>
        <div className="question">
          <h3 className="question__title">
            {currentQuestion.question}
          </h3>
          <div className="categoryInput">
            <input ref={answerInput} />
          </div>
          <button className="question__submit" type="submit">
            Next
          </button>
        </div>
      </form>
      <p>Your current score is : { result }</p>
    </section>
  );
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;
