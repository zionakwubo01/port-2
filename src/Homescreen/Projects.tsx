const Projects = () => {
  return (
    <div className="w-full min-h-[500px] bg-black flex items-center justify-center">
      <div className="w-[90%] min-h-[300px] bg-red-500  lg:w-[90%] grid grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2">
        <div className="h-[300px]  bg-yellow-400"></div>
        <div className="h-[300px]  bg-yellow-400">1</div>
        <div className="h-[300px]  bg-yellow-400 md:hidden lg:flex">1</div>
      </div>
    </div>
  );
};

export default Projects;
