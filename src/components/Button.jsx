import "./Button.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="action-bar">
      <div className="action-container">

        <Link to="/donate" className="donate-btn">
          DONATE
        </Link>

        <Link to="/Joinform" className="join-btn">
          JOIN US
        </Link>

      </div>
    </div>
  );
}

export default Button;