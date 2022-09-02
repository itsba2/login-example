import React from "react";
import { TextField } from "@mui/material";

const InputText = ({
    variant = "standard",
    type = "text",
    placeholder,
    label,
    isRequired,
    inputRef,
    name,
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
                    name={name}
                />
        </div>
    );
};

export default InputText;
