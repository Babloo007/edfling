import React from "react";
import { useState } from "react";

import "./signup.css";
import logoImg from '../../images/Frame 1000004410.png';

import { API } from "../../../service/api";


function Signup(){

    const signupInitialValues = {
        name:"",
        username:"",
        email: "",
        password:""
    }

    const [account, setAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');

    function onInputChange(event) {
        setSignup({ ...signup, [event.target.name]: event.target.value });
        console.log(event.target.value);
    }
    
    function toggleSignup(){
        if(account==='signup'){
            setAccount('login');
        }
        else if(account==='login'){
            setAccount('signup');
        }
    }


    const signupUser = async() => {
        // console.log("Success");
        let response = await API.userSignup(signup);
        if (response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleSignup('login');
        }
        else{
            setError('Something went wrong! Please try again later');
        }
    }

    return (
            <div className="loginContainer">
                <img className="logo-img" src={logoImg} alt="Edfling" />
                {
                    account==='signup' ?
                    <>
                        <input type="text" onChange={(event) => onInputChange(event)} name="name"  placeholder="Name" autoComplete="off" required />
                        <input type="text" onChange={(event) => onInputChange(event)} name="username"  placeholder="Username" autoComplete="off" required />
                        <input type="email" onChange={(event) => onInputChange(event)} name="email"  placeholder="Email" autoComplete="off" required />
                        <input type="password" onChange={(event) => onInputChange(event)} name="password"  placeholder="Password" autoComplete="off" required />
                        <button className="signup-btn" type="submit" onClick={signupUser}>Sign Up</button>
                        { error && <p style={{color: 'red'}}>{error}</p> }
                        <h3 className="or">OR</h3>
                        <button className="toggle-btn" type="button" onClick={()=>toggleSignup()}>Already have an account!</button>
                    </>
                    :
                    <>
                        <input type="text" placeholder="Username" required />
                        <input type="password" placeholder="Password" required />
                        <button className="signup-btn" type="submit">Log In</button>
                        <h3 className="or">OR</h3>
                        <button className="toggle-btn" type="button" onClick={()=>toggleSignup()}>Create an account!</button>
                    </>
                }
            </div>
    )
}

export default Signup; 