// enter data properly
import React from "react";
import Project from "./Project";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { MdOutlineDetails } from "react-icons/md";

const Projects = () => {
  const projectPros = [
    {
      id: 1,
      title: "Responsive Design",
      image: "./images/image.jpeg",
      description: "The component is built with responsive classes ensuring it adapts to various screen sizes, enhancing user experience across devices.",
      technologies: ["react", "node", "tailwind", "redux"],
      actions: [
        { text: "Live Demo", icon: <FaGlobe /> },
        { text: "Source Code", icon: <FaGithub /> },
        { text: "Details", icon: <MdOutlineDetails /> }
      ]
    },
    {
      id: 2,
      title: "Reusable Components",
      image: "./images/image.jpeg",
      description: "Utilizes reusable subcomponents such as <Technology /> and <ProjectAction />, which promotes modularity and easier maintenance.",
      technologies: ["react", "javascript", "tailwind"],
      actions: [
        { text: "Live Demo", icon: <FaGlobe /> },
        { text: "Source Code", icon: <FaGithub /> },
        { text: "Details", icon: <MdOutlineDetails /> }
      ]
    },
    {
      id: 3,
      title: "Well-Structured Layout",
      image: "./images/image.jpeg",
      description: "The layout is clearly divided into picture and details sections, ensuring a clean and organized presentation of project content.",
      technologies: ["html", "css", "tailwind"],
      actions: [
        { text: "Live Demo", icon: <FaGlobe /> },
        { text: "Source Code", icon: <FaGithub /> },
        { text: "Details", icon: <MdOutlineDetails /> }
      ]
    },
  ];
  
  // export default projectPros;
  
  return (
    <div className="flex justify-start flex-col gap-20 pt-10   ml-[17vw] mt-10 h-[100vh]  border-x-2 border-yellow-200 bg-black  ">
      {projectPros.map((project) => {
       return <Project
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          technologies={project.technologies}
          actions={project.actions}
        />;
      })}

    </div>
  );
};

export default Projects;



/*





{
  id: 4,
  title: "Flexibility with Props",
  image: "./images/image.jpeg",
  description: "The <ProjectAction /> component is flexible, supporting conditional rendering based on props (e.g., icon).",
  technologies: ["react", "redux"],
  actions: [
    { text: "Live Demo", icon: <FaGlobe /> },
    { text: "Source Code", icon: <FaGithub /> },
    { text: "Details", icon: <MdOutlineDetails /> }
  ]
},
{
  id: 5,
  title: "Modern Styling",
  image: "./images/image.jpeg",
  description: "The component uses modern CSS-in-JS techniques with Tailwind CSS for quick styling and customization.",
  technologies: ["tailwind", "css", "react"],
  actions: [
    { text: "Live Demo", icon: <FaGlobe /> },
    { text: "Source Code", icon: <FaGithub /> },
    { text: "Details", icon: <MdOutlineDetails /> }
  ]
},
{
  id: 6,
  title: "Customizable Image Display",
  image: "./images/image.jpeg",
  description: "Supports customizable image sources and styles, making it easy to adjust or replace the image as needed.",
  technologies: ["react", "tailwind", "html"],
  actions: [
    { text: "Live Demo", icon: <FaGlobe /> },
    { text: "Source Code", icon: <FaGithub /> },
    { text: "Details", icon: <MdOutlineDetails /> }
  ]
},
{
  id: 7,
  title: "Semantic HTML Elements",
  image: "./images/image.jpeg",
  description: "The component uses semantic HTML tags (e.g., <picture> and <div>), improving accessibility and SEO.",
  technologies: ["html", "seo"],
  actions: [
    { text: "Live Demo", icon: <FaGlobe /> },
    { text: "Source Code", icon: <FaGithub /> },
    { text: "Details", icon: <MdOutlineDetails /> }
  ]
},
{
  id: 8,
  title: "Interactive Actions",
  image: "./images/image.jpeg",
  description: "Incorporates action components (<ProjectAction />) to handle potential interactions like buttons or icons for user engagement.",
  technologies: ["react", "javascript"],
  actions: [
    { text: "Live Demo", icon: <FaGlobe /> },
    { text: "Source Code", icon: <FaGithub /> },
    { text: "Details", icon: <MdOutlineDetails /> }
  ]
},
{
  id: 9,
  title: "Clear BEM-like ID Naming",
  image: "./images/image.jpeg",
  description: "The component uses unique IDs for structuring the layout, improving readability and manageability of the code.",
  technologies: ["html", "css", "react"],
  actions: [
    { text: "Live Demo", icon: <FaGlobe /> },
    { text: "Source Code", icon: <FaGithub /> },
    { text: "Details", icon: <MdOutlineDetails /> }
    ]
    }
    
    
    
    */