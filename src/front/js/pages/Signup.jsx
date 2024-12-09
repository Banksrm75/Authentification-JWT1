// this page will accept the user's email and password
// create a signup action in flux with a POST metnod


import React, { useState, useContext } from "react";
import {Context} from '../store/appContext'

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { store, actions } = useContext(Context);

    const handleClick = () => {
        actions.signup(email, password)
    }
    
    return (
        <>
            <div className="signup">
                <div>
                    <h1 className="heading">Signup</h1>
                </div>
            </div>
            <div>
                    
                <input 
                type="text"
                placeholder='email'
                value={email}
                onChange={e => setEmail(e.target.value)} 
                />
                    
                    
                <input 
                    type="password"
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />
                    
                <div>
                    <button onClick={handleClick}>
                        Login
                        </button>
                </div>
            </div>
        </>
    );
}

export default Signup