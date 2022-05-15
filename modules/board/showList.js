import {createAction, handleActions} from 'redux-actions';
import {
    call,
    delay,
    put,
    takeLatest,
    select,
    throttle
} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    article: null
}

const SHOW_REQUEST = 'board/SHOW_REQUEST';
const SHOW_SUCCESS = 'board/SHOW_SUCCESS';

export const showRequest = createAction(SHOW_REQUEST, data => data)

export function* showBoardSaga() {
    yield takeLatest(SHOW_REQUEST, showArticle);
}
function* showArticle(action) {
    try {
        const response = yield call(readAPI, action.payload)
        const result = response
            .data
            console
            .log(" Read 서버다녀옴: " + JSON.stringify(result))
        yield put({type: SHOW_SUCCESS, payload: result})
    } catch (error) {
        alert(`error : ${JOSN.stringify(error)}`)
    }
}
const readAPI = payload => axios.post(
    `${SERVER}/board/read`,
    payload,
    {headers}
)

const showBoard = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state,
        ...action.payload
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        article: action.payload
    })
}, initialState)
export default showBoard