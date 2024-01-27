"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Landing de Venta",
    description: "Proyecto 1",
    image: "/images/projects/1.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/IgnacioAndres07/Landing-Page?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=df2454a9-07ad-4761-8458-7c80616cb944&submissionId=50d30c82-b65a-559c-1176-2c4dc68a69ef",
    previewUrl: "https://ignacioandres07.github.io/Landing-Page/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=df2454a9-07ad-4761-8458-7c80616cb944&submissionId=50d30c82-b65a-559c-1176-2c4dc68a69ef",
  },
  {
    id: 2,
    title: "Aplicación CRUD",
    description: "Proyecto 2",
    image: "/images/projects/2.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/IgnacioAndres07/Aplicacion-CRUD/tree/master?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=094d300d-7208-4cf3-98f6-32944386100a&submissionId=0c1b5cb0-4ce6-3979-f6f3-61e458c79ad0",
    previewUrl: "https://ignacioandres07.github.io/Aplicacion-CRUD/",
  },
  {
    id: 3,
    title: "Tablero de Datos",
    description: "Proyecto 3",
    image: "/images/projects/3.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/MadLucas/dashboard_entrega_3?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=348889ba-7756-4caa-a95b-7e5f152981df&submissionId=eb844459-af1f-5138-3863-49cc6a35657e",
    previewUrl: "https://stellular-pegasus-ba45a8.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=348889ba-7756-4caa-a95b-7e5f152981df&submissionId=eb844459-af1f-5138-3863-49cc6a35657e",
  },
  {
    id: 4,
    title: "Restaurant App",
    description: "Proyecto 4",
    image: "/images/projects/4.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/MadLucas/proyecto-restaurant-entrega4?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=f00d0c67-6153-415e-ab72-8a1c19ab51ac&submissionId=9b16026c-e4c5-ac31-9302-4ac411698066",
    previewUrl: "https://euphonious-kashata-b65864.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=f00d0c67-6153-415e-ab72-8a1c19ab51ac&submissionId=9b16026c-e4c5-ac31-9302-4ac411698066",
  },
  {
    id: 5,
    title: "Aplicación de Comercio Electrónico",
    description: "Proyecto 5",
    image: "/images/projects/5.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/Tania-Bobadilla/Aquaride-backend?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=134d16ea-0d59-4488-a460-186c1a208e6b&submissionId=e6160aff-d832-5c06-1eb5-db2841e7df53",
    previewUrl: "https://fabulous-genie-b3ac69.netlify.app/?classId=3171369d-975e-442e-bc3d-27ca2f25647f&assignmentId=134d16ea-0d59-4488-a460-186c1a208e6b&submissionId=e6160aff-d832-5c06-1eb5-db2841e7df53",
  },
  {
    id: 6,
    title: "Portafolio V2",
    description: "Proyecto 6",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
