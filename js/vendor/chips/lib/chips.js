/* global HTMLElement, React */
define(function() {
    return function () {
        return {
            register : function (tagName, chip) {
                
                var Element = React.createClass({
                    displayName : tagName,
                    render : function () {
                        
                        var props = {};
                        if (chip.model) {
                            props = Object.assign({}, chip.model, this.props);
                        }
                        
                        var items = [];
                        if (chip.view) {
                            Object.keys(chip.view).forEach(function (key) { 
                                var item = chip.view[key];
                                var itemProps = {};
                                if (item.model) {
                                    itemProps = Object.assign({},item.model, props);
                                }
                                items.push(React.createElement(item.is, itemProps));
                            });
                        }
                        
                        return (React.createElement(chip.is, props, items));
                    }
                });
                
                var proto = Object.create(HTMLElement.prototype);
                
                proto.createdCallback  = function () {
                    var attrs = {};
                    if (this.attributes) {
			for (var i=0; i < this.attributes.length; i++) {
                            attrs[this.attributes[i].name] = this.attributes[i].value;
			}
                    }
                    // create React Element passing tag attributes as properties
                    this.element = React.createElement(Element, attrs);
                };
                
                proto.attachedCallback = function () {
                    // render React element
                    React.render(this.element, this);
                };
                
                proto.detachedCallback = function () {
                    // TODO:
                };
                
                proto.attributeChangedCallback = function(attrName, oldVal, newVal) {
                    // TODO:
                };
               
                // register the new webcomponent
                document.registerElement(tagName, {prototype: proto});
            }
        };
    };
});