import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput, endCategory, result }) => {
  const currentQuestion = category.clues[currentQuestionIndex];
  return (
    <section className="category">
    {endCategory ?
    <section className="badEndGame">
      <Link to ='/'>
        Back to the category selection
      </Link>
      <h2>
        Hey looser, try again!
      </h2>
      <h2>Your score is : { result }</h2>
      <iframe src="https://giphy.com/embed/cYus0tJvdB7dS" width="480" height="421" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/french-kaamelott-cYus0tJvdB7dS">via GIPHY</a></p>
    </section>
      :
      <form className="categoryContainer" onSubmit={handleSubmit}>
        <h1>You choosed: {category.title}</h1>
        <div>
          <h3>
            {currentQuestion.question}
          </h3>
          <div className="categoryInput">
            <input ref={answerInput} />
          </div>
          <button type="submit">
            Next
          </button>
        </div>
        <h2>Your score is : { result }</h2>
      </form>
    }
    </section>
  );
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  endCategory: PropTypes.bool,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;
