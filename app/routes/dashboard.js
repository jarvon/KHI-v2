import Route from '@ember/routing/route';
import { Auth } from '../@api/auth';

export default Route.extend({

    // Before Model Loads
    beforeModel() {

        // Transition To Login
        if(!Auth.CheckAuth()){ this.transitionTo('login') };

    },

    model() {
        return {
            congregation: window.localStorage.getItem('congregation')
        }
    }

});
