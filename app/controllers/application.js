import Controller from '@ember/controller';
import { AutoSource } from '../@api/autosource';

export default Controller.extend({
    init: function() {

        AutoSource.getSource().then(data => data.json())
        
            .then((data) => {
                this.set("sourceMaterial", data);
            });

    },
    sourceMaterial: '',
    actions: {

        toggleSelect: function() {

            $('body').toggleClass("toggle");
            $(".page").toggleClass("blur");
            $(".selector").toggleClass("toggle");

        },

        // Toggle Menu
        toggleMenu() {

            // Toggle Menu
            $('.page').toggleClass("toggle");
            $('.sidebar').toggleClass("toggle");

        },

        signout() {

            // Set Local Storage
            var localStorage = window.localStorage;

            // Logout User
            localStorage.clear();

            // Tranition To Login Page
            this.transitionToRoute('login');

        }
        
    }
});
