import React from "react";
import { Alert } from "@mui/material";

const CustomAlert = ({ severity, alertText }) => {
    return (
        <div>
            <Alert
                severity={severity}
                style={{ display: "flex", justifyContent: "center" }}
            >
                {alertText}
            </Alert>
        </div>
    );
};

export default CustomAlert;
