import { Menu, X, Zap } from "lucide-react";
import type { NavItem } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HeaderProps {
  title: string;
  NavItem: NavItem[];
}

const Header = ({ title, NavItem }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header className="sticky z-1 top-0 h-12 flex-row justify-between pl-25 pr-25 bg-transparent pt-2 pb-2 backdrop-blur-sm md:flex hidden shadow-lg shadow-violet-400/20 border-b border-violet-400/20">
        <div className="flex items-center justify-start z-10 hover:cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1"
          >
            <Zap className="h-6 w-6 text-violet-400 " />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center gap-2">
              {title}
            </h1>
          </motion.div>
        </div>

        <div className="flex items-center justify-end">
          <ul className="flex ">
            {NavItem.map((item) => (
              <li className="text-sm text-gray-300 px-4 py-2  relative z-10 hover:bg-gradient-to-r hover:from-violet-400 hover:via-purple-400 hover:to-fuchsia-400 hover:bg-clip-text hover:text-transparent transition-all duration-300">
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <header className="md:hidden flex flex-row items-center justify-between px-5 h-10">
        <div className="flex items-center justify-start z-10 hover:cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1"
          >
            <Zap className="h-4 w-4 text-violet-400 " />
            <h1 className="text-lg font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center gap-2">
              {title}
            </h1>
          </motion.div>
        </div>
        <button onClick={handleOpen}>
          <Menu className="text-violet-400" />
        </button>
      </header>{" "}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-screen w-64  shadow-lg z-50 p-5 flex flex-col backdrop-blur-sm bg-gray-900/80 border-l border-violet-400/20"
          >
            <div className="flex items-center justify-between mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1"
              >
                <Zap className="h-6 w-6 text-violet-400" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {title}
                </h1>
              </motion.div>
              <button
                onClick={handleClose}
                className="text-gray-300 hover:text-violet-400"
              >
                <X className=" text-violet-400" />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="flex flex-col items-center space-y-4">
                {NavItem.map((item, index) => (
                  <li
                    key={index}
                    className="text-base text-gray-300 hover:text-violet-400 transition-colors"
                  >
                    <a
                      href={item.href}
                      onClick={handleClose}
                      className="block py-2"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
