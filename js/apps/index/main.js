define([require, '../../vendor/chips/index'], function (require, chips) {

    var page = {
        init: function () {

        },
        destroy: function () {

        }
    };

    var app = chips(page);

    /**
     * Usage:
     * <index-field icon="icon1" label="xxxx" value="yyyy"></index-field>
     */
    app.chips.register('index-field', {
        is: 'div',
        attributes: ['icon', 'label', 'value'],
        model: {value: '{value}'},
        view: {
            icon1: {
                is: 'img',
                attributes: {src: '{icon}'}
            },
            label1: {
                is: 'label',
                attributes: {text: '{label}'}
            },
            textbox1: {
                is: 'input',
                attributes: {value: '{value}'}
            },
            message1: {
                is: 'span',
                attributes: {value: '{model.value}'}
            }
        }
    });
});

