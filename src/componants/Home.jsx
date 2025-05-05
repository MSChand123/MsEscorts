import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import collectionsData from "../data/DataCollection.json";
import categoriesData from "../data/CategoryCollection.json";

function Home() {
  const cityCountMap = collectionsData.reduce((acc, item) => {
    acc[item.city] = (acc[item.city] || 0) + 1;
    return acc;
  }, {});

  const citiesData = Object.entries(cityCountMap).map(
    ([name, items], index) => ({
      id: index + 1,
      name,
      items,
    })
  );

  return (
    <div className="bg-light min-vh-100 position-relative">
      {/*Summery */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Introduction</h2>
        <div>
          <p>
            Looking for meaningful companionship, genuine connections, or
            someone to simply share quality time with? Our platform brings
            together individuals from across India who value authenticity,
            comfort, and respectful interaction. Whether you're in Mumbai,
            Delhi, Bangalore, or any corner of the country, we help you connect
            with like-minded companions who are friendly, understanding, and
            truly engaging. With a focus on privacy, professionalism, and
            personalized experiences, our service is designed to make every
            interaction memorable. Discover a new way to connect — where
            conversations matter and companionship feels natural.
          </p>
        </div>
      </section>

      {/* Top Collections */}
      <section className="container py-1">
        <h2 className="fw-bold mb-4">Top Collections:</h2>
        <div className="row g-4">
          {collectionsData.map((collection) => (
            <div className="col-12 col-sm-6 col-md-3" key={collection.id}>
              <Link
                to={`/escort/${collection.title}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100">
                  <img
                    src={collection.image}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "contain",
                    }}
                    alt={`Collection ${collection.title}`}
                  />
                  <div className="card-footer bg-light text-center">
                    <span className="fw-medium">{collection.title}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Categories</h2>
        <div className="d-flex overflow-auto gap-3">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="card flex-shrink-0 text-center"
              style={{ width: "180px" }}
            >
              <img
                src={category.image}
                className="card-img-top"
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
                alt={`Category ${category.name}`}
              />
              <div className="card-body p-2">
                <p className="card-title fw-semibold mb-0">{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cities with Background Images */}
      <section className="container py-5">
        <h2 className="fw-bold mb-4">Cities</h2>
        <div className="row g-3">
          {citiesData.map((city) => (
            <div className="col-12 col-sm-6 col-md-4" key={city.id}>
              <Link
                to={`/city/${encodeURIComponent(city.name)}`}
                className="text-decoration-none text-dark"
              >
                <div className="card p-2 shadow-sm">
                  <div className="card-body" style={{ color: "black" }}>
                    <h5 className="fw-semibold">
                      {city.name} : {city.items}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
