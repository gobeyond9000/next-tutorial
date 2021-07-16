self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options); // coming from build/babel/plugins/react-loadable-plugin.js

  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return /*#__PURE__*/_react["default"].createElement(resolve(state.loaded), props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Loadable");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\SLaSh068\\Desktop\\next.js\\pages\\posts\\index.js",
    _this = undefined;


 // import Dynamic from "next/dynamic";
// import PostHeader from "../../components/PostHeader";


var PostHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "components_PostHeader_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/PostHeader */ "./components/PostHeader.js"));
}, {
  loading: function loading() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 18
    }, _this);
  },
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/PostHeader */ "./components/PostHeader.js")];
    },
    modules: ["posts\\index.js -> " + "../../components/PostHeader"]
  }
});
_c2 = PostHeader;

function Posts(_ref) {
  var _this2 = this;

  var postData = _ref.postData;
  // console.log(postData);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostHeader, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), "This is Posts Page in Dev", postData && postData.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/posts/[id]",
            as: "/posts/".concat(item.id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 19
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 17
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: item.post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }, _this2)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_c3 = Posts;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Posts); // export async function getServerSideProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const postData = await res.json();
//   return {
//     props: {
//       postData,
//     },
//   };
// }

var _c, _c2, _c3;

$RefreshReg$(_c, "PostHeader$dynamic");
$RefreshReg$(_c2, "PostHeader");
$RefreshReg$(_c3, "Posts");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2xvYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3VzZS1zdWJzY3JpcHRpb24vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJub1NTUiIsImR5bmFtaWMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9sb2FkYWJsZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJpc1NlcnZlclNpZGUiLCJMb2FkYWJsZUluaXRpYWxpemVyIiwibG9hZGFibGVPcHRpb25zIiwid2VicGFjayIsIm1vZHVsZXMiLCJMb2FkaW5nIiwibG9hZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJlcnJvciIsImlzTG9hZGluZyIsInBhc3REZWxheSIsInRpbWVkT3V0IiwiZHluYW1pY09wdGlvbnMiLCJvcHRpb25zIiwibG9hZGFibGVGbiIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJsb2FkYWJsZUdlbmVyYXRlZCIsInNzciIsIkxvYWRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsIl91c2VTdWJzY3JpcHRpb24iLCJfbG9hZGFibGVDb250ZXh0IiwiQUxMX0lOSVRJQUxJWkVSUyIsIlJFQURZX0lOSVRJQUxJWkVSUyIsImluaXRpYWxpemVkIiwibG9hZCIsInByb21pc2UiLCJzdGF0ZSIsImxvYWRlZCIsInRoZW4iLCJlcnIiLCJyZXNvbHZlIiwiY3JlYXRlTG9hZGFibGVDb21wb25lbnQiLCJsb2FkRm4iLCJvcHRzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVsYXkiLCJ0aW1lb3V0Iiwic3Vic2NyaXB0aW9uIiwiaW5pdCIsInN1YiIsIkxvYWRhYmxlU3Vic2NyaXB0aW9uIiwiZ2V0Q3VycmVudFZhbHVlIiwiYmluZCIsInN1YnNjcmliZSIsInJldHJ5IiwibW9kdWxlSWRzIiwicHVzaCIsImlkcyIsIm1vZHVsZUlkIiwiaW5kZXhPZiIsIkxvYWRhYmxlQ29tcG9uZW50IiwicHJvcHMiLCJyZWYiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN1YnNjcmlwdGlvbiIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwibW9kdWxlTmFtZSIsInVzZU1lbW8iLCJwcmVsb2FkIiwiZm9yd2FyZFJlZiIsIl9sb2FkRm4iLCJfb3B0cyIsIl9jYWxsYmFja3MiLCJTZXQiLCJfZGVsYXkiLCJfdGltZW91dCIsIl9yZXMiLCJfY2xlYXJUaW1lb3V0cyIsIl9zdGF0ZSIsInJlcyIsInNldFRpbWVvdXQiLCJfdXBkYXRlIiwiX2VyciIsInBhcnRpYWwiLCJjYWxsYmFjayIsImNsZWFyVGltZW91dCIsImFkZCIsIkxvYWRhYmxlIiwiZmx1c2hJbml0aWFsaXplcnMiLCJpbml0aWFsaXplcnMiLCJwcm9taXNlcyIsImxlbmd0aCIsInBvcCIsImFsbCIsInByZWxvYWRBbGwiLCJyZXNvbHZlSW5pdGlhbGl6ZXJzIiwicmVqZWN0IiwicHJlbG9hZFJlYWR5IiwicmVzb2x2ZVByZWxvYWQiLCJ3aW5kb3ciLCJfX05FWFRfUFJFTE9BRFJFQURZIiwiX2RlZmF1bHQiLCJQb3N0SGVhZGVyIiwiUG9zdHMiLCJwb3N0RGF0YSIsInByb2Nlc3MiLCJtYXAiLCJpdGVtIiwiaWQiLCJ0aXRsZSIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7O0FDZmE7Ozs7Ozs7O0FBQUFBLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxhQUFBLEdBQWNDLEtBQWQ7QUFBb0JELGVBQUEsR0FBZ0JFLE9BQWhCOztBQUF3QixJQUFJQyxNQUFNLEdBQUNDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDRDQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlDLFNBQVMsR0FBQ0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsd0VBQUQsQ0FBUixDQUFwQzs7QUFBNEQsU0FBU0Qsc0JBQVQsQ0FBZ0NHLEdBQWhDLEVBQW9DO0FBQUMsU0FBT0EsR0FBRyxJQUFFQSxHQUFHLENBQUNDLFVBQVQsR0FBb0JELEdBQXBCLEdBQXdCO0FBQUMsZUFBUUE7QUFBVCxHQUEvQjtBQUE4Qzs7QUFBQSxJQUFNRSxZQUFZLFFBQWxCOztBQUErQyxTQUFTUixLQUFULENBQWVTLG1CQUFmLEVBQW1DQyxlQUFuQyxFQUFtRDtBQUFDO0FBQ3ZYLFNBQU9BLGVBQWUsQ0FBQ0MsT0FBdkI7QUFBK0IsU0FBT0QsZUFBZSxDQUFDRSxPQUF2QixDQUR1VixDQUN4VDs7QUFDOUQsTUFBRyxDQUFDSixZQUFKLEVBQWlCO0FBQUMsV0FBT0MsbUJBQW1CLENBQUNDLGVBQUQsQ0FBMUI7QUFBNkM7O0FBQUEsTUFBTUcsT0FBTyxHQUFDSCxlQUFlLENBQUNJLE9BQTlCLENBRnVULENBRWpSOztBQUNyRyxTQUFNO0FBQUEsV0FBSSxhQUFhWixNQUFNLFdB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QztBQUNBOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxnRkFBZTtBQUNyQyxZQUFZLG1CQUFPLENBQUMsNENBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7O0FBR0gscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUEsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0NBQWdDOztBQUVuQztBQUNBOztBQUVBLHVCQUF1QjtBQUN2QixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzFIYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLHdKQUFpRTtBQUNuRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy45YzNlYTQxMzk2Njc2MzhjNTA4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9TU1I9bm9TU1I7ZXhwb3J0cy5kZWZhdWx0PWR5bmFtaWM7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9sb2FkYWJsZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IGlzU2VydmVyU2lkZT10eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplcixsb2FkYWJsZU9wdGlvbnMpey8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbmRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7Ly8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG5pZighaXNTZXJ2ZXJTaWRlKXtyZXR1cm4gTG9hZGFibGVJbml0aWFsaXplcihsb2FkYWJsZU9wdGlvbnMpO31jb25zdCBMb2FkaW5nPWxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nOy8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxucmV0dXJuKCk9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcse2Vycm9yOm51bGwsaXNMb2FkaW5nOnRydWUscGFzdERlbGF5OmZhbHNlLHRpbWVkT3V0OmZhbHNlfSk7fS8vIGZ1bmN0aW9uIGR5bmFtaWM8UCA9IHt9LCBPIGV4dGVuZHMgRHluYW1pY09wdGlvbnM+KG9wdGlvbnM6IE8pOlxuZnVuY3Rpb24gZHluYW1pYyhkeW5hbWljT3B0aW9ucyxvcHRpb25zKXtsZXQgbG9hZGFibGVGbj1fbG9hZGFibGUuZGVmYXVsdDtsZXQgbG9hZGFibGVPcHRpb25zPXsvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxubG9hZGluZzooe2Vycm9yLGlzTG9hZGluZyxwYXN0RGVsYXl9KT0+e2lmKCFwYXN0RGVsYXkpcmV0dXJuIG51bGw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZihpc0xvYWRpbmcpe3JldHVybiBudWxsO31pZihlcnJvcil7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsbnVsbCxlcnJvci5tZXNzYWdlLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIixudWxsKSxlcnJvci5zdGFjayk7fX1yZXR1cm4gbnVsbDt9fTsvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbi8vIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkga2VwdCBmb3IgdGhlIGVkZ2UgY2FzZSB3aGVyZSBzb21lb25lIGlzIHBhc3NpbmcgaW4gYSBwcm9taXNlIGFzIGZpcnN0IGFyZ3VtZW50XG4vLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbi8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbmlmKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSl7bG9hZGFibGVPcHRpb25zLmxvYWRlcj0oKT0+ZHluYW1pY09wdGlvbnM7Ly8gU3VwcG9ydCBmb3IgaGF2aW5nIGltcG9ydCBhcyBhIGZ1bmN0aW9uLCBlZzogZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG59ZWxzZSBpZih0eXBlb2YgZHluYW1pY09wdGlvbnM9PT0nZnVuY3Rpb24nKXtsb2FkYWJsZU9wdGlvbnMubG9hZGVyPWR5bmFtaWNPcHRpb25zOy8vIFN1cHBvcnQgZm9yIGhhdmluZyBmaXJzdCBhcmd1bWVudCBiZWluZyBvcHRpb25zLCBlZzogZHluYW1pYyh7bG9hZGVyOiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyl9KVxufWVsc2UgaWYodHlwZW9mIGR5bmFtaWNPcHRpb25zPT09J29iamVjdCcpe2xvYWRhYmxlT3B0aW9ucz17Li4ubG9hZGFibGVPcHRpb25zLC4uLmR5bmFtaWNPcHRpb25zfTt9Ly8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxubG9hZGFibGVPcHRpb25zPXsuLi5sb2FkYWJsZU9wdGlvbnMsLi4ub3B0aW9uc307Ly8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbmlmKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCl7bG9hZGFibGVPcHRpb25zPXsuLi5sb2FkYWJsZU9wdGlvbnMsLi4ubG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkfTtkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO30vLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbmlmKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyPT09J2Jvb2xlYW4nKXtpZighbG9hZGFibGVPcHRpb25zLnNzcil7ZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7cmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sbG9hZGFibGVPcHRpb25zKTt9ZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7fXJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkxvYWRhYmxlQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBMb2FkYWJsZUNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQobnVsbCk7ZXhwb3J0cy5Mb2FkYWJsZUNvbnRleHQ9TG9hZGFibGVDb250ZXh0O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtMb2FkYWJsZUNvbnRleHQuZGlzcGxheU5hbWU9J0xvYWRhYmxlQ29udGV4dCc7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9hZGFibGUtY29udGV4dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXNlU3Vic2NyaXB0aW9uPXJlcXVpcmUoXCJ1c2Utc3Vic2NyaXB0aW9uXCIpO3ZhciBfbG9hZGFibGVDb250ZXh0PXJlcXVpcmUoXCIuL2xvYWRhYmxlLWNvbnRleHRcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vKipcbkBjb3B5cmlnaHQgKGMpIDIwMTctcHJlc2VudCBKYW1lcyBLeWxlIDxtZUB0aGVqYW1lc2t5bGUuY29tPlxuIE1JVCBMaWNlbnNlXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nXG5hIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcblwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xud2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvXG5wZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG9cbnRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbkVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbk5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkVcbkxJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT05cbk9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTlxuV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkVcbiovIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW1pZWJ1aWxkcy9yZWFjdC1sb2FkYWJsZS9ibG9iL3Y1LjUuMC9zcmMvaW5kZXguanNcbi8vIE1vZGlmaWVkIHRvIGJlIGNvbXBhdGlibGUgd2l0aCB3ZWJwYWNrIDQgLyBOZXh0LmpzXG5jb25zdCBBTExfSU5JVElBTElaRVJTPVtdO2NvbnN0IFJFQURZX0lOSVRJQUxJWkVSUz1bXTtsZXQgaW5pdGlhbGl6ZWQ9ZmFsc2U7ZnVuY3Rpb24gbG9hZChsb2FkZXIpe2xldCBwcm9taXNlPWxvYWRlcigpO2xldCBzdGF0ZT17bG9hZGluZzp0cnVlLGxvYWRlZDpudWxsLGVycm9yOm51bGx9O3N0YXRlLnByb21pc2U9cHJvbWlzZS50aGVuKGxvYWRlZD0+e3N0YXRlLmxvYWRpbmc9ZmFsc2U7c3RhdGUubG9hZGVkPWxvYWRlZDtyZXR1cm4gbG9hZGVkO30pLmNhdGNoKGVycj0+e3N0YXRlLmxvYWRpbmc9ZmFsc2U7c3RhdGUuZXJyb3I9ZXJyO3Rocm93IGVycjt9KTtyZXR1cm4gc3RhdGU7fWZ1bmN0aW9uIHJlc29sdmUob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmouZGVmYXVsdDpvYmo7fWZ1bmN0aW9uIGNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50KGxvYWRGbixvcHRpb25zKXtsZXQgb3B0cz1PYmplY3QuYXNzaWduKHtsb2FkZXI6bnVsbCxsb2FkaW5nOm51bGwsZGVsYXk6MjAwLHRpbWVvdXQ6bnVsbCx3ZWJwYWNrOm51bGwsbW9kdWxlczpudWxsfSxvcHRpb25zKTtsZXQgc3Vic2NyaXB0aW9uPW51bGw7ZnVuY3Rpb24gaW5pdCgpe2lmKCFzdWJzY3JpcHRpb24pe2NvbnN0IHN1Yj1uZXcgTG9hZGFibGVTdWJzY3JpcHRpb24obG9hZEZuLG9wdHMpO3N1YnNjcmlwdGlvbj17Z2V0Q3VycmVudFZhbHVlOnN1Yi5nZXRDdXJyZW50VmFsdWUuYmluZChzdWIpLHN1YnNjcmliZTpzdWIuc3Vic2NyaWJlLmJpbmQoc3ViKSxyZXRyeTpzdWIucmV0cnkuYmluZChzdWIpLHByb21pc2U6c3ViLnByb21pc2UuYmluZChzdWIpfTt9cmV0dXJuIHN1YnNjcmlwdGlvbi5wcm9taXNlKCk7fS8vIFNlcnZlciBvbmx5XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe0FMTF9JTklUSUFMSVpFUlMucHVzaChpbml0KTt9Ly8gQ2xpZW50IG9ubHlcbmlmKCFpbml0aWFsaXplZCYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiZ0eXBlb2Ygb3B0cy53ZWJwYWNrPT09J2Z1bmN0aW9uJyl7Y29uc3QgbW9kdWxlSWRzPW9wdHMud2VicGFjaygpO1JFQURZX0lOSVRJQUxJWkVSUy5wdXNoKGlkcz0+e2Zvcihjb25zdCBtb2R1bGVJZCBvZiBtb2R1bGVJZHMpe2lmKGlkcy5pbmRleE9mKG1vZHVsZUlkKSE9PS0xKXtyZXR1cm4gaW5pdCgpO319fSk7fWNvbnN0IExvYWRhYmxlQ29tcG9uZW50PShwcm9wcyxyZWYpPT57aW5pdCgpO2NvbnN0IGNvbnRleHQ9X3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfbG9hZGFibGVDb250ZXh0LkxvYWRhYmxlQ29udGV4dCk7Y29uc3Qgc3RhdGU9KDAsX3VzZVN1YnNjcmlwdGlvbi51c2VTdWJzY3JpcHRpb24pKHN1YnNjcmlwdGlvbik7X3JlYWN0LmRlZmF1bHQudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsKCk9Pih7cmV0cnk6c3Vic2NyaXB0aW9uLnJldHJ5fSksW10pO2lmKGNvbnRleHQmJkFycmF5LmlzQXJyYXkob3B0cy5tb2R1bGVzKSl7b3B0cy5tb2R1bGVzLmZvckVhY2gobW9kdWxlTmFtZT0+e2NvbnRleHQobW9kdWxlTmFtZSk7fSk7fXJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57aWYoc3RhdGUubG9hZGluZ3x8c3RhdGUuZXJyb3Ipe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KG9wdHMubG9hZGluZyx7aXNMb2FkaW5nOnN0YXRlLmxvYWRpbmcscGFzdERlbGF5OnN0YXRlLnBhc3REZWxheSx0aW1lZE91dDpzdGF0ZS50aW1lZE91dCxlcnJvcjpzdGF0ZS5lcnJvcixyZXRyeTpzdWJzY3JpcHRpb24ucmV0cnl9KTt9ZWxzZSBpZihzdGF0ZS5sb2FkZWQpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlc29sdmUoc3RhdGUubG9hZGVkKSxwcm9wcyk7fWVsc2V7cmV0dXJuIG51bGw7fX0sW3Byb3BzLHN0YXRlXSk7fTtMb2FkYWJsZUNvbXBvbmVudC5wcmVsb2FkPSgpPT5pbml0KCk7TG9hZGFibGVDb21wb25lbnQuZGlzcGxheU5hbWU9J0xvYWRhYmxlQ29tcG9uZW50JztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihMb2FkYWJsZUNvbXBvbmVudCk7fWNsYXNzIExvYWRhYmxlU3Vic2NyaXB0aW9ue2NvbnN0cnVjdG9yKGxvYWRGbixvcHRzKXt0aGlzLl9sb2FkRm49bG9hZEZuO3RoaXMuX29wdHM9b3B0czt0aGlzLl9jYWxsYmFja3M9bmV3IFNldCgpO3RoaXMuX2RlbGF5PW51bGw7dGhpcy5fdGltZW91dD1udWxsO3RoaXMucmV0cnkoKTt9cHJvbWlzZSgpe3JldHVybiB0aGlzLl9yZXMucHJvbWlzZTt9cmV0cnkoKXt0aGlzLl9jbGVhclRpbWVvdXRzKCk7dGhpcy5fcmVzPXRoaXMuX2xvYWRGbih0aGlzLl9vcHRzLmxvYWRlcik7dGhpcy5fc3RhdGU9e3Bhc3REZWxheTpmYWxzZSx0aW1lZE91dDpmYWxzZX07Y29uc3R7X3JlczpyZXMsX29wdHM6b3B0c309dGhpcztpZihyZXMubG9hZGluZyl7aWYodHlwZW9mIG9wdHMuZGVsYXk9PT0nbnVtYmVyJyl7aWYob3B0cy5kZWxheT09PTApe3RoaXMuX3N0YXRlLnBhc3REZWxheT10cnVlO31lbHNle3RoaXMuX2RlbGF5PXNldFRpbWVvdXQoKCk9Pnt0aGlzLl91cGRhdGUoe3Bhc3REZWxheTp0cnVlfSk7fSxvcHRzLmRlbGF5KTt9fWlmKHR5cGVvZiBvcHRzLnRpbWVvdXQ9PT0nbnVtYmVyJyl7dGhpcy5fdGltZW91dD1zZXRUaW1lb3V0KCgpPT57dGhpcy5fdXBkYXRlKHt0aW1lZE91dDp0cnVlfSk7fSxvcHRzLnRpbWVvdXQpO319dGhpcy5fcmVzLnByb21pc2UudGhlbigoKT0+e3RoaXMuX3VwZGF0ZSh7fSk7dGhpcy5fY2xlYXJUaW1lb3V0cygpO30pLmNhdGNoKF9lcnI9Pnt0aGlzLl91cGRhdGUoe30pO3RoaXMuX2NsZWFyVGltZW91dHMoKTt9KTt0aGlzLl91cGRhdGUoe30pO31fdXBkYXRlKHBhcnRpYWwpe3RoaXMuX3N0YXRlPXsuLi50aGlzLl9zdGF0ZSxlcnJvcjp0aGlzLl9yZXMuZXJyb3IsbG9hZGVkOnRoaXMuX3Jlcy5sb2FkZWQsbG9hZGluZzp0aGlzLl9yZXMubG9hZGluZywuLi5wYXJ0aWFsfTt0aGlzLl9jYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjaz0+Y2FsbGJhY2soKSk7fV9jbGVhclRpbWVvdXRzKCl7Y2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5KTtjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7fWdldEN1cnJlbnRWYWx1ZSgpe3JldHVybiB0aGlzLl9zdGF0ZTt9c3Vic2NyaWJlKGNhbGxiYWNrKXt0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtyZXR1cm4oKT0+e3RoaXMuX2NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO307fX1mdW5jdGlvbiBMb2FkYWJsZShvcHRzKXtyZXR1cm4gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZCxvcHRzKTt9ZnVuY3Rpb24gZmx1c2hJbml0aWFsaXplcnMoaW5pdGlhbGl6ZXJzLGlkcyl7bGV0IHByb21pc2VzPVtdO3doaWxlKGluaXRpYWxpemVycy5sZW5ndGgpe2xldCBpbml0PWluaXRpYWxpemVycy5wb3AoKTtwcm9taXNlcy5wdXNoKGluaXQoaWRzKSk7fXJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKT0+e2lmKGluaXRpYWxpemVycy5sZW5ndGgpe3JldHVybiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsaWRzKTt9fSk7fUxvYWRhYmxlLnByZWxvYWRBbGw9KCk9PntyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVJbml0aWFsaXplcnMscmVqZWN0KT0+e2ZsdXNoSW5pdGlhbGl6ZXJzKEFMTF9JTklUSUFMSVpFUlMpLnRoZW4ocmVzb2x2ZUluaXRpYWxpemVycyxyZWplY3QpO30pO307TG9hZGFibGUucHJlbG9hZFJlYWR5PShpZHM9W10pPT57cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmVQcmVsb2FkPT57Y29uc3QgcmVzPSgpPT57aW5pdGlhbGl6ZWQ9dHJ1ZTtyZXR1cm4gcmVzb2x2ZVByZWxvYWQoKTt9Oy8vIFdlIGFsd2F5cyB3aWxsIHJlc29sdmUsIGVycm9ycyBzaG91bGQgYmUgaGFuZGxlZCB3aXRoaW4gbG9hZGluZyBVSXMuXG5mbHVzaEluaXRpYWxpemVycyhSRUFEWV9JTklUSUFMSVpFUlMsaWRzKS50aGVuKHJlcyxyZXMpO30pO307aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWT1Mb2FkYWJsZS5wcmVsb2FkUmVhZHk7fXZhciBfZGVmYXVsdD1Mb2FkYWJsZTtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkYWJsZS5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IER5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG4vLyBpbXBvcnQgUG9zdEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0SGVhZGVyXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuY29uc3QgUG9zdEhlYWRlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vLi4vY29tcG9uZW50cy9Qb3N0SGVhZGVyXCIpLCB7XHJcbiAgbG9hZGluZzogKCkgPT4gPGgzPkxvYWRpbmcuLi48L2gzPixcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuZnVuY3Rpb24gUG9zdHMoeyBwb3N0RGF0YSB9KSB7XHJcbiAgLy8gY29uc29sZS5sb2cocG9zdERhdGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UG9zdEhlYWRlciAvPlxyXG4gICAgICB7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfSEVBREVSfVxyXG4gICAgICB7cG9zdERhdGEgJiZcclxuICAgICAgICBwb3N0RGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3RzL1tpZF1cIiBhcz17YC9wb3N0cy8ke2l0ZW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPntpdGVtLnBvc3R9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfQkFTRV9VUkx9LyR7cHJvY2Vzcy5lbnYuUE9TVH1gKTtcclxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3REYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4vLyAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgcG9zdERhdGEsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2R5bmFtaWMnKVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHZ1bmRlZmluZWRcbiAqIHVzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciByZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbi8vXG4vLyBJbiBvcmRlciB0byBhdm9pZCByZW1vdmluZyBhbmQgcmUtYWRkaW5nIHN1YnNjcmlwdGlvbnMgZWFjaCB0aW1lIHRoaXMgaG9vayBpcyBjYWxsZWQsXG4vLyB0aGUgcGFyYW1ldGVycyBwYXNzZWQgdG8gdGhpcyBob29rIHNob3VsZCBiZSBtZW1vaXplZCBpbiBzb21lIHdheeKAk1xuLy8gZWl0aGVyIGJ5IHdyYXBwaW5nIHRoZSBlbnRpcmUgcGFyYW1zIG9iamVjdCB3aXRoIHVzZU1lbW8oKVxuLy8gb3IgYnkgd3JhcHBpbmcgdGhlIGluZGl2aWR1YWwgY2FsbGJhY2tzIHdpdGggdXNlQ2FsbGJhY2soKS5cblxuZnVuY3Rpb24gdXNlU3Vic2NyaXB0aW9uKF9yZWYpIHtcbiAgdmFyIGdldEN1cnJlbnRWYWx1ZSA9IF9yZWYuZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlID0gX3JlZi5zdWJzY3JpYmU7XG5cbiAgLy8gUmVhZCB0aGUgY3VycmVudCB2YWx1ZSBmcm9tIG91ciBzdWJzY3JpcHRpb24uXG4gIC8vIFdoZW4gdGhpcyB2YWx1ZSBjaGFuZ2VzLCB3ZSdsbCBzY2hlZHVsZSBhbiB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gYWxzbyBzdG9yZSB0aGUgaG9vayBwYXJhbXMgc28gdGhhdCB3ZSBjYW4gY2hlY2sgZm9yIHN0YWxlbmVzcy5cbiAgLy8gKFNlZSB0aGUgY29tbWVudCBpbiBjaGVja0ZvclVwZGF0ZXMoKSBiZWxvdyBmb3IgbW9yZSBpbmZvLilcbiAgdmFyIF91c2VTdGF0ZSA9IHJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q3VycmVudFZhbHVlOiBnZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICAgIHZhbHVlOiBnZXRDdXJyZW50VmFsdWUoKVxuICAgIH07XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWVUb1JldHVybiA9IHN0YXRlLnZhbHVlOyAvLyBJZiBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZCBzaW5jZSBvdXIgbGFzdCByZW5kZXIsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIGl0cyBjdXJyZW50IHZhbHVlLlxuXG4gIGlmIChzdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBzdGF0ZS5zdWJzY3JpYmUgIT09IHN1YnNjcmliZSkge1xuICAgIC8vIElmIHRoZSBzdWJzY3JpcHRpb24gaGFzIGJlZW4gdXBkYXRlZCwgd2UnbGwgc2NoZWR1bGUgYW5vdGhlciB1cGRhdGUgd2l0aCBSZWFjdC5cbiAgICAvLyBSZWFjdCB3aWxsIHByb2Nlc3MgdGhpcyB1cGRhdGUgaW1tZWRpYXRlbHksIHNvIHRoZSBvbGQgc3Vic2NyaXB0aW9uIHZhbHVlIHdvbid0IGJlIGNvbW1pdHRlZC5cbiAgICAvLyBJdCBpcyBzdGlsbCBuaWNlIHRvIGF2b2lkIHJldHVybmluZyBhIG1pc21hdGNoZWQgdmFsdWUgdGhvdWdoLCBzbyBsZXQncyBvdmVycmlkZSB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIHZhbHVlVG9SZXR1cm4gPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICBzZXRTdGF0ZSh7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IHZhbHVlVG9SZXR1cm5cbiAgICB9KTtcbiAgfSAvLyBEaXNwbGF5IHRoZSBjdXJyZW50IHZhbHVlIGZvciB0aGlzIGhvb2sgaW4gUmVhY3QgRGV2VG9vbHMuXG5cblxuICByZWFjdC51c2VEZWJ1Z1ZhbHVlKHZhbHVlVG9SZXR1cm4pOyAvLyBJdCBpcyBpbXBvcnRhbnQgbm90IHRvIHN1YnNjcmliZSB3aGlsZSByZW5kZXJpbmcgYmVjYXVzZSB0aGlzIGNhbiBsZWFkIHRvIG1lbW9yeSBsZWFrcy5cbiAgLy8gKExlYXJuIG1vcmUgYXQgcmVhY3Rqcy5vcmcvZG9jcy9zdHJpY3QtbW9kZS5odG1sI2RldGVjdGluZy11bmV4cGVjdGVkLXNpZGUtZWZmZWN0cylcbiAgLy8gSW5zdGVhZCwgd2Ugd2FpdCB1bnRpbCB0aGUgY29tbWl0IHBoYXNlIHRvIGF0dGFjaCBvdXIgaGFuZGxlci5cbiAgLy9cbiAgLy8gV2UgaW50ZW50aW9uYWxseSB1c2UgYSBwYXNzaXZlIGVmZmVjdCAodXNlRWZmZWN0KSByYXRoZXIgdGhhbiBhIHN5bmNocm9ub3VzIG9uZSAodXNlTGF5b3V0RWZmZWN0KVxuICAvLyBzbyB0aGF0IHdlIGRvbid0IHN0cmV0Y2ggdGhlIGNvbW1pdCBwaGFzZS5cbiAgLy8gVGhpcyBhbHNvIGhhcyBhbiBhZGRlZCBiZW5lZml0IHdoZW4gbXVsdGlwbGUgY29tcG9uZW50cyBhcmUgc3Vic2NyaWJlZCB0byB0aGUgc2FtZSBzb3VyY2U6XG4gIC8vIEl0IGFsbG93cyBlYWNoIG9mIHRoZSBldmVudCBoYW5kbGVycyB0byBzYWZlbHkgc2NoZWR1bGUgd29yayB3aXRob3V0IHBvdGVudGlhbGx5IHJlbW92aW5nIGFuIGFub3RoZXIgaGFuZGxlci5cbiAgLy8gKExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2sweXZyNTk3MG8pXG5cbiAgcmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlkVW5zdWJzY3JpYmUgPSBmYWxzZTtcblxuICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZXZlbiBhZnRlciBiZWluZyB1bnN1YnNjcmliZWQsXG4gICAgICAvLyBpZiBpdCdzIHJlbW92ZWQgYXMgYSByZXN1bHQgb2YgYSBzdWJzY3JpcHRpb24gZXZlbnQvdXBkYXRlLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCBSZWFjdCB3aWxsIGxvZyBhIERFViB3YXJuaW5nIGFib3V0IGFuIHVwZGF0ZSBmcm9tIGFuIHVubW91bnRlZCBjb21wb25lbnQuXG4gICAgICAvLyBXZSBjYW4gYXZvaWQgdHJpZ2dlcmluZyB0aGF0IHdhcm5pbmcgd2l0aCB0aGlzIGNoZWNrLlxuICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gV2UgdXNlIGEgc3RhdGUgdXBkYXRlciBmdW5jdGlvbiB0byBhdm9pZCBzY2hlZHVsaW5nIHdvcmsgZm9yIGEgc3RhbGUgc291cmNlLlxuICAgICAgLy8gSG93ZXZlciBpdCdzIGltcG9ydGFudCB0byBlYWdlcmx5IHJlYWQgdGhlIGN1cnJlbnRseSB2YWx1ZSxcbiAgICAgIC8vIHNvIHRoYXQgYWxsIHNjaGVkdWxlZCB3b3JrIHNoYXJlcyB0aGUgc2FtZSB2YWx1ZSAoaW4gdGhlIGV2ZW50IG9mIG11bHRpcGxlIHN1YnNjcmlwdGlvbnMpLlxuICAgICAgLy8gVGhpcyBhdm9pZHMgdmlzdWFsIFwidGVhcmluZ1wiIHdoZW4gYSBtdXRhdGlvbiBoYXBwZW5zIGR1cmluZyBhIChjb25jdXJyZW50KSByZW5kZXIuXG5cblxuICAgICAgdmFyIHZhbHVlID0gZ2V0Q3VycmVudFZhbHVlKCk7XG4gICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIC8vIElnbm9yZSB2YWx1ZXMgZnJvbSBzdGFsZSBzb3VyY2VzIVxuICAgICAgICAvLyBTaW5jZSB3ZSBzdWJzY3JpYmUgYW4gdW5zdWJzY3JpYmUgaW4gYSBwYXNzaXZlIGVmZmVjdCxcbiAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgY2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIGZvciBhIHN0YWxlIChwcmV2aW91cykgc3Vic2NyaXB0aW9uLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGF2b2lkcyBzY2hlZHVsaW5nIGFuIHVwZGF0ZSBmb3IgdGhhdCBzdGFsZSBzdWJzY3JpcHRpb24uXG4gICAgICAgIGlmIChwcmV2U3RhdGUuZ2V0Q3VycmVudFZhbHVlICE9PSBnZXRDdXJyZW50VmFsdWUgfHwgcHJldlN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgICAgfSAvLyBTb21lIHN1YnNjcmlwdGlvbnMgd2lsbCBhdXRvLWludm9rZSB0aGUgaGFuZGxlciwgZXZlbiBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQuXG4gICAgICAgIC8vIElmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgbm8gdXBkYXRlIGlzIG5lZWRlZC5cbiAgICAgICAgLy8gUmV0dXJuIHN0YXRlIGFzLWlzIHNvIFJlYWN0IGNhbiBiYWlsIG91dCBhbmQgYXZvaWQgYW4gdW5uZWNlc3NhcnkgcmVuZGVyLlxuXG5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoY2hlY2tGb3JVcGRhdGVzKTsgLy8gQmVjYXVzZSB3ZSdyZSBzdWJzY3JpYmluZyBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBhbiB1cGRhdGUgaGFzIG9jY3VycmVkIGJldHdlZW4gcmVuZGVyIGFuZCBvdXIgZWZmZWN0IGhhbmRsZXIuXG4gICAgLy8gQ2hlY2sgZm9yIHRoaXMgYW5kIHNjaGVkdWxlIGFuIHVwZGF0ZSBpZiB3b3JrIGhhcyBvY2N1cnJlZC5cblxuICAgIGNoZWNrRm9yVXBkYXRlcygpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtnZXRDdXJyZW50VmFsdWUsIHN1YnNjcmliZV0pOyAvLyBSZXR1cm4gdGhlIGN1cnJlbnQgdmFsdWUgZm9yIG91ciBjYWxsZXIgdG8gdXNlIHdoaWxlIHJlbmRlcmluZy5cblxuICByZXR1cm4gdmFsdWVUb1JldHVybjtcbn1cblxuZXhwb3J0cy51c2VTdWJzY3JpcHRpb24gPSB1c2VTdWJzY3JpcHRpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvdXNlLXN1YnNjcmlwdGlvbi5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9