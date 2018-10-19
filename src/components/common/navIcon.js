import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavIcon extends Component{
    state = {
        isHidden: true,
        addClass1: false,
        addClass2: false
    }
    
    toggleClass = () => {
        this.setState(state => {
            return {isHidden: !state.isHidden}
        });
    }
    
    addClassNames = () => {
        this.setState(state => {
            return { addClass1: !state.addClass1 }
        });
        setTimeout(() => {
            this.setState(state => {
                return { addClass2: !state.addClass2 }
            });
        }, 500);
        this.toggleClass();
    }

    render(){ 
        const burgerIcon = 
            (   <div onClick={this.addClassNames} className={this.state.addClass1 ? (this.state.addClass2 ? 'burger state-1 state-2' : 'burger state-1') : 'burger'}>
                    <i></i>
                    <i></i>
                    <i></i>
                </div> )

        return (
            <div>
            <header id="page-header" className={this.state.isHidden ? 'hidden' : ''} data-title="Full Stack Web Developer">
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/whatido">What I Do</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/work">Work</Link>
                    <Link to="/contact">Say Hello</Link>
                </nav>
                {burgerIcon}
            </header>
            
            <div className="navbar navbar-custom">
                <div className="nav-container">
                    <div className="nav-name-link" hidden={this.props.dontShowHomeIcon ? true : false}>
                        <Link to='/app'>Mahipal Reddy</Link>
                    </div>                    
                </div>
            </div>
            </div>
    );
}
};

export default NavIcon;