import React, { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Login from "./layout/login";
import Register from "./layout/register";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

axios.defaults.baseURL = process.env.BASE_URL || "http://localhost:3131";

function App() {
    const [loading, setLoading] = useState(false);

    return (
        <div className="App">
            <Container>
                <Routes>
                    <Route path="/login" element={<Login setLoading={setLoading} />} />
                    <Route path="/register" element={<Register setLoading={setLoading} />} />
                </Routes>
            </Container>
            {loading && <CircularProgress className="absolute top-1/2 left-1/2" />}
        </div>
    );
}

export default App;
