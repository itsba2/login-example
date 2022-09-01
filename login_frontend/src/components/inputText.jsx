import React from "react";
import { TextField } from "@mui/material";

const InputText = ({
    variant = "standard",
    type = "text",
    placeholder,
    label,
    isRequired,
    inputRef,
}) => {
    return (
        <div className="my-2">
            <TextField
                    variant={variant}
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    required={isRequired}
                    inputRef={inputRef}
                />
        </div>
    );
};

export default InputText;
