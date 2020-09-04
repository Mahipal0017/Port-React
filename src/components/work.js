import React, {Component} from 'react';
import { Row, Col, Media } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import Navigation from "./common/navigation";
import PageControls from "./common/pageControls";
import WorkItem from './workItem';
import WorkCommentItem from './workCommentItem';

import FLBlueLogo from '../extras/img/company-logos/FLBlue.png';
import NSULogo from '../extras/img/company-logos/NSU.png';
import AutoNationLogo from '../extras/img/company-logos/AutoNation.png';
import MedtronicLogo from '../extras/img/company-logos/Medtronic.png';
import FactSetLogo from '../extras/img/company-logos/FactSet.png';
import CTRLPlusRLogo from '../extras/img/company-logos/CTRLPlusR.png';


class Work extends Component{

  componentDidMount(){
    document.title = "Mahipal Reddy/Work"
  }

  render(){
    return (
        <div className="page-content">
                <PageControls goto="/contact" spanN="say hello" classN="next-page-arrow" />
                <PageControls goto="/skills" spanN="skills" classN="prev-page-arrow" />
                <Navigation />
                <div className="main-container">
                    <Row>
                        <Col className="text-center animated fadeInDown">
                            <h2 className="main-heading">My Recent Work</h2>
                            <h5 className="main-subheading">Portfolio</h5>
                        </Col>
                    </Row>
                    {/* <Media>
                      <Media left href="#">
                        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                      </Media>
                      <Media body>
                        <Media heading>
                          Media heading
                        </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      </Media>
                    </Media> */}
                    <Row className="be-center w-75 animated5 fadeIn">
                        <WorkItem />
                        {/* <WorkCommentItem /> */}
                    </Row>
                    <Row className="pt-5 animated fadeInUp">
                      <Col className="text-center"><h3>Work Experience</h3></Col>
                      <VerticalTimeline>
                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          iconStyle={{ backgroundImage: `url(${FLBlueLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
                          date="Aug'2017 - Present"
                        >
                          <h4 className="vertical-timeline-element-subtitle">IT Developer</h4>
                          <div><span className="vertical-timeline-element-title">Florida Blue,</span><span> Jacksonville, FL</span></div>
                          <p><strong><emp>Projects:</emp></strong> My Health Link, Truli Health, Digital Enrollments, Payment Center, Message Center</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          date="Apr'2018 - Jul'2018"
                          iconStyle={{ backgroundImage: `url(${NSULogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
                        > 
                          <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                          <div><span className="vertical-timeline-element-title">Nova South Eastern University,</span><span> Fort Lauderdale, FL</span></div>
                          <p><strong><emp>Projects:</emp></strong> Faculty Roster Database, Spaces, Event Calendar</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          date="Aug'2017 - Mar'2018"
                          iconStyle={{ backgroundImage: `url(${AutoNationLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
                        > 
                          <h4 className="vertical-timeline-element-subtitle">UI Developer</h4>
                          <div><span className="vertical-timeline-element-title">AutoNation,</span><span> Fort Lauderdale, FL</span></div>
                          <p><strong><emp>Projects:</emp></strong> EMT, SEM Microsites</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          date="May'2016 - Apr'2017"
                          iconStyle={{ backgroundImage: `url(${MedtronicLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
                        >
                          <h4 className="vertical-timeline-element-subtitle">Full Stack Developer</h4>
                          <div><span className="vertical-timeline-element-title">Medtronics,</span><span> Minneapolis, MN</span></div>
                          <p><strong><emp>Projects:</emp></strong> Altare, Migration</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--education"
                          date="Jun'2015 - Nov'2015"
                          iconStyle={{ backgroundImage: `url(${FactSetLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
                        >
                          <h4 className="vertical-timeline-element-subtitle">Software Developer I</h4>
                          <div><span className="vertical-timeline-element-title">FactSet,</span><span> Hyderabad, India</span></div>
                          <p><strong><emp>Projects:</emp></strong> Core Product</p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--education"
                          date="Jun'2013 - May'2015"
                          iconStyle={{ backgroundImage: `url(${CTRLPlusRLogo})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}
                        >
                          <h4 className="vertical-timeline-element-subtitle">Jr.Software Developer</h4>
                          <div><span className="vertical-timeline-element-title">CTRL+R Technologies,</span><span> Hyderabad, India</span></div>
                          <p><strong><emp>Projects:</emp></strong> Multiple Projects</p>
                        </VerticalTimelineElement>

                      </VerticalTimeline>
                    </Row>
                </div>    
        </div>
    );
};
}

export default Work;