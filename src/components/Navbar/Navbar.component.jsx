import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from 'data/dummy';
import { FiShoppingCart } from 'react-icons/fi';

const NavButton= ({title, customFunc, icon, color, dotColor})=>(
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            // className="relative text-xl rounded-full p-3 hover:bg-light-gray"
        >
      <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
            {icon}
        </button>


)

export  const  Navbar= (props)=> {
    const normalLink="normallink"
    return (

        <div className="nav">
            {/*<NavButton title="Cart" customFunc={() => {}} color="blue" icon={<FiShoppingCart />} />*/}
            {links.links.map((link) => (
                <NavLink
                    to={`/${link.name}`}
                    key={link.key}
                    onClick={()=>{}}
                    // style={({ isActive }) => ({
                    //     // backgroundColor: isActive ? currentColor : '',
                    // })}
                    // className={({ isActive }) => (isActive ? activeLink : normalLink)}
                >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>

                </NavLink>
            ))}

        </div>
    );
}

