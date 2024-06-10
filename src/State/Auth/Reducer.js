import { GET_USER_FAILURE, GET_USER_REQUSET, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUSET, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUSET, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case REGISTER_REQUSET:
        case LOGIN_REQUSET:
        case GET_USER_REQUSET:
            return { ...state, isLoading: true, error: null }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null, jwt: action.payload }
        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload }
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case LOGOUT:
            return { ...initialState }

        default:
            return state;
    }


}