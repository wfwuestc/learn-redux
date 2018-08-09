import React from 'react'
import PropTypes from 'prop-types';
import {setFilter} from "../Actions";
import {connect} from 'react-redux';


const Link =({active, onClick, children}) => {
    if (active) {
        return <a className="filter selected">{children}</a>;
    } else {
        return (
            <a href="#" className="filter not-selected" onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
                {children}
            </a>
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
        console.log(ownProps)
        dispatch(setFilter(ownProps.filter));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);

