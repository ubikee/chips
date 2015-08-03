/* global React, require */
define([require, './lib/kernel', './lib/chips'],function (require, kernel, chips) {
    return function (page) {
        return {
            kernel : kernel(page),
            chips : chips()
        };
    };
});

