import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Tooltip = styled.div`
// styles for Tooltip
`;


const AppTooltip = ({ title, children }) => {
    return (
        <Tooltip title={title}>
            {children}
        </Tooltip>
    );
};

AppTooltip.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default AppTooltip;
