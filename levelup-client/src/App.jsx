import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "./services/api";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; 
import Analytics from "./pages/Analytics";
import FocusMode from "./pages/FocusMode";
import Leaderboard from "./pages/Leaderboard";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

  const fetchTasks = async () => {

    try {

      const response = await API.get(
        "/tasks"
      );

      setTasks(
        response.data
      );

    }

    catch(error){

      console.log(error);

    }

  };

  const token = localStorage.getItem(
    "token"
  );

  if(token){

    fetchTasks();

  }

}, []);

  return(
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Login/>} />
      <Route path = "/signup" element={<Signup/>} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path = "/focus" element={<FocusMode/>} />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics tasks={tasks} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/leaderboard"
        element={
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
