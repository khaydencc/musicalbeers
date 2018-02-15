import React from 'react';
// import User from "service/User";

class LoginButton extends React.Component {

    constructor (props) {
        super(props);

        this.user = this.props.getUser();
        this.label = this.props.loggedin ? "logout" : "login";

        console.log("LoginButton user = %o", this.user);
    }

    loginComplete (data) {
        console.log("loginComplete data = %o", data);

        IHR.api.profile.get({
            success: function(data){
                user.setProfile(data);
            },
            error: function () {

            }
        });
    }

    handleClick (_event) {
        _event.preventDefault();

        if (IHR) {
            IHR.login({
                success: function(data) {
                    console.log("login success data = %o", data);
                    // user.loginSuccess(data, this.loginComplete)
                }
            });
        }
    }

    render() {

        return <div>
            <button onClick={this.handleClick}>{ this.label }</button>
        </div>
    }


}

export default LoginButton;
