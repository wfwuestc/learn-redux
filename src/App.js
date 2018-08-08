import React, { Component } from 'react';
import './App.css';
import * as Actions from './Actions.js';
import TodoItem from './components/TodoItem'
import PropTypes from 'prop-types';


const log = console.log.bind(console);

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.addItem = this.addItem.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
        this.changeState = this.changeState.bind(this);

        this.state = this.getOwnState()
    }

    getOwnState() {
        return {
            lists: this.context.store.getState().list
        }
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    addItem(e) {
        if (e.keyCode === 13) {
            let val = e.target.value;
            this.context.store.dispatch(Actions.add(val))
        }
    }

    changeState(e) {
        let id = e.target.dataset.id;
        this.context.store.dispatch(Actions.toggle(id))
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    render() {
        let {lists} = this.state;
        return ([<input key={1} type="text" id="test" onKeyUp={this.addItem}/>,
                <div key={2} className="item-wrap">
                    {
                        lists.map((el, i) => {
                            return (
                                <TodoItem key={i} el={el} change={this.changeState}/>
                            )
                        })
                    }
                </div>]
        );
    }
}

App.contextTypes = {
    store: PropTypes.object
}

export default App;
