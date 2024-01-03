import React, { Component } from "react";
import { browserHistory } from "../../main";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 15,
      correctAnswers: 0,
      wrongAnswers: 0,
    };
  }
  componentDidMount() {
    const state = browserHistory.location.state;
    // console.log(browserHistory.location.state);
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
    let reaction;

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
      reaction = (
        <>
          <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              // stroke-width="1.5"
              stroke="currentColor"
              className="text-red-300 w-20 h-20"
            >
              <path
                // stroke-linecap="round"
                // stroke-linejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
            <div className="text-center">
              <h2 className="text-4xl font-bold pb-2">0%</h2>
              <h4 className="inline text-gray-500 text-md">Very Unsatisfied</h4>
            </div>
          </div>
        </>
      );
    }
    if (state !== undefined) {
      stats = (
        <>
          <h1>quiz has ended</h1>
          <div className="summary-container">
            <h4>{remark}</h4>
            <h2>Your Score: {state.score.toFixed(0)}%</h2>
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
        {/* <Helmet>Quiz-App Summary</Helmet> */}
        <div className="flex flex-col items-center bg-white sm:py-16 summary">
          {reaction}
          {stats}
        </div>
      </>
    );
  }
}

export default QuizSummary;
