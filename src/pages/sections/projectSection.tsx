/* eslint-disable react-hooks/rules-of-hooks */
import { CodeXml, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { projectData } from "../../data/projectData";
import { useRef } from "react";

export default function projectSection() {
  const scrollRef = useRef(null);
  return (
    <motion.div
      className="h-full items-center justify-center flex flex-col my-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.5, delay: 3 * 0.1 }}
    >
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full w-full gap-4 mb-10">
          <h1 className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-5xl font-bold text-transparent p-2">
            Digital Creations
          </h1>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400" />
        </div>
        <div className="h-full max-w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectData.map((project) => (
            <div
              className="flex flex-col bg-gradient-to-t from-black/20 to-black/30 border border-violet-400/20 rounded-lg group relative backdrop-blur-sm   h-full md:h-[600px] hover:cursor-pointer hover:shadow-violet-400/20 hover:shadow-lg ease-out hover:scale-[1.02]  transition-all duration-200  md:pb-10"
              key={project.id}
            >
              <div className="h-1/2 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt="Image"
                  className="object-fill w-full h-full"
                />
              </div>
              <div className="h-fit md:h-1/2 p-4 flex flex-col ">
                <h1 className="text-white text-xl font-bold">
                  {project.title}
                </h1>
                <p className="text-sm text-gray-400 md:min-h-28 text-justify my-2">
                  {project.description}
                </p>
                <div className="my-2 grid md:grid-cols-2  gap-2 mt-5">
                  {project.stack.map((stack) => (
                    <div className="flex flex-row items-center justify-center gap-2 border border-violet-400/20 rounded-full px-2 py-1 bg-black/20 text-violet-400">
                      <Layers className="w-4 h-4" />

                      <p className="text-sm">{stack}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row h-full items-end justify-between gap-5 md:my-5 ">
                  <div>
                    <p className="text-sm text-violet-400">
                      {project.codeStatus}
                    </p>
                  </div>
                  <div className="flex flex-row gap-5 items-center ">
                    <button
                      className="text-violet-400 hover:cursor-pointer "
                      disabled={
                        project.codeStatus.toLowerCase() ===
                        "Private".toLowerCase()
                      }
                    >
                      <a href={project.codeLink}>
                        <CodeXml className="h-4 w-4 animate-bounce" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
