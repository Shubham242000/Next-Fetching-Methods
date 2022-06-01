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
exports.id = "pages/api/comments/[commentId]";
exports.ids = ["pages/api/comments/[commentId]"];
exports.modules = {

/***/ "(api)/./data/comments.js":
/*!**************************!*\
  !*** ./data/comments.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\n// window.localStorage;\nconst comments = [\n    {\n        id: 1,\n        text: \"First\"\n    },\n    {\n        id: 2,\n        text: \"Second\"\n    },\n    {\n        id: 3,\n        text: \"Third\"\n    }, \n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2NvbW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSx1QkFBdUI7QUFDaEIsTUFBTUEsUUFBUSxHQUFHO0lBQ3RCO1FBQ0VDLEVBQUUsRUFBRSxDQUFDO1FBQ0xDLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFRCxFQUFFLEVBQUUsQ0FBQztRQUNMQyxJQUFJLEVBQUUsUUFBUTtLQUNmO0lBQ0Q7UUFDRUQsRUFBRSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFLE9BQU87S0FDZDtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9kYXRhL2NvbW1lbnRzLmpzP2YzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gd2luZG93LmxvY2FsU3RvcmFnZTtcbmV4cG9ydCBjb25zdCBjb21tZW50cyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRleHQ6IFwiRmlyc3RcIixcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRleHQ6IFwiU2Vjb25kXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0ZXh0OiBcIlRoaXJkXCIsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbImNvbW1lbnRzIiwiaWQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./data/comments.js\n");

/***/ }),

/***/ "(api)/./pages/api/comments/[commentId].js":
/*!*******************************************!*\
  !*** ./pages/api/comments/[commentId].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/comments */ \"(api)/./data/comments.js\");\n\nfunction handler(req, res) {\n    const { commentId  } = req.query;\n    if (req.method === \"GET\") {\n        const comment1 = _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.find((comment)=>{\n            return comment.id === parseInt(commentId);\n        });\n        res.status(200).json(comment1);\n    } else if (req.method === \"DELETE\") {\n        const deletedComment = _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.find((comment)=>{\n            return comment.id === parseInt(commentId);\n        });\n        const index = _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.findIndex((comment)=>{\n            return comment.id === parseInt(commentId);\n        });\n        _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.splice(index, 1);\n        res.status(200).json(deletedComment);\n    } else if (req.method === \"PUT\") {\n        const newText = req.body.text;\n        const index = _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.findIndex((comment)=>{\n            return parseInt(commentId) === comment.id;\n        });\n        console.log(index);\n        const newComment = {\n            id: Date.now(),\n            text: newText\n        };\n        _data_comments__WEBPACK_IMPORTED_MODULE_0__.comments.splice(index, 1, newComment);\n        res.status(200).json(newComment);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvW2NvbW1lbnRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0Q7QUFDbkMsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxNQUFNLEVBQUVDLFNBQVMsR0FBRSxHQUFHRixHQUFHLENBQUNHLEtBQUs7SUFDL0IsSUFBSUgsR0FBRyxDQUFDSSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLE1BQU1DLFFBQU8sR0FBR1AseURBQWEsQ0FBQyxDQUFDTyxPQUFPLEdBQUs7WUFDekMsT0FBT0EsT0FBTyxDQUFDRSxFQUFFLEtBQUtDLFFBQVEsQ0FBQ04sU0FBUyxDQUFDLENBQUM7U0FDM0MsQ0FBQztRQUNGRCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFPLENBQUMsQ0FBQztLQUMvQixNQUFNLElBQUlMLEdBQUcsQ0FBQ0ksTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUNsQyxNQUFNTyxjQUFjLEdBQUdiLHlEQUFhLENBQUMsQ0FBQ08sT0FBTyxHQUFLO1lBQ2hELE9BQU9BLE9BQU8sQ0FBQ0UsRUFBRSxLQUFLQyxRQUFRLENBQUNOLFNBQVMsQ0FBQyxDQUFDO1NBQzNDLENBQUM7UUFDRixNQUFNVSxLQUFLLEdBQUdkLDhEQUFrQixDQUFDLENBQUNPLE9BQU8sR0FBSztZQUM1QyxPQUFPQSxPQUFPLENBQUNFLEVBQUUsS0FBS0MsUUFBUSxDQUFDTixTQUFTLENBQUMsQ0FBQztTQUMzQyxDQUFDO1FBQ0ZKLDJEQUFlLENBQUNjLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQlgsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsY0FBYyxDQUFDLENBQUM7S0FDdEMsTUFBTSxJQUFJWCxHQUFHLENBQUNJLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDL0IsTUFBTVcsT0FBTyxHQUFHZixHQUFHLENBQUNnQixJQUFJLENBQUNDLElBQUk7UUFDN0IsTUFBTUwsS0FBSyxHQUFHZCw4REFBa0IsQ0FBQyxDQUFDTyxPQUFPLEdBQUs7WUFDNUMsT0FBT0csUUFBUSxDQUFDTixTQUFTLENBQUMsS0FBS0csT0FBTyxDQUFDRSxFQUFFLENBQUM7U0FDM0MsQ0FBQztRQUNGVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTVEsVUFBVSxHQUFHO1lBQ2pCYixFQUFFLEVBQUVjLElBQUksQ0FBQ0MsR0FBRyxFQUFFO1lBQ2RMLElBQUksRUFBRUYsT0FBTztTQUNkO1FBQ0RqQiwyREFBZSxDQUFDYyxLQUFLLEVBQUUsQ0FBQyxFQUFFUSxVQUFVLENBQUMsQ0FBQztRQUN0Q25CLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNVLFVBQVUsQ0FBQyxDQUFDO0tBQ2xDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9wYWdlcy9hcGkvY29tbWVudHMvW2NvbW1lbnRJZF0uanM/NGUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21tZW50cyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbW1lbnRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgY29tbWVudElkIH0gPSByZXEucXVlcnk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgY29uc3QgY29tbWVudCA9IGNvbW1lbnRzLmZpbmQoKGNvbW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBjb21tZW50LmlkID09PSBwYXJzZUludChjb21tZW50SWQpO1xuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbW1lbnQpO1xuICB9IGVsc2UgaWYgKHJlcS5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcbiAgICBjb25zdCBkZWxldGVkQ29tbWVudCA9IGNvbW1lbnRzLmZpbmQoKGNvbW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBjb21tZW50LmlkID09PSBwYXJzZUludChjb21tZW50SWQpO1xuICAgIH0pO1xuICAgIGNvbnN0IGluZGV4ID0gY29tbWVudHMuZmluZEluZGV4KChjb21tZW50KSA9PiB7XG4gICAgICByZXR1cm4gY29tbWVudC5pZCA9PT0gcGFyc2VJbnQoY29tbWVudElkKTtcbiAgICB9KTtcbiAgICBjb21tZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRlbGV0ZWRDb21tZW50KTtcbiAgfSBlbHNlIGlmIChyZXEubWV0aG9kID09PSBcIlBVVFwiKSB7XG4gICAgY29uc3QgbmV3VGV4dCA9IHJlcS5ib2R5LnRleHQ7XG4gICAgY29uc3QgaW5kZXggPSBjb21tZW50cy5maW5kSW5kZXgoKGNvbW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBwYXJzZUludChjb21tZW50SWQpID09PSBjb21tZW50LmlkO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICBjb25zdCBuZXdDb21tZW50ID0ge1xuICAgICAgaWQ6IERhdGUubm93KCksXG4gICAgICB0ZXh0OiBuZXdUZXh0LFxuICAgIH07XG4gICAgY29tbWVudHMuc3BsaWNlKGluZGV4LCAxLCBuZXdDb21tZW50KTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdDb21tZW50KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbW1lbnRzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbW1lbnRJZCIsInF1ZXJ5IiwibWV0aG9kIiwiY29tbWVudCIsImZpbmQiLCJpZCIsInBhcnNlSW50Iiwic3RhdHVzIiwianNvbiIsImRlbGV0ZWRDb21tZW50IiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJuZXdUZXh0IiwiYm9keSIsInRleHQiLCJjb25zb2xlIiwibG9nIiwibmV3Q29tbWVudCIsIkRhdGUiLCJub3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/[commentId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/[commentId].js"));
module.exports = __webpack_exports__;

})();