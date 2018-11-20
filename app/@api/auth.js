
// PathNames
import { PathName } from './pathnames';

// KHI Authentication
export let Auth = {

    CheckAuth: function(){

        // Local Storage
        let storage = window.localStorage;

        // User And Server Login Status
        var userLoginStatus = false;
        var serverLoginStatus = storage.getItem('loginStatus');

        // If User Logged In
        if(serverLoginStatus === 'true'){

            // Set User Login Status
            userLoginStatus = true;

            // Return Login status
            return userLoginStatus;
            
        } else {

            // Redirect User To Login
            return userLoginStatus;

        }
        

    },

    GetInfo: function(passcode = "0000"){

        // Split Text
        var seperatedData = passcode.split("+");

        if(seperatedData.length == 2){

            // Data
            var code = seperatedData[0].trim();
            var email = seperatedData[1].trim();

            var getCong = fetch(PathName.congregationData() + `?code=${code}&email=${email}`);

        } else if(seperatedData.length == 1){

            // Data
            var code = seperatedData[0].trim();
            
            var getCong = fetch(PathName.congregationData() + `?code=${code}`);

        }

        return getCong;

    },

    LoginUser: function(passcode = "0000"){

        // Split Text
        var seperatedData = passcode.split("+");

        if(seperatedData.length == 2){

            // Data
            var code = seperatedData[0].trim();
            var email = seperatedData[1].trim();

            var loginUser = fetch(PathName.login() + `?code=${code}&email=${email}`);

        } else if(seperatedData.length == 1){

            // Data
            var code = seperatedData[0].trim();
            
            var loginUser = fetch(PathName.login() + `?code=${code}`);

        }

        return loginUser;

    }

}
