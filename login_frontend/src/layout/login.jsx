import React, { useRef, useState } from "react";
import axios from "axios";

import LoginIcon from "@mui/icons-material/Login";

import InputText from "./../components/inputText";
import CustomButton from "./../components/customButton";
import CustomHeader from "../components/customHeader";
import CustomAlert from "../components/customAlert";

const Login = ({ setLoading, localStorage }) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState({
        username: null,
        message: null,
        status: null,
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        try {
            setAlert(false);
            setLoading(true);
            const response = await axios({
                method: "post",
                url: "/user/login",
                data: user,
                withCredentials: true,
            });
            localStorage.setItem('user', response.data.username);
            localStorage.setItem('user_id', response.data._id);
            setAlertContent({
                username: response.data.username,
                message: response.data.message,
                status: response.status,
            });
            setAlert(true);
            setLoading(false);
            e.target.reset();
        } catch (error) {
            setAlertContent({
                message: error.response.data,
                status: error.response.status,
            });
            setAlert(true);
            setLoading(false);
            e.target.reset();
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <CustomHeader headerText={"Login"} />
            <div className="flex flex-col justify-center">
                <InputText
                    label="Username"
                    name="username"
                    isRequired={true}
                    inputRef={usernameRef}
                />
                <InputText
                    label="Password"
                    name="password"
                    type="password"
                    isRequired={true}
                    inputRef={passwordRef}
                />
                <div className="flex justify-evenly mx-auto">
                    <CustomButton
                        buttonText={"Not Registered Yet?"}
                        linkTo={"/register"}
                    />
                    <CustomButton buttonText={"Login"} icon={<LoginIcon />} />
                </div>
                {alert && alertContent.status < 300 ? (
                    <CustomAlert
                        severity={"success"}
                        alertText={`${alertContent.message} Welcome ${alertContent.username}!`}
                    ></CustomAlert>
                ) : alert && alertContent.status > 300 ? (
                    <CustomAlert
                        severity={"error"}
                        alertText={alertContent.message}
                    ></CustomAlert>
                ) : (
                    ""
                )}
            </div>
        </form>
    );
};

export default Login;
