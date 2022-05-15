import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import {HYDRATE} from "next-redux-wrapper"
import register, { registerSaga } from './auth/register'
import login, { loginSaga } from './auth/login'
import registerBoard, { registerBoardSaga } from './board/register'
import showBoard, { showBoardSaga } from './board/register'


const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    login,
    register,
    registerBoard,
});
export function* rootSaga(){
    yield all([ registerSaga(), loginSaga(), registerBoardSaga()])
}
export default rootReducer