import Component from '@ember/component';

export default Component.extend({
    tagName: 'div',
    classNames: ['schedule', 'life'],
    didInsertElement (){

        // SUPER()
        this._super();

        // For Each Element:
        this.$().each(function(index, el){

            // Add class toggle to all
            $(el).addClass('toggle');

            // Dropdown Click
            $(el).children('.header').children('.dropdown').click(function(){
                $(this).toggleClass('toggle');
                $(el).toggleClass('toggle');
            });

        });

        // Jquery Calls
        $('.schedule').first().removeClass('toggle');
        $('.schedule .header img.dropdown').first().addClass('toggle');
        
    }
});
