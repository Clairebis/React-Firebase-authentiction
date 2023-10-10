import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/common/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Routes>
            <Route path="/login" element={<Form title="Login" />} />
            <Route path="/register" element={<Form title="Register" />} />
          </Routes>
        </>
        <Form />
      </div>
    </Router>
  );
}

export default App;
