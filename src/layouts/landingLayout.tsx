import Footer from "../components/footer";
import Header from "../components/header";

interface LandingLayoutProps {
  children: React.ReactNode;
}
const NavItem = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Education", href: "#education" },
  { title: "Skill", href: "#skills" },
  { title: "Project", href: "#projects" },
];

const landingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <div>
      <Header title="PORTFOLIO" NavItem={NavItem} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default landingLayout;
