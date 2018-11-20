// API Pathnames

export let PathName = {

    // Host Name
    host: "http://localhost/info-api",

    // Get Congregation Name
    congregationData: function(){

        return this.host + "/congregation.php";

    },

    // Login Path
    login: function() {

        // Return Login API Endpoint
        return this.host + "/login.php";

    },

    // Autosource Path
    autosource: function() {

        return this.host + "/getSource.php";

    }
    
}