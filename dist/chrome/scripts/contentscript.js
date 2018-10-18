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


// Enable chromereload by uncommenting this line:
//import 'chromereload/devonly'

console.log("Loaded on page");

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

//I can't find a reliable trigger for this: Run it every 1 second until we find
//the ui loaded.
setInterval(addColor, 1000);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTEwNzc1MWJjNDgwMDU0MmNjZjAiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY29udGVudHNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwicmVnZXhFbnYiLCJ3aGVyZWFtaSIsImV4ZWMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsImFkZENvbG9yIiwiYmFubmVyQ29sb3JNYXAiLCJ0b29sYmFycyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiLCJiYXIiLCJpdGVtIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIVE1MQ29sbGVjdGlvbiIsInByb3RvdHlwZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiQXJyYXkiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7O0FBRUFBLFFBQVFDLEdBQVIsQ0FBWSxnQkFBWjs7QUFFQSxJQUFNQyxXQUFXLHNCQUFqQjtBQUNBLElBQU1DLFdBQVdELFNBQVNFLElBQVQsQ0FBY0MsT0FBT0MsUUFBUCxDQUFnQkMsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBakI7O0FBRUEsU0FBU0MsUUFBVCxHQUFtQjtBQUNmLFFBQU1DLGlCQUFpQjtBQUNuQixxQkFBYSxTQURNO0FBRW5CLHlCQUFpQixtQkFGRTtBQUduQix5QkFBaUI7QUFIRSxLQUF2QjtBQUtBLFFBQUlDLFdBQVdDLFNBQVNDLHNCQUFULENBQWdDLG9CQUFoQyxDQUFmO0FBQ0EsU0FBSSxJQUFJQyxJQUFJLENBQVosRUFBZUEsSUFBSUgsU0FBU0ksTUFBNUIsRUFBb0NELEdBQXBDLEVBQXdDO0FBQ3BDLFlBQUlFLE1BQU1MLFNBQVNNLElBQVQsQ0FBY0gsQ0FBZCxDQUFWO0FBQ0FFLFlBQUlFLEtBQUosQ0FBVUMsZUFBVixHQUE0QlQsZUFBZU4sUUFBZixDQUE1QjtBQUNIO0FBQ0o7O0FBRUQ7QUFDQWdCLGVBQWVDLFNBQWYsQ0FBeUJDLE9BQU9DLFFBQWhDLElBQTRDQyxNQUFNSCxTQUFOLENBQWdCQyxPQUFPQyxRQUF2QixDQUE1Qzs7QUFFQTtBQUNBO0FBQ0FFLFlBQVloQixRQUFaLEVBQXNCLElBQXRCLEUiLCJmaWxlIjoiY29udGVudHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDExMDc3NTFiYzQ4MDA1NDJjY2YwIiwiLy8gRW5hYmxlIGNocm9tZXJlbG9hZCBieSB1bmNvbW1lbnRpbmcgdGhpcyBsaW5lOlxuLy9pbXBvcnQgJ2Nocm9tZXJlbG9hZC9kZXZvbmx5J1xuXG5jb25zb2xlLmxvZyhcIkxvYWRlZCBvbiBwYWdlXCIpO1xuXG5jb25zdCByZWdleEVudiA9IC86XFwvXFwvKFtcXHctXSspXFwuc2R2aS9nXG5jb25zdCB3aGVyZWFtaSA9IHJlZ2V4RW52LmV4ZWMod2luZG93LmxvY2F0aW9uLm9yaWdpbilbMV07XG5cbmZ1bmN0aW9uIGFkZENvbG9yKCl7XG4gICAgY29uc3QgYmFubmVyQ29sb3JNYXAgPSB7XG4gICAgICAgIFwiZGlzY292ZXJ5XCI6IFwiIzgwMTcxN1wiLFxuICAgICAgICBcImRpc2NvdmVyeS11YXRcIjogXCJyZ2IoMTE0LCAyNDcsIDMxKVwiLFxuICAgICAgICBcImRpc2NvdmVyeS1kZXZcIjogXCJyZ2IoNjIsIDExMSwgMTQ2KVwiLFxuICAgIH07XG4gICAgbGV0IHRvb2xiYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInYtdG9vbGJhcl9fY29udGVudFwiKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdG9vbGJhcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgYmFyID0gdG9vbGJhcnMuaXRlbShpKTtcbiAgICAgICAgYmFyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhbm5lckNvbG9yTWFwW3doZXJlYW1pXTtcbiAgICB9XG59XG5cbi8vIFBvbHlmaWxsIEl0ZXJhdG9yIGZvciBIVE1MIEVsZW1lbnRzXG5IVE1MQ29sbGVjdGlvbi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEFycmF5LnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdO1xuXG4vL0kgY2FuJ3QgZmluZCBhIHJlbGlhYmxlIHRyaWdnZXIgZm9yIHRoaXM6IFJ1biBpdCBldmVyeSAxIHNlY29uZCB1bnRpbCB3ZSBmaW5kXG4vL3RoZSB1aSBsb2FkZWQuXG5zZXRJbnRlcnZhbChhZGRDb2xvciwgMTAwMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jb250ZW50c2NyaXB0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==