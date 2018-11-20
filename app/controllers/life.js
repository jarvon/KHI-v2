import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        toggleSelect: function() {

            $('body').toggleClass("toggle");
            $(".page").toggleClass("blur");
            $(".selector").toggleClass("toggle");

        }
    }
});
