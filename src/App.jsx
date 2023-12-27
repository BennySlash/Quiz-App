import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QuizInstruction from "./components/quiz/QuizInstructions";
import Play from "./components/quiz/Play";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<QuizInstruction />} />
        <Route path="/play-quiz" element={<Play />} />
      </Routes>
    </>
  );
}

export default App;
