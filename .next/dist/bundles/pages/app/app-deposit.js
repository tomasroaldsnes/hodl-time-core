module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AppLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Button__ = __webpack_require__("grommet/components/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Sidebar__ = __webpack_require__("grommet/components/Sidebar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Header__ = __webpack_require__("grommet/components/Header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Title__ = __webpack_require__("grommet/components/Title");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor__ = __webpack_require__("grommet/components/Anchor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer__ = __webpack_require__("grommet/components/Footer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Menu__ = __webpack_require__("grommet/components/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_Pulse__ = __webpack_require__("grommet/components/icons/Pulse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_Pulse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_icons_Pulse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_icons_base_User__ = __webpack_require__("grommet/components/icons/base/User");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_icons_base_User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_grommet_components_icons_base_User__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_icons_base_Home__ = __webpack_require__("grommet/components/icons/base/Home");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_icons_base_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_grommet_components_icons_base_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_icons_base_Add__ = __webpack_require__("grommet/components/icons/base/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_icons_base_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_grommet_components_icons_base_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Split__ = __webpack_require__("grommet/components/Split");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Split___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_grommet_components_Split__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_App__ = __webpack_require__("grommet/components/App");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_grommet_components_App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_space2_jpg__ = __webpack_require__("./components/assets/space2.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__assets_space2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__assets_space2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assets_dark_jpg__ = __webpack_require__("./components/assets/dark.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__assets_dark_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__assets_dark_jpg__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/components/AppLayout.js";


















/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_grommet_components_App___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_grommet_components_Split___default.a, {
    flex: "right",
    separator: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Sidebar___default.a, {
    colorIndex: "neutral-3",
    texture: __WEBPACK_IMPORTED_MODULE_17__assets_dark_jpg___default.a,
    size: "xsmall",
    full: "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Header___default.a, {
    pad: "medium",
    justify: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Title___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "H O D L")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Box___default.a, {
    flex: "grow",
    justify: "start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Menu___default.a, {
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
    align: "center",
    href: "/app/app",
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_icons_base_Home___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
    align: "center",
    href: "/app/app-deposit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_icons_base_Add___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Anchor___default.a, {
    align: "center",
    href: "/app/app-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_icons_base_User___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Footer___default.a, {
    pad: "medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  })), props.children)));
});

/***/ }),

/***/ "./components/assets/dark.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dark-1513c2490286d42b1bed752b9d00b237.jpg";

/***/ }),

/***/ "./components/assets/purpleBox.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/purpleBox-1513c2490286d42b1bed752b9d00b237.jpg";

/***/ }),

/***/ "./components/assets/purpleDark.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/purpleDark-7b57b4053ed4fe73591005af607626bb.jpg";

/***/ }),

/***/ "./components/assets/space2.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space2-547184e55282bde51e8401375c9ea967.jpg";

/***/ }),

/***/ "./pages/app/app-deposit.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppLayout__ = __webpack_require__("./components/AppLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Image__ = __webpack_require__("grommet/components/Image");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Header__ = __webpack_require__("grommet/components/Header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Columns__ = __webpack_require__("grommet/components/Columns");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Columns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Columns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_addons_components_AnnotatedMeter__ = __webpack_require__("grommet-addons/components/AnnotatedMeter");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_addons_components_AnnotatedMeter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_addons_components_AnnotatedMeter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter__ = __webpack_require__("grommet/components/Meter");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Label__ = __webpack_require__("grommet/components/Label");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Label___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Label__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Value__ = __webpack_require__("grommet/components/Value");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__ = __webpack_require__("grommet/components/Heading");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Card__ = __webpack_require__("grommet/components/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Button__ = __webpack_require__("grommet/components/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_icons_base_Add__ = __webpack_require__("grommet/components/icons/base/Add");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_icons_base_Add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_grommet_components_icons_base_Add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_grommet_components_chart_Chart__ = __webpack_require__("grommet/components/chart/Chart");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_grommet_components_chart_Chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_grommet_components_chart_Chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg__ = __webpack_require__("./components/assets/purpleDark.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_assets_purpleDark_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_assets_dark_jpg__ = __webpack_require__("./components/assets/dark.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_assets_dark_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_assets_dark_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assets_purpleBox_jpg__ = __webpack_require__("./components/assets/purpleBox.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_assets_purpleBox_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_assets_purpleBox_jpg__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/pages/app/app-deposit.js";

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
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_grommet_components_icons_base_Add___default.a, {
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
  }]);

  return HodlAppDeposit;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HodlAppDeposit);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/app/app-deposit.js");


/***/ }),

/***/ "grommet-addons/components/AnnotatedMeter":
/***/ (function(module, exports) {

module.exports = require("grommet-addons/components/AnnotatedMeter");

/***/ }),

/***/ "grommet/components/Anchor":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Anchor");

/***/ }),

/***/ "grommet/components/App":
/***/ (function(module, exports) {

module.exports = require("grommet/components/App");

/***/ }),

/***/ "grommet/components/Box":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Box");

/***/ }),

/***/ "grommet/components/Button":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Button");

/***/ }),

/***/ "grommet/components/Card":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Card");

/***/ }),

/***/ "grommet/components/Columns":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Columns");

/***/ }),

/***/ "grommet/components/Footer":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Footer");

/***/ }),

/***/ "grommet/components/Header":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Header");

/***/ }),

/***/ "grommet/components/Heading":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Heading");

/***/ }),

/***/ "grommet/components/Image":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Image");

/***/ }),

/***/ "grommet/components/Label":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Label");

/***/ }),

/***/ "grommet/components/Menu":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Menu");

/***/ }),

/***/ "grommet/components/Meter":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Meter");

/***/ }),

/***/ "grommet/components/Sidebar":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Sidebar");

/***/ }),

/***/ "grommet/components/Split":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Split");

/***/ }),

/***/ "grommet/components/Title":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Title");

/***/ }),

/***/ "grommet/components/Value":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Value");

/***/ }),

/***/ "grommet/components/chart/Chart":
/***/ (function(module, exports) {

module.exports = require("grommet/components/chart/Chart");

/***/ }),

/***/ "grommet/components/icons/Pulse":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/Pulse");

/***/ }),

/***/ "grommet/components/icons/base/Add":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Add");

/***/ }),

/***/ "grommet/components/icons/base/Home":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Home");

/***/ }),

/***/ "grommet/components/icons/base/User":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/User");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app-deposit.js.map