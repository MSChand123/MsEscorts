import React from "react";

function AboutUs() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">About Us</h2>
      <div className="card h-100">
        <img
          src="/assets/banner1.jpg"
          className="card-img-top"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "fill",
          }}
        />
      </div>
      <div className="py-3">
        <p>
          MSEscorts is committed to providing a platform for genuine
          companionship across India. We prioritize privacy, comfort, and
          respectful engagement, ensuring each connection is authentic and
          meaningful. Whether you're looking for friendly conversation, a good
          time, or a companion to unwind with — we are here to connect you with
          the right match.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
