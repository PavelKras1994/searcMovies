import React from 'react';

import './Navigation.scss';
import { NavLink } from 'react-router-dom';

const links = [
    {
        url:"/",
        title:"Home",
        exact: true
    },
    // {
    //     url:"/favorite",
    //     title:"Favourite",
    // },
    // {
    //     url:"/logout",
    //     title:"Logout",
    // }
]
const Navigation = () => (
    <div className="navigation">
        <ul className="navigation__list">
        {
        links.map(({ url, title, exact }) => (
            <li className="navigation__list-item" key={url}>
            <NavLink
            to={url}
            exact={exact}
            className="navigation__link" 
            activeClassName="navigation__link_active"
            >
                {title}
            </NavLink> 
        </li>
        ))}
        </ul>
        
    </div>
);

export default Navigation;
