"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Aptitudes",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CCS</li>
        <li>Firebase</li>
        <li>Mongo DB</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Educación",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack </li>
        <li>Universidad del Desarrollo</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack</li>
        <li>Landing Page</li>
        <li>Especialista en Marketing Digital</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Acerca de Mi</h2>
          <p className="text-base lg:text-lg">
          ¡Hola! Soy Ignacio Gómez, un apasionado Especialista en Desarrollo Full Stack con una sólida experiencia en la creación de aplicaciones web completas. Mi enfoque se centra en proporcionar soluciones tecnológicas efectivas y experiencias de usuario excepcionales.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Aptitudes{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
