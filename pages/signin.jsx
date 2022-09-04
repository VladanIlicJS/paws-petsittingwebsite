import { borderRadius } from "@mui/system";
import Image from "next/image";
import React from "react";
import GoogleButton from 'react-google-button'

const signIn = () => {
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
        <GoogleButton style={{width:"400px",textAlign:"center"}}  onClick={() => { console.log('Google button clicked') }}/>

        
        <div className="text-center py-5 text-blue-400">
        <p className="text-center text-black py-4 "><small>By signing in or signing up, I agree to Paws.com&apos;s Terms of Service and Privacy Policy, confirm that I am 18 years of age or older, and consent to receiving email communication. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small></p>
        <a className="my-4"href="\">Forgot your Password?</a>
        <hr className="w-[400px] my-5"/>
        <p className="text-black">Don&apos;t have Paws Account? <a className=" text-blue-400" href="\">Sign up now</a></p>
        </div>
        
      </div>

    </div>
  );
};

export default signIn;
