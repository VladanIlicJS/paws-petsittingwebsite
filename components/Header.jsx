import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section>
      <div className=" w-full h-full">
        <div className="">
          <Image
            src="/../public/assets/images/hero.jpg"
            alt="/"
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute mx-auto bg-white top-[50%] left-[50%] translate-x-[-50%]">

            <div className="w-[850px]">
                <div className="flex px-4 py-4 justify-start items-center">
                    <p className="text-[#424340] font-semibold">I am looking for service for my:</p>
                    
                    <input className="ml-2 appearance-none w-[20px] h-[20px] cursor-pointer bg-gray-500 rounded-sm hover:border-gray-600 hover:border-2 hover:bg-gray-400" type="checkbox" />
                    <label className="mx-1">  Dog</label>
                    <input className="ml-2 appearance-none w-[20px] h-[20px] cursor-pointer bg-gray-500 rounded-sm hover:border-gray-600 hover:border-2 hover:bg-gray-400" type="checkbox" />
                    <label className="ml-1  "> Cat</label>
                    <input className="ml-2 appearance-none w-[20px] h-[20px] cursor-pointer bg-gray-500 rounded-sm hover:border-gray-600 hover:border-2 hover:bg-gray-400" type="checkbox" />
                    <label className="ml-1  "> Other</label>
                </div>

                <div>

                </div>



            </div>

        </div>
      </div>
    </section>
  );
};

export default Header;
