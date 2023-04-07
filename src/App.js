import "./App.css";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
