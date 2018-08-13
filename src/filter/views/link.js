import React from 'react'
import PropTypes from 'prop-types';
import {setFilter} from "../Actions";
import {connect} from 'react-redux';


const Link =({active, onClick, children}) => {
    if (active) {
        return <button className="filter selected">{children}</button>;
    } else {
        return (
            <button className="filter not-selected" onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
                {children}
            </button>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);

