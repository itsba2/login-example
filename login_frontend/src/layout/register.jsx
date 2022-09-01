import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputText from "./../components/inputText";
import CustomButton from "./../components/customButton";
import CustomHeader from "../components/customHeader";
import CustomAlert from "../components/customAlert";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const Register = ({ setLoading }) => {
    const navigate = useNavigate();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState({
        username: null,
        message: null,
        status: null,
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        try {
            setAlert(false);
            setLoading(true);
            const response = await axios({
                method: 'post',
                url: '/user/register',
                data: newUser,
            });
            setAlertContent({
                username: response.data.username || null,
                message: response.data.message || null,
                status: response.status,
            });
            setAlert(true);
            setLoading(false);
            e.target.reset();
        } catch (error) {
            setAlert(true);
            setLoading(false);
            e.target.reset();
            console.error("Error handling register", error);
        }
        if (alertContent.status < 300) {
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <CustomHeader headerText={"Register"} />

            <div className="flex flex-col justify-center">
                <InputText
                    label="Username"
                    isRequired={true}
                    inputRef={usernameRef}
                />
                <InputText
                    label="Password"
                    type="password"
                    isRequired={true}
                    inputRef={passwordRef}
                />
                <div className="flex justify-evenly mx-auto">
                    <CustomButton
                        buttonText={"Already Registered?"}
                        linkTo={"/login"}
                    />
                    <CustomButton
                        buttonText={"Register"}
                        icon={<AppRegistrationIcon />}
                    />
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

export default Register;
