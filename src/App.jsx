import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QuizInstruction from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";
import QuizSummary from "./components/quiz/QuizSummary";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<QuizInstruction />} />
        <Route path="/play-quiz" element={<Play />} />
        <Route path="/quiz-summary" element={<QuizSummary />} />
      </Routes>
    </>
  );
}

export default App;
