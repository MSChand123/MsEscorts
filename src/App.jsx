import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Home from "./componants/Home.jsx";
import AboutsUs from "./componants/AboutUs.jsx";
import DetailPage from "./componants/DetailPage.jsx";
import CityDetails from "./componants/CityDetails.jsx";

function App() {
  const phoneNumber = "+917300035528";
  const whatsappNumber = "+917300035528";

  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            MSEscorts
          </Link>
          <div>
            <Link className="nav-link d-inline me-3" to="/">
              Home
            </Link>
            <Link className="nav-link d-inline" to="/about">
              About Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutsUs />} />
        <Route path="/escort/:name" element={<DetailPage />} />
        <Route path="/city/:cityName" element={<CityDetails />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-white text-center py-3 shadow-sm mt-5">
        <p className="text-muted mb-0">
          &copy; 2025 MSEscorts. All rights reserved.
        </p>
      </footer>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="btn btn-primary position-fixed bottom-0 start-0 m-3 rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: "60px", height: "60px", fontSize: "30px" }}
      >
        <FaPhone />
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        className="btn btn-success position-fixed bottom-0 end-0 m-3 rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: "60px", height: "60px", fontSize: "30px" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </Router>
  );
}

export default App;
