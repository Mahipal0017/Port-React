import React, {Fragment} from 'react';
import { Row, Col, Progress } from 'reactstrap';

const skillItem = (props) => {
    return (
        <Row className="justify-content-center">
            <div className="pr-0"><h4 className="skill-item text-center"><span>{props.skillName}</span></h4></div>
            <div className="pl-0 pr-0 progress-container"><Progress animated value={`${props.skillValue}`}></Progress></div>
            <div className="pl-0"><label className="skill-item item-value"><span>{props.skillValue}%</span></label></div>
        </Row>
    );
};

export default skillItem;