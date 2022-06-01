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
exports.id = "pages/crypto/[coinId]";
exports.ids = ["pages/crypto/[coinId]"];
exports.modules = {

/***/ "./pages/crypto/[coinId].js":
/*!**********************************!*\
  !*** ./pages/crypto/[coinId].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SingleCoin = ({ data  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleClick = ()=>{\n        router.push(\"/crypto\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"List of Coins\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/crypto/[coinId].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"uses getServerSideProps to fetch the data and generate page on every request to the server.\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/crypto/[coinId].js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Market Value\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/crypto/[coinId].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"1 \",\n                    data.name,\n                    \" equals inr \",\n                    data.market_data.current_price.inr\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/crypto/[coinId].js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"1 \",\n                    data.name,\n                    \" equals usd \",\n                    data.market_data.current_price.usd\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/crypto/[coinId].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/crypto/[coinId].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCoin);\nasync function getServerSideProps(context) {\n    const { params , req , res  } = context;\n    console.log(req);\n    console.log(res);\n    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${params.coinId}`);\n    const data = await response.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcnlwdG8vW2NvaW5JZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBd0M7QUFFeEMsTUFBTUMsVUFBVSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFLEdBQUs7SUFDL0IsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCLE1BQU1JLFdBQVcsR0FBRyxJQUFNO1FBQ3hCRCxNQUFNLENBQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4QjtJQUNELHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSixXQUFXOzBCQUFFLGVBQWE7Ozs7O3lCQUFTOzBCQUNwRCw4REFBQ0ssR0FBQzswQkFBQyw2RkFHSDs7Ozs7eUJBQUk7MEJBQ0osOERBQUNDLElBQUU7MEJBQUMsY0FBWTs7Ozs7eUJBQUs7MEJBQ3JCLDhEQUFDRCxHQUFDOztvQkFBQyxJQUNDO29CQUFDUCxJQUFJLENBQUNTLElBQUk7b0JBQUMsY0FBWTtvQkFBQ1QsSUFBSSxDQUFDVSxXQUFXLENBQUNDLGFBQWEsQ0FBQ0MsR0FBRzs7Ozs7O3lCQUMxRDswQkFDSiw4REFBQ0wsR0FBQzs7b0JBQUMsSUFDQztvQkFBQ1AsSUFBSSxDQUFDUyxJQUFJO29CQUFDLGNBQVk7b0JBQUNULElBQUksQ0FBQ1UsV0FBVyxDQUFDQyxhQUFhLENBQUNFLEdBQUc7Ozs7Ozt5QkFDMUQ7Ozs7OztpQkFDQSxDQUNOO0NBQ0g7QUFFRCxpRUFBZWQsVUFBVSxFQUFDO0FBQ25CLGVBQWVlLGtCQUFrQixDQUFDQyxPQUFPLEVBQUU7SUFDaEQsTUFBTSxFQUFFQyxNQUFNLEdBQUVDLEdBQUcsR0FBRUMsR0FBRyxHQUFFLEdBQUdILE9BQU87SUFDcENJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHLENBQUMsQ0FBQztJQUNqQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLE1BQU1HLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLENBQUMsdUNBQXVDLEVBQUVOLE1BQU0sQ0FBQ08sTUFBTSxDQUFDLENBQUMsQ0FDMUQ7SUFDRCxNQUFNdkIsSUFBSSxHQUFHLE1BQU1xQixRQUFRLENBQUNHLElBQUksRUFBRTtJQUVsQyxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUNMekIsSUFBSTtTQUNMO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wcm9qZWN0Ly4vcGFnZXMvY3J5cHRvL1tjb2luSWRdLmpzP2Y5MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IFNpbmdsZUNvaW4gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL2NyeXB0b1wiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TGlzdCBvZiBDb2luczwvYnV0dG9uPlxuICAgICAgPHA+XG4gICAgICAgIHVzZXMgZ2V0U2VydmVyU2lkZVByb3BzIHRvIGZldGNoIHRoZSBkYXRhIGFuZCBnZW5lcmF0ZSBwYWdlIG9uIGV2ZXJ5XG4gICAgICAgIHJlcXVlc3QgdG8gdGhlIHNlcnZlci5cbiAgICAgIDwvcD5cbiAgICAgIDxoMz5NYXJrZXQgVmFsdWU8L2gzPlxuICAgICAgPHA+XG4gICAgICAgIDEge2RhdGEubmFtZX0gZXF1YWxzIGluciB7ZGF0YS5tYXJrZXRfZGF0YS5jdXJyZW50X3ByaWNlLmlucn1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICAxIHtkYXRhLm5hbWV9IGVxdWFscyB1c2Qge2RhdGEubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2R9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVDb2luO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHsgcGFyYW1zLCByZXEsIHJlcyB9ID0gY29udGV4dDtcbiAgY29uc29sZS5sb2cocmVxKTtcbiAgY29uc29sZS5sb2cocmVzKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvJHtwYXJhbXMuY29pbklkfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiU2luZ2xlQ29pbiIsImRhdGEiLCJyb3V0ZXIiLCJoYW5kbGVDbGljayIsInB1c2giLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsImgzIiwibmFtZSIsIm1hcmtldF9kYXRhIiwiY3VycmVudF9wcmljZSIsImluciIsInVzZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImNvaW5JZCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/crypto/[coinId].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/crypto/[coinId].js"));
module.exports = __webpack_exports__;

})();