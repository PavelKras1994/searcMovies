import React from 'react';
import ReactTooltip from 'react-tooltip';
import PT from 'prop-types';

import './Tooltip.scss';

const Tooltip = ( {id, content, children}) => {
    return (
        <>
            <div 
            data-tip={`tooltip-${id}`} 
            data-for={`tooltip-${id}`}
            data-effect="solid"
            >
                {children}
            </div>
            <ReactTooltip 
            id={`tooltip-${id}`}
            className = "tooltip"
            // delayHide = "999999999"
            >
                {content}
            </ReactTooltip>
        </>
    )
}

Tooltip.propTypes = {
    content: PT.string.isRequired,
    // children: PT.oneOfType([
    //     PT.object,
    //     PT.array
    // ]).isRequired,
    id: PT.oneOfType([
        PT.string,
        PT.number
    ]).isRequired
};
export default Tooltip;
