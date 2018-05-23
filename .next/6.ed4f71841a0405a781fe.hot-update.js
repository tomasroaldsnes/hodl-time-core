webpackHotUpdate(6,{

/***/ "./pages/app/app-deposit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppLayout__ = __webpack_require__("./components/AppLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Box__ = __webpack_require__("./node_modules/grommet/components/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Image__ = __webpack_require__("./node_modules/grommet/components/Image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Header__ = __webpack_require__("./node_modules/grommet/components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Columns__ = __webpack_require__("./node_modules/grommet/components/Columns.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_addons_components_AnnotatedMeter__ = __webpack_require__("./node_modules/grommet-addons/components/AnnotatedMeter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_addons_components_AnnotatedMeter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_addons_components_AnnotatedMeter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter__ = __webpack_require__("./node_modules/grommet/components/Meter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Label__ = __webpack_require__("./node_modules/grommet/components/Label.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Value__ = __webpack_require__("./node_modules/grommet/components/Value.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__ = __webpack_require__("./node_modules/grommet/components/Heading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Card__ = __webpack_require__("./node_modules/grommet/components/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Button__ = __webpack_require__("./node_modules/grommet/components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_icons_base_Add__ = __webpack_require__("./node_modules/grommet/components/icons/base/Add.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_icons_base_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_grommet_components_icons_base_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_grommet_components_chart_Chart__ = __webpack_require__("./node_modules/grommet/components/chart/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_grommet_components_chart_Chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_grommet_components_chart_Chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg__ = __webpack_require__("./components/assets/purpleDark.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_assets_dark_jpg__ = __webpack_require__("./components/assets/dark.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_assets_dark_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_assets_dark_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assets_purpleBox_jpg__ = __webpack_require__("./components/assets/purpleBox.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assets_purpleBox_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_assets_purpleBox_jpg__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




















var backgrounColor = 'neutral-3';
var backgrounColorSide = 'neutral-3';
var texture = __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg___default.a;
var textureSide = __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg___default.a;

var HodlAppDeposit =
/*#__PURE__*/
function (_Component) {
  _inherits(HodlAppDeposit, _Component);

  function HodlAppDeposit() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, HodlAppDeposit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = HodlAppDeposit.__proto__ || Object.getPrototypeOf(HodlAppDeposit)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        depositLock: false,
        isLoading: false
      }
    }), _temp));
  }

  _createClass(HodlAppDeposit, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        href: "https://freeiconshop.com/wp-content/uploads/edd/heart-flat.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "//cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.css",
        rel: "stylesheet",
        type: "text/css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charset: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "HODLtime! - Make money while saving."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,minimal-ui",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "format-detection",
        content: "telephone=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#673AB8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_AppLayout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        justify: "start",
        align: "strech",
        pad: "none",
        texture: texture,
        direction: "row",
        full: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        justify: "start",
        align: "stretch",
        pad: "medium",
        direction: "column",
        colorIndex: backgrounColor,
        texture: texture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Card___default.a, {
        label: "Overview",
        heading: "Make a deposit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        justify: "start",
        align: "center",
        pad: "none",
        basis: "small",
        size: "large",
        texture: texture,
        full: false,
        colorIndex: backgrounColor,
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Card___default.a, {
        label: "WeakHand Fund",
        textSize: "small",
        heading: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Label___default.a, {
          size: "small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, "0.34 ETH"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Card___default.a, {
        textSize: "small",
        label: "Your share of fund",
        heading: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Label___default.a, {
          size: "small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, "0.000023 ETH"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        justify: "start",
        align: "center",
        pad: "none",
        basis: "small",
        size: "large",
        texture: texture,
        full: false,
        colorIndex: backgrounColor,
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_grommet_components_Button___default.a, {
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DocumentTextIcon, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }),
        label: "New Deposit",
        onClick: this.readWhitepaper,
        align: "center",
        href: "/whitepaper",
        loading: this.state.isLoading,
        disabled: this.state.depositLock,
        primary: false,
        secondary: false,
        accent: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return HodlAppDeposit;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = HodlAppDeposit;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(backgrounColor, "backgrounColor", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js");
  reactHotLoader.register(backgrounColorSide, "backgrounColorSide", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js");
  reactHotLoader.register(texture, "texture", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js");
  reactHotLoader.register(textureSide, "textureSide", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js");
  reactHotLoader.register(HodlAppDeposit, "HodlAppDeposit", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js");
  reactHotLoader.register(_default, "default", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/app/app-deposit")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.ed4f71841a0405a781fe.hot-update.js.map