import { FaGithub } from "react-icons/fa";
import img from "../assets/school page.png";
import data from "../Block/data.json";
const Projects = () => {
  return (
    <div className="w-full min-h-[300px] bg-white flex items-center justify-center flex-col">
      <h1 className="font-bold text-[30px]">Projects</h1>
      <div
        className="w-[90%]   min-h-[300px] mt-3  gap-7 grid grid-rows-2 bg-white
   "
      >
        {data.map((el: any) => (
          <div className="bg-white min-h-[320px] grid grid-rows-1 lg:grid-cols-2 gap-5 items-center">
            <div className="bg-red-300 h-[300px] ">
              <img src={img} className="object-fill h-full w-full" />
            </div>
            <div className="flex flex-col gap-7">
              <p className="font-bold text-[20px] text-orange-500">
                {el.project}
              </p>
              <p className="text-[14px] font-medium">{el.desc}</p>
              <div className="w-full h-[50px]   gap-5 flex flex-row items-center text-[14px]">
                <div className=" bg-orange-200 px-4 py-2 lg:py-3 text-orange-500 font-bold">
                  {el.project1}
                </div>
                <div className=" bg-orange-200 px-4 py-2 lg:py-3 text-orange-500 font-bold">
                  {el.project2}
                </div>
                <div className=" bg-orange-200 px-4 py-2 lg:py-3 text-orange-500 font-bold">
                  {el.project3}
                </div>
              </div>
              <a href="https://github.com/zionakwubo01/school.git">
                <div
                  className=" bg-orange-200  flex flex-row gap items-center justify-center  
              gap-3 w-[88%] py-2 lg:px-0 lg:w-[100px] md:w-[50%] text-orange-500 font-bold"
                >
                  <div>
                    {" "}
                    <FaGithub />
                  </div>
                  <p> github</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
