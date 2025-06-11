/* eslint-disable react-hooks/rules-of-hooks */
import { Award, Calendar, GraduationCap, Zap } from "lucide-react";
import { educationData } from "../../data/educationData";
import { motion } from "framer-motion";
import { useRef } from "react";
const educationSection = () => {
  const scrollRef = useRef(null);
  return (
    <motion.div
      className="my-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: scrollRef }}
      transition={{ duration: 0.5, delay: 3 * 0.1 }}
    >
      <div className="flex flex-col items-center justify-center h-full w-full gap-4 mb-10">
        <h1 className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-5xl font-bold text-transparent p-2 text-center">
          Educational Matrix
        </h1>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400" />
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full gap-4 relative">
        <div className="absolute left-[calc(12.5%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-fuchsia-400" />

        {educationData.map((education) => (
          <div
            className="flex flex-row items-start w-3/4 min-h-60 relative"
            key={education.program}
          >
            <div
              className={`absolute left-0 transform -translate-x-1/2 w-3 h-3 rounded-full border-2 ${
                education.status === "Progress"
                  ? "bg-green-400 border-green-300"
                  : "bg-violet-600 border-violet-400"
              } z-10`}
            />

            <div className="flex flex-row border w-full min-h-60 rounded-lg  border-violet-400/20 hover:cursor-pointer hover:scale-[1.02] ease-out transition-all bg-black/20 hover:border-violet-400/40 p-4 ml-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-purple-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center h-10   w-12 md:h-14 md:w-14   justify-center border border-violet-400/50 p-1 md:p-4 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 ">
                <GraduationCap className="text-white h-5 w-5 md:h-10 md:w-10" />
              </div>
              <div className="w-full pl-3">
                <div className="flex flex-row items-center w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
                      <div className="flex flex-col md:gap-2">
                        <h1 className="text-2xl font-bold text-white md:text-start text-center">
                          {education.program}
                        </h1>
                        <div className="flex flex-col md:flex-row items-center text-center">
                          <p className="text-gray-400 text-sm font-medium">
                            {education.university}
                            <span>{"\u00A0\u2022\u00A0"}</span>
                          </p>
                          <div className="flex flex-row gap-1 items-center">
                            <Calendar className="text-gray-400 h-4 w-4" />
                            <p className="text-gray-400 text-sm font-medium">
                              {education.date}{" "}
                              <span>{"\u00A0\u2022\u00A0"}</span>
                            </p>
                          </div>
                          <p className="flex flex-row items-center gap-2 text-sm font-medium text-yellow-400">
                            <span className="">
                              <Zap className="h-4 w-4" />
                            </span>
                            {education.gpa}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`border p-1 pl-2 pr-2 rounded-full ${
                          education.status === "Progress"
                            ? "bg-green-400/20 border border-green-400/30"
                            : "bg-blue-400/20 border-blue-400/30"
                        }`}
                      >
                        <p
                          className={`text-sm ${
                            education.status === "Progress"
                              ? "text-green-300"
                              : "text-blue-300"
                          }`}
                        >
                          {education.status}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-300 mb-5 mt-5 ">
                      <p className=" text-start md:text-base text-sm">{education.desciption}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2">
                        <Award className="text-yellow-400" />
                        <h1 className="text-white font-semibold">
                          Key Achievements
                        </h1>
                      </div>
                      <div className="flex flex-col md:flex-row gap-2">
                        {education.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex flex-row items-center min-w-20 md:min-w-64 justify-center border border-violet-400/20 min-h-8 pl-2 pr-2 rounded-lg bg-gradient-to-r from-violet-600/20 to-purple-600/20"
                          >
                            <p className="text-white text-[12px] md:text-base ">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default educationSection;
