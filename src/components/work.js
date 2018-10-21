import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";

import WorkItem from './workItem';

const work = () => {
    return (
        <div className="page-content">
                <PageControls goto="/contact" spanN="say hello" classN="next-page-arrow" />
                <PageControls goto="/skills" spanN="skills" classN="prev-page-arrow" />
                <Navigation />
                <div className="main-container">
                    <Row>
                        <Col className="text-center">
                            <h2 className="main-heading">My Recent Work</h2>
                            <h5 className="main-subheading"></h5>
                        </Col>
                    </Row>
                    <Row style={{width: '50%'}} className="be-center">
                        <WorkItem />
                    </Row>
                    
        </div>
        </div>
    );
};

export default work;