import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useLocation } from "react-router-dom";


function Login() {
    const location = useLocation();

    const isAdmin = location.pathname === "/admin-login";

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password
                }
            );

            const { token, role } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            if (role === "admin") {
                navigate("/dashboard");
            } else {
                navigate("/forms");
            }

        } catch (error) {

            alert("Invalid email or password");

        }

    };

    return (

        <div className="login-container">

            {/* <h2 className="login-title">Login</h2> */}
             <h2>{isAdmin ? "Admin Login" : "User Login"}</h2>
            <form onSubmit={handleSubmit} className="login-form">

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );

}

export default Login;