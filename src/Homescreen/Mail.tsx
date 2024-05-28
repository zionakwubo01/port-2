const Mail = () => {
  return (
    <div>
      <div className="w-full min-h-[400px]  flex items-center justify-center mt-8">
        <div className="w-[90%] min-h-[380px] bg-white flex flex-col gap-3">
          <p className="text-black font-bold text-[20px]">contact --</p>
          <h1 className="font-bold text-[25px] text-orange-500 lg:text-[35px]">
            Leave your message
          </h1>
          <p className="font-medium text-[15px] lg:text-[25px]">
            You can get in touch with me by sending a message using the form
            below. i'll get back to you
          </p>
          <div className="w-full min-h-[200px]  flex flex-col gap-3">
            <input
              className="w-[80%] h-[70px] lg:h-[90px] bg-white border rounded-2xl px-4 text-[18px] outline-0 "
              placeholder="enter your name"
            />
            <input
              className="w-[80%]  h-[70px] lg:h-[90px] bg-white border rounded-2xl px-4 text-[18px] outline-0"
              placeholder="enter your email"
            />
            <input
              className="w-[80%]  h-[70px] lg:h-[90px] bg-white border rounded-2xl px-4 text-[18px] outline-0"
              placeholder="message"
            />
            <button className="bg-black h-[50px] text-white font-medium text-[20px] w-[150px] rounded-md">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
