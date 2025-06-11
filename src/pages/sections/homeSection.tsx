import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { profileIcons } from "../../data/homeData";
import { motionVariant } from "../../lib/utils";

interface HomeSectionProps {
  name?: string;
}

const HomeSection = ({ name }: HomeSectionProps) => {
  const fullText = "FUTURE DEVELOPER";
  const [text, setText] = useState<string>("");
  useEffect(() => {
    let i = 0;
    let isTyping = true;
    let typingTimeout: ReturnType<typeof setTimeout>;

    const typeWriter = () => {
      if (isTyping) {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1));
          i++;
          typingTimeout = setTimeout(typeWriter, 100);
        } else {
          isTyping = false;
          typingTimeout = setTimeout(typeWriter, 1000);
        }
      } else {
        if (i > 0) {
          setText(fullText.slice(0, i));
          i--;
          typingTimeout = setTimeout(typeWriter, 100);
        } else {
          isTyping = true;
          typingTimeout = setTimeout(typeWriter, 1000);
        }
      }
    };
    typingTimeout = setTimeout(typeWriter, 1000);
    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className="h-full my-10 md:my-0 md:h-screen flex flex-col items-center justify-center">
      <motion.div variants={motionVariant}>
        <h1 className="text-6xl font-bold relative bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
          Hello, I'm
        </h1>
      </motion.div>
      <motion.div
        variants={motionVariant}
        className=" flex items-center justify-center"
      >
        <h1 className=" text-7xl font-bold relative bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent animate-pulse">
          {name}
        </h1>
      </motion.div>
      <div className="mb-6 mt-6 ">
        <h2 className="text-3xl font-mono text-cyan-400 h-8  flex items-center justify-center animate-pulse border-r-2 pr-1">
          {text}
        </h2>
      </div>
      <div className="w-3/4 md:w-1/2 pl-2 pr-2">
        <p className="text-white/80 text-lg text-center ">
          Crafting digital experiences with cutting-edge technology. Currently
          mastering the art of web development through intensive on-the-job
          training, building tomorrow's web today.
        </p>
      </div>
      <motion.div
        variants={motionVariant}
        className="flex justify-center space-x-4 mb-12 bg-transparent"
      >
        {profileIcons.map(({ icon: Icon, label, color, href }, index) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <a href={href}>
              <button className="relative rounded-full bg-transparent border-violet-400/30 hover:border-violet-400/60 backdrop-blur-sm group overflow-hidden p-3 border mt-5 hover:cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <Icon className="h-5 w-5 text-violet-300 group-hover:text-white transition-colors duration-300" />
                <span className="sr-only">{label}</span>
              </button>
            </a>
          </motion.div>
        ))}
      </motion.div>
      <div className="border p-2 rounded-md bg-gradient-to-r from-violet-700 to-violet-400 pl-5 pr-5 transition-opacity duration-300  hover:cursor-pointer">
        <button className="flex items-center  justify-center gap-2 text-white font-semibold hover:cursor-pointer">
          Explore My Journey
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
