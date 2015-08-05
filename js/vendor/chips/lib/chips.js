/* global HTMLElement, React */
define(function () {
    return function () {
        return {
            register: function (tagName, chip) {

                var Element = React.createClass({
                    displayName: tagName,
                    getInitialState: function () {

                        var state = Object.assign({}, chip.model);
                        
                        // project attributes to model << REFACTOR
                        var _props = this.props;
                        Object.keys(state).forEach(function (key) {
                            var matches = state[key].match(/\{([^\}]+)\}(?![\S\s]*\1)/gi);
                            if (matches)
                                matches.forEach(function (match) {
                                    var m = match.slice(1, -1);
                                    state[key] = _props[m];
                                });
                        });
                        
                        return state;
                    },
                    componentWillMount: function () {
                        
                    },
                    render: function () {
                        
                        // project parent properties and state to children props
                        var props = Object.assign({}, this.props, this.state, {onChange: this.changeHandler});
                        var items = [];
                        var view = Object.assign({}, chip.view);
                        Object.keys(view).forEach(function (key) {
                            var item = view[key];
                            var attributes = Object.assign({}, item.attributes);
                            Object.keys(attributes).forEach(function (key) {
                                var matches = attributes[key].match(/\{([^\}]+)\}(?![\S\s]*\1)/gi);
                                if (matches)
                                    matches.forEach(function (match) {
                                        var m = match.slice(1, -1);
                                        attributes[key] = props[m];
                                    });
                            });
                            console.log(item.is+' :');
                            items.push(React.createElement(item.is, attributes, [attributes['text']]));
                        });
                        
                        items.push(this.state.text);
                        return (React.createElement(chip.is, props, items));
                    },
                    componentDidMount: function () {
                        console.log('React component did mount');
                    },
                    changeHandler: function (e) {
                        if (e.type === 'input')
                            this.setState({value: e.target.value});
                    }
                });

                var proto = Object.create(HTMLElement.prototype);

                proto.createdCallback = function () {
                    console.log('WC created callback');
                    // project HTMLElement attributes to chip attributes << REFACTOR
                    var attrs = {};
                    if (this.attributes) {
                        for (var i = 0; i < this.attributes.length; i++) {
                            var attributeName = this.attributes[i].name;
                            if (chip.attributes.indexOf(attributeName) >= 0)
                                attrs[attributeName] = this.attributes[i].value;
                            else
                                console.warn('Warning: the attribute ' + attributeName + ' is not published by tag ' + tagName);
                        }
                    }
                    // create React Element passing tag attributes to properties
                    this.element = React.createElement(Element, attrs);
                };

                proto.attachedCallback = function () {
                    console.log('WC attached callback');
                    // render React element
                    React.render(this.element, this);
                };

                proto.detachedCallback = function () {
                    // TODO:
                };

                proto.attributeChangedCallback = function (attrName, oldVal, newVal) {
                    console.log(attrName);
                };

                // register the new webcomponent
                document.registerElement(tagName, {prototype: proto});
            }
        };
    };
});