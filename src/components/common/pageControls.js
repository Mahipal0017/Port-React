import React from 'react';
import { Link } from 'react-router-dom';

const PageControls = (props) => {
    const location = props.goto;    //location name
    const classN = props.classN;    //next-page-arrow or prev-page-arrow
    const spanN = props.spanN       //text that to be displayed when hovered
    return (
        <div className="page-control">
            <Link to={location} className={classN}>
                <span>{spanN}</span>
                <em></em>
            </Link>
        </div>
    );
};

export default PageControls;