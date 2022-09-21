import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SortIcon from "@mui/icons-material/Sort";
import PetsIcon from '@mui/icons-material/Pets';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";
import { useRouter } from "next/router";


const Navbar = () => {

  const {user,logOut}=UserAuth();
  const router=useRouter()
  const handleLogOut = (e)=>{
    e.preventDefault();
    try{
      logOut()
      router.push('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="w-full h-[50px] bg-white border-b z-50 sticky ">
      <div className="w-[1240px] mx-auto flex justify-between px-1 h-[50px]">
        {/* Left */}
        <div className="flex h-[50px]">
          <Image
            src="/../public/assets/images/logo.jpg"
            alt="\"
            width={50}
            height={40}
          />
          <ul className="flex justify-start items-center mx-2 h-[50px]">
            <li className="mx-2 text-[14px]">
              <a className="color-[#404347]" href="\">
                <i className="mx-1">
                  <SearchIcon />
                </i>
                Search Sitters
              </a>
            </li>
            <li className="mx-2 text-[14px]">
              <a className="color-[#404347]" href="\">
                <i className="mx-1">
                  <PetsIcon />
                </i>
                Kupi Ljubimca
              </a>
            </li>
            <li className="mx-2 text-[14px]">
              <a className="color-[#404347]" href="\">
                <i className="mx-1">
                  <VolunteerActivismOutlinedIcon />
                </i>
                Udomi Ljubimca
              </a>
            </li>
            <li className="mx-2 text-[14px]">
              <a className="color-[#404347]" href="\">
                <i className="mx-1">
                  <ImportContactsOutlinedIcon />
                </i>
                Blog
              </a>
            </li>
            {/* <li className="mx-2 text-[14px]">
              <a className="color-[#404347]" href="\">
                <i className="mx-1">
                  <FavoriteBorderIcon />
                </i>
                
              </a>
            </li> */}
            <li className="mx-2 text-[14px]">
              <a className="color-[#404347]" href="\">
                <i className="mx-1">
                  <QuestionAnswerOutlinedIcon />
                </i>
                Our Services
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}

        {user?.email? (<div className="flex">
          <ul className="flex items-center text-[14px]">
            <li className="mx-2">
              <Link href="/">Account</Link>
            </li>
            <li  className="mx-2">
              <button onClick={handleLogOut} href="/signIn">Logout</button>
            </li>
          </ul>
        </div>):(
          <div className="flex">
          <ul className="flex items-center text-[14px]">
            <li className="mx-2">
              <Link href="/signUp">Sign Up</Link>
            </li>
            <li  className="mx-2">
              <Link href="/signIn">Sign In</Link>
            </li>
            <li  className="mx-2">
              <a href="\">
                <i className="mx-1"><FavoriteBorderIcon/></i>Become a Sitter
              </a>
            </li>
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
