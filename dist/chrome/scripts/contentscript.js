/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jsonFormatterJs = __webpack_require__(8);

var _jsonFormatterJs2 = _interopRequireDefault(_jsonFormatterJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Loaded on page");

// Polyfill Iterator for HTML Elements
// Enable chromereload by uncommenting this line:
//import 'chromereload/devonly'

HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

var cache = [];
var GET = function GET(url) {
    if (cache[url]) return cache[url];
    console.log("req");
    return cache[url] = new Promise(function (resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(xhttp.responseText);
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    });
};

var formatted = [];
function fixExpandable() {
    var elems = document.getElementsByTagName("sdvi-metadata-details");

    var _loop = function _loop(elem) {

        var parentElem = elem;
        while (parentElem.tagName !== "LI") {
            parentElem = parentElem.parentElement;
        }var movieID = parentElem.id;

        if (formatted.includes(movieID)) return "continue";
        formatted.push(movieID);

        var req = window.location.origin + "/api/v2/movies/" + movieID + "/metadata";

        var par = elem.parentElement;
        elem.innerHTML = "Loading";

        GET(req).then(function (res) {
            var betterNames = {
                Workflow: "WORKFLOW_METADATA",
                Metadata: "METADATA",
                AnalyzeInfo: "ANALYZE_INFO"
            };
            var json = JSON.parse(res);
            var json2 = {};
            json = json.data.forEach(function (x) {
                return json2[betterNames[x.id]] = x.attributes.metadata;
            });
            var formatter = new _jsonFormatterJs2.default(json2, 2, {
                hoverPreviewEnabled: true,
                hoverPreviewArrayCount: 10,
                hoverPreviewFieldCount: 5,
                theme: '',
                animateOpen: false,
                animateClose: false,
                useToJSON: true
            });

            elem.innerHTML = "";
            elem.appendChild(formatter.render());
            par.style = "font-size: 100%; white-space: nowrap;";
        });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elem = _step.value;

            var _ret = _loop(elem);

            if (_ret === "continue") continue;
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

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "dist", __webpack_require__(__webpack_require__.s = 6);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_1__style_less__ = __webpack_require__(4), DATE_STRING_REGEX = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_less__), 
    /(^\d{1,4}[\.|\\\/|-]\d{1,2}[\.|\\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/), PARTIAL_DATE_REGEX = /\d{2}:\d{2}:\d{2} GMT-\d{4}/, JSON_DATE_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/, requestAnimationFrame = window.requestAnimationFrame || function(cb) {
        return cb(), 0;
    }, _defaultConfig = {
        hoverPreviewEnabled: !1,
        hoverPreviewArrayCount: 100,
        hoverPreviewFieldCount: 5,
        animateOpen: !0,
        animateClose: !0,
        theme: null,
        useToJSON: !0,
        sortPropertiesBy: null
    }, JSONFormatter = function() {
        function JSONFormatter(json, open, config, key) {
            void 0 === open && (open = 1), void 0 === config && (config = _defaultConfig), this.json = json, 
            this.open = open, this.config = config, this.key = key, this._isOpen = null, void 0 === this.config.hoverPreviewEnabled && (this.config.hoverPreviewEnabled = _defaultConfig.hoverPreviewEnabled), 
            void 0 === this.config.hoverPreviewArrayCount && (this.config.hoverPreviewArrayCount = _defaultConfig.hoverPreviewArrayCount), 
            void 0 === this.config.hoverPreviewFieldCount && (this.config.hoverPreviewFieldCount = _defaultConfig.hoverPreviewFieldCount), 
            void 0 === this.config.useToJSON && (this.config.useToJSON = _defaultConfig.useToJSON);
        }
        return Object.defineProperty(JSONFormatter.prototype, "isOpen", {
            get: function() {
                return null !== this._isOpen ? this._isOpen : this.open > 0;
            },
            set: function(value) {
                this._isOpen = value;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isDate", {
            get: function() {
                return this.json instanceof Date || "string" === this.type && (DATE_STRING_REGEX.test(this.json) || JSON_DATE_REGEX.test(this.json) || PARTIAL_DATE_REGEX.test(this.json));
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isUrl", {
            get: function() {
                return "string" === this.type && 0 === this.json.indexOf("http");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isArray", {
            get: function() {
                return Array.isArray(this.json);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isObject", {
            get: function() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.a)(this.json);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isEmptyObject", {
            get: function() {
                return !this.keys.length && !this.isArray;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isEmpty", {
            get: function() {
                return this.isEmptyObject || this.keys && !this.keys.length && this.isArray;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "useToJSON", {
            get: function() {
                return this.config.useToJSON && "stringifiable" === this.type;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "hasKey", {
            get: function() {
                return void 0 !== this.key;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "constructorName", {
            get: function() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.b)(this.json);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "type", {
            get: function() {
                return null === this.json ? "null" : this.config.useToJSON && this.json && this.json.toJSON ? "stringifiable" : typeof this.json;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "keys", {
            get: function() {
                if (this.isObject) {
                    var keys = Object.keys(this.json).map(function(key) {
                        return key || '""';
                    });
                    return !this.isArray && this.config.sortPropertiesBy ? keys.sort(this.config.sortPropertiesBy) : keys;
                }
                return [];
            },
            enumerable: !0,
            configurable: !0
        }), JSONFormatter.prototype.toggleOpen = function() {
            this.isOpen = !this.isOpen, this.element && (this.isOpen ? this.appendChildren(this.config.animateOpen) : this.removeChildren(this.config.animateClose), 
            this.element.classList.toggle(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("open")));
        }, JSONFormatter.prototype.openAtDepth = function(depth) {
            void 0 === depth && (depth = 1), depth < 0 || (this.open = depth, this.isOpen = 0 !== depth, 
            this.element && (this.removeChildren(!1), 0 === depth ? this.element.classList.remove(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("open")) : (this.appendChildren(this.config.animateOpen), 
            this.element.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("open")))));
        }, JSONFormatter.prototype.getInlinepreview = function() {
            var _this = this;
            if (this.isArray) return this.json.length > this.config.hoverPreviewArrayCount ? "Array[" + this.json.length + "]" : "[" + this.json.map(__WEBPACK_IMPORTED_MODULE_0__helpers__.d).join(", ") + "]";
            var keys = this.keys, narrowKeys = keys.slice(0, this.config.hoverPreviewFieldCount), kvs = narrowKeys.map(function(key) {
                return key + ":" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)(_this.type, _this.json[key]);
            }), ellipsis = keys.length >= this.config.hoverPreviewFieldCount ? "…" : "";
            return "{" + kvs.join(", ") + ellipsis + "}";
        }, JSONFormatter.prototype.render = function() {
            this.element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("div", "row");
            var togglerLink = this.isObject ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("a", "toggler-link") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span");
            if (this.isObject && !this.useToJSON && togglerLink.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "toggler")), 
            this.hasKey && togglerLink.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "key", this.key + ":")), 
            this.isObject && !this.useToJSON) {
                var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "value"), objectWrapperSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span"), constructorName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "constructor-name", this.constructorName);
                if (objectWrapperSpan.appendChild(constructorName), this.isArray) {
                    var arrayWrapperSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span");
                    arrayWrapperSpan.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "bracket", "[")), 
                    arrayWrapperSpan.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "number", this.json.length)), 
                    arrayWrapperSpan.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "bracket", "]")), 
                    objectWrapperSpan.appendChild(arrayWrapperSpan);
                }
                value.appendChild(objectWrapperSpan), togglerLink.appendChild(value);
            } else {
                var value = this.isUrl ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("a") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span");
                value.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)(this.type)), 
                this.isDate && value.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("date")), 
                this.isUrl && (value.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("url")), 
                value.setAttribute("href", this.json));
                var valuePreview = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)(this.type, this.json, this.useToJSON ? this.json.toJSON() : this.json);
                value.appendChild(document.createTextNode(valuePreview)), togglerLink.appendChild(value);
            }
            if (this.isObject && this.config.hoverPreviewEnabled) {
                var preview = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("span", "preview-text");
                preview.appendChild(document.createTextNode(this.getInlinepreview())), togglerLink.appendChild(preview);
            }
            var children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)("div", "children");
            return this.isObject && children.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("object")), 
            this.isArray && children.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("array")), 
            this.isEmpty && children.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("empty")), 
            this.config && this.config.theme && this.element.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)(this.config.theme)), 
            this.isOpen && this.element.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("open")), 
            this.element.appendChild(togglerLink), this.element.appendChild(children), this.isObject && this.isOpen && this.appendChildren(), 
            this.isObject && !this.useToJSON && togglerLink.addEventListener("click", this.toggleOpen.bind(this)), 
            this.element;
        }, JSONFormatter.prototype.appendChildren = function(animated) {
            var _this = this;
            void 0 === animated && (animated = !1);
            var children = this.element.querySelector("div." + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("children"));
            if (children && !this.isEmpty) if (animated) {
                var index_1 = 0, addAChild_1 = function() {
                    var key = _this.keys[index_1], formatter = new JSONFormatter(_this.json[key], _this.open - 1, _this.config, key);
                    children.appendChild(formatter.render()), (index_1 += 1) < _this.keys.length && (index_1 > 10 ? addAChild_1() : requestAnimationFrame(addAChild_1));
                };
                requestAnimationFrame(addAChild_1);
            } else this.keys.forEach(function(key) {
                var formatter = new JSONFormatter(_this.json[key], _this.open - 1, _this.config, key);
                children.appendChild(formatter.render());
            });
        }, JSONFormatter.prototype.removeChildren = function(animated) {
            void 0 === animated && (animated = !1);
            var childrenElement = this.element.querySelector("div." + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)("children"));
            if (animated) {
                var childrenRemoved_1 = 0, removeAChild_1 = function() {
                    childrenElement && childrenElement.children.length && (childrenElement.removeChild(childrenElement.children[0]), 
                    childrenRemoved_1 += 1, childrenRemoved_1 > 10 ? removeAChild_1() : requestAnimationFrame(removeAChild_1));
                };
                requestAnimationFrame(removeAChild_1);
            } else childrenElement && (childrenElement.innerHTML = "");
        }, JSONFormatter;
    }();
    __webpack_exports__.default = JSONFormatter;
}, function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(2)(), exports.push([ module.i, '.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 2rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.5rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler:before {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  transform: translateX(-0.7rem);\n  content: "+";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  /*transform: translateX(-1rem) rotate(90deg);*/\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.5rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:before {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  transform: translateX(-0.7rem);\n  content: "+";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  /*transform: translateX(-1rem) rotate(90deg);*/\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n', "" ]);
}, function(module, exports) {
    module.exports = function() {
        var list = [];
        return list.toString = function() {
            for (var result = [], i = 0; i < this.length; i++) {
                var item = this[i];
                item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1]);
            }
            return result.join("");
        }, list.i = function(modules, mediaQuery) {
            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0);
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                list.push(item));
            }
        }, list;
    };
}, function(module, exports) {
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
            } else {
                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function listToStyles(list) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                css: css,
                media: media,
                sourceMap: sourceMap
            };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            });
        }
        return styles;
    }
    function insertStyleElement(options, styleElement) {
        var head = getHeadElement(), lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : head.appendChild(styleElement) : head.insertBefore(styleElement, head.firstChild), 
        styleElementsInsertedAtTop.push(styleElement); else {
            if ("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            head.appendChild(styleElement);
        }
    }
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        idx >= 0 && styleElementsInsertedAtTop.splice(idx, 1);
    }
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        return styleElement.type = "text/css", insertStyleElement(options, styleElement), 
        styleElement;
    }
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        return linkElement.rel = "stylesheet", insertStyleElement(options, linkElement), 
        linkElement;
    }
    function addStyle(obj, options) {
        var styleElement, update, remove;
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options)), 
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = createLinkElement(options), 
        update = updateLink.bind(null, styleElement), remove = function() {
            removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href);
        }) : (styleElement = createStyleElement(options), update = applyToTag.bind(null, styleElement), 
        remove = function() {
            removeStyleElement(styleElement);
        });
        return update(obj), function(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
            childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css, media = obj.media;
        if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
            for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    function updateLink(linkElement, obj) {
        var css = obj.css, sourceMap = obj.sourceMap;
        sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
        var blob = new Blob([ css ], {
            type: "text/css"
        }), oldSrc = linkElement.href;
        linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
    }
    var stylesInDom = {}, memoize = function(fn) {
        var memo;
        return function() {
            return void 0 === memo && (memo = fn.apply(this, arguments)), memo;
        };
    }, isOldIE = memoize(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
    }), getHeadElement = memoize(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [];
    module.exports = function(list, options) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        options = options || {}, void 0 === options.singleton && (options.singleton = isOldIE()), 
        void 0 === options.insertAt && (options.insertAt = "bottom");
        var styles = listToStyles(list);
        return addStylesToDom(styles, options), function(newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                domStyle.refs--, mayRemove.push(domStyle);
            }
            if (newList) {
                addStylesToDom(listToStyles(newList), options);
            }
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (0 === domStyle.refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    var replaceText = function() {
        var textStore = [];
        return function(index, replacement) {
            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
        };
    }();
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(1);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
    __webpack_require__(3)(content, {});
    content.locals && (module.exports = content.locals);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function escapeString(str) {
        return str.replace('"', '"');
    }
    function isObject(value) {
        var type = typeof value;
        return !!value && "object" == type;
    }
    function getObjectName(object) {
        if (void 0 === object) return "";
        if (null === object) return "Object";
        if ("object" == typeof object && !object.constructor) return "Object";
        var funcNameRegex = /function ([^(]*)/, results = funcNameRegex.exec(object.constructor.toString());
        return results && results.length > 1 ? results[1] : "";
    }
    function getValuePreview(type, object, value) {
        return "null" === type || "undefined" === type ? type : ("string" !== type && "stringifiable" !== type || (value = '"' + escapeString(value) + '"'), 
        "function" === type ? object.toString().replace(/[\r\n]/g, "").replace(/\{.*\}/, "") + "{…}" : value);
    }
    function getPreview(type, object) {
        var value = "";
        return isObject(object) ? (value = getObjectName(object), Array.isArray(object) && (value += "[" + object.length + "]")) : value = getValuePreview(type, object, object), 
        value;
    }
    function cssClass(className) {
        return "json-formatter-" + className;
    }
    function createElement(type, className, content) {
        var el = document.createElement(type);
        return className && el.classList.add(cssClass(className)), void 0 !== content && (content instanceof Node ? el.appendChild(content) : el.appendChild(document.createTextNode(String(content)))), 
        el;
    }
    __webpack_exports__.a = isObject, __webpack_exports__.b = getObjectName, __webpack_exports__.f = getValuePreview, 
    __webpack_exports__.d = getPreview, __webpack_exports__.c = cssClass, __webpack_exports__.e = createElement;
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(0);
} ]);
//# sourceMappingURL=json-formatter.js.map

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTBlNjMzMjg1NDMyNDQwNTViODQiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY29udGVudHNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNvbi1mb3JtYXR0ZXItanMvZGlzdC9qc29uLWZvcm1hdHRlci5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiSFRNTENvbGxlY3Rpb24iLCJwcm90b3R5cGUiLCJTeW1ib2wiLCJpdGVyYXRvciIsIkFycmF5IiwiY2FjaGUiLCJHRVQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhodHRwIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInNlbmQiLCJmb3JtYXR0ZWQiLCJmaXhFeHBhbmRhYmxlIiwiZWxlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZWxlbSIsInBhcmVudEVsZW0iLCJ0YWdOYW1lIiwicGFyZW50RWxlbWVudCIsIm1vdmllSUQiLCJpZCIsImluY2x1ZGVzIiwicHVzaCIsInJlcSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicGFyIiwiaW5uZXJIVE1MIiwidGhlbiIsImJldHRlck5hbWVzIiwiV29ya2Zsb3ciLCJNZXRhZGF0YSIsIkFuYWx5emVJbmZvIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlcyIsImpzb24yIiwiZGF0YSIsImZvckVhY2giLCJ4IiwiYXR0cmlidXRlcyIsIm1ldGFkYXRhIiwiZm9ybWF0dGVyIiwiSlNPTkZvcm1hdHRlciIsImhvdmVyUHJldmlld0VuYWJsZWQiLCJob3ZlclByZXZpZXdBcnJheUNvdW50IiwiaG92ZXJQcmV2aWV3RmllbGRDb3VudCIsInRoZW1lIiwiYW5pbWF0ZU9wZW4iLCJhbmltYXRlQ2xvc2UiLCJ1c2VU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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IscUJBQXFCLGtDQUFrQztBQUN2RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxT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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0QsMEMiLCJmaWxlIjoiY29udGVudHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEwZTYzMzI4NTQzMjQ0MDU1Yjg0IiwiLy8gRW5hYmxlIGNocm9tZXJlbG9hZCBieSB1bmNvbW1lbnRpbmcgdGhpcyBsaW5lOlxuLy9pbXBvcnQgJ2Nocm9tZXJlbG9hZC9kZXZvbmx5J1xuXG5pbXBvcnQgSlNPTkZvcm1hdHRlciBmcm9tIFwianNvbi1mb3JtYXR0ZXItanNcIlxuXG5jb25zb2xlLmxvZyhcIkxvYWRlZCBvbiBwYWdlXCIpO1xuXG4vLyBQb2x5ZmlsbCBJdGVyYXRvciBmb3IgSFRNTCBFbGVtZW50c1xuSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBBcnJheS5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcblxubGV0IGNhY2hlID0gW107XG5jb25zdCBHRVQgPSB1cmwgPT4ge1xuICAgIGlmKGNhY2hlW3VybF0pIHJldHVybiBjYWNoZVt1cmxdO1xuICAgIGNvbnNvbGUubG9nKFwicmVxXCIpO1xuICAgIHJldHVybiBjYWNoZVt1cmxdID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgeGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHR0cC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHR0cC5vcGVuKFwiR0VUXCIsIHVybCk7XG4gICAgICAgIHhodHRwLnNlbmQoKTtcbiAgICB9KTtcbn07XG5cbmxldCBmb3JtYXR0ZWQgPSBbXVxuZnVuY3Rpb24gZml4RXhwYW5kYWJsZSgpe1xuICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2R2aS1tZXRhZGF0YS1kZXRhaWxzXCIpO1xuICAgIGZvcihsZXQgZWxlbSBvZiBlbGVtcyl7XG5cbiAgICAgICAgbGV0IHBhcmVudEVsZW0gPSBlbGVtXG4gICAgICAgIHdoaWxlKHBhcmVudEVsZW0udGFnTmFtZSAhPT0gXCJMSVwiKSBwYXJlbnRFbGVtID0gcGFyZW50RWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBtb3ZpZUlEID0gcGFyZW50RWxlbS5pZDtcblxuICAgICAgICBpZihmb3JtYXR0ZWQuaW5jbHVkZXMobW92aWVJRCkpIGNvbnRpbnVlO1xuICAgICAgICBmb3JtYXR0ZWQucHVzaChtb3ZpZUlEKTtcblxuICAgICAgICBsZXQgcmVxID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXBpL3YyL21vdmllcy8ke21vdmllSUR9L21ldGFkYXRhYDtcblxuICAgICAgICBsZXQgcGFyID0gZWxlbS5wYXJlbnRFbGVtZW50XG4gICAgICAgIGVsZW0uaW5uZXJIVE1MID0gXCJMb2FkaW5nXCI7XG5cbiAgICAgICAgR0VUKHJlcSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgbGV0IGJldHRlck5hbWVzID0ge1xuICAgICAgICAgICAgICAgIFdvcmtmbG93OiBcIldPUktGTE9XX01FVEFEQVRBXCIsXG4gICAgICAgICAgICAgICAgTWV0YWRhdGE6IFwiTUVUQURBVEFcIixcbiAgICAgICAgICAgICAgICBBbmFseXplSW5mbzogXCJBTkFMWVpFX0lORk9cIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICAgICAgbGV0IGpzb24yID0ge31cbiAgICAgICAgICAgIGpzb24gPSBqc29uLmRhdGFcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCh4ID0+IGpzb24yW2JldHRlck5hbWVzW3guaWRdXSA9IHguYXR0cmlidXRlcy5tZXRhZGF0YSlcbiAgICAgICAgICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcihqc29uMiwgMiwge1xuICAgICAgICAgICAgICAgIGhvdmVyUHJldmlld0VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaG92ZXJQcmV2aWV3QXJyYXlDb3VudDogMTAsXG4gICAgICAgICAgICAgICAgaG92ZXJQcmV2aWV3RmllbGRDb3VudDogNSxcbiAgICAgICAgICAgICAgICB0aGVtZTogJycsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZU9wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVDbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdXNlVG9KU09OOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGZvcm1hdHRlci5yZW5kZXIoKSlcbiAgICAgICAgICAgIHBhci5zdHlsZSA9IFwiZm9udC1zaXplOiAxMDAlOyB3aGl0ZS1zcGFjZTogbm93cmFwO1wiXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuc2V0SW50ZXJ2YWwoZml4RXhwYW5kYWJsZSwgMTAwMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jb250ZW50c2NyaXB0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGVzKSB7XG4gICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgICAgICBpZiAoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gICAgICAgICAgICBpOiBtb2R1bGVJZCxcbiAgICAgICAgICAgIGw6ICExLFxuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pLCBcbiAgICAgICAgbW9kdWxlLmwgPSAhMCwgbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuICAgIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4gICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXMsIF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXMsIFxuICAgIF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICB9KTtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICB9IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgXCJhXCIsIGdldHRlciksIGdldHRlcjtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0XCIsIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG59KFsgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRzX18sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgIH0pO1xuICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNSksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fc3R5bGVfbGVzc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgREFURV9TVFJJTkdfUkVHRVggPSAoX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fc3R5bGVfbGVzc19fKSwgXG4gICAgLyheXFxkezEsNH1bXFwufFxcXFxcXC98LV1cXGR7MSwyfVtcXC58XFxcXFxcL3wtXVxcZHsxLDR9KShcXHMqKD86MD9bMS05XTpbMC01XXwxKD89WzAxMl0pXFxkOlswLTVdKVxcZFxccypbYXBdbSk/JC8pLCBQQVJUSUFMX0RBVEVfUkVHRVggPSAvXFxkezJ9OlxcZHsyfTpcXGR7Mn0gR01ULVxcZHs0fS8sIEpTT05fREFURV9SRUdFWCA9IC9cXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn06XFxkezJ9OlxcZHsyfS5cXGR7M31aLywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYikge1xuICAgICAgICByZXR1cm4gY2IoKSwgMDtcbiAgICB9LCBfZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgaG92ZXJQcmV2aWV3RW5hYmxlZDogITEsXG4gICAgICAgIGhvdmVyUHJldmlld0FycmF5Q291bnQ6IDEwMCxcbiAgICAgICAgaG92ZXJQcmV2aWV3RmllbGRDb3VudDogNSxcbiAgICAgICAgYW5pbWF0ZU9wZW46ICEwLFxuICAgICAgICBhbmltYXRlQ2xvc2U6ICEwLFxuICAgICAgICB0aGVtZTogbnVsbCxcbiAgICAgICAgdXNlVG9KU09OOiAhMCxcbiAgICAgICAgc29ydFByb3BlcnRpZXNCeTogbnVsbFxuICAgIH0sIEpTT05Gb3JtYXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gSlNPTkZvcm1hdHRlcihqc29uLCBvcGVuLCBjb25maWcsIGtleSkge1xuICAgICAgICAgICAgdm9pZCAwID09PSBvcGVuICYmIChvcGVuID0gMSksIHZvaWQgMCA9PT0gY29uZmlnICYmIChjb25maWcgPSBfZGVmYXVsdENvbmZpZyksIHRoaXMuanNvbiA9IGpzb24sIFxuICAgICAgICAgICAgdGhpcy5vcGVuID0gb3BlbiwgdGhpcy5jb25maWcgPSBjb25maWcsIHRoaXMua2V5ID0ga2V5LCB0aGlzLl9pc09wZW4gPSBudWxsLCB2b2lkIDAgPT09IHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0VuYWJsZWQgJiYgKHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0VuYWJsZWQgPSBfZGVmYXVsdENvbmZpZy5ob3ZlclByZXZpZXdFbmFibGVkKSwgXG4gICAgICAgICAgICB2b2lkIDAgPT09IHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0FycmF5Q291bnQgJiYgKHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0FycmF5Q291bnQgPSBfZGVmYXVsdENvbmZpZy5ob3ZlclByZXZpZXdBcnJheUNvdW50KSwgXG4gICAgICAgICAgICB2b2lkIDAgPT09IHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0ZpZWxkQ291bnQgJiYgKHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0ZpZWxkQ291bnQgPSBfZGVmYXVsdENvbmZpZy5ob3ZlclByZXZpZXdGaWVsZENvdW50KSwgXG4gICAgICAgICAgICB2b2lkIDAgPT09IHRoaXMuY29uZmlnLnVzZVRvSlNPTiAmJiAodGhpcy5jb25maWcudXNlVG9KU09OID0gX2RlZmF1bHRDb25maWcudXNlVG9KU09OKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzT3BlblwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9PSB0aGlzLl9pc09wZW4gPyB0aGlzLl9pc09wZW4gOiB0aGlzLm9wZW4gPiAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJpc0RhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5qc29uIGluc3RhbmNlb2YgRGF0ZSB8fCBcInN0cmluZ1wiID09PSB0aGlzLnR5cGUgJiYgKERBVEVfU1RSSU5HX1JFR0VYLnRlc3QodGhpcy5qc29uKSB8fCBKU09OX0RBVEVfUkVHRVgudGVzdCh0aGlzLmpzb24pIHx8IFBBUlRJQUxfREFURV9SRUdFWC50ZXN0KHRoaXMuanNvbikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzVXJsXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT09IHRoaXMudHlwZSAmJiAwID09PSB0aGlzLmpzb24uaW5kZXhPZihcImh0dHBcIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiaXNBcnJheVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuanNvbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiaXNPYmplY3RcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmEpKHRoaXMuanNvbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiaXNFbXB0eU9iamVjdFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5rZXlzLmxlbmd0aCAmJiAhdGhpcy5pc0FycmF5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzRW1wdHlcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc0VtcHR5T2JqZWN0IHx8IHRoaXMua2V5cyAmJiAhdGhpcy5rZXlzLmxlbmd0aCAmJiB0aGlzLmlzQXJyYXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwidXNlVG9KU09OXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnVzZVRvSlNPTiAmJiBcInN0cmluZ2lmaWFibGVcIiA9PT0gdGhpcy50eXBlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImhhc0tleVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IHRoaXMua2V5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImNvbnN0cnVjdG9yTmFtZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYikodGhpcy5qc29uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJ0eXBlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgPT09IHRoaXMuanNvbiA/IFwibnVsbFwiIDogdGhpcy5jb25maWcudXNlVG9KU09OICYmIHRoaXMuanNvbiAmJiB0aGlzLmpzb24udG9KU09OID8gXCJzdHJpbmdpZmlhYmxlXCIgOiB0eXBlb2YgdGhpcy5qc29uO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImtleXNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuanNvbikubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSB8fCAnXCJcIic7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNBcnJheSAmJiB0aGlzLmNvbmZpZy5zb3J0UHJvcGVydGllc0J5ID8ga2V5cy5zb3J0KHRoaXMuY29uZmlnLnNvcnRQcm9wZXJ0aWVzQnkpIDoga2V5cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUudG9nZ2xlT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW4sIHRoaXMuZWxlbWVudCAmJiAodGhpcy5pc09wZW4gPyB0aGlzLmFwcGVuZENoaWxkcmVuKHRoaXMuY29uZmlnLmFuaW1hdGVPcGVuKSA6IHRoaXMucmVtb3ZlQ2hpbGRyZW4odGhpcy5jb25maWcuYW5pbWF0ZUNsb3NlKSwgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJvcGVuXCIpKSk7XG4gICAgICAgIH0sIEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLm9wZW5BdERlcHRoID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZGVwdGggJiYgKGRlcHRoID0gMSksIGRlcHRoIDwgMCB8fCAodGhpcy5vcGVuID0gZGVwdGgsIHRoaXMuaXNPcGVuID0gMCAhPT0gZGVwdGgsIFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICYmICh0aGlzLnJlbW92ZUNoaWxkcmVuKCExKSwgMCA9PT0gZGVwdGggPyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJvcGVuXCIpKSA6ICh0aGlzLmFwcGVuZENoaWxkcmVuKHRoaXMuY29uZmlnLmFuaW1hdGVPcGVuKSwgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJvcGVuXCIpKSkpKTtcbiAgICAgICAgfSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUuZ2V0SW5saW5lcHJldmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkpIHJldHVybiB0aGlzLmpzb24ubGVuZ3RoID4gdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3QXJyYXlDb3VudCA/IFwiQXJyYXlbXCIgKyB0aGlzLmpzb24ubGVuZ3RoICsgXCJdXCIgOiBcIltcIiArIHRoaXMuanNvbi5tYXAoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZCkuam9pbihcIiwgXCIpICsgXCJdXCI7XG4gICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMua2V5cywgbmFycm93S2V5cyA9IGtleXMuc2xpY2UoMCwgdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RmllbGRDb3VudCksIGt2cyA9IG5hcnJvd0tleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyBcIjpcIiArIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5kKShfdGhpcy50eXBlLCBfdGhpcy5qc29uW2tleV0pO1xuICAgICAgICAgICAgfSksIGVsbGlwc2lzID0ga2V5cy5sZW5ndGggPj0gdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RmllbGRDb3VudCA/IFwi4oCmXCIgOiBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIFwie1wiICsga3ZzLmpvaW4oXCIsIFwiKSArIGVsbGlwc2lzICsgXCJ9XCI7XG4gICAgICAgIH0sIEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwiZGl2XCIsIFwicm93XCIpO1xuICAgICAgICAgICAgdmFyIHRvZ2dsZXJMaW5rID0gdGhpcy5pc09iamVjdCA/IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcImFcIiwgXCJ0b2dnbGVyLWxpbmtcIikgOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QgJiYgIXRoaXMudXNlVG9KU09OICYmIHRvZ2dsZXJMaW5rLmFwcGVuZENoaWxkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIiwgXCJ0b2dnbGVyXCIpKSwgXG4gICAgICAgICAgICB0aGlzLmhhc0tleSAmJiB0b2dnbGVyTGluay5hcHBlbmRDaGlsZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIsIFwia2V5XCIsIHRoaXMua2V5ICsgXCI6XCIpKSwgXG4gICAgICAgICAgICB0aGlzLmlzT2JqZWN0ICYmICF0aGlzLnVzZVRvSlNPTikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIiwgXCJ2YWx1ZVwiKSwgb2JqZWN0V3JhcHBlclNwYW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIpLCBjb25zdHJ1Y3Rvck5hbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIsIFwiY29uc3RydWN0b3ItbmFtZVwiLCB0aGlzLmNvbnN0cnVjdG9yTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdFdyYXBwZXJTcGFuLmFwcGVuZENoaWxkKGNvbnN0cnVjdG9yTmFtZSksIHRoaXMuaXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXJyYXlXcmFwcGVyU3BhbiA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIik7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5V3JhcHBlclNwYW4uYXBwZW5kQ2hpbGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiLCBcImJyYWNrZXRcIiwgXCJbXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgIGFycmF5V3JhcHBlclNwYW4uYXBwZW5kQ2hpbGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiLCBcIm51bWJlclwiLCB0aGlzLmpzb24ubGVuZ3RoKSksIFxuICAgICAgICAgICAgICAgICAgICBhcnJheVdyYXBwZXJTcGFuLmFwcGVuZENoaWxkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIiwgXCJicmFja2V0XCIsIFwiXVwiKSksIFxuICAgICAgICAgICAgICAgICAgICBvYmplY3RXcmFwcGVyU3Bhbi5hcHBlbmRDaGlsZChhcnJheVdyYXBwZXJTcGFuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUuYXBwZW5kQ2hpbGQob2JqZWN0V3JhcHBlclNwYW4pLCB0b2dnbGVyTGluay5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuaXNVcmwgPyBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJhXCIpIDogX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKSh0aGlzLnR5cGUpKSwgXG4gICAgICAgICAgICAgICAgdGhpcy5pc0RhdGUgJiYgdmFsdWUuY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJkYXRlXCIpKSwgXG4gICAgICAgICAgICAgICAgdGhpcy5pc1VybCAmJiAodmFsdWUuY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJ1cmxcIikpLCBcbiAgICAgICAgICAgICAgICB2YWx1ZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHRoaXMuanNvbikpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByZXZpZXcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZikodGhpcy50eXBlLCB0aGlzLmpzb24sIHRoaXMudXNlVG9KU09OID8gdGhpcy5qc29uLnRvSlNPTigpIDogdGhpcy5qc29uKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZVByZXZpZXcpKSwgdG9nZ2xlckxpbmsuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPYmplY3QgJiYgdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aWV3ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiLCBcInByZXZpZXctdGV4dFwiKTtcbiAgICAgICAgICAgICAgICBwcmV2aWV3LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuZ2V0SW5saW5lcHJldmlldygpKSksIHRvZ2dsZXJMaW5rLmFwcGVuZENoaWxkKHByZXZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwiZGl2XCIsIFwiY2hpbGRyZW5cIik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc09iamVjdCAmJiBjaGlsZHJlbi5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcIm9iamVjdFwiKSksIFxuICAgICAgICAgICAgdGhpcy5pc0FycmF5ICYmIGNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmMpKFwiYXJyYXlcIikpLCBcbiAgICAgICAgICAgIHRoaXMuaXNFbXB0eSAmJiBjaGlsZHJlbi5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcImVtcHR5XCIpKSwgXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy50aGVtZSAmJiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykodGhpcy5jb25maWcudGhlbWUpKSwgXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiAmJiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJvcGVuXCIpKSwgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodG9nZ2xlckxpbmspLCB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pLCB0aGlzLmlzT2JqZWN0ICYmIHRoaXMuaXNPcGVuICYmIHRoaXMuYXBwZW5kQ2hpbGRyZW4oKSwgXG4gICAgICAgICAgICB0aGlzLmlzT2JqZWN0ICYmICF0aGlzLnVzZVRvSlNPTiAmJiB0b2dnbGVyTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcykpLCBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUuYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihhbmltYXRlZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gYW5pbWF0ZWQgJiYgKGFuaW1hdGVkID0gITEpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJjaGlsZHJlblwiKSk7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4gJiYgIXRoaXMuaXNFbXB0eSkgaWYgKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4XzEgPSAwLCBhZGRBQ2hpbGRfMSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX3RoaXMua2V5c1tpbmRleF8xXSwgZm9ybWF0dGVyID0gbmV3IEpTT05Gb3JtYXR0ZXIoX3RoaXMuanNvbltrZXldLCBfdGhpcy5vcGVuIC0gMSwgX3RoaXMuY29uZmlnLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5hcHBlbmRDaGlsZChmb3JtYXR0ZXIucmVuZGVyKCkpLCAoaW5kZXhfMSArPSAxKSA8IF90aGlzLmtleXMubGVuZ3RoICYmIChpbmRleF8xID4gMTAgPyBhZGRBQ2hpbGRfMSgpIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFkZEFDaGlsZF8xKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWRkQUNoaWxkXzEpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMua2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcihfdGhpcy5qc29uW2tleV0sIF90aGlzLm9wZW4gLSAxLCBfdGhpcy5jb25maWcsIGtleSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uYXBwZW5kQ2hpbGQoZm9ybWF0dGVyLnJlbmRlcigpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBKU09ORm9ybWF0dGVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGFuaW1hdGVkICYmIChhbmltYXRlZCA9ICExKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbkVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcImNoaWxkcmVuXCIpKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRlZCkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlblJlbW92ZWRfMSA9IDAsIHJlbW92ZUFDaGlsZF8xID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuRWxlbWVudCAmJiBjaGlsZHJlbkVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoICYmIChjaGlsZHJlbkVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRyZW5FbGVtZW50LmNoaWxkcmVuWzBdKSwgXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuUmVtb3ZlZF8xICs9IDEsIGNoaWxkcmVuUmVtb3ZlZF8xID4gMTAgPyByZW1vdmVBQ2hpbGRfMSgpIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbW92ZUFDaGlsZF8xKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVtb3ZlQUNoaWxkXzEpO1xuICAgICAgICAgICAgfSBlbHNlIGNoaWxkcmVuRWxlbWVudCAmJiAoY2hpbGRyZW5FbGVtZW50LmlubmVySFRNTCA9IFwiXCIpO1xuICAgICAgICB9LCBKU09ORm9ybWF0dGVyO1xuICAgIH0oKTtcbiAgICBfX3dlYnBhY2tfZXhwb3J0c19fLmRlZmF1bHQgPSBKU09ORm9ybWF0dGVyO1xufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSgpLCBleHBvcnRzLnB1c2goWyBtb2R1bGUuaSwgJy5qc29uLWZvcm1hdHRlci1yb3cge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyxcXG4uanNvbi1mb3JtYXR0ZXItcm93IGEsXFxuLmpzb24tZm9ybWF0dGVyLXJvdyBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItcm93IHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW4uanNvbi1mb3JtYXR0ZXItZW1wdHk6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW4uanNvbi1mb3JtYXR0ZXItZW1wdHkuanNvbi1mb3JtYXR0ZXItb2JqZWN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFwiTm8gcHJvcGVydGllc1wiO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eS5qc29uLWZvcm1hdHRlci1hcnJheTphZnRlciB7XFxuICBjb250ZW50OiBcIltdXCI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXN0cmluZyxcXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1zdHJpbmdpZmlhYmxlIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLW51bWJlciB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItYm9vbGVhbiB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1udWxsIHtcXG4gIGNvbG9yOiAjODU1QTAwO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci11bmRlZmluZWQge1xcbiAgY29sb3I6ICNjYTBiNjk7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWZ1bmN0aW9uIHtcXG4gIGNvbG9yOiAjRkYyMEVEO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXVybCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiBibHVlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1icmFja2V0IHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1rZXkge1xcbiAgY29sb3I6ICMwMDAwOEI7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXItbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXIge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci10b2dnbGVyOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC43cmVtKTtcXG4gIGNvbnRlbnQ6IFwiK1wiO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93ID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1pbjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdzpob3ZlciA+IGEgPiAuanNvbi1mb3JtYXR0ZXItcHJldmlldy10ZXh0IHtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdy5qc29uLWZvcm1hdHRlci1vcGVuID4gLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXItbGluayAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlcjphZnRlciB7XFxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSkgcm90YXRlKDkwZGVnKTsqL1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93Lmpzb24tZm9ybWF0dGVyLW9wZW4gPiAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW46YWZ0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93Lmpzb24tZm9ybWF0dGVyLW9wZW4gPiBhID4gLmpzb24tZm9ybWF0dGVyLXByZXZpZXctdGV4dCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93Lmpzb24tZm9ybWF0dGVyLW9wZW4uanNvbi1mb3JtYXR0ZXItZW1wdHk6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3csXFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IGEsXFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IGE6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXJvdyB7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eTphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5Lmpzb24tZm9ybWF0dGVyLW9iamVjdDphZnRlciB7XFxuICBjb250ZW50OiBcIk5vIHByb3BlcnRpZXNcIjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eS5qc29uLWZvcm1hdHRlci1hcnJheTphZnRlciB7XFxuICBjb250ZW50OiBcIltdXCI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItc3RyaW5nLFxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItc3RyaW5naWZpYWJsZSB7XFxuICBjb2xvcjogIzMxRjAzMTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItbnVtYmVyIHtcXG4gIGNvbG9yOiAjNjZDMkZGO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWJvb2xlYW4ge1xcbiAgY29sb3I6ICNFQzQyNDI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItbnVsbCB7XFxuICBjb2xvcjogI0VFQzk3RDtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci11bmRlZmluZWQge1xcbiAgY29sb3I6ICNlZjhmYmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItZnVuY3Rpb24ge1xcbiAgY29sb3I6ICNGRDQ4Q0I7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXVybCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjMDI3QkZGO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWJyYWNrZXQge1xcbiAgY29sb3I6ICM5NDk0RkY7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXIta2V5IHtcXG4gIGNvbG9yOiAjMjNBMERCO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXItbGluayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlciB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlcjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2UtaW47XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuN3JlbSk7XFxuICBjb250ZW50OiBcIitcIjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93ID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1pbjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93OmhvdmVyID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IC5qc29uLWZvcm1hdHRlci10b2dnbGVyLWxpbmsgLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXI6YWZ0ZXIge1xcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTFyZW0pIHJvdGF0ZSg5MGRlZyk7Ki9cXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93Lmpzb24tZm9ybWF0dGVyLW9wZW4gPiAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW46YWZ0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IGEgPiAuanNvbi1mb3JtYXR0ZXItcHJldmlldy10ZXh0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdy5qc29uLWZvcm1hdHRlci1vcGVuLmpzb24tZm9ybWF0dGVyLWVtcHR5OmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4nLCBcIlwiIF0pO1xufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgcmV0dXJuIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHJlc3VsdCA9IFtdLCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXNbaV07XG4gICAgICAgICAgICAgICAgaXRlbVsyXSA/IHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKSA6IHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xuICAgICAgICB9LCBsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgICBcInN0cmluZ1wiID09IHR5cGVvZiBtb2R1bGVzICYmIChtb2R1bGVzID0gWyBbIG51bGwsIG1vZHVsZXMsIFwiXCIgXSBdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fSwgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiID09IHR5cGVvZiBpZCAmJiAoYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSAhMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTtcbiAgICAgICAgICAgICAgICBcIm51bWJlclwiID09IHR5cGVvZiBpdGVtWzBdICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0gfHwgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0gPyBpdGVtWzJdID0gbWVkaWFRdWVyeSA6IG1lZGlhUXVlcnkgJiYgKGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIiksIFxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGxpc3Q7XG4gICAgfTtcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuICAgIGZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV0sIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgICAgICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgICAgICAgICBkb21TdHlsZS5yZWZzKys7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG4gICAgICAgICAgICAgICAgZm9yICg7aiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJ0cyA9IFtdLCBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcmVmczogMSxcbiAgICAgICAgICAgICAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuICAgICAgICBmb3IgKHZhciBzdHlsZXMgPSBbXSwgbmV3U3R5bGVzID0ge30sIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBsaXN0W2ldLCBpZCA9IGl0ZW1bMF0sIGNzcyA9IGl0ZW1bMV0sIG1lZGlhID0gaXRlbVsyXSwgc291cmNlTWFwID0gaXRlbVszXSwgcGFydCA9IHtcbiAgICAgICAgICAgICAgICBjc3M6IGNzcyxcbiAgICAgICAgICAgICAgICBtZWRpYTogbWVkaWEsXG4gICAgICAgICAgICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBuZXdTdHlsZXNbaWRdID8gbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpIDogc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgcGFydHM6IFsgcGFydCBdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG4gICAgICAgIHZhciBoZWFkID0gZ2V0SGVhZEVsZW1lbnQoKSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKFwidG9wXCIgPT09IG9wdGlvbnMuaW5zZXJ0QXQpIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID8gbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcgPyBoZWFkLmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSA6IGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KSA6IGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKSwgXG4gICAgICAgIHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTsgZWxzZSB7XG4gICAgICAgICAgICBpZiAoXCJib3R0b21cIiAhPT0gb3B0aW9ucy5pbnNlcnRBdCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgdmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgaWR4ID49IDAgJiYgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gICAgICAgIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHJldHVybiBzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIiwgaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCksIFxuICAgICAgICBzdHlsZUVsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gICAgICAgIHJldHVybiBsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIiwgaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KSwgXG4gICAgICAgIGxpbmtFbGVtZW50O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG4gICAgICAgIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgICAgICAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKSwgXG4gICAgICAgICAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCAhMSksIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsICEwKTtcbiAgICAgICAgfSBlbHNlIG9iai5zb3VyY2VNYXAgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBVUkwgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIEJsb2IgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBidG9hID8gKHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpLCBcbiAgICAgICAgdXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCksIHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCksIHN0eWxlRWxlbWVudC5ocmVmICYmIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuICAgICAgICB9KSA6IChzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyksIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpLCBcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1cGRhdGUob2JqKSwgZnVuY3Rpb24obmV3T2JqKSB7XG4gICAgICAgICAgICBpZiAobmV3T2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgICAgICAgICAgfSBlbHNlIHJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gICAgICAgIHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcbiAgICAgICAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpLCBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBjaGlsZE5vZGVzW2luZGV4XSAmJiBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pLCBjaGlsZE5vZGVzLmxlbmd0aCA/IHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pIDogc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgICAgICAgdmFyIGNzcyA9IG9iai5jc3MsIG1lZGlhID0gb2JqLm1lZGlhO1xuICAgICAgICBpZiAobWVkaWEgJiYgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKSwgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7IGVsc2Uge1xuICAgICAgICAgICAgZm9yICg7c3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQ7ICkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvYmopIHtcbiAgICAgICAgdmFyIGNzcyA9IG9iai5jc3MsIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gICAgICAgIHNvdXJjZU1hcCAmJiAoY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiKTtcbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbIGNzcyBdLCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHQvY3NzXCJcbiAgICAgICAgfSksIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG4gICAgICAgIGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLCBvbGRTcmMgJiYgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xuICAgIH1cbiAgICB2YXIgc3R5bGVzSW5Eb20gPSB7fSwgbWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHZhciBtZW1vO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSBtZW1vICYmIChtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSksIG1lbW87XG4gICAgICAgIH07XG4gICAgfSwgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgfSksIGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuICAgIH0pLCBzaW5nbGV0b25FbGVtZW50ID0gbnVsbCwgc2luZ2xldG9uQ291bnRlciA9IDAsIHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBERUJVRyAmJiBERUJVRyAmJiBcIm9iamVjdFwiICE9IHR5cGVvZiBkb2N1bWVudCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fSwgdm9pZCAwID09PSBvcHRpb25zLnNpbmdsZXRvbiAmJiAob3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCkpLCBcbiAgICAgICAgdm9pZCAwID09PSBvcHRpb25zLmluc2VydEF0ICYmIChvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIik7XG4gICAgICAgIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG4gICAgICAgIHJldHVybiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpLCBmdW5jdGlvbihuZXdMaXN0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBtYXlSZW1vdmUgPSBbXSwgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXSwgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICBkb21TdHlsZS5yZWZzLS0sIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdMaXN0KSB7XG4gICAgICAgICAgICAgICAgYWRkU3R5bGVzVG9Eb20obGlzdFRvU3R5bGVzKG5ld0xpc3QpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBkb21TdHlsZS5yZWZzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgdmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudCwgdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpO1xuICAgICAgICB9O1xuICAgIH0oKTtcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgIHZhciBjb250ZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbiAgICBcInN0cmluZ1wiID09IHR5cGVvZiBjb250ZW50ICYmIChjb250ZW50ID0gWyBbIG1vZHVsZS5pLCBjb250ZW50LCBcIlwiIF0gXSk7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXygzKShjb250ZW50LCB7fSk7XG4gICAgY29udGVudC5sb2NhbHMgJiYgKG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMpO1xufSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoJ1wiJywgJ1wiJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgICAgICByZXR1cm4gISF2YWx1ZSAmJiBcIm9iamVjdFwiID09IHR5cGU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldE9iamVjdE5hbWUob2JqZWN0KSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IG9iamVjdCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIGlmIChudWxsID09PSBvYmplY3QpIHJldHVybiBcIk9iamVjdFwiO1xuICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2Ygb2JqZWN0ICYmICFvYmplY3QuY29uc3RydWN0b3IpIHJldHVybiBcIk9iamVjdFwiO1xuICAgICAgICB2YXIgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvbiAoW14oXSopLywgcmVzdWx0cyA9IGZ1bmNOYW1lUmVnZXguZXhlYyhvYmplY3QuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSA/IHJlc3VsdHNbMV0gOiBcIlwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRWYWx1ZVByZXZpZXcodHlwZSwgb2JqZWN0LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJudWxsXCIgPT09IHR5cGUgfHwgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZSA/IHR5cGUgOiAoXCJzdHJpbmdcIiAhPT0gdHlwZSAmJiBcInN0cmluZ2lmaWFibGVcIiAhPT0gdHlwZSB8fCAodmFsdWUgPSAnXCInICsgZXNjYXBlU3RyaW5nKHZhbHVlKSArICdcIicpLCBcbiAgICAgICAgXCJmdW5jdGlvblwiID09PSB0eXBlID8gb2JqZWN0LnRvU3RyaW5nKCkucmVwbGFjZSgvW1xcclxcbl0vZywgXCJcIikucmVwbGFjZSgvXFx7LipcXH0vLCBcIlwiKSArIFwie+KApn1cIiA6IHZhbHVlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UHJldmlldyh0eXBlLCBvYmplY3QpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyAodmFsdWUgPSBnZXRPYmplY3ROYW1lKG9iamVjdCksIEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiAodmFsdWUgKz0gXCJbXCIgKyBvYmplY3QubGVuZ3RoICsgXCJdXCIpKSA6IHZhbHVlID0gZ2V0VmFsdWVQcmV2aWV3KHR5cGUsIG9iamVjdCwgb2JqZWN0KSwgXG4gICAgICAgIHZhbHVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjc3NDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIFwianNvbi1mb3JtYXR0ZXItXCIgKyBjbGFzc05hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NOYW1lLCBjb250ZW50KSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHJldHVybiBjbGFzc05hbWUgJiYgZWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyhjbGFzc05hbWUpKSwgdm9pZCAwICE9PSBjb250ZW50ICYmIChjb250ZW50IGluc3RhbmNlb2YgTm9kZSA/IGVsLmFwcGVuZENoaWxkKGNvbnRlbnQpIDogZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGNvbnRlbnQpKSkpLCBcbiAgICAgICAgZWw7XG4gICAgfVxuICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IGlzT2JqZWN0LCBfX3dlYnBhY2tfZXhwb3J0c19fLmIgPSBnZXRPYmplY3ROYW1lLCBfX3dlYnBhY2tfZXhwb3J0c19fLmYgPSBnZXRWYWx1ZVByZXZpZXcsIFxuICAgIF9fd2VicGFja19leHBvcnRzX18uZCA9IGdldFByZXZpZXcsIF9fd2VicGFja19leHBvcnRzX18uYyA9IGNzc0NsYXNzLCBfX3dlYnBhY2tfZXhwb3J0c19fLmUgPSBjcmVhdGVFbGVtZW50O1xufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xufSBdKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpzb24tZm9ybWF0dGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pzb24tZm9ybWF0dGVyLWpzL2Rpc3QvanNvbi1mb3JtYXR0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==