import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import MediaQuery from 'react-responsive';

class Navigation extends Component{
    state = {
        isHidden: true,
        addClass1: false,
        addClass2: false,
        isHovered: false,
    }
    componentDidMount(){
        const currentRoute = this.props.location.pathname;

        switch(true){
            case currentRoute.includes("whatido"):
                this.setState(state => {
                    return ({
                        isWhatIDoSelected: "selected",
                        isAboutSelected: "",
                        isSkillsSelected:"",
                        isWorkSelected:"",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("about"):
                this.setState(state => {
                    return ({
                        isWhatIDoSelected: "",
                        isAboutSelected: "selected",
                        isSkillsSelected:"",
                        isWorkSelected:"",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("skills"):
                this.setState(state => {
                    return ({
                        isWhatIDoSelected: "",
                        isAboutSelected: "",
                        isSkillsSelected:"selected",
                        isWorkSelected:"",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("work"):
                this.setState(state => {
                    return ({
                        isWhatIDoSelected: "",
                        isAboutSelected: "",
                        isSkillsSelected:"",
                        isWorkSelected:"selected",
                        isContactSelected: "",
                    })
                })
                break;
            case currentRoute.includes("contact"):
                this.setState(state => {
                    return ({
                        isWhatIDoSelected: "",
                        isAboutSelected: "",
                        isSkillsSelected:"",
                        isWorkSelected:"",
                        isContactSelected: "selected",
                    })
                })
                break;
            default:
                this.setState(state => {
                    return ({
                    isWhatIDoSelected: "",
                    isAboutSelected: "",
                    isSkillsSelected:"",
                    isWorkSelected:"",
                    isContactSelected: "",
                });
            })
        }
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

        const homeLink = <MediaQuery minDeviceWidth={568}>
        { matches => {
            if(matches) {
                return "Mahipal Reddy";
            } else {
                return <i className="fas fa-4x fa-user-tie core-1"></i>;
            }
        } }
        </MediaQuery>

        return (
            <div>
            <header id="page-header" className={this.state.isHidden ? 'hidden' : ''} data-title="Full Stack Web Developer">
                <nav>
                    <Link to="/whatido" className={this.state.isWhatIDoSelected}><span>What I Do</span></Link>
                    <Link to="/about" className={this.state.isAboutSelected}><span>About</span></Link>
                    <Link to="/skills" className={this.state.isSkillsSelected}><span>Skills</span></Link>
                    <Link to="/work" className={this.state.isWorkSelected}><span>Work</span></Link>
                    <Link to="/contact" className={this.state.isContactSelected}><span>Say Hello</span></Link>
                </nav>
                {burgerIcon}
            </header>
            
            <div className="nav nav-custom">
                <div className="nav-container">
                    <div className="nav-name-link" hidden={this.props.dontShowHomeIcon ? true : false}>
                        <Link className="name" to='/home'>
                            {this.props.isScrolled ? <i className="fas fa-4x fa-user-tie core-1"></i> : "Mahipal Reddy"}
                        </Link>
                    </div>                    
                </div>
            </div>
            </div>
    );
}
};

Navigation.defaultProps = {
    isScrolled : false,
}

export default withRouter(Navigation);