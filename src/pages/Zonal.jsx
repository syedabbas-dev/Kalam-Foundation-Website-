import "./Zonal.css";
import zonalBanner from "../assets/Zonal.png";

function Zonal() {
  return (
    <div className="zonal">

      {/* Banner */}

      <div
        className="zonal-banner"
        style={{
          backgroundImage: `url(${zonalBanner})`
        }}
      >
        <h1>ZONAL OFFICE</h1>
      </div>

      {/* Cards Section */}

      <div className="zonal-container">

        {/* South Zone */}

        <div className="zonal-card">
          <h3>
            South Zone:
            (Maharashtra, Karnataka, A.P,
            Tamilnadu, Kerala, Chhattisgarh)
          </h3>

          <p>
            01, Vidyanagar, Pimpari Khurd,
            Post. Kauthuli,
          </p>

          <p>
            Tal. Atpadi,
            Dist Sangli 415301
          </p>

          <p>
            <strong>
              Contact:
            </strong>
            {" "}
            Amol Kadam
            9767002958
          </p>
        </div>

        {/* North Zone */}

        <div className="zonal-card">
          <h3>
            North Zone:
            (Uttar Pradesh,
            Uttarakhand, Bihar)
          </h3>

          <p>
            HIG-67,
            Shashtripuram Colony,
          </p>

          <p>
            Rajendra Nagar East,
            PO Gorakhnath,
            Gorakhpur U.P. India.
          </p>

          <p>
            <strong>
              Contact:
            </strong>
            {" "}
            Ambar Bandopadhyay –
            965100073
          </p>
        </div>

        {/* West Zone */}

        <div className="zonal-card">
          <h3>
            West Zone:
            (Gujrat, Rajasthan)
          </h3>

          <p>
            D – 2,
            Parikrama Apartment,
            Near Bhavy Park BRTS,
            Bopal,
            Ahmadabad Gujrat
          </p>

          <p>
            <strong>
              Contact:
            </strong>
            {" "}
            Bhavdeep Nakum
            +91-9033959794
          </p>
        </div>

        {/* Eastern Zone */}

        <div className="zonal-card">
          <h3>
            Eastern Zone:
            (Jharkhand,
            West Bengal,
            Assam,
            North East,
            Odisa)
          </h3>

          <p>
            146B/1,
            Second Floor,
            South Sinthee Road,
            Kolkata – 700050
          </p>

          <p>
            <strong>
              Contact:
            </strong>
            {" "}
            Amar Joshi –
            7004723109
          </p>
        </div>

      </div>

    </div>
  );
}

export default Zonal;