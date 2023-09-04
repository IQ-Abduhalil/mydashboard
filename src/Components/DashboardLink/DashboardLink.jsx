import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

function DashboardLink({ imgLink, imgTitle, pageName, navlink }) {
    // console.log(imgLink, imgTitle, pageName, navlink)
    return (
        <li className="Preferences_Item">
            <NavLink to={navlink} className={({ isActive }) => `headerLink ${isActive ? 'isActivedStyle' : ''} `}>
                <img className='' src={imgLink} alt={imgTitle} />
                <span className="Dashboard_Navlink_Item_Text">{pageName}
                </span>
            </NavLink>
        </li>
    )
}

export default memo(DashboardLink)