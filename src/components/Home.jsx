import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Quize App - Home</title>
      </Helmet>
      <div id="home">
        <section>
          <div>
            <img src="./assets/img/gebeya-logo.png" alt="gebeya logo" c />
          </div>
          <h1>Quiz App</h1>
          <div className="play-button-container">
            <ul>
              <li>
                <Link className="play-button" to="/play/instructions">
                  Play
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth-container">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
