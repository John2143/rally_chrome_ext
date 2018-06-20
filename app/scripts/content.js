"use strict";

console.log("Loaded on page");

// Polyfill Iterator for HTML Elements
HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

function fixExpandable() {
    console.log("fixing..");
    var elems = document.getElementsByTagName("sdvi-metadata-details");
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elem = _step.value;

            console.log(elem);
            elem.innerHTML = "b";
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

setInterval(fixExpandable, 1000);