import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                 <Link to="/" className="navbar-logo">
                     FOODIES <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                 </Link>
                 <div className='menu-icon' onClick ={handleClick}S>
                     <i className={click ? 'fas fa-times' :'fas fa-bars'} />
                 </div>
                </div>  
            </nav>
        </>
    )
}

export default Navbar;
