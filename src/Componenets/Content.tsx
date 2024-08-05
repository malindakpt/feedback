import React from "react";
import ContentCSS from './Content.module.scss';

const Nav = () => {
    return (
        <div className="card">
            <p>Add your feedback here</p>
            <button className={ContentCSS.btn}>Submit</button>
        </div>
    )
}

export default Nav