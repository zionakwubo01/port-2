import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdMessage } from "react-icons/md";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div
      className="w-full h-[90px]  fixed flex items-center justify-center "
      // style={{ backgroundColor: "#FDF2E9" }}
    >
      <div className="w-[80%] h-[60px]  relative bg-white rounded-full shadow-xl flex justify-between items-center">
        <div className="font-mono text-[30px] ml-4">ZiA</div>
        <div className="flex gap-10 mr-4 items-center ">
          <Link to={"project"}>
            <p className="font-medium text-[17px] hidden lg:flex hover:text-orange-500">
              Home
            </p>
          </Link>
          <p className="font-medium text-[17px] hidden lg:flex ">About</p>
          <p className="font-medium text-[17px] hidden lg:flex">Professional</p>
          <p className="font-medium text-[17px] hidden lg:flex">Projects</p>
          <div
            className="font-bold text-black text-[24px] flex lg:hidden hover:bg-orange-500 hover:text-white p-1 rounded-full
          hover:transition-all duration-500 ease-in-out cursor-pointer"
            onClick={() => {
              document.startViewTransition(() => {
                setToggle(!toggle);
              });
            }}
            onTouchStart={() => {
              document.startViewTransition(() => {
                setToggle(!toggle);
              });
            }}
          >
            <MdMenu color="" />
          </div>
          <div
            className="hidden gap-2 w-[120px] h-[40px] rounded-3xl lg:flex items-center justify-center text-[16px]  text-bold text-white"
            style={{ backgroundColor: "#EE6718" }}
          >
            <p className="font-medium text-[16px]">contact us</p>
            <div>
              {" "}
              <MdMessage />
            </div>
          </div>
        </div>

        {toggle ? (
          ""
        ) : (
          <div className="w-[100%] h-[350px] flex flex-col items-center gap-6 justify-center lg:hidden text-black bg-white absolute top-20  rounded-3xl">
            <p className="font-medium text-[17px] hover:text-orange-500 cursor-pointer">
              Home
            </p>
            <p className="font-medium text-[17px] hover:text-orange-500 cursor-pointer">
              About
            </p>
            <p className="font-medium text-[17px] hover:text-orange-500 cursor-pointer">
              Professional
            </p>
            <p className="font-medium text-[17px] hover:text-orange-500 cursor-pointer">
              Projects
            </p>
            <div
              className=" gap-2 w-[120px] h-[40px] rounded-3xl flex items-center justify-center text-[16px]  text-bold text-white"
              style={{ backgroundColor: "#EE6718" }}
            >
              <p className="font-medium text-[16px]">contact us</p>
              <div>
                {" "}
                <MdMessage />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
