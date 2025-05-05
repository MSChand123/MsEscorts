import React from "react";
import { useParams, Link } from "react-router-dom";
import collectionsData from "../data/DataCollection.json";

function CityDetails() {
  const { cityName } = useParams();

  const filteredGirls = collectionsData.filter(
    (item) => item.city === cityName
  );

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Girls in {cityName}</h2>
      <div className="row g-4">
        {filteredGirls.map((girl) => (
          <div className="col-12 col-sm-6 col-md-3" key={girl.id}>
            <Link
              to={`/escort/${girl.title}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100">
                <img
                  src={girl.image}
                  className="card-img-top"
                  alt={girl.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-footer bg-light text-center">
                  <span className="fw-medium">{girl.title}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {filteredGirls.length === 0 && <p>No girls found in this city.</p>}
      </div>
    </div>
  );
}

export default CityDetails;
