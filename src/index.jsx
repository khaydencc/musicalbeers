import React from 'react';
import ReactDOM from 'react-dom';
import '../build/sass/styles.scss';
import User from "service/User";
import LoginButton from "components/LoginButton";
import BeerList from "components/BeerList";

let user = new User();

const defaultState = {
    loggedin: false
};

class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = defaultState;

        this.getUser = this.getUser.bind(this);
        this.onStatus = this.onStatus.bind(this);
    }

    getUser () {
        return user;
    }

    onStatus(auth) {
        console.log("[App:onStatus:] auth = %o", auth);
        if (auth === true) {
            // set loggedin state
            this.setState({
                loggedin: true
            });
            
            // get profile info
            /*IHR.api.profile.get({
                success: function(data){
                    user.setProfile(data);
                },
                error: function () {
                    
                }
            });*/
        }
    }

    componentWillMount() {
        console.log("[App:componentWillMount:]");
        user.getStatus(this.onStatus);
    }

    render(){
        return(
            <div className="app-container">
                <p>like beer?</p>
                <LoginButton loggedin={this.state.loggedin} getUser={this.getUser}/>
                <BeerList/>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
