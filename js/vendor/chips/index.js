/* global React */
define([require, './lib/kernel', './lib/chips'],function (require, kernel, chips) {
    
    return function (page) {
        
        var ReactRenderer = {
            render : function (chip) { 
                var DIV = document.createElement(chip.is);
                React.render(React.DOM[chip.is](null, "Hello, world!"), DIV);
                chip.content.appendChild(DIV);
            }
        };
        
        return {
            kernel : kernel(page),
            chips : chips(ReactRenderer)
        };
    };
});

