import React from 'react';
import {Link} from "react-router-dom"

import {BsFacebook, BsTelegram, BsWhatsapp, BsYoutube} from 'react-icons/bs';
import {Navbar,MyBtn} from "../index"
import {AiOutlineMail} from "react-icons/ai";
import {BiPhone} from "react-icons/bi";



export  const  Header= (props)=> {

    return (

        <div className="header">
            <div className="info">
                <div className="logo">
                  <Link to="/">
                      <img src="../../assets/images/logo/DIAN.png"/>
                  </Link>
                </div>
                <div className="socials">
                    <div className="line"></div>
                    <MyBtn  type="Tlg"  icon={<BsTelegram/>}    bRadius="50"/>
                    <MyBtn  type="FB"  icon={<BsFacebook/>}    bRadius="50"/>
                    <MyBtn type="WA"   icon={<BsWhatsapp/> }   bRadius="50"/>
                    <MyBtn  type="YT"  icon={<BsYoutube/> }    bRadius="50"/>
                    <MyBtn  type="EM"  icon={<AiOutlineMail/>} bRadius="50"/>
                </div>

                <div className="catalog">
                    <div>
                        <Link to="/">

                            <span>02196642</span>
                            <span>
                                <BiPhone/>
                            </span>
                        </Link>
                    </div>
                    <MyBtn title="دریافت کاتالوگ" type="primary" bRadius="10"/>
                </div>

            </div>


            <div className="navbar">
                <Navbar/>
            </div>



        </div>
    );
}

