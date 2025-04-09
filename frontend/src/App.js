import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from "./components/UploadImage"; // new component you'll build

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
