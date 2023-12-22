import React from "react";
import { Helmet } from "react-helmet";
import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty";
import M from "materialize-css";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      numberOfQuestions: 0,
      numberOfAnsweredQuestion: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 0,
      fiftyFifty: 0,
      usedFiftyFifty: 0,
      time: {},
    };
  }
  componentDidMount() {
    const { questions, currentQuestion, nextQuestion, previousQuestion } =
      this.state;
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
  }
  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex } = this.state;
    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];
      const answer = currentQuestion.answer;
      this.setState({
        currentQuestion,
        nextQuestion,
        previousQuestion,
        answer,
      });
    }
  };

  handleOptionClick = (e) => {
    if (
      e.target.innerHTML.toLowerCase() === this.state.answer.toLocaleLowerCase()
    ) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };
  correctAnswer = () => {
    M.toast({
      html: "Correct Answer!",
      classes: "toast-valid",
      displayLength: 1500,
    });

    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswer: prevState.correctAnswer + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
      })
      () => {
        this.displayQuestions(
          this.state.questions,
          this.currentQuestion,
          this.state.currentQuestion,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      }
    );
  };
  wrongAnswer = () => {
    navigator.vibrate(1000);
    M.toast({
      html: "Wrong Answer!",
      classes: "toast-invalid",
      displayLength: 1500,
    });

    this.setState(
      (prevState) => ({
        wrongAnswer: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion,
      }),
      () => {
        this.displayQuestions(
          this.state.questions,
          this.currentQuestion,
          this.state.currentQuestion,
          this.state.nextQuestion,
          this.state.previousQuestion
        );
      }
    );
  };
  render() {
    const { currentQuestion } = this.state;

    return (
      <div>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <div className="lifeline-container">
            <div className="lifeline">
              <p>
                <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
              </p>
              <p>
                <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
              </p>
            </div>
            <div className="clock">
              <p>
                <span>1 0f 15</span>
              </p>

              <div>
                <span>2:15</span>
                <span className="mdi mdi-clock-outline mdi-24px"></span>
              </div>
            </div>
          </div>
          <h5 className="text-3xl my-8">{currentQuestion.question}</h5>
          <div className="option">
            <div className="options-container">
              <p
                onClick={this.handleOptionClick}
                className="option rounded-md bg-blue-700 p-3 text-lg text-white"
              >
                {currentQuestion.optionA}
              </p>
              <p
                onClick={this.handleOptionClick}
                className="option rounded-md bg-blue-700 p-3 text-lg text-white"
              >
                {currentQuestion.optionB}
              </p>
            </div>
            <div className="options-container">
              <p
                onClick={this.handleOptionClick}
                className="option rounded-md bg-blue-700 p-3 text-lg text-white"
              >
                {currentQuestion.optionC}
              </p>
              <p
                onClick={this.handleOptionClick}
                className="option rounded-md bg-blue-700 p-3 text-lg text-white"
              >
                {currentQuestion.optionD}
              </p>
            </div>
          </div>
          <div className="quiz-direction">
            <button className="direction-key rounded-sm bg-blue-700 p-2 text-sm text-white">
              Previous
            </button>
            <button className="direction-key rounded-sm bg-green-700 p-2 text-sm text-white">
              Next
            </button>
            <button className="direction-key rounded-sm bg-red-700 p-2 text-sm text-white">
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
