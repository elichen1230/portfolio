import React, { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Fetch the current visitor count from the backend
    axios
      .get("http://localhost:5000/api/visitor-count")
      .then((response) => {
        setVisitorCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error fetching visitor count:", error);
      });

    // Increment the visitor count
    axios
      .post("http://localhost:5000/api/increment-visitor-count")
      .then((response) => {
        setVisitorCount(response.data.count);
      })
      .catch((error) => {
        console.error("Error incrementing visitor count:", error);
      });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Designed & Built by <span className="designer-name">Eli Chen</span>
        </p>
      </div>
      <div>
        {/* <p className="visitor-count">👀 : {visitorCount.toLocaleString()}</p> */}
      </div>
    </footer>
  );
}

export default Footer;
