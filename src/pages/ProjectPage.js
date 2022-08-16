import React from "react";
import "./ProjectPage.css";

import ProjectCard from "../components/Project/ProjectCard";
import { ProjectItems } from "../components/Project/ProjectItems";

function ProjectPage() {
  return (
    <>
      <div className="card">
        {ProjectItems.map((card) => (
          <ProjectCard
            key={card.id}
            thumbnail={card.thumbnail}
            title={card.title}
            type={card.type}
            desc={card.desc}
            url={card.url}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectPage;
