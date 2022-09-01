import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
    buttonText,
    linkTo = "",
    variant = "contained",
    isDisabled = false,
    icon,
}) => {
    return (
        <div className="mx-2 my-4">
            {linkTo ? (
                <Button
                    variant={variant}
                    href={linkTo}
                    disabled={isDisabled}
                    startIcon={icon}
                >
                    {buttonText}
                </Button>
            ) : (
                <Button
                type="submit"
                    variant={variant}
                    disabled={isDisabled}
                    startIcon={icon}

                >
                    {buttonText}
                </Button>
            )}
        </div>
    );
};

export default CustomButton;
