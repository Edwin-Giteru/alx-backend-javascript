/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sumMajorCredits = sumMajorCredits;\nexports.sumMinorCredits = sumMinorCredits;\n;\n;\nfunction sumMajorCredits(subject1, subject2) {\n    return {\n        credits: subject1.credits + subject2.credits,\n        brand: \"major\",\n    };\n}\nfunction sumMinorCredits(subject1, subject2) {\n    return {\n        credits: subject1.credits + subject2.credits,\n        brand: \"minor\",\n    };\n}\n\n\n//# sourceURL=webpack://0x04-typescript/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;