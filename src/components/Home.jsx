import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import M from "materialize-css";

import axios from "axios";
import { UserState } from "realm-web";

const Home = () => {
  const [email, setEmail] = useState("");
  const [employeeEmails, setEmployeeEmails] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPath();

    await axios
      .get("http://localhost:4000/users")
      .then((res) => {
        // console.log(res.data);
        setEmployeeEmails(res.data);
        //   console.log(employeeEmails);
        //   console.log(email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleChange(event) {
    setEmail(event.target.value);
  }
  function setPath() {
    const isPresent = employeeEmails.includes(email);

    if (isPresent) {
      setInstructions("/instructions");
    } else {
      M.toast({
        html: "The Email you Entered in Invalid",
        classes: "toast-invalid",
        displayLength: 1500,
      });
    }
  }

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
            {/* <ul>
              <li>
                <Link className="play-button" to="/play/quiz">
                  Play
                </Link>
              </li>
            </ul> */}
          </div>
          <div className="auth-container">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your Gebeya Email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></input>

              <Link
                to={instructions}
                type="submit"
                className="auth-buttons text-white"
                id="login-button"
              >
                {/* <button
                  type="submit"
                  className="auth-buttons text-white"
                  id="login-button"
                >
                  Login
                </button> */}
                Login
              </Link>
            </form>
            {/* <Link to="/register" className="auth-buttons" id="signup-button">
              Register
            </Link> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
