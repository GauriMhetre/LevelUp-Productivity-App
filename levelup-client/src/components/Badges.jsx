const allBadges = [
  {
    id: 1,
    name: "First Task",
    icon: "🎯",
    description: "Complete your first task",
  },
  {
    id: 2,
    name: "Week Warrior",
    icon: "🔥",
    description: "Maintain a 7-day streak",
  },
  {
    id: 3,
    name: "Century",
    icon: "💯",
    description: "Reach 100 XP",
  },
  {
    id: 4,
    name: "Level Master",
    icon: "👑",
    description: "Reach level 10",
  },
  {
    id: 5,
    name: "Night Owl",
    icon: "🌙",
    description: "Complete a task after 10 PM",
  },
  {
    id: 6,
    name: "Focus King",
    icon: "⚡",
    description: "Complete 10 focus sessions",
  },
];
function Badges({ xp = 0, streak = 0, sessions = 0 }) {
  const level = Math.floor(xp / 100) + 1;

  const userBadges = [
    xp >= 50 && 1,
    streak >= 7 && 2,
    xp >= 100 && 3,
    level >= 10 && 4,
    sessions >= 10 && 6,
  ].filter(Boolean);

  return (
    <div className="bg-gray-800 p-6 rounded-xl text-white">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Your Badges</h2>
        <span className="text-sm text-gray-400">
          {userBadges.length}/{allBadges.length} unlocked
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allBadges.map((badge) => {
          const isUnlocked = userBadges.includes(badge.id);

          return (
            <div
              key={badge.id}
              className={`p-4 rounded-lg text-center border transition ${
                isUnlocked
                  ? "bg-yellow-500/15 border-yellow-400 text-white"
                  : "bg-gray-700/70 border-gray-700 text-gray-400 opacity-70"
              }`}
            >
              <div
                className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold ${
                  isUnlocked
                    ? "bg-yellow-400 text-gray-950"
                    : "bg-gray-800 text-gray-500"
                }`}
              >
                {badge.icon}
              </div>

              <h3 className="font-semibold text-sm">{badge.name}</h3>
              <p className="text-xs mt-2 leading-relaxed">
                {badge.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Badges;
