import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as ActionTypes from './ActionTypes'
import {bindActionCreators} from "redux";
import * as Actions from './Actions'


class Weather extends Component{
    componentWillMount(){
        this.props.actions.fetchWeather()
    }

    render () {
        let {status, city, weather, temperature} = this.props
        return (
            status === ActionTypes.REQUEST ? <div>天气数据请求中...</div>
                : status === 'ok' ? <div>{city} {weather} 温度{temperature}℃ </div>
                : <div>天气请求失败</div>
        )
    }
}

const mapStateToProps = (state) => {
    const data = state.weather;
    if(data.status === 'ok') {
        return {
            status: data.status,
            city: data.basic.location,
            weather: data.now.cond_txt,
            temperature: data.now.tmp,
        }
    }else {
        return {
            status: data.status
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
