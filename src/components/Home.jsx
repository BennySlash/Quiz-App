import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import axios from "axios";
import ParticlesBb from "./particles";
import ParticlesBg from "./particles";
// import { UserState } from "realm-web";

const Home = () => {
  const [email, setEmail] = useState("");
  const [employeeEmails, setEmployeeEmails] = useState("");
  const navigate = useNavigate();

  const onLoad = async (event) => {
    await axios
      .get("http://localhost:4000/users")
      .then((res) => {
        console.log(res.data);
        setEmployeeEmails(res.data);
        //   console.log(employeeEmails);
        //   console.log(email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleSubmit(event) {
    event.preventDefault();
    setPath();
  }
  function handleChange(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }
  function setPath() {
    const isPresent = employeeEmails.includes(email);
    const firstNameSmall = email.split(".")[0];
    // console.log(firstNameSmall.charAt(0).toUpperCase());
    const firstNameCapital =
      firstNameSmall.charAt(0).toUpperCase() + firstNameSmall.slice(1);
    if (isPresent) {
      M.toast({
        html: `Welcome ${firstNameCapital}`,
        classes: "toast-valid",
        displayLength: "1500",
      });
      navigate("/instructions");
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
      <ParticlesBg />
      <div id="home" onLoad={onLoad}>
        <section>
          <div>
            <img src="./assets/img/gebeya-logo.png" alt="gebeya logo" />
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

              <button type="submit" id="login-button">
                Login
                {/* < to={instructions}>Login</Link> */}
              </button>
              {/* <button
                  type="submit"
                  className="auth-buttons text-white"
                  id="login-button"
                >
                  Login
                </button> */}
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
