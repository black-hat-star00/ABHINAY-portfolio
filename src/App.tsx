import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar, Tech, Works, Certificates, StarsCanvas, SparkleCursor } from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <StarsCanvas />
        <SparkleCursor />
        <div className="bg-hero-pattern hero-bg relative bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
          <div className="hero-bottom-fade pointer-events-none absolute inset-x-0 bottom-0 h-40" />
        </div>
        <About />
        <Tech />
        <Works />
        <Certificates />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
