import React,{useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import {useNavigate} from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const {setLoggedInUser} = useContext(UserContext);
    setLoggedInUser(null);
    return navigate("/login");
}

export default Logout