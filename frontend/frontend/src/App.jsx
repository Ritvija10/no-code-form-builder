import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import Builder from "./pages/Builder"
import FillForm from "./pages/FillForm"
import Responses from "./pages/Responses"
import AdminRoute from "./components/AdminRoute";

function App() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin-login" element={<Login />} />
                <Route path="/user-login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <AdminRoute>
                            <Dashboard />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/builder/:id?"
                    element={
                        <AdminRoute>
                            <Builder />
                        </AdminRoute>
                    }
                />

                <Route
                    path="/responses/:id"
                    element={
                        <AdminRoute>
                            <Responses />
                        </AdminRoute>
                    }
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/builder/:id?" element={<Builder />} />
                <Route path="/forms" element={<FillForm />} />
                <Route path="/form/:id" element={<FillForm />} />
                <Route path="/responses/:id" element={<Responses />} />

            </Routes>

        </BrowserRouter>

    )

}

export default App;
