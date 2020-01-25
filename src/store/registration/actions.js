export const REGISTRATION_CHANGE_EMAIL_TEXT = 'REGISTRATION_CHANGE_EMAIL_TEXT';
export const REGISTRATION_CHANGE_PASSWORD_TEXT = 'REGISTRATION_CHANGE_PASSWORD_TEXT';
export const REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT = 'REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT';

//action creators
export const setEmailText = email => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email
})

export const setPasswordText = password => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password
})

export const setRepeatPasswordText = repeatPassword => ({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: repeatPassword
})