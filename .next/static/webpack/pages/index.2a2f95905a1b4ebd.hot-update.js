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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction SpeakersList(param) {\n    var showSessions = param.showSessions;\n    var onFavoriteToggle = function onFavoriteToggle(id) {\n        console.log('breh');\n        var speakersRecPrevious = speakersData.find(function(rec) {\n            return rec.id === id;\n        });\n        var speakerRecUpdated = _objectSpread({}, speakersRecPrevious, {\n            favorite: !speakersRecPrevious.favorite\n        });\n        var speakersDataNew = speakersData.map(function(rec) {\n            return rec.id === id ? speakerRecUpdated : rec;\n        });\n        setSpeakersData(speakersDataNew);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_SpeakerData__WEBPACK_IMPORTED_MODULE_2__.data), speakersData = ref[0], setSpeakersData = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container speakers-list\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: speakersData.map(function(speaker) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    speaker: speaker,\n                    showSessions: showSessions,\n                    onFavoriteToggle: function() {\n                        onFavoriteToggle(speaker.id);\n                    }\n                }, speaker.id, false, {\n                    fileName: \"D:\\\\ReactProjects\\\\sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this));\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\ReactProjects\\\\sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\ReactProjects\\\\sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this));\n}\n_s(SpeakersList, \"wuvWnGDG1cZpF3THbsQMJHztE6w=\");\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDUztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFdkJHLFlBQVksQ0FBQyxLQUFnQixFQUFFLENBQUM7UUFBakJDLFlBQVksR0FBZCxLQUFnQixDQUFkQSxZQUFZO1FBR3pCQyxnQkFBZ0IsR0FBekIsUUFBUSxDQUFDQSxnQkFBZ0IsQ0FBQ0MsRUFBRSxFQUFFLENBQUM7UUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU07UUFDbEIsR0FBSyxDQUFDQyxtQkFBbUIsR0FBR0MsWUFBWSxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFFQyxHQUFHLEVBQUUsQ0FBQztZQUM1RCxNQUFNLENBQUNBLEdBQUcsQ0FBQ04sRUFBRSxLQUFLQSxFQUFFO1FBQ3RCLENBQUM7UUFDRCxHQUFLLENBQUNPLGlCQUFpQixxQkFDbEJKLG1CQUFtQjtZQUN0QkssUUFBUSxHQUFHTCxtQkFBbUIsQ0FBQ0ssUUFBUTs7UUFFekMsR0FBSyxDQUFDQyxlQUFlLEdBQUdMLFlBQVksQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBRUosR0FBRyxFQUFFLENBQUM7WUFDdkQsTUFBTSxDQUFDQSxHQUFHLENBQUNOLEVBQUUsS0FBS0EsRUFBRSxHQUFHTyxpQkFBaUIsR0FBR0QsR0FBRztRQUNoRCxDQUFDO1FBRURLLGVBQWUsQ0FBQ0YsZUFBZTtJQUNqQyxDQUFDOztJQWhCRCxHQUFLLENBQW1DYixHQUFjLEdBQWRBLCtDQUFRLENBQUNELDhDQUFJLEdBQTlDUyxZQUFZLEdBQXFCUixHQUFjLEtBQWpDZSxlQUFlLEdBQUlmLEdBQWM7SUFrQnRELE1BQU0sNkVBQ0hnQixDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF5Qjs4RkFDckNELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQUs7c0JBQ2pCVCxZQUFZLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQUVJLE9BQU8sRUFBRSxDQUFDO2dCQUNwQyxNQUFNLDZFQUNIcEIsZ0RBQU87b0JBRU5vQixPQUFPLEVBQUVBLE9BQU87b0JBQ2hCaEIsWUFBWSxFQUFFQSxZQUFZO29CQUMxQkMsZ0JBQWdCLEVBQUUsUUFDaEMsR0FEc0MsQ0FBQzt3QkFDdkJBLGdCQUFnQixDQUFDZSxPQUFPLENBQUNkLEVBQUU7b0JBQzdCLENBQUM7bUJBTEljLE9BQU8sQ0FBQ2QsRUFBRTs7Ozs7WUFRckIsQ0FBQzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBckNRSCxZQUFZO0tBQVpBLFlBQVk7QUF1Q3JCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzPzJhNjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gU3BlYWtlcnNMaXN0KHsgc2hvd1Nlc3Npb25zIH0pIHtcbiAgY29uc3QgW3NwZWFrZXJzRGF0YSwgc2V0U3BlYWtlcnNEYXRhXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4gIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGUoaWQpIHtcbiAgICBjb25zb2xlLmxvZygnYnJlaCcpXG4gICAgY29uc3Qgc3BlYWtlcnNSZWNQcmV2aW91cyA9IHNwZWFrZXJzRGF0YS5maW5kKGZ1bmN0aW9uIChyZWMpIHtcbiAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xuICAgIH0pO1xuICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xuICAgICAgLi4uc3BlYWtlcnNSZWNQcmV2aW91cyxcbiAgICAgIGZhdm9yaXRlOiAhc3BlYWtlcnNSZWNQcmV2aW91cy5mYXZvcml0ZSxcbiAgICB9O1xuICAgIGNvbnN0IHNwZWFrZXJzRGF0YU5ldyA9IHNwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcbiAgICB9KTtcblxuICAgIHNldFNwZWFrZXJzRGF0YShzcGVha2Vyc0RhdGFOZXcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3BlYWtlclxuICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XG4gICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XG4gICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxuICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0O1xuIl0sIm5hbWVzIjpbIlNwZWFrZXIiLCJkYXRhIiwidXNlU3RhdGUiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJvbkZhdm9yaXRlVG9nZ2xlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic3BlYWtlcnNSZWNQcmV2aW91cyIsInNwZWFrZXJzRGF0YSIsImZpbmQiLCJyZWMiLCJzcGVha2VyUmVjVXBkYXRlZCIsImZhdm9yaXRlIiwic3BlYWtlcnNEYXRhTmV3IiwibWFwIiwic2V0U3BlYWtlcnNEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BlYWtlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ })

});