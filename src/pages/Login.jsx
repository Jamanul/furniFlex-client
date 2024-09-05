import React from "react";

const Login = () => {
  return (
    <div className="md:overflow-hidden max-h-screen flex flex-col md:flex-row-reverse">
      <div className="md:w-1/2 relative">
        <img
          src="https://i.ibb.co/bbf28ZF/chris-lee-70l1t-DAI6r-M-unsplash-1.png"
          alt=""
        />
        <div className="absolute top-[40%] flex flex-col mx-auto w-full items-center ">
          <img src="/icon.png" alt="" />
          <h2 className="text-4xl font-bold text-white">
            Furni<span className="text-primary">Flex</span>
          </h2>
          <p className="font-medium text-base text-[#C8C4C4] text-center">
            Discover a seamless shopping experience with our curated <br />{" "}
            collection of products. From fashion to electronics, we bring <br />{" "}
            quality.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 rounded-lg flex overflow-clip items-center justify-center">
        <div className=" bg-[#FAFAFA] p-6 pt-10">
          <h2 className="text-3xl font-medium">Welcome Back!</h2>
          <p className="text-[#707070] font-semibold pb-6">
            Enter your Credentials to access your account
          </p>
          <form action="">
            <label className="form-control relative w-full ">
              <div className="label">
                <span className="label-text text-[#707070] text-xs absolute top-5 left-[13px]">Email Address</span>
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className=" pt-5 pb-3 border rounded-lg pl-3 text-sm text-black font-bold w-full"
              />
            </label>
            <label className="form-control relative w-full ">
              <div className="label">
                <span className="label-text text-[#707070] text-xs absolute top-5 left-[13px]">Password</span>
              </div>
              <input
                type="email"
                placeholder="Enter your password"
                className=" pt-5 pb-3 border rounded-lg pl-3 text-sm text-black font-bold w-full"
              />
              <div className="label">
                <span className="label-text-alt"></span>
                <a
                  href="#"
                  className="label-text-alt object-right link link-hover text-primary font-medium"
                >
                  Forgot password
                </a>
              </div>
              <label className="label"></label>
            </label>
            <div className="flex items-center gap-2">
              <input type="checkbox"  className="" />
                <span className="font-medium text-sm">I agree to the <span className="underline">Terms and Policy.</span></span>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
