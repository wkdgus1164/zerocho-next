const initialState = {
    isLoggedIn: false,
    isLoggingIn: false,
    isLoggingOut: false,
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginRequestAction = data => {
    return {
        type: 'LOG_IN_REQUEST',
        data
    }
}

export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST',
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                isLoggingIn: false,
                isLoggedIn: true,
                me: {...action.data, nickname: 'zerocho'},
            };
        case 'LOG_IN_FAILURE':
            return {
                isLoggedIn: false,
                isLoggingIn: false,
            };
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut: false,
            };
        default:
            return state;
    }
};

export default reducer;

export class loginAction {
}