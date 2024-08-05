import React from "react";
import HeaderCSS from './Header.module.scss';

const Header = () => {
    return (
        <header className="card">
            <h1>Feedback System</h1>
            <button className={HeaderCSS.btn}>Add</button>
        </header>
    )
}

export default Header