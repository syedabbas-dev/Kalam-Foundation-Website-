import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Button from "./components/Button";
import SecondNavbar from "./components/SecondNavbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Work from "./components/Work";
import About from "./components/About";
import People from "./components/People";
import Footer from "./components/Footer";

import WebMail from "./pages/WebMail";
import HeadOffice from "./pages/HeadOffice";
import Zonal from "./pages/Zonal";
import AboutUs from "./pages/AboutUs";
import Donate from "./pages/Donate";
import DonateForm from "./pages/DonateForm";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Button />
              <SecondNavbar />
              <Hero />
              <ProjectCard />
              <Work />
              <About />
              <People />
              <Footer />
            </>
          }
        />

        {/* OTHER PAGES */}

        <Route path="/webMail" element={<WebMail />} />

        <Route path="/headOffice" element={<HeadOffice />} />

        <Route path="/zonal" element={<Zonal />} />

        <Route path="/aboutUs" element={<AboutUs />} />

        <Route path="/donate" element={<Donate />} />

        <Route path="/donateForm" element={<DonateForm />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;