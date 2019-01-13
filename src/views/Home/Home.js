import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Home = ({ categories }) => (
  <section>
    <h1 className="homeTitle">
      The Trivia Quest
    </h1>
    <i>
      Choose your destiny, blyat.
    </i>
    <div className="row homeContainer">
      {categories.length > 0 && (
        <div>
          {categories.map(category => (
            < Link to = {
              `/categories/${category.id}`
            }
            key = {
              category.id
            }
            className = "button button-outline">
              {category.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  </section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  )
}

export default Home;
