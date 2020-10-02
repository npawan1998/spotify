import React from 'react';
import "./SidebarOptions.css";

function SidebarOptions({ title, Icon }) {
    return (
        <div className = "sidebarOptions">
        {Icon && <Icon className = "sidebarOptions__icon" />} { /*if there is a icon then render this*/}

        {Icon ?(<h4>{title}</h4>):<p>{title}</p>} {/*if there is a icon then makes the text to h4 */}
        {/*<p>{title}</p>*/}
            
        </div>
    )
}

export default SidebarOptions
