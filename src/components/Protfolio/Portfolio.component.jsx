import React from 'react';

 export const  Portfolio = (props)=> {
    return (
        <div className="deck">
            <div className="card hovercard">
                <div className="front face">
                    <h2>Hover</h2>
                    <div className="bottext">
                        <h3>6000kr</h3>
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
                        <h3>6000kr</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

