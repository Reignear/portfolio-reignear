import { Heart, Zap } from "lucide-react";
import { footerNav, socialLinks, stack } from "../data/footerData";
const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full md:my-20">
      <div className="w-full flex flex-col items-start justify-center">
        <div className="lg:w-4/5 mx-auto md:grid md:grid-cols-3  flex flex-col w-3/4  gap-5">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center gap-2">
              <Zap className="h-6 w-6 text-violet-400 " />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center gap-2">
                Reignear Magallanes
              </h1>
            </div>
            <p className="text-gray-400 my-5 text-sm">
              Crafting digital experiences with cutting-edge technology.
              Passionate about creating innovative solutions that make a
              difference.
            </p>
            <div className="flex flex-row items-center gap-2">
              <Heart className="h-5 w-5 text-red-400" />
              <p className="text-violet-400 text-sm">
                Made with passion and lots of coffee
              </p>
            </div>
          </div>
          <div className="flex  flex-col items-start justify-start">
            <h1 className="text-white text-base font-bold">Quick Navigation</h1>
            <div className="flex justify-start md:flex-col flex-row gap-2 md:gap-1 my-4">
              {footerNav.map((button) => (
                <button className="text-start text-gray-400 hover:text-violet-400 text-sm">
                  <a href={button.href}>{button.title}</a>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-white  font-bold">Connect with me:</h1>
            <div className="flex flex-row gap-2 my-5 text-sm">
              {socialLinks.map((link) => (
                <button className="h-12 w-12 rounded-lg border-violet-400/20 border flex items-center justify-center hover:cursor-pointer hover:bg-violet-400/20 transition-all duration-300">
                  <a href={link.href}>
                    <link.icon className="h-5 w-5 text-violet-400" />
                  </a>
                </button>
              ))}
            </div>
            <div className="grid grid-rows-3 text-sm">
              <div className="flex flex-row items-center gap-2">
                📧{" "}
                <h1 className="text-gray-400">
                  r.magallanes.539525@umindanao.edu.ph
                </h1>
              </div>
              <div className="flex flex-row items-center gap-2">
                📱 <h1 className="text-gray-400">(+63) 907 528 8220</h1>
              </div>
              <div className="flex flex-row items-center gap-2">
                📍{" "}
                <h1 className="text-gray-400">
                  Jerome, R Castillo, Davao City, Davao Del Sur, Philippines
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent md:mb-8 mt-4" />
        <div className=" w-3/4 lg:w-4/5 mx-auto flex flex-col md:flex-row items-start justify-between md:my-10 my-5 gap-5 ">
          <div>
            <p className="text-gray-400 text-sm">
              {"\u00A9"}
              {currentYear} Reignear Magallanes. All rights reserved.
            </p>
          </div>
          <div className="flex items-start md:flex-row flex-col gap-2">
            <p className="text-gray-400 text-sm">Built with: </p>
            <div className="md:flex md:flex-row md:items-center gap-2 grid grid-cols-3">
              {stack.map((item) => (
                <h1 className="text-sm font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent flex items-center gap-2">
                  {item} {"\u2022"}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
