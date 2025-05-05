import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import collectionsData from "../data/DataCollection.json";

const DetailPage = () => {
  const { name } = useParams();

  const selectedItem = collectionsData.find((item) => item.title === name);

  if (!selectedItem) return <p className="p-5">Item not found.</p>;

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">
        MS High Profile Call Girls Photo - {selectedItem.name}
      </h2>
      <div className="row">
        {/* Left Column */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-sm">
            <h5 className="fw-bold">About {selectedItem.name}</h5>
            <p>
              Welcome to{" "}
              <span className="text-danger fw-semibold">
                MSEscorts call girls
              </span>
              . {selectedItem.description}
            </p>
            <p className="text-muted">
              <i className="bi bi-geo-alt-fill"></i> {selectedItem.city}
            </p>
            <p>
              Contact {selectedItem.name} to be given number for more
              information.
            </p>
            <img
              src={selectedItem.image}
              className="img-fluid rounded"
              alt={selectedItem.name}
              style={{
                maxHeight: "400px",
                objectFit: "contain",
                width: "100%",
              }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-4">
          <div className="card p-3 shadow-sm">
            <h5 className="fw-bold mb-3">Information of {selectedItem.name}</h5>
            <span className="badge bg-danger mb-3 px-3 py-2">Services</span>
            <div className="row">
              {selectedItem.services.map((service, idx) => (
                <div className="col-6 mb-2" key={idx}>
                  <li>{service}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
