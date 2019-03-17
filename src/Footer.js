import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-container">
                <nav className="navbar navbar-light bg-faded">
                    <a className="navbar-brand text-danger font-weight-bold" href="/">Neflix</a>
                    <p className="text-muted lead" href="#">©2018. All Rights Reserved by Chiu.</p>
                    <a className="navbar-brand text-muted" href="https://github.com/cauegonzalez/netflix-clone-react">github</a>
                </nav>
            </footer>
        );
    }
}

export default Footer;
