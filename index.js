var plainJSX = function (tagName, attributes) {
  'use strict';

  var children = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments, 2));

  if (typeof tagName !== 'string') {
    throw new Error('plain-jsx only renders regular HTML elements, not components');
  }

  var element = document.createElement(tagName);

  for (var name in attributes) {
    if (attributes.hasOwnProperty(name)) {
      element.setAttribute(name, attributes[name]);
    }
  }

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];

    if (child != null) {
      element.appendChild(
        child instanceof HTMLElement ?
          child :
          document.createTextNode(child)
      );
    }
  }

  return element;
};
