import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    OTTERPEDIA <FontAwesomeIcon icon="otter" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon className='whiteIcons' icon={click ? "times" : "bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/whatareotters' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                What Are Otters?
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/funfacts' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Fun Facts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/otterpedia' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Otterpedia Creator
                            </Link>
                        </li>
                        <li>
                            <Link to='/whatareotters' 
                            className='nav-links-mobile' 
                            onClick={closeMobileMenu}>
                                ABOUT OTTERS
                            </Link>
                        </li>
                    </ul>
                    {button && <Button path='/whatareotters' buttonStyle='btn--outline'>ABOUT OTTERS</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar