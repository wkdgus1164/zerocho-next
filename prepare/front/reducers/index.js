import {HYDRATE} from "next-redux-wrapper";
import {combineReducers} from "redux";

import user from './user';
import post from './post';

const changeNickname = data => {
    return {
        type: 'CHANGE_NICKNAME',
        data
    }
}

changeNickname('boogicho');

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE');
                break;
            default:
                return state;
        }
    },
    user,
    post
});

export default rootReducer;