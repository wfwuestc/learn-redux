import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as Actions from "../Actions";

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        const {actions} = this.props
        if (e.keyCode === 13) {
            let val = e.target.value;
            actions.add(val)
        }
    }

    render() {
        return (
            <input type="text" id="test" onKeyUp={this.addItem}/>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
});

export default connect(null, mapDispatchToProps)(AddTodo)
