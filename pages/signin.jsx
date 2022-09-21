import Link from "next/link";
import { borderRadius } from "@mui/system";
import Image from "next/image";
import React, { useContext, useState } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../components/context/AuthContext";
import { Login } from "@mui/icons-material";
import { useRouter } from "next/router";
const SignIn = () => {
  const [email,setEmail]=useState('')
  const [error, setError]=useState('')
  const [password,setPassword]=useState('')
  const router=useRouter()
  const {user,logIn}=UserAuth();
  
  const handleLogIn = async (e) => {
    e.preventDefault()
    try {
      await logIn(email,password)
      router.push('/')
    }catch(error){
      console.log(error)
      setError(error.message)
    }
  }


  return (
    <div className="w-full">
      <div>
        <Image
          src="/../public/assets/images/signin.jpg"
          alt="/"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-[500px] bg-white h-[600px] absolute flex flex-col rounded-md p-5 items-center justify-between my-8 mx-[50px]">
        <h1 className=" text-4xl font-bold pb-8">Sign In to Paws</h1>
        {error ? <p className="text-red-600">{error}</p> : ''}
        <GoogleButton
          style={{ width: "100%", margin: "20px 0", textAlign: "center" }}
        />
        <p className="text-gray-500">or login with </p>
        <form className="w-full flex flex-col py-4">
          <input
          onChange={(e)=>setEmail(e.target.value)}
            className="p-3 my-2 bg-gray-200 rounded-sm outline-none  "
            type="email"
            placeholder="Enter email"
          />
          <input
          onChange={(e)=>setPassword(e.target.value)}
            className="p-3 my-2 bg-gray-200 rounded-sm outline-none  "
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <button onClick={handleLogIn} className="w-full bg-green-500  hover:bg-green-400 duration-200 ease-in py-3 my-4 rounded-sm text-white">
            Login
          </button>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p><input type="checkbox" /> Remember me</p>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="text-center py-5 text-blue-400">
          <a className="my-4" href="\">
            Forgot your Password?
          </a>
          <hr className="w-[400px] my-5" />
          <p className="text-black">
            Don&apos;t have Paws Account?{" "}
            <Link className=" text-blue-400" href="\signUp">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
