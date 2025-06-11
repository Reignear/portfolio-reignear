import { Calendar, Code, Cpu, MapPin, User, Zap } from "lucide-react";

import image1 from "/image1.jpg";
import image2 from "/image2.jpg";
import image3 from "/image3.jpg";
import image4 from "/image4.jpg";

export const imagesArray = [image1, image2, image3, image4];
export const projectData = [
  { icon: Code, number: 15, desciption: "Total Projects" },
  { icon: Cpu, number: 8, desciption: "Languages Learned" },
  { icon: Zap, number: 500, desciption: "Hours of Coding" },
];
export const matrixData = [
  { icon: User, title: "Full Name", value: "Reignear Berador Magallanes" },
  { icon: Calendar, title: "Date of Birth", value: "June 3, 2003" },
  {
    icon: MapPin,
    title: "Location",
    value: "Jerome R. Castillo, Davao City, Philippines",
  },
];
