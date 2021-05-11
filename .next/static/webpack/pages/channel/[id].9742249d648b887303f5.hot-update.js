webpackHotUpdate_N_E("pages/channel/[id]",{

/***/ "./pages/channel/[id].js":
/*!*******************************!*\
  !*** ./pages/channel/[id].js ***!
  \*******************************/
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_ListAudioClips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ListAudioClips */ "./components/ListAudioClips.jsx");
/* harmony import */ var _components_ListSeries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ListSeries */ "./components/ListSeries.jsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_error */ "./pages/_error.js");


var _jsxFileName = "/home/danielrico/podcasts/pages/channel/[id].js";







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
      className: "jsx-3766649058",
      children: channel.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "jsx-3766649058",
      children: "\xDAltimos podcasts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-3766649058" + " " + 'contenedor',
      children: audioClips.map(function (clip) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ListAudioClips__WEBPACK_IMPORTED_MODULE_4__["default"], {
          clip: clip
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 20
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "jsx-3766649058",
      children: "Series"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), series.map(function (serie) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ListSeries__WEBPACK_IMPORTED_MODULE_5__["default"], {
        serie: serie
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3766649058",
      children: ".contenedor.jsx-3766649058{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}h1.jsx-3766649058{font-weight:600;padding:15px;}h2.jsx-3766649058{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-aling:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbHJpY28vcG9kY2FzdHMvcGFnZXMvY2hhbm5lbC9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCa0IsQUFHMEIsQUFNQyxBQUlGLFlBQ0ksQ0FWRixHQU1ILFdBTEUsQ0FVRyxDQUpwQixXQUxnRSxJQVVuRCxTQUNTLGtCQUN0QiwyQkFYQSIsImZpbGUiOiIvaG9tZS9kYW5pZWxyaWNvL3BvZGNhc3RzL3BhZ2VzL2NoYW5uZWwvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTGlzdEF1ZGlvQ2xpcHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0QXVkaW9DbGlwcydcbmltcG9ydCBMaXN0U2VyaWVzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGlzdFNlcmllcydcbmltcG9ydCBFcnJvciBmcm9tICcuLy4uL19lcnJvcidcblxuZnVuY3Rpb24gY2hhbm5lbCh7IGNoYW5uZWwsIGF1ZGlvQ2xpcHMsIHNlcmllcywgc3RhdHVzQ29kZSB9KSB7XG4gIGlmICggc3RhdHVzQ29kZSAhPT0gMjAwICl7XG4gICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPiBcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IHRpdGxlPXtgQ2FuYWwgJHtjaGFubmVsLnRpdGxlfWB9PjwvTGF5b3V0PlxuICAgICAgPGgxPntjaGFubmVsLnRpdGxlfTwvaDE+XG4gICAgICA8aDI+w5psdGltb3MgcG9kY2FzdHM8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbmVkb3InPlxuICAgICAgICB7IFxuICAgICAgICAgIGF1ZGlvQ2xpcHMubWFwKChjbGlwKT0+e1xuICAgICAgICAgICAgcmV0dXJuIDxMaXN0QXVkaW9DbGlwcyBjbGlwPXtjbGlwfSAvPlxuICAgICAgICAgIH0pIFxuICAgICAgICB9XG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICA8aDI+U2VyaWVzPC9oMj5cbiAgICAgICB7IHNlcmllcy5tYXAoKHNlcmllKT0+e1xuICAgICAgICAgcmV0dXJuIDxMaXN0U2VyaWVzIHNlcmllPXtzZXJpZX0gLz5cbiAgICAgIH0pIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRlbmVkb3J7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaW5nOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyggeyBxdWVyeSwgcmVzIH0pIHtcblxuICBjb25zdCBjaGFubmVsSWQgPSBxdWVyeS5pZFxuICB0cnkge1xuICAgIGxldCBbcmVxQ2hhbm5lbCwgcmVxU2VyaWVzLCByZXFBdWRpb3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9YCksXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vY2hpbGRfY2hhbm5lbHNgKSxcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9hdWRpb19jbGlwc2ApXG4gICAgXSlcbiAgICBpZiAoIHJlcUNoYW5uZWwuc3RhdHVzID49IDQwNCApIHtcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVxQ2hhbm5lbC5zdGF0dXNcbiAgICAgIHJldHVybiB7IHByb3BzOiB7IGNoYW5uZWw6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHNlcmllczogbnVsbCwgc3RhdHVzQ29kZTogcmVxQ2hhbm5lbC5zdGF0dXMgfSB9XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YUNoYW5uZWwgPSBhd2FpdCByZXFDaGFubmVsLmpzb24oKVxuICAgIGNvbnN0IGNoYW5uZWwgPSBkYXRhQ2hhbm5lbC5ib2R5LmNoYW5uZWwgXG4gIFxuICAgIGNvbnN0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpb3MuanNvbigpXG4gICAgY29uc3QgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwcyAgXG4gIFxuICAgIGNvbnN0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG4gICAgY29uc3Qgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzXG4gICAgXG4gICAgLypcbiAgICBjb25zdCByZXFDaGFubmVsID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9YClcbiAgICBjb25zdCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXG4gICAgY29uc3QgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbCBcbiAgXG4gICAgY29uc3QgcmVxQXVkaW9zID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2F1ZGlvX2NsaXBzYClcbiAgICBjb25zdCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxQXVkaW9zLmpzb24oKVxuICAgIGNvbnN0IGF1ZGlvQ2xpcHMgPSBkYXRhQXVkaW9zLmJvZHkuYXVkaW9fY2xpcHMgIFxuICBcbiAgICBjb25zdCByZXFTZXJpZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vY2hpbGRfY2hhbm5lbHNgKVxuICAgIGNvbnN0IGRhdGFTZXJpZXMgPSBhd2FpdCByZXFTZXJpZXMuanNvbigpXG4gICAgY29uc3Qgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzICBcbiAgXG4gICAgKi9cbiAgXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlOiAyMDAgfSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzLnN0YXR1c0NvZGUgPSA1MDNcbiAgICByZXR1cm4geyBwcm9wczogeyBjaGFubmVsOiBudWxsLCBhdWRpb0NsaXBzOiBudWxsLCBzZXJpZXM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9IH1cbiAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IGNoYW5uZWxcbiJdfQ== */\n/*@ sourceURL=/home/danielrico/podcasts/pages/channel/[id].js */"
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhbm5lbC8uanMiXSwibmFtZXMiOlsiY2hhbm5lbCIsImF1ZGlvQ2xpcHMiLCJzZXJpZXMiLCJzdGF0dXNDb2RlIiwidGl0bGUiLCJtYXAiLCJjbGlwIiwic2VyaWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQThEO0FBQUE7O0FBQUEsTUFBM0NBLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDQyxVQUFrQyxRQUFsQ0EsVUFBa0M7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjOztBQUM1RCxNQUFLQSxVQUFVLEtBQUssR0FBcEIsRUFBeUI7QUFDdkIsd0JBQU8scUVBQUMsOENBQUQ7QUFBTyxnQkFBVSxFQUFFQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBEQUFEO0FBQVEsV0FBSyxrQkFBV0gsT0FBTyxDQUFDSSxLQUFuQjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUE7QUFBQSxnQkFBS0osT0FBTyxDQUFDSTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsMENBQWUsWUFBZjtBQUFBLGdCQUVJSCxVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQVE7QUFDckIsNEJBQU8scUVBQUMsa0VBQUQ7QUFBZ0IsY0FBSSxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsT0FGRDtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixFQWNLSixNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFDRSxLQUFELEVBQVM7QUFDcEIsMEJBQU8scUVBQUMsOERBQUQ7QUFBWSxhQUFLLEVBQUVBO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNGLEtBRkUsQ0FkTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBdUNEOzs7QUFnRGNQLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYW5uZWwvW2lkXS45NzQyMjQ5ZDY0OGI4ODczMDNmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBMaXN0QXVkaW9DbGlwcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xpc3RBdWRpb0NsaXBzJ1xuaW1wb3J0IExpc3RTZXJpZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MaXN0U2VyaWVzJ1xuaW1wb3J0IEVycm9yIGZyb20gJy4vLi4vX2Vycm9yJ1xuXG5mdW5jdGlvbiBjaGFubmVsKHsgY2hhbm5lbCwgYXVkaW9DbGlwcywgc2VyaWVzLCBzdGF0dXNDb2RlIH0pIHtcbiAgaWYgKCBzdGF0dXNDb2RlICE9PSAyMDAgKXtcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+IFxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgdGl0bGU9e2BDYW5hbCAke2NoYW5uZWwudGl0bGV9YH0+PC9MYXlvdXQ+XG4gICAgICA8aDE+e2NoYW5uZWwudGl0bGV9PC9oMT5cbiAgICAgIDxoMj7Dmmx0aW1vcyBwb2RjYXN0czwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVuZWRvcic+XG4gICAgICAgIHsgXG4gICAgICAgICAgYXVkaW9DbGlwcy5tYXAoKGNsaXApPT57XG4gICAgICAgICAgICByZXR1cm4gPExpc3RBdWRpb0NsaXBzIGNsaXA9e2NsaXB9IC8+XG4gICAgICAgICAgfSkgXG4gICAgICAgIH1cblxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDxoMj5TZXJpZXM8L2gyPlxuICAgICAgIHsgc2VyaWVzLm1hcCgoc2VyaWUpPT57XG4gICAgICAgICByZXR1cm4gPExpc3RTZXJpZXMgc2VyaWU9e3NlcmllfSAvPlxuICAgICAgfSkgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGVuZWRvcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHRleHQtYWxpbmc6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCB7IHF1ZXJ5LCByZXMgfSkge1xuXG4gIGNvbnN0IGNoYW5uZWxJZCA9IHF1ZXJ5LmlkXG4gIHRyeSB7XG4gICAgbGV0IFtyZXFDaGFubmVsLCByZXFTZXJpZXMsIHJlcUF1ZGlvc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH1gKSxcbiAgICAgIGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9jaGlsZF9jaGFubmVsc2ApLFxuICAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHtjaGFubmVsSWR9L2F1ZGlvX2NsaXBzYClcbiAgICBdKVxuICAgIGlmICggcmVxQ2hhbm5lbC5zdGF0dXMgPj0gNDA0ICkge1xuICAgICAgcmVzLnN0YXR1c0NvZGUgPSByZXFDaGFubmVsLnN0YXR1c1xuICAgICAgcmV0dXJuIHsgcHJvcHM6IHsgY2hhbm5lbDogbnVsbCwgYXVkaW9DbGlwczogbnVsbCwgc2VyaWVzOiBudWxsLCBzdGF0dXNDb2RlOiByZXFDaGFubmVsLnN0YXR1cyB9IH1cbiAgICB9XG5cbiAgICBjb25zdCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcUNoYW5uZWwuanNvbigpXG4gICAgY29uc3QgY2hhbm5lbCA9IGRhdGFDaGFubmVsLmJvZHkuY2hhbm5lbCBcbiAgXG4gICAgY29uc3QgZGF0YUF1ZGlvcyA9IGF3YWl0IHJlcUF1ZGlvcy5qc29uKClcbiAgICBjb25zdCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzICBcbiAgXG4gICAgY29uc3QgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcbiAgICBjb25zdCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHNcbiAgICBcbiAgICAvKlxuICAgIGNvbnN0IHJlcUNoYW5uZWwgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH1gKVxuICAgIGNvbnN0IGRhdGFDaGFubmVsID0gYXdhaXQgcmVxQ2hhbm5lbC5qc29uKClcbiAgICBjb25zdCBjaGFubmVsID0gZGF0YUNoYW5uZWwuYm9keS5jaGFubmVsIFxuICBcbiAgICBjb25zdCByZXFBdWRpb3MgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2NoYW5uZWxJZH0vYXVkaW9fY2xpcHNgKVxuICAgIGNvbnN0IGRhdGFBdWRpb3MgPSBhd2FpdCByZXFBdWRpb3MuanNvbigpXG4gICAgY29uc3QgYXVkaW9DbGlwcyA9IGRhdGFBdWRpb3MuYm9keS5hdWRpb19jbGlwcyAgXG4gIFxuICAgIGNvbnN0IHJlcVNlcmllcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7Y2hhbm5lbElkfS9jaGlsZF9jaGFubmVsc2ApXG4gICAgY29uc3QgZGF0YVNlcmllcyA9IGF3YWl0IHJlcVNlcmllcy5qc29uKClcbiAgICBjb25zdCBzZXJpZXMgPSBkYXRhU2VyaWVzLmJvZHkuY2hhbm5lbHMgIFxuICBcbiAgICAqL1xuICBcbiAgICByZXR1cm4geyBwcm9wczogeyBjaGFubmVsLCBhdWRpb0NsaXBzLCBzZXJpZXMsIHN0YXR1c0NvZGU6IDIwMCB9IH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzQ29kZSA9IDUwM1xuICAgIHJldHVybiB7IHByb3BzOiB7IGNoYW5uZWw6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHNlcmllczogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH0gfVxuICB9XG5cblxufVxuZXhwb3J0IGRlZmF1bHQgY2hhbm5lbFxuIl0sInNvdXJjZVJvb3QiOiIifQ==