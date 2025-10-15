import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/Home/HomePage";
import { CreateStudyPage } from "./pages/CreateStudy/CreateStudyPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateStudyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
