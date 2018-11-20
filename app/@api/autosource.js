import { PathName } from './pathnames';

export let AutoSource = {

    getSource: function() {

        var source = fetch(PathName.autosource());

        return source;

    }

}