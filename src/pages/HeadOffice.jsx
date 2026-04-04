import "./HeadOffice.css";
import map from "../assets/map.png";

function HeadOffice() {
  return (
    <div className="headOffice">

      {/* Banner Section */}

      <div className="office-banner">
        <h1>HEAD OFFICE</h1>
      </div>

      {/* Content Section */}

      <div className="office-container">

        <div className="office-left">

          <h2>Head Office</h2>

          <p>
            Plot No. 26, Jain Road, Mohan Garden,
            Dwarka Mod, New Delhi, 110059
          </p>

          <p>
            <strong>Contact No.</strong>
            {" "}
            9651000733 / 7860054413 / 9958183137
          </p>

          <p>
            <strong>Email:</strong>
            {" "}
            Info@kalamfoundation.org
          </p>

          <br />

          <h2>Registered Office</h2>

          <p>
            Basdila Rausar, PO Hemdhapur,
            District Gorakhpur,
            Uttar Pradesh, 273152
          </p>

        </div>

        {/* Map Section */}

   

        </div>

      </div>
  );
}

export default HeadOffice;