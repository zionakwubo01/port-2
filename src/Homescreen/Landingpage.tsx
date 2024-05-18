const Landingpage = () => {
  return (
    <div
      className="w-full h-[80vh] bg-black flex items-center justify-center"
      style={{ backgroundColor: "#FDF2E9" }}
    >
      <div className="w-[80%] h-full grid grid-cols-1 lg:grid-cols-2 ">
        <div className="col-span-1 flex flex-col items-center justify-center gap-4 order-last lg:order-first">
          <h1 className="font-bold text-[30px] lg:text-[35px] xl::text-[30px]">
            HI, I'M ZION AKWUBO
          </h1>
          <p
            className="text-[15px] lg:text-[18px] text-center font-medium  shadow- rounded-lg
      shadow-[0px_px_20px_10px_#EE6718]"
          >
            A Software Engineer focused on building the frontend and backend of
            websites that leads to the success of the overall product
          </p>
          <div
            className="w-[150px] h-[50px] rounded-3xl flex items-center justify-center text-[20px]  text-bold text-white"
            style={{ backgroundColor: "#EE6718" }}
          >
            Projects
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center  order-first lg:order-last">
          <div className="min-h-[400px] w-[70%] lg:w-[80%]  xl:w-[60%] border-[4px] border-dotted object-cover border-orange-500 bg-black">
            {/* <img src={image} className="h-[100%] w-[100%] object-cont" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
