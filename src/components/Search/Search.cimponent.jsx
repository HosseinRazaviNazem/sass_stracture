import React from 'react';
import {MyBtn} from "../Buttton/Button.component";
import {BsSearch} from "react-icons/bs";

export const  Search = (props)=> {
    return (

        <form action="/" method="get">
            <label htmlFor="header-search">
            </label>
            <fieldset className="searchbox">
                <input
                    type="text"
                    id="header-search"
                    placeholder="دنبال چه می گردید "
                    name="s"
                    className="search_input"
                />
                <MyBtn bRadius="10" type="primary" icon={<BsSearch/>}/>

            </fieldset>


        </form>


    );
}

