import React, {Component} from 'react'
import TodoItem from './TodoItem'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import * as Actions from "../Actions";
import {FilterTypes} from '../../constants.js';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.changeState = this.changeState.bind(this)
        this.deleteItem = this.changeState.bind(this)
    }

    changeState(e) {
        const {actions} = this.props;
        let id = e.target.dataset.id;
        actions.toggle(id)
    }

    deleteItem(e) {
        const {actions} = this.props;
        let id = e.target.dataset.id;
        actions.del(id)
    }

    render() {
        const {list} = this.props;
        return (
            <div className="item-wrap">
                {
                    list.map((el, i) => {
                        return (
                            <TodoItem key={i} el={el} change={this.changeState} del={this.deleteItem}/>
                        )
                    })
                }
            </div>
        )
    }
}

TodoList.propTypes = {
    list: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.status === 1);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => item.status === 0);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        list: selectVisibleTodos(state.todo.list, state.filter)
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
