"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(view)/tools/page",{

/***/ "(app-pages-browser)/./app/(view)/tools/styles/tools.css":
/*!*******************************************!*\
  !*** ./app/(view)/tools/styles/tools.css ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"db74f90e8382\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8odmlldykvdG9vbHMvc3R5bGVzL3Rvb2xzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyh2aWV3KS90b29scy9zdHlsZXMvdG9vbHMuY3NzPzE2NjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkYjc0ZjkwZTgzODJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(view)/tools/styles/tools.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx":
/*!****************************************************************************************!*\
  !*** ./app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx ***!
  \****************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ OvertimeBonusCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction OvertimeBonusCalculator() {\n    _s();\n    const [overtimeBonus, setOvertimeBonus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [scrapSold, setScrapSold] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [quotaAmount, setQuotaAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const renderAbout = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"text\", {\n            children: \"Calculate overtime bonus.\"\n        }, void 0, false, {\n            fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this);\n    };\n    const CalculateOvertimeBonus = ()=>{\n        if (!scrapSold) return;\n        if (!quotaAmount) return;\n        return (scrapSold - quotaAmount) / 5 - 15;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"view\", {\n        children: [\n            renderAbout(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: 12\n                        },\n                        children: \"Scrap Sold\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"scrap-sold\",\n                        className: \"input-box\",\n                        placeholder: \"Input Scrap Sold\",\n                        onChange: (event)=>setScrapSold(Number(event.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            fontSize: 12\n                        },\n                        children: \"Quota Amount\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"scrap-sold\",\n                        className: \"input-box\",\n                        placeholder: \"Input Quota Amount\",\n                        onChange: (event)=>setQuotaAmount(Number(event.target.value))\n                    }, void 0, false, {\n                        fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Overtime Bonus: \",\n                    quotaAmount\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nakane/Programs/lethal_company_tools/app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(OvertimeBonusCalculator, \"NwThipR7YH1FJjfLQVfa4v3Sz5Y=\");\n_c = OvertimeBonusCalculator;\nvar _c;\n$RefreshReg$(_c, \"OvertimeBonusCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8odmlldykvdG9vbHMvX2NvbXBvbmVudC9PdmVydGltZUJvbnVzQ2FsY2xhdG9yL092ZXJ0aW1lQm9udXNDYWxjdWxhdG9yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0M7O0lBRXRCLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdILCtDQUFRQTtJQUNsRCxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUE7SUFFOUMsTUFBTVEsY0FBYztRQUNsQixxQkFDRSw4REFBQ0M7c0JBQUs7Ozs7OztJQUlWO0lBRUEsTUFBTUMseUJBQXlCO1FBQzdCLElBQUksQ0FBQ04sV0FBVztRQUNoQixJQUFJLENBQUNFLGFBQWE7UUFFbEIsT0FBTyxDQUFDRixZQUFZRSxXQUFVLElBQUssSUFBSTtJQUN6QztJQUVBLHFCQUNFLDhEQUFDSzs7WUFDRUg7MEJBQ0QsOERBQUNJOztrQ0FDQyw4REFBQ0E7d0JBQUlDLE9BQU87NEJBQUVDLFVBQVU7d0JBQUc7a0NBQUc7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIQyxXQUFVO3dCQUNWQyxhQUFZO3dCQUNaQyxVQUFVLENBQUNDLFFBQ1RoQixhQUFhaUIsT0FBT0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozs7MEJBSzVDLDhEQUFDWjs7a0NBQ0MsOERBQUNBO3dCQUFJQyxPQUFPOzRCQUFFQyxVQUFVO3dCQUFHO2tDQUFHOzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSEMsV0FBVTt3QkFDVkMsYUFBWTt3QkFDWkMsVUFBVSxDQUFDQyxRQUNUZCxlQUFlZSxPQUFPRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7OzswQkFJOUMsOERBQUNaOztvQkFBSTtvQkFDY047Ozs7Ozs7Ozs7Ozs7QUFJekI7R0F0RHdCTDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHZpZXcpL3Rvb2xzL19jb21wb25lbnQvT3ZlcnRpbWVCb251c0NhbGNsYXRvci9PdmVydGltZUJvbnVzQ2FsY3VsYXRvci50c3g/NTBmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPdmVydGltZUJvbnVzQ2FsY3VsYXRvcigpIHtcblxuICBjb25zdCBbb3ZlcnRpbWVCb251cywgc2V0T3ZlcnRpbWVCb251c10gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtzY3JhcFNvbGQsIHNldFNjcmFwU29sZF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtxdW90YUFtb3VudCwgc2V0UXVvdGFBbW91bnRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IHJlbmRlckFib3V0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dGV4dD5cbiAgICAgICAgQ2FsY3VsYXRlIG92ZXJ0aW1lIGJvbnVzLlxuICAgICAgPC90ZXh0PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBDYWxjdWxhdGVPdmVydGltZUJvbnVzID0gKCkgPT4ge1xuICAgIGlmICghc2NyYXBTb2xkKSByZXR1cm47XG4gICAgaWYgKCFxdW90YUFtb3VudCkgcmV0dXJuO1xuXG4gICAgcmV0dXJuIChzY3JhcFNvbGQgLSBxdW90YUFtb3VudCkgLyA1IC0gMTU7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx2aWV3PlxuICAgICAge3JlbmRlckFib3V0KCl9XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT5TY3JhcCBTb2xkPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J251bWJlcidcbiAgICAgICAgICBpZD1cInNjcmFwLXNvbGRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWJveFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBTY3JhcCBTb2xkXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgc2V0U2NyYXBTb2xkKE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKVxuXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT5RdW90YSBBbW91bnQ8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT0nbnVtYmVyJ1xuICAgICAgICAgIGlkPVwic2NyYXAtc29sZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtYm94XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIklucHV0IFF1b3RhIEFtb3VudFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgIHNldFF1b3RhQW1vdW50KE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKVxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgT3ZlcnRpbWUgQm9udXM6IHtxdW90YUFtb3VudH1cbiAgICAgIDwvZGl2PlxuICAgIDwvdmlldz5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJPdmVydGltZUJvbnVzQ2FsY3VsYXRvciIsIm92ZXJ0aW1lQm9udXMiLCJzZXRPdmVydGltZUJvbnVzIiwic2NyYXBTb2xkIiwic2V0U2NyYXBTb2xkIiwicXVvdGFBbW91bnQiLCJzZXRRdW90YUFtb3VudCIsInJlbmRlckFib3V0IiwidGV4dCIsIkNhbGN1bGF0ZU92ZXJ0aW1lQm9udXMiLCJ2aWV3IiwiZGl2Iiwic3R5bGUiLCJmb250U2l6ZSIsImlucHV0IiwidHlwZSIsImlkIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwiTnVtYmVyIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(view)/tools/_component/OvertimeBonusCalclator/OvertimeBonusCalculator.tsx\n"));

/***/ })

});