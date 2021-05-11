webpackHotUpdate_N_E("pages/channel",{

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/daxtheone/proyectos/nextjscurso/pages/_error.js";


function Error(_ref) {
  var statusCode = _ref.statusCode;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: statusCode ? "An error ".concat(statusCode, " occurred on server") : 'An error occurred on client'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = Error;

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_ListAudioClips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ListAudioClips */ "./components/ListAudioClips.jsx");
/* harmony import */ var _components_ListSeries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ListSeries */ "./components/ListSeries.jsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ "./pages/_error.js");


var _jsxFileName = "/home/daxtheone/proyectos/nextjscurso/pages/channel.js";







function channel(_ref) {
  var _this = this;

  var channel = _ref.channel,
      audioClips = _ref.audioClips,
      series = _ref.series,
      statusCode = _ref.statusCode;

  if (statusCode !== 200) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_error__WEBPACK_IMPORTED_MODULE_6__["default"], {
      statusCode: statusCode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Canal ".concat(channel.title)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "jsx-2920312737",
      children: channel.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "jsx-2920312737",
      children: "\xDAltimos podcasts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), audioClips.map(function (clip) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ListAudioClips__WEBPACK_IMPORTED_MODULE_4__["default"], {
        clip: clip
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "jsx-2920312737",
      children: "Series"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), series.map(function (serie) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ListSeries__WEBPACK_IMPORTED_MODULE_5__["default"], {
        serie: serie
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2920312737",
      children: "h1.jsx-2920312737{font-weight:600;padding:15px;}h2.jsx-2920312737{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-aling:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RheHRoZW9uZS9wcm95ZWN0b3MvbmV4dGpzY3Vyc28vcGFnZXMvY2hhbm5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBRzJCLEFBSUYsWUFDSSxJQUpMLFlBS0ssQ0FKcEIsZUFLYSxTQUNTLGtCQUN0QiIsImZpbGUiOiIvaG9tZS9kYXh0aGVvbmUvcHJveWVjdG9zL25leHRqc2N1cnNvL3BhZ2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpc3RBdWRpb0NsaXBzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEF1ZGlvQ2xpcHMnXG5pbXBvcnQgTGlzdFNlcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RTZXJpZXMnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InXG5cbmZ1bmN0aW9uIGNoYW5uZWwoeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGUgfSkge1xuICBpZiAoIHN0YXR1c0NvZGUgIT09IDIwMCApe1xuICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz4gXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCB0aXRsZT17YENhbmFsICR7Y2hhbm5lbC50aXRsZX1gfT48L0xheW91dD5cbiAgICAgIDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxuICAgICAgPGgyPsOabHRpbW9zIHBvZGNhc3RzPC9oMj5cbiAgICAgIHsgYXVkaW9DbGlwcy5tYXAoKGNsaXApPT57XG4gICAgICAgIHJldHVybiA8TGlzdEF1ZGlvQ2xpcHMgY2xpcD17Y2xpcH0gLz5cbiAgICAgIH0pIH1cbiAgICAgIDxoMj5TZXJpZXM8L2gyPlxuICAgICAgIHsgc2VyaWVzLm1hcCgoc2VyaWUpPT57XG4gICAgICAgICByZXR1cm4gPExpc3RTZXJpZXMgc2VyaWU9e3NlcmllfSAvPlxuICAgICAgfSkgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGluZzogY2VudGVyO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoIHsgcXVlcnksIHJlcyB9KSB7XG5cbiAgY29uc3QgY2hhbm5lbElkID0gcXVlcnkuaWRcbiAgdHJ5IHtcbiAgICBsZXQgW3JlcUNoYW5uZWwsIHJlcVNlcmllcywgcmVxQXVkaW9zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApLFxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYCksXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vYXVkaW9fY2xpcHNgKVxuICAgIF0pXG4gICAgaWYgKCByZXFDaGFubmVsLnN0YXR1cyA+PSA0MDQgKSB7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcUNoYW5uZWwuc3RhdHVzXG4gICAgICByZXR1cm4geyBwcm9wczogeyBjaGFubmVsOiBudWxsLCBhdWRpb0NsaXBzOiBudWxsLCBzZXJpZXM6IG51bGwsIHN0YXR1c0NvZGU6IHJlcUNoYW5uZWwuc3RhdHVzIH0gfVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBjb25zdCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsIFxuICBcbiAgICBjb25zdCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKVxuICAgIGNvbnN0IGF1ZGlvQ2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHMgIFxuICBcbiAgICBjb25zdCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIGNvbnN0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuICAgIFxuICAgIC8qXG4gICAgY29uc3QgcmVxQ2hhbm5lbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApXG4gICAgY29uc3QgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgIGNvbnN0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWwgXG4gIFxuICAgIGNvbnN0IHJlcUF1ZGlvcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9hdWRpb19jbGlwc2ApXG4gICAgY29uc3QgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBjb25zdCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzICBcbiAgXG4gICAgY29uc3QgcmVxU2VyaWVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYClcbiAgICBjb25zdCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIGNvbnN0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVscyAgXG4gIFxuICAgICovXG4gIFxuICAgIHJldHVybiB7IHByb3BzOiB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZTogMjAwIH0gfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgY2hhbm5lbDogbnVsbCwgYXVkaW9DbGlwczogbnVsbCwgc2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfSB9XG4gIH1cblxuXG59XG5leHBvcnQgZGVmYXVsdCBjaGFubmVsXG4iXX0= */\n/*@ sourceURL=/home/daxtheone/proyectos/nextjscurso/pages/channel.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (channel);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFubmVsLmpzIl0sIm5hbWVzIjpbIkVycm9yIiwic3RhdHVzQ29kZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciIsImNoYW5uZWwiLCJhdWRpb0NsaXBzIiwic2VyaWVzIiwidGl0bGUiLCJtYXAiLCJjbGlwIiwic2VyaWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsS0FBVCxPQUErQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUM3QixzQkFDRTtBQUFBLGNBQ0dBLFVBQVUsc0JBQ0tBLFVBREwsMkJBRVA7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0FSUUQsSzs7QUFVVEEsS0FBSyxDQUFDRSxlQUFOLEdBQXdCLGlCQUFrQjtBQUFBLE1BQWZDLEdBQWUsU0FBZkEsR0FBZTtBQUFBLE1BQVZDLEdBQVUsU0FBVkEsR0FBVTtBQUN4QyxNQUFNSCxVQUFVLEdBQUdFLEdBQUcsR0FBR0EsR0FBRyxDQUFDRixVQUFQLEdBQW9CRyxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0gsVUFBUCxHQUFvQixHQUFqRTtBQUNBLFNBQU87QUFBRUEsY0FBVSxFQUFWQTtBQUFGLEdBQVA7QUFDRCxDQUhEOztBQUtlRCxvRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTSyxPQUFULE9BQThEO0FBQUE7O0FBQUEsTUFBM0NBLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDQyxVQUFrQyxRQUFsQ0EsVUFBa0M7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZE4sVUFBYyxRQUFkQSxVQUFjOztBQUM1RCxNQUFLQSxVQUFVLEtBQUssR0FBcEIsRUFBeUI7QUFDdkIsd0JBQU8scUVBQUMsOENBQUQ7QUFBTyxnQkFBVSxFQUFFQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQVEsV0FBSyxrQkFBV0ksT0FBTyxDQUFDRyxLQUFuQjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQSxnQkFBS0gsT0FBTyxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlJRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQVE7QUFDdkIsMEJBQU8scUVBQUMsa0VBQUQ7QUFBZ0IsWUFBSSxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZDLENBSkosZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsRUFRS0gsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0UsS0FBRCxFQUFTO0FBQ3BCLDBCQUFPLHFFQUFDLDhEQUFEO0FBQVksYUFBSyxFQUFFQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRixLQUZFLENBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQTJCRDs7O0FBZ0RjTixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGFubmVsLjQwODJjYjJhMGI5ZTMwMjAyZjE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEVycm9yKHsgc3RhdHVzQ29kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPHA+XG4gICAgICB7c3RhdHVzQ29kZVxuICAgICAgICA/IGBBbiBlcnJvciAke3N0YXR1c0NvZGV9IG9jY3VycmVkIG9uIHNlcnZlcmBcbiAgICAgICAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50J31cbiAgICA8L3A+XG4gIClcbn1cblxuRXJyb3IuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVzLCBlcnIgfSkgPT4ge1xuICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNFxuICByZXR1cm4geyBzdGF0dXNDb2RlIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3IiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpc3RBdWRpb0NsaXBzIGZyb20gJy4uL2NvbXBvbmVudHMvTGlzdEF1ZGlvQ2xpcHMnXG5pbXBvcnQgTGlzdFNlcmllcyBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RTZXJpZXMnXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InXG5cbmZ1bmN0aW9uIGNoYW5uZWwoeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGUgfSkge1xuICBpZiAoIHN0YXR1c0NvZGUgIT09IDIwMCApe1xuICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz4gXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCB0aXRsZT17YENhbmFsICR7Y2hhbm5lbC50aXRsZX1gfT48L0xheW91dD5cbiAgICAgIDxoMT57Y2hhbm5lbC50aXRsZX08L2gxPlxuICAgICAgPGgyPsOabHRpbW9zIHBvZGNhc3RzPC9oMj5cbiAgICAgIHsgYXVkaW9DbGlwcy5tYXAoKGNsaXApPT57XG4gICAgICAgIHJldHVybiA8TGlzdEF1ZGlvQ2xpcHMgY2xpcD17Y2xpcH0gLz5cbiAgICAgIH0pIH1cbiAgICAgIDxoMj5TZXJpZXM8L2gyPlxuICAgICAgIHsgc2VyaWVzLm1hcCgoc2VyaWUpPT57XG4gICAgICAgICByZXR1cm4gPExpc3RTZXJpZXMgc2VyaWU9e3NlcmllfSAvPlxuICAgICAgfSkgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgdGV4dC1hbGluZzogY2VudGVyO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoIHsgcXVlcnksIHJlcyB9KSB7XG5cbiAgY29uc3QgY2hhbm5lbElkID0gcXVlcnkuaWRcbiAgdHJ5IHtcbiAgICBsZXQgW3JlcUNoYW5uZWwsIHJlcVNlcmllcywgcmVxQXVkaW9zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApLFxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYCksXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vYXVkaW9fY2xpcHNgKVxuICAgIF0pXG4gICAgaWYgKCByZXFDaGFubmVsLnN0YXR1cyA+PSA0MDQgKSB7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcUNoYW5uZWwuc3RhdHVzXG4gICAgICByZXR1cm4geyBwcm9wczogeyBjaGFubmVsOiBudWxsLCBhdWRpb0NsaXBzOiBudWxsLCBzZXJpZXM6IG51bGwsIHN0YXR1c0NvZGU6IHJlcUNoYW5uZWwuc3RhdHVzIH0gfVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBjb25zdCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsIFxuICBcbiAgICBjb25zdCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKVxuICAgIGNvbnN0IGF1ZGlvQ2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHMgIFxuICBcbiAgICBjb25zdCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIGNvbnN0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVsc1xuICAgIFxuICAgIC8qXG4gICAgY29uc3QgcmVxQ2hhbm5lbCA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfWApXG4gICAgY29uc3QgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgIGNvbnN0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWwgXG4gIFxuICAgIGNvbnN0IHJlcUF1ZGlvcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9hdWRpb19jbGlwc2ApXG4gICAgY29uc3QgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBjb25zdCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzICBcbiAgXG4gICAgY29uc3QgcmVxU2VyaWVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2NoaWxkX2NoYW5uZWxzYClcbiAgICBjb25zdCBkYXRhU2VyaWVzID0gYXdhaXQgcmVxU2VyaWVzLmpzb24oKVxuICAgIGNvbnN0IHNlcmllcyA9IGRhdGFTZXJpZXMuYm9keS5jaGFubmVscyAgXG4gIFxuICAgICovXG4gIFxuICAgIHJldHVybiB7IHByb3BzOiB7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZTogMjAwIH0gfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgY2hhbm5lbDogbnVsbCwgYXVkaW9DbGlwczogbnVsbCwgc2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfSB9XG4gIH1cblxuXG59XG5leHBvcnQgZGVmYXVsdCBjaGFubmVsXG4iXSwic291cmNlUm9vdCI6IiJ9