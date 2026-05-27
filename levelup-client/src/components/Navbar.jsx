import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function logout() {

    localStorage.removeItem("token");

    localStorage.removeItem("xp");

    localStorage.removeItem("streak");

    localStorage.removeItem("sessions");

    navigate("/");

  }

  return (

    <div className="bg-gray-900 text-white p-4 flex justify-between items-center border-b border-gray-800">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <button
        onClick={logout}
        className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        Logout
      </button>

    </div>

  );

}

export default Navbar;