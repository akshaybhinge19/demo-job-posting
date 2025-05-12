import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import FooterSection from "./footer-section";
import NavHeader from "./nav-header";


interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  AOS.init({
    // duration: 1000,
    offset: 5,
    // once: true,
  });
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      {title && (
        <div className="bg-indigo-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">{title}</h1>
          </div>
        </div>
      )}
      <main className="flex-grow">{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;
