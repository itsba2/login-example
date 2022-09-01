import React from "react";
import { Typography } from "@mui/material";

const CustomHeader = ({ headerText, variant = "h3" }) => {
    return (
        <div>
            <Typography variant={variant} gutterBottom>
                {headerText}
            </Typography>
        </div>
    );
};

export default CustomHeader;
