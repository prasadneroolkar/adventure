import React from 'react'
import { NavLink } from 'react-router-dom'

function Buttons(props) {
    return (
        <>
         <NavLink exact to={props.btnref} className={props.btnclassName}>{props.btntext}</NavLink>
            
        </>
    )
}

export default Buttons
