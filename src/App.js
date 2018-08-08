import React, {Component} from 'react';
import './App.css';
import store from './Store.js';
import * as Actions from './Actions.js';

const log = console.log.bind(console);

class App extends Component {
    constructor() {
        super()
        this.addItem = this.addItem.bind(this)
        this.onChange = this.onChange.bind(this);

        this.state = this.getOwnState()
    }

    getOwnState() {
        return {
            lists: store.getState().list
        }
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    addItem(e) {
        if (e.keyCode === 13) {
            let val = e.target.value;
            store.dispatch(Actions.add(val))
        }
    }

    changeState(e) {
        let index = e.target.dataset.index;
        store.dispatch(Actions.toggle(index))
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    render() {
        let {lists} = this.state;
        return ([<input key={1} type="text" id="test" onKeyUp={this.addItem}/>,
                <div key={2} className="item-wrap">
                    {
                        lists.map((el, i) => {
                            return (
                                <p key={i}>
                                    <input type="checkbox" data-index={i} defaultChecked={el.status === 1}
                                           onChange={this.changeState}/>
                                    <span className="todo-content">{el.content}</span>
                                    <span className={el.status === 0?"red":"blue"}>{el.status === 0 ? '未完成' : '已完成'}</span>
                                </p>
                            )
                        })
                    }
                </div>]
        );
    }
}

export default App;
