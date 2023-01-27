import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("userId")) sessionStorage.removeItem("userId");
        navigate("/login");
    }, [navigate])

    return <></>
}

export default Logout