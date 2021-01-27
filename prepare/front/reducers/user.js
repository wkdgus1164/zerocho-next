const initialState = {
    isLoggingIn: false,
    isLoggedIn: false,
    isLoggingOut: false,
    me: null,
    signUpData: {},
    loginData: {},
}

export const loginAction = data => {
    return {
        type: 'LOG_IN',
        data
    }
}

export const loginRequestAction = data => {
    return {
        type: 'LOG_IN_REQUEST',
        data
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

export const logoutRequestAction = data => {
    return {
        type: 'LOG_OUT_REQUEST',
        data
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST':
            return {
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: {...action.data, nickname: 'zerocho'},
            };
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            };
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };
        case 'LOG_OUT_SUCCESS':
            return {
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };
        case 'LOG_OUT_FAILURE':
            return {
                isLoggingOut: false,
            };
        default:
            return state;
    }
};

export default reducer;