import Main from "./pages/Main";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useEffect} from 'react';
import "./App.css";

function App() {

  useEffect(() => {
    window.localStorage.setItem("current", "");
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
