function TaskCard({ task, completeTask, deleteTask }) {
  return (
    <div className="bg-gray-800 p-5 rounded-xl shadow-lg">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-semibold text-white">
          {task.title}
        </h2>

        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          {task.difficulty}
        </span>

      </div>

      <p className="text-gray-400 mt-3">
        {task.description}
      </p>

      <div className="flex justify-between items-center mt-5">

        <p className="text-yellow-400 font-bold">
          +{task.xp} XP
        </p>

        <div className="flex gap-3">

          <button
            onClick={() => completeTask(task.id)}
            className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700 text-white"
          >
            Complete
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;