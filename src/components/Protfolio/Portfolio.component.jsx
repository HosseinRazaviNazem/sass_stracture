import React from 'react';
import {MyBtn} from "../Buttton/Button.component";
import PropTypes from "prop-types";

export const  Portfolio = ({mainTitle , btnTitle ,})=> {
    return (
        <div className="deck">
            <div className="card hovercard">
                <div className="front face">
                    <h2>{mainTitle}</h2>
                    <div className="bottext">
                        <MyBtn bRadius="10" type="primary" title={btnTitle}/>
                    </div>
                </div>
                <div className="back face">
                    <h2>Basic</h2>
                    <ul>
                        <li>6 Sider</li>
                        <li>Kontaktside</li>
                        <li>SEO optimeret</li>
                        <li>Mobilvenlig</li>
                    </ul>
                    <div className="botprice">
                       <MyBtn bRadius="10" type="primary" title="بیشتر بدانید"/>
                    </div>
                </div>
            </div>
        </div>
    );
    Portfolio.propTypes = {
        mainTitle: PropTypes.string.isRequired,
        btnTitle: PropTypes.string.isRequired,


    };
}

