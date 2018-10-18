import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../styles/App.scss';
import 'react-circular-progressbar/dist/styles.css';
import NavIconComp from './common/navIcon';
import backgroundImg from '../extras/img/bodybackground.jpg';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <div className="app-header"><NavIconComp  /></div>
        
          {/* <div className="intro col-md-6">
            <h1 className="intro-text">
              <span>Hello, I'm </span>
              <span className="name">Mahipal Reddy</span>
            </h1>
            <p className="role"><h3>Web Developer - <em>Design Code Build</em></h3></p>
            <div className="about-btn"><Link to="/about"><Button size='sm' color="default" outline>About Me</Button></Link></div>
          </div>
          
          <div className="right-arrow">
            <a><Link to='/about'><i class="fas fa-angle-right fa-2x"></i></Link></a>
          </div>
          <div className="app-footer"></div> */}
          
      </div>
    );
  }
}

export default App;
