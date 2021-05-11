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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);






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
        className: "jsx-423054039" + " " + 'item',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: clip.urls.image,
          alt: "",
          className: "jsx-423054039"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
          href: "/podcast/".concat(clip.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "jsx-423054039",
            children: clip.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)
        }, clip.id, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "423054039",
          children: ".item.jsx-423054039{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbHJpY28vcG9kY2FzdHMvY29tcG9uZW50cy9MaXN0QXVkaW9DbGlwcy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3dCLEFBR21DLGNBQ0ksa0JBQ3NCLHdDQUNwQixvQkFDeEIiLCJmaWxlIjoiL2hvbWUvZGFuaWVscmljby9wb2RjYXN0cy9jb21wb25lbnRzL0xpc3RBdWRpb0NsaXBzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdEF1ZGlvQ2xpcHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgY2xpcCB9ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5wcm9wcylcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXsgY2xpcC51cmxzLmltYWdlIH0gYWx0PScnIC8+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3BvZGNhc3QvJHtjbGlwLmlkfWB9IGtleT17Y2xpcC5pZH0+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICB7IGNsaXAudGl0bGUgfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pdGVte1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/danielrico/podcasts/components/ListAudioClips.jsx */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 16
      }, this);
    }
  }]);

  return ListAudioClips;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0QXVkaW9DbGlwcy5qc3giXSwibmFtZXMiOlsiTGlzdEF1ZGlvQ2xpcHMiLCJjbGlwIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidXJscyIsImltYWdlIiwiaWQiLCJ0aXRsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OzZCQUNQO0FBQUEsVUFDRUMsSUFERixHQUNXLEtBQUtDLEtBRGhCLENBQ0VELElBREY7QUFFTkUsYUFBTyxDQUFDQyxHQUFSLENBQWEsS0FBS0YsS0FBbEI7QUFDQSwwQkFBTztBQUFBLDJDQUFlLE1BQWY7QUFBQSxnQ0FDSDtBQUFLLGFBQUcsRUFBR0QsSUFBSSxDQUFDSSxJQUFMLENBQVVDLEtBQXJCO0FBQTZCLGFBQUcsRUFBQyxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERyxlQUVILHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxxQkFBY0wsSUFBSSxDQUFDTSxFQUFuQixDQUFWO0FBQUEsaUNBQ0E7QUFBQTtBQUFBLHNCQUNNTixJQUFJLENBQUNPO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLFdBQXdDUCxJQUFJLENBQUNNLEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFrQkg7Ozs7RUF0QnVDRSw0Q0FBSyxDQUFDQyxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoYW5uZWwvW2lkXS40NTU4MGNjNDZkMWZlN2E1NjJkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0QXVkaW9DbGlwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgeyBjbGlwIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb3BzKVxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxuICAgICAgICAgICAgPGltZyBzcmM9eyBjbGlwLnVybHMuaW1hZ2UgfSBhbHQ9JycgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9kY2FzdC8ke2NsaXAuaWR9YH0ga2V5PXtjbGlwLmlkfT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIHsgY2xpcC50aXRsZSB9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLml0ZW17XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=