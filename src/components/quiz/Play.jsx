import React from "react";
import { Helmet } from "react-helmet";

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Quiz Page</title>
        </Helmet>
        <div className="questions">
          <h5> what is your name?</h5>
          <div className="options-container">
            <p className="option">1999</p>
            <p className="option">1999</p>
          </div>
          <div className="options-container">
            <p className="option">1999</p>
            <p className="option">1999</p>
          </div>
          <div className="flex space-x-3 w-fit">
            <button className="rounded-sm bg-blue-700 p-3 text-lg text-white">
              Previous
            </button>
            <button className="rounded-sm bg-blue-700 p-3 text-lg text-white">
              Next
            </button>
            <button className="rounded-sm bg-blue-700 p-3 text-lg text-white">
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Play;
