/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ \"./src/scripts/section.js\");\n/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_section__WEBPACK_IMPORTED_MODULE_1__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n// export { default as cardsInfoList } from \"./cards\";\n// import '../css/normalize';\n\n\n\n///// Mobile menu\nvar burger = document.querySelector('.burger');\nvar menu = document.querySelector('.menu');\nvar menuItems = document.querySelectorAll('nav li');\nvar cover = document.querySelector('.cover');\nvar burgerDown = document.getElementById('down');\nvar burgerSalad = document.getElementById('salad');\nvar burgerCutlet = document.getElementById('cutlet');\nvar burgerTomato = document.getElementById('tomato');\nfunction closeTheMenu() {\n  cover.hidden = true;\n  burgerDown.classList.toggle('unpack1');\n  burgerSalad.classList.toggle('unpack2');\n  burgerCutlet.classList.toggle('unpack3');\n  burgerTomato.classList.toggle('unpack4');\n  menu.classList.toggle('move');\n  menu.addEventListener('transitionend', function (event) {\n    menu.style.display = 'none';\n    menu.hidden = true;\n  });\n}\nburger.addEventListener('click', function () {\n  if (menu.hidden) {\n    menu.hidden = false;\n    cover.hidden = false;\n    menu.style.display = 'block';\n    menu.classList.toggle('move');\n    burgerDown.classList.toggle('unpack1');\n    burgerSalad.classList.toggle('unpack2');\n    burgerCutlet.classList.toggle('unpack3');\n    burgerTomato.classList.toggle('unpack4');\n  } else {\n    closeTheMenu();\n  }\n});\ncover.addEventListener('click', closeTheMenu);\nvar _iterator = _createForOfIteratorHelper(menuItems),\n  _step;\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var item = _step.value;\n    item.addEventListener('click', closeTheMenu);\n  }\n\n  ///// Toggle\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\ndocument.getElementById(\"toggle\").addEventListener(\"change\", function () {\n  this.setAttribute(\"aria-checked\", this.checked);\n});\n\n//# sourceURL=webpack://english_for_kids/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/section.js":
/*!********************************!*\
  !*** ./src/scripts/section.js ***!
  \********************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\student_projects\\\\English_for_kids\\\\src\\\\scripts\\\\section.js: Export 'addFlipEffect' is not defined. (86:9)\\n\\n\\u001b[0m \\u001b[90m 84 |\\u001b[39m \\u001b[90m// }\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 85 |\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 86 |\\u001b[39m \\u001b[36mexport\\u001b[39m { addFlipEffect\\u001b[33m,\\u001b[39m fillInTheContent }\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 87 |\\u001b[39m\\u001b[0m\\n    at instantiate (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:67:32)\\n    at constructor (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:364:12)\\n    at Parser.raise (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3365:19)\\n    at Parser.parseProgram (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12845:14)\\n    at Parser.parseTopLevel (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12832:25)\\n    at Parser.parse (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14740:10)\\n    at parse (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14782:38)\\n    at parser (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:41:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:66:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:21:50)\\n    at run.next (<anonymous>)\\n    at transform (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:22:41)\\n    at transform.next (<anonymous>)\\n    at step (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\gensync\\\\index.js:261:32)\\n    at D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\gensync\\\\index.js:273:13\\n    at async.call.result.err.err (D:\\\\student_projects\\\\English_for_kids\\\\node_modules\\\\gensync\\\\index.js:223:11)\");\n\n//# sourceURL=webpack://english_for_kids/./src/scripts/section.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://english_for_kids/./src/css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;