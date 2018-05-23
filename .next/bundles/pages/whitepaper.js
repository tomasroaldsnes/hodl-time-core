module.exports =

        __NEXT_REGISTER_PAGE('/whitepaper', function() {
          var comp = 
      webpackJsonp([7],{

/***/ "./components/WhitepaperPage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Article__ = __webpack_require__("./node_modules/grommet/components/Article.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_grommet_components_Article___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_grommet_components_Article__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Section__ = __webpack_require__("./node_modules/grommet/components/Section.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_grommet_components_Section___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_grommet_components_Section__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline__ = __webpack_require__("./node_modules/grommet/components/Headline.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Headline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Header__ = __webpack_require__("./node_modules/grommet/components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_grommet_components_Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_grommet_components_Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Title__ = __webpack_require__("./node_modules/grommet/components/Title.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_grommet_components_Title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_grommet_components_Title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Image__ = __webpack_require__("./node_modules/grommet/components/Image.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_grommet_components_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_grommet_components_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__ = __webpack_require__("./node_modules/grommet/components/Box.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_grommet_components_Box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_grommet_components_Box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor__ = __webpack_require__("./node_modules/grommet/components/Anchor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Anchor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu__ = __webpack_require__("./node_modules/grommet/components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_grommet_components_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer__ = __webpack_require__("./node_modules/grommet/components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Footer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__ = __webpack_require__("./node_modules/grommet/components/Heading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph__ = __webpack_require__("./node_modules/grommet/components/Paragraph.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Paragraph__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Card__ = __webpack_require__("./node_modules/grommet/components/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_grommet_components_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_Button__ = __webpack_require__("./node_modules/grommet/components/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_grommet_components_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_grommet_components_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_space4_jpg__ = __webpack_require__("./components/assets/space4.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__assets_space4_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__assets_space4_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Actions__ = __webpack_require__("./node_modules/grommet/components/icons/base/Actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_grommet_components_icons_base_Actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_Down__ = __webpack_require__("./node_modules/grommet/components/icons/base/Down.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_Down___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_grommet_components_icons_base_Down__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_grommet_components_icons_base_DocumentText__ = __webpack_require__("./node_modules/grommet/components/icons/base/DocumentText.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_grommet_components_icons_base_DocumentText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_grommet_components_icons_base_DocumentText__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/components/WhitepaperPage.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Whitepaper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Whitepaper;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Whitepaper, "Whitepaper", "/home/tomasroaldsnes/Code/hodl-time/components/WhitepaperPage.js");
  reactHotLoader.register(_default, "default", "/home/tomasroaldsnes/Code/hodl-time/components/WhitepaperPage.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/assets/space4.jpg":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/space4-b6e52e711305667a1e5788387461dea3.jpg";

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/grommet/components/Anchor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactDesc = __webpack_require__("./node_modules/react-desc/lib/index.js");

var _reactRouter = __webpack_require__("./node_modules/react-router/es/index.js");

var _LinkNext = __webpack_require__("./node_modules/grommet/components/icons/base/LinkNext.js");

var _LinkNext2 = _interopRequireDefault(_LinkNext);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.ANCHOR;

var Anchor = function (_Component) {
  _inherits(Anchor, _Component);

  function Anchor(props, context) {
    _classCallCheck(this, Anchor);

    var _this = _possibleConstructorReturn(this, (Anchor.__proto__ || Object.getPrototypeOf(Anchor)).call(this, props, context));

    _this._onClick = _this._onClick.bind(_this);
    _this._onLocationChange = _this._onLocationChange.bind(_this);
    _this._attachUnlisten = _this._attachUnlisten.bind(_this);
    _this._isRouteActive = _this._isRouteActive.bind(_this);
    var path = props.path;
    var router = context.router;


    var active = _this._isRouteActive(path, router);

    _this.state = { active: active };
    return _this;
  }

  _createClass(Anchor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var path = this.props.path;
      var router = this.context.router;


      if (path) {
        this._attachUnlisten(router.history || router);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var path = nextProps.path;
      var router = this.context.router;


      if (path && path !== this.props.path) {
        this._attachUnlisten(router.history || router);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var path = this.props.path;

      if (path) {
        this._unlisten();
      }
      this._unmounted = true;
    }
  }, {
    key: '_isRouteActive',
    value: function _isRouteActive(path, router) {
      if (!path) {
        return false;
      }
      var active = void 0;
      if (router && router.isActive) {
        active = router && router.isActive && path && router.isActive({
          pathname: path.path || path,
          query: { indexLink: path.index }
        });
      } else if (router && _reactRouter.matchPath) {
        active = !!(0, _reactRouter.matchPath)(router.history.location.pathname, { path: path.path || path, exact: !!path.index });
      }

      return active;
    }
  }, {
    key: '_attachUnlisten',
    value: function _attachUnlisten(router) {
      this._unlisten = router.listen(this._onLocationChange);
    }
  }, {
    key: '_onLocationChange',
    value: function _onLocationChange(location) {
      // sometimes react router is still calling the listen callback even
      // if we called unlisten. So we added this check here to prevent
      // calling setState in a unmounted component
      if (!this._unmounted) {
        var path = this.props.path;
        var router = this.context.router;

        var active = _reactRouter.matchPath ? !!(0, _reactRouter.matchPath)(location.pathname, { path: path.path || path, exact: !!path.index }) : router && location.pathname === (path.path || path);
        this.setState({ active: active });
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      var _props = this.props,
          method = _props.method,
          onClick = _props.onClick,
          path = _props.path,
          disabled = _props.disabled;
      var router = this.context.router;

      var modifierKey = event.ctrlKey || event.metaKey;

      if (modifierKey && !disabled && !onClick) {
        return true;
      }

      event.preventDefault();

      if (!disabled) {
        if (path) {
          if ('push' === method) {
            (router.history || router).push(path.path || path);
          } else if ('replace' === method) {
            (router.history || router).replace(path.path || path);
          }
        }

        if (onClick) {
          onClick.apply(undefined, arguments);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          align = _props2.align,
          animateIcon = _props2.animateIcon,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          href = _props2.href,
          icon = _props2.icon,
          label = _props2.label,
          onClick = _props2.onClick,
          path = _props2.path,
          primary = _props2.primary,
          reverse = _props2.reverse,
          tag = _props2.tag,
          props = _objectWithoutProperties(_props2, ['a11yTitle', 'align', 'animateIcon', 'children', 'className', 'disabled', 'href', 'icon', 'label', 'onClick', 'path', 'primary', 'reverse', 'tag']);

      delete props.method;
      var active = this.state.active;
      var router = this.context.router;


      var anchorIcon = void 0;
      if (icon) {
        anchorIcon = icon;
      } else if (primary) {
        anchorIcon = _react2.default.createElement(_LinkNext2.default, { a11yTitle: 'link next' });
      }

      if (anchorIcon && !primary && !label) {
        anchorIcon = _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__icon' },
          anchorIcon
        );
      }

      var hasIcon = anchorIcon !== undefined;
      var anchorChildren = _react.Children.map(children, function (child) {
        if (child && child.type && child.type.icon) {
          hasIcon = true;
          child = _react2.default.createElement(
            'span',
            { className: CLASS_ROOT + '__icon' },
            child
          );
        }
        return child;
      });

      var target = path ? path.path || path : undefined;
      var adjustedHref = void 0;
      if (router && router.createPath) {
        adjustedHref = path && router ? router.createPath(target) : href;
      } else {
        adjustedHref = path && router && router.history ? router.history.createHref(typeof target === 'string' ? { pathname: target } : target) : href;
      }

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--animate-icon', hasIcon && animateIcon !== false), _defineProperty(_classnames, CLASS_ROOT + '--disabled', disabled), _defineProperty(_classnames, CLASS_ROOT + '--icon', anchorIcon || hasIcon), _defineProperty(_classnames, CLASS_ROOT + '--icon-label', hasIcon && label), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, CLASS_ROOT + '--primary', primary), _defineProperty(_classnames, CLASS_ROOT + '--reverse', reverse), _defineProperty(_classnames, CLASS_ROOT + '--active', active), _classnames), className);

      var adjustedOnClick = path && router ? this._onClick : onClick;
      if (!anchorChildren) {
        anchorChildren = label;
      }

      var first = reverse ? anchorChildren : anchorIcon;
      var second = reverse ? anchorIcon : anchorChildren;

      var Component = tag;

      return _react2.default.createElement(
        Component,
        _extends({}, props, { href: adjustedHref, className: classes,
          'aria-label': a11yTitle, onClick: function onClick(event) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            if (disabled) {
              event.preventDefault();
            } else if (adjustedOnClick) {
              adjustedOnClick.apply(undefined, [event].concat(args));
            }
          } }),
        first,
        second
      );
    }
  }]);

  return Anchor;
}(_react.Component);

Anchor.displayName = 'Anchor';
exports.default = Anchor;
;

(0, _reactDesc.schema)(Anchor, {
  description: 'A text link. We have a separate component from the browser\n  base so we can style it. You can either set the icon and/or label properties\n  or just use children.',
  usage: 'import Anchor from \'grommet/components/Anchor\';\n  <Anchor href={location} label="Label" />',
  props: {
    a11yTitle: [_reactDesc.PropTypes.string, 'Accessibility title.'],
    align: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end']), 'Text alignment.'],
    animateIcon: [_reactDesc.PropTypes.bool, 'Whether to animate the icon on hover.', {
      defaultProp: true
    }],
    disabled: [_reactDesc.PropTypes.bool, 'Whether to disable the anchor.'],
    href: [_reactDesc.PropTypes.string, 'Hyperlink reference to place in the anchor. If' + ' `path` prop is provided, `href` prop will be ignored.'],
    icon: [_reactDesc.PropTypes.element, 'Icon element to place in the anchor.'],
    id: [_reactDesc.PropTypes.string, 'Anchor identifier.'],
    label: [_reactDesc.PropTypes.node, 'Label text to place in the anchor.'],
    method: [_reactDesc.PropTypes.oneOf(['push', 'replace']), 'Valid only when used with path. Indicates whether the browser history' + ' should be appended to or replaced.', {
      defaultProp: 'push'
    }],
    onClick: [_reactDesc.PropTypes.func, 'Click handler.'],
    path: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.object, _reactDesc.PropTypes.string]), 'React-router path to navigate to when clicked.' + ' Use path={{ path: \'/\', index: true }} if you want the Anchor to be' + ' active only when the index route is current.'],
    primary: [_reactDesc.PropTypes.bool, 'Whether this is a primary anchor.'],
    reverse: [_reactDesc.PropTypes.bool, 'Whether an icon and label should be reversed so that the icon is at ' + 'the end of the anchor.'],
    tag: [_reactDesc.PropTypes.string, 'The DOM tag to use for the element. The default is <a>. This should be' + ' used in conjunction with components like Link from React Router. In' + ' this case, Link controls the navigation while Anchor controls the' + ' styling.', {
      defaultProp: 'a'
    }],
    target: [_reactDesc.PropTypes.string, 'Target of the link.']
  }
});

Anchor.contextTypes = {
  router: _propTypes2.default.object
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Article.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _KeyboardAccelerators = __webpack_require__("./node_modules/grommet/utils/KeyboardAccelerators.js");

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

var _DOM = __webpack_require__("./node_modules/grommet/utils/DOM.js");

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

var _Scroll = __webpack_require__("./node_modules/grommet/utils/Scroll.js");

var _Scroll2 = _interopRequireDefault(_Scroll);

var _Responsive = __webpack_require__("./node_modules/grommet/utils/Responsive.js");

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Button = __webpack_require__("./node_modules/grommet/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _LinkNext = __webpack_require__("./node_modules/grommet/components/icons/base/LinkNext.js");

var _LinkNext2 = _interopRequireDefault(_LinkNext);

var _LinkPrevious = __webpack_require__("./node_modules/grommet/components/icons/base/LinkPrevious.js");

var _LinkPrevious2 = _interopRequireDefault(_LinkPrevious);

var _Up = __webpack_require__("./node_modules/grommet/components/icons/base/Up.js");

var _Up2 = _interopRequireDefault(_Up);

var _Down = __webpack_require__("./node_modules/grommet/components/icons/base/Down.js");

var _Down2 = _interopRequireDefault(_Down);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.ARTICLE;
var DEFAULT_PLAY_INTERVAL = 10000; // 10s

var Article = function (_Component) {
  _inherits(Article, _Component);

  function Article(props, context) {
    _classCallCheck(this, Article);

    var _this = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props, context));

    _this._onScroll = _this._onScroll.bind(_this);
    _this._onWheel = _this._onWheel.bind(_this);
    _this._onTouchStart = _this._onTouchStart.bind(_this);
    _this._onTouchMove = _this._onTouchMove.bind(_this);
    _this._onResize = _this._onResize.bind(_this);
    _this._onNext = _this._onNext.bind(_this);
    _this._onPrevious = _this._onPrevious.bind(_this);
    _this._onTogglePlay = _this._onTogglePlay.bind(_this);
    _this._onSelect = _this._onSelect.bind(_this);
    _this._checkControls = _this._checkControls.bind(_this);
    _this._checkPreviousNextControls = _this._checkPreviousNextControls.bind(_this);
    _this._onResponsive = _this._onResponsive.bind(_this);
    _this._updateHiddenElements = _this._updateHiddenElements.bind(_this);
    _this._updateProgress = _this._updateProgress.bind(_this);

    // Necessary to detect for Firefox or Edge to implement accessibility
    // tabbing
    var accessibilityTabbingCompatible = typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1 && navigator.userAgent.indexOf('Edge') === -1;

    _this.state = {
      selectedIndex: props.selected || 0,
      playing: false,
      accessibilityTabbingCompatible: accessibilityTabbingCompatible
    };
    return _this;
  }

  _createClass(Article, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._propsSetup(this.props);
      if (this.state.selectedIndex) {
        this._onSelect(this.state.selectedIndex);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.scrollStep && this.props.scrollStep) {
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keys);
        document.removeEventListener('wheel', this._onWheel);
        window.removeEventListener('resize', this._onResize);
      }
      if (!nextProps.onProgress && this.props.onProgress) {
        if (this._responsive) {
          this._responsive.stop();
        }
        if (this.props.onProgress) {
          window.removeEventListener('scroll', this._updateProgress);
        }
      }

      this._propsSetup(nextProps);

      // allow updates to selected props to trigger new chapter select
      if (typeof nextProps.selected !== 'undefined' && nextProps.selected !== null && nextProps.selected !== this.state.selectedIndex) {
        this._onSelect(nextProps.selected);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.scrollStep) {
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keys);
        document.removeEventListener('wheel', this._onWheel);
        window.removeEventListener('resize', this._onResize);
      }
      if (this._responsive) {
        this._responsive.stop();
      }
      if (this.props.onProgress) {
        window.removeEventListener('scroll', this._updateProgress);
      }
    }
  }, {
    key: '_propsSetup',
    value: function _propsSetup(props) {
      var direction = props.direction,
          full = props.full,
          onProgress = props.onProgress,
          scrollStep = props.scrollStep;

      if (scrollStep) {
        if (full) {
          console.warn('Article cannot use `scrollStep` with `full`.');
        }

        this._keys = { up: this._onPrevious, down: this._onNext };
        if ('row' === direction) {
          this._keys = {
            left: this._onPrevious,
            right: this._onNext
          };

          if (this.state.accessibilityTabbingCompatible) {
            this._updateHiddenElements();
          }
        }
        //keys.space = this._onTogglePlay;
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keys);

        document.addEventListener('wheel', this._onWheel);
        window.addEventListener('resize', this._onResize);

        this._checkControls();

        if ('row' === direction) {
          this._responsive = _Responsive2.default.start(this._onResponsive);
        }
      }

      if (onProgress) {
        window.addEventListener('scroll', this._updateProgress);

        if (direction === 'row') {
          this._responsive = _Responsive2.default.start(this._onResponsive);
        }
      }
    }
  }, {
    key: '_childDOMNode',
    value: function _childDOMNode(index) {
      var componentElement = (0, _reactDom.findDOMNode)(this._componentRef);
      return componentElement.children[index];
    }
  }, {
    key: '_checkPreviousNextControls',
    value: function _checkPreviousNextControls(currentScroll, nextProp, prevProp) {
      var selectedIndex = this.state.selectedIndex;

      if (currentScroll > 0) {
        var nextStepNode = this._childDOMNode(selectedIndex + 1);
        var previousStepNode = this._childDOMNode(selectedIndex - 1);

        if (nextStepNode) {
          var nextStepPosition = nextStepNode.getBoundingClientRect()[nextProp] * (selectedIndex + 1);

          if (currentScroll > nextStepPosition) {
            this.setState({ selectedIndex: selectedIndex + 1 });
          }
        }

        if (previousStepNode) {
          var previousStepPosition = previousStepNode.getBoundingClientRect()[prevProp] * selectedIndex;

          if (currentScroll < previousStepPosition) {
            this.setState({ selectedIndex: selectedIndex - 1 });
          }
        }
      }
    }
  }, {
    key: '_checkControls',
    value: function _checkControls() {
      var direction = this.props.direction;

      if (direction === 'row') {
        var currentScroll = this._componentRef.boxContainerRef.scrollLeft;
        this._checkPreviousNextControls(currentScroll, 'left', 'right');
      } else {
        var _currentScroll = this._componentRef.boxContainerRef.scrollTop;
        this._checkPreviousNextControls(_currentScroll, 'top', 'bottom');
      }
    }
  }, {
    key: '_visibleIndexes',
    value: function _visibleIndexes() {
      var _props = this.props,
          children = _props.children,
          direction = _props.direction;

      var result = [];
      var childCount = _react2.default.Children.count(children);
      var limit = 'row' === direction ? window.innerWidth : window.innerHeight;
      for (var index = 0; index < childCount; index += 1) {
        var childElement = this._childDOMNode(index);
        var rect = childElement.getBoundingClientRect();
        // ignore small drifts of 10 pixels on either end
        if ('row' === direction) {
          if (rect.right > 10 && rect.left < limit - 10) {
            result.push(index);
          } else if (result.length > 0) {
            break;
          }
        } else {
          if (rect.bottom > 10 && rect.top < limit - 10) {
            result.push(index);
          } else if (result.length > 0) {
            break;
          }
        }
      }
      return result;
    }
  }, {
    key: '_shortTimer',
    value: function _shortTimer(name, duration) {
      var _this2 = this;

      if (!this[name]) {
        this[name] = true;
      }
      var timerName = this[name] + 'Timer';
      clearTimeout(this[timerName]);
      this[timerName] = setTimeout(function () {
        _this2[name] = false;
      }, duration);
    }
  }, {
    key: '_onWheel',
    value: function _onWheel(event) {
      var _this3 = this;

      var direction = this.props.direction;

      if ('row' === direction) {
        if (this._scrollingHorizontally) {
          // no-op
        } else if (!this._scrollingVertically) {
          if (Math.abs(event.deltaY * 2) > Math.abs(event.deltaX)) {
            // user is scrolling vertically
            this._shortTimer('_scrollingVertically', 1000);
          }
        }
      } else {
        // Give the user lots of control.
        var delta = event.deltaY;
        if (Math.abs(delta) > 100) {
          // The user is expressing a resolute interest in controlling the
          // scrolling behavior. Stop doing any of our scroll step aligning
          // until he stops expressing such interest.
          clearInterval(this._wheelTimer);
          clearInterval(this._wheelLongTimer);
          this._wheelLongTimer = setTimeout(function () {
            _this3._wheelLongTimer = undefined;
          }, 2000);
        } else if (!this._wheelLongTimer) {
          if (delta > 10) {
            clearInterval(this._wheelTimer);
            this._wheelTimer = setTimeout(this._onNext, 200);
          } else if (delta < -10) {
            clearInterval(this._wheelTimer);
            this._wheelTimer = setTimeout(this._onPrevious, 200);
          } else {
            clearInterval(this._controlTimer);
            this._controlTimer = setTimeout(this._checkControls, 200);
          }
        }
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      var _this4 = this;

      var direction = this.props.direction;

      if ('row' === direction) {
        var selectedIndex = this.state.selectedIndex;

        var componentElement = (0, _reactDom.findDOMNode)(this._componentRef);
        var childElement = this._childDOMNode(selectedIndex);
        var rect = childElement.getBoundingClientRect();
        if (event.target === componentElement) {
          // scrolling Article
          if (this._scrollingVertically) {
            // prevent Article horizontal scrolling while scrolling vertically
            componentElement.scrollLeft += rect.left;
          } else {
            var scrollingRight = this._priorScrollLeft < componentElement.scrollLeft;
            // once we stop scrolling, align with child boundaries
            clearTimeout(this._scrollTimer);
            this._scrollTimer = setTimeout(function () {
              if (!_this4._resizing) {
                var indexes = _this4._visibleIndexes();
                if (indexes.length > 1 && scrollingRight) {
                  _this4._onSelect(indexes[1]);
                } else {
                  _this4._onSelect(indexes[0]);
                }
              }
            }, 100);
            this._priorScrollLeft = componentElement.scrollLeft;
          }
        } else if (event.target.parentNode === componentElement) {
          // scrolling child
          // Has it scrolled near the bottom?
          if (this.state.accessibilityTabbingCompatible) {
            // only use lastGrandChild logic if we're not using Firefox or IE.
            // causes flashing in Firefox, but required for Safari scrolling.
            var grandchildren = event.target.children;
            var lastGrandChild = grandchildren[grandchildren.length - 1];
            rect = lastGrandChild.getBoundingClientRect();
          }
          if (rect.bottom <= window.innerHeight + 24) {
            // at the bottom
            this.setState({ atBottom: true });
          } else {
            // not at the bottom
            this.setState({ atBottom: false });
          }
        }
      }
    }
  }, {
    key: '_onTouchStart',
    value: function _onTouchStart(event) {
      var touched = event.changedTouches[0];
      this._touchStartX = touched.clientX;
      this._touchStartY = touched.clientY;
    }
  }, {
    key: '_onTouchMove',
    value: function _onTouchMove(event) {
      var touched = event.changedTouches[0];
      var deltaX = touched.clientX - this._touchStartX;
      var deltaY = touched.clientY - this._touchStartY;
      // Only step if the user isn't scrolling vertically, bias vertically
      if (Math.abs(deltaY) < Math.abs(deltaX * 2)) {
        if (deltaX < 0) {
          this._onNext();
        } else {
          this._onPrevious();
        }
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      var _this5 = this;

      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(function () {
        _this5._onSelect(_this5.state.selectedIndex);
        _this5._shortTimer('_resizing', 1000);
      }, 50);
    }
  }, {
    key: '_onNext',
    value: function _onNext(event, wrap) {
      // only process if the focus is NOT in a form element
      if (!(0, _DOM.isFormElement)(document.activeElement)) {
        var children = this.props.children;
        var selectedIndex = this.state.selectedIndex;

        var childCount = _react2.default.Children.count(children);
        if (event) {
          this._stop();
          event.preventDefault();
        }
        var targetIndex = this._visibleIndexes()[0] + 1;
        if (targetIndex !== selectedIndex) {
          if (targetIndex < childCount) {
            this._onSelect(Math.min(childCount - 1, targetIndex));
          } else if (wrap) {
            this._onSelect(1);
          }
        }
      }
    }
  }, {
    key: '_onPrevious',
    value: function _onPrevious(event) {
      // only process if the focus is NOT in a form element
      if (!(0, _DOM.isFormElement)(document.activeElement)) {
        var selectedIndex = this.state.selectedIndex;

        if (event) {
          this._stop();
          event.preventDefault();
        }
        var targetIndex = this._visibleIndexes()[0] - 1;
        if (targetIndex !== selectedIndex) {
          this._onSelect(Math.max(0, targetIndex));
        }
      }
    }
  }, {
    key: '_start',
    value: function _start() {
      var _this6 = this;

      this._playTimer = setInterval(function () {
        _this6._onNext(null, true);
      }, DEFAULT_PLAY_INTERVAL);
      this.setState({ playing: true });
    }
  }, {
    key: '_stop',
    value: function _stop() {
      clearInterval(this._playTimer);
      this.setState({ playing: false });
    }
  }, {
    key: '_onTogglePlay',
    value: function _onTogglePlay(event) {
      event.preventDefault();
      if (this.state.playing) {
        this._stop();
      } else {
        this._start();
      }
    }
  }, {
    key: '_onSelect',
    value: function _onSelect(selectedIndex) {
      var _this7 = this;

      var _props2 = this.props,
          direction = _props2.direction,
          onSelect = _props2.onSelect;

      var componentElement = (0, _reactDom.findDOMNode)(this._componentRef);
      var childElement = this._childDOMNode(selectedIndex);
      var windowHeight = window.innerHeight + 24;

      if (childElement) {
        if (selectedIndex !== this.state.selectedIndex) {
          var parentElement = childElement.parentNode;
          var atBottom = Math.round(parentElement.scrollTop) >= parentElement.scrollHeight - parentElement.clientHeight;

          // scroll child to top
          childElement.scrollTop = 0;
          // ensures controls are displayed when selecting a new index and
          // scrollbar is at bottom of article
          this.setState({
            selectedIndex: selectedIndex,
            atBottom: atBottom
          }, function () {
            if (onSelect) {
              onSelect(selectedIndex);
            }

            // Necessary to detect for Firefox or Edge to implement accessibility
            // tabbing
            if (direction === 'row' && _this7.state.accessibilityTabbingCompatible) {
              _this7._anchorStepRef.focus();
              _this7._updateHiddenElements();
            }
          });
        } else if (childElement.scrollHeight <= windowHeight) {
          // on initial chapter load, ensure arrows are rendered
          // when there are no scrollbars
          this.setState({ atBottom: true });
        }

        var rect = childElement.getBoundingClientRect();
        if ('row' === direction) {
          if (rect.left !== 0) {
            this._scrollingHorizontally = true;
            _Scroll2.default.scrollBy(componentElement, 'scrollLeft', rect.left, function () {
              _this7._scrollingHorizontally = false;
            });
          }
        } else {
          if (rect.top !== 0) {
            this._scrollingVertically = true;
            _Scroll2.default.scrollBy(componentElement, 'scrollTop', rect.top, function () {
              _this7._scrollingVertically = false;
            });
          }
        }
      }
    }
  }, {
    key: '_onResponsive',
    value: function _onResponsive(small) {
      this.setState({ narrow: small });
    }
  }, {
    key: '_toggleDisableChapter',
    value: function _toggleDisableChapter(chapter, disabled) {
      var elements = (0, _DOM.filterByFocusable)(chapter.getElementsByTagName('*'));

      if (elements) {
        elements.forEach(function (element) {
          if (disabled) {
            element.setAttribute('disabled', 'disabled');
          } else {
            element.removeAttribute('disabled');
          }

          element.setAttribute('tabindex', disabled ? '-1' : '0');
        });
      }
    }
  }, {
    key: '_updateHiddenElements',
    value: function _updateHiddenElements() {
      var component = (0, _reactDom.findDOMNode)(this._componentRef);
      var children = component.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.getAttribute('aria-hidden')) {
          this._toggleDisableChapter(child, true);
        } else {
          this._toggleDisableChapter(child, false);
        }
      }
    }
  }, {
    key: '_updateProgress',
    value: function _updateProgress(event) {
      var _props3 = this.props,
          direction = _props3.direction,
          responsive = _props3.responsive;
      var narrow = this.state.narrow;

      var article = (0, _reactDom.findDOMNode)(this._componentRef);
      var articleRect = article.getBoundingClientRect();

      var offset = direction === 'column' ? Math.abs(articleRect.top) : Math.abs(articleRect.left);
      var totalDistance = direction === 'column' ? window.innerHeight : this._getChildrenWidth(this._componentRef.boxContainerRef.childNodes);
      var objectDistance = direction === 'column' ? articleRect.height : articleRect.width;

      // Covers row responding to column layout.
      if (direction === 'row' && narrow && responsive !== false) {
        offset = Math.abs(articleRect.top);
        totalDistance = window.innerHeight;
        objectDistance = articleRect.height;
      }

      var progress = Math.abs(offset / (objectDistance - totalDistance));
      var scrollPercentRounded = Math.round(progress * 100);
      this.props.onProgress(scrollPercentRounded);
    }
  }, {
    key: '_renderControls',
    value: function _renderControls() {
      var direction = this.props.direction;
      var _state = this.state,
          atBottom = _state.atBottom,
          narrow = _state.narrow,
          selectedIndex = _state.selectedIndex;

      var CONTROL_CLASS_PREFIX = CLASS_ROOT + '__control ' + CLASS_ROOT + '__control';
      var childCount = _react2.default.Children.count(this.props.children);
      var controls = [];

      var a11yTitle = this.props.a11yTitle || {};
      if ('row' === direction) {
        if (!narrow || atBottom) {
          if (selectedIndex > 0) {
            controls.push(_react2.default.createElement(_Button2.default, { key: 'previous',
              plain: true, a11yTitle: a11yTitle.previous,
              className: CONTROL_CLASS_PREFIX + '-left',
              onClick: this._onPrevious, icon: _react2.default.createElement(_LinkPrevious2.default, {
                a11yTitle: 'article-previous-title', size: 'large' }) }));
          }
          if (selectedIndex < childCount - 1) {
            controls.push(_react2.default.createElement(_Button2.default, { key: 'next',
              plain: true, a11yTitle: a11yTitle.next,
              className: CONTROL_CLASS_PREFIX + '-right',
              onClick: this._onNext, icon: _react2.default.createElement(_LinkNext2.default, {
                size: 'large', a11yTitle: 'article-next-title' }) }));
          }
        }
      } else {
        if (selectedIndex > 0) {
          controls.push(_react2.default.createElement(
            _Button2.default,
            { key: 'previous',
              plain: true, a11yTitle: a11yTitle.previous,
              className: CONTROL_CLASS_PREFIX + '-up',
              onClick: this._onPrevious },
            _react2.default.createElement(_Up2.default, null)
          ));
        }
        if (selectedIndex < childCount - 1) {
          controls.push(_react2.default.createElement(
            _Button2.default,
            { key: 'next', plain: true, a11yTitle: a11yTitle.next,
              className: CONTROL_CLASS_PREFIX + '-down', onClick: this._onNext },
            _react2.default.createElement(_Down2.default, { a11yTitle: 'article-down' })
          ));
        }
      }

      return controls;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var _props4 = this.props,
          className = _props4.className,
          primary = _props4.primary,
          scrollStep = _props4.scrollStep;
      var selectedIndex = this.state.selectedIndex;

      var classes = (0, _classnames3.default)(CLASS_ROOT, _defineProperty({}, CLASS_ROOT + '--scroll-step', scrollStep), className);

      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
      var restProps = _Props2.default.omit(this.props, Object.keys(Article.propTypes));

      var controls = void 0;
      if (this.props.controls) {
        controls = this._renderControls();
      }

      var anchorStepNode = void 0;
      if (this.state.accessibilityTabbingCompatible) {
        anchorStepNode = _react2.default.createElement('a', { tabIndex: '-1', 'aria-hidden': 'true',
          ref: function ref(_ref) {
            return _this8._anchorStepRef = _ref;
          } });
      }

      var children = this.props.children;
      if (scrollStep || controls) {
        children = _react.Children.map(this.props.children, function (element, index) {
          if (element) {

            if (controls) {
              var ariaHidden = void 0;
              if (selectedIndex !== index && _this8.state.accessibilityTabbingCompatible) {
                ariaHidden = 'true';
              }

              element = _react2.default.createElement(
                'div',
                { 'aria-hidden': ariaHidden },
                element
              );
            }

            return element;
          }

          return undefined;
        }, this);
      }

      delete boxProps.a11yTitle;

      return _react2.default.createElement(
        _Box2.default,
        _extends({}, restProps, boxProps, { ref: function ref(_ref2) {
            return _this8._componentRef = _ref2;
          },
          tag: 'article', className: classes, primary: primary,
          onScroll: this._onScroll, onTouchStart: this._onTouchStart,
          onTouchMove: this._onTouchMove }),
        children,
        controls,
        anchorStepNode
      );
    }
  }]);

  return Article;
}(_react.Component);

Article.displayName = 'Article';
exports.default = Article;


Article.propTypes = _extends({
  controls: _propTypes2.default.bool
}, _Box2.default.propTypes, {
  a11yTitle: _propTypes2.default.shape({
    next: _propTypes2.default.string,
    previous: _propTypes2.default.string
  }),
  onProgress: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  scrollStep: _propTypes2.default.bool,
  selected: _propTypes2.default.number
});

Article.defaultProps = {
  pad: 'none',
  direction: 'column'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Box.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _KeyboardAccelerators = __webpack_require__("./node_modules/grommet/utils/KeyboardAccelerators.js");

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

var _DOM = __webpack_require__("./node_modules/grommet/utils/DOM.js");

var _SkipLinkAnchor = __webpack_require__("./node_modules/grommet/components/SkipLinkAnchor.js");

var _SkipLinkAnchor2 = _interopRequireDefault(_SkipLinkAnchor);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Announcer = __webpack_require__("./node_modules/grommet/utils/Announcer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.BOX;
var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

var Box = function (_Component) {
  _inherits(Box, _Component);

  function Box(props) {
    _classCallCheck(this, Box);

    var _this = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));

    _this.state = { mouseActive: false };
    return _this;
  }

  _createClass(Box, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var onClick = this.props.onClick;

      if (onClick) {
        var clickCallback = function clickCallback() {
          if (_this2.boxContainerRef === document.activeElement) {
            onClick();
          }
        };

        _KeyboardAccelerators2.default.startListeningToKeyboard(this, {
          enter: clickCallback,
          space: clickCallback
        });
      }

      this._setDarkBackground();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.colorIndex !== this.props.colorIndex) {
        if (nextProps.colorIndex) {
          this.setState({ updateDarkBackground: true });
        } else {
          this.setState({ darkBackground: undefined });
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.announce) {
        (0, _Announcer.announce)(this.boxContainerRef.textContent);
      }
      if (this.state.updateDarkBackground) {
        this.setState({ updateDarkBackground: false });
        this._setDarkBackground();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onClick) {
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this);
      }
      if (this._checkBackground) {
        this._checkBackground.stop();
      }
    }
  }, {
    key: '_setDarkBackground',
    value: function _setDarkBackground() {
      var _this3 = this;

      var colorIndex = this.props.colorIndex;

      var box = (0, _reactDom.findDOMNode)(this.boxContainerRef);
      if (this._checkBackground) {
        this._checkBackground.stop();
      }
      this._checkBackground = (0, _DOM.checkDarkBackground)(colorIndex, box, function (darkBackground) {
        return _this3.setState({ darkBackground: darkBackground });
      });
    }
  }, {
    key: '_normalize',
    value: function _normalize(string) {
      return string.replace('/', '-');
    }
  }, {
    key: '_addPropertyClass',
    value: function _addPropertyClass(classes, property) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var value = (options.object || this.props)[property];
      var elementName = options.elementName || CLASS_ROOT;
      var prefix = options.prefix || property;
      if (value) {
        if (typeof value === 'string') {
          classes.push(elementName + '--' + prefix + '-' + this._normalize(value));
        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          Object.keys(value).forEach(function (key) {
            _this4._addPropertyClass(classes, key, {
              object: value, prefix: prefix + '-' + key });
          });
        } else {
          classes.push(elementName + '--' + this._normalize(prefix));
        }
      }
    }
  }, {
    key: '_backgroundContextClass',
    value: function _backgroundContextClass(darkBackground) {
      var result = void 0;
      if (undefined === darkBackground) {
        result = BACKGROUND_COLOR_INDEX + '--pending';
      } else if (darkBackground) {
        result = BACKGROUND_COLOR_INDEX + '--dark';
      } else {
        result = BACKGROUND_COLOR_INDEX + '--light';
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props,
          a11yTitle = _props.a11yTitle,
          appCentered = _props.appCentered,
          backgroundImage = _props.backgroundImage,
          children = _props.children,
          className = _props.className,
          colorIndex = _props.colorIndex,
          containerClassName = _props.containerClassName,
          focusable = _props.focusable,
          full = _props.full,
          id = _props.id,
          onClick = _props.onClick,
          _onBlur = _props.onBlur,
          _onFocus = _props.onFocus,
          _onMouseDown = _props.onMouseDown,
          _onMouseUp = _props.onMouseUp,
          pad = _props.pad,
          primary = _props.primary,
          role = _props.role,
          size = _props.size,
          tabIndex = _props.tabIndex,
          tag = _props.tag,
          texture = _props.texture;
      var _state = this.state,
          darkBackground = _state.darkBackground,
          mouseActive = _state.mouseActive;

      var classes = [CLASS_ROOT];
      var containerClasses = [CLASS_ROOT + '__container'];
      var restProps = _Props2.default.omit(this.props, Object.keys(Box.propTypes));
      this._addPropertyClass(classes, 'full');
      if (full && full.responsive === undefined) {
        // default is true for backwards compatibility sake
        classes.push(CLASS_ROOT + '--full-responsive');
      }
      this._addPropertyClass(classes, 'direction');
      this._addPropertyClass(classes, 'justify');
      this._addPropertyClass(classes, 'align');
      this._addPropertyClass(classes, 'alignContent', { prefix: 'align-content' });
      this._addPropertyClass(classes, 'alignSelf', { prefix: 'align-self' });
      this._addPropertyClass(classes, 'reverse');
      this._addPropertyClass(classes, 'responsive');
      this._addPropertyClass(classes, 'basis');
      this._addPropertyClass(classes, 'flex');
      this._addPropertyClass(classes, 'pad');
      this._addPropertyClass(classes, 'margin');
      this._addPropertyClass(classes, 'separator');
      this._addPropertyClass(classes, 'textAlign', { prefix: 'text-align' });
      this._addPropertyClass(classes, 'wrap');

      if (this.props.hasOwnProperty('flex')) {
        if (!this.props.flex) {
          classes.push(CLASS_ROOT + '--flex-off');
        }
      }
      if (size) {
        if ((typeof size === 'undefined' ? 'undefined' : _typeof(size)) === 'object') {
          Object.keys(size).forEach(function (key) {
            _this5._addPropertyClass(classes, key, { object: size });
          });
        } else {
          this._addPropertyClass(classes, 'size');
        }
        if (size) {
          if (!(size.width && size.width.max)) {
            // don't apply 100% max-width when size using size.width.max option
            classes.push(CLASS_ROOT + '--size');
          }
          if (size.width && size.width.max) {
            // allow widths to shrink, apply 100% width
            classes.push(CLASS_ROOT + '--width-max');
          }
        }
      }

      // needed to properly set flex-basis for 1/3 & 2/3 basis boxes
      if (pad && pad.between && children) {
        if (_react2.default.Children.count(children) % 3 === 0) {
          classes.push(CLASS_ROOT + '--pad-between-thirds');
        }
      }

      if (appCentered) {
        this._addPropertyClass(containerClasses, 'full', { elementName: CLASS_ROOT + '__container' });
        if (colorIndex) {
          containerClasses.push(BACKGROUND_COLOR_INDEX + '-' + colorIndex);
          containerClasses.push(this._backgroundContextClass(darkBackground));
        }
        if (containerClassName) {
          containerClasses.push(containerClassName);
        }
      } else if (colorIndex) {
        classes.push(BACKGROUND_COLOR_INDEX + '-' + colorIndex);
        classes.push(this._backgroundContextClass(darkBackground));
      }

      var a11yProps = {};
      var clickableProps = {};
      if (onClick) {
        classes.push(CLASS_ROOT + "--clickable");
        clickableProps = {
          onMouseDown: function onMouseDown(event) {
            _this5.setState({ mouseActive: true });
            if (_onMouseDown) {
              _onMouseDown(event);
            }
          },
          onMouseUp: function onMouseUp(event) {
            _this5.setState({ mouseActive: false });
            if (_onMouseUp) {
              _onMouseUp(event);
            }
          },
          onFocus: function onFocus(event) {
            if (mouseActive === false) {
              _this5.setState({ focus: true });
            }
            if (_onFocus) {
              _onFocus(event);
            }
          },
          onBlur: function onBlur(event) {
            _this5.setState({ focus: false });
            if (_onBlur) {
              _onBlur(event);
            }
          }
        };
        if (focusable) {
          if (this.state.focus) {
            classes.push(CLASS_ROOT + '--focus');
          }
          var boxLabel = typeof a11yTitle !== 'undefined' ? a11yTitle : _Intl2.default.getMessage(this.context.intl, 'Box');
          a11yProps.tabIndex = tabIndex || 0;
          a11yProps["aria-label"] = this.props['aria-label'] || boxLabel;
          a11yProps.role = role || 'group';
        }
      }

      var skipLinkAnchor = void 0;
      if (primary) {
        var mainContentLabel = _Intl2.default.getMessage(this.context.intl, 'Main Content');
        skipLinkAnchor = _react2.default.createElement(_SkipLinkAnchor2.default, { label: mainContentLabel });
      }

      if (className) {
        classes.push(className);
      }

      var style = {};
      if (texture && 'string' === typeof texture) {
        if (texture.indexOf('url(') !== -1) {
          style.backgroundImage = texture;
        } else {
          style.backgroundImage = 'url(' + texture + ')';
        }
      } else if (backgroundImage) {
        style.background = backgroundImage + " no-repeat center center";
        style.backgroundSize = "cover";
      }
      style = _extends({}, style, restProps.style);
      var textureMarkup = void 0;
      if ('object' === (typeof texture === 'undefined' ? 'undefined' : _typeof(texture))) {
        textureMarkup = _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + "__texture" },
          texture
        );
      }

      var Component = tag;
      if (appCentered) {
        return _react2.default.createElement(
          'div',
          _extends({}, restProps, { ref: function ref(_ref) {
              return _this5.boxContainerRef = _ref;
            },
            className: containerClasses.join(' '),
            style: style, role: role }, a11yProps, clickableProps),
          skipLinkAnchor,
          _react2.default.createElement(
            Component,
            { id: id, className: classes.join(' ') },
            textureMarkup,
            children
          )
        );
      } else {
        return _react2.default.createElement(
          Component,
          _extends({}, restProps, { ref: function ref(_ref2) {
              return _this5.boxContainerRef = _ref2;
            },
            id: id, className: classes.join(' '), style: style,
            role: role, tabIndex: tabIndex,
            onClick: onClick }, a11yProps, clickableProps),
          skipLinkAnchor,
          textureMarkup,
          children
        );
      }
    }
  }]);

  return Box;
}(_react.Component);

Box.displayName = 'Box';
exports.default = Box;


var FIXED_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
var RELATIVE_SIZES = ['full', '1/2', '1/3', '2/3', '1/4', '3/4'];
var SIZES = FIXED_SIZES.concat(RELATIVE_SIZES);
var MARGIN_SIZES = ['small', 'medium', 'large', 'none'];
var PAD_SIZES = ['small', 'medium', 'large', 'xlarge', 'none'];

Box.propTypes = {
  a11yTitle: _propTypes2.default.string,
  announce: _propTypes2.default.bool,
  align: _propTypes2.default.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
  alignContent: _propTypes2.default.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']),
  alignSelf: _propTypes2.default.oneOf(['start', 'center', 'end', 'stretch']),
  appCentered: _propTypes2.default.bool,
  backgroundImage: _propTypes2.default.string,
  basis: _propTypes2.default.oneOf(SIZES),
  colorIndex: _propTypes2.default.string,
  containerClassName: _propTypes2.default.string,
  direction: _propTypes2.default.oneOf(['row', 'column']),
  focusable: _propTypes2.default.bool,
  flex: _propTypes2.default.oneOf(['grow', 'shrink', true, false]),
  full: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string, _propTypes2.default.shape({
    vertical: _propTypes2.default.bool,
    horizontal: _propTypes2.default.bool,
    responsive: _propTypes2.default.bool
  })]),
  // remove in 1.0?
  onClick: _propTypes2.default.func,
  justify: _propTypes2.default.oneOf(['start', 'center', 'between', 'end', 'around']),
  margin: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(MARGIN_SIZES), _propTypes2.default.shape({
    bottom: _propTypes2.default.oneOf(MARGIN_SIZES),
    horizontal: _propTypes2.default.oneOf(MARGIN_SIZES),
    left: _propTypes2.default.oneOf(MARGIN_SIZES),
    right: _propTypes2.default.oneOf(MARGIN_SIZES),
    top: _propTypes2.default.oneOf(MARGIN_SIZES),
    vertical: _propTypes2.default.oneOf(MARGIN_SIZES)
  })]),
  pad: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(PAD_SIZES), _propTypes2.default.shape({
    between: _propTypes2.default.oneOf(PAD_SIZES),
    horizontal: _propTypes2.default.oneOf(PAD_SIZES),
    vertical: _propTypes2.default.oneOf(PAD_SIZES)
  })]),
  primary: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  responsive: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  separator: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right', 'horizontal', 'vertical', 'all', 'none']),
  size: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'full']), // remove in 1.0?, use basis
  _propTypes2.default.shape({
    height: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(SIZES), _propTypes2.default.shape({
      max: _propTypes2.default.oneOf(FIXED_SIZES),
      min: _propTypes2.default.oneOf(FIXED_SIZES)
    })]),
    width: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(SIZES), _propTypes2.default.shape({
      max: _propTypes2.default.oneOf(FIXED_SIZES),
      min: _propTypes2.default.oneOf(FIXED_SIZES)
    })])
  })]),
  tag: _propTypes2.default.string,
  textAlign: _propTypes2.default.oneOf(['left', 'center', 'right']),
  texture: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
  wrap: _propTypes2.default.bool
};

Box.contextTypes = {
  intl: _propTypes2.default.object
};

Box.defaultProps = {
  announce: false,
  direction: 'column',
  pad: 'none',
  tag: 'div',
  responsive: true,
  focusable: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CLASS_ROOT = _CSSClassnames2.default.BUTTON;

function getHoverModifier(hoverIndicator) {
  if (hoverIndicator) {
    if ((typeof hoverIndicator === 'undefined' ? 'undefined' : _typeof(hoverIndicator)) === 'object') {
      if (hoverIndicator.background) {
        if (typeof hoverIndicator.background === 'string') {
          var prefix = _CSSClassnames.namespace + 'background-hover-color-index-';
          return '' + prefix + hoverIndicator.background;
        }
        return CLASS_ROOT + '--hover-background';
      }
    } else if (typeof hoverIndicator === 'string') {
      return CLASS_ROOT + '--hover-' + hoverIndicator;
    }
  }
}

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

    _this._onClick = _this._onClick.bind(_this);
    _this._onMouseDown = _this._onMouseDown.bind(_this);
    _this._onMouseUp = _this._onMouseUp.bind(_this);
    _this._onFocus = _this._onFocus.bind(_this);
    _this._onBlur = _this._onBlur.bind(_this);
    _this.state = {
      mouseActive: false,
      focus: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: '_onClick',
    value: function _onClick(event) {
      var _props = this.props,
          method = _props.method,
          onClick = _props.onClick,
          path = _props.path;
      var router = this.context.router;

      var modifierKey = event.ctrlKey || event.metaKey;

      if (modifierKey && !onClick) {
        return true;
      }

      event.preventDefault();

      if ('push' === method) {
        (router.history || router).push(path);
      } else if ('replace' === method) {
        (router.history || router).replace(path);
      }

      if (onClick) {
        onClick.apply(undefined, arguments);
      }
    }
  }, {
    key: '_onMouseDown',
    value: function _onMouseDown(event) {
      var onMouseDown = this.props.onMouseDown;

      this.setState({ mouseActive: true });
      if (onMouseDown) {
        onMouseDown(event);
      }
    }
  }, {
    key: '_onMouseUp',
    value: function _onMouseUp(event) {
      var onMouseUp = this.props.onMouseUp;

      this.setState({ mouseActive: false });
      if (onMouseUp) {
        onMouseUp(event);
      }
    }
  }, {
    key: '_onFocus',
    value: function _onFocus(event) {
      var onFocus = this.props.onFocus;
      var mouseActive = this.state.mouseActive;

      if (mouseActive === false) {
        this.setState({ focus: true });
      }
      if (onFocus) {
        onFocus(event);
      }
    }
  }, {
    key: '_onBlur',
    value: function _onBlur(event) {
      var onBlur = this.props.onBlur;

      this.setState({ focus: false });
      if (onBlur) {
        onBlur(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          accent = _props2.accent,
          align = _props2.align,
          box = _props2.box,
          children = _props2.children,
          className = _props2.className,
          critical = _props2.critical,
          fill = _props2.fill,
          hoverIndicator = _props2.hoverIndicator,
          href = _props2.href,
          icon = _props2.icon,
          label = _props2.label,
          onClick = _props2.onClick,
          path = _props2.path,
          plain = _props2.plain,
          primary = _props2.primary,
          reverse = _props2.reverse,
          secondary = _props2.secondary,
          type = _props2.type,
          props = _objectWithoutProperties(_props2, ['a11yTitle', 'accent', 'align', 'box', 'children', 'className', 'critical', 'fill', 'hoverIndicator', 'href', 'icon', 'label', 'onClick', 'path', 'plain', 'primary', 'reverse', 'secondary', 'type']);

      delete props.method;
      var router = this.context.router;


      var buttonIcon = void 0;
      if (icon) {
        buttonIcon = _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__icon' },
          icon
        );
      }

      var buttonLabel = void 0;
      if (label) {
        buttonLabel = _react2.default.createElement(
          'span',
          { className: CLASS_ROOT + '__label' },
          label
        );
      }

      var adjustedHref = void 0;
      if (router && router.createPath) {
        adjustedHref = path && router ? router.createPath(path) : href;
      } else {
        adjustedHref = path && router && router.history ? router.history.createHref({ pathname: path }) : href;
      }

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--box', box), _defineProperty(_classnames, CLASS_ROOT + '--critical', critical), _defineProperty(_classnames, CLASS_ROOT + '--focus', this.state.focus), _defineProperty(_classnames, CLASS_ROOT + '--primary', primary), _defineProperty(_classnames, CLASS_ROOT + '--secondary', secondary), _defineProperty(_classnames, CLASS_ROOT + '--accent', accent), _defineProperty(_classnames, CLASS_ROOT + '--disabled', !onClick && !adjustedHref && ['reset', 'submit'].indexOf(type) === -1), _defineProperty(_classnames, CLASS_ROOT + '--fill', fill), _defineProperty(_classnames, CLASS_ROOT + '--plain', plain || box || _react.Children.count(children) > 0 || icon && !label), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, getHoverModifier(hoverIndicator), hoverIndicator), _classnames), className);

      var adjustedOnClick = path && router ? this._onClick : onClick;

      var Tag = adjustedHref ? 'a' : 'button';
      var buttonType = void 0;
      if (!adjustedHref) {
        buttonType = type;
      }

      var boxProps = void 0;
      if (box) {
        // Let the root element of the Button be a Box element with tag prop
        boxProps = {
          tag: Tag
        };
        Tag = _Box2.default;
      }

      var first = reverse ? buttonLabel : buttonIcon;
      var second = reverse ? buttonIcon : buttonLabel;

      return _react2.default.createElement(
        Tag,
        _extends({}, props, boxProps, { href: adjustedHref, type: buttonType,
          className: classes, 'aria-label': a11yTitle,
          onClick: adjustedOnClick,
          disabled: !onClick && !adjustedHref && ['reset', 'submit'].indexOf(type) === -1,
          onMouseDown: this._onMouseDown, onMouseUp: this._onMouseUp,
          onFocus: this._onFocus, onBlur: this._onBlur }),
        first,
        second,
        children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.displayName = 'Button';
exports.default = Button;


Button.propTypes = {
  a11yTitle: _propTypes2.default.string,
  accent: _propTypes2.default.bool,
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  box: _propTypes2.default.bool,
  critical: _propTypes2.default.bool,
  fill: _propTypes2.default.bool,
  hoverIndicator: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['background']), _propTypes2.default.shape({
    background: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
  })]),
  href: _propTypes2.default.string,
  icon: _propTypes2.default.element,
  label: _propTypes2.default.node,
  method: _propTypes2.default.oneOf(['push', 'replace']),
  onClick: _propTypes2.default.func,
  path: _propTypes2.default.string,
  plain: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  secondary: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['button', 'reset', 'submit'])
};

Button.defaultProps = {
  method: 'push',
  type: 'button'
};

Button.contextTypes = {
  router: _propTypes2.default.object
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Card.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames4 = _interopRequireDefault(_classnames3);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _Label = __webpack_require__("./node_modules/grommet/components/Label.js");

var _Label2 = _interopRequireDefault(_Label);

var _Heading = __webpack_require__("./node_modules/grommet/components/Heading.js");

var _Heading2 = _interopRequireDefault(_Heading);

var _Headline = __webpack_require__("./node_modules/grommet/components/Headline.js");

var _Headline2 = _interopRequireDefault(_Headline);

var _Paragraph = __webpack_require__("./node_modules/grommet/components/Paragraph.js");

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _Anchor = __webpack_require__("./node_modules/grommet/components/Anchor.js");

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Layer = __webpack_require__("./node_modules/grommet/components/Layer.js");

var _Layer2 = _interopRequireDefault(_Layer);

var _Video = __webpack_require__("./node_modules/grommet/components/Video.js");

var _Video2 = _interopRequireDefault(_Video);

var _CirclePlay = __webpack_require__("./node_modules/grommet/components/icons/base/CirclePlay.js");

var _CirclePlay2 = _interopRequireDefault(_CirclePlay);

var _Responsive = __webpack_require__("./node_modules/grommet/utils/Responsive.js");

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CARD;

var LABEL_SIZES = {
  xlarge: 'medium',
  large: 'medium',
  medium: 'medium',
  small: 'medium',
  xsmall: 'small'
};

var HEADLINE_SIZES = {
  xlarge: 'medium',
  large: 'medium'
};

var HEADING_TAGS = {
  medium: 'h1',
  small: 'h2',
  xsmall: 'h3'
};

var PARAGRAPH_SIZES = {
  xlarge: 'xlarge',
  large: 'xlarge',
  medium: 'large',
  small: 'large',
  xsmall: 'medium'
};

var PARAGRAPH_MARGINS = {
  xlarge: 'large',
  large: 'large',
  medium: 'medium',
  small: 'medium',
  xsmall: 'small'
};

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));

    _this._onClick = _this._onClick.bind(_this);
    _this._onResponsive = _this._onResponsive.bind(_this);
    _this.state = { activeVideo: false, small: false };
    return _this;
  }

  _createClass(Card, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._responsive = _Responsive2.default.start(this._onResponsive);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._responsive) {
        this._responsive.stop();
      }
    }
  }, {
    key: '_onResponsive',
    value: function _onResponsive(small) {
      this.setState({ small: !!small });
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      var video = this.props.video;

      if (video) {
        event.preventDefault();
        this.setState({ activeVideo: !this.state.activeVideo });
      }
    }
  }, {
    key: '_renderLabel',
    value: function _renderLabel() {
      var _props = this.props,
          label = _props.label,
          textSize = _props.textSize;

      var result = label;
      if (typeof label === 'string') {
        result = _react2.default.createElement(
          _Label2.default,
          { size: LABEL_SIZES[textSize], margin: 'none', uppercase: true },
          label
        );
      }
      return result;
    }
  }, {
    key: '_renderHeading',
    value: function _renderHeading() {
      var _props2 = this.props,
          heading = _props2.heading,
          headingStrong = _props2.headingStrong,
          textSize = _props2.textSize;

      var result = heading;
      if (typeof heading === 'string') {
        if (HEADLINE_SIZES[textSize]) {
          result = _react2.default.createElement(
            _Headline2.default,
            { size: HEADLINE_SIZES[textSize], strong: headingStrong },
            heading
          );
        } else {
          result = _react2.default.createElement(
            _Heading2.default,
            { tag: HEADING_TAGS[textSize], strong: headingStrong },
            heading
          );
        }
      }
      return result;
    }
  }, {
    key: '_renderLink',
    value: function _renderLink() {
      var link = this.props.link;

      return link;
    }
  }, {
    key: '_renderThumbnail',
    value: function _renderThumbnail() {
      var _props3 = this.props,
          direction = _props3.direction,
          thumbnail = _props3.thumbnail,
          video = _props3.video;
      var small = this.state.small;

      var result = thumbnail;
      if (typeof thumbnail === 'string') {
        var size = small ? 'large' : 'xlarge';
        var videoIcon = video ? _react2.default.createElement(_Anchor2.default, { icon: _react2.default.createElement(_CirclePlay2.default, { responsive: false,
            colorIndex: 'brand', size: size }) }) : undefined;

        var flex = 'row' === direction ? 'grow' : undefined;

        result = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + '__thumbnail', flex: flex,
            backgroundImage: 'url(' + thumbnail + ')', basis: 'small',
            justify: 'center', align: 'center' },
          videoIcon
        );
      }
      return result;
    }
  }, {
    key: '_renderVideoLayer',
    value: function _renderVideoLayer() {
      var video = this.props.video;
      var activeVideo = this.state.activeVideo;

      var result = void 0;

      if (video && activeVideo) {
        var layerContent = void 0;
        if (video.source) {
          layerContent = _react2.default.createElement(
            _Video2.default,
            null,
            _react2.default.createElement('source', { src: video.source, type: 'video/' + video.type })
          );
        } else {
          layerContent = video;
        }

        result = _react2.default.createElement(
          _Layer2.default,
          { onClose: this._onClick, closer: true, flush: true },
          layerContent
        );
      }

      return result;
    }
  }, {
    key: '_renderDescription',
    value: function _renderDescription() {
      var _props4 = this.props,
          description = _props4.description,
          textSize = _props4.textSize;

      var result = description;
      if (typeof description === 'string') {
        result = _react2.default.createElement(
          _Paragraph2.default,
          {
            margin: PARAGRAPH_MARGINS[textSize],
            size: PARAGRAPH_SIZES[textSize]
          },
          description
        );
      }
      return result;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames2;

      var _props5 = this.props,
          a11yTitle = _props5.a11yTitle,
          children = _props5.children,
          className = _props5.className,
          contentPad = _props5.contentPad,
          onClick = _props5.onClick,
          reverse = _props5.reverse,
          truncate = _props5.truncate;

      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
      var restProps = _Props2.default.omit(this.props, Object.keys(Card.propTypes));

      var classes = (0, _classnames4.default)(CLASS_ROOT, _defineProperty({}, CLASS_ROOT + '--selectable', onClick), className);

      var thumbnail = this._renderThumbnail();
      var label = this._renderLabel();
      var heading = this._renderHeading();
      var description = this._renderDescription();
      var link = this._renderLink();
      var videoLayer = this._renderVideoLayer();

      var contentClasses = (0, _classnames4.default)((_classnames2 = {}, _defineProperty(_classnames2, CLASS_ROOT + '__content', true), _defineProperty(_classnames2, CLASS_ROOT + '__content--truncate', truncate), _classnames2));

      var basis = 'row' === this.props.direction ? '2/3' : undefined;
      var text = _react2.default.createElement(
        _Box2.default,
        { className: contentClasses, pad: contentPad,
          basis: basis },
        label,
        heading,
        description,
        children,
        link
      );

      var cardJustify = void 0;
      if (reverse) {
        // align thumbnail to bottom/right of card for bottom cardPlacement
        cardJustify = 'between';
      }

      if (!this.props.size) {
        if (this.props.direction === 'row') {
          boxProps.size = { width: 'xlarge' };
        } else {
          boxProps.size = { width: 'medium' };
        }
      }

      return _react2.default.createElement(
        _Box2.default,
        _extends({}, boxProps, restProps, { className: classes, wrap: true,
          justify: cardJustify, onClick: onClick, a11yTitle: a11yTitle }),
        thumbnail,
        text,
        videoLayer
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.displayName = 'Card';
exports.default = Card;


Card.propTypes = _extends({
  contentPad: _Box2.default.propTypes.pad,
  description: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  heading: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  headingStrong: _propTypes2.default.bool,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  link: _propTypes2.default.element,
  textSize: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']),
  thumbnail: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  truncate: _propTypes2.default.bool,
  video: _propTypes2.default.oneOfType([_propTypes2.default.shape({
    source: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string
  }), _propTypes2.default.element])
}, _Box2.default.propTypes);

Card.defaultProps = {
  a11yTitle: 'Card',
  contentPad: 'medium',
  headingStrong: true,
  textSize: 'small'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames4 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames5 = _interopRequireDefault(_classnames4);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _SkipLinkAnchor = __webpack_require__("./node_modules/grommet/components/SkipLinkAnchor.js");

var _SkipLinkAnchor2 = _interopRequireDefault(_SkipLinkAnchor);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.FOOTER;

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props, context) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props, context));

    _this._alignMirror = _this._alignMirror.bind(_this);
    _this._onResize = _this._onResize.bind(_this);
    return _this;
  }

  _createClass(Footer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.fixed) {
        this._alignMirror();
        window.addEventListener('resize', this._onResize);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.fixed) {
        this._alignMirror();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.fixed) {
        window.removeEventListener('resize', this._onResize);
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      this._alignMirror();
    }
  }, {
    key: '_alignMirror',
    value: function _alignMirror() {
      var contentElement = _reactDom2.default.findDOMNode(this.contentRef);
      var mirrorElement = this.mirrorRef;

      // constrain fixed content to the width of the mirror
      var mirrorRect = mirrorElement.getBoundingClientRect();
      contentElement.style.width = Math.floor(mirrorRect.width) + 'px';

      // align the mirror height with the content's height
      var contentRect = contentElement.getBoundingClientRect();
      mirrorElement.style.height = Math.floor(contentRect.height) + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _classnames2,
          _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          colorIndex = _props.colorIndex,
          fixed = _props.fixed,
          float = _props.float,
          primary = _props.primary,
          size = _props.size;

      var restProps = _Props2.default.omit(this.props, Object.keys(Footer.propTypes));
      var classes = (0, _classnames5.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size && typeof size === 'string'), _defineProperty(_classnames, CLASS_ROOT + '--float', float), _classnames), className);

      var containerClasses = (0, _classnames5.default)(CLASS_ROOT + '__container', (_classnames2 = {}, _defineProperty(_classnames2, CLASS_ROOT + '__container--float', float), _defineProperty(_classnames2, CLASS_ROOT + '__container--fixed', fixed), _defineProperty(_classnames2, CLASS_ROOT + '__container--fill',
      // add default color index if none is provided
      fixed && !colorIndex), _classnames2));

      var wrapperClasses = (0, _classnames5.default)(CLASS_ROOT + '__wrapper', _defineProperty({}, CLASS_ROOT + '__wrapper--' + size, size && typeof size === 'string'));

      var footerSkipLink = void 0;
      if (primary) {
        footerSkipLink = _react2.default.createElement(_SkipLinkAnchor2.default, { label: 'Footer' });
      }

      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
      // don't transfer size to Box since it means something different
      delete boxProps.size;

      if (fixed) {
        return _react2.default.createElement(
          'div',
          _extends({ className: containerClasses }, restProps),
          _react2.default.createElement('div', { ref: function ref(_ref) {
              return _this2.mirrorRef = _ref;
            },
            className: CLASS_ROOT + '__mirror' }),
          _react2.default.createElement(
            'div',
            { className: wrapperClasses },
            _react2.default.createElement(
              _Box2.default,
              _extends({ ref: function ref(_ref2) {
                  return _this2.contentRef = _ref2;
                }
              }, boxProps, { tag: 'footer', className: classes,
                primary: false }),
              footerSkipLink,
              children
            )
          )
        );
      } else {
        return _react2.default.createElement(
          _Box2.default,
          _extends({}, restProps, boxProps, { tag: 'footer', className: classes,
            containerClassName: containerClasses,
            primary: false }),
          footerSkipLink,
          children
        );
      }
    }
  }]);

  return Footer;
}(_react.Component);

Footer.displayName = 'Footer';
exports.default = Footer;


Footer.propTypes = _extends({
  fixed: _propTypes2.default.bool,
  float: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large'])
}, _Box2.default.propTypes);

Footer.defaultProps = {
  align: 'center',
  direction: 'row',
  responsive: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.FORM;

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          compact = _props.compact,
          fill = _props.fill,
          pad = _props.pad,
          plain = _props.plain,
          props = _objectWithoutProperties(_props, ['className', 'compact', 'fill', 'pad', 'plain']);

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--compact', compact), _defineProperty(_classnames, CLASS_ROOT + '--fill', fill), _defineProperty(_classnames, CLASS_ROOT + '--pad-' + pad, typeof pad === 'string'), _defineProperty(_classnames, CLASS_ROOT + '--pad-horizontal-' + pad.horizontal, (typeof pad === 'undefined' ? 'undefined' : _typeof(pad)) === 'object' && 'horizontal' in pad), _defineProperty(_classnames, CLASS_ROOT + '--pad-vertical-' + pad.vertical, (typeof pad === 'undefined' ? 'undefined' : _typeof(pad)) === 'object' && 'vertical' in pad), _defineProperty(_classnames, CLASS_ROOT + '--plain', plain), _classnames), className);

      return _react2.default.createElement(
        'form',
        _extends({}, props, { className: classes, onSubmit: this.props.onSubmit }),
        this.props.children
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.displayName = 'Form';
exports.default = Form;


Form.propTypes = {
  compact: _propTypes2.default.bool,
  fill: _propTypes2.default.bool,
  onSubmit: _propTypes2.default.func,
  pad: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['none', 'small', 'medium', 'large']), _propTypes2.default.shape({
    horizontal: _propTypes2.default.oneOf(['none', 'small', 'medium', 'large']),
    vertical: _propTypes2.default.oneOf(['none', 'small', 'medium', 'large'])
  })]),
  plain: _propTypes2.default.bool
};

Form.defaultProps = {
  compact: false,
  fill: false,
  pad: 'none'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/FormField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.FORM_FIELD;

var FormField = function (_Component) {
  _inherits(FormField, _Component);

  function FormField(props, context) {
    _classCallCheck(this, FormField);

    var _this = _possibleConstructorReturn(this, (FormField.__proto__ || Object.getPrototypeOf(FormField)).call(this, props, context));

    _this._onFocus = _this._onFocus.bind(_this);
    _this._onBlur = _this._onBlur.bind(_this);
    _this._onClick = _this._onClick.bind(_this);

    _this.state = { focus: false };
    return _this;
  }

  _createClass(FormField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var contentsElement = this.contentsRef;
      if (contentsElement) {
        var inputElements = contentsElement.querySelectorAll('input, textarea, select');
        if (inputElements.length === 1) {
          this._inputElement = inputElements[0];
          this._inputElement.addEventListener('focus', this._onFocus);
          this._inputElement.addEventListener('blur', this._onBlur);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._inputElement) {
        this._inputElement.removeEventListener('focus', this._onFocus);
        this._inputElement.removeEventListener('blur', this._onBlur);
        delete this._inputElement;
      }
    }
  }, {
    key: '_onFocus',
    value: function _onFocus() {
      this.setState({ focus: true });
    }
  }, {
    key: '_onBlur',
    value: function _onBlur() {
      this.setState({ focus: false });
    }
  }, {
    key: '_onClick',
    value: function _onClick() {
      if (this._inputElement) {
        this._inputElement.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          help = _props.help,
          hidden = _props.hidden,
          htmlFor = _props.htmlFor,
          label = _props.label,
          size = _props.size,
          strong = _props.strong,
          error = _props.error,
          props = _objectWithoutProperties(_props, ['children', 'className', 'help', 'hidden', 'htmlFor', 'label', 'size', 'strong', 'error']);

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--focus', this.state.focus), _defineProperty(_classnames, CLASS_ROOT + '--hidden', hidden), _defineProperty(_classnames, CLASS_ROOT + '--text', htmlFor), _defineProperty(_classnames, CLASS_ROOT + '--size-' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--strong', strong), _defineProperty(_classnames, CLASS_ROOT + '--error', error), _classnames), className);

      var fieldError = error ? _react2.default.createElement(
        'span',
        { className: CLASS_ROOT + "__error" },
        error
      ) : undefined;

      var fieldHelp = help !== null && help !== undefined ? _react2.default.createElement(
        'span',
        { className: CLASS_ROOT + "__help" },
        this.props.help
      ) : undefined;

      var labelNode = label ? _react2.default.createElement(
        'label',
        { className: CLASS_ROOT + "__label", htmlFor: htmlFor },
        label
      ) : undefined;

      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, props, { onClick: this._onClick }),
        fieldError,
        labelNode,
        fieldHelp,
        _react2.default.createElement(
          'span',
          { ref: function ref(_ref) {
              return _this2.contentsRef = _ref;
            },
            className: CLASS_ROOT + "__contents" },
          children
        )
      );
    }
  }]);

  return FormField;
}(_react.Component);

FormField.displayName = 'FormField';
exports.default = FormField;


FormField.propTypes = {
  error: _propTypes2.default.node,
  help: _propTypes2.default.node,
  hidden: _propTypes2.default.bool,
  htmlFor: _propTypes2.default.string,
  label: _propTypes2.default.node,
  size: _propTypes2.default.oneOf(['medium', 'large']),
  strong: _propTypes2.default.bool
};

FormField.defaultProps = {
  size: 'medium',
  strong: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames4 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames5 = _interopRequireDefault(_classnames4);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.HEADER;

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props, context) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props, context));

    _this._onResize = _this._onResize.bind(_this);
    _this._alignMirror = _this._alignMirror.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.fixed) {
        window.addEventListener('resize', this._onResize);
        this._onResize();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.fixed) {
        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.fixed) {
        clearTimeout(this._resizeTimer);
        window.removeEventListener('resize', this._onResize);
      }
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      // give just a little time for the DOM to stabilize
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(this._alignMirror, 10);
    }
  }, {
    key: '_alignMirror',
    value: function _alignMirror() {
      var contentElement = _reactDom2.default.findDOMNode(this.contentRef);
      var mirrorElement = this.mirrorRef;

      // constrain fixed content to the width of the mirror
      var mirrorRect = mirrorElement.getBoundingClientRect();
      contentElement.style.width = Math.floor(mirrorRect.width) + 'px';

      // align the mirror height with the content's height
      var contentRect = contentElement.getBoundingClientRect();
      mirrorElement.style.height = Math.floor(contentRect.height) + 'px';
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _classnames2,
          _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          colorIndex = _props.colorIndex,
          fixed = _props.fixed,
          float = _props.float,
          role = _props.role,
          size = _props.size,
          splash = _props.splash;

      var classes = (0, _classnames5.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size && typeof size === 'string'), _defineProperty(_classnames, CLASS_ROOT + '--float', float), _defineProperty(_classnames, CLASS_ROOT + '--splash', splash), _classnames), className);
      var containerClasses = (0, _classnames5.default)(CLASS_ROOT + '__container', (_classnames2 = {}, _defineProperty(_classnames2, CLASS_ROOT + '__container--fixed', fixed), _defineProperty(_classnames2, CLASS_ROOT + '__container--fill', fixed && !colorIndex), _defineProperty(_classnames2, CLASS_ROOT + '__container--float', float), _classnames2));
      var wrapperClasses = (0, _classnames5.default)(CLASS_ROOT + '__wrapper', _defineProperty({}, CLASS_ROOT + '__wrapper--' + size, size && typeof size === 'string'));
      var other = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
      var restProps = _Props2.default.omit(this.props, Object.keys(Header.propTypes));
      if (size && typeof size === 'string') {
        // don't transfer size to Box since it means something different
        delete other.size;
      }

      if (fixed) {
        return _react2.default.createElement(
          'div',
          { className: containerClasses },
          _react2.default.createElement('div', { ref: function ref(_ref) {
              return _this2.mirrorRef = _ref;
            },
            className: CLASS_ROOT + '__mirror' }),
          _react2.default.createElement(
            'div',
            { className: wrapperClasses },
            _react2.default.createElement(
              _Box2.default,
              { pad: 'none', flex: false },
              _react2.default.createElement(
                _Box2.default,
                _extends({ ref: function ref(_ref2) {
                    return _this2.contentRef = _ref2;
                  }
                }, other, restProps, { tag: 'header',
                  className: classes }),
                children
              )
            )
          )
        );
      } else {
        return (
          // ie11 does not work with align center and min-height
          // adding a wrapper flex div with column direction fixes the issue
          // https://github.com/philipwalton/flexbugs
          _react2.default.createElement(
            _Box2.default,
            { pad: 'none', flex: false },
            _react2.default.createElement(
              _Box2.default,
              _extends({}, other, restProps, { tag: 'header', role: role,
                className: classes,
                containerClassName: containerClasses }),
              children
            )
          )
        );
      }
    }
  }]);

  return Header;
}(_react.Component);

Header.displayName = 'Header';
exports.default = Header;


Header.propTypes = _extends({
  fixed: _propTypes2.default.bool,
  float: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  splash: _propTypes2.default.bool
}, _Box2.default.propTypes);

Header.defaultProps = {
  pad: { horizontal: 'none', vertical: 'none', between: 'small' },
  direction: 'row',
  align: 'center',
  responsive: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Heading.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.HEADING;

var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          margin = _props.margin,
          size = _props.size,
          strong = _props.strong,
          Tag = _props.tag,
          truncate = _props.truncate,
          uppercase = _props.uppercase,
          props = _objectWithoutProperties(_props, ['align', 'children', 'className', 'margin', 'size', 'strong', 'tag', 'truncate', 'uppercase']);

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--strong', strong), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, CLASS_ROOT + '--margin-' + margin, margin), _defineProperty(_classnames, CLASS_ROOT + '--truncate', truncate), _defineProperty(_classnames, CLASS_ROOT + '--uppercase', uppercase), _classnames), className);

      return _react2.default.createElement(
        Tag,
        _extends({}, props, { className: classes }),
        children
      );
    }
  }]);

  return Heading;
}(_react.Component);

Heading.displayName = 'Heading';
exports.default = Heading;


Heading.propTypes = {
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  margin: _propTypes2.default.oneOf(['none', 'small', 'medium', 'large']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  strong: _propTypes2.default.bool,
  tag: _propTypes2.default.string,
  truncate: _propTypes2.default.bool,
  uppercase: _propTypes2.default.bool
};

Heading.defaultProps = {
  tag: 'h1'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Headline.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.HEADLINE;

var Headline = function (_Component) {
  _inherits(Headline, _Component);

  function Headline() {
    _classCallCheck(this, Headline);

    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
  }

  _createClass(Headline, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          margin = _props.margin,
          size = _props.size,
          strong = _props.strong,
          props = _objectWithoutProperties(_props, ['align', 'children', 'className', 'margin', 'size', 'strong']);

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, CLASS_ROOT + '--margin-' + margin, margin), _defineProperty(_classnames, CLASS_ROOT + '--strong', strong), _classnames), className);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: classes }),
        children
      );
    }
  }]);

  return Headline;
}(_react.Component);

Headline.displayName = 'Headline';
exports.default = Headline;


Headline.propTypes = {
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  margin: _propTypes2.default.oneOf(['none', 'small', 'medium', 'large']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large', 'xlarge']),
  strong: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Image.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames3 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames4 = _interopRequireDefault(_classnames3);

var _Label = __webpack_require__("./node_modules/grommet/components/Label.js");

var _Label2 = _interopRequireDefault(_Label);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.IMAGE;

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          align = _props.align,
          caption = _props.caption,
          className = _props.className,
          full = _props.full,
          mask = _props.mask,
          size = _props.size,
          fit = _props.fit,
          props = _objectWithoutProperties(_props, ['align', 'caption', 'className', 'full', 'mask', 'size', 'fit']);

      var classes = (0, _classnames4.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--' + fit, fit), _defineProperty(_classnames, CLASS_ROOT + '--full', fit ? true : typeof full === 'boolean' && full), _defineProperty(_classnames, CLASS_ROOT + '--full-' + full, typeof full === 'string'), _defineProperty(_classnames, CLASS_ROOT + '--mask', mask), _defineProperty(_classnames, CLASS_ROOT + '--align-top', align && align.top), _defineProperty(_classnames, CLASS_ROOT + '--align-bottom', align && align.bottom), _defineProperty(_classnames, CLASS_ROOT + '--align-left', align && align.left), _defineProperty(_classnames, CLASS_ROOT + '--align-right', align && align.right), _classnames), className);

      var captionText = typeof caption === 'string' ? caption : props.alt;
      var imgNode = _react2.default.createElement('img', _extends({}, props, { className: classes }));

      var labelRoot = CLASS_ROOT + '__caption';
      var labelClasses = (0, _classnames4.default)(labelRoot, _defineProperty({}, labelRoot + '--' + size, size));
      return caption && captionText ? _react2.default.createElement(
        'span',
        { className: CLASS_ROOT + '__container' },
        imgNode,
        _react2.default.createElement(
          _Label2.default,
          { className: labelClasses },
          captionText
        )
      ) : imgNode;
    }
  }]);

  return Image;
}(_react.Component);

Image.displayName = 'Image';
exports.default = Image;


Image.propTypes = {
  align: _propTypes2.default.shape({
    bottom: _propTypes2.default.boolean,
    left: _propTypes2.default.boolean,
    right: _propTypes2.default.boolean,
    top: _propTypes2.default.boolean
  }),
  alt: _propTypes2.default.string,
  caption: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  fit: _propTypes2.default.oneOf(['contain', 'cover']),
  full: _propTypes2.default.oneOf([true, 'horizontal', 'vertical', false]),
  mask: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large', 'thumb']),
  src: _propTypes2.default.string,
  title: _propTypes2.default.string
};

Image.defaultProps = {
  size: 'medium'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Label.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Announcer = __webpack_require__("./node_modules/grommet/utils/Announcer.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.LABEL;

var Label = function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments));
  }

  _createClass(Label, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.announce) {
        (0, _Announcer.announce)(this.labelRef.textContent);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props = this.props,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          labelFor = _props.labelFor,
          margin = _props.margin,
          size = _props.size,
          truncate = _props.truncate,
          uppercase = _props.uppercase,
          props = _objectWithoutProperties(_props, ['align', 'children', 'className', 'labelFor', 'margin', 'size', 'truncate', 'uppercase']);

      delete props.announce;
      var labelMargin = margin ? margin : 'small' === size ? 'none' : 'medium';
      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--truncate', truncate), _defineProperty(_classnames, CLASS_ROOT + '--uppercase', uppercase), _defineProperty(_classnames, CLASS_ROOT + '--margin-' + labelMargin, labelMargin), _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _classnames), className);

      return _react2.default.createElement(
        'label',
        _extends({ ref: function ref(_ref) {
            return _this2.labelRef = _ref;
          } }, props, {
          className: classes, htmlFor: labelFor }),
        children
      );
    }
  }]);

  return Label;
}(_react.Component);

Label.displayName = 'Label';
exports.default = Label;


Label.propTypes = {
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  announce: _propTypes2.default.bool,
  labelFor: _propTypes2.default.string,
  margin: _propTypes2.default.oneOf(['none', 'small', 'medium', 'large']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  truncate: _propTypes2.default.bool,
  uppercase: _propTypes2.default.bool
};

Label.defaultProps = {
  size: 'medium'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Layer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _Button = __webpack_require__("./node_modules/grommet/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Close = __webpack_require__("./node_modules/grommet/components/icons/base/Close.js");

var _Close2 = _interopRequireDefault(_Close);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _DOM = __webpack_require__("./node_modules/grommet/utils/DOM.js");

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _KeyboardAccelerators = __webpack_require__("./node_modules/grommet/utils/KeyboardAccelerators.js");

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.LAYER;
var APP = _CSSClassnames2.default.APP;

var LayerContents = function (_Component) {
  _inherits(LayerContents, _Component);

  function LayerContents(props, context) {
    _classCallCheck(this, LayerContents);

    var _this = _possibleConstructorReturn(this, (LayerContents.__proto__ || Object.getPrototypeOf(LayerContents)).call(this, props, context));

    _this._onClickOverlay = _this._onClickOverlay.bind(_this);
    _this._processTab = _this._processTab.bind(_this);

    _this.state = {
      dropActive: false
    };
    return _this;
  }

  _createClass(LayerContents, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        history: this.props.history,
        intl: this.props.intl,
        onDropChange: function onDropChange(active) {
          _this2.setState({ dropActive: active });
        },
        router: this.props.router,
        store: this.props.store
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          hidden = _props.hidden,
          onClose = _props.onClose,
          overlayClose = _props.overlayClose;


      if (!hidden) {
        this.anchorStepRef.focus();
        this.anchorStepRef.scrollIntoView();
      }

      this._keyboardHandlers = {
        tab: this._processTab
      };
      if (onClose) {
        this._keyboardHandlers.esc = onClose;
      }
      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);

      if (onClose && overlayClose) {
        var layerParent = this.containerRef.parentNode;
        layerParent.addEventListener('click', this._onClickOverlay);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var hidden = this.props.hidden;

      if (hidden) {
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
      };
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _props2 = this.props,
          onClose = _props2.onClose,
          overlayClose = _props2.overlayClose;

      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);

      if (onClose && overlayClose) {
        var layerParent = this.containerRef.parentNode;
        layerParent.removeEventListener('click', this._onClickOverlay);
      }
    }
  }, {
    key: '_processTab',
    value: function _processTab(event) {
      var hidden = this.props.hidden;

      if (hidden) {
        return;
      }
      var items = this.containerRef.getElementsByTagName('*');
      items = (0, _DOM.filterByFocusable)(items);

      if (!items || items.length === 0) {
        event.preventDefault();
      } else {
        if (event.shiftKey) {
          if (event.target === items[0]) {
            items[items.length - 1].focus();
            event.preventDefault();
          }
        } else if (event.target === items[items.length - 1]) {
          items[0].focus();
          event.preventDefault();
        }
      }
    }
  }, {
    key: '_onClickOverlay',
    value: function _onClickOverlay(event) {
      var dropActive = this.state.dropActive;

      if (!dropActive) {
        var onClose = this.props.onClose;

        var layerContents = this.containerRef;

        if (layerContents && !layerContents.contains(event.target)) {
          onClose();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          a11yTitle = _props3.a11yTitle,
          children = _props3.children,
          closer = _props3.closer,
          onClose = _props3.onClose;
      var intl = this.context.intl;


      var closerNode = void 0;
      if ((typeof closer === 'undefined' ? 'undefined' : _typeof(closer)) === 'object') {
        closerNode = closer;
      } else if (onClose && closer) {
        var closeLabel = _Intl2.default.getMessage(intl, 'Close');
        var layerLabel = _Intl2.default.getMessage(intl, 'Layer');
        var closeIconTitle = closeLabel + ' ' + (a11yTitle || '') + ' ' + layerLabel;

        closerNode = _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + '__closer' },
          _react2.default.createElement(_Button2.default, { plain: true, icon: _react2.default.createElement(_Close2.default, {
              a11yTitle: closeIconTitle }),
            onClick: onClose })
        );
      }

      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref2) {
            return _this3.containerRef = _ref2;
          },
          className: CLASS_ROOT + '__container' },
        _react2.default.createElement('a', { tabIndex: '-1', 'aria-hidden': 'true', style: { outline: 'none' },
          ref: function ref(_ref) {
            return _this3.anchorStepRef = _ref;
          } }),
        closerNode,
        children
      );
    }
  }]);

  return LayerContents;
}(_react.Component);

LayerContents.displayName = 'LayerContents';


LayerContents.propTypes = {
  a11yTitle: _propTypes2.default.string,
  closer: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.bool]),
  history: _propTypes2.default.object,
  intl: _propTypes2.default.object,
  onClose: _propTypes2.default.func,
  overlayClose: _propTypes2.default.bool,
  router: _propTypes2.default.any,
  store: _propTypes2.default.any
};

// Because Layer creates a new DOM render context, the context
// is not transfered. For now, we hard code these specific ones.
// TODO: Either figure out how to introspect the context and transfer
// whatever we find or have callers explicitly indicate which parts
// of the context to transfer somehow.
LayerContents.childContextTypes = {
  history: _propTypes2.default.object,
  intl: _propTypes2.default.object,
  onDropChange: _propTypes2.default.func,
  router: _propTypes2.default.any,
  store: _propTypes2.default.object
};

var Layer = function (_Component2) {
  _inherits(Layer, _Component2);

  function Layer() {
    _classCallCheck(this, Layer);

    return _possibleConstructorReturn(this, (Layer.__proto__ || Object.getPrototypeOf(Layer)).apply(this, arguments));
  }

  _createClass(Layer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._originalFocusedElement = document.activeElement;
      this._originalScrollPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset
      };
      this._addLayer();
      this._renderLayer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderLayer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this5 = this;

      var hidden = this.props.hidden;

      if (this._originalFocusedElement && !hidden) {
        if (this._originalFocusedElement.focus) {
          // wait for the fixed positioning to come back to normal
          // see layer styling for reference
          setTimeout(function () {
            _this5._originalFocusedElement.focus();
            window.scrollTo(_this5._originalScrollPosition.left, _this5._originalScrollPosition.top);
          }, 0);
        } else if (this._originalFocusedElement.parentNode && this._originalFocusedElement.parentNode.focus) {
          // required for IE11 and Edge
          this._originalFocusedElement.parentNode.focus();
          window.scrollTo(this._originalScrollPosition.left, this._originalScrollPosition.top);
        }
      }

      this._removeLayer();
    }
  }, {
    key: '_classesFromProps',
    value: function _classesFromProps() {
      var _classnames;

      var _props4 = this.props,
          align = _props4.align,
          className = _props4.className,
          closer = _props4.closer,
          flush = _props4.flush,
          hidden = _props4.hidden,
          peek = _props4.peek;


      return (0, _classnames3.default)('grommet', CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--align-' + this.props.align, align), _defineProperty(_classnames, CLASS_ROOT + '--closeable', closer), _defineProperty(_classnames, CLASS_ROOT + '--flush', flush), _defineProperty(_classnames, CLASS_ROOT + '--hidden', hidden), _defineProperty(_classnames, CLASS_ROOT + '--peek', peek), _classnames), className);
    }
  }, {
    key: '_addLayer',
    value: function _addLayer() {
      var id = this.props.id;


      var element = document.createElement('div');
      if (id) {
        element.id = id;
      }
      element.className = this._classesFromProps();
      // insert before .app, if possible.
      var appElements = document.querySelectorAll('.' + APP);
      var beforeElement;
      if (appElements.length > 0) {
        beforeElement = appElements[0];
      } else {
        beforeElement = document.body.firstChild;
      }
      if (beforeElement) {
        this._element = beforeElement.parentNode.insertBefore(element, beforeElement);
      }
    }
  }, {
    key: '_handleAriaHidden',
    value: function _handleAriaHidden(hideOverlay) {
      var _this6 = this;

      setTimeout(function () {
        var ariaHidden = hideOverlay || false;
        var grommetApps = document.querySelectorAll('.' + APP);
        var visibleLayers = document.querySelectorAll('.' + CLASS_ROOT + ':not(.' + CLASS_ROOT + '--hidden)');

        if (grommetApps) {
          Array.prototype.slice.call(grommetApps).forEach(function (grommetApp) {
            if (ariaHidden && visibleLayers.length === 0) {
              // make sure to only show grommet apps if there is no other layer
              grommetApp.setAttribute('aria-hidden', false);
              grommetApp.classList.remove(APP + '--hidden');
              // scroll body content to the original position
              grommetApp.style.top = '-' + _this6._originalScrollPosition.top + 'px';
              grommetApp.style.left = '-' + _this6._originalScrollPosition.left + 'px';
            } else {
              grommetApp.setAttribute('aria-hidden', true);
              grommetApp.classList.add(APP + '--hidden');
              // this must be null to work
              grommetApp.style.top = null;
              grommetApp.style.left = null;
            }
          }, _this6);
        }
      }, 0);
    }
  }, {
    key: '_renderLayer',
    value: function _renderLayer() {
      var _this7 = this;

      if (this._element) {
        this._element.className = this._classesFromProps();
        var contents = _react2.default.createElement(LayerContents, _extends({}, this.props, {
          history: this.context.history,
          intl: this.context.intl,
          router: this.context.router,
          store: this.context.store }));
        _reactDom2.default.render(contents, this._element, function () {
          var hidden = _this7.props.hidden;

          if (hidden) {
            _this7._handleAriaHidden(true);
          } else {
            _this7._handleAriaHidden(false);
          }
        });
      }
    }
  }, {
    key: '_removeLayer',
    value: function _removeLayer() {
      if (this._element) {
        this._element.removeEventListener('animationend', this._onAnimationEnd);

        _reactDom2.default.unmountComponentAtNode(this._element);
        this._element.parentNode.removeChild(this._element);
        this._element = undefined;

        // make sure to handle aria attributes after the layer is removed
        this._handleAriaHidden(true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('span', { style: { display: 'none' } });
    }
  }]);

  return Layer;
}(_react.Component);

Layer.displayName = 'Layer';
exports.default = Layer;


Layer.propTypes = {
  align: _propTypes2.default.oneOf(['center', 'top', 'bottom', 'left', 'right']),
  closer: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.bool]),
  flush: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  overlayClose: _propTypes2.default.bool,
  peek: _propTypes2.default.bool,
  onClose: _propTypes2.default.func
};

Layer.contextTypes = {
  router: _propTypes2.default.any,
  history: _propTypes2.default.object,
  intl: _propTypes2.default.object,
  store: _propTypes2.default.object
};

Layer.defaultProps = {
  align: 'center'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _classnames3 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames4 = _interopRequireDefault(_classnames3);

var _KeyboardAccelerators = __webpack_require__("./node_modules/grommet/utils/KeyboardAccelerators.js");

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

var _DOM = __webpack_require__("./node_modules/grommet/utils/DOM.js");

var _Drop = __webpack_require__("./node_modules/grommet/utils/Drop.js");

var _Drop2 = _interopRequireDefault(_Drop);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

var _Responsive = __webpack_require__("./node_modules/grommet/utils/Responsive.js");

var _Responsive2 = _interopRequireDefault(_Responsive);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _Button = __webpack_require__("./node_modules/grommet/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Down = __webpack_require__("./node_modules/grommet/components/icons/base/Down.js");

var _Down2 = _interopRequireDefault(_Down);

var _More = __webpack_require__("./node_modules/grommet/components/icons/base/More.js");

var _More2 = _interopRequireDefault(_More);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.MENU;

function isFunction(obj) {
  return obj && obj.constructor && obj.call && obj.apply;
}

// We have a separate module for the drop component
// so we can transfer the router context.

var MenuDrop = function (_Component) {
  _inherits(MenuDrop, _Component);

  function MenuDrop(props, context) {
    _classCallCheck(this, MenuDrop);

    var _this = _possibleConstructorReturn(this, (MenuDrop.__proto__ || Object.getPrototypeOf(MenuDrop)).call(this, props, context));

    _this._onUpKeyPress = _this._onUpKeyPress.bind(_this);
    _this._onDownKeyPress = _this._onDownKeyPress.bind(_this);
    _this._processTab = _this._processTab.bind(_this);
    return _this;
  }

  _createClass(MenuDrop, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        intl: this.props.intl,
        history: this.props.history,
        router: this.props.router,
        store: this.props.store
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._originalFocusedElement = document.activeElement;
      this._keyboardHandlers = {
        tab: this._processTab,
        up: this._onUpKeyPress,
        left: this._onUpKeyPress,
        down: this._onDownKeyPress,
        right: this._onDownKeyPress
      };
      _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._originalFocusedElement.focus) {
        this._originalFocusedElement.focus();
      } else if (this._originalFocusedElement.parentNode && this._originalFocusedElement.parentNode.focus) {
        // required for IE11 and Edge
        this._originalFocusedElement.parentNode.focus();
      }
      _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
    }
  }, {
    key: '_processTab',
    value: function _processTab(event) {
      var container = (0, _reactDom.findDOMNode)(this.menuDropRef);
      var items = container.getElementsByTagName('*');
      items = (0, _DOM.filterByFocusable)(items);

      if (!items || items.length === 0) {
        event.preventDefault();
      } else {
        if (event.shiftKey) {
          if (event.target === items[0]) {
            items[items.length - 1].focus();
            event.preventDefault();
          }
        } else if (event.target === items[items.length - 1]) {
          items[0].focus();
          event.preventDefault();
        }
      }
    }
  }, {
    key: '_onUpKeyPress',
    value: function _onUpKeyPress(event) {
      event.preventDefault();
      var container = (0, _reactDom.findDOMNode)(this.navContainerRef);
      var menuItems = container.childNodes;
      if (!this.activeMenuItem) {
        var lastMenuItem = menuItems[menuItems.length - 1];
        this.activeMenuItem = lastMenuItem;
      } else if (this.activeMenuItem.previousSibling) {
        this.activeMenuItem = this.activeMenuItem.previousSibling;
      }

      var classes = this.activeMenuItem.className.split(/\s+/);
      var tagName = this.activeMenuItem.tagName.toLowerCase();
      // want to skip items of the menu that are not focusable.
      if (tagName !== 'button' && tagName !== 'a' && classes.indexOf('check-box') === -1) {
        if (this.activeMenuItem === menuItems[0]) {
          return true;
        } else {
          // If this item is not focusable, check the next item.
          return this._onUpKeyPress(event);
        }
      }

      this.activeMenuItem.focus();
      // Stops KeyboardAccelerators from calling the other listeners.
      // Works limilar to event.stopPropagation().
      return true;
    }
  }, {
    key: '_onDownKeyPress',
    value: function _onDownKeyPress(event) {
      event.preventDefault();
      var container = (0, _reactDom.findDOMNode)(this.navContainerRef);
      var menuItems = container.childNodes;
      if (!this.activeMenuItem) {
        this.activeMenuItem = menuItems[0];
      } else if (this.activeMenuItem.nextSibling) {
        this.activeMenuItem = this.activeMenuItem.nextSibling;
      }

      var classes = this.activeMenuItem.className.split(/\s+/);
      var tagName = this.activeMenuItem.tagName.toLowerCase();
      // want to skip items of the menu that are not focusable.
      if (tagName !== 'button' && tagName !== 'a' && classes.indexOf('check-box') === -1) {
        if (this.activeMenuItem === menuItems[menuItems.length - 1]) {
          return true;
        } else {
          // If this item is not focusable, check the next item.
          return this._onDownKeyPress(event);
        }
      }

      this.activeMenuItem.focus();
      // Stops KeyboardAccelerators from calling the other listeners.
      // Works limilar to event.stopPropagation().
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _classnames;

      var _props = this.props,
          dropAlign = _props.dropAlign,
          size = _props.size,
          children = _props.children,
          control = _props.control,
          colorIndex = _props.colorIndex,
          onClick = _props.onClick,
          props = _objectWithoutProperties(_props, ['dropAlign', 'size', 'children', 'control', 'colorIndex', 'onClick']);

      var restProps = _Props2.default.omit(props, [].concat(_toConsumableArray(Object.keys(MenuDrop.childContextTypes)), _toConsumableArray(Object.keys(MenuDrop.propTypes))));

      // Put nested Menus inline
      var menuDropChildren = _react2.default.Children.map(children, function (child) {
        var result = child;
        if (child && isFunction(child.type) && child.type.prototype._renderMenuDrop) {
          result = _react2.default.cloneElement(child, { inline: 'expanded', direction: 'column' });
        }
        return result;
      });

      var contents = [_react2.default.createElement(
        _Box2.default,
        _extends({}, restProps, { key: 'nav', ref: function ref(_ref) {
            return _this2.navContainerRef = _ref;
          },
          tag: 'nav', className: CLASS_ROOT + '__contents',
          primary: false }),
        menuDropChildren
      )];

      // do not show the control if menu doesn't overlap with it when expanded
      var showControl = ('top' === dropAlign.top || 'bottom' === dropAlign.bottom) && ('left' === dropAlign.left || 'right' === dropAlign.right);

      if (showControl) {
        contents.unshift(_react2.default.cloneElement(control, { key: 'control', fill: true }));
      }

      if (dropAlign.bottom) {
        contents.reverse();
      }

      var classes = (0, _classnames4.default)(CLASS_ROOT + '__drop', (_classnames = {}, _defineProperty(_classnames, this.props.className + '__drop', this.props.className), _defineProperty(_classnames, CLASS_ROOT + '__drop--align-right', dropAlign.right), _defineProperty(_classnames, CLASS_ROOT + '__drop--' + size, size), _classnames));

      return _react2.default.createElement(
        _Box2.default,
        { ref: function ref(_ref2) {
            return _this2.menuDropRef = _ref2;
          }, className: classes,
          colorIndex: colorIndex, onClick: onClick, focusable: false },
        contents
      );
    }
  }]);

  return MenuDrop;
}(_react.Component);

MenuDrop.displayName = 'MenuDrop';


MenuDrop.propTypes = _extends({
  control: _propTypes2.default.node,
  dropAlign: _Drop.dropAlignPropType,
  dropColorIndex: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  router: _propTypes2.default.any,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  store: _propTypes2.default.any
}, _Box2.default.propTypes);

MenuDrop.childContextTypes = {
  history: _propTypes2.default.any,
  intl: _propTypes2.default.any,
  router: _propTypes2.default.any,
  store: _propTypes2.default.any
};

var Menu = function (_Component2) {
  _inherits(Menu, _Component2);

  function Menu(props, context) {
    _classCallCheck(this, Menu);

    var _this3 = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));

    _this3._onOpen = _this3._onOpen.bind(_this3);
    _this3._onClose = _this3._onClose.bind(_this3);
    _this3._checkOnClose = _this3._checkOnClose.bind(_this3);
    _this3._onSink = _this3._onSink.bind(_this3);
    _this3._onResponsive = _this3._onResponsive.bind(_this3);
    _this3._onFocusControl = _this3._onFocusControl.bind(_this3);
    _this3._onBlurControl = _this3._onBlurControl.bind(_this3);

    var inline = void 0;
    if (props.hasOwnProperty('inline')) {
      inline = props.inline;
    } else {
      inline = !props.label && !props.icon;
    }
    var responsive = void 0;
    if (props.hasOwnProperty('responsive')) {
      responsive = props.responsive;
    } else {
      responsive = inline && 'row' === props.direction;
    }
    _this3.state = {
      // state may be 'collapsed', 'focused' or 'expanded' (active).
      state: 'collapsed',
      initialInline: inline,
      inline: inline,
      responsive: responsive
    };
    return _this3;
  }

  _createClass(Menu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.responsive) {
        this._responsive = _Responsive2.default.start(this._onResponsive);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.inline !== nextProps.inline || this.props.icon !== nextProps.icon) {
        this.setState({
          inline: nextProps.hasOwnProperty('inline') ? nextProps.inline : !nextProps.label && !nextProps.icon
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this4 = this;

      if (this.state.state !== prevState.state) {
        var activeKeyboardHandlers = {
          esc: this._onClose
        };
        var focusedKeyboardHandlers = {
          space: this._onOpen,
          down: this._onOpen,
          enter: this._onOpen
        };

        switch (this.state.state) {
          case 'collapsed':
            _KeyboardAccelerators2.default.stopListeningToKeyboard(this, focusedKeyboardHandlers);
            _KeyboardAccelerators2.default.stopListeningToKeyboard(this, activeKeyboardHandlers);
            document.removeEventListener('click', this._checkOnClose);
            document.removeEventListener('touchstart', this._checkOnClose);
            if (this._drop) {
              // When Menu is used with Anchor/paths the Drop removes too quickly
              // and react looks for a DOM element which is gone. Adding a
              // slight delay resolves this issue.
              setTimeout(function () {
                _this4._drop.remove();
                _this4._drop = undefined;
              }, 5);
            }
            break;
          case 'focused':
            _KeyboardAccelerators2.default.stopListeningToKeyboard(this, activeKeyboardHandlers);
            _KeyboardAccelerators2.default.startListeningToKeyboard(this, focusedKeyboardHandlers);
            break;
          case 'expanded':
            // only add the drop again if the instance is not defined
            // see https://github.com/grommet/grommet/issues/1431
            if (!this._drop) {
              _KeyboardAccelerators2.default.stopListeningToKeyboard(this, focusedKeyboardHandlers);
              _KeyboardAccelerators2.default.startListeningToKeyboard(this, activeKeyboardHandlers);
              document.addEventListener('click', this._checkOnClose);
              document.addEventListener('touchstart', this._checkOnClose);
              this._drop = new _Drop2.default((0, _reactDom.findDOMNode)(this._controlRef), this._renderMenuDrop(), {
                align: this.props.dropAlign,
                colorIndex: this.props.dropColorIndex,
                focusControl: true
              });
            }
            break;
        }
      } else if (this.state.state === 'expanded') {
        this._drop.render(this._renderMenuDrop());
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._checkOnClose);
      document.removeEventListener('touchstart', this._checkOnClose);
      _KeyboardAccelerators2.default.stopListeningToKeyboard(this);
      if (this._drop) {
        this._drop.remove();
      }
      if (this._responsive) {
        this._responsive.stop();
      }
    }
  }, {
    key: '_onOpen',
    value: function _onOpen() {
      if ((0, _reactDom.findDOMNode)(this._controlRef).contains(document.activeElement)) {
        this.setState({ state: 'expanded' });
      }
    }
  }, {
    key: '_onClose',
    value: function _onClose() {
      this.setState({ state: 'collapsed' });
    }
  }, {
    key: '_checkOnClose',
    value: function _checkOnClose(event) {
      var drop = (0, _reactDom.findDOMNode)(this._menuDrop);
      var control = (0, _reactDom.findDOMNode)(this._controlRef);
      if (drop && !drop.contains(event.target) && !control.contains(event.target)) {
        this._onClose();
      }
    }
  }, {
    key: '_onSink',
    value: function _onSink(event) {
      event.stopPropagation();
      // need to go native to prevent closing via document
      event.nativeEvent.stopImmediatePropagation();
    }
  }, {
    key: '_onResponsive',
    value: function _onResponsive(small) {
      // deactivate if we change resolutions
      var newState = this.state.state;
      if (this.state.state === 'expanded') {
        newState = 'focused';
      }
      if (small) {
        this.setState({ inline: false, active: newState, controlCollapsed: true });
      } else {
        this.setState({
          inline: this.state.initialInline,
          active: newState,
          state: 'collapsed',
          controlCollapsed: false
        });
      }
    }
  }, {
    key: '_onFocusControl',
    value: function _onFocusControl() {
      if (this.state.state !== 'focused') {
        this.setState({ state: 'focused' });
      }
    }
  }, {
    key: '_onBlurControl',
    value: function _onBlurControl() {
      if (this.state.state === 'focused') {
        this.setState({ state: 'collapsed' });
      }
    }
  }, {
    key: '_renderButtonProps',
    value: function _renderButtonProps() {
      var _props2 = this.props,
          icon = _props2.icon,
          label = _props2.label;
      // Use default icon if no label or icon is provided

      if (!label && !icon) {
        return { icon: _react2.default.createElement(_More2.default, null) };
      }

      // Return provided label(if any) and provided icon, or default
      // to DropCaretIcon
      return {
        label: label,
        icon: icon || _react2.default.createElement(_Down2.default, { a11yTitle: 'menu-down' })
      };
    }
  }, {
    key: '_renderMenuDrop',
    value: function _renderMenuDrop() {
      var _this5 = this;

      var closeLabel = _Intl2.default.getMessage(this.context.intl, 'Close');
      var menuLabel = _Intl2.default.getMessage(this.context.intl, 'Menu');
      var menuTitle = closeLabel + ' ' + (this.props.a11yTitle || this.props.label || '') + ' ' + ('' + menuLabel);

      var control = _react2.default.createElement(_Button2.default, _extends({ className: CLASS_ROOT + '__control', plain: true,
        a11yTitle: menuTitle, reverse: true
      }, this._renderButtonProps(), { onClick: this._onClose }));

      var boxProps = _Props2.default.pick(this.props, Object.keys(_Box2.default.propTypes));
      var onClick = this.props.closeOnClick ? this._onClose : this._onSink;

      return _react2.default.createElement(
        MenuDrop,
        _extends({}, boxProps, this.context, {
          className: this.props.className,
          dropAlign: this.props.dropAlign,
          size: this.props.size,
          onClick: onClick,
          control: control, ref: function ref(_ref3) {
            return _this5._menuDrop = _ref3;
          } }),
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames2,
          _this6 = this;

      var _props3 = this.props,
          a11yTitle = _props3.a11yTitle,
          children = _props3.children,
          className = _props3.className,
          direction = _props3.direction,
          fill = _props3.fill,
          label = _props3.label,
          primary = _props3.primary,
          size = _props3.size,
          pad = _props3.pad,
          props = _objectWithoutProperties(_props3, ['a11yTitle', 'children', 'className', 'direction', 'fill', 'label', 'primary', 'size', 'pad']);

      delete props.closeOnClick;
      delete props.dropColorIndex;
      delete props.dropAlign;
      delete props.icon;
      delete props.inline;
      var inline = this.state.inline;

      var classes = (0, _classnames4.default)(CLASS_ROOT, (_classnames2 = {}, _defineProperty(_classnames2, CLASS_ROOT + '--' + direction, direction), _defineProperty(_classnames2, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames2, CLASS_ROOT + '--primary', primary), _defineProperty(_classnames2, CLASS_ROOT + '--inline', inline), _defineProperty(_classnames2, CLASS_ROOT + '--controlled', !inline), _defineProperty(_classnames2, CLASS_ROOT + '__control', !inline), _defineProperty(_classnames2, CLASS_ROOT + '--labelled', !inline && label), _defineProperty(_classnames2, CLASS_ROOT + '--fill', fill), _classnames2), className);

      if (inline) {
        var menuLabel = void 0;
        if ('expanded' === inline) {
          menuLabel = _react2.default.createElement(
            'div',
            { className: CLASS_ROOT + '__label' },
            label
          );
        }

        return _react2.default.createElement(
          _Box2.default,
          _extends({}, props, { pad: pad, direction: direction, tag: 'nav',
            className: classes, primary: false }),
          menuLabel,
          children
        );
      } else {
        var openLabel = _Intl2.default.getMessage(this.context.intl, 'Open');
        var _menuLabel = _Intl2.default.getMessage(this.context.intl, 'Menu');
        var menuTitle = openLabel + ' ' + (a11yTitle || label || '') + ' ' + ('' + _menuLabel);

        return _react2.default.createElement(
          _Box2.default,
          _extends({ ref: function ref(_ref4) {
              return _this6._controlRef = _ref4;
            } }, props, { className: classes }),
          _react2.default.createElement(_Button2.default, _extends({ plain: true, reverse: true,
            a11yTitle: menuTitle }, this._renderButtonProps(), {
            onClick: function onClick() {
              return _this6.setState({
                state: _this6.state.state !== 'expanded' ? 'expanded' : 'collapsed'
              });
            },
            onFocus: this._onFocusControl, onBlur: this._onBlurControl }))
        );
      }
    }
  }]);

  return Menu;
}(_react.Component);

Menu.displayName = 'Menu';
exports.default = Menu;


Menu.propTypes = _extends({
  closeOnClick: _propTypes2.default.bool,
  dropAlign: _Drop.dropAlignPropType,
  dropColorIndex: _propTypes2.default.string,
  icon: _propTypes2.default.node,
  id: _propTypes2.default.string,
  inline: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.oneOf(['expand'])]),
  fill: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large'])
}, _Box2.default.propTypes);

Menu.contextTypes = {
  history: _propTypes2.default.any,
  intl: _propTypes2.default.any,
  router: _propTypes2.default.any,
  store: _propTypes2.default.any
};

Menu.defaultProps = {
  closeOnClick: true,
  direction: 'column',
  dropAlign: { top: 'top', left: 'left' },
  pad: 'none'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Paragraph.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.PARAGRAPH;

var Paragraph = function (_Component) {
  _inherits(Paragraph, _Component);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          align = _props.align,
          children = _props.children,
          className = _props.className,
          margin = _props.margin,
          size = _props.size,
          width = _props.width,
          props = _objectWithoutProperties(_props, ['align', 'children', 'className', 'margin', 'size', 'width']);

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--align-' + align, align), _defineProperty(_classnames, CLASS_ROOT + '--margin-' + margin, margin), _defineProperty(_classnames, CLASS_ROOT + '--width-' + width, width), _classnames), className);

      return _react2.default.createElement(
        'p',
        _extends({}, props, { className: classes }),
        children
      );
    }
  }]);

  return Paragraph;
}(_react.Component);

Paragraph.displayName = 'Paragraph';
exports.default = Paragraph;


Paragraph.propTypes = {
  align: _propTypes2.default.oneOf(['start', 'center', 'end']),
  margin: _propTypes2.default.oneOf(['none', 'small', 'medium', 'large']),
  size: _propTypes2.default.oneOf(['small', 'medium', 'large', 'xlarge']),
  width: _propTypes2.default.oneOf(['small', 'medium', 'large'])
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Section.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.SECTION;

var Section = function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          props = _objectWithoutProperties(_props, ['className']);

      var classes = (0, _classnames2.default)(CLASS_ROOT, className);

      return _react2.default.createElement(_Box2.default, _extends({}, props, { tag: 'section', className: classes }));
    }
  }]);

  return Section;
}(_react.Component);

Section.displayName = 'Section';
exports.default = Section;
;

Section.propTypes = _extends({}, _Box2.default.propTypes);

Section.defaultProps = {
  pad: { vertical: 'medium' }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/SkipLinkAnchor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.SKIP_LINK_ANCHOR;

var SkipLinkAnchor = function (_Component) {
  _inherits(SkipLinkAnchor, _Component);

  function SkipLinkAnchor() {
    _classCallCheck(this, SkipLinkAnchor);

    return _possibleConstructorReturn(this, (SkipLinkAnchor.__proto__ || Object.getPrototypeOf(SkipLinkAnchor)).apply(this, arguments));
  }

  _createClass(SkipLinkAnchor, [{
    key: 'render',
    value: function render() {
      var id = 'skip-link-' + this.props.label.toLowerCase().replace(/ /g, '_');

      return _react2.default.createElement(
        'a',
        { tabIndex: '-1', 'aria-hidden': 'true', id: id, className: CLASS_ROOT },
        this.props.label
      );
    }
  }]);

  return SkipLinkAnchor;
}(_react.Component);

SkipLinkAnchor.displayName = 'SkipLinkAnchor';
exports.default = SkipLinkAnchor;


SkipLinkAnchor.propTypes = {
  label: _propTypes2.default.node.isRequired
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/SocialShare.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Anchor = __webpack_require__("./node_modules/grommet/components/Anchor.js");

var _Anchor2 = _interopRequireDefault(_Anchor);

var _SocialTwitter = __webpack_require__("./node_modules/grommet/components/icons/base/SocialTwitter.js");

var _SocialTwitter2 = _interopRequireDefault(_SocialTwitter);

var _SocialFacebook = __webpack_require__("./node_modules/grommet/components/icons/base/SocialFacebook.js");

var _SocialFacebook2 = _interopRequireDefault(_SocialFacebook);

var _SocialGooglePlus = __webpack_require__("./node_modules/grommet/components/icons/base/SocialGooglePlus.js");

var _SocialGooglePlus2 = _interopRequireDefault(_SocialGooglePlus);

var _SocialLinkedin = __webpack_require__("./node_modules/grommet/components/icons/base/SocialLinkedin.js");

var _SocialLinkedin2 = _interopRequireDefault(_SocialLinkedin);

var _SocialMail = __webpack_require__("./node_modules/grommet/components/icons/base/SocialMail.js");

var _SocialMail2 = _interopRequireDefault(_SocialMail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var SocialShare = function (_Component) {
  _inherits(SocialShare, _Component);

  function SocialShare() {
    _classCallCheck(this, SocialShare);

    return _possibleConstructorReturn(this, (SocialShare.__proto__ || Object.getPrototypeOf(SocialShare)).apply(this, arguments));
  }

  _createClass(SocialShare, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex,
          type = _props.type,
          link = _props.link,
          text = _props.text,
          title = _props.title,
          a11yTitle = _props.a11yTitle,
          props = _objectWithoutProperties(_props, ['className', 'colorIndex', 'type', 'link', 'text', 'title', 'a11yTitle']);

      var socialIcon = undefined;
      var href = '';
      var target = '_blank';
      var calculatedA11yTitle = a11yTitle || 'Share on ' + (type.charAt(0).toUpperCase() + type.slice(1));

      var encodedLink = encodeURIComponent(link);
      var encodedTitle = encodeURIComponent(title);
      var encodedText = encodeURIComponent(text);

      if (type === 'twitter') {
        socialIcon = _react2.default.createElement(_SocialTwitter2.default, {
          a11yTitle: calculatedA11yTitle,
          className: className, colorIndex: colorIndex });
        href = 'https://twitter.com/intent/tweet?url=' + (encodedLink + '&text=' + encodedText);
      } else if (type === 'linkedin') {
        socialIcon = _react2.default.createElement(_SocialLinkedin2.default, {
          a11yTitle: calculatedA11yTitle,
          className: className, colorIndex: colorIndex });
        href = 'https://www.linkedin.com/shareArticle?mini=true&url=' + (encodedLink + '&title=' + encodedTitle + '&summary=' + encodedText);
      } else if (type === 'google') {
        socialIcon = _react2.default.createElement(_SocialGooglePlus2.default, {
          a11yTitle: calculatedA11yTitle,
          className: className, colorIndex: colorIndex });
        href = 'https://plus.google.com/share?url=' + encodedLink;
      } else if (type === 'facebook') {
        socialIcon = _react2.default.createElement(_SocialFacebook2.default, {
          a11yTitle: calculatedA11yTitle,
          className: className, colorIndex: colorIndex });
        href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedLink;
      } else if (type === 'email') {
        socialIcon = _react2.default.createElement(_SocialMail2.default, {
          a11yTitle: calculatedA11yTitle,
          className: className, colorIndex: colorIndex });
        href = 'mailto:?subject=' + (encodedTitle + '&body=' + encodedText + '%0D%0A' + encodedLink);
        target = '_self';
      }

      return _react2.default.createElement(_Anchor2.default, _extends({}, props, { href: href, icon: socialIcon, target: target }));
    }
  }]);

  return SocialShare;
}(_react.Component);

SocialShare.displayName = 'SocialShare';
exports.default = SocialShare;


SocialShare.propTypes = {
  a11yTitle: _propTypes2.default.string,
  className: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  link: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string,
  title: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['email', 'facebook', 'twitter', 'linkedin', 'google']).isRequired
};

SocialShare.defaultProps = {
  text: '',
  title: ''
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Title.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.TITLE;

var Title = function (_Component) {
  _inherits(Title, _Component);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          a11yTitle = _props.a11yTitle,
          children = _props.children,
          className = _props.className,
          responsive = _props.responsive,
          truncate = _props.truncate,
          props = _objectWithoutProperties(_props, ['a11yTitle', 'children', 'className', 'responsive', 'truncate']);

      var intl = this.context.intl;

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, CLASS_ROOT + '--truncate', truncate), _defineProperty(_classnames, CLASS_ROOT + '--interactive', props.onClick), _classnames), className);

      var boxTitle = a11yTitle || _Intl2.default.getMessage(intl, 'Title');

      var content = void 0;
      if (typeof children === 'string') {
        content = _react2.default.createElement(
          'span',
          null,
          children
        );
      } else if (Array.isArray(children)) {
        content = children.map(function (child, index) {
          if (child && typeof child === 'string') {
            return _react2.default.createElement(
              'span',
              { key: index },
              child
            );
          }
          return child;
        });
      } else {
        content = children;
      }

      return _react2.default.createElement(
        _Box2.default,
        _extends({}, props, { align: 'center', direction: 'row', responsive: false,
          className: classes, a11yTitle: boxTitle }),
        content
      );
    }
  }]);

  return Title;
}(_react.Component);

Title.displayName = 'Title';
exports.default = Title;


Title.propTypes = {
  a11yTitle: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  responsive: _propTypes2.default.bool,
  truncate: _propTypes2.default.bool
};

Title.contextTypes = {
  intl: _propTypes2.default.object
};

Title.defaultProps = {
  responsive: true,
  truncate: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/Video.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

var _Controls = __webpack_require__("./node_modules/grommet/components/video/Controls.js");

var _Controls2 = _interopRequireDefault(_Controls);

var _Overlay = __webpack_require__("./node_modules/grommet/components/video/Overlay.js");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Throttle = __webpack_require__("./node_modules/grommet/utils/Throttle.js");

var _Throttle2 = _interopRequireDefault(_Throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

var Video = function (_Component) {
  _inherits(Video, _Component);

  function Video(props, context) {
    _classCallCheck(this, Video);

    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props, context));

    _this._hasPlayed = false;
    _this._play = _this._play.bind(_this);
    _this._pause = _this._pause.bind(_this);
    _this._togglePlay = _this._togglePlay.bind(_this);
    _this._toggleMute = _this._toggleMute.bind(_this);
    _this._seek = _this._seek.bind(_this);
    _this._mute = _this._mute.bind(_this);
    _this._unmute = _this._unmute.bind(_this);
    _this._fullscreen = _this._fullscreen.bind(_this);
    _this._onInterationStart = _this._onInterationStart.bind(_this);
    _this._onInteractionOver = _this._onInteractionOver.bind(_this);
    _this._renderControls = _this._renderControls.bind(_this);

    _this.state = {
      mouseActive: false
    };
    return _this;
  }

  _createClass(Video, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this._update = (0, _Throttle2.default)(this._update.bind(this), 100, this);
      this._mediaEventProps = this._injectUpdateVideoEvents();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Dynamically modifying a source element and its attribute when
      // the element is already inserted in a video or audio element will
      // have no effect.
      // From HTML Specs:
      // https://html.spec.whatwg.org/multipage/embedded-content.html
      //   #the-source-element
      // Using forceUpdate to force redraw of video when receiving new <source>
      this.forceUpdate();
    }
  }, {
    key: '_injectUpdateVideoEvents',
    value: function _injectUpdateVideoEvents() {
      var _this2 = this;

      var videoEvents = ['onAbort', 'onCanPlay', 'onCanPlayThrough', 'onDurationChange', 'onEmptied', 'onEncrypted', 'onEnded', 'onError', 'onLoadedData', 'onLoadedMetadata', 'onLoadStart', 'onPause', 'onPlay', 'onPlaying', 'onProgress', 'onRateChange', 'onSeeked', 'onSeeking', 'onStalled', 'onSuspend', 'onTimeUpdate', 'onVolumeChange', 'onWaiting'];

      return videoEvents.reduce(function (previousValue, currentValue) {
        previousValue[currentValue] = function (e) {
          if (currentValue in _this2.props && typeof _this2.props[currentValue] === 'function') {
            _this2.props[currentValue](e);
          }
          _this2._update();
        };

        return previousValue;
      }, {});
    }
  }, {
    key: '_update',
    value: function _update() {
      // Set flag for Video first play
      if (!this._hasPlayed && !this._video.paused && !this._video.loading) {
        this._hasPlayed = true;
      }

      var interacting = this.state.interacting;
      if (this._video.ended) {
        interacting = false;
      };

      this.setState({
        duration: this._video.duration,
        currentTime: this._video.currentTime,
        buffered: this._video.buffered,
        paused: this._video.paused,
        muted: this._video.muted,
        volume: this._video.volume,
        ended: this._video.ended,
        readyState: this._video.readyState,
        interacting: interacting,
        // computed values
        hasPlayed: this._hasPlayed,
        playing: !this._video.paused && !this._video.loading,
        percentageBuffered: this._video.buffered.length && this._video.buffered.end(this._video.buffered.length - 1) / this._video.duration * 100,
        percentagePlayed: this._video.currentTime / this._video.duration * 100,
        loading: this._video.readyState < this._video.HAVE_ENOUGH_DATA
      });
    }
  }, {
    key: '_play',
    value: function _play() {
      this._video.play();
    }
  }, {
    key: '_pause',
    value: function _pause() {
      this._video.pause();
    }
  }, {
    key: '_togglePlay',
    value: function _togglePlay() {
      if (this.state.paused) {
        this._play();
      } else {
        this._pause();
      }
    }
  }, {
    key: '_seek',
    value: function _seek(time) {
      this._video.currentTime = typeof time !== 'undefined' ? time : this._video.currentTime;
    }
  }, {
    key: '_unmute',
    value: function _unmute() {
      this._video.muted = false;
    }
  }, {
    key: '_mute',
    value: function _mute() {
      this._video.muted = true;
    }
  }, {
    key: '_toggleMute',
    value: function _toggleMute() {
      if (!this.state.muted) {
        this._mute();
      } else {
        this._unmute();
      }
    }
  }, {
    key: '_fullscreen',
    value: function _fullscreen() {
      if (this._video.requestFullscreen) {
        this._video.requestFullscreen();
      } else if (this._video.msRequestFullscreen) {
        this._video.msRequestFullscreen();
      } else if (this._video.mozRequestFullScreen) {
        this._video.mozRequestFullScreen();
      } else if (this._video.webkitRequestFullscreen) {
        this._video.webkitRequestFullscreen();
      } else {
        console.warn('Your browser doesn\'t support fullscreen.');
      }
    }
  }, {
    key: '_onInterationStart',
    value: function _onInterationStart() {
      this.setState({ interacting: true });
    }
  }, {
    key: '_onInteractionOver',
    value: function _onInteractionOver() {
      var focus = this.state.focus;

      if (!focus) {
        this.setState({ interacting: false });
      }
    }
  }, {
    key: '_renderControls',
    value: function _renderControls() {
      var _this3 = this;

      var extendedProps = _extends({
        title: this.props.title,
        togglePlay: this._togglePlay,
        toggleMute: this._toggleMute,
        play: this._play,
        pause: this._pause,
        mute: this._mute,
        unmute: this._unmute,
        seek: this._seek,
        timeline: this.props.timeline,
        fullscreen: this._fullscreen,
        shareLink: this.props.shareLink,
        shareHeadline: this.props.shareHeadline,
        shareText: this.props.shareText,
        allowFullScreen: this.props.allowFullScreen,
        size: this.props.size
      }, this.state);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Overlay2.default, extendedProps),
        _react2.default.createElement(_Controls2.default, _extends({ ref: function ref(_ref) {
            return _this3._controlRef = _ref;
          }
        }, extendedProps))
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this4 = this;

      var _props = this.props,
          align = _props.align,
          autoPlay = _props.autoPlay,
          className = _props.className,
          colorIndex = _props.colorIndex,
          fit = _props.fit,
          full = _props.full,
          loop = _props.loop,
          muted = _props.muted,
          poster = _props.poster,
          showControls = _props.showControls,
          size = _props.size;
      var _state = this.state,
          ended = _state.ended,
          hasPlayed = _state.hasPlayed,
          interacting = _state.interacting,
          mouseActive = _state.mouseActive,
          playing = _state.playing;

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--' + fit, fit), _defineProperty(_classnames, CLASS_ROOT + '--full', fit || full), _defineProperty(_classnames, CLASS_ROOT + '--interacting', interacting), _defineProperty(_classnames, CLASS_ROOT + '--playing', playing), _defineProperty(_classnames, CLASS_ROOT + '--hasPlayed', hasPlayed), _defineProperty(_classnames, CLASS_ROOT + '--ended', ended), _defineProperty(_classnames, BACKGROUND_COLOR_INDEX + '--' + colorIndex, colorIndex), _defineProperty(_classnames, CLASS_ROOT + '--align-top', align && align.top), _defineProperty(_classnames, CLASS_ROOT + '--align-bottom', align && align.bottom), _defineProperty(_classnames, CLASS_ROOT + '--align-left', align && align.left), _defineProperty(_classnames, CLASS_ROOT + '--align-right', align && align.right), _classnames), className);
      var restProps = _Props2.default.omit(this.props, Object.keys(Video.propTypes));

      return _react2.default.createElement(
        'div',
        { className: classes, ref: function ref(_ref2) {
            return _this4._containerRef = _ref2;
          },
          onMouseEnter: function onMouseEnter() {
            if (!ended) {
              _this4._onInterationStart();
            }
          },
          onMouseMove: function onMouseMove(event) {
            // needed to avoid react synthatic event pooling
            event.persist();
            if (!ended || (0, _reactDom.findDOMNode)(_this4._controlRef).contains(event.target)) {
              _this4._onInterationStart();
            } else if (ended) {
              _this4._onInteractionOver();
            }
            clearTimeout(_this4._moveTimer);
            _this4._moveTimer = setTimeout(function () {
              var element = (0, _reactDom.findDOMNode)(_this4._controlRef);
              if (element && !element.contains(event.target)) {
                _this4._onInteractionOver();
              }
            }, 1000);
          },
          onMouseLeave: this._onInteractionOver,
          onMouseDown: function onMouseDown() {
            _this4.setState({ mouseActive: true });
          },
          onMouseUp: function onMouseUp() {
            _this4.setState({ mouseActive: false });
          },
          onFocus: function onFocus() {
            if (mouseActive === false) {
              _this4._onInterationStart();
              _this4.setState({ focus: true });
            }
          },
          onBlur: function onBlur() {
            _this4.setState({ focus: false }, function () {
              if (!_this4._containerRef.contains(document.activeElement)) {
                _this4._onInteractionOver();
              }
            });
          } },
        _react2.default.createElement(
          'video',
          _extends({ ref: function ref(el) {
              return _this4._video = el;
            } }, restProps, {
            poster: poster, autoPlay: autoPlay ? 'autoplay' : false,
            loop: loop ? 'loop' : false, muted: muted }, this._mediaEventProps),
          this.props.children
        ),
        showControls ? this._renderControls() : undefined
      );
    }
  }]);

  return Video;
}(_react.Component);

Video.displayName = 'Video';
exports.default = Video;


Video.propTypes = {
  align: _propTypes2.default.shape({
    bottom: _propTypes2.default.boolean,
    left: _propTypes2.default.boolean,
    right: _propTypes2.default.boolean,
    top: _propTypes2.default.boolean
  }),
  allowFullScreen: _propTypes2.default.bool,
  autoPlay: _propTypes2.default.bool,
  colorIndex: _propTypes2.default.string,
  fit: _propTypes2.default.oneOf(['contain', 'cover']),
  full: _propTypes2.default.oneOf([true, 'horizontal', 'vertical', false]),
  loop: _propTypes2.default.bool,
  muted: _propTypes2.default.bool,
  poster: _propTypes2.default.string,
  shareLink: _propTypes2.default.string,
  shareHeadline: _propTypes2.default.string,
  shareText: _propTypes2.default.string,
  showControls: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  timeline: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    time: _propTypes2.default.number
  })),
  title: _propTypes2.default.node
};

Video.defaultProps = {
  allowFullScreen: true,
  autoPlay: false,
  loop: false,
  muted: false,
  size: 'medium',
  showControls: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-actions', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'actions');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,17.5 C15.0375661,17.5 17.5,15.0375661 17.5,12 C17.5,8.96243388 15.0375661,6.5 12,6.5 C8.96243388,6.5 6.5,8.96243388 6.5,12 C6.5,15.0375661 8.96243388,17.5 12,17.5 Z M12,6.5 L12,1 M12,23 L12,17.5 M1,12 L6.5,12 M17.5,12 L23,12 M4.4375,4.4375 L8.5625,8.5625 M15.4375,15.4375 L19.5625,19.5625 M19.5625,4.4375 L15.4375,8.5625 M8.5625,15.4375 L4.4375,19.5625' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Actions';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/CirclePlay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-circle-play', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'circle-play');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M9.5,15.5 L15.5,12 L9.5,8.5 L9.5,15.5 Z M10.5,13.5 L12.5,12 L10.5,10.5 L10.5,13.5 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'CirclePlay';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Close.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-close', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'close');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,3 L21,21 M3,21 L21,3' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Close';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/DocumentText.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-document-text', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'document-text');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'DocumentText';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Down.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-down', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'down');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '7.086 3.174 17.086 13.174 7.086 23.174', transform: 'scale(1 -1) rotate(-89 -1.32 0)' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Down';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Expand.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-expand', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'expand');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M10,14 L2,22 M1,15 L1,23 L9,23 M22,2 L14,10 M15,1 L23,1 L23,9' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Expand';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/LinkNext.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-link-next', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'link-next');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,12 L22,12 M13,3 L22,12 L13,21' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'LinkNext';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/LinkPrevious.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-link-previous', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'link-previous');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,12 L22,12 M13,3 L22,12 L13,21', transform: 'matrix(-1 0 0 1 24 0)' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'LinkPrevious';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/More.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-more', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'more');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,13 L3,11 L5,11 L5,13 L3,13 Z M11,12.9995001 L11,11 L12.9995001,11 L12.9995001,12.9995001 L11,12.9995001 Z M19,12.9995001 L19,11 L20.9995001,11 L20.9995001,12.9995001 L19,12.9995001 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'More';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Pause.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-pause', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'pause');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M3,21 L9,21 L9,3 L3,3 L3,21 Z M15,21 L21,21 L21,3 L15,3 L15,21 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Pause';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Play.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-play', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'play');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '3 22 21 12 3 2' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Play';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Refresh.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-refresh', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'refresh');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Refresh';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/SocialFacebook.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-facebook', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-facebook');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#3B5998', fillRule: 'evenodd', d: 'M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,23.00025 C0,23.55225 0.44775,24 1.0005,24 L12.75,24 L12.75,15 L9.75,15 L9.75,11.25 L12.75,11.25 L12.75,8.25 C12.75,5.15025 14.71275,3.62475 17.478,3.62475 C18.8025,3.62475 19.941,3.72375 20.2725,3.76725 L20.2725,7.00725 L18.35475,7.008 C16.851,7.008 16.5,7.72275 16.5,8.77125 L16.5,11.25 L20.25,11.25 L19.5,15 L16.5,15 L16.56,24 L23.00025,24 C23.55225,24 24,23.55225 24,23.00025 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0', stroke: 'none' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialFacebook';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/SocialGooglePlus.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-google-plus', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-google-plus');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#4285F4', fillRule: 'evenodd', d: 'M0.0202537528,11.2032618 C0.0858884305,7.29693926 3.69605513,3.87603603 7.62298049,4.00635861 C9.5045944,3.91939087 11.2733582,4.73384249 12.7144674,5.87784249 C12.0993693,6.57306829 11.4624794,7.24274571 10.7820061,7.86906829 C9.04956189,6.67810055 6.58579693,6.33771345 4.85335275,7.71345539 C2.37505996,9.41848765 2.26220982,13.4442941 4.64607169,15.2796489 C6.96429889,17.3722941 11.3459973,16.3333264 11.9865191,13.1291973 C10.534514,13.1075199 9.07861756,13.1291973 7.62661245,13.0822296 C7.62298049,12.2205522 7.61934853,11.3588747 7.62298049,10.4974554 C10.0504259,10.4902296 12.4778712,10.4863586 14.9089486,10.5046812 C15.0544863,12.532036 14.7852026,14.6897135 13.5332146,16.3658425 C11.6370729,19.0195199 7.83052098,19.7942296 4.86061667,18.6574554 C1.88007591,17.527907 -0.230870232,14.3962941 0.0202537528,11.2032618 M19.6437253,8.32145539 L21.8091508,8.32145539 C21.8127827,9.04197152 21.8164147,9.76610055 21.8236786,10.4863586 C22.5479949,10.4938425 23.2759431,10.4938425 24,10.5010683 L24,12.6551328 C23.2759431,12.6623586 22.5516269,12.6659715 21.8236786,12.6731973 C21.8164147,13.3970683 21.8127827,14.1175844 21.8091508,14.8381005 L19.6400933,14.8381005 C19.6328294,14.1175844 19.6328294,13.3970683 19.6255655,12.6768102 C18.9012492,12.6695844 18.1735604,12.6623586 17.4492441,12.6551328 L17.4492441,10.5010683 C18.1735604,10.4938425 18.8976172,10.4902296 19.6255655,10.4863586 C19.6291974,9.76248765 19.6364613,9.04197152 19.6437253,8.32145539', stroke: 'none' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialGooglePlus';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/SocialLinkedin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-linkedin', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-linkedin');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#0077B5', fillRule: 'evenodd', d: 'M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z', stroke: 'none' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialLinkedin';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/SocialMail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-mail', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-mail');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fillRule: 'evenodd', d: 'M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialMail';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/SocialTwitter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-social-twitter', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'social-twitter');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: '#1DA1F2', fillRule: 'evenodd', d: 'M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086', stroke: 'none' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'SocialTwitter';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Up.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-up', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'up');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('polyline', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '7.086 1.174 17.086 11.174 7.086 21.174', transform: 'rotate(-89 12.086 11.174)' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Up';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/Volume.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-volume', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'volume');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M15,16 C17.209,16 19,14.209 19,12 C19,9.791 17.209,8 15,8 M15,20 C20,20 23,16.411 23,12 C23,7.589 19.411,4 15,4 M1,12 L1,8 L6,8 L12,3 L12,21 L6,16 L1,16 L1,12' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'Volume';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/icons/base/VolumeMute.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _Props = __webpack_require__("./node_modules/grommet/utils/Props.js");

var _Props2 = _interopRequireDefault(_Props);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CONTROL_ICON;
var COLOR_INDEX = _CSSClassnames2.default.COLOR_INDEX;

var Icon = function (_Component) {
  _inherits(Icon, _Component);

  function Icon() {
    _classCallCheck(this, Icon);

    return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  _createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          colorIndex = _props.colorIndex;
      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          size = _props2.size,
          responsive = _props2.responsive;
      var intl = this.context.intl;


      var classes = (0, _classnames3.default)(CLASS_ROOT, CLASS_ROOT + '-volume-mute', className, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--' + size, size), _defineProperty(_classnames, CLASS_ROOT + '--responsive', responsive), _defineProperty(_classnames, COLOR_INDEX + '-' + colorIndex, colorIndex), _classnames));

      a11yTitle = a11yTitle || _Intl2.default.getMessage(intl, 'volume-mute');

      var restProps = _Props2.default.omit(this.props, Object.keys(Icon.propTypes));
      return _react2.default.createElement(
        'svg',
        _extends({}, restProps, { version: '1.1', viewBox: '0 0 24 24', width: '24px', height: '24px', role: 'img', className: classes, 'aria-label': a11yTitle }),
        _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M1,8 L1,16 L6.09901951,16 L12,21 L12,3 L6,8 L1,8 Z M15,9 L21,15 M21,9 L15,15' })
      );
    }
  }]);

  return Icon;
}(_react.Component);

Icon.displayName = 'Icon';
exports.default = Icon;
;

Icon.contextTypes = {
  intl: _propTypes2.default.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'VolumeMute';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: _propTypes2.default.string,
  colorIndex: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: _propTypes2.default.bool
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/video/Controls.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _Button = __webpack_require__("./node_modules/grommet/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _Heading = __webpack_require__("./node_modules/grommet/components/Heading.js");

var _Heading2 = _interopRequireDefault(_Heading);

var _Volume = __webpack_require__("./node_modules/grommet/components/icons/base/Volume.js");

var _Volume2 = _interopRequireDefault(_Volume);

var _VolumeMute = __webpack_require__("./node_modules/grommet/components/icons/base/VolumeMute.js");

var _VolumeMute2 = _interopRequireDefault(_VolumeMute);

var _Time = __webpack_require__("./node_modules/grommet/components/video/Time.js");

var _Time2 = _interopRequireDefault(_Time);

var _FullscreenButton = __webpack_require__("./node_modules/grommet/components/video/FullscreenButton.js");

var _FullscreenButton2 = _interopRequireDefault(_FullscreenButton);

var _ProgressBar = __webpack_require__("./node_modules/grommet/components/video/ProgressBar.js");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _PlayButton = __webpack_require__("./node_modules/grommet/components/video/PlayButton.js");

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _FormatTime = __webpack_require__("./node_modules/grommet/utils/FormatTime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
var BUTTON_CLASS = CLASS_ROOT + '__button';

var Controls = function (_Component) {
  _inherits(Controls, _Component);

  function Controls() {
    _classCallCheck(this, Controls);

    var _this = _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).call(this));

    _this._onChapterTickHover = _this._onChapterTickHover.bind(_this);

    _this.state = {
      activeChapterIndex: undefined
    };
    return _this;
  }

  _createClass(Controls, [{
    key: '_onChapterTickHover',
    value: function _onChapterTickHover(index) {
      this.setState({ activeChapterIndex: index });
    }
  }, {
    key: '_renderTitle',
    value: function _renderTitle() {
      var title = void 0;
      if (this.props.title) {
        title = _react2.default.createElement(
          _Box2.default,
          { pad: { horizontal: 'small', vertical: 'none' } },
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h3', margin: 'none' },
            this.props.title
          )
        );
      }

      return title;
    }
  }, {
    key: '_renderMuteButton',
    value: function _renderMuteButton() {
      var _props = this.props,
          muted = _props.muted,
          toggleMute = _props.toggleMute;
      var intl = this.context.intl;

      var buttonMessage = _Intl2.default.getMessage(intl, 'Mute');
      var Icon = _VolumeMute2.default;
      if (muted) {
        Icon = _Volume2.default;
        buttonMessage = _Intl2.default.getMessage(intl, 'Unmute');
      }
      return _react2.default.createElement(
        _Button2.default,
        { plain: true, onClick: toggleMute, className: BUTTON_CLASS,
          a11yTitle: buttonMessage },
        _react2.default.createElement(Icon, { className: BUTTON_CLASS + '__icon', colorIndex: 'brand' })
      );
    }
  }, {
    key: '_renderChapterLabels',
    value: function _renderChapterLabels() {
      var _props2 = this.props,
          duration = _props2.duration,
          timeline = _props2.timeline,
          props = _objectWithoutProperties(_props2, ['duration', 'timeline']);

      var activeChapterIndex = this.state.activeChapterIndex;


      if (timeline) {
        var chapterLabels = timeline.map(function (chapter, index, chapters) {
          var _classnames;

          var percent = chapter.time / duration * 100;
          var classes = (0, _classnames3.default)(CLASS_ROOT + '__chapter-label', (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '__chapter-label-start', percent === 0), _defineProperty(_classnames, CLASS_ROOT + '__chapter-label-active', activeChapterIndex === index), _classnames));

          return _react2.default.createElement(
            'div',
            { className: classes, key: chapter.label,
              style: { left: percent + '%' } },
            _react2.default.createElement(
              'span',
              null,
              chapter.label
            ),
            _react2.default.createElement(
              'span',
              null,
              (0, _FormatTime.formatTime)(chapter.time)
            )
          );
        });

        return _react2.default.createElement(
          _Box2.default,
          _extends({}, props, { pad: 'none', className: CLASS_ROOT + '__chapter-labels',
            direction: 'row' }),
          chapterLabels
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          togglePlay = _props3.togglePlay,
          hasPlayed = _props3.hasPlayed,
          playing = _props3.playing,
          ended = _props3.ended,
          currentTime = _props3.currentTime,
          duration = _props3.duration,
          percentagePlayed = _props3.percentagePlayed,
          seek = _props3.seek,
          timeline = _props3.timeline,
          allowFullScreen = _props3.allowFullScreen,
          fullscreen = _props3.fullscreen;


      if (!hasPlayed) {
        return null;
      }

      var overlayContent = _react2.default.createElement(
        _Box2.default,
        { pad: 'none', className: CLASS_ROOT + '__controls',
          direction: 'column', justify: 'start' },
        _react2.default.createElement(_ProgressBar2.default, { progress: percentagePlayed,
          onChapterHover: this._onChapterTickHover,
          duration: duration, onChange: seek, timeline: timeline }),
        timeline ? this._renderChapterLabels() : undefined,
        _react2.default.createElement(
          _Box2.default,
          { pad: 'none', className: CLASS_ROOT + '__controls-primary',
            direction: 'row', justify: 'between' },
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row', align: 'center',
              pad: { horizontal: 'small', vertical: 'none' } },
            _react2.default.createElement(_PlayButton2.default, { playing: playing, ended: ended, iconSize: 'medium',
              togglePlay: togglePlay, primary: false }),
            this._renderTitle()
          ),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row', align: 'center',
              pad: { horizontal: 'small', vertical: 'none' } },
            _react2.default.createElement(_Time2.default, { currentTime: currentTime, duration: duration }),
            this._renderMuteButton(),
            allowFullScreen ? _react2.default.createElement(_FullscreenButton2.default, { onClick: fullscreen }) : undefined
          )
        )
      );

      return overlayContent;
    }
  }]);

  return Controls;
}(_react.Component);

Controls.displayName = 'Controls';
exports.default = Controls;


Controls.contextTypes = {
  intl: _propTypes2.default.object
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/video/FullscreenButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Button = __webpack_require__("./node_modules/grommet/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Expand = __webpack_require__("./node_modules/grommet/components/icons/base/Expand.js");

var _Expand2 = _interopRequireDefault(_Expand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
var BUTTON_CLASS = CLASS_ROOT + '__button';

var FullscreenButton = function (_Component) {
  _inherits(FullscreenButton, _Component);

  function FullscreenButton() {
    _classCallCheck(this, FullscreenButton);

    return _possibleConstructorReturn(this, (FullscreenButton.__proto__ || Object.getPrototypeOf(FullscreenButton)).apply(this, arguments));
  }

  _createClass(FullscreenButton, [{
    key: 'shouldComponentUpdate',


    // prevents unnecessarily updates/re-renders
    // only update component if the onClick prop changes
    value: function shouldComponentUpdate(nextProps) {
      return this.props.onClick !== nextProps.onClick;
    }
  }, {
    key: 'render',
    value: function render() {
      var a11yExpandButtonTitle = _Intl2.default.getMessage(this.context.intl, 'Toggle Fullscreen');

      return _react2.default.createElement(
        _Button2.default,
        { plain: true, className: BUTTON_CLASS, onClick: this.props.onClick,
          a11yTitle: a11yExpandButtonTitle },
        _react2.default.createElement(_Expand2.default, { className: BUTTON_CLASS + '__icon',
          colorIndex: 'brand' })
      );
    }
  }]);

  return FullscreenButton;
}(_react.Component);

FullscreenButton.displayName = 'FullscreenButton';
exports.default = FullscreenButton;


FullscreenButton.propTypes = {
  onClick: _propTypes2.default.func
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/video/Overlay.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _Heading = __webpack_require__("./node_modules/grommet/components/Heading.js");

var _Heading2 = _interopRequireDefault(_Heading);

var _Share = __webpack_require__("./node_modules/grommet/components/video/Share.js");

var _Share2 = _interopRequireDefault(_Share);

var _PlayButton = __webpack_require__("./node_modules/grommet/components/video/PlayButton.js");

var _PlayButton2 = _interopRequireDefault(_PlayButton);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay(props, context) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props, context));

    _this._onResponsive = _this._onResponsive.bind(_this);
    _this.state = {
      iconSize: props.size && (props.size === 'small' || props.size === 'medium') ? 'large' : 'xlarge'
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.size !== this.props.size) {
        this.setState({
          iconSize: newProps.size && (newProps.size === 'small' || newProps.size === 'medium') ? 'large' : 'xlarge'
        });
      }
    }
  }, {
    key: '_onResponsive',
    value: function _onResponsive(small) {
      if (small) {
        this.setState({ iconSize: 'medium' });
      } else {
        var iconSize = 'small' === this.props.size ? undefined : 'xlarge';
        this.setState({ iconSize: iconSize });
      }
    }
  }, {
    key: '_renderReplayMenu',
    value: function _renderReplayMenu() {
      var _props = this.props,
          ended = _props.ended,
          shareLink = _props.shareLink,
          shareHeadline = _props.shareHeadline,
          shareText = _props.shareText;


      var replayContent = void 0;
      if (ended) {
        replayContent = _react2.default.createElement(
          _Box2.default,
          { className: CLASS_ROOT + '__replay', align: 'center' },
          _react2.default.createElement(
            _Heading2.default,
            { tag: 'h3', strong: true, uppercase: true },
            'Replay'
          ),
          _react2.default.createElement(_Share2.default, { shareLink: shareLink, shareHeadline: shareHeadline,
            shareText: shareText })
        );
      }

      return replayContent;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          ended = _props2.ended,
          playing = _props2.playing,
          togglePlay = _props2.togglePlay,
          videoHeader = _props2.videoHeader;


      return _react2.default.createElement(
        _Box2.default,
        { pad: 'none', align: 'center', justify: 'center',
          className: CLASS_ROOT + '__overlay' },
        videoHeader,
        _react2.default.createElement(
          _Box2.default,
          { pad: 'none', align: 'center', justify: 'center' },
          _react2.default.createElement(_PlayButton2.default, { iconSize: this.state.iconSize,
            playing: playing,
            ended: ended,
            togglePlay: togglePlay })
        ),
        this._renderReplayMenu()
      );
    }
  }]);

  return Overlay;
}(_react.Component);

Overlay.displayName = 'Overlay';
exports.default = Overlay;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/video/PlayButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Intl = __webpack_require__("./node_modules/grommet/utils/Intl.js");

var _Intl2 = _interopRequireDefault(_Intl);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _Button = __webpack_require__("./node_modules/grommet/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _CirclePlay = __webpack_require__("./node_modules/grommet/components/icons/base/CirclePlay.js");

var _CirclePlay2 = _interopRequireDefault(_CirclePlay);

var _Play = __webpack_require__("./node_modules/grommet/components/icons/base/Play.js");

var _Play2 = _interopRequireDefault(_Play);

var _Pause = __webpack_require__("./node_modules/grommet/components/icons/base/Pause.js");

var _Pause2 = _interopRequireDefault(_Pause);

var _Refresh = __webpack_require__("./node_modules/grommet/components/icons/base/Refresh.js");

var _Refresh2 = _interopRequireDefault(_Refresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
var BUTTON_CLASS = CLASS_ROOT + '__button';

var PlayButton = function (_Component) {
  _inherits(PlayButton, _Component);

  function PlayButton() {
    _classCallCheck(this, PlayButton);

    return _possibleConstructorReturn(this, (PlayButton.__proto__ || Object.getPrototypeOf(PlayButton)).apply(this, arguments));
  }

  _createClass(PlayButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ended = _props.ended,
          iconSize = _props.iconSize,
          playing = _props.playing,
          primary = _props.primary,
          togglePlay = _props.togglePlay;
      var intl = this.context.intl;


      var PIcon = primary ? _CirclePlay2.default : _Play2.default;
      var Icon = playing ? _Pause2.default : ended ? _Refresh2.default : PIcon;
      var controlIcon = _react2.default.createElement(Icon, { className: BUTTON_CLASS + '__icon', size: iconSize,
        colorIndex: 'brand' });

      var a11yControlButtonMessage = playing ? 'Pause Video' : ended ? 'Restart Video' : 'Play Video';

      var a11yControlButtonTitle = _Intl2.default.getMessage(intl, a11yControlButtonMessage);

      return _react2.default.createElement(
        _Button2.default,
        { plain: true, className: BUTTON_CLASS, onClick: togglePlay,
          a11yTitle: a11yControlButtonTitle },
        controlIcon
      );
    }
  }]);

  return PlayButton;
}(_react.Component);

PlayButton.displayName = 'PlayButton';
exports.default = PlayButton;


PlayButton.propTypes = {
  iconSize: _propTypes2.default.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']),
  playing: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  ended: _propTypes2.default.bool,
  togglePlay: _propTypes2.default.func
};

PlayButton.defaultProps = {
  iconSize: 'xlarge',
  primary: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/video/ProgressBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;

var ProgressBar = function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this));

    _this._onProgressBarChange = _this._onProgressBarChange.bind(_this);
    return _this;
  }

  // prevents unnecessarily updates/re-renders


  _createClass(ProgressBar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.progress !== nextProps.progress;
    }
  }, {
    key: '_onProgressBarChange',
    value: function _onProgressBarChange(e) {
      this.props.onChange(e.target.value * this.props.duration / 100);
    }
  }, {
    key: '_onChapterClick',
    value: function _onChapterClick(time) {
      this.props.onChange(time);
    }
  }, {
    key: '_onMouseOver',
    value: function _onMouseOver(index) {
      this.props.onChapterHover(index);
    }
  }, {
    key: '_renderChapterMarkers',
    value: function _renderChapterMarkers() {
      var _this2 = this;

      var _props = this.props,
          duration = _props.duration,
          timeline = _props.timeline;


      if (timeline) {
        var chapters = timeline.map(function (chapter, index, chapters) {
          var percent = chapter.time / duration * 100;
          var tickClasses = (0, _classnames3.default)(CLASS_ROOT + '__chapter-marker-tick', _defineProperty({}, CLASS_ROOT + '__chapter-marker-tick-start', percent === 0));

          return _react2.default.createElement(
            'div',
            { className: CLASS_ROOT + '__chapter-marker', key: chapter.time,
              style: { width: percent + '%' } },
            _react2.default.createElement('div', { className: tickClasses,
              onMouseOver: _this2._onMouseOver.bind(_this2, index),
              onMouseOut: _this2.props.onChapterHover,
              onFocus: _this2._onMouseOver.bind(_this2, index),
              onBlur: _this2.props.onChapterHover,
              onClick: _this2._onChapterClick.bind(_this2, chapter.time) }),
            _react2.default.createElement('div', { className: CLASS_ROOT + '__chapter-marker-track' })
          );
        });

        return _react2.default.createElement(
          'div',
          { className: CLASS_ROOT + '__chapter-markers' },
          chapters
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          progress = _props2.progress,
          timeline = _props2.timeline;


      return _react2.default.createElement(
        _Box2.default,
        { pad: 'none', className: CLASS_ROOT + '__progress', direction: 'row' },
        _react2.default.createElement('div', { className: CLASS_ROOT + '__progress-bar-fill', style: {
            width: progress + '%'
          } }),
        timeline ? this._renderChapterMarkers() : undefined,
        _react2.default.createElement('input', { className: CLASS_ROOT + '__progress-bar-input',
          onChange: this._onProgressBarChange,
          type: 'range',
          min: '0',
          max: '100',
          value: progress || '',
          step: '0.1' })
      );
    }
  }]);

  return ProgressBar;
}(_react.Component);

ProgressBar.displayName = 'ProgressBar';
exports.default = ProgressBar;


ProgressBar.propTypes = {
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.number,
  progress: _propTypes2.default.number,
  onChapterHover: _propTypes2.default.func
};

ProgressBar.defaultProps = {
  duration: 0,
  progress: 0
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/video/Share.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _SocialShare = __webpack_require__("./node_modules/grommet/components/SocialShare.js");

var _SocialShare2 = _interopRequireDefault(_SocialShare);

var _Form = __webpack_require__("./node_modules/grommet/components/Form.js");

var _Form2 = _interopRequireDefault(_Form);

var _FormField = __webpack_require__("./node_modules/grommet/components/FormField.js");

var _FormField2 = _interopRequireDefault(_FormField);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;
var BUTTON_CLASS = CLASS_ROOT + '__button';

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this));

    _this._onClickShareLink = _this._onClickShareLink.bind(_this);
    return _this;
  }

  _createClass(Overlay, [{
    key: '_onClickShareLink',
    value: function _onClickShareLink() {
      (0, _reactDom.findDOMNode)(this.shareLinkRef).select();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          shareLink = _props.shareLink,
          shareHeadline = _props.shareHeadline,
          shareText = _props.shareText;

      // this has to be null to be a valid react children

      var shareContent = null;
      if (shareLink) {
        shareContent = _react2.default.createElement(
          _Box2.default,
          { align: 'center' },
          _react2.default.createElement(
            _Form2.default,
            { pad: { vertical: 'small' } },
            _react2.default.createElement(
              _FormField2.default,
              { strong: true },
              _react2.default.createElement('input', { ref: function ref(_ref) {
                  return _this2.shareLinkRef = _ref;
                },
                className: 'share-link', type: 'text', value: shareLink,
                onClick: this._onClickShareLink, readOnly: true })
            )
          ),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row', className: BUTTON_CLASS },
            _react2.default.createElement(_SocialShare2.default, { type: 'email', link: shareLink, colorIndex: 'brand',
              className: BUTTON_CLASS + '__icon',
              title: shareHeadline, text: shareText }),
            _react2.default.createElement(_SocialShare2.default, { type: 'twitter', colorIndex: 'brand',
              className: BUTTON_CLASS + '__icon',
              link: shareLink, text: shareHeadline }),
            _react2.default.createElement(_SocialShare2.default, { type: 'facebook', colorIndex: 'brand',
              className: BUTTON_CLASS + '__icon',
              link: shareLink }),
            _react2.default.createElement(_SocialShare2.default, { type: 'linkedin', colorIndex: 'brand',
              className: BUTTON_CLASS + '__icon',
              link: shareLink, title: shareHeadline, text: shareText })
          )
        );
      }

      return shareContent;
    }
  }]);

  return Overlay;
}(_react.Component);

Overlay.displayName = 'Overlay';
exports.default = Overlay;


Overlay.propTypes = {
  shareLink: _propTypes2.default.string,
  shareHeadline: _propTypes2.default.string,
  shareText: _propTypes2.default.string
};

Overlay.defaultProps = {
  shareHeadline: '',
  shareText: ''
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/components/video/Time.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Box = __webpack_require__("./node_modules/grommet/components/Box.js");

var _Box2 = _interopRequireDefault(_Box);

var _Heading = __webpack_require__("./node_modules/grommet/components/Heading.js");

var _Heading2 = _interopRequireDefault(_Heading);

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _FormatTime = __webpack_require__("./node_modules/grommet/utils/FormatTime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.VIDEO;

var Time = function (_Component) {
  _inherits(Time, _Component);

  function Time() {
    _classCallCheck(this, Time);

    return _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).apply(this, arguments));
  }

  _createClass(Time, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentTime = _props.currentTime,
          duration = _props.duration;


      return _react2.default.createElement(
        _Box2.default,
        { pad: { horizontal: 'small', vertical: 'none' } },
        _react2.default.createElement(
          _Heading2.default,
          { tag: 'h3', margin: 'none', className: CLASS_ROOT + '__time' },
          (0, _FormatTime.formatTime)(currentTime),
          ' / ',
          (0, _FormatTime.formatTime)(duration)
        )
      );
    }
  }]);

  return Time;
}(_react.Component);

Time.displayName = 'Time';
exports.default = Time;


Time.propTypes = {
  currentTime: _propTypes2.default.number,
  duration: _propTypes2.default.number
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/utils/Announcer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.announcePageLoaded = announcePageLoaded;
exports.announce = announce;

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS_ROOT = _CSSClassnames2.default.APP; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

function clearAnnouncer() {
  var announcer = document.querySelector('.' + CLASS_ROOT + '__announcer');
  if (announcer) {
    announcer.innerHTML = '';
  }
};

function announcePageLoaded(title) {
  announce(title + ' page was loaded');
}

function announce(message) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'assertive';

  var announcer = document.querySelector('.' + CLASS_ROOT + '__announcer');
  if (announcer) {
    announcer.setAttribute('aria-live', 'off');
    announcer.innerHTML = message;
    setTimeout(clearAnnouncer, 500);
    announcer.setAttribute('aria-live', mode);
  }
}

exports.default = { announce: announce, announcePageLoaded: announcePageLoaded };

/***/ }),

/***/ "./node_modules/grommet/utils/CSSClassnames.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var namespace = exports.namespace = 'grommetux-';

exports.default = {
  ACCORDION: namespace + 'accordion',
  ACCORDION_PANEL: namespace + 'accordion-panel',
  ANCHOR: namespace + 'anchor',
  ANIMATE: namespace + 'animate',
  APP: namespace + 'app',
  ARTICLE: namespace + 'article',
  ATTRIBUTE: namespace + 'attribute',
  BACKGROUND_COLOR_INDEX: namespace + 'background-color-index',
  BOX: namespace + 'box',
  BORDER_COLOR_INDEX: namespace + 'border-color-index',
  BRICK: namespace + 'brick',
  BUTTON: namespace + 'button',
  CALENDAR: namespace + 'calendar',
  CARD: namespace + 'card',
  CAROUSEL: namespace + 'carousel',
  CAROUSEL_CONTROLS: namespace + 'carousel-controls',
  CHART: namespace + 'chart',
  CHART_AXIS: namespace + 'chart-axis',
  CHART_BASE: namespace + 'chart-base',
  CHART_GRAPH: namespace + 'chart-graph',
  CHART_GRID: namespace + 'chart-grid',
  CHART_HOT_SPOTS: namespace + 'chart-hot-spots',
  CHART_LAYERS: namespace + 'chart-layers',
  CHART_MARKER: namespace + 'chart-marker',
  CHART_MARKER_LABEL: namespace + 'chart-marker-label',
  CHART_RANGE: namespace + 'chart-range',
  CHECK_BOX: namespace + 'check-box',
  COLLAPSIBLE: namespace + 'collapsible',
  COLOR_INDEX: namespace + 'color-index',
  COLUMNS: namespace + 'columns',
  CONTROL_ICON: namespace + 'control-icon',
  DATE_TIME: namespace + 'date-time',
  DATE_TIME_DROP: namespace + 'date-time-drop',
  DISTRIBUTION: namespace + 'distribution',
  DROP: namespace + 'drop',
  FOOTER: namespace + 'footer',
  FORM: namespace + 'form',
  FORM_FIELD: namespace + 'form-field',
  FORM_FIELDS: namespace + 'form-fields',
  HEADER: namespace + 'header',
  HEADING: namespace + 'heading',
  HEADLINE: namespace + 'headline',
  HERO: namespace + 'hero',
  IMAGE: namespace + 'image',
  IMAGE_FIELD: namespace + 'image-field',
  INPUT: namespace + 'input',
  LABEL: namespace + 'label',
  LAYER: namespace + 'layer',
  LEGEND: namespace + 'legend',
  LIST: namespace + 'list',
  LIST_ITEM: namespace + 'list-item',
  LOGIN: namespace + 'login',
  LOGIN_FORM: namespace + 'login-form',
  LOGO_ICON: namespace + 'logo-icon',
  MAP: namespace + 'map',
  MENU: namespace + 'menu',
  METER: namespace + 'meter',
  NAMESPACE: '' + namespace,
  NOTIFICATION: namespace + 'notification',
  NUMBER_INPUT: namespace + 'number-input',
  OBJECT: namespace + 'object',
  PARAGRAPH: namespace + 'paragraph',
  PASSWORD_INPUT: namespace + 'password-input',
  PULSE: namespace + 'pulse',
  QUOTE: namespace + 'quote',
  RADIO_BUTTON: namespace + 'radio-button',
  SEARCH: namespace + 'search',
  SEARCH_INPUT: namespace + 'search-input',
  SECTION: namespace + 'section',
  SELECT: namespace + 'select',
  SIDEBAR: namespace + 'sidebar',
  SKIP_LINK_ANCHOR: namespace + 'skip-link-anchor',
  SKIP_LINKS: namespace + 'skip-links',
  SPLIT: namespace + 'split',
  SPINNING: namespace + 'icon-spinning',
  STATUS_ICON: namespace + 'status-icon',
  SUN_BURST: namespace + 'sun-burst',
  TAB: namespace + 'tab',
  TABLE: namespace + 'table',
  TABLE_ROW: namespace + 'table-row',
  TABS: namespace + 'tabs',
  TAG: namespace + 'tag',
  TAGS: namespace + 'tags',
  TBD: namespace + 'tbd',
  TEXT_INPUT: namespace + 'text-input',
  TILE: namespace + 'tile',
  TILES: namespace + 'tiles',
  TIMESTAMP: namespace + 'timestamp',
  TIP: namespace + 'tip',
  TITLE: namespace + 'title',
  TOAST: namespace + 'toast',
  TOPOLOGY: namespace + 'topology',
  VALUE: namespace + 'value',
  VIDEO: namespace + 'video',
  WORLD_MAP: namespace + 'world-map'
};

/***/ }),

/***/ "./node_modules/grommet/utils/DOM.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.findScrollParents = findScrollParents;
exports.isDescendant = isDescendant;
exports.findAncestor = findAncestor;
exports.filterByFocusable = filterByFocusable;
exports.getBestFirstFocusable = getBestFirstFocusable;
exports.isFormElement = isFormElement;
exports.generateId = generateId;
exports.generateUUID = generateUUID;
exports.checkDarkBackground = checkDarkBackground;
exports.findVisibleParent = findVisibleParent;
// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var COLOR_RGB_REGEXP = /rgb\((\d+), (\d+), (\d+)\)/;
var COLOR_RGBA_REGEXP = /rgba\((\d+), (\d+), (\d+), ([\d\.]+)\)/;
var LIGHT_HINT_REGEXP = /^light/;

function hash(input) {
  var hash = 0,
      i,
      chr,
      len;
  if (input.length === 0) return hash;
  for (i = 0, len = input.length; i < len; i++) {
    chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

function findScrollParents(element, horizontal) {
  var result = [];
  var parent = element.parentNode;
  while (parent && parent.getBoundingClientRect) {
    var rect = parent.getBoundingClientRect();
    // 10px is to account for borders and scrollbars in a lazy way
    if (horizontal) {
      if (rect.width && parent.scrollWidth > rect.width + 10) {
        result.push(parent);
      }
    } else {
      if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent);
      }
    }
    parent = parent.parentNode;
  }
  // last scrollable element will be the document
  // if nothing else is scrollable in the page
  if (result.length === 0) {
    result.push(document);
  }
  return result;
}

function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function findAncestor(element, className) {
  var node = element.parentNode;
  while (node != null) {
    if (node.classList && node.classList.contains(className)) {
      break;
    }
    node = node.parentNode;
  }
  return node;
}

function filterByFocusable(elements) {
  return Array.prototype.filter.call(elements || [], function (element) {
    var currentTag = element.tagName.toLowerCase();
    var validTags = /(svg|a|area|input|select|textarea|button|iframe|div)$/;
    var isValidTag = currentTag.match(validTags) && element.focus;

    if (currentTag === 'a') {
      return isValidTag && element.childNodes.length > 0 && element.getAttribute('href');
    } else if (currentTag === 'svg' || currentTag === 'div') {
      return isValidTag && element.hasAttribute('tabindex');
    }

    return isValidTag;
  });
}

function getBestFirstFocusable(elements) {
  var bestFirstFocusable;

  Array.prototype.some.call(elements || [], function (element) {
    var currentTag = element.tagName.toLowerCase();
    var isValidTag = currentTag.match(/(input|select|textarea)$/);
    return isValidTag ? (bestFirstFocusable = element, true) : false;
  });

  if (!bestFirstFocusable) {
    bestFirstFocusable = this.filterByFocusable(elements)[0];
  }

  return bestFirstFocusable;
}

function isFormElement(element) {
  var elementType = element ? element.tagName.toLowerCase() : undefined;
  return elementType && (elementType === 'input' || elementType === 'textarea');
}

function generateId(element) {
  if (element && typeof element.getAttribute === 'function') {
    var id = void 0;
    var elementId = element.getAttribute('id');
    if (!elementId) {
      // IE11 fix: check for parentNode instead of parentElement
      var parentElement = element.parentElement || element.parentNode;
      if (parentElement) {
        id = hash(parentElement.innerHTML);
        element.setAttribute('id', id);
      }
    } else {
      id = elementId;
    }
    return id;
  }
}

function generateUUID() {
  function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  }
  var uuid = '' + S4() + S4() + ('-' + S4() + '-4' + S4().substr(0, 3)) + ('-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
  return uuid;
}

var CHECK_DARK_BACKGROUND_BACKOFFS = [0, 20, 80, 200];

function hasDarkBackground(element) {
  var result = false;
  var color = window.getComputedStyle(element).backgroundColor;
  var match = color.match(COLOR_RGB_REGEXP) || color.match(COLOR_RGBA_REGEXP);
  if (match) {
    var _match$slice$map = match.slice(1).map(function (n) {
      return parseInt(n, 10);
    }),
        _match$slice$map2 = _slicedToArray(_match$slice$map, 3),
        red = _match$slice$map2[0],
        green = _match$slice$map2[1],
        blue = _match$slice$map2[2];
    // http://www.had2know.com/technology/
    //  color-contrast-calculator-web-design.html


    var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
    if (0 === brightness) {
      // Browsers return 0,0,0 when they don't know yet.
      result = undefined;
      // changed threshold below to accomodate the Aruba theme for now
    } else if (brightness < 137) {
      ///125) {
      result = true;
    }
  }
  return result;
}

function checkDarkBackgroundBackoff(element, handler, backoffDurations) {
  return setTimeout(function () {
    var dark = hasDarkBackground(element);
    if (undefined === dark && backoffDurations.length > 0) {
      checkDarkBackgroundBackoff(element, handler, backoffDurations);
    } else {
      handler(dark);
    }
  }, backoffDurations.shift());
}

function checkDarkBackground(colorIndex, element, handler) {
  var timer = void 0;
  if (colorIndex) {
    if ('dark' === colorIndex) {
      // caller knows
      handler(true);
    } else if (LIGHT_HINT_REGEXP.test(colorIndex)) {
      // skip if this is a 'light-*' color index
      handler(false);
    } else {
      // Measure the actual background color brightness to determine whether
      // to set a dark or light context.
      if (element && window.getComputedStyle) {
        timer = checkDarkBackgroundBackoff(element, handler, CHECK_DARK_BACKGROUND_BACKOFFS);
      }
    }
  }
  return { stop: function stop() {
      return clearTimeout(timer);
    } };
}

function findVisibleParent(element) {
  if (element) {
    return element.offsetParent ? element : findVisibleParent(element.parentElement);
  } else {
    return null;
  }
}

/***/ }),

/***/ "./node_modules/grommet/utils/Drop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropAlignPropType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _classnames2 = __webpack_require__("./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _DOM = __webpack_require__("./node_modules/grommet/utils/DOM.js");

var _CSSClassnames = __webpack_require__("./node_modules/grommet/utils/CSSClassnames.js");

var _CSSClassnames2 = _interopRequireDefault(_CSSClassnames);

var _KeyboardAccelerators = __webpack_require__("./node_modules/grommet/utils/KeyboardAccelerators.js");

var _KeyboardAccelerators2 = _interopRequireDefault(_KeyboardAccelerators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2014 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.DROP;
var BACKGROUND_COLOR_INDEX = _CSSClassnames2.default.BACKGROUND_COLOR_INDEX;

/*
 * Drop is a utility for rendering components like drop down menus layered above
 * their initiating controls.
 */

var VERTICAL_ALIGN_OPTIONS = ['top', 'bottom'];
var HORIZONTAL_ALIGN_OPTIONS = ['right', 'left'];

var DropContents = function (_Component) {
  _inherits(DropContents, _Component);

  function DropContents(props, context) {
    _classCallCheck(this, DropContents);

    var _this = _possibleConstructorReturn(this, (DropContents.__proto__ || Object.getPrototypeOf(DropContents)).call(this, props, context));

    _this._processTab = _this._processTab.bind(_this);
    return _this;
  }

  _createClass(DropContents, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var context = this.props.context;

      return _extends({}, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var focusControl = this.props.focusControl;

      if (focusControl) {
        this._keyboardHandlers = {
          tab: this._processTab
        };
        _KeyboardAccelerators2.default.startListeningToKeyboard(this, this._keyboardHandlers);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var focusControl = this.props.focusControl;

      if (focusControl) {
        _KeyboardAccelerators2.default.stopListeningToKeyboard(this, this._keyboardHandlers);
      }
    }
  }, {
    key: '_processTab',
    value: function _processTab(event) {
      var items = this._containerRef.getElementsByTagName('*');
      items = (0, _DOM.filterByFocusable)(items);
      if (!items || items.length === 0) {
        event.preventDefault();
      } else {
        if (event.shiftKey) {
          if (event.target === items[0]) {
            items[items.length - 1].focus();
            event.preventDefault();
          }
        } else if (event.target === items[items.length - 1]) {
          items[0].focus();
          event.preventDefault();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          focusControl = _props.focusControl;


      var anchorStep = void 0;
      if (focusControl) {
        anchorStep = _react2.default.createElement('a', { tabIndex: '-1', 'aria-hidden': 'true',
          className: CLASS_ROOT + '__anchor' });
      }
      return _react2.default.createElement(
        'div',
        { ref: function ref(_ref) {
            return _this2._containerRef = _ref;
          } },
        anchorStep,
        content
      );
    }
  }]);

  return DropContents;
}(_react.Component);

DropContents.displayName = 'DropContents';


DropContents.propTypes = {
  content: _propTypes2.default.node.isRequired,
  context: _propTypes2.default.any,
  focusControl: _propTypes2.default.bool
};

DropContents.childContextTypes = {
  history: _propTypes2.default.object,
  intl: _propTypes2.default.object,
  onDropChange: _propTypes2.default.func,
  router: _propTypes2.default.any,
  store: _propTypes2.default.object
};

var _normalizeOptions = function _normalizeOptions(options) {
  var opts = _extends({}, options);
  // normalize for older interface that just had align content
  if (options.top || options.bottom || options.left || options.right) {
    opts = { align: _extends({}, options) };
  }
  // validate align
  if (options && options.align && options.align.top && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.top) === -1) {
    console.warn("Warning: Invalid align.top value '" + options.align.top + "' supplied to Drop," + "expected one of [" + VERTICAL_ALIGN_OPTIONS.join(',') + "]");
  }
  if (options.align && options.align.bottom && VERTICAL_ALIGN_OPTIONS.indexOf(options.align.bottom) === -1) {
    console.warn("Warning: Invalid align.bottom value '" + options.align.bottom + "' supplied to Drop," + "expected one of [" + VERTICAL_ALIGN_OPTIONS.join(',') + "]");
  }
  if (options.align && options.align.left && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.left) === -1) {
    console.warn("Warning: Invalid align.left value '" + options.align.left + "' supplied to Drop," + "expected one of [" + HORIZONTAL_ALIGN_OPTIONS.join(',') + "]");
  }
  if (options.align && options.align.right && HORIZONTAL_ALIGN_OPTIONS.indexOf(options.align.right) === -1) {
    console.warn("Warning: Invalid align.right value '" + options.align.right + "' supplied to Drop," + "expected one of [" + HORIZONTAL_ALIGN_OPTIONS.join(',') + "]");
  }
  opts.align = _extends({}, opts.align) || {};
  if (!options.align.top && !options.align.bottom) {
    opts.align.top = "top";
  }
  if (!options.align.left && !options.align.right) {
    opts.align.left = "left";
  }
  opts.responsive = options.responsive !== false ? true : options.responsive;
  return opts;
};

// Drop options:
//
// align: See dropAlignPropType
// className: PropTypes.string
// colorIndex: PropTypes.string
//    Background color
// context: PropTypes.object
//    React context to pass through
// focusControl: PropTypes.bool
//    Whether to focus inside the dropped content when added
// responsive: PropTypes.bool
//    Whether to dynamically re-place when resized
//

var Drop = function () {
  function Drop(control, content, opts) {
    var _classnames,
        _this3 = this;

    _classCallCheck(this, Drop);

    var options = _normalizeOptions(opts);
    var context = options.context,
        focusControl = options.focusControl;

    // bind functions to instance

    this.render = this.render.bind(this);
    this.remove = this.remove.bind(this);
    this.place = this.place.bind(this);
    this._onResize = this._onResize.bind(this);
    this._control = control;

    // setup DOM
    var container = document.createElement('div');
    container.className = (0, _classnames3.default)('grommet', CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, options.className, options.className), _defineProperty(_classnames, BACKGROUND_COLOR_INDEX + '-' + options.colorIndex, options.colorIndex), _classnames));

    // prepend in body to avoid browser scroll issues
    document.body.insertBefore(container, document.body.firstChild);

    var scrollParents = (0, _DOM.findScrollParents)(control);

    // initialize state
    this.state = {
      container: container, control: control, initialFocusNeeded: focusControl, options: options,
      scrollParents: scrollParents
    };

    (0, _reactDom.render)(_react2.default.createElement(DropContents, { content: content, context: context,
      focusControl: focusControl }), container, function () {
      return _this3.place();
    });

    this._listen();
  }

  _createClass(Drop, [{
    key: '_listen',
    value: function _listen() {
      var _this4 = this;

      var scrollParents = this.state.scrollParents;

      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', _this4.place);
      });
      // we intentionally skipped debounce as we believe resizing
      // will not be a common action. Also the UI looks better if the Drop
      // doesn’t lag to align with the control component.
      window.addEventListener('resize', this._onResize);
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      var _this5 = this;

      var scrollParents = this.state.scrollParents;
      // we need to update scroll parents as Responsive options may change
      // the parent for the target element

      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', _this5.place);
      });

      var nextScrollParents = (0, _DOM.findScrollParents)(this._control);

      nextScrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', _this5.place);
      });

      this.state.scrollParents = nextScrollParents;

      this.place();
    }
  }, {
    key: 'place',
    value: function place() {
      var _state = this.state,
          control = _state.control,
          container = _state.container,
          initialFocusNeeded = _state.initialFocusNeeded,
          _state$options = _state.options,
          align = _state$options.align,
          responsive = _state$options.responsive;

      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;

      // clear prior styling
      container.style.left = '';
      container.style.width = '';
      container.style.top = '';
      container.style.maxHeight = '';

      // get bounds
      var controlRect = (0, _DOM.findVisibleParent)(control).getBoundingClientRect();
      var containerRect = container.getBoundingClientRect();

      // determine width
      var width = Math.min(Math.max(controlRect.width, containerRect.width), windowWidth);

      // set left position
      var left = void 0;
      if (align.left) {
        if ('left' === align.left) {
          left = controlRect.left;
        } else if ('right' === align.left) {
          left = controlRect.left - width;
        }
      } else if (align.right) {
        if ('left' === align.right) {
          left = controlRect.left - width;
        } else if ('right' === align.right) {
          left = controlRect.left + controlRect.width - width;
        }
      }

      if (left + width > windowWidth) {
        left -= left + width - windowWidth;
      } else if (left < 0) {
        left = 0;
      }

      // set top position
      var top = void 0,
          maxHeight = void 0;
      if (align.top) {
        if ('top' === align.top) {
          top = controlRect.top;
          maxHeight = Math.min(windowHeight - controlRect.top, windowHeight);
        } else {
          top = controlRect.bottom;
          maxHeight = Math.min(windowHeight - controlRect.bottom, windowHeight - controlRect.height);
        }
      } else if (align.bottom) {
        if ('bottom' === align.bottom) {
          top = controlRect.bottom - containerRect.height;
          maxHeight = Math.max(controlRect.bottom, 0);
        } else {
          top = controlRect.top - containerRect.height;
          maxHeight = Math.max(controlRect.top, 0);
        }
      }

      // if we can't fit it all, see if there's more room the other direction
      if (containerRect.height > maxHeight) {
        // We need more room than we have.
        if (align.top && top > windowHeight / 2) {
          // We put it below, but there's more room above, put it above
          if (align.top === 'bottom') {
            if (responsive) {
              top = Math.max(controlRect.top - containerRect.height, 0);
            }
            maxHeight = controlRect.top;
          } else {
            if (responsive) {
              top = Math.max(controlRect.bottom - containerRect.height, 0);
            }
            maxHeight = controlRect.bottom;
          }
        } else if (align.bottom && maxHeight < windowHeight / 2) {
          // We put it above but there's more room below, put it below
          if (align.bottom === 'bottom') {
            if (responsive) {
              top = controlRect.top;
            }
            maxHeight = Math.min(windowHeight - top, windowHeight);
          } else {
            if (responsive) {
              top = controlRect.bottom;
            }
            maxHeight = Math.min(windowHeight - top, windowHeight - controlRect.height);
          }
        }
      }

      container.style.left = left + 'px';
      // offset width by 0.1 to avoid a bug in ie11 that
      // unnecessarily wraps the text if width is the same
      container.style.width = width + 0.1 + 'px';
      // the (position:absolute + scrollTop)
      // is presenting issues with desktop scroll flickering
      container.style.top = top + 'px';
      container.style.maxHeight = windowHeight - top + 'px';

      if (initialFocusNeeded) {
        // Now that we've placed it, focus on it
        this._focus();
      }
    }
  }, {
    key: '_focus',
    value: function _focus() {
      var container = this.state.container;

      this.state.originalFocusedElement = document.activeElement;
      if (!container.contains(document.activeElement)) {
        var anchor = container.querySelector(CLASS_ROOT + '__anchor');
        if (anchor) {
          anchor.focus();
          anchor.scrollIntoView();
        }
      }
      delete this.state.initialFocusNeeded;
    }
  }, {
    key: 'render',
    value: function render(content) {
      var _this6 = this;

      var _state2 = this.state,
          container = _state2.container,
          _state2$options = _state2.options,
          context = _state2$options.context,
          focusControl = _state2$options.focusControl;

      var originalScrollPosition = container.scrollTop;
      (0, _reactDom.render)(_react2.default.createElement(DropContents, { content: content, context: context,
        focusControl: focusControl }), container, function () {
        _this6.place();
        // reset container to its original scroll position
        container.scrollTop = originalScrollPosition;
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _this7 = this;

      var _state3 = this.state,
          container = _state3.container,
          originalFocusedElement = _state3.originalFocusedElement,
          scrollParents = _state3.scrollParents;

      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', _this7.place);
      });
      window.removeEventListener('resize', this._onResize);

      (0, _reactDom.unmountComponentAtNode)(container);
      document.body.removeChild(container);
      // weird bug in Chrome does not remove child if
      // document.body.insertBefore is called in another new drop.
      // the code below will go over remaining drop that was not removed
      [].forEach.call(document.getElementsByClassName(CLASS_ROOT), function (element) {
        if (element.getAttribute('style') === container.getAttribute('style')) {
          document.body.removeChild(element);
        }
      });

      if (originalFocusedElement) {
        originalFocusedElement.focus();
      }

      this.state = undefined;
    }
  }]);

  return Drop;
}();

// How callers can validate a property for drop alignment which will be
// passed to add().


exports.default = Drop;
var dropAlignPropType = exports.dropAlignPropType = _propTypes2.default.shape({
  top: _propTypes2.default.oneOf(VERTICAL_ALIGN_OPTIONS),
  bottom: _propTypes2.default.oneOf(VERTICAL_ALIGN_OPTIONS),
  left: _propTypes2.default.oneOf(HORIZONTAL_ALIGN_OPTIONS),
  right: _propTypes2.default.oneOf(HORIZONTAL_ALIGN_OPTIONS)
});

Drop.add = function (control, content, options) {
  console.warn("Warning: Drop.add() is deprecated, use new Drop().");
  return new Drop(control, content, options);
};

/***/ }),

/***/ "./node_modules/grommet/utils/FormatTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatTime = formatTime;
function formatTime(seconds) {
  var date = new Date(null);
  seconds = isNaN(seconds) ? 0 : Math.floor(seconds);
  date.setSeconds(seconds);

  var dateISOString = date.toISOString();
  var time = dateISOString.substr(11, 8);
  if (seconds < 3600) {
    time = dateISOString.substr(14, 5);
  }

  return time;
}

/***/ }),

/***/ "./node_modules/grommet/utils/Intl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// (C) Copyright 2014 Hewlett Packard Enterprise Development LP
exports.default = {
  getMessage: function getMessage(intl, key, values) {
    if (intl) {
      return intl.formatMessage({
        id: key,
        defaultMessage: key
      }, values);
    } else {
      return key;
    }
  }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/grommet/utils/KeyboardAccelerators.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _DOM = __webpack_require__("./node_modules/grommet/utils/DOM.js");

// Allow callers to use key labels instead of key code numbers.
// This makes their code easier to read.
// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var KEYS = {
  backspace: 8,
  tab: 9,
  enter: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  comma: 188,
  shift: 16
};

var _keyboardAccelerators = {};
var _listeners = [];
var _isKeyboardAcceleratorListening = false;

var _onKeyboardAcceleratorKeyPress = function _onKeyboardAcceleratorKeyPress(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  _listeners.slice().reverse().some(function (listener) {
    if (_keyboardAccelerators[listener]) {
      var handlers = _keyboardAccelerators[listener].handlers;
      if (handlers.hasOwnProperty(key)) {
        if (handlers[key] && handlers[key](e)) {
          return true;
        }
      }
    }
    return false;
  });
};

// KeyboardAccelerators is a utility for handling keyboard events.
// Add listeners using startListeningToKeyboard().
// Remove listeners using stopListeningToKeyboard().
exports.default = {
  _initKeyboardAccelerators: function _initKeyboardAccelerators(element) {
    var id = (0, _DOM.generateId)(element);
    _keyboardAccelerators[id] = {
      handlers: {}
    };
  },
  _getKeyboardAcceleratorHandlers: function _getKeyboardAcceleratorHandlers(element) {
    var id = (0, _DOM.generateId)(element);
    return _keyboardAccelerators[id].handlers;
  },
  _getDowns: function _getDowns(element) {
    var id = (0, _DOM.generateId)(element);
    return _keyboardAccelerators[id].downs;
  },
  _isComponentListening: function _isComponentListening(element) {
    var id = (0, _DOM.generateId)(element);

    return _listeners.some(function (listener) {
      return listener === id;
    });
  },
  _subscribeComponent: function _subscribeComponent(element) {
    var id = (0, _DOM.generateId)(element);
    _listeners.push(id);
  },
  _unsubscribeComponent: function _unsubscribeComponent(element) {
    var id = (0, _DOM.generateId)(element);

    var removeListenerIndex = _listeners.indexOf(id);
    _listeners.splice(removeListenerIndex, 1);

    delete _keyboardAccelerators[id];
  },


  // Add handlers for specific keys.
  // This function can be called multiple times, existing handlers will
  // be replaced, new handlers will be added.
  startListeningToKeyboard: function startListeningToKeyboard(component, handlers) {
    var element = (0, _reactDom.findDOMNode)(component);
    if (element) {
      this._initKeyboardAccelerators(element);
      var keys = 0;
      for (var key in handlers) {
        if (handlers.hasOwnProperty(key)) {
          var keyCode = key;
          if (KEYS.hasOwnProperty(key)) {
            keyCode = KEYS[key];
          }
          keys += 1;
          this._getKeyboardAcceleratorHandlers(element)[keyCode] = handlers[key];
        }
      }

      if (keys > 0) {
        if (!_isKeyboardAcceleratorListening) {
          window.addEventListener("keydown", _onKeyboardAcceleratorKeyPress);
          _isKeyboardAcceleratorListening = true;
        }
        if (!this._isComponentListening(element)) {
          this._subscribeComponent(element);
        }
      }
    }
  },


  // Remove handlers for all keys or specific keys.
  // If no argument is passed in, all handlers are removed.
  // This function can be called multiple times, only the handlers
  // specified will be removed.
  stopListeningToKeyboard: function stopListeningToKeyboard(component, handlers) {
    var element = (0, _reactDom.findDOMNode)(component);
    if (!this._isComponentListening(element)) {
      return;
    }
    if (handlers) {
      for (var key in handlers) {
        if (handlers.hasOwnProperty(key)) {
          var keyCode = key;
          if (KEYS.hasOwnProperty(key)) {
            keyCode = KEYS[key];
          }
          delete this._getKeyboardAcceleratorHandlers(element)[keyCode];
        }
      }
    }

    var keyCount = 0;
    for (var keyHandler in this._getKeyboardAcceleratorHandlers(element)) {
      if (this._getKeyboardAcceleratorHandlers(element).hasOwnProperty(keyHandler)) {
        keyCount += 1;
      }
    }

    if (!handlers || 0 === keyCount) {
      this._initKeyboardAccelerators(element);
      this._unsubscribeComponent(element);
    }

    if (_listeners.length === 0) {
      window.removeEventListener("keydown", _onKeyboardAcceleratorKeyPress);
      _isKeyboardAcceleratorListening = false;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/grommet/utils/Props.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

exports.default = {
  pick: function pick(props, fields) {
    var has = function has(p) {
      return props.hasOwnProperty(p);
    };
    var obj = {};
    (fields || []).forEach(function (field) {
      if (has(field)) obj[field] = props[field];
    });
    return obj;
  },
  omit: function omit(props, fields) {
    var obj = {};
    Object.keys(props).forEach(function (p) {
      if ((fields || []).indexOf(p) === -1) {
        obj[p] = props[p];
      }
    });
    return obj;
  }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/grommet/utils/Responsive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smallSize = smallSize;
// (C) Copyright 2014 Hewlett Packard Enterprise Development LP

/*
 * Responsive is a utility for tracking the display size.
 * It aligns with CSS media queries.
 */

var SMALL_WIDTH_EM = 44.9375; // align with _settings.responsive.scss

function smallSize() {
  var fontSize = '16px';
  // unit tests don't have getComputedStyle
  if (window.getComputedStyle) {
    fontSize = window.getComputedStyle(document.documentElement).fontSize;
  }
  return SMALL_WIDTH_EM * parseFloat(fontSize);
}

exports.default = {

  // Track responsive sizing.
  //
  // Example:
  // inside componentDidMount()
  //   this._responsive = Responsive.start(this._onResponsive);
  // inside componentWillUnmount()
  //   this._responsive.stop()

  start: function start(func) {
    var responsive = {
      func: func,
      timer: undefined,
      small: undefined,
      smallSize: this.smallSize()
    };
    responsive.onResize = this._onResize.bind(this, responsive);
    responsive.layout = this._check.bind(this, responsive);
    responsive.stop = this._stop.bind(this, responsive);
    window.addEventListener('resize', responsive.onResize);
    responsive.layout();
    return responsive;
  },
  _stop: function _stop(responsive) {
    clearTimeout(responsive.timer);
    window.removeEventListener('resize', responsive.onResize);
  },
  _onResize: function _onResize(responsive) {
    // Don't debounce so we align more closely with how the stylesheets are
    // processed.
    responsive.layout();
  },
  _check: function _check(responsive) {
    if (window.innerWidth <= responsive.smallSize) {
      if (!responsive.small) {
        responsive.small = true;
        responsive.func(true);
      }
    } else {
      if (false !== responsive.small) {
        responsive.small = false;
        responsive.func(false);
      }
    }
  },


  smallSize: smallSize
};

/***/ }),

/***/ "./node_modules/grommet/utils/Scroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

/*
 * Scroll provides smooth scrolling.
 */

var SCROLL_STEPS = 25;

function easeInOutQuad(t) {
  return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

exports.default = {

  // component: component to scroll
  // property: 'scrollTop' | 'scrollLeft'
  // delta: amount to scroll
  // doneHandler: optional function called when the scroll is done

  scrollBy: function scrollBy(component, property, delta, doneHandler) {
    var _this = this;

    clearInterval(this._scrollToTimer);
    var start = component[property];
    var end = start + delta;
    var step = 1;
    this._scrollToTimer = setInterval(function () {
      var current = component[property];
      var next = void 0;
      var easing = easeInOutQuad(step / SCROLL_STEPS);
      if (end > start) {
        next = Math.min(end, Math.max(current, Math.round(start + (end - start) * easing)));
      } else {
        next = Math.max(end, Math.min(current, Math.round(start - (start - end) * easing)));
      }
      component[property] = next;
      step += 1;
      if (step > SCROLL_STEPS) {
        // we're done, but the browser/OS might still be easing from a
        // mouse wheel interaction. So, set it one more time after a bit.
        clearInterval(_this._scrollToTimer);
        _this._scrollToTimer = setTimeout(function () {
          component[property] = next;
          if (doneHandler) {
            doneHandler();
          }
        }, 200);
      }
    }, 8);
  }
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/grommet/utils/Throttle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  var threshhold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

  var last = void 0;
  var deferTimer = void 0;

  return function () {
    var now = Date.now();
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(scope, arguments);
      }, threshhold);
    } else {
      last = now;
      fn.apply(scope, arguments);
    }
  };
};

module.exports = exports["default"]; // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

/***/ }),

/***/ "./node_modules/history/LocationUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__("./node_modules/resolve-pathname/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__("./node_modules/value-equal/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/PathUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/history/createMemoryHistory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__("./node_modules/history/PathUtils.js");

var _LocationUtils = __webpack_require__("./node_modules/history/LocationUtils.js");

var _createTransitionManager = __webpack_require__("./node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/createTransitionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__("./node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "./node_modules/history/es/DOMUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/history/es/LocationUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__("./node_modules/resolve-pathname/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__("./node_modules/value-equal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__("./node_modules/history/es/PathUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["default"])(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/es/PathUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/history/es/createBrowserHistory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__("./node_modules/history/es/LocationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__("./node_modules/history/es/PathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__("./node_modules/history/es/createTransitionManager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__("./node_modules/history/es/DOMUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createBrowserHistory);

/***/ }),

/***/ "./node_modules/history/es/createHashHistory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__("./node_modules/history/es/LocationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__("./node_modules/history/es/PathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__("./node_modules/history/es/createTransitionManager.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__("./node_modules/history/es/DOMUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);

    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createHashHistory);

/***/ }),

/***/ "./node_modules/history/es/createMemoryHistory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__("./node_modules/history/es/PathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__("./node_modules/history/es/LocationUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__("./node_modules/history/es/createTransitionManager.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createMemoryHistory);

/***/ }),

/***/ "./node_modules/history/es/createTransitionManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),

/***/ "./node_modules/history/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__("./node_modules/history/es/createBrowserHistory.js");
/* unused harmony reexport createBrowserHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__("./node_modules/history/es/createHashHistory.js");
/* unused harmony reexport createHashHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__("./node_modules/history/es/createMemoryHistory.js");
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__("./node_modules/history/es/LocationUtils.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__("./node_modules/history/es/PathUtils.js");
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */










/***/ }),

/***/ "./node_modules/invariant/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/react-desc/lib/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  any: { type: 'any' },
  array: { type: 'array' },
  bool: { type: 'bool' },
  element: { type: 'element' },
  func: { type: 'func' },
  node: { type: 'node' },
  number: { type: 'number' },
  object: { type: 'object' },
  string: { type: 'string' },
  symbol: { type: 'symbol' },
  arrayOf: function arrayOf(args) {
    return { type: 'arrayOf', args: args };
  },
  instanceOf: function instanceOf(args) {
    return { type: 'instanceOf', args: args };
  },
  objectOf: function objectOf(args) {
    return { type: 'objectOf', args: args };
  },
  oneOfType: function oneOfType(args) {
    return { type: 'oneOfType', args: args };
  },
  oneOf: function oneOf(args) {
    return { type: 'oneOf', args: args };
  },
  shape: function shape(args) {
    return { type: 'shape', args: args };
  }
};

/***/ }),

/***/ "./node_modules/react-desc/lib/docPropType.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = docPropType;

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getArgs(args) {
  return args.map(function (arg) {
    if (arg.type && _propTypes2.default[arg.type]) {
      if (arg.args) {
        if (arg.type === 'shape') {
          return buildShapePropType(arg);
        }
        return _propTypes2.default[arg.type](arg.args);
      }
      return _propTypes2.default[arg.type];
    }
    return arg;
  });
}

function getPropType(validate) {
  return _propTypes2.default[validate.type](validate.args.type && _propTypes2.default[validate.args.type] ? _propTypes2.default[validate.args.type] : validate.args);
}

// function to recursively build the proptype for shape
function buildShapePropType(validate) {
  var args = {};
  Object.keys(validate.args).forEach(function (arg) {
    var element = validate.args[arg];
    if (element.type && _propTypes2.default[element.type]) {
      if (element.args) {
        if (element.type === 'oneOfType') {
          var elementArgs = getArgs(element.args);
          args[arg] = _propTypes2.default[element.type](elementArgs);
        } else if (element.type === 'shape') {
          args[arg] = buildShapePropType(element);
        } else {
          args[arg] = getPropType(element);
        }
      } else {
        args[arg] = _propTypes2.default[element.type];
      }
    } else if (element.type) {
      throw new Error('docPropType: unknown type ' + element.type);
    }
  });

  return _propTypes2.default[validate.type](args);
}

function docPropType(validate, description) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!description) {
    throw new Error('docPropType: description is required');
  }
  if (!validate) {
    throw new Error('docPropType: validate is required');
  }

  var required = options.required;

  var type = validate;
  if (validate.type && _propTypes2.default[validate.type]) {
    if (validate.args) {
      if (validate.type === 'oneOfType') {
        var args = getArgs(validate.args);
        type = _propTypes2.default[validate.type](args);
      } else if (validate.type === 'shape') {
        type = buildShapePropType(validate);
      } else if (validate.type === 'arrayOf' && validate.args.type === 'oneOfType') {
        var _args = getArgs(validate.args.args);
        var v = _extends({}, validate);
        v.args = _propTypes2.default[validate.args.type](_args);
        type = getPropType(v);
      } else {
        type = getPropType(validate);
      }
    } else {
      type = _propTypes2.default[validate.type];
    }
  } else if (validate.type) {
    throw new Error('docPropType: unknown type ' + validate.type);
  }
  // clone function
  var propType = type.bind(null);
  if (type.isRequired) {
    propType.isRequired = type.isRequired.bind(null);
  }
  if (required && propType.isRequired) {
    propType = propType.isRequired;
  }
  propType.$$reactDesc = { description: description, validate: validate, options: options };
  return propType;
}

/***/ }),

/***/ "./node_modules/react-desc/lib/getDocAsJSON.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocAsJSON;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function buildShapeFormat(validate) {
  var format = {};
  Object.keys(validate.args).forEach(function (arg) {
    var element = validate.args[arg];
    if (element.type === 'shape') {
      format[arg] = buildShapeFormat(element, true);
    } else {
      format[arg] = getFormat(element);
    }
  });
  return format;
}

function getFormat(validate) {
  switch (validate.type) {
    case 'arrayOf':
      return '[' + validate.args.type + ', ...]';
    case 'bool':
      return 'boolean';
    case 'func':
      return 'function';
    case 'instanceOf':
      return 'new ' + validate.args.name + '(...)';
    case 'objectOf':
      return '{ test: ' + validate.args.type + ', ... }';
    case 'oneOf':
      return validate.args;
    case 'oneOfType':
      return validate.args.map(function (arg) {
        return getFormat(arg);
      });
    case 'shape':
      return JSON.stringify(buildShapeFormat(validate));
    default:
      return validate.type ? validate.type : 'custom';
  }
}

function getPropTypeAsJson(propType, propName, defaultValue) {
  var _propType$$$reactDesc = propType.$$reactDesc.options,
      deprecated = _propType$$$reactDesc.deprecated,
      format = _propType$$$reactDesc.format,
      required = _propType$$$reactDesc.required,
      extras = _objectWithoutProperties(_propType$$$reactDesc, ['deprecated', 'format', 'required']);

  var validate = propType.$$reactDesc.validate;

  var documentation = {
    description: propType.$$reactDesc.description,
    name: propName
  };

  if (defaultValue) {
    documentation.defaultValue = defaultValue;
  }

  if (deprecated) {
    documentation.deprecated = deprecated;
  }

  if (required) {
    documentation.required = required;
  }

  if (Object.keys(extras).length > 0) {
    documentation.extras = extras;
  }

  documentation.format = format || getFormat(validate);

  return documentation;
}

function getDocAsJSON(component) {
  if (!component) {
    throw new Error('getDocAsJSON: component is required');
  }

  var documentation = {
    name: component.displayName || component.name
  };
  if (component.$$reactDesc) {
    Object.assign(documentation, component.$$reactDesc);

    if (component.propTypes) {
      var propTypes = [];
      Object.keys(component.propTypes).forEach(function (propName) {
        var propType = component.propTypes[propName];
        if (propType.$$reactDesc) {
          propTypes.push(getPropTypeAsJson(propType, propName, (component.defaultProps || {})[propName]));
        }
      });
      if (propTypes.length > 0) {
        documentation.properties = propTypes;
      }
    }
  }
  return documentation;
}

/***/ }),

/***/ "./node_modules/react-desc/lib/getDocAsMarkdown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDocAsMarkdown;

var _getDocAsJSON = __webpack_require__("./node_modules/react-desc/lib/getDocAsJSON.js");

var _getDocAsJSON2 = _interopRequireDefault(_getDocAsJSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getDocAsMarkdown(component) {
  if (!component) {
    throw new Error('getDocAsMarkdown: component is required');
  }

  var documentation = (0, _getDocAsJSON2.default)(component);
  var description = '';
  if (documentation.description) {
    description = '\n' + documentation.description;
  }
  var deprecatedNote = '';
  var deprecatedContent = '';
  if (documentation.deprecated) {
    deprecatedNote = '~~';
    deprecatedContent = '\n### Deprecated: ' + documentation.deprecated;
  }
  var properties = '';
  if (documentation.properties) {
    properties = '\n\n### Properties\n\n| Property | Description | Format | Default Value | Required | Details |\n| ---- | ---- | ---- | ---- | ---- | ---- |';
    documentation.properties.forEach(function (prop) {
      var propDeprecatedNote = '';
      var propDeprecatedContent = '';
      if (prop.deprecated) {
        propDeprecatedNote = '~~';
        propDeprecatedContent = '**Deprecated**: ' + prop.deprecated;
      }
      properties += '\n| **' + propDeprecatedNote + prop.name + propDeprecatedNote + '** | ' + prop.description + ' | ' + prop.format + ' | ' + (prop.defaultValue || '') + ' | ' + (prop.required ? 'Yes' : 'No') + ' | ' + propDeprecatedContent + ' |';
    });
  }
  return '## ' + deprecatedNote + documentation.name + deprecatedNote + ' Component' + deprecatedContent + description + properties;
}

/***/ }),

/***/ "./node_modules/react-desc/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docPropType = __webpack_require__("./node_modules/react-desc/lib/docPropType.js");

var _docPropType2 = _interopRequireDefault(_docPropType);

var _getDocAsJSON = __webpack_require__("./node_modules/react-desc/lib/getDocAsJSON.js");

var _getDocAsJSON2 = _interopRequireDefault(_getDocAsJSON);

var _getDocAsMarkdown = __webpack_require__("./node_modules/react-desc/lib/getDocAsMarkdown.js");

var _getDocAsMarkdown2 = _interopRequireDefault(_getDocAsMarkdown);

var _PropTypes = __webpack_require__("./node_modules/react-desc/lib/PropTypes.js");

var _PropTypes2 = _interopRequireDefault(_PropTypes);

var _schema = __webpack_require__("./node_modules/react-desc/lib/schema.js");

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.docPropType = _docPropType2.default;
exports.getDocAsJSON = _getDocAsJSON2.default;
exports.getDocAsMarkdown = _getDocAsMarkdown2.default;
exports.PropTypes = _PropTypes2.default;
exports.schema = _schema2.default;

exports.default = {
  docPropType: _docPropType2.default, getDocAsJSON: _getDocAsJSON2.default, getDocAsMarkdown: _getDocAsMarkdown2.default, PropTypes: _PropTypes2.default, schema: _schema2.default
};

/***/ }),

/***/ "./node_modules/react-desc/lib/schema.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = schema;

var _docPropType = __webpack_require__("./node_modules/react-desc/lib/docPropType.js");

var _docPropType2 = _interopRequireDefault(_docPropType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function schema(component) {
  var metadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!component) {
    throw new Error('schema: component is required');
  }
  if (!metadata.description) {
    throw new Error('schema: description is required');
  }

  var reactDesc = _extends({}, metadata);
  delete reactDesc.props;
  var defaultProps = void 0;
  var propTypes = void 0;

  if (metadata.props) {
    Object.keys(metadata.props).forEach(function (propName) {
      var prop = metadata.props[propName];
      if (!propTypes) {
        propTypes = {};
      }
      // if it is an array it means that it is a react schema instance
      if (Array.isArray(prop)) {
        var validate = prop[0];
        var description = prop[1];
        var options = prop[2];

        if (options && options.defaultProp) {
          if (!defaultProps) {
            defaultProps = {};
          }
          defaultProps[propName] = options.defaultProp;
          delete options.defaultProp;
        }

        propTypes[propName] = (0, _docPropType2.default)(validate, description, options);
      } else {
        propTypes[propName] = prop;
      }
    });
  }

  /* eslint-disable no-param-reassign */
  component.$$reactDesc = reactDesc;
  if (propTypes) {
    component.propTypes = propTypes;
  }

  if (!component.defaultProps && defaultProps) {
    component.defaultProps = defaultProps;
  }
  /* eslint-enable no-param-reassign */
}

/***/ }),

/***/ "./node_modules/react-router/es/MemoryRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__ = __webpack_require__("./node_modules/history/createMemoryHistory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("./node_modules/react-router/es/Router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_3_history_createMemoryHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<MemoryRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { MemoryRouter as Router }`.');
  };

  MemoryRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Router__["a" /* default */], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  initialIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  keyLength: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (MemoryRouter);

/***/ }),

/***/ "./node_modules/react-router/es/Prompt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_2_invariant___default()(this.context.router, 'You should not use <Prompt> outside a <Router>');

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Prompt.propTypes = {
  when: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  message: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      block: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Prompt);

/***/ }),

/***/ "./node_modules/react-router/es/Redirect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history__ = __webpack_require__("./node_modules/history/es/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Redirect> outside a <Router>');

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(prevProps.to);
    var nextTo = Object(__WEBPACK_IMPORTED_MODULE_4_history__["a" /* createLocation */])(this.props.to);

    if (Object(__WEBPACK_IMPORTED_MODULE_4_history__["b" /* locationsAreEqual */])(prevTo, nextTo)) {
      __WEBPACK_IMPORTED_MODULE_2_warning___default()(false, 'You tried to redirect to the same route you\'re currently on: ' + ('"' + nextTo.pathname + nextTo.search + '"'));
      return;
    }

    this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;


    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Redirect.propTypes = {
  push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  from: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      push: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      replace: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
    }).isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),

/***/ "./node_modules/react-router/es/Route.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__("./node_modules/react-router/es/matchPath.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(router, 'You should not use <Route> or withRouter() outside a <Router>');

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null : null;
  };

  return Route;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Route.propTypes = {
  computedMatch: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object, // private, from <Switch>
  path: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  exact: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  strict: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  sensitive: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  render: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node]),
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Route.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
    history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    route: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
    staticContext: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
  })
};
Route.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Route);

/***/ }),

/***/ "./node_modules/react-router/es/Router.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(children == null || __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children) : null;
  };

  return Router;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

Router.propTypes = {
  history: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};
Router.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
Router.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (Router);

/***/ }),

/***/ "./node_modules/react-router/es/StaticRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__("./node_modules/history/PathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Router__ = __webpack_require__("./node_modules/react-router/es/Router.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;


  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["parsePath"])(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return Object(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__["addLeadingSlash"])(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!this.props.history, '<StaticRouter> ignores the history prop. To use a custom history, ' + 'use `import { Router }` instead of `import { StaticRouter as Router }`.');
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Router__["a" /* default */], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

StaticRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  context: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (StaticRouter);

/***/ }),

/***/ "./node_modules/react-router/es/Switch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning__ = __webpack_require__("./node_modules/warning/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__("./node_modules/invariant/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matchPath__ = __webpack_require__("./node_modules/react-router/es/matchPath.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    __WEBPACK_IMPORTED_MODULE_3_invariant___default()(this.context.router, 'You should not use <Switch> outside a <Router>');
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    __WEBPACK_IMPORTED_MODULE_2_warning___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (element) {
      if (!__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          sensitive = _element$props.sensitive,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? Object(__WEBPACK_IMPORTED_MODULE_4__matchPath__["a" /* default */])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }) : route.match;
      }
    });

    return match ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Switch.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    route: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__ = __webpack_require__("./node_modules/react-router/es/MemoryRouter.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prompt__ = __webpack_require__("./node_modules/react-router/es/Prompt.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_1__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Redirect__ = __webpack_require__("./node_modules/react-router/es/Redirect.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_2__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__("./node_modules/react-router/es/Route.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_3__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("./node_modules/react-router/es/Router.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_4__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StaticRouter__ = __webpack_require__("./node_modules/react-router/es/StaticRouter.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_5__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch__ = __webpack_require__("./node_modules/react-router/es/Switch.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_6__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matchPath__ = __webpack_require__("./node_modules/react-router/es/matchPath.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_7__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__withRouter__ = __webpack_require__("./node_modules/react-router/es/withRouter.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_8__withRouter__["a"]; });



















/***/ }),

/***/ "./node_modules/react-router/es/matchPath.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__("./node_modules/react-router/node_modules/path-to-regexp/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["a"] = (matchPath);

/***/ }),

/***/ "./node_modules/react-router/es/withRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__("./node_modules/hoist-non-react-statics/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__("./node_modules/react-router/es/Route.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ['wrappedComponentRef']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Route__["a" /* default */], { render: function render(routeComponentProps) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component.displayName || Component.name) + ')';
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };

  return __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["a"] = (withRouter);

/***/ }),

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__("./node_modules/react-router/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "./node_modules/value-equal/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/whitepaper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_WhitepaperPage__ = __webpack_require__("./components/WhitepaperPage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/pages/whitepaper.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Whitepaper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = Whitepaper;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Whitepaper, "Whitepaper", "/home/tomasroaldsnes/Code/hodl-time/pages/whitepaper.js");
  reactHotLoader.register(_default, "default", "/home/tomasroaldsnes/Code/hodl-time/pages/whitepaper.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/whitepaper")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/whitepaper.js");


/***/ })

},[10])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=whitepaper.js.map