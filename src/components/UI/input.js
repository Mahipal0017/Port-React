import React from 'react';

const input = (props) => {
    let inputElement = null;
    
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
            className='inputElement' 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed} />
            break;
        case ('textarea'):
            inputElement = <textarea
                className='inputElement'
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        default:
        inputElement = <input
            className='inputElement' 
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed} />;     
    }

    return (
        <div className='input'>
            <label className='label'>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;