webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ChannelGrid.jsx":
/*!************************************!*\
  !*** ./components/ChannelGrid.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelGrid; });
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






var _jsxFileName = "/home/danielrico/podcasts/components/ChannelGrid.jsx";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ChannelGrid = /*#__PURE__*/function (_React$Component) {
  Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ChannelGrid, _React$Component);

  var _super = _createSuper(ChannelGrid);

  function ChannelGrid() {
    Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChannelGrid);

    return _super.apply(this, arguments);
  }

  Object(_home_danielrico_podcasts_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ChannelGrid, [{
    key: "render",
    value: function render() {
      var _this = this;

      var channels = this.props.channels;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "jsx-1265128111" + " " + 'channels',
        children: [channels.map(function (channel) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: "/channel/".concat(channel.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "jsx-1265128111" + " " + 'channel',
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: channel.urls.logo_image.original,
                alt: "",
                className: "jsx-1265128111"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 21
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "jsx-1265128111",
                children: channel.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 17
            }, _this)
          }, channel.id, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "1265128111",
          children: ".channels.jsx-1265128111{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-1265128111{display:block;border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);margin-bottom:0.5em;}.channel.jsx-1265128111 img.jsx-1265128111{width:100%;}h2.jsx-1265128111{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-aling:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbHJpY28vcG9kY2FzdHMvY29tcG9uZW50cy9DaGFubmVsR3JpZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZW9CLEFBRzhCLEFBTUMsQUFNSCxBQUdDLFdBRmhCLENBR29CLENBZkYsQ0FNSSxhQUxMLENBZUcsSUFUd0IsUUFMb0IsSUFlbkQsU0FDUyxrQkFDdEIsQ0FYd0Isb0JBQ3hCLE1BTkEiLCJmaWxlIjoiL2hvbWUvZGFuaWVscmljby9wb2RjYXN0cy9jb21wb25lbnRzL0NoYW5uZWxHcmlkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjaGFubmVscyc+XG4gICAgICAgIHsgY2hhbm5lbHMubWFwKChjaGFubmVsKT0+KFxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsLyR7Y2hhbm5lbC5pZH1gfSBrZXk9e2NoYW5uZWwuaWR9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2hhbm5lbCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgfSBhbHQ9JycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnsgY2hhbm5lbC50aXRsZSB9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYW5uZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaW5nOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/danielrico/podcasts/components/ChannelGrid.jsx */"
        }, void 0, false, void 0, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 16
      }, this);
    }
  }]);

  return ChannelGrid;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGFubmVsR3JpZC5qc3giXSwibmFtZXMiOlsiQ2hhbm5lbEdyaWQiLCJjaGFubmVscyIsInByb3BzIiwibWFwIiwiY2hhbm5lbCIsImlkIiwidXJscyIsImxvZ29faW1hZ2UiLCJvcmlnaW5hbCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7NkJBQ1A7QUFBQTs7QUFBQSxVQUNFQyxRQURGLEdBQ2UsS0FBS0MsS0FEcEIsQ0FDRUQsUUFERjtBQUVOLDBCQUFPO0FBQUEsNENBQWUsVUFBZjtBQUFBLG1CQUNMQSxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsOEJBQ1gscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxxQkFBY0EsT0FBTyxDQUFDQyxFQUF0QixDQUFWO0FBQUEsbUNBQ0k7QUFBQSxrREFBYSxTQUFiO0FBQUEsc0NBQ0k7QUFBSyxtQkFBRyxFQUFHRCxPQUFPLENBQUNFLElBQVIsQ0FBYUMsVUFBYixDQUF3QkMsUUFBbkM7QUFBOEMsbUJBQUcsRUFBQyxFQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUE7QUFBQSwwQkFBTUosT0FBTyxDQUFDSztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBMkNMLE9BQU8sQ0FBQ0MsRUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBLFNBQWIsQ0FESztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQW1DSDs7OztFQXRDb0NLLDRDQUFLLENBQUNDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjg5YTk2MDZlMmFiYjhjNmY1MzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbEdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbHMgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdjaGFubmVscyc+XG4gICAgICAgIHsgY2hhbm5lbHMubWFwKChjaGFubmVsKT0+KFxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsLyR7Y2hhbm5lbC5pZH1gfSBrZXk9e2NoYW5uZWwuaWR9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nY2hhbm5lbCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgfSBhbHQ9JycgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgyPnsgY2hhbm5lbC50aXRsZSB9PC9oMj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYW5uZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDAsMCwwLDAuMTUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaW5nOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cblxuICAgIDwvZGl2PlxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=