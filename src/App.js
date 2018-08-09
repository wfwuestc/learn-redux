import React, { Component } from 'react';
import './App.css';
import * as Actions from './todoItem/Actions.js';
import TodoItem from './todoItem/TodoItem'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.addItem = this.addItem.bind(this);
        this.changeState = this.changeState.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        const {actions} = this.props
        if (e.keyCode === 13) {
            let val = e.target.value;
            actions.add(val)
        }
    }

    changeState(e) {
        const {actions} = this.props
        let id = e.target.dataset.id;
        actions.toggle(id)
    }

    deleteItem(e) {
        const {actions} = this.props
        let id = e.target.dataset.id;
        actions.del(id)
    }

    render() {
        const {list} = this.props;
        return ([<input key={1} type="text" id="test" onKeyUp={this.addItem}/>,
                <div key={2} className="item-wrap">
                    {
                        list.map((el, i) => {
                            return (
                                <TodoItem key={i} el={el} change={this.changeState} del={this.deleteItem}/>
                            )
                        })
                    }
                </div>]
        );
    }
}

App.propTypes = {
    list: PropTypes.array
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
