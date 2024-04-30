import React from "react";
import img1 from "./../assets/sendfast.png";
import img2 from "./../assets/media.png";
import img3 from "./../assets/onesolar.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import graphql from "../assets/graphql.png";
import postman from "../assets/postman.png";
import framermotion from "../assets/framermotion.svg";

const Experience = React.forwardRef((props, ref) => {
  
  const projects = [
    {
      id: 1,
      title: "Sendfast",
      techused: [react, tailwind, figma, graphql],
      description: [
        // eslint-disable-next-line react/jsx-key
        <p>
          Enhanced{" "}
          <a
            href="https://www.sendfast.in/rider.html"
            target="_blank"
            className="text-teal-500"
          >
            SendFast&apos;s rider page
          </a>{" "}
          using React and Tailwind CSS to ensure responsiveness and improved
          user experience.
        </p>,
        // eslint-disable-next-line react/jsx-key
        <p>
          Developed{" "}
          <a
            href="http://test-app.sendfast.in/de-list"
            target="_blank"
            className="text-teal-500 "
          >
            Delivery Data Executive page
          </a>{" "}
          based on Figma designs, implementing filter functionality by state,
          city, and hubs using GraphQL to fetch backend data.
        </p>,
        // eslint-disable-next-line react/jsx-key
        <p>
          Implemented the{" "}
          <a
            href="http://test-app.sendfast.in/change-password"
            target="_blank"
            className="text-teal-500 "
          >
            Change Password page
          </a>{" "}
          using React and GraphQL for backend communication.
        </p>,
      ],
      imageUrl: img1,
      link: "http://test-app.sendfast.in/",
    },
    {
      id: 2,
      title: "Media Project",
      techused: [react, tailwind, figma, postman],
      description: [
        "Developed YouTube-like video pages with functionalities such as watching shorts, login, logout, change password, and uploading videos.",
        "Implemented login authentication and user-specific features, including viewing uploaded videos.",
        "Utilized Postman for fetching data from the backend and ensured responsiveness using React and Tailwind CSS.",
      ],
      imageUrl: img2,
      link: "",
    },
    {
      id: 3,
      title: "One Solar",
      techused: [react, tailwind, figma, framermotion],
      description: [
        "Designed and developed 4 pages with different sections based on Figma designs.",
        "Utilized Tailwind CSS and Framer Motion for animations to enhance user experience.",
        // eslint-disable-next-line react/jsx-key
        <p>
          Implemented a{" "}
          <a
            href="https://one-solar.vercel.app/"
            target="_blank"
            className="text-teal-500"
          >
            calculator feature
          </a>{" "}
          to automatically calculate savings based on system size or monthly
          bills with solar energy.
        </p>,
      ],
      imageUrl: img3,
      link: "https://one-solar.vercel.app/",
    },
  ];

  return (
    <>
      <div
        className="my-20 flex flex-col items-center justify-center scroll-mt-24"
        ref={ref}
      >
        <h1 className="text-3xl font-semibold mb-4">Professional Experience</h1>
        <p className="text-xl text-center mx-10">
          Here are some of the frontend development roles and projects I&apos;ve
          been involved in:
        </p>
        <div className="flex flex-col xl:flex-row w-full gap-6 mt-20 px-10 md:px-20 lg:px-40">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-slide bg-white rounded-xl shadow-md hover:shadow-lg p-10"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full rounded-lg mb-4 cursor-pointer"
                />
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <button
                      className={`text-sm font-semibold bg-teal-500 text-white rounded-full px-2 py-1 shadow-lg transition-opacity duration-300 opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:opacity-100`}
                    >
                      Visit Website
                    </button>
                  </a>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <div className="flex items-center justify-center mt-2 mb-6 gap-2">
                  {Array.isArray(project.techused) ? (
                    project.techused.map((item, index) => (
                      <img
                        key={index}
                        src={item}
                        alt="technology used"
                        className="w-10"
                      />
                    ))
                  ) : (
                    <li>{project.techused}</li>
                  )}
                </div>
                <ul className="text-md text-start list-disc">
                  {Array.isArray(project.description) ? (
                    project.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))
                  ) : (
                    <li>{project.description}</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

Experience.displayName = "Experience";
export default Experience;
