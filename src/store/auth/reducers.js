import {AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT} from './actions';

const defaultState = {
    email: '',
    password: ''
}

//defaultState for first start
export const authReducer = (state = defaultState, action) => {
    console.log(state)
    switch(action.type) {
        case AUTH_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload        
            };

        case AUTH_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload        
            };
    }
    return state; 
}