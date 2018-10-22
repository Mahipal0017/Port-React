import React from 'react';
import { Row, Col } from 'reactstrap';

const QuestionPage = () => {
    return (
        <Row className="questionPage">
           <Col md='6' className="left-container">
                <div className="inner-container-wrapper">
                <div className="inner-container">
                    <div className="inner inner-left">
                        <h5><i>Create Account</i></h5>
                        <h2>Register</h2>
                    </div>
                </div>
                </div>
           </Col>
           <Col md='6' className="right-container">
                <div className="inner-container-wrapper">
                <div className="inner-container">
                    <div className="inner inner-right">
                        <h5><i>Guest Login</i></h5>
                        <h2>Hit Enter</h2>
                    </div>
                </div>
                </div>
           </Col>
        </Row>
    );
};

export default QuestionPage;