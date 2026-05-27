const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// SIGNUP
const signup = async (req,res)=>{

try{

const {username,email,password}=req.body;

const existingUser = await User.findOne({
email
});

if(existingUser){

return res.status(400).json({
message:"User already exists"
});

}

const hashedPassword =
await bcrypt.hash(password,10);

const user = await User.create({

username,
email,
password:hashedPassword

});

res.status(201).json({

message:"Signup successful"

});

}

catch(error){

res.status(500).json(error);

}

};


// LOGIN
const login = async(req,res)=>{

try{

const {email,password}=req.body;

const user = await User.findOne({
email
});

if(!user){

return res.status(400).json({
message:"User not found"
});

}

const match = await bcrypt.compare(
password,
user.password
);

if(!match){

return res.status(400).json({
message:"Invalid password"
});

}

const token = jwt.sign(

{
id:user._id,
email:user.email
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);

res.status(200).json({

token,
user

});

}

catch(error){

res.status(500).json(error);

}

};

module.exports = {

signup,
login

};