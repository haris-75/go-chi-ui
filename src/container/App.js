import "./App.css";
import axios from "axios";
import Users from "../components/Users";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
