import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6">

      <h1 className="text-3xl font-bold mb-10 text-purple-500">
        LevelUp
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/dashboard"
          className="hover:bg-gray-800 p-3 rounded-lg"
        >
          Dashboard
        </Link>

        <Link
          to="/analytics"
          className="hover:bg-gray-800 p-3 rounded-lg"
        >
          Analytics
        </Link>

        <Link
          to="/leaderboard"
          className="hover:bg-gray-800 p-3 rounded-lg"
        >
          Leaderboard
        </Link>

        <Link
          to="/focus"
          className="hover:bg-gray-800 p-3 rounded-lg"
        >
          Focus Mode
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;
