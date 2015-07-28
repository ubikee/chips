define(function() {
    return function (renderer) {
        return {
            register : function (tagName, chip) {
                
                var proto = Object.create(HTMLElement.prototype);
                
                proto.createdCallback  = function () { 
                    chip.content = this.createShadowRoot();
                };
                proto.attachedCallback = function () {
                    renderer.render(chip);
                };
                proto.detachedCallback = function () {
                    // TODO:
                };
                proto.attributeChangedCallback = function(attrName, oldVal, newVal) {
                    //TODO:
                };
                
                for (var m in chip) { proto[m] = chip[m]; }
                document.registerElement(tagName, {prototype: proto});
            }
        };
    };
});