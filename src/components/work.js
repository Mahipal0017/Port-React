import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './common/navBar';
import WorkItem from './workItem';

const work = () => {
    return (
        <div>
            <div className=""><NavBar /></div>
            <div className="work-page text-center">
                <h2>Work</h2>
                <hr />
            </div>
            <div style={{width: '50%'}} className="be-center">
            <WorkItem />
            </div>
            <div className="left-arrow"><a><Link to='/skills'><i class="fas fa-angle-left fa-2x"></i></Link></a></div>
            <div className="right-arrow"><a><Link to='/contact'><i class="fas fa-angle-right fa-2x"></i></Link></a></div>   
        </div>
    );
};

export default work;