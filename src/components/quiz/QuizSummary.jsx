import React, { Component, useEffect, useState } from "react";
import { browserHistory } from "../../main";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import { data } from "autoprefixer";
import { sendDataToServer } from "../../utils/api";

function QuizSummary() {
  const locationState = browserHistory.location.state;
  const [score, setScore] = useState(
    (locationState.score / locationState.numberOfQuestions) * 100
  );
  const [numberOfQuestions, setNumberOfQuestions] = useState(
    locationState.numberOfQuestions
  );

  const [correctAnswers, setCorrectAnswers] = useState(
    locationState.correctAnswers
  );

  const [wrongAnswers, setWrongAnswers] = useState(locationState.wrongAnswers);
  const [name, setName] = useState(locationState.name);
  let stats;
  let remark;
  let reaction;

  const send = () =>
    sendDataToServer({
      firstName: name,
      scorePercentage: score.toFixed(0),
    });

  if (score <= 30) {
    remark = "You need more practice.";
    reaction = (
      <>
        <div className="rounded-full bg-green-200 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                // stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-red-300 w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-4xl font-bold pb-2">{score.toFixed(0)}%</h2>
            <h4 className="inline text-gray-500 text-md">Very Unsatisfied</h4>
          </div>
        </div>
      </>
    );
  } else if (score > 30 && score <= 50) {
    remark = "Better luck next time.";
    reaction = (
      <>
        <div className="rounded-full bg-green-200 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path
                // stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-red-300 w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-4xl font-bold pb-2">{score.toFixed(0)}%</h2>
            <h4 className="inline text-gray-500 text-md">Very Unsatisfied</h4>
          </div>
        </div>
      </>
    );
  } else if (score <= 70 && score > 50) {
    remark = "You can do better.";
    reaction = (
      <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-gray-400 w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a25.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-4xl font-bold pb-2">{score.toFixed(0)}%</h2>
          <h4 className="inline text-gray-500 text-md">Neutral</h4>
        </div>
      </div>
    );
  } else if (score >= 71 && score <= 84) {
    remark = "You did great!";
    reaction = (
      <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-green-400 w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-4xl font-bold pb-2">{score.toFixed(0)}%</h2>
          <h4 className="inline text-gray-500 text-md">Very Satisfied</h4>
        </div>
      </div>
    );
  } else {
    remark = "That was Genius!";
    reaction = (
      <div className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-green-400 w-20 h-20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-4xl font-bold pb-2">{score.toFixed(0)}%</h2>
          <h4 className="inline text-gray-500 text-md">Very Satisfied</h4>
        </div>
      </div>
    );
  }
  return (
    <>
      {/* <Helmet>Quiz-App Summary</Helmet> */}
      <div className="flex flex-col items-center bg-white sm:py-16 summary">
        <>
          <h1>Quiz has ended.</h1>

          {reaction}
          <div className="summary-container">
            <h4>{remark}</h4>
            <h2>Your Score: {score.toFixed(0)}%</h2>
            <span className="stat left">Total number of question: </span>
            <span className=" mx-5  stat left">{numberOfQuestions} </span>
            <br />
            <span className="stat left">Your score: </span>
            <span className=" mx-5  stat left">{score.toFixed(0)} \ 100</span>
            <br />
            <span className="stat left">Correct Answers: </span>
            <span className=" mx-5  stat left">{correctAnswers}</span>
            <br />
            <span className="stat left">Wrong Answers: </span>
            <span className=" mx-5  stat left">{wrongAnswers}</span>
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
        <button
          onClick={send}
          className="rounded-sm bg-blue-700 p-3 text-lg text-white"
        >
          Save Score
        </button>
      </div>
    </>
  );
}

export default QuizSummary;
