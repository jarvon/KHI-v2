import Controller from '@ember/controller';
import { Auth } from '../@api/auth';

export default Controller.extend({
    pin: '',
    congregation: '',
    actions: {

        // Update Pins
        updatePin: function(val){

            // Save Updated Value
            this.pin = val;

            // Change Login Btn Color
            $('.loginBtn').removeClass('red');

            // Get Congregation
            Auth.GetInfo(val).then(data => {

                // Return JSON
                return data.json();

            }).then(data => {

                // Set Congregation
                this.set('congregation', data.congregation);

            });

        },

        // Login
        login: function(){

            // Show Loading Spinner
            $(".loading").fadeIn();

            Auth.LoginUser(this.pin).then(data => {
                return data.json();
            })
            .then(data => {

                console.log(data);

                if(data.status === true) {

                    var localStorage = window.localStorage;

                    // Log User In
                    localStorage.setItem("congregation", data.congregation);
                    localStorage.setItem("inputPin", data.passcode);
                    localStorage.setItem("loginStatus", data.status);
                    localStorage.setItem("userInfo", data.userInfo);

                    setTimeout(() => {

                        // Show Loading Spinner
                        $(".loading").fadeOut();

                            // Change Route
                            this.transitionToRoute('dashboard');
                            
                    }, 2000);

                }

                else if(data.status === false) {

                    // Change Button Color
                    $('.loginBtn').addClass('red');


                    setTimeout(() => {

                        // Show Loading Spinner
                        $(".loading").fadeOut();
                            
                    }, 1000);

                }

            });
        }
    }
});
