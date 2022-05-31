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
exports.id = "pages/todo";
exports.ids = ["pages/todo"];
exports.modules = {

/***/ "./context/Context.js":
/*!****************************!*\
  !*** ./context/Context.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": () => (/* binding */ Context),\n/* harmony export */   \"ContextFunction\": () => (/* binding */ ContextFunction)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\n\nconst ContextFunction = (props)=>{\n    const { 0: comment , 1: setComment  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: comments , 1: setComments  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: id1 , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: text , 1: setText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadComment();\n    }, []);\n    const updateComment = async (id)=>{\n        const res = await fetch(`/api/comments/${id}`, {\n            method: \"PUT\",\n            body: JSON.stringify({\n                text\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n        console.log(data);\n        loadComment();\n        setId(\"\");\n    };\n    const loadComment = async ()=>{\n        const res = await fetch(\"/api/comments\");\n        const data = await res.json();\n        setComments(data);\n    };\n    const addComment = async ()=>{\n        const res = await fetch(\"/api/comments\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                comment\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const data = await res.json();\n        console.log(data);\n        loadComment();\n        setComment(\"\");\n    };\n    const deleteComment = async (id)=>{\n        const res = await fetch(`/api/comments/${id}`, {\n            method: \"DELETE\"\n        });\n        const data = await res.json();\n        console.log(data);\n        loadComment();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            comment,\n            comments,\n            id: id1,\n            setId,\n            text,\n            setText,\n            updateComment,\n            loadComment,\n            deleteComment,\n            addComment,\n            setComment\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/subhamshrivastava/Desktop/next-project/context/Context.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TEMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BFLGFBQWE7WUFDYkQsV0FBVztZQUNYYyxhQUFhO1lBQ2JELFVBQVU7WUFDVnBCLFVBQVU7U0FDWDtrQkFFQUYsS0FBSyxDQUFDMEIsUUFBUTs7Ozs7aUJBQ0UsQ0FDbkI7Q0FDSDtBQUNtQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcHJvamVjdC8uL2NvbnRleHQvQ29udGV4dC5qcz9mZjQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBDb250ZXh0RnVuY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9hZENvbW1lbnQoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwZGF0ZUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50cy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGV4dCB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGxvYWRDb21tZW50KCk7XG4gICAgc2V0SWQoXCJcIik7XG4gIH07XG5cbiAgY29uc3QgbG9hZENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbW1lbnRzXCIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHNldENvbW1lbnRzKGRhdGEpO1xuICB9O1xuICBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb21tZW50c1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50IH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgbG9hZENvbW1lbnQoKTtcbiAgICBzZXRDb21tZW50KFwiXCIpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUNvbW1lbnQgPSBhc3luYyAoaWQpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50cy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBsb2FkQ29tbWVudCgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb21tZW50LFxuICAgICAgICBjb21tZW50cyxcbiAgICAgICAgaWQsXG4gICAgICAgIHNldElkLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBzZXRUZXh0LFxuICAgICAgICB1cGRhdGVDb21tZW50LFxuICAgICAgICBsb2FkQ29tbWVudCxcbiAgICAgICAgZGVsZXRlQ29tbWVudCxcbiAgICAgICAgYWRkQ29tbWVudCxcbiAgICAgICAgc2V0Q29tbWVudCxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5leHBvcnQgeyBDb250ZXh0LCBDb250ZXh0RnVuY3Rpb24gfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250ZXh0RnVuY3Rpb24iLCJwcm9wcyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImlkIiwic2V0SWQiLCJ0ZXh0Iiwic2V0VGV4dCIsImxvYWRDb21tZW50IiwidXBkYXRlQ29tbWVudCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiYWRkQ29tbWVudCIsImRlbGV0ZUNvbW1lbnQiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/Context.js\n");

/***/ }),

/***/ "./pages/todo/index.js":
/*!*****************************!*\
  !*** ./pages/todo/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/Context */ \"./context/Context.js\");\n\n\n\n\nconst todo = ()=>{\n    // const [comment, setComment] = useState(\"\");\n    // const [comments, setComments] = useState([]);\n    // const [id, setId] = useState();\n    // const [text, setText] = useState(\"\");\n    // useEffect(() => {\n    //   loadComment();\n    // }, []);\n    // const updateComment = async (id) => {\n    //   const res = await fetch(`/api/comments/${id}`, {\n    //     method: \"PUT\",\n    //     body: JSON.stringify({ text }),\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //     },\n    //   });\n    //   const data = await res.json();\n    //   console.log(data);\n    //   loadComment();\n    //   setId(\"\");\n    // };\n    // const loadComment = async () => {\n    //   const res = await fetch(\"/api/comments\");\n    //   const data = await res.json();\n    //   setComments(data);\n    // };\n    // const addComment = async () => {\n    //   const res = await fetch(\"/api/comments\", {\n    //     method: \"POST\",\n    //     body: JSON.stringify({ comment }),\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //     },\n    //   });\n    //   const data = await res.json();\n    //   console.log(data);\n    //   loadComment();\n    //   setComment(\"\");\n    // };\n    // const deleteComment = async (id) => {\n    //   const res = await fetch(`/api/comments/${id}`, {\n    //     method: \"DELETE\",\n    //   });\n    //   const data = await res.json();\n    //   console.log(data);\n    //   loadComment();\n    // };\n    const { comment: comment1 , comments , id , text , setText , setComment , setComments , setId , addComment , updateComment , deleteComment , loadComment ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Uses Next API routes to send request and get response and Context Api to manage all the state and functions\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Todo \"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: (e)=>{\n                    setComment(e.target.value);\n                },\n                value: comment1\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: !comment1.length,\n                onClick: addComment,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: comments.map((comment)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            comment.text,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>{\n                                    setId(comment.id);\n                                },\n                                children: \"Modify\"\n                            }, void 0, false, {\n                                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, undefined),\n                            comment.id === id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        onChange: (e)=>{\n                                            setText(e.target.value);\n                                        },\n                                        value: text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>{\n                                            updateComment(comment.id);\n                                        },\n                                        children: \"Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true) : \"\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>deleteComment(comment.id)\n                                ,\n                                children: \"Delete Text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                                lineNumber: 120,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, comment.id, true, {\n                        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/subhamshrivastava/Desktop/next-project/pages/todo/index.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7OzRDQUNSLEdBRUgsRUFBRTswQ0FFSiw4REFBQ21CLFFBQU07Z0NBQUNHLE9BQU8sRUFBRSxJQUFNZCxhQUFhLENBQUNWLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDO2dDQUFBOzBDQUFFLGFBRWxEOzs7Ozt5Q0FBUzs7dUJBL0JGRixPQUFPLENBQUNFLEVBQUU7Ozs7aUNBZ0NkLENBQ0w7aUJBQ0gsQ0FBQzs7Ozs7eUJBQ0M7Ozs7OztpQkFDRCxDQUNOO0NBQ0g7QUFDRCxpRUFBZUgsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wcm9qZWN0Ly4vcGFnZXMvdG9kby9pbmRleC5qcz84YmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9Db250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCB0b2RvID0gKCkgPT4ge1xuICAvLyBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoKTtcbiAgLy8gY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBsb2FkQ29tbWVudCgpO1xuICAvLyB9LCBbXSk7XG5cbiAgLy8gY29uc3QgdXBkYXRlQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbW1lbnRzLyR7aWR9YCwge1xuICAvLyAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0ZXh0IH0pLFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgLy8gICAgIH0sXG4gIC8vICAgfSk7XG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgbG9hZENvbW1lbnQoKTtcbiAgLy8gICBzZXRJZChcIlwiKTtcbiAgLy8gfTtcblxuICAvLyBjb25zdCBsb2FkQ29tbWVudCA9IGFzeW5jICgpID0+IHtcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvY29tbWVudHNcIik7XG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIC8vICAgc2V0Q29tbWVudHMoZGF0YSk7XG4gIC8vIH07XG4gIC8vIGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbW1lbnRzXCIsIHtcbiAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnQgfSksXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KTtcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICBsb2FkQ29tbWVudCgpO1xuICAvLyAgIHNldENvbW1lbnQoXCJcIik7XG4gIC8vIH07XG5cbiAgLy8gY29uc3QgZGVsZXRlQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2NvbW1lbnRzLyR7aWR9YCwge1xuICAvLyAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAvLyAgIH0pO1xuICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAvLyAgIGxvYWRDb21tZW50KCk7XG4gIC8vIH07XG4gIGNvbnN0IHtcbiAgICBjb21tZW50LFxuICAgIGNvbW1lbnRzLFxuICAgIGlkLFxuICAgIHRleHQsXG4gICAgc2V0VGV4dCxcbiAgICBzZXRDb21tZW50LFxuICAgIHNldENvbW1lbnRzLFxuICAgIHNldElkLFxuICAgIGFkZENvbW1lbnQsXG4gICAgdXBkYXRlQ29tbWVudCxcbiAgICBkZWxldGVDb21tZW50LFxuICAgIGxvYWRDb21tZW50LFxuICB9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5cbiAgICAgICAgVXNlcyBOZXh0IEFQSSByb3V0ZXMgdG8gc2VuZCByZXF1ZXN0IGFuZCBnZXQgcmVzcG9uc2UgYW5kIENvbnRleHQgQXBpIHRvXG4gICAgICAgIG1hbmFnZSBhbGwgdGhlIHN0YXRlIGFuZCBmdW5jdGlvbnNcbiAgICAgIDwvcD5cbiAgICAgIDxoMT5Ub2RvIDwvaDE+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e2NvbW1lbnR9XG4gICAgICAvPlxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWNvbW1lbnQubGVuZ3RofSBvbkNsaWNrPXthZGRDb21tZW50fT5cbiAgICAgICAgQWRkXG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgPHVsPlxuICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e2NvbW1lbnQuaWR9PlxuICAgICAgICAgICAgICB7Y29tbWVudC50ZXh0fVxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0SWQoY29tbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1vZGlmeVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge2NvbW1lbnQuaWQgPT09IGlkID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ29tbWVudChjb21tZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlQ29tbWVudChjb21tZW50LmlkKX0+XG4gICAgICAgICAgICAgICAgRGVsZXRlIFRleHRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCB0b2RvO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGV4dCIsInVzZUNvbnRleHQiLCJ0b2RvIiwiY29tbWVudCIsImNvbW1lbnRzIiwiaWQiLCJ0ZXh0Iiwic2V0VGV4dCIsInNldENvbW1lbnQiLCJzZXRDb21tZW50cyIsInNldElkIiwiYWRkQ29tbWVudCIsInVwZGF0ZUNvbW1lbnQiLCJkZWxldGVDb21tZW50IiwibG9hZENvbW1lbnQiLCJkaXYiLCJwIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsImRpc2FibGVkIiwibGVuZ3RoIiwib25DbGljayIsInVsIiwibWFwIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/todo/index.js"));
module.exports = __webpack_exports__;

})();