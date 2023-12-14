import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QuizInstruction from "./components/quiz/QuizInstructions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/instructions" element={<QuizInstruction />} />
      </Routes>
    </>
  );
}

export default App;
