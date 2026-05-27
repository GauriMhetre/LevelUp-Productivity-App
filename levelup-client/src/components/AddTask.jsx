import { useState } from "react";

function AddTask({ addTask }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  function handleSubmit(e) {

    e.preventDefault();

    let xp = 10;

    if (difficulty === "Medium") {
      xp = 25;
    }

    if (difficulty === "Hard") {
      xp = 50;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      difficulty,
      xp,
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setDifficulty("Easy");
  }

  return (
    <div className="bg-gray-900 p-6 rounded-xl mb-8">

      <h2 className="text-2xl font-bold text-white mb-5">
        Add New Task
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-lg bg-gray-800 text-white"
          required
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 rounded-lg bg-gray-800 text-white"
          required
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="p-3 rounded-lg bg-gray-800 text-white"
        >

          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>

        </select>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg"
        >
          Add Task
        </button>

      </form>

    </div>
  );
}

export default AddTask;