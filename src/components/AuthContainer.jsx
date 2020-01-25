import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';
import { setEmailText, setPasswordText } from '../store/auth/actions';

class AuthContainer extends React.Component {

    render() {
        return <Auth 
            email={this.props.email} 
            password={this.props.password} 
            setEmailText={this.props.setEmailText} 
            setPasswordText={this.props.setPasswordText} />
    }
}

const mapStateProps = state => {
    return {
     email: state.auth.email,
     password: state.auth.password
    };
}

const mapDispatchProps = {
    setEmailText,
    setPasswordText
}

export default connect(mapStateProps, mapDispatchProps)(AuthContainer);