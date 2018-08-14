import * as ActionTypes from './ActionTypes.js';

export const fetchStart = () => ({
    type: ActionTypes.REQUEST
})

export const fetchSuccess = (result) => ({
    type: ActionTypes.SUCCESS,
    result
})

export const fetchFailure = (error) => ({
    type: ActionTypes.FAILURE,
    error
})

export const fetchWeather = () => {

    // dispatch 谁传进来 thunk传进来的, 同时传进来的还有 getState
    return (dispatch, getState) => {
        const apiUrl = `https://free-api.heweather.com/s6/weather/now?location=auto_ip&key=92b92682429c4c0385ab6a402bcb4e89`;
        console.log(getState())
        dispatch(fetchStart())

        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }

            response.json().then((responseJson) => {
                dispatch(fetchSuccess(responseJson.HeWeather6[0]));
            }).catch((error) => {
                dispatch(fetchFailure(error));
            });
        }).catch((error) => {
            dispatch(fetchFailure(error));
        })
    };
}