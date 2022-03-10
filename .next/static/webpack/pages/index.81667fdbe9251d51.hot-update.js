"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var onFavoriteToggle = function onFavoriteToggle(id) {\n        var speakersRecPrevious = speakersData.find(function(rec) {\n            // console.log(rec)\n            return rec.id === id;\n        });\n        // console.log(speakersRecPrevious.iterator]());\n        // [...speakersRecPrevious].map( key)\n        // {\n        //   console.log(key);\n        // }\n        var speakerRecUpdated = _objectSpread({}, speakersRecPrevious, {\n            favorite: !speakersRecPrevious.favorite\n        });\n        var speakersDataNew = speakersData.map(function(rec) {\n            console.log('speakersRecPrevious: ' + rec.first);\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    };\n    _s();\n    // const [speakersData, setSpeakersData] = useState(data);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), speakersData = ref[0], setSpeakersData = ref[1];\n    // console.log(speakersData.find(1))\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"D:\\\\ReactProjects\\\\sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\ReactProjects\\\\sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ReactProjects\\\\sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n}\n_s(SpeakersList, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList); // for (let i=0;i<10;i++){\n //   setTimeout(function() {\n //     speakersData['favorite']=!speakersData['favorite'];\n //   }, i*1000);\n // }\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDUztBQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFakNJLFlBQVksQ0FBQyxLQUFnQixFQUFFLENBQUM7UUFBakJDLFlBQVksR0FBZCxLQUFnQixDQUFkQSxZQUFZO1FBSXpCQyxnQkFBZ0IsR0FBekIsUUFBUSxDQUFDQSxnQkFBZ0IsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7UUFFN0IsR0FBSyxDQUFDQyxtQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxJQUFJLENBQzNDLFFBQVEsQ0FBRUMsR0FBRyxFQUNiLENBQUM7WUFDQyxFQUFtQjtZQUduQixNQUFNLENBQUNBLEdBQUcsQ0FBQ0osRUFBRSxLQUFLQSxFQUFFO1FBQ3RCLENBQUM7UUFFSCxFQUFnRDtRQUNoRCxFQUFxQztRQUNyQyxFQUFJO1FBQ0osRUFBc0I7UUFDdEIsRUFBSTtRQUVKLEdBQUssQ0FBQ0ssaUJBQWlCLHFCQUVsQkosbUJBQW1CO1lBQ3RCSyxRQUFRLEdBQUdMLG1CQUFtQixDQUFDSyxRQUFROztRQUV6QyxHQUFLLENBQUNDLGVBQWUsR0FBR0wsWUFBWSxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFFSixHQUFHLEVBQUUsQ0FBQztZQUN2REssT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBdUIseUJBQUNOLEdBQUcsQ0FBQ08sS0FBSztZQUM3QyxNQUFNLENBQUNQLEdBQUcsQ0FBQ0osRUFBRSxLQUFLQSxFQUFFLEdBQUdLLGlCQUFpQixHQUFHRCxHQUFHO1FBQ2hELENBQUM7UUFFRFEsZUFBZSxDQUFDTCxlQUFlO0lBQ2pDLENBQUM7O0lBL0JELEVBQTBEO0lBQzFELEdBQUssQ0FBbUNaLEdBQVUsR0FBVkEsK0NBQVEsSUFBekNPLFlBQVksR0FBcUJQLEdBQVUsS0FBN0JpQixlQUFlLEdBQUlqQixHQUFVO0lBK0JsRCxFQUFvQztJQUNwQyxNQUFNLDZFQUNIa0IsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBeUI7OEZBQ3JDRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFLO3NCQUNqQlosWUFBWSxDQUFDTSxHQUFHLENBQUMsUUFBUSxDQUFFTyxPQUFPLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSw2RUFDSHRCLGdEQUFPO29CQUVOc0IsT0FBTyxFQUFFQSxPQUFPO29CQUNoQmpCLFlBQVksRUFBRUEsWUFBWTtvQkFDMUJDLGdCQUFnQixFQUFFLFFBQ2hDLEdBRHNDLENBQUM7d0JBQ3ZCQSxnQkFBZ0IsQ0FBQ2dCLE9BQU8sQ0FBQ2YsRUFBRTtvQkFDN0IsQ0FBQzttQkFMSWUsT0FBTyxDQUFDZixFQUFFOzs7OztZQVFyQixDQUFDOzs7Ozs7Ozs7OztBQUlULENBQUM7R0FwRFFILFlBQVk7S0FBWkEsWUFBWTtBQXNEckIsK0RBQWVBLFlBQVksRUFHM0IsQ0FBMEI7QUFDMUIsQ0FBNEI7QUFDNUIsQ0FBMEQ7QUFDMUQsQ0FBZ0I7QUFDaEIsQ0FBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcbiAgLy8gY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuICBjb25zdCBbc3BlYWtlcnNEYXRhLCBzZXRTcGVha2Vyc0RhdGFdID0gdXNlU3RhdGUoKTtcblxuICBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlKGlkKSB7XG4gICAgXG4gICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKFxuICAgICAgZnVuY3Rpb24gKHJlYykgXG4gICAgICB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlYylcblxuXG4gICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xuICAgICAgfVxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coc3BlYWtlcnNSZWNQcmV2aW91cy5pdGVyYXRvcl0oKSk7XG4gICAgLy8gWy4uLnNwZWFrZXJzUmVjUHJldmlvdXNdLm1hcCgga2V5KVxuICAgIC8vIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgLy8gfVxuXG4gICAgY29uc3Qgc3BlYWtlclJlY1VwZGF0ZWQgPSB7XG4gICAgICBcbiAgICAgIC4uLnNwZWFrZXJzUmVjUHJldmlvdXMsXG4gICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUsXG4gICAgfTtcbiAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzcGVha2Vyc1JlY1ByZXZpb3VzOiAnK3JlYy5maXJzdCk7XG4gICAgICByZXR1cm4gcmVjLmlkID09PSBpZCA/IHNwZWFrZXJSZWNVcGRhdGVkIDogcmVjO1xuICAgIH0pO1xuXG4gICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coc3BlYWtlcnNEYXRhLmZpbmQoMSkpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNwZWFrZXJcbiAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxuICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxuICAgICAgICAgICAgICBzaG93U2Vzc2lvbnM9e3Nob3dTZXNzaW9uc31cbiAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGUoc3BlYWtlci5pZCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDtcblxuXG4vLyBmb3IgKGxldCBpPTA7aTwxMDtpKyspe1xuLy8gICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuLy8gICAgIHNwZWFrZXJzRGF0YVsnZmF2b3JpdGUnXT0hc3BlYWtlcnNEYXRhWydmYXZvcml0ZSddO1xuLy8gICB9LCBpKjEwMDApO1xuLy8gfSJdLCJuYW1lcyI6WyJTcGVha2VyIiwiZGF0YSIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3BlYWtlcnNMaXN0Iiwic2hvd1Nlc3Npb25zIiwib25GYXZvcml0ZVRvZ2dsZSIsImlkIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsInNwZWFrZXJzRGF0YSIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwiY29uc29sZSIsImxvZyIsImZpcnN0Iiwic2V0U3BlYWtlcnNEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ })

});