webpackHotUpdate_N_E("pages/channel/[id]",{

/***/ "./components/ListAudioClips.jsx":
/*!***************************************!*\
  !*** ./components/ListAudioClips.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListAudioClips; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/home/danielrico/podcasts/components/ListAudioClips.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ListAudioClips = /*#__PURE__*/function (_React$Component) {
  Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ListAudioClips, _React$Component);

  var _super = _createSuper(ListAudioClips);

  function ListAudioClips() {
    Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ListAudioClips);

    return _super.apply(this, arguments);
  }

  Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ListAudioClips, [{
    key: "render",
    value: function render() {
      var clip = this.props.clip;
      console.log(this.props);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "contenedor",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/podcast/".concat(clip.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: clip.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this)
        }, clip.id, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 16
      }, this);
    }
  }]);

  return ListAudioClips;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0QXVkaW9DbGlwcy5qc3giXSwibmFtZXMiOlsiTGlzdEF1ZGlvQ2xpcHMiLCJjbGlwIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OzZCQUNQO0FBQUEsVUFDRUMsSUFERixHQUNXLEtBQUtDLEtBRGhCLENBQ0VELElBREY7QUFFTkUsYUFBTyxDQUFDQyxHQUFSLENBQWEsS0FBS0YsS0FBbEI7QUFDQSwwQkFBTztBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLCtCQUNILHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxxQkFBY0QsSUFBSSxDQUFDSSxFQUFuQixDQUFWO0FBQUEsaUNBQ0E7QUFBQSxzQkFDTUosSUFBSSxDQUFDSztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxXQUF3Q0wsSUFBSSxDQUFDSSxFQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBUUg7Ozs7RUFadUNFLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhbm5lbC9baWRdLmQ0YjliNWZhODAyMjIyNWVhYjZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RBdWRpb0NsaXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7IGNsaXAgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMucHJvcHMpXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT0nY29udGVuZWRvcic+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3QvJHtjbGlwLmlkfWB9IGtleT17Y2xpcC5pZH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICB7IGNsaXAudGl0bGUgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==