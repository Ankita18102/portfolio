import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import next from "../assets/next.svg";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import vscode from "../assets/vscode.png";
import github from "../assets/github.png";
import gitlab from "../assets/gitlab.png";
import framermotion from "../assets/framermotion.svg";
import React from "react";

const Skills = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center text-center -mt-16 scroll-mt-20 mx-10 md:mx-20 lg:mx-40 xl:mx-0"
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center w-full xl:w-1/3 bg-white p-12 rounded-3xl shadow-lg text-xl">
          <img
            src="https://cdn-icons-png.freepik.com/512/8759/8759087.png"
            alt="icon"
            className="w-16"
          />
          <h1 className="text-2xl font-semibold font-roboto-slab my-6">
            Frontend Developer
          </h1>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p className="text-teal-500 mt-8 mb-1">Languages I know:</p>
          <div className="flex gap-2">
            <img src={html} />
            <img src={css} />
            <img src={js} />
          </div>
          <p className="text-teal-500 mt-8 mb-1">Frameworks/Libraries:</p>
          <div className="flex gap-2">
            <img src={react} />
            <img src={next} className="w-16" />
          </div>
          <p className="text-teal-500 mt-8 mb-1">CSS Frameworks:</p>
          <div className="flex gap-2">
            <img src={bootstrap} />
            <img src={tailwind} />
          </div>
          <p className="text-teal-500 mt-8 mb-1">Version Control:</p>
          <img src={git} />
          <p className="text-teal-500 mt-8 mb-1">Development Tools:</p>
          <div className="flex gap-2">
            <img src={vscode} />
            <img src={github} />
            <img src={gitlab} />
            <img src={framermotion} className="w-10" />
          </div>
        </div>
      </div>
    </>
  );
});
Skills.displayName = "Skills";
export default Skills;
