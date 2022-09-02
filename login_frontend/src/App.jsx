import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./layout/login";
import Register from "./layout/register";
import TopBar from "./layout/topbar";

import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.css";

axios.defaults.baseURL = process.env.BASE_URL || "http://localhost:3131";

function App() {
    const [loading, setLoading] = useState(false);
    const localStorage = window.localStorage;

    return (
        <div className="App">
            <TopBar />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/login" />} />
                    <Route
                        exact
                        path="/login"
                        element={<Login setLoading={setLoading} localStorage={localStorage} />}
                    />
                    <Route
                        exact
                        path="/register"
                        element={<Register setLoading={setLoading} />}
                    />
                </Routes>
            </Container>
            {loading && (
                <CircularProgress className="absolute top-1/2 left-1/2" />
            )}
        </div>
    );
}

export default App;
