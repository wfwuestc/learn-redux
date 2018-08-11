import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as ActionTypes from './ActionTypes'
import {fetchWeather} from "./Actions";

class Weather extends Component{
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        this.props.getWeather()
    }

    render () {
        let {status, city, weather, temperature} = this.props
        return (
            status === ActionTypes.REQUEST ? <div>天气数据请求中...</div>
                : status === 'ok' ? <div>{city} {weather} 温度{temperature} </div>
                : <div>天气请求失败</div>
        )
    }
}


const mapStateToProps = (state) => {
    const data = state.weather;
    if(data.status === 'ok') {
        console.log(data)
        return {
            status: data.status,
            city: data.basic.location,
            temperature: data.now.tmp
        }
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: () => {
            dispatch(fetchWeather());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
