define([require, '../../vendor/chips/index'], function (require, chips) {
    
    var app = chips(page);
   
    app.chips.register('chips-input', {
        is : 'input',
        model: { value: 'default'}
    });
   
    app.chips.register('index-field', {
        is: 'div',
        model: {label: '', value: 'Hello World', icon: ''},
        view: {
            /*
            icon1: {
                is: 'chips-icon',
                model: {src: '{host.icon}'},
                layout: {row: 1, colspan: 1, position: 1},
                style: {}
            },
            label1: {
                is: 'chips-label',
                model: {text: '{host.model.label}'},
                layout: {row: 1, colspan: 4, position: 1},
                style: {}
            },
            */
            textbox1: {
                is: 'chips-input',
                model: {value: '{{host.model.value}}'},
                layout: {row: 1, colspan: 7, position: 1},
                style: {}
            },
            /*
            message1: {
                is: 'chips-label',
                model: {value: '{{host.view.textbox1.model.error}}'},
                layout: {row: 2, colspan: 12, position: 1},
                style: {}
            }*/
        },
        layout: {rows: 2, columns: 12},
        style: {}
    });

    var page = {
        init: function () {

        },
        destroy: function () {

        }
    };

//    window.addEventListener("load", app.kernel.boot, false);
//    window.addEventListener("unload", app.kernel.destroy, false);

});