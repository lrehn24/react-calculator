import React, {useState, useRef} from 'react';
import menu from '../../assets/menu.png';
import './Menu.css';

const Menu = () => {
    const dropRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const menuClick = () => setIsActive(!isActive);

    return (
        <div className="menuCont">
            <img onClick={menuClick} className="menuDrop" src={menu} alt="menu" width="40px" />
            <div className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li>History</li>
                    <li>Themes</li>
                    <li>Calculator</li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;