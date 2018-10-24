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
                    <Row>
                    PORTFOLIO
                    Below you can see some projects I've been working on lately. I divide each project into four follow-up areas: comprehensive research, wireframing, design & development. This process allows me to create great product with client goals in mind.
                    </Row>
                    <Row><p>CT Author Cup is traditional mountain bike race with eighteen years experience. I provided them everything from logo design, website design & development to printed materials.</p></Row>
                    <Row><p>Fun side project, where I designed simple shopping experience for one of my favourite apple accessory.</p></Row>
                    <Row>
                        <p>With team at Autonation we are preparing new mobile experience for our site. I'm responsible for UI / UX & interaction design.</p>
                        <button>See it Online</button>
                    </Row>

                    <Row><p>Client wanted online configurator, where customers can create custom kids jewellery. I was responsible for UI design, interaction design & front-end development.</p></Row>
                    <Row><p>For czech startup Restu.cz I created mobile version of their site. I was responsible for UI design, interactions & front-end development.</p></Row>   
            </div>
        </div>
    );
};

export default work;