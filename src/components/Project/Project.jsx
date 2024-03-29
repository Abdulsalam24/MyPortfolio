import { projectData } from ".";
import ProjectItem from "./ProjectItem";

const Project = () => {

  return (
    <section className="my-32" data-scroll-section>
      <div className="flex flex-col border border-t-0 border-b-5-[#777] border-l-0 border-r-0 ">
        {projectData.map((project, i) => (
          <ProjectItem
            key={i}
            project={project}
            projectLength={projectData.length}
          />
        ))}
      </div>
     
    </section>
  );
};

export default Project;
