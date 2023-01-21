import React from "react";
import PropTypes from "prop-types";

 export const MyBtn= ({title, customFunc, icon, color, dotColor ,type ,size, Ttitle,Tpos ,bRadius})=> (
   // <TooltipComponent content={Ttitle} position={Tpos}>

    <button
        type="button"
        onClick={() => customFunc()}
        style={{color}}
        className={`btn btn--${type} btn--${size} btn--br-${bRadius} `}>
            <span
                style={{background: dotColor}}
                 className=""
                >
                {title}{icon}</span>

    </button>
        // {/*<TooltipComponent />*/}

)
MyBtn.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', "info", "warning" ,"FB" ,"YT" , "WA" , "EM","Tlg"]).isRequired,


    customFunc: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    bRadius: PropTypes.oneOf(['0','15', '25','30', '45', '50', "100"]).isRequired,
};


