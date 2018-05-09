webpackHotUpdate(5,{

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

/***/ "./node_modules/grommet/components/chart/Chart.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Range = exports.HotSpots = exports.MarkerLabel = exports.Marker = exports.Bar = exports.Line = exports.Area = exports.Grid = exports.Base = exports.Layers = exports.Axis = undefined;

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

var _utils = __webpack_require__("./node_modules/grommet/components/chart/utils.js");

var _Meter = __webpack_require__("./node_modules/grommet/components/Meter.js");

var _Meter2 = _interopRequireDefault(_Meter);

var _Axis = __webpack_require__("./node_modules/grommet/components/chart/Axis.js");

var _Axis2 = _interopRequireDefault(_Axis);

var _Layers = __webpack_require__("./node_modules/grommet/components/chart/Layers.js");

var _Layers2 = _interopRequireDefault(_Layers);

var _Base = __webpack_require__("./node_modules/grommet/components/chart/Base.js");

var _Base2 = _interopRequireDefault(_Base);

var _Grid = __webpack_require__("./node_modules/grommet/components/chart/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Area = __webpack_require__("./node_modules/grommet/components/chart/Area.js");

var _Area2 = _interopRequireDefault(_Area);

var _Line = __webpack_require__("./node_modules/grommet/components/chart/Line.js");

var _Line2 = _interopRequireDefault(_Line);

var _Bar = __webpack_require__("./node_modules/grommet/components/chart/Bar.js");

var _Bar2 = _interopRequireDefault(_Bar);

var _Marker = __webpack_require__("./node_modules/grommet/components/chart/Marker.js");

var _Marker2 = _interopRequireDefault(_Marker);

var _MarkerLabel = __webpack_require__("./node_modules/grommet/components/chart/MarkerLabel.js");

var _MarkerLabel2 = _interopRequireDefault(_MarkerLabel);

var _HotSpots = __webpack_require__("./node_modules/grommet/components/chart/HotSpots.js");

var _HotSpots2 = _interopRequireDefault(_HotSpots);

var _Range = __webpack_require__("./node_modules/grommet/components/chart/Range.js");

var _Range2 = _interopRequireDefault(_Range);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // (C) Copyright 2016 Hewlett Packard Enterprise Development LP

var CLASS_ROOT = _CSSClassnames2.default.CHART;
var CHART_BASE = _CSSClassnames2.default.CHART_BASE;

function traverseAndUpdateChildren(children) {
  return _react.Children.map(children, function (child) {
    if (!child || !child.type) {
      return child;
    }

    // remove tabIndex from child elements to avoid
    // multiple tabs inside a chart
    if (child.type === _Meter2.default || child.type.name === 'Meter' || child.type === Chart || child.type.name === 'Chart') {
      return _react2.default.cloneElement(child, {
        tabIndex: '-1'
      });
    }

    if (child.props.children) {
      var childrenNoTabIndex = traverseAndUpdateChildren(child.props.children);

      return _react2.default.cloneElement(child, {
        children: childrenNoTabIndex
      });
    }
    return child;
  });
}

var Chart = function (_Component) {
  _inherits(Chart, _Component);

  function Chart(props, context) {
    _classCallCheck(this, Chart);

    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props, context));

    _this._onResize = _this._onResize.bind(_this);
    _this._layout = _this._layout.bind(_this);
    _this.state = { alignTop: 0, alignLeft: 0, alignHeight: 0, alignWidth: 0 };
    return _this;
  }

  _createClass(Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this._onResize);
      // Give sometime for the ui to render. Why is this needed though?
      setTimeout(this._layout, 150);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Always layout when new props come. This takes care of a contained
      // Base having children that change.
      this.setState({ layoutNeeded: true });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.layoutNeeded) {
        this._layout();
        this.setState({ layoutNeeded: false });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._onResize);
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      // debounce
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(this._layout, _utils.debounceDelay);
    }
  }, {
    key: '_layout',
    value: function _layout() {
      var _props = this.props,
          horizontalAlignWith = _props.horizontalAlignWith,
          verticalAlignWith = _props.verticalAlignWith,
          vertical = _props.vertical,
          onMaxCount = _props.onMaxCount;

      var chart = this.chartRef;
      if (chart) {
        var chartRect = chart.getBoundingClientRect();
        var base = this.chartRef.querySelector('.' + CHART_BASE);
        var alignWidth = void 0,
            alignLeft = void 0,
            alignRight = void 0,
            alignHeight = void 0,
            alignTop = void 0,
            alignBottom = void 0;
        var padAlign = true;

        if (horizontalAlignWith) {
          var elem = document.getElementById(horizontalAlignWith);
          if (elem) {
            var rect = elem.getBoundingClientRect();
            alignWidth = rect.width;
            alignLeft = rect.left - chartRect.left;
            alignRight = chartRect.right - rect.right;
            padAlign = false;
          }
        } else if (base) {
          var _rect = base.getBoundingClientRect();
          alignWidth = _rect.width;
          alignLeft = _rect.left - chartRect.left;
          alignRight = chartRect.right - _rect.right;
        }

        if (verticalAlignWith) {
          var _elem = document.getElementById(verticalAlignWith);
          if (_elem) {
            var _rect2 = _elem.getBoundingClientRect();
            alignHeight = _rect2.height;
            alignTop = _rect2.top - chartRect.top;
            alignBottom = chartRect.bottom - _rect2.bottom;
            padAlign = false;
          }
        } else if (base) {
          var _rect3 = base.getBoundingClientRect();
          alignHeight = _rect3.height;
          alignTop = _rect3.top - chartRect.top;
          alignBottom = chartRect.bottom - _rect3.bottom;
        }

        this.setState({
          alignWidth: alignWidth,
          alignLeft: alignLeft,
          alignRight: alignRight,
          alignHeight: alignHeight,
          alignTop: alignTop,
          alignBottom: alignBottom,
          padAlign: padAlign
        });

        if (onMaxCount) {
          var maxCount = void 0;
          if (vertical) {
            maxCount = Math.floor(alignWidth / (4 * _utils.padding));
          } else {
            maxCount = Math.floor(alignHeight / (4 * _utils.padding));
          }
          if (maxCount !== this.state.maxCount) {
            this.setState({ maxCount: maxCount }, function () {
              onMaxCount(maxCount);
            });
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames,
          _this2 = this;

      var _props2 = this.props,
          a11yTitle = _props2.a11yTitle,
          className = _props2.className,
          full = _props2.full,
          loading = _props2.loading,
          vertical = _props2.vertical,
          props = _objectWithoutProperties(_props2, ['a11yTitle', 'className', 'full', 'loading', 'vertical']);

      delete props.horizontalAlignWith;
      delete props.onMaxCount;
      delete props.verticalAlignWith;
      var _state = this.state,
          alignBottom = _state.alignBottom,
          alignHeight = _state.alignHeight,
          alignLeft = _state.alignLeft,
          alignRight = _state.alignRight,
          alignTop = _state.alignTop,
          alignWidth = _state.alignWidth,
          padAlign = _state.padAlign;
      var intl = this.context.intl;

      var classes = (0, _classnames3.default)(CLASS_ROOT, (_classnames = {}, _defineProperty(_classnames, CLASS_ROOT + '--full', full), _defineProperty(_classnames, CLASS_ROOT + '--loading', loading), _defineProperty(_classnames, CLASS_ROOT + '--vertical', vertical), _classnames), className);

      // Align Axis children towards the Base|Layers|Chart
      var axisAlign = 'end';
      var children = _react.Children.map(this.props.children, function (child) {

        // name comparison is to work around webpack alias issues in development
        if (child && (child.type === _Axis2.default || child.type.name === 'Axis' || child.type === _MarkerLabel2.default || child.type.name === 'MarkerLabel')) {

          if (vertical) {
            child = _react2.default.cloneElement(child, {
              style: {
                marginLeft: padAlign ? alignLeft + _utils.padding : alignLeft,
                marginRight: padAlign ? alignRight + _utils.padding : alignRight
              },
              align: axisAlign
            });
          } else {
            child = _react2.default.cloneElement(child, {
              style: {
                // We set the height just for Safari due to:
                // http://stackoverflow.com/questions/35532987/
                //    heights-rendering-differently-in-chrome-and-firefox/
                //    35537510#35537510
                // Chrome seems to have addressed this already.
                height: padAlign ? alignHeight - 2 * _utils.padding : alignHeight,
                marginTop: padAlign ? alignTop + _utils.padding : alignTop,
                marginBottom: padAlign ? alignBottom + _utils.padding : alignBottom
              },
              align: axisAlign
            });
          }
        } else if (child && (child.type === _Layers2.default || child.type.name === 'Layers')) {

          child = _react2.default.cloneElement(child, {
            height: alignHeight,
            width: alignWidth,
            style: { left: alignLeft, top: alignTop }
          });
          axisAlign = 'start';
        } else if (child && (child.type === Chart || child.type.name === 'Chart' || child.type === _Base2.default || child.type.name === 'Base')) {

          if (child.type === _Base2.default) {
            var updatedChildren = traverseAndUpdateChildren(child.props.children);

            child = _react2.default.cloneElement(child, {
              children: updatedChildren
            });
          } else {
            child = _react2.default.cloneElement(child, {
              tabIndex: '-1'
            });
          }

          axisAlign = 'start';
        }

        return child;
      });

      if (loading) {
        children.push(_react2.default.createElement(
          'svg',
          { key: 'loading', className: classes,
            viewBox: '0 0 ' + alignWidth + ' ' + alignHeight },
          _react2.default.createElement('path', { d: 'M0,' + alignHeight / 2 + ' L' + alignWidth + ',' + alignHeight / 2 })
        ));
      }

      var ariaLabel = a11yTitle || _Intl2.default.getMessage(intl, 'Chart');

      return _react2.default.createElement(
        'div',
        _extends({ ref: function ref(_ref) {
            return _this2.chartRef = _ref;
          } }, props, { className: classes,
          'aria-label': ariaLabel, role: 'group' }),
        children
      );
    }
  }]);

  return Chart;
}(_react.Component);

Chart.displayName = 'Chart';
exports.default = Chart;


Chart.contextTypes = {
  intl: _propTypes2.default.object
};

Chart.propTypes = {
  a11yTitle: _propTypes2.default.string,
  full: _propTypes2.default.bool,
  horizontalAlignWith: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  onMaxCount: _propTypes2.default.func,
  vertical: _propTypes2.default.bool,
  verticalAlignWith: _propTypes2.default.string
};

exports.Axis = _Axis2.default;
exports.Layers = _Layers2.default;
exports.Base = _Base2.default;
exports.Grid = _Grid2.default;
exports.Area = _Area2.default;
exports.Line = _Line2.default;
exports.Bar = _Bar2.default;
exports.Marker = _Marker2.default;
exports.MarkerLabel = _MarkerLabel2.default;
exports.HotSpots = _HotSpots2.default;
exports.Range = _Range2.default;

/***/ }),

/***/ "./pages/app/app.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_chart_Chart__ = __webpack_require__("./node_modules/grommet/components/chart/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_grommet_components_chart_Chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_grommet_components_chart_Chart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_assets_purpleDark_jpg__ = __webpack_require__("./components/assets/purpleDark.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_assets_purpleDark_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_assets_purpleDark_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_assets_dark_jpg__ = __webpack_require__("./components/assets/dark.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_assets_dark_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_assets_dark_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleBox_jpg__ = __webpack_require__("./components/assets/purpleBox.jpg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleBox_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_assets_purpleBox_jpg__);
var _jsxFileName = "/home/tomasroaldsnes/Code/hodl-time/pages/app/app.js";

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


















var backgrounColor = 'neutral-3';
var backgrounColorSide = 'neutral-3';
var texture = __WEBPACK_IMPORTED_MODULE_14__components_assets_purpleDark_jpg___default.a;
var textureSide = __WEBPACK_IMPORTED_MODULE_16__components_assets_purpleBox_jpg___default.a;

var HodlApp =
/*#__PURE__*/
function (_Component) {
  _inherits(HodlApp, _Component);

  function HodlApp() {
    _classCallCheck(this, HodlApp);

    return _possibleConstructorReturn(this, (HodlApp.__proto__ || Object.getPrototypeOf(HodlApp)).apply(this, arguments));
  }

  _createClass(HodlApp, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        href: "https://freeiconshop.com/wp-content/uploads/edd/heart-flat.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "//cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.css",
        rel: "stylesheet",
        type: "text/css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charset: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "HODLtime! - Make money while saving."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,maximum-scale=1,minimal-ui",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "apple-mobile-web-app-capable",
        content: "yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "format-detection",
        content: "telephone=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: "#673AB8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_AppLayout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
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
          lineNumber: 61
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
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12_grommet_components_Card___default.a, {
        label: "Welcome",
        heading: "Sample Heading",
        description: "Sample description providing more details.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        justify: "stretch",
        align: "start",
        pad: "small",
        texture: texture,
        colorIndex: backgrounColor,
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        alignSelf: "start",
        pad: "small",
        align: "center",
        justify: "end",
        basis: "small",
        margin: "small",
        texture: texture,
        colorIndex: backgrounColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter___default.a, {
        type: "circle",
        label: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default.a, {
          value: 40,
          units: "ETH",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }),
        size: "small",
        colorIndex: "graph-2",
        value: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        tag: "h5",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Saved")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        alignSelf: "start",
        pad: "small",
        align: "center",
        justify: "end",
        basis: "small",
        margin: "small",
        colorIndex: backgrounColor,
        texture: texture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter___default.a, {
        type: "circle",
        label: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default.a, {
          value: 40,
          units: "ETH",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }),
        colorIndex: "graph-2",
        size: "small",
        value: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        tag: "h5",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, "Saved")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        alignSelf: "start",
        pad: "small",
        align: "center",
        justify: "end",
        basis: "small",
        margin: "small",
        texture: texture,
        colorIndex: backgrounColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_grommet_components_Meter___default.a, {
        type: "circle",
        label: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default.a, {
          value: 40,
          units: "ETH",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }),
        colorIndex: "graph-2",
        size: "small",
        value: 40,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        tag: "h5",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, "Saved")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        justify: "start",
        align: "stretch",
        pad: "none",
        basis: "end",
        direction: "column",
        texture: textureSide,
        colorIndex: "grey-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        alignSelf: "center",
        pad: "large",
        align: "center",
        justify: "center",
        basis: "full",
        direction: "column",
        colorIndex: backgrounColorSide,
        texture: textureSide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default.a, {
        value: 2,
        units: "ETH",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        tag: "h5",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "in Weakhand-fund")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        alignSelf: "start",
        pad: "large",
        align: "center",
        justify: "start",
        basis: "full",
        direction: "column",
        colorIndex: backgrounColorSide,
        texture: textureSide,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default.a, {
        value: 0.001,
        units: "ETH",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        tag: "h5",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, "Your share of fund")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_grommet_components_Box___default.a, {
        alignSelf: "center",
        pad: "medium",
        align: "center",
        justify: "center",
        direction: "column",
        basis: "full",
        flex: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_grommet_components_Value___default.a, {
        value: 13,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11_grommet_components_Heading___default.a, {
        tag: "h5",
        align: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, "Your total deposits"))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return HodlApp;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = HodlApp;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(backgrounColor, "backgrounColor", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app.js");
  reactHotLoader.register(backgrounColorSide, "backgrounColorSide", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app.js");
  reactHotLoader.register(texture, "texture", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app.js");
  reactHotLoader.register(textureSide, "textureSide", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app.js");
  reactHotLoader.register(HodlApp, "HodlApp", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app.js");
  reactHotLoader.register(_default, "default", "/home/tomasroaldsnes/Code/hodl-time/pages/app/app.js");
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/app/app")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.35c83a7d5d34868e78ca.hot-update.js.map