import { async } from "@firebase/util";
import Link from "next/link";
import { useRouter } from "next/router"; 
import { borderRadius } from "@mui/system";
import Image from "next/image";
import React, { useContext } from "react";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../components/context/AuthContext";


const SignUp = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {user,signUp}=UserAuth()
    const router=useRouter()
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try{
            await signUp(email,password)
            router.push('/')
        }catch(error){
            console.log(error)
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
        <h1 className=" text-4xl font-bold pb-8">Sign Up to Paws</h1>
        <GoogleButton style={{width:"100%",textAlign:"center"}}/>
        <p className="text-gray-500">or login with </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col pt-4 tb-2">
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
          <button className="w-full bg-green-500  hover:bg-green-400 duration-200 ease-in py-3 my-4 rounded-sm text-white">
            Sign Up
          </button>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p><input type="checkbox" /> Remember me</p>
            <p>Need Help?</p>
          </div>
        </form>

        
        <div className="text-center py-1 text-blue-400">
        <p className="text-center text-black py-4 "><small>By signing in or signing up, I agree to Paws.com&apos;s Terms of Service and Privacy Policy, confirm that I am 18 years of age or older, and consent to receiving email communication. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small></p>
        <hr className="w-[400px] my-5"/>
        <p className="text-black">Already have account?<Link className=" text-blue-400" href="/signIn"> Login now</Link></p>
        </div>
        
      </div>

    </div>
  );
};

export default SignUp;