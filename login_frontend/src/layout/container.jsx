import React from "react";

const Container = ({ children }) => {
    return (
        <div className="max-w-5xl min-h-screen mx-auto flex justify-center bg-blue-200">
            {children}
        </div>
    );
};

export default Container;
