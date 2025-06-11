/* eslint-disable react-hooks/rules-of-hooks */

import { useRef, useState } from "react";

import { motion } from "framer-motion";
import { skillData, buttonData } from "../../data/skillData";
import { Code, Star } from "lucide-react";
import { dataColorScheme } from "../../lib/utils";

export default function skillSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filterCategory = skillData.filter((category) => {
    const matchFilter =
      activeCategory === "All" ||
      category.category.toLowerCase() === activeCategory.toLowerCase();
    return matchFilter;
  });
  const scrollRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.5, delay: 3 * 0.1 }}
      className="w-full flex flex-col justify-center  my-10"
    >
      <div className="w-full flex flex-col items-center justify-content gap-4 mb-10">
        <h1 className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-5xl font-bold text-transparent p-2">
          Skill Matrix
        </h1>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400" />
      </div>
      <div className="max-w-3/4 mx-auto grid grid-cols-2 md:grid-cols-5 justify-center gap-5">
        {buttonData.map((button) => (
          <button
            key={button.id}
            className={`flex items-center justify-center gap-2 border rounded-full  py-3 px-6 
            ${
              activeCategory === button.id
                ? " bg-violet-400 text-white shadow-lg shadow-violet-500/25"
                : "  text-violet-400 border-violet-400/30 bg-black/20 hover:border-violet-400/50"
            }`}
            onClick={() => setActiveCategory(button.id)}
          >
            <button.icon className="h-4 w-4" />
            <p className=""> {button.title}</p>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-none mt-5 min-w-3/4 mx-auto gap-2">
        {filterCategory.map((category) => (
          <div className="border border-violet-400/20 min-h-32 rounded-lg backdrop-blur-sm flex flex-col gap-4 justify-center p-4 hover:cursor-pointer hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:border-violet-400/50">
            <div className="flex flex-row items-center    justify-between">
              <div className="flex flex-row items-center gap-2 ">
                <div className="bg-gradient-to-r from-violet-600 to-violet-400 w-8 h-8 flex items-center justify-center border rounded-lg p-1">
                  <Code className="text-white h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold text-white">
                    {category.title}
                  </h1>
                  <p className="text-gray-400 text-sm">{category.category}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <h1 className="text-2xl font-bold text-white">
                  {category.percent}%
                </h1>
                <div className="flex flex-row gap-1">
                  {[...Array(5)].map((_, star) => (
                    <Star
                      key={star}
                      className={` h-3 w-3 ${
                        star < Math.floor(category.percent / 20)
                          ? "text-yellow-400"
                          : "text-gray-800"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${category.percent}%` }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className={`h-3 bg-gradient-to-r ${dataColorScheme(
                  category.percent
                )} rounded-full relative overflow-hidden`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-3/4 mx-auto mt-2 border border-violet-400/20 rounded-lg bg-gradient-to-r from-violet-900/20 to-purple-900/20 py-6 px-10 backdrop-blur-sm ">
        <p className="text-gray-300 text-base text-center">
          Continuously expanding my technical expertise through hands-on
          projects and cutting-edge technologies. Always eager to learn and
          adapt to the ever-evolving digital landscape.
        </p>
      </div>
    </motion.div>
  );
}
