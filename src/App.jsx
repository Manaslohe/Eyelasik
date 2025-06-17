import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import Service1 from "./components/Service1";
import AppointmentModal from "./components/AppointmentModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Attach click handler to all buttons with the shared id
    function handleClick(e) {
      if (e.target.closest("#book-appointment-btn")) {
        setModalOpen(true);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-[#013A83]">
      <Router>
        <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/lasik-refractive-surgery" element={<Service1 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

