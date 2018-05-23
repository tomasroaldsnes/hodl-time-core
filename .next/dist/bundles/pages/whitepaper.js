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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/WhitepaperPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Article__ = __webpack_require__("grommet/components/Article");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Section__ = __webpack_require__("grommet/components/Section");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline__ = __webpack_require__("grommet/components/Headline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Header__ = __webpack_require__("grommet/components/Header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Title__ = __webpack_require__("grommet/components/Title");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Image__ = __webpack_require__("grommet/components/Image");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__ = __webpack_require__("grommet/components/Box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor__ = __webpack_require__("grommet/components/Anchor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu__ = __webpack_require__("grommet/components/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer__ = __webpack_require__("grommet/components/Footer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__ = __webpack_require__("grommet/components/Heading");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph__ = __webpack_require__("grommet/components/Paragraph");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Card__ = __webpack_require__("grommet/components/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_grommet_components_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_Button__ = __webpack_require__("grommet/components/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_space4_jpg__ = __webpack_require__("./components/assets/space4.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_space4_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__assets_space4_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Actions__ = __webpack_require__("grommet/components/icons/base/Actions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_Down__ = __webpack_require__("grommet/components/icons/base/Down");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_Down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_Down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_grommet_components_icons_base_DocumentText__ = __webpack_require__("grommet/components/icons/base/DocumentText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_grommet_components_icons_base_DocumentText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_grommet_components_icons_base_DocumentText__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/components/WhitepaperPage.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





















var Whitepaper =
/*#__PURE__*/
function (_Component) {
  _inherits(Whitepaper, _Component);

  function Whitepaper() {
    _classCallCheck(this, Whitepaper);

    return _possibleConstructorReturn(this, (Whitepaper.__proto__ || Object.getPrototypeOf(Whitepaper)).apply(this, arguments));
  }

  _createClass(Whitepaper, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Article___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        justify: "center",
        align: "center",
        full: true,
        pad: "large",
        colorIndex: "grey-2",
        texture: __WEBPACK_IMPORTED_MODULE_15__assets_space4_jpg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Header___default.a, {
        float: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Title___default.a, {
        margin: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "H O D L T I M E"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        flex: true,
        justify: "end",
        direction: "row",
        responsive: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu___default.a, {
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Actions___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }),
        dropAlign: {
          "right": "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default.a, {
        href: "#",
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "First"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Second"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Third")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline___default.a, {
        size: "large",
        align: "center",
        strong: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "W H I T E P A P E R"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline___default.a, {
        size: "small",
        align: "center",
        strong: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Learn how hodltime works."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer___default.a, {
        float: true,
        alignContent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        flex: true,
        justify: "center",
        direction: "row",
        responsive: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_Down___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        justify: "start",
        align: "center",
        full: true,
        pad: "large",
        colorIndex: "light-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Section___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        margin: "none",
        tag: "h2",
        align: "start",
        strong: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "Summary"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default.a, {
        size: "medium",
        align: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Hodltime.io is a decentralized application (dApp) for letting users save capital in a time-locked contract built on the Ethereum blockchain. Hodltime give users an alternative way for cold-storage of funds that are inaccessible within a certain timeframe. The need for inaccessible savings accounts originate from the three biggest issues with cryptocurrency saving; funds can easily be withdrawn from a savings account, high volatility can create panic selling and the user\u2019s own temptation to day-trade through betting on increasingly risky altcoins/ICO\u2019s for short-term gain."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, "Hodltime.io and Cryptocorgi.io let the user store ETH on the blockchain that will be transferred back to them at a later date. The user can choose the timeframe for the contract, by selecting from pre-set timeframes stretching from 2 weeks to 1 year or a specific date (ex. Birthday). The funds will then be inaccessible to the user for the specified timeframe and will be transferred back to the user\u2019s account on the agreed upon date. The user\u2019s savings are now safe from the user\u2019s own temptations and will return at a later date, likely worth more than of the time of transfer."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        margin: "small",
        tag: "h2",
        align: "start",
        strong: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "Value"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default.a, {
        size: "medium",
        align: "start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Hodltime.io is a decentralized application (dApp) for letting users save capital in a time-locked contract built on the Ethereum blockchain. Hodltime give users an alternative way for cold-storage of funds that are inaccessible within a certain timeframe. The need for inaccessible savings accounts originate from the three biggest issues with cryptocurrency saving; funds can easily be withdrawn from a savings account, high volatility can create panic selling and the user\u2019s own temptation to day-trade through betting on increasingly risky altcoins/ICO\u2019s for short-term gain."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, "Hodltime.io and Cryptocorgi.io let the user store ETH on the blockchain that will be transferred back to them at a later date. The user can choose the timeframe for the contract, by selecting from pre-set timeframes stretching from 2 weeks to 1 year or a specific date (ex. Birthday). The funds will then be inaccessible to the user for the specified timeframe and will be transferred back to the user\u2019s account on the agreed upon date. The user\u2019s savings are now safe from the user\u2019s own temptations and will return at a later date, likely worth more than of the time of transfer.")))));
    }
  }]);

  return Whitepaper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Whitepaper);

/***/ }),

/***/ "./components/assets/space4.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space4-b6e52e711305667a1e5788387461dea3.jpg";

/***/ }),

/***/ "./pages/whitepaper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WhitepaperPage__ = __webpack_require__("./components/WhitepaperPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/pages/whitepaper.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Whitepaper =
/*#__PURE__*/
function (_Component) {
  _inherits(Whitepaper, _Component);

  function Whitepaper() {
    _classCallCheck(this, Whitepaper);

    return _possibleConstructorReturn(this, (Whitepaper.__proto__ || Object.getPrototypeOf(Whitepaper)).apply(this, arguments));
  }

  _createClass(Whitepaper, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        href: "https://freeiconshop.com/wp-content/uploads/edd/heart-flat.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "//cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.css",
        rel: "stylesheet",
        type: "text/css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charset: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "HODLtime! - Make money while saving."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,minimal-ui",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "format-detection",
        content: "telephone=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#673AB8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_WhitepaperPage__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }));
    }
  }]);

  return Whitepaper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Whitepaper);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/whitepaper.js");


/***/ }),

/***/ "grommet/components/Anchor":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Anchor");

/***/ }),

/***/ "grommet/components/Article":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Article");

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

/***/ "grommet/components/Headline":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Headline");

/***/ }),

/***/ "grommet/components/Image":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Image");

/***/ }),

/***/ "grommet/components/Menu":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Menu");

/***/ }),

/***/ "grommet/components/Paragraph":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Paragraph");

/***/ }),

/***/ "grommet/components/Section":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Section");

/***/ }),

/***/ "grommet/components/Title":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Title");

/***/ }),

/***/ "grommet/components/icons/base/Actions":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Actions");

/***/ }),

/***/ "grommet/components/icons/base/DocumentText":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/DocumentText");

/***/ }),

/***/ "grommet/components/icons/base/Down":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Down");

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
//# sourceMappingURL=whitepaper.js.map