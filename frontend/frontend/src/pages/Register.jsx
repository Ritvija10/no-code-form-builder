import { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password,
                role
            });

            alert("Registered successfully");
            navigate("/");

        } catch (err) {

            alert("Registration failed");

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h2>Register</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <select
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

                    <button type="submit">
                        Register
                    </button>

                </form>

            </div>

        </div>
    );

}

export default Register;