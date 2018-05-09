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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
    href: "#",
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
    href: "#",
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
    href: "#",
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

/***/ "./components/MainPageLayout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPageLayout; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_grommet_components_icons_base_Actions__ = __webpack_require__("grommet/components/icons/base/Actions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_grommet_components_icons_base_Actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_grommet_components_icons_base_Actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Down__ = __webpack_require__("grommet/components/icons/base/Down");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_DocumentText__ = __webpack_require__("grommet/components/icons/base/DocumentText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_DocumentText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_DocumentText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_space1_jpg__ = __webpack_require__("./components/assets/space1.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_space1_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_space1_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_space2_jpg__ = __webpack_require__("./components/assets/space2.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_space2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__assets_space2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_space3_jpg__ = __webpack_require__("./components/assets/space3.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__assets_space3_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__assets_space3_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__assets_space5_jpg__ = __webpack_require__("./components/assets/space5.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__assets_space5_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__assets_space5_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__assets_space6_jpg__ = __webpack_require__("./components/assets/space6.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__assets_space6_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__assets_space6_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__assets_metamask_png__ = __webpack_require__("./components/assets/metamask.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__assets_metamask_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__assets_metamask_png__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/components/MainPageLayout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


























var MainPageLayout =
/*#__PURE__*/
function (_Component) {
  _inherits(MainPageLayout, _Component);

  function MainPageLayout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MainPageLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MainPageLayout.__proto__ || Object.getPrototypeOf(MainPageLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isLoading: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "readWhitepaper", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isLoading: true
        });

        Router.pushRoute('/whitepaper');
      }
    }), _temp));
  }

  _createClass(MainPageLayout, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Article___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        justify: "center",
        align: "center",
        full: true,
        pad: "large",
        colorIndex: "grey-2",
        texture: __WEBPACK_IMPORTED_MODULE_18__assets_space1_jpg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Header___default.a, {
        float: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Title___default.a, {
        margin: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "H O D L T I M E"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        flex: true,
        justify: "end",
        direction: "row",
        responsive: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu___default.a, {
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15_grommet_components_icons_base_Actions___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }),
        dropAlign: {
          "right": "right"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default.a, {
        href: "/app/app",
        className: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Go to app"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default.a, {
        href: "/whitepaper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Whitepaper"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default.a, {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Third")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline___default.a, {
        size: "large",
        align: "center",
        strong: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "H O D L T I M E"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline___default.a, {
        size: "small",
        align: "center",
        strong: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "Earn money by saving better."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_grommet_components_Button___default.a, {
        label: "Go to App",
        align: "center",
        href: "/app/app",
        loading: this.state.isLoading,
        primary: false,
        secondary: false,
        accent: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer___default.a, {
        float: true,
        alignContent: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        flex: true,
        justify: "center",
        direction: "row",
        responsive: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Down___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        justify: "center",
        align: "center",
        full: true,
        pad: "large",
        colorIndex: "grey-2",
        texture: __WEBPACK_IMPORTED_MODULE_20__assets_space3_jpg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Section___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        margin: "none",
        tag: "h2",
        align: "center",
        strong: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, "What is H O D L T I M E ?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default.a, {
        size: "large",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "HT is a multiplayer saving game on the Ethereum blockchain. Everyone gets a timelocked savings account. If someone withdraws funds early, they pay a 5% fee. This fee goes to the Weakhand-fund. Whenever you make a deposit to your savings account, you get a reward from the Weakhand-fund.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14_grommet_components_Button___default.a, {
        icon: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_DocumentText___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }),
        label: "Read the Whitepaper",
        onClick: this.readWhitepaper,
        align: "center",
        href: "/whitepaper",
        loading: this.state.isLoading,
        primary: false,
        secondary: false,
        accent: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default.a, {
        justify: "center",
        align: "center",
        full: true,
        pad: "large",
        colorIndex: "grey-2",
        texture: __WEBPACK_IMPORTED_MODULE_22__assets_space6_jpg___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        margin: "medium",
        tag: "h2",
        align: "center",
        strong: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "What do I need?"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Image___default.a, {
        src: __WEBPACK_IMPORTED_MODULE_23__assets_metamask_png___default.a,
        size: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default.a, {
        size: "large",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, "You need a MetaMask account with some amount of ether. Get it at metamask.io"))));
    } //render

  }]);

  return MainPageLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


;

/***/ }),

/***/ "./components/assets/dark.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dark-1513c2490286d42b1bed752b9d00b237.jpg";

/***/ }),

/***/ "./components/assets/metamask.png":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/metamask-11446df33e44e60fb47bbc6810bb2dbd.png";

/***/ }),

/***/ "./components/assets/space1.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space1-ca7ea53ab5383d77a7e8d9f8c4f31731.jpg";

/***/ }),

/***/ "./components/assets/space2.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space2-547184e55282bde51e8401375c9ea967.jpg";

/***/ }),

/***/ "./components/assets/space3.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space3-d4e618310e8fc88a1565801a906723a3.jpg";

/***/ }),

/***/ "./components/assets/space5.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space5-3372843d9019583d38445e4efc544ba9.jpg";

/***/ }),

/***/ "./components/assets/space6.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space6-0d2404ef672512da39f346351f4a55b8.jpg";

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppLayout__ = __webpack_require__("./components/AppLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MainPageLayout__ = __webpack_require__("./components/MainPageLayout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        href: "https://freeiconshop.com/wp-content/uploads/edd/heart-flat.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "//cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.css",
        rel: "stylesheet",
        type: "text/css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charset: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "HODLtime! - Make money while saving."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,minimal-ui",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "format-detection",
        content: "telephone=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#673AB8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_MainPageLayout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "grommet/components/Anchor":
/***/ (function(module, exports) {

module.exports = require("grommet/components/Anchor");

/***/ }),

/***/ "grommet/components/App":
/***/ (function(module, exports) {

module.exports = require("grommet/components/App");

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

/***/ "grommet/components/icons/Pulse":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/Pulse");

/***/ }),

/***/ "grommet/components/icons/base/Actions":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Actions");

/***/ }),

/***/ "grommet/components/icons/base/Add":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Add");

/***/ }),

/***/ "grommet/components/icons/base/DocumentText":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/DocumentText");

/***/ }),

/***/ "grommet/components/icons/base/Down":
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Down");

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
//# sourceMappingURL=index.js.map