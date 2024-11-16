import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import doctorImage from "../assets/doctor.png"; // Ensure this path is correct
import weatherImage from "../assets/weather.png"; // Ensure this path is correct
import ecommerce from "../assets/ecommerce.jpg";

const projects = [
  {
    id: 1,
    name: "Realtime Chat App",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/YouafKhan1",
    Live: ""
  },
  {
    id: 2,
    name: "E-Commerce website",
    technologies: "MERN Stack",
    image: ecommerce,
    github: "https://github.com/YouafKhan1",
    Live: ""
  },
  {
    id: 3,
    name: "Doctor Appointment Booking Website",     
    technologies: "React.js, JSX, Tailwind CSS, JavaScript, HTML",
    image: doctorImage,
    github: "https://github.com/Pulavamsi2001/Doctor-Appointment-Booking",
    Live: "https://doctor-appointment-booking-nine.vercel.app/"
  },
  {
    id: 4,
    name: "Weather App",     
    technologies: "ReactJs, TailwindCSS",
    image: weatherImage,
    github: "https://github.com/YouafKhan1",
    Live: ""
  },
];

const Projects = () => {
  return (
    <div className="text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>

              <div className="flex gap-4">
                <a href={project.github} className="inline-block bg-gradient-to-r 
                from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
                rel="noopener noreferrer">GitHub</a>
                {project.Live && (
                  <a href={project.Live} className="inline-block bg-gradient-to-r 
                  from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
                  rel="noopener noreferrer">Live</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;