import React from "react";
import coding from "../coding.png";
export default function AboutMe() {
  return (
    <div className="bg-gradient-to-b from-cyan-700 to-cyan-600">
      <div className="flex text-slate-50 text-left py-4 lg:px-[10%] px-[8%] ">
        <div className="w-6/12">
          <img src={coding} className="w-[100%]" alt="coding" />
        </div>
        <div className="w-6/12">
          <h2 class="font-medium leading-tight text-5xl mt-10 mb-2 text-center">
            About Me
          </h2>
          <hr />
        </div>
      </div>
    </div>
  );
}
