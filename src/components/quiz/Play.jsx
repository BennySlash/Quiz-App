import React from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty";
import M from "materialize-css";

import { browserHistory } from "../../main";

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
      // hints: 0,
      // fiftyFifty: 0,
      // usedFiftyFifty: 0,
      time: {},
    };
    this.interval = null;
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
    this.startTimer();
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
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endQuiz();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.currentQuestion,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
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
        numberOfAnsweredQuestion: prevState.numberOfAnsweredQuestion + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endQuiz();
        } else {
          this.displayQuestions(
            this.state.questions,
            this.currentQuestion,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      }
    );
  };
  handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        this.handleNextButton();
        break;
      case "previous-button":
        this.handlePreviousButton();
        break;
      case "quit-button":
        this.handleQuitButton();
        break;
      default:
        break;
    }
  };

  handleNextButton = () => {
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };
  handlePreviousButton = () => {
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        () => {
          this.displayQuestions(
            this.state.state,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handleQuitButton = () => {
    if (window.confirm("Are you sure you want to Quit?")) {
      browserHistory.push("/");
      window.location.reload(false);
    }
  };
  startTimer = () => {
    const countDownTime = Date.now() + 1000000;
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = countDownTime - now;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState(
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            this.endQuiz();
          }
        );
      } else {
        this.setState({
          time: {
            minutes,
            seconds,
          },
        });
      }
    }, 1000);
  };
  endQuiz = () => {
    // const navigate = useNavigate();

    alert("Quiz has Ended.");
    const { state } = this;
    const playerStats = {
      score: state.score,
      numberOfQuestions: state.numberOfQuestions,
      correctAnswers: state.numberOfAnsweredQuestion,
      wrongAnswers: state.wrongAnswers,
    };
    setTimeout(() => {
      // navigate("/quiz-summary");
      browserHistory.push("/quiz-summary", playerStats);
      window.location.reload(false);
    }, 1000);
  };
  render() {
    const { currentQuestion, time, currentQuestionIndex } = this.state;

    return (
      <div>
        <div className="questions">
          <div className="lifeline-container">
            <div className="lifeline">
              <p className="text-yellow-700 text-lg p-2">
                {/* <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span> */}
                Questions
              </p>
              {/* <p>
                <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span>
              </p> */}
            </div>
            <div className="clock">
              <p>
                <span className="text-blue-800 px-3 text-lg">
                  {currentQuestionIndex} 0f 15
                </span>
              </p>

              <div className="px-2 flex items-center g-2">
                <span className="text-green-800 text-xl">
                  {time.minutes}:{time.seconds}
                </span>
                <span className="mdi mdi-clock-outline mdi-24px  text-orange-700"></span>
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
            <button
              id="previous-button"
              onClick={this.handleButtonClick}
              className="direction-key rounded-sm bg-blue-700 p-2 text-sm text-white"
            >
              Previous
            </button>
            <button
              id="next-button"
              onClick={this.handleButtonClick}
              className="direction-key rounded-sm bg-green-700 p-2 text-sm text-white"
            >
              Next
            </button>
            <button
              id="quit-button"
              onClick={this.handleButtonClick}
              className="direction-key rounded-sm bg-red-700 p-2 text-sm text-white"
            >
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
