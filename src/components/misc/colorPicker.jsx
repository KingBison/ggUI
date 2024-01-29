import React from "react";
import "../../styles/misc/colorPicker.css"

const ColorPicker = (props) => {

    const colors = [
        "white",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "black"
      ];

    let colorSelected = props.color
    let setColor = props.setColor;

    return(<div className="color-picker">
        {colors.map((color, i)=>{
            return(<div
                key={i}
                style={{backgroundColor: color}}
                className= {(colorSelected === color) ? "selected" : "not-selected"}
                onClick={()=>{setColor(color)}}
            />)
        })}
    </div>)
}

export default ColorPicker;