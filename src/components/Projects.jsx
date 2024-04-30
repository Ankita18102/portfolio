import React from "react";
const Projects = React.forwardRef((props,ref) => {
  return (
    <>
      <div className="bg-teal-500 text-white flex flex-col items-center justify-center text-center w-full pb-40 scroll-mt-16" ref={ref}>
        <h1 className="text-3xl font-semibold mb-4 mt-20">
          My Recent Projects
        </h1>
        <p className="text-xl px-10 md:px-20 xl:px-72 text-center">
          I&apos;m quite the enthusiast when it comes to digital products.
          Having immersed myself in a myriad of web applications across various
          industries and verticals, I eventually felt compelled to take on the
          challenge of crafting my own. Thus, I ventured into designing and
          building my own projects using React
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 w-full gap-6 px-10 md:px-20 lg:px-40 -mt-20 mb-20">
        <div className=" h-72 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer text-3xl bg-sky-200">
          1
        </div>
        <div className=" h-72 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer text-3xl bg-sky-200">
          2
        </div>
        <div className=" h-72 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer text-3xl bg-sky-200">
          3
        </div>
        <div className=" h-72 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer text-3xl bg-sky-200">
          4
        </div>
        <div className=" h-72 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer text-3xl bg-sky-200">
          5
        </div>
        <div className=" h-72 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition duration-300 cursor-pointer text-3xl bg-sky-200">
          6
        </div>
      </div>
    </>
  );
});
Projects.displayName='Projects'
export default Projects;
