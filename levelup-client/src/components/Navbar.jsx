function Navbar() {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center border-b border-gray-800">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
        Logout
      </button>

    </div>
  );
}

export default Navbar;