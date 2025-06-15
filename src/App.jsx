import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
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
    <Router>
      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/services" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
