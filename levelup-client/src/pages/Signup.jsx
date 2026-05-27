import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:""
  });

  function handleChange(e){

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });

  }

  async function handleSubmit(e){

    e.preventDefault();

    try{

      await API.post(
        "/auth/signup",
        formData
      );

      alert("Signup successful");

      navigate("/");

    }

    catch(error){

      alert(
        error.response.data.message
      );

    }

  }

  return (

<div className="h-screen flex items-center justify-center bg-black">

<div className="bg-gray-900 p-8 rounded-xl w-96">

<h1 className="text-3xl font-bold text-white mb-6 text-center">
Signup
</h1>

<form
onSubmit={handleSubmit}
className="flex flex-col gap-4"
>

<input
name="username"
placeholder="Username"
onChange={handleChange}
className="p-3 rounded bg-gray-800 text-white"
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
className="p-3 rounded bg-gray-800 text-white"
/>

<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
className="p-3 rounded bg-gray-800 text-white"
/>

<button
className="bg-purple-600 p-3 rounded text-white"
>
Signup
</button>

</form>

</div>

</div>

);

}

export default Signup;