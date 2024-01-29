import React, { useState } from "react";
import "../styles/login.css"
import ColorPicker from "./misc/colorPicker";

const Login = (props) => {

    const [name, setName] = useState("")
    const [color, setColor] = useState("")

    return(<div className="login">
        <div className="login-panel">
            <div className="login-message">Welcome to Gray Gaming!<br/> Enter your name and your favorite color to begin</div>
            <input
                className="login-name"
                type="text"
                onChange={(e) => {setName(e.target.value)}}
                value={name}
            ></input>
            <div className="login-color-picker"><ColorPicker color={color} setColor={setColor}/></div>
            <div 
                className="login-submit"
                onClick={()=>{
                    props.setLoggedIn("true");
                    props.setName(name);
                    props.setColor(color);
                }}
            >Enter</div>
        </div>
    </div>)
}

export default Login;