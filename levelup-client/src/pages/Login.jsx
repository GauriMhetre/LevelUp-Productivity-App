import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate=useNavigate();

const [formData,setFormData]=useState({

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

const response=await API.post(
"/auth/login",
formData
);

localStorage.setItem(
"token",
response.data.token
);

navigate("/dashboard");

}

catch(error){

alert(
error.response.data.message
);

}

}

return(

<div className="h-screen flex items-center justify-center bg-gray-900">

<div className="bg-gray-800 p-8 rounded-xl w-96">

<h1 className="text-3xl text-white font-bold mb-6">
Login
</h1>

<form
onSubmit={handleSubmit}
className="flex flex-col gap-4"
>

<input
name="email"
placeholder="Email"
onChange={handleChange}
className="p-3 rounded bg-gray-700 text-white"
/>

<input
name="password"
type="password"
placeholder="Password"
onChange={handleChange}
className="p-3 rounded bg-gray-700 text-white"
/>

<button
className="bg-purple-600 p-3 rounded text-white"
>
Login
</button>

<p className="text-gray-400 mt-4 text-center">

Don't have an account?

<span
onClick={() => navigate("/signup")}
className="text-purple-400 cursor-pointer ml-2"
>

Signup

</span>

</p>

</form>

</div>

</div>

);

}

export default Login;