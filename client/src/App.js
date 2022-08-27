import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SendEmail from "./Pages/SendEmail"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route  exact path="/SendEmail" element={<SendEmail />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
