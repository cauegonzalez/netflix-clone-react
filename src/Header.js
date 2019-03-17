import React, { Component } from 'react';
import logoNetflix from './logoNetflix.png';

class Header extends Component {
    render() {
        const logoStyle = {
            width: '110px', 
            height: '30px'
        }
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <a className="logo navItem active" aria-current="page" href="#/">
                                <img style={logoStyle} src={logoNetflix} alt="img" />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <input className="searchInput" type="text" placeholder="movie title..." value="" />
                            <span className="navItem search-icon "><i className="fas fa-search"></i></span>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
