import {
    REGISTRATION_CHANGE_EMAIL_TEXT,
    REGISTRATION_CHANGE_PASSWORD_TEXT,
     REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT} from './actions';

const defaultState = {
    email: '',
    password: '',
    repeatPassword: ''
}

export const registrationReducer = (state = defaultState, action) => {
    console.log(state);
    switch(action.type) {
        case REGISTRATION_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload        
            };

        case REGISTRATION_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload        
            };

        case REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT:
            return {
                ...state,
                repeatPassword: action.payload        
            };
    }
    return state; 
}