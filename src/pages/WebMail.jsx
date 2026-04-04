import "./WebMail.css";

function WebMail() {
  return (
    <div className="webMail-container">

      <div className="webMail-box">

        <h1 className="webMail-title">
          WebMail
        </h1>

        <form className="webMail-form">

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email address."
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your email password."
          />

          <button type="submit">
            Log in
          </button>

        </form>

        <div className="languages">

          <span>English</span>
          <span>العربية</span>
          <span>čeština</span>
          <span>dansk</span>
          <span>Deutsch</span>
          <span>Ελληνικά</span>
          <span>español</span>
          <span>español latinoamericano</span>

        </div>

        <div className="copyright">

          <p>Copyright © 2026 cPanel, L.L.C.</p>

          <p className="privacy">
            Privacy Policy
          </p>

        </div>

      </div>

    </div>
  );
}

export default WebMail;