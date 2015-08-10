define([require, '../../vendor/chips/index'], function (require, chips) {

    var app = {
        init: function () {

        },
        destroy: function () {

        }
    };

    var app = chips(app);


    /**
     * Usage:
     * <index-field icon="icon1" label="xxxx" value="yyyy"></index-field>
     */
    app.chips.register('chip-field', {
        is: 'div',
        attributes: ['icon', 'label', 'value'],
        model: {value: '{value}'},
        view: {
            icon1: {
                is: 'i',
                attributes: {className: '{icon}'}
            },
            label1: {
                is: 'label',
                attributes: {text: '{label}'}
            },
            textbox1: {
                is: 'input',
                attributes: {value: '{value}'}
            }
        }
    });

    app.chips.register('chip-menuitem', {
        is: 'a',
        attributes: ['icon', 'label', 'href'],
        view: {
            icon1: {
                is: 'i',
                attributes: {className: '{icon}'}
            },
            label1: {
                is: 'label',
                attributes: {text: '{label}'}
            }
        }
    });
    
    app.chips.register('chip-user', {
        is: 'div',
        attributes: ['icon', 'nickname', 'name'],
        view: {
            icon1: {
                is: 'img',
                attributes: {src:'{icon}'}
            },
            nickname: {
                is: 'label',
                attributes: {text: '{nickname}'}
            },
            name: {
                is: 'label',
                attributes: {text: '{name}'}
            }
        }
    });
});

