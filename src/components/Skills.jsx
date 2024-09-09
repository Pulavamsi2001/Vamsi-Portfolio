import React, { useEffect, useRef } from "react";

const frontEndDevelopment = {
  title: "Front-End Development",
  subcategories: [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "HTML / CSS", width: "w-10/12" },
        { name: "JavaScript", width: "w-10/12" },
        { name: "TypeScript", width: "w-8/12" },
        { name: "React JS", width: "w-11/12" },
      ],
    },
    {
      title: "Design Frameworks",
      skills: [
        { name: "Bootstrap", width: "w-9/12" },
        { name: "Tailwind CSS", width: "w-9/12" },
      ],
    },
  ],
};

const backEndDevelopment = {
  title: "Back-End Development",
  subcategories: [
    {
      title: "Languages & Frameworks",
      skills: [
        { name: "Node.js", width: "w-9/12" },
        { name: "Express.js", width: "w-9/12" },
        { name: "Socket.io", width: "w-7/12" },
      ],
    },
    {
      title: "API Integration",
      skills: [
        { name: "Axios", width: "w-7/12" },
        { name: "RESTful APIs", width: "w-8/12" },
      ],
    },
  ],
};

const databaseTechnologies = {
  title: "Database Technologies",
  subcategories: [
    {
      title: "Relational Databases",
      skills: [
        { name: "PL/SQL", width: "w-8/12" },
        { name: "Oracle SQL", width: "w-8/12" },
        { name: "PostgreSQL", width: "w-7/12" },
        { name: "MySQL", width: "w-7/12" },
      ],
    },
    {
      title: "NoSQL Databases",
      skills: [
        { name: "MongoDB", width: "w-7/12" },
      ],
    },
  ],
};

const developmentTools = {
  title: "Development Tools",
  subcategories: [
    {
      title: "Code Editors",
      skills: [
        { name: "Visual Studio Code", width: "w-10/12" },
        { name: "Toad", width: "w-8/12" },
        { name: "SQL Developer", width: "w-7/12" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", width: "w-9/12" },
        { name: "GitHub", width: "w-9/12" },
      ],
    },
  ],
};

const deploymentHosting = {
  title: "Deployment & Hosting",
  subcategories: [
    {
      title: "Platforms",
      skills: [
        { name: "Vercel", width: "w-7/12" },
        { name: "Firebase", width: "w-7/12" },
      ],
    },
  ],
};

const SkillsSubsection = ({ title, skills }) => (
  <div className="mb-4 p-4">
    <h3 className="text-xl font-semibold pb-2">{title}</h3>
    <div>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center mb-2"
        >
          <label
            htmlFor={skill.name
              .toLowerCase()
              .replace(/ & /g, "")
              .replace(/ /g, "")}
            className="w-full sm:w-3/12 text-left pr-2"
          >
            {skill.name}
          </label>
          <div className="w-full sm:w-9/12 bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`bg-green-500 h-2.5 rounded-full skill-bar ${skill.width}`}
              style={{ width: "0%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = ({ title, subcategories }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
              bar.style.width = bar.classList.contains("w-10/12")
                ? "83.33%"
                : bar.classList.contains("w-9/12")
                ? "75%"
                : bar.classList.contains("w-8/12")
                ? "66.67%"
                : bar.classList.contains("w-7/12")
                ? "58.33%"
                : bar.classList.contains("w-11/12")
                ? "91.67%"
                : "0%";
              bar.classList.add("transition-all", "duration-2000", "ease-in-out");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mb-8 p-6 border border-gray-600 rounded-lg hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out bg-gray-800 bg-opacity-70 will-change-transform"
    >
      <h2 className="text-2xl font-semibold pb-4">{title}</h2>
      {subcategories.map((sub, index) => (
        <SkillsSubsection key={index} title={sub.title} skills={sub.skills} />
      ))}
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="text-white text-center py-16 px-8">
      <h1 className="text-3xl font-bold pb-8 animate-fadeIn">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillsSection
          title={frontEndDevelopment.title}
          subcategories={frontEndDevelopment.subcategories}
        />
        <SkillsSection
          title={backEndDevelopment.title}
          subcategories={backEndDevelopment.subcategories}
        />
        <SkillsSection
          title={databaseTechnologies.title}
          subcategories={databaseTechnologies.subcategories}
        />
        <SkillsSection
          title={developmentTools.title}
          subcategories={developmentTools.subcategories}
        />
        <SkillsSection
          title={deploymentHosting.title}
          subcategories={deploymentHosting.subcategories}
        />
      </div>
    </section>
  );
};

export default Skills;