import React from 'react'

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    } 

    onEmailChange(event) {
        this.props.setEmailText(event.target.value)
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    }

    render() {
        return <>
        Sign in
        <input
         type="text"
         name="login"
         autoComplete="off" 
         placeholder="email" 
         value={this.props.email}
         onChange={this.onEmailChange}
         />
        <input type="text" 
        name="password" 
        autoComplete="off" 
        placeholder="password" 
        value={this.props.password}
        onChange={this.onPasswordChange}/>
        email field
        password field 
        </>
    }
}