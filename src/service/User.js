
let ihrConfig = {
    container       : 'ihr-root',
    host            : 'https://www.iheart.com',
    buttons         : false,
    requireLogin    : true
};


export default class User {

    constructor () {
        try{
            IHR.initialize({
                container: ihrConfig.container,
                host     : ihrConfig.host
            });

        } catch(err){
            console.log("IHR init error %o", err);
        }

        this.profile = {};
    }

    onStatus () {

    }

    setProfile(data) {
        console.log("[User:setProfile:] data = %o", data);
        this.profile = data;
    }

    getProfile() {
        return this.profile;
    }

    getStatus (callback) {

        IHR.checkAuthStatus(function(auth){
            console.log("checkAuthStatus args = %o", arguments);
            callback(auth);
        });
    }

    login(callback) {
        if (IHR) {
            IHR.login({
                success: function(data) {
                    console.log("login success data = %o", data);
                    this.loginSuccess(data, callback)
                }
            });
        }
    }

    loginSuccess(data, callback) {
        console.log("User.loginSuccess data = %o", data);
        callback();
    }


}