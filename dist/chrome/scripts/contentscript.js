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

console.log("Loaded on page"); // Enable chromereload by uncommenting this line:
//import 'chromereload/devonly'

var regexEnv = /:\/\/([\w-]+)\.sdvi/g;
var whereami = regexEnv.exec(window.location.origin)[1];

function addColor() {
    var bannerColorMap = {
        "discovery": "#801717",
        "discovery-uat": "rgb(114, 247, 31)",
        "discovery-dev": "rgb(62, 111, 146)"
    };
    var toolbars = document.getElementsByClassName("v-toolbar__content");
    for (var i = 0; i < toolbars.length; i++) {
        var bar = toolbars.item(i);
        bar.style.backgroundColor = bannerColorMap[whereami];
    }
}

// Polyfill Iterator for HTML Elements
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
setInterval(addColor, 1000);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTg5OTllMDMzMWQwMDQzMGUyZTkiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY29udGVudHNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNvbi1mb3JtYXR0ZXItanMvZGlzdC9qc29uLWZvcm1hdHRlci5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicmVnZXhFbnYiLCJ3aGVyZWFtaSIsImV4ZWMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImFkZENvbG9yIiwiYmFubmVyQ29sb3JNYXAiLCJ0b29sYmFycyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJiYXIiLCJpdGVtIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIVE1MQ29sbGVjdGlvbiIsInByb3RvdHlwZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiQXJyYXkiLCJjYWNoZSIsIkdFVCIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwieGh0dHAiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsImZvcm1hdHRlZCIsImZpeEV4cGFuZGFibGUiLCJlbGVtcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZWxlbSIsInBhcmVudEVsZW0iLCJ0YWdOYW1lIiwicGFyZW50RWxlbWVudCIsIm1vdmllSUQiLCJpZCIsImluY2x1ZGVzIiwicHVzaCIsInJlcSIsInBhciIsImlubmVySFRNTCIsInRoZW4iLCJiZXR0ZXJOYW1lcyIsIldvcmtmbG93IiwiTWV0YWRhdGEiLCJBbmFseXplSW5mbyIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZXMiLCJqc29uMiIsImRhdGEiLCJmb3JFYWNoIiwieCIsImF0dHJpYnV0ZXMiLCJtZXRhZGF0YSIsImZvcm1hdHRlciIsIkpTT05Gb3JtYXR0ZXIiLCJob3ZlclByZXZpZXdFbmFibGVkIiwiaG92ZXJQcmV2aWV3QXJyYXlDb3VudCIsImhvdmVyUHJldmlld0ZpZWxkQ291bnQiLCJ0aGVtZSIsImFuaW1hdGVPcGVuIiwiYW5pbWF0ZUNsb3NlIiwidXNlVG9KU09OIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOzs7Ozs7QUFFQUEsUUFBUUMsR0FBUixDQUFZLGdCQUFaLEUsQ0FMQTtBQUNBOztBQU1BLElBQU1DLFdBQVcsc0JBQWpCO0FBQ0EsSUFBTUMsV0FBV0QsU0FBU0UsSUFBVCxDQUFjQyxPQUFPQyxRQUFQLENBQWdCQyxNQUE5QixFQUFzQyxDQUF0QyxDQUFqQjs7QUFFQSxTQUFTQyxRQUFULEdBQW1CO0FBQ2YsUUFBTUMsaUJBQWlCO0FBQ25CLHFCQUFhLFNBRE07QUFFbkIseUJBQWlCLG1CQUZFO0FBR25CLHlCQUFpQjtBQUhFLEtBQXZCO0FBS0EsUUFBSUMsV0FBV0MsU0FBU0Msc0JBQVQsQ0FBZ0Msb0JBQWhDLENBQWY7QUFDQSxTQUFJLElBQUlDLElBQUksQ0FBWixFQUFlQSxJQUFJSCxTQUFTSSxNQUE1QixFQUFvQ0QsR0FBcEMsRUFBd0M7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QUNBO0FBQ0E7QUFDQTtBQUNBLCtIQUErSDtBQUMvSCxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLG1CQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQSxtQ0FBbUMsMkJBQTJCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsSUFBSSxXQUFXLEVBQUU7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0QsMEMiLCJmaWxlIjoiY29udGVudHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU4OTk5ZTAzMzFkMDA0MzBlMmU5IiwiLy8gRW5hYmxlIGNocm9tZXJlbG9hZCBieSB1bmNvbW1lbnRpbmcgdGhpcyBsaW5lOlxuLy9pbXBvcnQgJ2Nocm9tZXJlbG9hZC9kZXZvbmx5J1xuXG5pbXBvcnQgSlNPTkZvcm1hdHRlciBmcm9tIFwianNvbi1mb3JtYXR0ZXItanNcIlxuXG5jb25zb2xlLmxvZyhcIkxvYWRlZCBvbiBwYWdlXCIpO1xuXG5jb25zdCByZWdleEVudiA9IC86XFwvXFwvKFtcXHctXSspXFwuc2R2aS9nXG5jb25zdCB3aGVyZWFtaSA9IHJlZ2V4RW52LmV4ZWMod2luZG93LmxvY2F0aW9uLm9yaWdpbilbMV07XG5cbmZ1bmN0aW9uIGFkZENvbG9yKCl7XG4gICAgY29uc3QgYmFubmVyQ29sb3JNYXAgPSB7XG4gICAgICAgIFwiZGlzY292ZXJ5XCI6IFwiIzgwMTcxN1wiLFxuICAgICAgICBcImRpc2NvdmVyeS11YXRcIjogXCJyZ2IoMTE0LCAyNDcsIDMxKVwiLFxuICAgICAgICBcImRpc2NvdmVyeS1kZXZcIjogXCJyZ2IoNjIsIDExMSwgMTQ2KVwiLFxuICAgIH07XG4gICAgbGV0IHRvb2xiYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInYtdG9vbGJhcl9fY29udGVudFwiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9vbGJhcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgYmFyID0gdG9vbGJhcnMuaXRlbShpKTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhbm5lckNvbG9yTWFwW3doZXJlYW1pXTtcbiAgICB9XG59XG5cbi8vIFBvbHlmaWxsIEl0ZXJhdG9yIGZvciBIVE1MIEVsZW1lbnRzXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xuXG5sZXQgY2FjaGUgPSBbXTtcbmNvbnN0IEdFVCA9IHVybCA9PiB7XG4gICAgaWYoY2FjaGVbdXJsXSkgcmV0dXJuIGNhY2hlW3VybF07XG4gICAgY29uc29sZS5sb2coXCJyZXFcIik7XG4gICAgcmV0dXJuIGNhY2hlW3VybF0gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHhodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhodHRwLm9wZW4oXCJHRVRcIiwgdXJsKTtcbiAgICAgICAgeGh0dHAuc2VuZCgpO1xuICAgIH0pO1xufTtcblxubGV0IGZvcm1hdHRlZCA9IFtdXG5mdW5jdGlvbiBmaXhFeHBhbmRhYmxlKCl7XG4gICAgbGV0IGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZHZpLW1ldGFkYXRhLWRldGFpbHNcIik7XG4gICAgZm9yKGxldCBlbGVtIG9mIGVsZW1zKXtcblxuICAgICAgICBsZXQgcGFyZW50RWxlbSA9IGVsZW1cbiAgICAgICAgd2hpbGUocGFyZW50RWxlbS50YWdOYW1lICE9PSBcIkxJXCIpIHBhcmVudEVsZW0gPSBwYXJlbnRFbGVtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IG1vdmllSUQgPSBwYXJlbnRFbGVtLmlkO1xuXG4gICAgICAgIGlmKGZvcm1hdHRlZC5pbmNsdWRlcyhtb3ZpZUlEKSkgY29udGludWU7XG4gICAgICAgIGZvcm1hdHRlZC5wdXNoKG1vdmllSUQpO1xuXG4gICAgICAgIGxldCByZXEgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGkvdjIvbW92aWVzLyR7bW92aWVJRH0vbWV0YWRhdGFgO1xuXG4gICAgICAgIGxldCBwYXIgPSBlbGVtLnBhcmVudEVsZW1lbnRcbiAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBcIkxvYWRpbmdcIjtcblxuICAgICAgICBHRVQocmVxKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgYmV0dGVyTmFtZXMgPSB7XG4gICAgICAgICAgICAgICAgV29ya2Zsb3c6IFwiV09SS0ZMT1dfTUVUQURBVEFcIixcbiAgICAgICAgICAgICAgICBNZXRhZGF0YTogXCJNRVRBREFUQVwiLFxuICAgICAgICAgICAgICAgIEFuYWx5emVJbmZvOiBcIkFOQUxZWkVfSU5GT1wiLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgICAgICBsZXQganNvbjIgPSB7fVxuICAgICAgICAgICAganNvbiA9IGpzb24uZGF0YVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHggPT4ganNvbjJbYmV0dGVyTmFtZXNbeC5pZF1dID0geC5hdHRyaWJ1dGVzLm1ldGFkYXRhKVxuICAgICAgICAgICAgbGV0IGZvcm1hdHRlciA9IG5ldyBKU09ORm9ybWF0dGVyKGpzb24yLCAyLCB7XG4gICAgICAgICAgICAgICAgaG92ZXJQcmV2aWV3RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBob3ZlclByZXZpZXdBcnJheUNvdW50OiAxMCxcbiAgICAgICAgICAgICAgICBob3ZlclByZXZpZXdGaWVsZENvdW50OiA1LFxuICAgICAgICAgICAgICAgIHRoZW1lOiAnJyxcbiAgICAgICAgICAgICAgICBhbmltYXRlT3BlbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgYW5pbWF0ZUNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1c2VUb0pTT046IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoZm9ybWF0dGVyLnJlbmRlcigpKVxuICAgICAgICAgICAgcGFyLnN0eWxlID0gXCJmb250LXNpemU6IDEwMCU7IHdoaXRlLXNwYWNlOiBub3dyYXA7XCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5zZXRJbnRlcnZhbChmaXhFeHBhbmRhYmxlLCAxMDAwKTtcbnNldEludGVydmFsKGFkZENvbG9yLCAxMDAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2NvbnRlbnRzY3JpcHQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiAgICAgICAgICAgIGk6IG1vZHVsZUlkLFxuICAgICAgICAgICAgbDogITEsXG4gICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyksIFxuICAgICAgICBtb2R1bGUubCA9ICEwLCBtb2R1bGUuZXhwb3J0cztcbiAgICB9XG4gICAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbiAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcywgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcywgXG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGdldDogZ2V0dGVyXG4gICAgICAgIH0pO1xuICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQ7XG4gICAgICAgIH0gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCBcImFcIiwgZ2V0dGVyKSwgZ2V0dGVyO1xuICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImRpc3RcIiwgX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbn0oWyBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgfSk7XG4gICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19zdHlsZV9sZXNzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLCBEQVRFX1NUUklOR19SRUdFWCA9IChfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19zdHlsZV9sZXNzX18pLCBcbiAgICAvKF5cXGR7MSw0fVtcXC58XFxcXFxcL3wtXVxcZHsxLDJ9W1xcLnxcXFxcXFwvfC1dXFxkezEsNH0pKFxccyooPzowP1sxLTldOlswLTVdfDEoPz1bMDEyXSlcXGQ6WzAtNV0pXFxkXFxzKlthcF1tKT8kLyksIFBBUlRJQUxfREFURV9SRUdFWCA9IC9cXGR7Mn06XFxkezJ9OlxcZHsyfSBHTVQtXFxkezR9LywgSlNPTl9EQVRFX1JFR0VYID0gL1xcZHs0fS1cXGR7Mn0tXFxkezJ9VFxcZHsyfTpcXGR7Mn06XFxkezJ9LlxcZHszfVovLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgIHJldHVybiBjYigpLCAwO1xuICAgIH0sIF9kZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICBob3ZlclByZXZpZXdFbmFibGVkOiAhMSxcbiAgICAgICAgaG92ZXJQcmV2aWV3QXJyYXlDb3VudDogMTAwLFxuICAgICAgICBob3ZlclByZXZpZXdGaWVsZENvdW50OiA1LFxuICAgICAgICBhbmltYXRlT3BlbjogITAsXG4gICAgICAgIGFuaW1hdGVDbG9zZTogITAsXG4gICAgICAgIHRoZW1lOiBudWxsLFxuICAgICAgICB1c2VUb0pTT046ICEwLFxuICAgICAgICBzb3J0UHJvcGVydGllc0J5OiBudWxsXG4gICAgfSwgSlNPTkZvcm1hdHRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBKU09ORm9ybWF0dGVyKGpzb24sIG9wZW4sIGNvbmZpZywga2V5KSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IG9wZW4gJiYgKG9wZW4gPSAxKSwgdm9pZCAwID09PSBjb25maWcgJiYgKGNvbmZpZyA9IF9kZWZhdWx0Q29uZmlnKSwgdGhpcy5qc29uID0ganNvbiwgXG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBvcGVuLCB0aGlzLmNvbmZpZyA9IGNvbmZpZywgdGhpcy5rZXkgPSBrZXksIHRoaXMuX2lzT3BlbiA9IG51bGwsIHZvaWQgMCA9PT0gdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RW5hYmxlZCAmJiAodGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RW5hYmxlZCA9IF9kZWZhdWx0Q29uZmlnLmhvdmVyUHJldmlld0VuYWJsZWQpLCBcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3QXJyYXlDb3VudCAmJiAodGhpcy5jb25maWcuaG92ZXJQcmV2aWV3QXJyYXlDb3VudCA9IF9kZWZhdWx0Q29uZmlnLmhvdmVyUHJldmlld0FycmF5Q291bnQpLCBcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RmllbGRDb3VudCAmJiAodGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RmllbGRDb3VudCA9IF9kZWZhdWx0Q29uZmlnLmhvdmVyUHJldmlld0ZpZWxkQ291bnQpLCBcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gdGhpcy5jb25maWcudXNlVG9KU09OICYmICh0aGlzLmNvbmZpZy51c2VUb0pTT04gPSBfZGVmYXVsdENvbmZpZy51c2VUb0pTT04pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiaXNPcGVuXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgIT09IHRoaXMuX2lzT3BlbiA/IHRoaXMuX2lzT3BlbiA6IHRoaXMub3BlbiA+IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzRGF0ZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmpzb24gaW5zdGFuY2VvZiBEYXRlIHx8IFwic3RyaW5nXCIgPT09IHRoaXMudHlwZSAmJiAoREFURV9TVFJJTkdfUkVHRVgudGVzdCh0aGlzLmpzb24pIHx8IEpTT05fREFURV9SRUdFWC50ZXN0KHRoaXMuanNvbikgfHwgUEFSVElBTF9EQVRFX1JFR0VYLnRlc3QodGhpcy5qc29uKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiaXNVcmxcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PT0gdGhpcy50eXBlICYmIDAgPT09IHRoaXMuanNvbi5pbmRleE9mKFwiaHR0cFwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJpc0FycmF5XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5qc29uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJpc09iamVjdFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYSkodGhpcy5qc29uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJpc0VtcHR5T2JqZWN0XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLmtleXMubGVuZ3RoICYmICF0aGlzLmlzQXJyYXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiaXNFbXB0eVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRW1wdHlPYmplY3QgfHwgdGhpcy5rZXlzICYmICF0aGlzLmtleXMubGVuZ3RoICYmIHRoaXMuaXNBcnJheTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJ1c2VUb0pTT05cIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudXNlVG9KU09OICYmIFwic3RyaW5naWZpYWJsZVwiID09PSB0aGlzLnR5cGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiaGFzS2V5XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gdGhpcy5rZXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwiY29uc3RydWN0b3JOYW1lXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5iKSh0aGlzLmpzb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCA9PT0gdGhpcy5qc29uID8gXCJudWxsXCIgOiB0aGlzLmNvbmZpZy51c2VUb0pTT04gJiYgdGhpcy5qc29uICYmIHRoaXMuanNvbi50b0pTT04gPyBcInN0cmluZ2lmaWFibGVcIiA6IHR5cGVvZiB0aGlzLmpzb247XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoSlNPTkZvcm1hdHRlci5wcm90b3R5cGUsIFwia2V5c1wiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5qc29uKS5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5IHx8ICdcIlwiJztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc0FycmF5ICYmIHRoaXMuY29uZmlnLnNvcnRQcm9wZXJ0aWVzQnkgPyBrZXlzLnNvcnQodGhpcy5jb25maWcuc29ydFByb3BlcnRpZXNCeSkgOiBrZXlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICEwXG4gICAgICAgIH0pLCBKU09ORm9ybWF0dGVyLnByb3RvdHlwZS50b2dnbGVPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbiwgdGhpcy5lbGVtZW50ICYmICh0aGlzLmlzT3BlbiA/IHRoaXMuYXBwZW5kQ2hpbGRyZW4odGhpcy5jb25maWcuYW5pbWF0ZU9wZW4pIDogdGhpcy5yZW1vdmVDaGlsZHJlbih0aGlzLmNvbmZpZy5hbmltYXRlQ2xvc2UpLCBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcIm9wZW5cIikpKTtcbiAgICAgICAgfSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUub3BlbkF0RGVwdGggPSBmdW5jdGlvbihkZXB0aCkge1xuICAgICAgICAgICAgdm9pZCAwID09PSBkZXB0aCAmJiAoZGVwdGggPSAxKSwgZGVwdGggPCAwIHx8ICh0aGlzLm9wZW4gPSBkZXB0aCwgdGhpcy5pc09wZW4gPSAwICE9PSBkZXB0aCwgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgJiYgKHRoaXMucmVtb3ZlQ2hpbGRyZW4oITEpLCAwID09PSBkZXB0aCA/IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcIm9wZW5cIikpIDogKHRoaXMuYXBwZW5kQ2hpbGRyZW4odGhpcy5jb25maWcuYW5pbWF0ZU9wZW4pLCBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcIm9wZW5cIikpKSkpO1xuICAgICAgICB9LCBKU09ORm9ybWF0dGVyLnByb3RvdHlwZS5nZXRJbmxpbmVwcmV2aWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBcnJheSkgcmV0dXJuIHRoaXMuanNvbi5sZW5ndGggPiB0aGlzLmNvbmZpZy5ob3ZlclByZXZpZXdBcnJheUNvdW50ID8gXCJBcnJheVtcIiArIHRoaXMuanNvbi5sZW5ndGggKyBcIl1cIiA6IFwiW1wiICsgdGhpcy5qc29uLm1hcChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5kKS5qb2luKFwiLCBcIikgKyBcIl1cIjtcbiAgICAgICAgICAgIHZhciBrZXlzID0gdGhpcy5rZXlzLCBuYXJyb3dLZXlzID0ga2V5cy5zbGljZSgwLCB0aGlzLmNvbmZpZy5ob3ZlclByZXZpZXdGaWVsZENvdW50KSwga3ZzID0gbmFycm93S2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleSArIFwiOlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmQpKF90aGlzLnR5cGUsIF90aGlzLmpzb25ba2V5XSk7XG4gICAgICAgICAgICB9KSwgZWxsaXBzaXMgPSBrZXlzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5ob3ZlclByZXZpZXdGaWVsZENvdW50ID8gXCLigKZcIiA6IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gXCJ7XCIgKyBrdnMuam9pbihcIiwgXCIpICsgZWxsaXBzaXMgKyBcIn1cIjtcbiAgICAgICAgfSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJkaXZcIiwgXCJyb3dcIik7XG4gICAgICAgICAgICB2YXIgdG9nZ2xlckxpbmsgPSB0aGlzLmlzT2JqZWN0ID8gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwiYVwiLCBcInRvZ2dsZXItbGlua1wiKSA6IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdCAmJiAhdGhpcy51c2VUb0pTT04gJiYgdG9nZ2xlckxpbmsuYXBwZW5kQ2hpbGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiLCBcInRvZ2dsZXJcIikpLCBcbiAgICAgICAgICAgIHRoaXMuaGFzS2V5ICYmIHRvZ2dsZXJMaW5rLmFwcGVuZENoaWxkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIiwgXCJrZXlcIiwgdGhpcy5rZXkgKyBcIjpcIikpLCBcbiAgICAgICAgICAgIHRoaXMuaXNPYmplY3QgJiYgIXRoaXMudXNlVG9KU09OKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiLCBcInZhbHVlXCIpLCBvYmplY3RXcmFwcGVyU3BhbiA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIiksIGNvbnN0cnVjdG9yTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcInNwYW5cIiwgXCJjb25zdHJ1Y3Rvci1uYW1lXCIsIHRoaXMuY29uc3RydWN0b3JOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0V3JhcHBlclNwYW4uYXBwZW5kQ2hpbGQoY29uc3RydWN0b3JOYW1lKSwgdGhpcy5pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJheVdyYXBwZXJTcGFuID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlXcmFwcGVyU3Bhbi5hcHBlbmRDaGlsZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIsIFwiYnJhY2tldFwiLCBcIltcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlXcmFwcGVyU3Bhbi5hcHBlbmRDaGlsZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIsIFwibnVtYmVyXCIsIHRoaXMuanNvbi5sZW5ndGgpKSwgXG4gICAgICAgICAgICAgICAgICAgIGFycmF5V3JhcHBlclNwYW4uYXBwZW5kQ2hpbGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmUpKFwic3BhblwiLCBcImJyYWNrZXRcIiwgXCJdXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFdyYXBwZXJTcGFuLmFwcGVuZENoaWxkKGFycmF5V3JhcHBlclNwYW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS5hcHBlbmRDaGlsZChvYmplY3RXcmFwcGVyU3BhbiksIHRvZ2dsZXJMaW5rLmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5pc1VybCA/IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShcImFcIikgOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmMpKHRoaXMudHlwZSkpLCBcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGF0ZSAmJiB2YWx1ZS5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcImRhdGVcIikpLCBcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXJsICYmICh2YWx1ZS5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcInVybFwiKSksIFxuICAgICAgICAgICAgICAgIHZhbHVlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGhpcy5qc29uKSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJldmlldyA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5mKSh0aGlzLnR5cGUsIHRoaXMuanNvbiwgdGhpcy51c2VUb0pTT04gPyB0aGlzLmpzb24udG9KU09OKCkgOiB0aGlzLmpzb24pO1xuICAgICAgICAgICAgICAgIHZhbHVlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlUHJldmlldykpLCB0b2dnbGVyTGluay5hcHBlbmRDaGlsZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc09iamVjdCAmJiB0aGlzLmNvbmZpZy5ob3ZlclByZXZpZXdFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpZXcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJzcGFuXCIsIFwicHJldmlldy10ZXh0XCIpO1xuICAgICAgICAgICAgICAgIHByZXZpZXcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5nZXRJbmxpbmVwcmV2aWV3KCkpKSwgdG9nZ2xlckxpbmsuYXBwZW5kQ2hpbGQocHJldmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkoXCJkaXZcIiwgXCJjaGlsZHJlblwiKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzT2JqZWN0ICYmIGNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmMpKFwib2JqZWN0XCIpKSwgXG4gICAgICAgICAgICB0aGlzLmlzQXJyYXkgJiYgY2hpbGRyZW4uY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYykoXCJhcnJheVwiKSksIFxuICAgICAgICAgICAgdGhpcy5pc0VtcHR5ICYmIGNoaWxkcmVuLmNsYXNzTGlzdC5hZGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmMpKFwiZW1wdHlcIikpLCBcbiAgICAgICAgICAgIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnRoZW1lICYmIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKSh0aGlzLmNvbmZpZy50aGVtZSkpLCBcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuICYmIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcIm9wZW5cIikpLCBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0b2dnbGVyTGluayksIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbiksIHRoaXMuaXNPYmplY3QgJiYgdGhpcy5pc09wZW4gJiYgdGhpcy5hcHBlbmRDaGlsZHJlbigpLCBcbiAgICAgICAgICAgIHRoaXMuaXNPYmplY3QgJiYgIXRoaXMudXNlVG9KU09OICYmIHRvZ2dsZXJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKSksIFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50O1xuICAgICAgICB9LCBKU09ORm9ybWF0dGVyLnByb3RvdHlwZS5hcHBlbmRDaGlsZHJlbiA9IGZ1bmN0aW9uKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdm9pZCAwID09PSBhbmltYXRlZCAmJiAoYW5pbWF0ZWQgPSAhMSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKShcImNoaWxkcmVuXCIpKTtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbiAmJiAhdGhpcy5pc0VtcHR5KSBpZiAoYW5pbWF0ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhfMSA9IDAsIGFkZEFDaGlsZF8xID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBfdGhpcy5rZXlzW2luZGV4XzFdLCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcihfdGhpcy5qc29uW2tleV0sIF90aGlzLm9wZW4gLSAxLCBfdGhpcy5jb25maWcsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLmFwcGVuZENoaWxkKGZvcm1hdHRlci5yZW5kZXIoKSksIChpbmRleF8xICs9IDEpIDwgX3RoaXMua2V5cy5sZW5ndGggJiYgKGluZGV4XzEgPiAxMCA/IGFkZEFDaGlsZF8xKCkgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWRkQUNoaWxkXzEpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhZGRBQ2hpbGRfMSk7XG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvcm1hdHRlciA9IG5ldyBKU09ORm9ybWF0dGVyKF90aGlzLmpzb25ba2V5XSwgX3RoaXMub3BlbiAtIDEsIF90aGlzLmNvbmZpZywga2V5KTtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5hcHBlbmRDaGlsZChmb3JtYXR0ZXIucmVuZGVyKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLnJlbW92ZUNoaWxkcmVuID0gZnVuY3Rpb24oYW5pbWF0ZWQpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gYW5pbWF0ZWQgJiYgKGFuaW1hdGVkID0gITEpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuRWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmMpKFwiY2hpbGRyZW5cIikpO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkcmVuUmVtb3ZlZF8xID0gMCwgcmVtb3ZlQUNoaWxkXzEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5FbGVtZW50ICYmIGNoaWxkcmVuRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggJiYgKGNoaWxkcmVuRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZHJlbkVsZW1lbnQuY2hpbGRyZW5bMF0pLCBcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5SZW1vdmVkXzEgKz0gMSwgY2hpbGRyZW5SZW1vdmVkXzEgPiAxMCA/IHJlbW92ZUFDaGlsZF8xKCkgOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVtb3ZlQUNoaWxkXzEpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW1vdmVBQ2hpbGRfMSk7XG4gICAgICAgICAgICB9IGVsc2UgY2hpbGRyZW5FbGVtZW50ICYmIChjaGlsZHJlbkVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIik7XG4gICAgICAgIH0sIEpTT05Gb3JtYXR0ZXI7XG4gICAgfSgpO1xuICAgIF9fd2VicGFja19leHBvcnRzX18uZGVmYXVsdCA9IEpTT05Gb3JtYXR0ZXI7XG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKCksIGV4cG9ydHMucHVzaChbIG1vZHVsZS5pLCAnLmpzb24tZm9ybWF0dGVyLXJvdyB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93LFxcbi5qc29uLWZvcm1hdHRlci1yb3cgYSxcXG4uanNvbi1mb3JtYXR0ZXItcm93IGE6aG92ZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1yb3cge1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5IHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eTphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eS5qc29uLWZvcm1hdHRlci1vYmplY3Q6YWZ0ZXIge1xcbiAgY29udGVudDogXCJObyBwcm9wZXJ0aWVzXCI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5Lmpzb24tZm9ybWF0dGVyLWFycmF5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFwiW11cIjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItc3RyaW5nLFxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXN0cmluZ2lmaWFibGUge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItbnVtYmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1ib29sZWFuIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLW51bGwge1xcbiAgY29sb3I6ICM4NTVBMDA7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXVuZGVmaW5lZCB7XFxuICBjb2xvcjogI2NhMGI2OTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItZnVuY3Rpb24ge1xcbiAgY29sb3I6ICNGRjIwRUQ7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdXJsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6IGJsdWU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWJyYWNrZXQge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWtleSB7XFxuICBjb2xvcjogIzAwMDA4QjtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlci1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlciB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXI6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjdyZW0pO1xcbiAgY29udGVudDogXCIrXCI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgPiBhID4gLmpzb24tZm9ybWF0dGVyLXByZXZpZXctdGV4dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlLWluO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93OmhvdmVyID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93Lmpzb24tZm9ybWF0dGVyLW9wZW4gPiAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlci1saW5rIC5qc29uLWZvcm1hdHRlci10b2dnbGVyOmFmdGVyIHtcXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcmVtKSByb3RhdGUoOTBkZWcpOyovXFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IGEgPiAuanNvbi1mb3JtYXR0ZXItcHJldmlldy10ZXh0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3Blbi5qc29uLWZvcm1hdHRlci1lbXB0eTphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyxcXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgYSxcXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgYTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItcm93IHtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5IHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5OmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW4uanNvbi1mb3JtYXR0ZXItZW1wdHkuanNvbi1mb3JtYXR0ZXItb2JqZWN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFwiTm8gcHJvcGVydGllc1wiO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5Lmpzb24tZm9ybWF0dGVyLWFycmF5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFwiW11cIjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1zdHJpbmcsXFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1zdHJpbmdpZmlhYmxlIHtcXG4gIGNvbG9yOiAjMzFGMDMxO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1udW1iZXIge1xcbiAgY29sb3I6ICM2NkMyRkY7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItYm9vbGVhbiB7XFxuICBjb2xvcjogI0VDNDI0MjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1udWxsIHtcXG4gIGNvbG9yOiAjRUVDOTdEO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXVuZGVmaW5lZCB7XFxuICBjb2xvcjogI2VmOGZiZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1mdW5jdGlvbiB7XFxuICBjb2xvcjogI0ZENDhDQjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdXJsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY29sb3I6ICMwMjdCRkY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItYnJhY2tldCB7XFxuICBjb2xvcjogIzk0OTRGRjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1rZXkge1xcbiAgY29sb3I6ICMyM0EwREI7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlci1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci10b2dnbGVyIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci10b2dnbGVyOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC43cmVtKTtcXG4gIGNvbnRlbnQ6IFwiK1wiO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgPiBhID4gLmpzb24tZm9ybWF0dGVyLXByZXZpZXctdGV4dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlLWluO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3c6aG92ZXIgPiBhID4gLmpzb24tZm9ybWF0dGVyLXByZXZpZXctdGV4dCB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdy5qc29uLWZvcm1hdHRlci1vcGVuID4gLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXItbGluayAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlcjphZnRlciB7XFxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMXJlbSkgcm90YXRlKDkwZGVnKTsqL1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdy5qc29uLWZvcm1hdHRlci1vcGVuID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93Lmpzb24tZm9ybWF0dGVyLW9wZW4uanNvbi1mb3JtYXR0ZXItZW1wdHk6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbicsIFwiXCIgXSk7XG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICByZXR1cm4gbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgcmVzdWx0ID0gW10sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpc1tpXTtcbiAgICAgICAgICAgICAgICBpdGVtWzJdID8gcmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpIDogcmVzdWx0LnB1c2goaXRlbVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG4gICAgICAgIH0sIGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIG1vZHVsZXMgJiYgKG1vZHVsZXMgPSBbIFsgbnVsbCwgbW9kdWxlcywgXCJcIiBdIF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9LCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGlkICYmIChhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9ICEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGl0ZW1bMF0gJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSB8fCAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSA/IGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5IDogbWVkaWFRdWVyeSAmJiAoaXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiKSwgXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbGlzdDtcbiAgICB9O1xufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG4gICAgZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXSwgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICAgICAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICAgICAgICAgIGRvbVN0eWxlLnJlZnMrKztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgICAgICAgICAgICBmb3IgKDtqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcnRzID0gW10sIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICByZWZzOiAxLFxuICAgICAgICAgICAgICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlcyA9IFtdLCBuZXdTdHlsZXMgPSB7fSwgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV0sIGlkID0gaXRlbVswXSwgY3NzID0gaXRlbVsxXSwgbWVkaWEgPSBpdGVtWzJdLCBzb3VyY2VNYXAgPSBpdGVtWzNdLCBwYXJ0ID0ge1xuICAgICAgICAgICAgICAgIGNzczogY3NzLFxuICAgICAgICAgICAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5ld1N0eWxlc1tpZF0gPyBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCkgOiBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBwYXJ0czogWyBwYXJ0IF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoXCJ0b3BcIiA9PT0gb3B0aW9ucy5pbnNlcnRBdCkgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPyBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyA/IGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIDogaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpIDogaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpLCBcbiAgICAgICAgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpOyBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcImJvdHRvbVwiICE9PSBvcHRpb25zLmluc2VydEF0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAgICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuICAgICAgICBpZHggPj0gMCAmJiBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgcmV0dXJuIHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiLCBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSwgXG4gICAgICAgIHN0eWxlRWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuICAgICAgICB2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgcmV0dXJuIGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiLCBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpLCBcbiAgICAgICAgbGlua0VsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpLCBcbiAgICAgICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsICExKSwgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgITApO1xuICAgICAgICB9IGVsc2Ugb2JqLnNvdXJjZU1hcCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgQmxvYiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGJ0b2EgPyAoc3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyksIFxuICAgICAgICB1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KSwgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSwgc3R5bGVFbGVtZW50LmhyZWYgJiYgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG4gICAgICAgIH0pIDogKHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSwgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCksIFxuICAgICAgICByZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZShvYmopLCBmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgICAgICAgICB9IGVsc2UgcmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICAgICAgdmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuICAgICAgICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTsgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyksIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgICAgIGNoaWxkTm9kZXNbaW5kZXhdICYmIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSksIGNoaWxkTm9kZXMubGVuZ3RoID8gc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSkgOiBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuICAgICAgICB2YXIgY3NzID0gb2JqLmNzcywgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgICAgIGlmIChtZWRpYSAmJiBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpLCBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzczsgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKDtzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZDsgKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuICAgICAgICB2YXIgY3NzID0gb2JqLmNzcywgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICAgICAgc291cmNlTWFwICYmIChjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCIpO1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFsgY3NzIF0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dC9jc3NcIlxuICAgICAgICB9KSwgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcbiAgICAgICAgbGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksIG9sZFNyYyAmJiBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG4gICAgfVxuICAgIHZhciBzdHlsZXNJbkRvbSA9IHt9LCBtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgdmFyIG1lbW87XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IG1lbW8gJiYgKG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSwgbWVtbztcbiAgICAgICAgfTtcbiAgICB9LCBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KSwgZ2V0SGVhZEVsZW1lbnQgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gICAgfSksIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLCBzaW5nbGV0b25Db3VudGVyID0gMCwgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIERFQlVHICYmIERFQlVHICYmIFwib2JqZWN0XCIgIT0gdHlwZW9mIGRvY3VtZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9LCB2b2lkIDAgPT09IG9wdGlvbnMuc2luZ2xldG9uICYmIChvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKSksIFxuICAgICAgICB2b2lkIDAgPT09IG9wdGlvbnMuaW5zZXJ0QXQgJiYgKG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiKTtcbiAgICAgICAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcbiAgICAgICAgcmV0dXJuIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyksIGZ1bmN0aW9uKG5ld0xpc3QpIHtcbiAgICAgICAgICAgIGZvciAodmFyIG1heVJlbW92ZSA9IFtdLCBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldLCBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgIGRvbVN0eWxlLnJlZnMtLSwgbWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgICAgICAgICAgICBhZGRTdHlsZXNUb0RvbShsaXN0VG9TdHlsZXMobmV3TGlzdCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IGRvbVN0eWxlLnJlZnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB2YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50LCB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIH07XG4gICAgfSgpO1xufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIGNvbnRlbnQgJiYgKGNvbnRlbnQgPSBbIFsgbW9kdWxlLmksIGNvbnRlbnQsIFwiXCIgXSBdKTtcbiAgICBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKGNvbnRlbnQsIHt9KTtcbiAgICBjb250ZW50LmxvY2FscyAmJiAobW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscyk7XG59LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgnXCInLCAnXCInKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgIHJldHVybiAhIXZhbHVlICYmIFwib2JqZWN0XCIgPT0gdHlwZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0T2JqZWN0TmFtZShvYmplY3QpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gb2JqZWN0KSByZXR1cm4gXCJcIjtcbiAgICAgICAgaWYgKG51bGwgPT09IG9iamVjdCkgcmV0dXJuIFwiT2JqZWN0XCI7XG4gICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBvYmplY3QgJiYgIW9iamVjdC5jb25zdHJ1Y3RvcikgcmV0dXJuIFwiT2JqZWN0XCI7XG4gICAgICAgIHZhciBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uIChbXihdKikvLCByZXN1bHRzID0gZnVuY05hbWVSZWdleC5leGVjKG9iamVjdC5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxID8gcmVzdWx0c1sxXSA6IFwiXCI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFZhbHVlUHJldmlldyh0eXBlLCBvYmplY3QsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIm51bGxcIiA9PT0gdHlwZSB8fCBcInVuZGVmaW5lZFwiID09PSB0eXBlID8gdHlwZSA6IChcInN0cmluZ1wiICE9PSB0eXBlICYmIFwic3RyaW5naWZpYWJsZVwiICE9PSB0eXBlIHx8ICh2YWx1ZSA9ICdcIicgKyBlc2NhcGVTdHJpbmcodmFsdWUpICsgJ1wiJyksIFxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGUgPyBvYmplY3QudG9TdHJpbmcoKS5yZXBsYWNlKC9bXFxyXFxuXS9nLCBcIlwiKS5yZXBsYWNlKC9cXHsuKlxcfS8sIFwiXCIpICsgXCJ74oCmfVwiIDogdmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcmV2aWV3KHR5cGUsIG9iamVjdCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBcIlwiO1xuICAgICAgICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/ICh2YWx1ZSA9IGdldE9iamVjdE5hbWUob2JqZWN0KSwgQXJyYXkuaXNBcnJheShvYmplY3QpICYmICh2YWx1ZSArPSBcIltcIiArIG9iamVjdC5sZW5ndGggKyBcIl1cIikpIDogdmFsdWUgPSBnZXRWYWx1ZVByZXZpZXcodHlwZSwgb2JqZWN0LCBvYmplY3QpLCBcbiAgICAgICAgdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNzc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gXCJqc29uLWZvcm1hdHRlci1cIiArIGNsYXNzTmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSAmJiBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKGNsYXNzTmFtZSkpLCB2b2lkIDAgIT09IGNvbnRlbnQgJiYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlID8gZWwuYXBwZW5kQ2hpbGQoY29udGVudCkgOiBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY29udGVudCkpKSksIFxuICAgICAgICBlbDtcbiAgICB9XG4gICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gaXNPYmplY3QsIF9fd2VicGFja19leHBvcnRzX18uYiA9IGdldE9iamVjdE5hbWUsIF9fd2VicGFja19leHBvcnRzX18uZiA9IGdldFZhbHVlUHJldmlldywgXG4gICAgX193ZWJwYWNrX2V4cG9ydHNfXy5kID0gZ2V0UHJldmlldywgX193ZWJwYWNrX2V4cG9ydHNfXy5jID0gY3NzQ2xhc3MsIF9fd2VicGFja19leHBvcnRzX18uZSA9IGNyZWF0ZUVsZW1lbnQ7XG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG59IF0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvbi1mb3JtYXR0ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvanNvbi1mb3JtYXR0ZXItanMvZGlzdC9qc29uLWZvcm1hdHRlci5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9