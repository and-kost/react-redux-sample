// upper case is used for actions
export const AUTH_CHANGE_EMAIL_TEXT = 'AUTH_CHANGE_EMAIL_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';


//action creators
export const setEmailText = email => ({
    type: AUTH_CHANGE_EMAIL_TEXT,
    payload: email
})

export const setPasswordText = password => ({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password
})