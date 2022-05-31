"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
exports.modules = {

/***/ "(api)/./data/comments.js":
/*!**************************!*\
  !*** ./data/comments.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\n// window.localStorage;\nconst comments = [\n    {\n        id: 1,\n        text: \"First\"\n    },\n    {\n        id: 2,\n        text: \"Second\"\n    },\n    {\n        id: 3,\n        text: \"Third\"\n    }, \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1QkFBdUI7QUFDaEIsTUFBTUEsUUFBUSxHQUFHO0lBQ3RCO1FBQ0VDLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFRCxFQUFFLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUsUUFBUTtLQUNmO0lBQ0Q7UUFDRUQsRUFBRSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9kYXRhL2NvbW1lbnRzLmpzP2YzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gd2luZG93LmxvY2FsU3RvcmFnZTtcbmV4cG9ydCBjb25zdCBjb21tZW50cyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRleHQ6IFwiRmlyc3RcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRleHQ6IFwiU2Vjb25kXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0ZXh0OiBcIlRoaXJkXCIsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbImNvbW1lbnRzIiwiaWQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./data/comments.js\n");

/***/ }),

/***/ "(api)/./pages/api/comments/index.js":
/*!*************************************!*\
  !*** ./pages/api/comments/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/comments */ \"(api)/./data/comments.js\");\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        res.status(200).json(_data_comments__WEBPACK_IMPORTED_MODULE_0__.comments);\n    } else if (req.method === \"POST\") {\n        console.log(req.body);\n        const comment = req.body.comment;\n        const newComment = {\n            id: Date.now(),\n            text: comment\n        };\n        _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.push(newComment);\n        res.status(201).json(newComment);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0Q7QUFDbkMsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEJELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNOLG9EQUFRLENBQUMsQ0FBQztLQUNoQyxNQUFNLElBQUlFLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUNoQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNOLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7UUFDdEIsTUFBTUMsT0FBTyxHQUFHUixHQUFHLENBQUNPLElBQUksQ0FBQ0MsT0FBTztRQUNoQyxNQUFNQyxVQUFVLEdBQUc7WUFDakJDLEVBQUUsRUFBRUMsSUFBSSxDQUFDQyxHQUFHLEVBQUU7WUFDZEMsSUFBSSxFQUFFTCxPQUFPO1NBQ2Q7UUFDRFYseURBQWEsQ0FBQ1csVUFBVSxDQUFDLENBQUM7UUFDMUJSLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNLLFVBQVUsQ0FBQyxDQUFDO0tBQ2xDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9wYWdlcy9hcGkvY29tbWVudHMvaW5kZXguanM/MDk5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21tZW50cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbW1lbnRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29tbWVudHMpO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICAgIGNvbnN0IGNvbW1lbnQgPSByZXEuYm9keS5jb21tZW50O1xuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB7XG4gICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQ6IGNvbW1lbnQsXG4gICAgfTtcbiAgICBjb21tZW50cy5wdXNoKG5ld0NvbW1lbnQpO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld0NvbW1lbnQpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29tbWVudHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiY29tbWVudCIsIm5ld0NvbW1lbnQiLCJpZCIsIkRhdGUiLCJub3ciLCJ0ZXh0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/index.js"));
module.exports = __webpack_exports__;

})();