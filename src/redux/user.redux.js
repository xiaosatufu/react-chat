import axios from 'axios'
import {
    getRedirectPath
} from '../utils'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
    redirectTo: '',
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: ''
}
//reducer
export function user(state = initState, action) {


    if (action.type === REGISTER_SUCCESS) {
        // console.log(...state)
        // console.log(...action.payload)
        return {
            ...state,
            msg: '',
            redirectTo: getRedirectPath(action.payload),
            isAuth: true,
            ...action.payload
        }
    }
    if (action.type === LOGIN_SUCCESS) {
        // console.log(...state)
        // console.log(...action.payload)
        return {
            ...state,
            msg: '',
            redirectTo: getRedirectPath(action.payload),
            isAuth: true,
            ...action.payload
        }
    }
    if (action.type === LOAD_DATA) {
        return {...state,...action.payload}
    }
    if (action.type === ERROR_MSG) {
        // console.log(...state)
        return {
            ...state,
            isAuth: false,
            msg: action.msg
        }
    }
    return state
}
function loginSuccess(data){
    return {
        type:LOGIN_SUCCESS,
        payload:data,

    }
}
function registerSuccess(data) {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

function errorMsg(msg) {
    return {
        msg,
        type: ERROR_MSG
    }
}

export function loadData(userinfo){
    return {type:LOAD_DATA,payload:userinfo}
}



export function login({
    user,
    pwd
}) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('/user/login', {
            user,
            pwd,
        }).then((res) => {
            if (res.data.code === 0 && res.status === 200) {
                // dispatch(registerSuccess({
                //     user,
                //     pwd,
                //     type
                // }))
                dispatch(loginSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}

export function register({
    user,
    pwd,
    repwd,
    type
}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repwd) {
        return errorMsg('密码输入不一致')
    }
    return dispatch => {
        axios.post('/user/register', {
            user,
            pwd,
            type
        }).then((res) => {
            if (res.data.code === 0 && res.status === 200) {
                dispatch(registerSuccess({
                    user,
                    pwd,
                    type
                }))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}