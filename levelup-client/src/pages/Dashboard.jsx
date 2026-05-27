import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import AddTask from "../components/AddTask";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import API from "../services/api";

function Dashboard() {

  // Tasks from MongoDB
  const [tasks, setTasks] = useState([]);

  // XP persistence
  const [xp, setXp] = useState(() => {
    return JSON.parse(localStorage.getItem("xp")) || 250;
  });

  // Streak persistence
  const [streak, setStreak] = useState(() => {
    return JSON.parse(localStorage.getItem("streak")) || 5;
  });

  // Fetch tasks on page load
  useEffect(() => {
    let isMounted = true;

    const fetchTasks = async () => {
      try {
        const response = await API.get("/tasks");
        
        if (isMounted) {
          setTasks(response.data);
        }
      } catch(error) {
        console.log(error);
      }
    };

    fetchTasks();

    return () => {

};
  }, []);

  // Save XP and streak
  useEffect(() => {
    localStorage.setItem("xp", JSON.stringify(xp));
    localStorage.setItem("streak", JSON.stringify(streak));
  }, [xp, streak]);

  // Complete Task
  async function completeTask(id) {
    try {
      const response = await API.put(`/tasks/${id}`);
      const completedTask = response.data;

      setXp(prevXp => prevXp + completedTask.xp);
      setStreak(prevStreak => prevStreak + 1);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
      toast.success(
"🎉 Task Completed +XP"
);
    } catch(error) {
      console.log(error);
    }
  }

  // Delete Task
  async function deleteTask(id) {
    try {
      await API.delete(`/tasks/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
      toast.error(
"Task Deleted 🗑"
);
    } catch(error) {
      console.log(error);
    }
  }

  // Add Task
  async function addTask(task) {
    try {
      const response = await API.post("/tasks", task);
      setTasks(prevTasks => [response.data, ...prevTasks]);
      toast.success(
"Task Added ✅"
);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="flex bg-gray-950 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <AddTask addTask={addTask} />

          {/* Dashboard cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-xl text-white">
              <h2 className="text-xl font-semibold">Total XP</h2>
              <p className="text-4xl mt-4 text-yellow-400">{xp}</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-white">
              <h2 className="text-xl font-semibold">Current Streak</h2>
              <p className="text-4xl mt-4">🔥 {streak}</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl text-white">
              <h2 className="text-xl font-semibold">Level</h2>
              <p className="text-4xl mt-4 text-purple-400">{Math.floor(xp / 100) + 1}</p>
            </div>
          </div>

          <h2 className="text-3xl text-white font-bold mb-6">Today's Tasks</h2>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-white mb-2">
              <span>Level Progress</span>
              <span>{xp % 100}/100 XP</span>
            </div>

            <div className="w-full bg-gray-700 h-4 rounded-full">
              <div
                className="bg-purple-600 h-4 rounded-full"
                style={{ width: `${xp % 100}%` }}
              />
            </div>
          </div>

          {/* Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tasks.map(task => (
              <TaskCard
                key={task._id}
                task={task}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;