/* eslint-disable react-hooks/rules-of-hooks */
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { imagesArray, projectData, matrixData } from "../../data/aboutData";
import { motion } from "framer-motion";
export default function aboutSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageAnimation = (direction: "next" | "prev") => {
    const imageElement = document.querySelector(
      "image-container img"
    ) as HTMLImageElement;
    if (!imageElement) return;

    imageElement.classList.add(
      "transition-transform",
      "duration-300",
      "ease-in-out"
    );

    if (direction === "next") {
      imageElement.style.transform = "rotateY(-180deg)";
    } else {
      imageElement.style.transform = "rotateY(180deg)";
    }
    setTimeout(() => {
      imageElement.style.transform = "rotateY(0)";
    });
  };

  const nextImage = () => {
    handleImageAnimation("next");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex: number) =>
        prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
      );
    });
  };
  const prevImage = () => {
    handleImageAnimation("prev");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex: number) =>
        prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
      );
    });
  };
  const scrollRef = useRef(null);
  return (
    <div className="h-full md:mb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 0.5, delay: 3 * 0.1 }}
        className="flex flex-col items-center justify-center  mb-10 gap-4"
      >
        <h1 className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-5xl font-bold text-transparent p-2 ">
          Digital Identity
        </h1>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400" />
      </motion.div>

      <div className="md:grid md:grid-cols-2 flex flex-col items-center justify-center ">
        <motion.div
          className="flex flex-row items-center justify-center md:gap-5 gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ duration: 0.5, delay: 3 * 0.1 }}
        >
          <div
            className="border-2 md:h-14 md:w-14 h-10 w-10 rounded-full flex items-center justify-center border-violet-400/50 hover:cursor-pointer hover:scale-[1.03] ease-out transition-all backdrop-blur-sm"
            onClick={prevImage}
          >
            <ChevronLeft className="text-violet-400 h-6 w-6" />
          </div>
          <div className="relative  max-w-96 max-h-96">
            <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 rounded-2xl blur-lg opacity-30 animate-pulse" />
            <div className="absolute -inset-2 bg-gradient-to-r  from-violet-400 via-purple-400 to-fuchsia-400 rounded-xl opacity-50 animate-pulse" />
            <div className="relative rounded-lg border-violet-400/50 backdrop-blur-sm bg-black/20 border-2 max-h-80 w-full overflow-hidden image-container perspective-100">
              <img
                src={imagesArray[currentImageIndex]}
                alt="Image"
                className="object-fill transition-transform duration-300 ease-in-out backface-hidden"
              />
            </div>
            <div className="border-l-2 border-t-2 absolute top-2 left-2 w-4 h-4 border-violet-400 animate-pulse" />
            <div className="border-l-2 border-b-2 absolute bottom-2 left-2 w-4 h-4 border-violet-400 animate-pulse" />
            <div className="border-r-2 border-t-2 absolute top-2 right-2 w-4 h-4 border-violet-400 animate-pulse" />
            <div className="border-r-2 border-b-2 absolute bottom-2 right-2 w-4 h-4 border-violet-400 animate-pulse" />
          </div>
          <div
            className="border-2 md:h-14 md:w-14 h-10 w-10 rounded-full flex items-center justify-center border-violet-400/50 hover:cursor-pointer hover:scale-[1.03] ease-out transition-all backdrop-blur-sm"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6 text-violet-400 " />
          </div>
        </motion.div>
        <div className="flex flex-col items-center md:items-baseline  max-w-1/2 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            className="flex items-center justify-center flex-col my-5"
          >
            <h1 className="text-white font-bold text-2xl">
              Personal Data Matrix
            </h1>
          </motion.div>
          <div className="grid grid-rows-3 gap-5 w-sm md:min-w-lg">
            {matrixData.map((data) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 0.5, delay: 3 * 0.1 }}
                className="w-sm md:w-full  border rounded-lg p-3 border-violet-400/20 backdrop-blur-sm hover:shadow-violet-400/20 hover:shadow-lg ease-out hover:scale-[1.02]  transition-all duration-200 hover:cursor-pointer"
              >
                <div className="flex flex-row items-center justify-start gap-5">
                  <div className="border rounded-lg p-3 bg-gradient-to-r from-violet-600 to-violet-400">
                    <data.icon className="text-white " />
                  </div>
                  <div>
                    <h2 className="text-sm text-gray-400 font-medium">
                      {data.title}
                    </h2>
                    <h1 className="text-white font-semibold">{data.value}</h1>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
            className="min-w-sm md:min-w-lg mt-5 border border-violet-400/20 rounded-lg p-6 bg-gradient-to-r from-violet-900/20 to-purple-900/20 backdrop-blur-sm hover:shadow-lg hover:scale-[1.02] ease-out hover:shadow-violet-400/20 transition-all"
          >
            <p className="text-justify text-gray-300 leading-relaxed">
              I am a dedicated Computer Scientist, currently immersed in the
              world of cutting-edge web development. My journey through academic
              experience has equipped me with both theoretical knowledge and
              practical experience in creating innovative, user-centric digital
              solutions. I thrive on transforming complex problems into elegant,
              functional code.
            </p>
          </motion.div>
          <div className="min-w-md md:min-w-lg gap-2 grid grid-cols-3 mt-6 my-5 ">
            {projectData.map((project) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ root: scrollRef }}
                transition={{ duration: 0.5, delay: 3 * 0.1 }}
                className="flex flex-col items-center justify-center max-w-40 min-h-32 gap-2 border rounded-lg border-violet-400/20 hover:shadow-lg backdrop-blur-sm ease-out transition-all hover:shadow-violet-400/20 hover:scale-[1.02] hover:cursor-pointer p-4"
              >
                <project.icon className="text-violet-400 h-6 w-6" />
                <h1 className="text-white text-xl font-bold">
                  {project.number} <span>+</span>
                </h1>
                <p className="text-xs text-gray-400">{project.desciption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
