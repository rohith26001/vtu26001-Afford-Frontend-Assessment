import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1976d2",
        padding: "15px",
      }}
    >
      <h2 style={{ color: "white" }}>
        Campus Notifications System
      </h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/notifications"
          style={{
            color: "white",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          All Notifications
        </Link>

        <Link
          to="/priority"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Priority Inbox
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;