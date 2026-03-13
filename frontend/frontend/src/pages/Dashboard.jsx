import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
function Dashboard() {

 const navigate = useNavigate();

  return (
    <div className="dashboard-container">

      <div className="dashboard-card">

        <h1>Admin Dashboard</h1>

        <div className="dashboard-buttons">

          <button
            className="create-btn"
            onClick={() => navigate("/builder")}
          >
            Create New Form
          </button>

          <button
            className="response-btn"
            onClick={() => navigate("/responses/1")}
          >
            View Responses
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;