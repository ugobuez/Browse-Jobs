import { Routes, Route } from "react-router-dom";
import JobsPage from "./pages/JobsPage";

function App() {
  return (
    <Routes>
      <Route path="/jobs" element={<JobsPage />} />
    </Routes>
  );
}

export default App;