import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavIcon extends Component{
    state = {
        openClass: false,
    }
    toggleClass = () => {
        this.setState({openClass: !this.state.openClass});
    }
    render(){ 
        let mySidenavWidth = "noWidth";
        if(this.state.openClass){
            mySidenavWidth = "fullWidth";
        }
        const menuIcon = <div id="nav-icon1" onClick={this.toggleClass} className={this.state.openClass ? 'open' : ''}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        return (
            <div className="navbar navbar-custom">
                <div className="nav-container">
                    <div className="nav-name-link" hidden={this.props.dontShowHomeIcon ? true : false}>
                        <Link to='/app'>Mahipal Reddy</Link>
                    </div>

                    <div id="mySidenav" className={`sidenav + ${mySidenavWidth}`}>
                        <div className="navbar navbar-custom">
                            <div className="nav-container">
                                <a id='menu-btn'>{menuIcon}</a>
                            </div>
                        </div>
                        <div className="menu-items">
                            <Link className="menu-item" to="/about">What I do</Link>
                            <Link className="menu-item" to="/about">About</Link>
                            <Link className="menu-item" to="/skills">Skills</Link>
                            <Link className="menu-item" to="/work">Work</Link>
                            <Link className="menu-item" to="/contact">Say Hello</Link>
                        </div>
                    </div>
                    <a id="menu-btn">{menuIcon}</a>
                </div>
            </div>
    );
}
};

export default NavIcon;