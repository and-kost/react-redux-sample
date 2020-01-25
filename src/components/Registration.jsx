import React from 'react'

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    } 

    onEmailChange(event) {
        this.props.setEmailText(event.target.value)
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    }

    onRepeatPasswordChange(event) {
        this.props.setRepeatPasswordText(event.target.value)
    }

    render() {
    return <>
        <hr/>
        Registation
        <input
         type="text"
         name="login"
         autoComplete="off" 
         placeholder="email" 
         value={this.props.email}
         onChange={this.onEmailChange} />

        <input type="text" 
        name="password" 
        autoComplete="off" 
        placeholder="password" 
        value={this.props.password}
        onChange={this.onPasswordChange}/>

        <input type="text" 
        name="repeatPassword" 
        autoComplete="off" 
        placeholder="repeat password" 
        value={this.props.repeatPassword}
        onChange={this.onRepeatPasswordChange}/>
        </>
    }
}