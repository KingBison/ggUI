import React from "react";
import "../../styles/misc/errorBanner.css"

const ErrorBanner = (props) => {

    return(<div className="error-banner">
        <div className="error-message">{props.errMsg}</div>
        <div className="error-close" onClick={()=>{
            props.setErrMsg(false)
        }}><div className="X1"/><div className="X2"/></div>
    </div>)
}

export default ErrorBanner;