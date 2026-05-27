import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../services/api";

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await API.get("/leaderboard");

        setUsers(response.data);
        setError("");
      } catch (error) {
        console.log(error);
        setError("Unable to load leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="flex bg-gray-950 min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>

        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-4 gap-4 px-6 py-4 text-sm font-semibold text-gray-400 border-b border-gray-700">
            <span>Rank</span>
            <span>User</span>
            <span>XP</span>
            <span>Streak</span>
          </div>

          {loading && (
            <p className="px-6 py-8 text-gray-400">Loading leaderboard...</p>
          )}

          {!loading && error && (
            <p className="px-6 py-8 text-red-400">{error}</p>
          )}

          {!loading && !error && users.length === 0 && (
            <p className="px-6 py-8 text-gray-400">
              No leaderboard data yet.
            </p>
          )}

          {!loading &&
            !error &&
            users.map((user, index) => (
              <div
                key={user._id || user.username}
                className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-gray-700 last:border-b-0"
              >
                <span className="font-bold text-yellow-400">
                  #{index + 1}
                </span>
                <span>{user.username}</span>
                <span>{user.xp || 0}</span>
                <span>{user.streak || 0}</span>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default Leaderboard;
