import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavIcon extends Component{
    state = {
        isHidden: true,
        addClass1: false,
        addClass2: false,
        isHovered: false,
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

    handleHover = () => {
        this.setState(state => {
            return {isHovered:!state.isHovered}
        });
    }

    render(){
        const burgerClasses = this.state.addClass1 ? (this.state.addClass2 ? 'burger state-1 state-2' : 'burger state-1') : 'burger';
        const hoverClass = this.state.isHovered ? `${burgerClasses} hover` : burgerClasses;
        console.log('hoverclass', hoverClass);
        const burgerIcon = 
            (   <div onClick={this.addClassNames}
                    className= {hoverClass}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}
                    >
                    <i></i>
                    <i></i>
                    <i></i>
                </div> )

        return (
            <div>
            <header id="page-header" className={this.state.isHidden ? 'hidden' : ''} data-title="Full Stack Web Developer">
                <nav>
                    <Link to="/about"><span>About</span></Link>
                    <Link to="/whatido"><span>What I Do</span></Link>
                    <Link to="/skills"><span>Skills</span></Link>
                    <Link to="/work"><span>Work</span></Link>
                    <Link to="/contact"><span>Say Hello</span></Link>
                </nav>
                {burgerIcon}
            </header>
            
            <div className="navbar navbar-custom">
                <div className="nav-container">
                    <div className="nav-name-link" hidden={this.props.dontShowHomeIcon ? true : false}>
                        <Link className="name" to='/app'>Mahipal Reddy</Link>
                    </div>                    
                </div>
            </div>
            </div>
    );
}
};

export default NavIcon;