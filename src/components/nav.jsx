import React from 'react';
import './nav.css';

const Nav = ({createClick,onselect}) => {
    const onCreate=()=>{
        createClick();
    }
    const onSelect =()=>{
        onselect()
    }
    return(
        <ul className="navtool">
            <li onClick={onSelect}>
                <img src="img/Toolbar_select.svg" alt="selector"  className="icon"/>
            </li>
            <li onClick={onCreate}>
            <img src="img/Bounding_Box_Create.svg" alt="boxCreate" className="icon" />
            </li>
        </ul>
    )
};
    

export default Nav;