import React, { Component } from "react";
import { browserHistory } from "../../main";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    };
  }
  componentDidMount() {
    const state = browserHistory.location.state;
    console.log(browserHistory.location.state);
    this.setState({
      score: (state.score / state.numberOfQuestions) * 100,
      numberOfQuestions: state.numberOfQuestions,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
    });
  }
  render() {
    const state = this.state;
    const score = state.score;

    // console.log(state);
    let stats;
    let remark;

    if (score <= 30) {
      remark = "you need more practice.";
    } else if (score > 30 && score <= 50) {
      remark = "Better luck next time.";
    } else if (score <= 70 && score > 50) {
      remark = "You can do better.";
    } else if (score >= 71 && score <= 84) {
      remark = "you did great!";
    } else {
      remark = "That was Genius!";
    }
    if (state !== undefined) {
      stats = (
        <>
          <div>
            <span className="mdi mdi-check-circle-outline sucess-icon"></span>
          </div>
          <h1>quiz has ended</h1>
          <div className="summary-container">
            <h4>{remark}</h4>
            <h2>Your Score: {score.toFixed(0)}%</h2>
            <span className="stat left">Total number of question: </span>
            <span className="stat left">{state.numberOfQuestions} </span>
            <br />
            <span className="stat left">Your score: </span>
            <span className="stat left">{state.score} </span>
            <br />
            <span className="stat left">Correct Answers: </span>
            <span className="stat left">{state.correctAnswers}</span>
            <br />
            <span className="stat left">Wrong Answers: </span>
            <span className="stat left">{state.wrongAnswers}</span>
          </div>
          <section>
            <ul className="m-10 flex">
              <li className="m-10">
                <Link
                  to="/"
                  className="rounded-sm bg-blue-700 p-3 text-lg text-white"
                >
                  Back to Home
                </Link>
              </li>

              <li className="m-10">
                <Link
                  to="/play-quiz"
                  className="rounded-sm bg-blue-700 p-3 text-lg text-white"
                >
                  Take Quiz Again
                </Link>
              </li>
            </ul>
          </section>
        </>
      );
    } else {
      stats = (
        <section>
          <h1>No stats Available, Please take a Quiz.</h1>;
          <ul className="m-10">
            <li className="m-10">
              <link
                to="/"
                className="rounded-sm bg-blue-700 p-3 text-lg text-white"
              >
                Back to Home
              </link>
            </li>

            <li className="m-10">
              <link
                to="/play-quiz"
                className="rounded-sm bg-blue-700 p-3 text-lg text-white"
              >
                Take Quiz Again
              </link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <>
        <Helmet>Quiz-App Summary</Helmet>
        {stats}
      </>
    );
  }
}

export default QuizSummary;
