import { Database, Layout, Smartphone, Star, Terminal } from "lucide-react";

export const skillData = [
  { category: "Backend", id: "java", title: "Java", percent: 60 },
  { category: "Mobile", id: "flutter", title: "Flutter", percent: 50 },
  { category: "Backend", id: "php", title: "PHP", percent: 65 },
  { category: "Backend", id: "laravel", title: "Laravel", percent: 60 },
  { category: "Backend", id: "javascript", title: "Javascript", percent: 55 },
  {
    category: "Frontend",
    id: "reactTypeScript",
    title: "React TypeScript",
    percent: 70,
  },
  {
    category: "Frontend",
    id: "reactJavaScript",
    title: "React JavaScript",
    percent: 70,
  },
  { category: "Database", id: "mysql", title: "MySql", percent: 75 },
  { category: "Frontend", id: "html", title: "HTML", percent: 79 },
  { category: "Frontend", id: "css", title: "CSS", percent: 78 },
  { category: "Backend", id: "python", title: "Python", percent: 10 },
];

export const buttonData = [
  { icon: Star, title: "All Skills", id: "All" },
  { icon: Layout, title: "Frontend", id: "Frontend" },
  { icon: Terminal, title: "Backend", id: "Backend" },
  { icon: Database, title: "Database", id: "Database" },
  { icon: Smartphone, title: "Mobile", id: "Mobile" },
];
