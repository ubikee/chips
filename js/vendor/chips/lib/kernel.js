define(function (require) {
    return function (page) {
        return {
            page : page,
            boot: function () {
                console.log('kernel.boot()');
                this.page.init();
            },
            destroy: function () {
                console.log('kernel.destroy()');
                this.page.destroy();
            }
        };
    };
});