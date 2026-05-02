import "./Location.css";

export default function Location() {

  const handleDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=11.3354961,77.7230103",
      "_blank"
    );
  };

  return (
    <section className="location-section">
      <div className="location-container">
        
        {/* Left Side */}
        <div className="location-content">
          <span className="location-tag">
            Visit Our Studio
          </span>

          <h2>Location</h2>

          <div className="address-box">
            <h3 className="brand-name">
              RK Studio
            </h3>

            <p className="address-details">
              Thirunagar Colony, <br />
              Tamil Nadu, India
            </p>
          </div>

          <button
            className="directions-btn"
            onClick={handleDirections}
          >
            Get Directions
          </button>
        </div>

        {/* Right Side Map */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps?q=11.3354961,77.7230103&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RK Studio Location"
          ></iframe>

          <div className="map-border-decoration"></div>
        </div>

      </div>
    </section>
  );
}