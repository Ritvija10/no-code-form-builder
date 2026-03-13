import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="home-container">

      <h1 className="home-title">
        Welcome to Free Form Builder
      </h1>

      <p className="home-description">
        Creating and managing forms is now stress-free.
      </p>
      <button
        className="register-btn"
        onClick={() => navigate("/register")}
      >
        Register
      </button>

      <div className="home-buttons">

        <button
          className="admin-btn"
          onClick={() => navigate("/admin-login")}
        >
          Sign in as Admin
        </button>

        <button
          className="user-btn"
          onClick={() => navigate("/user-login")}
        >
          Sign in as User
        </button>

      </div>

    </div>

  );

}

export default Home;