import React, { 
  Component,
  createRef 
} from 'react';
import {
  withRouter
} from 'react-router-dom'
import CategoryStyle from "./Category.css";
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: 0,
    endCategory: false,
    result: 0
  }

  answerInput = createRef();

  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
      score: localStorage.getItem('result')
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {currentQuestion, category, result} = this.state;
    const answer = this.answerInput.current.value;
    const goodAnswer = category.clues[currentQuestion].answer;
    const nbQuestion = category.clues.length;
    const idQuest = category.clues[currentQuestion].id;
    
    if (currentQuestion < (nbQuestion -1)) {
      if (answer === goodAnswer) {
        this.setState({ result: result -1 });
        this.setState({currentQuestion : this.state.currentQuestion + 1 });
        localStorage.setItem(currentQuestion, idQuest);
      }
      else {
        this.setState({ currentQuestion:this.state.currentQuestion + 1 });
      }
    }
    else {
      const end = [];
      const idCategory = category.id;
      end.push(idCategory);
      localStorage.setItem("categoryTab", end);
      this.setState({
        endCategory: true
      })
    }
  }

  render() {
    const { category, currentQuestion, result, endCategory } = this.state;
    if (!category) return <div className="loader">IT'S LOADING, keep cool dude...</div>

    return (
      <Category
        category= {category}
        currentQuestionIndex= {currentQuestion}
        handleSubmit={this.handleSubmit}
        result = {result}
        answerInput= {this.answerInput}
        endCategory = {endCategory}
      />
    );
  }
}

export default withRouter(CategoryContainer);
