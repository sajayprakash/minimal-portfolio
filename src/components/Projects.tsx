import { projects } from "../data";
import Title from "./Title";
export default function Projects() {
  return (
    <div>
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-purple-400 hover:border-purple-600 rounded-lg p-4 shadow-md"
          >
            <img
              src={project.imgUrl}
              alt={project.title}
              className="rounded-lg mb-2 w-full object-cover"
            />
            <a href={project.url} className="text-xl font-semibold flex mb-2">
              {project.title}
            </a>
            {project.stack.map((language) => (
              <span
                key={language}
                className="text-sm border rounded-md border-violet-400 px-2 mx-1"
              >
                {language}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
