import React from "react";

const LoadingContent = () => (
  <div className="flex flex-col space-y-10 items-center mx-10 md:mx-20">
    {/* STATISTICS */}
    <div className="h-40 bg-gray-600 w-full max-w-screen-2xl animate-pulse rounded-xl"></div>

    {/* REPO */}
    <div className="flex flex-col w-full md:flex-row justify-center items-stretch md:items-start  pb-20 max-w-screen-2xl">
      <div className="h-96 w-64 bg-gray-600 rounded-xl animate-pulse mx-10 hidden md:flex"></div>

      <div className="flex flex-col flex-grow space-y-2  mx-10">
        <div className="w-20 h-10 bg-gray-600 rounded-xl animate-pulse"></div>
        <div className="flex flex-grow h-10 bg-gray-600 rounded-xl animate-pulse"></div>
        <div className="flex flex-grow h-32 bg-gray-600 rounded-xl animate-pulse"></div>

        <div className="h-96 w-64 bg-gray-600 rounded-xl self-center block animate-pulse my-10  md:hidden"></div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10">
          <div className="flex w-20 h-10 bg-gray-600 rounded-xl animate-pulse"></div>
          <div className="flex w-20 h-10 bg-gray-600 rounded-xl animate-pulse"></div>
        </div>

        <hr />
        <div className="flex flex-grow h-16 bg-gray-600 rounded-xl animate-pulse"></div>
      </div>
    </div>
  </div>
);

export default LoadingContent;
