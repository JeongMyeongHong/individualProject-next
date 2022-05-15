import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isRegistered: false
}

const REGISTER_REQUEST = 'board/REGISTER_REQUEST';
const REGISTER_SUCCESS = 'board/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'board/REGISTER_FAILURE';
const UNREGISTER_REQUEST = 'board/UNREGISTER_REQUEST';
const UNREGISTER_SUCCESS = 'board/UNREGISTER_SUCCESS';
const UNREGISTER_FAILURE = 'board/UNREGISTER_FAILURE';

export const registerRequest = createAction(REGISTER_REQUEST, data => data)
export const unregisterRequest = createAction(UNREGISTER_REQUEST, data => data)

export function* registerBoardSaga() {
    yield takeLatest(REGISTER_REQUEST, registergen);
    yield takeLatest(UNREGISTER_REQUEST, remove);
}
function* registergen(action) {
    try {
        const response = yield call(registerAPI, action.payload)
        alert("게시글 등록: " + JSON.stringify(response.data))
        yield put({type: REGISTER_SUCCESS, payload: response.data})
        yield put(window.location.href = "/board/ShowList")
    } catch (error) {
        yield put({type: REGISTER_FAILURE, payload: error.message})
    }
}
const registerAPI = payload => axios.post(`${SERVER}/board/register`, payload, {headers})

function* remove(action) {
    try {
        const response = yield call(unRegisterAPI, action.payload)
        alert("게시글 삭제: " + JSON.stringify(response.data))
        yield put({type: UNREGISTER_SUCCESS, payload: response.data})
        yield put(window.location.href = "/board/ShowList")
    } catch (error) {
        yield put({type: UNREGISTER_FAILURE, payload: error.message})
        
    }
}
const unRegisterAPI = payload => axios.post(`${SERVER}/board/unRegister`, payload, {headers})

const register = handleActions({
    [HYDRATE]: (state, action) => 
    ({...state, ...action.payload})}, 
    initialState
)
export default register