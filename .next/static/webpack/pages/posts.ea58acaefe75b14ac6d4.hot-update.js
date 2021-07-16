self["webpackHotUpdate_N_E"]("pages/posts",{

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
  return __webpack_require__.e(/*! import() */ "components_PostHeader_js").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/PostHeader */ "./components/PostHeader.js")).then(function (mod) {
    return mod.PostHeader;
  });
}, {
  loading: function loading() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 20
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
      lineNumber: 17,
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
              lineNumber: 25,
              columnNumber: 19
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 17
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 15
        }, _this2), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: item.post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 15
        }, _this2)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this2);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdEhlYWRlciIsImR5bmFtaWMiLCJ0aGVuIiwibW9kIiwibG9hZGluZyIsInNzciIsIlBvc3RzIiwicG9zdERhdGEiLCJwcm9jZXNzIiwibWFwIiwiaXRlbSIsImlkIiwidGl0bGUiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7O0FBQ0E7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQ3hCO0FBQUEsU0FBTSx1TEFBc0NDLElBQXRDLENBQTJDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNILFVBQWI7QUFBQSxHQUEzQyxDQUFOO0FBQUEsQ0FEd0IsRUFFeEI7QUFDRUksU0FBTyxFQUFFO0FBQUEsd0JBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBTjtBQUFBLEdBRFg7QUFFRUMsS0FBRyxFQUFFLEtBRlA7QUFBQTtBQUFBO0FBQUEsa0NBRGEsK0RBQ2I7QUFBQTtBQUFBLHNDQURhLDZCQUNiO0FBQUE7QUFBQSxDQUZ3QixDQUExQjtNQUFNTCxVOztBQU9OLFNBQVNNLEtBQVQsT0FBNkI7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDM0I7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdDLDJCQUZILEVBR0dELFFBQVEsSUFDUEEsUUFBUSxDQUFDRSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLDBCQUNFO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsYUFBWDtBQUF5QixjQUFFLG1CQUFZQSxJQUFJLENBQUNDLEVBQWpCLENBQTNCO0FBQUEsbUNBQ0U7QUFBQSx3QkFBSUQsSUFBSSxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQU1FO0FBQUEsb0JBQUlGLElBQUksQ0FBQ0c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5GO0FBQUEsU0FBdUJILElBQUksQ0FBQ0MsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQVVELEtBWEQsQ0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7TUFyQlFMLEs7O0FBdUJULCtEQUFlQSxLQUFmLEUsQ0FZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuZWE1OGFjYWVmZTc1YjE0YWM2ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgRHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbi8vIGltcG9ydCBQb3N0SGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RIZWFkZXJcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5jb25zdCBQb3N0SGVhZGVyID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCIuLi8uLi9jb21wb25lbnRzL1Bvc3RIZWFkZXJcIikudGhlbigobW9kKSA9PiBtb2QuUG9zdEhlYWRlciksXHJcbiAge1xyXG4gICAgbG9hZGluZzogKCkgPT4gPGgzPkxvYWRpbmcuLi48L2gzPixcclxuICAgIHNzcjogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5mdW5jdGlvbiBQb3N0cyh7IHBvc3REYXRhIH0pIHtcclxuICAvLyBjb25zb2xlLmxvZyhwb3N0RGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQb3N0SGVhZGVyIC8+XHJcbiAgICAgIHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19IRUFERVJ9XHJcbiAgICAgIHtwb3N0RGF0YSAmJlxyXG4gICAgICAgIHBvc3REYXRhLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdHMvW2lkXVwiIGFzPXtgL3Bvc3RzLyR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0udGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0ucG9zdH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkFQSV9CQVNFX1VSTH0vJHtwcm9jZXNzLmVudi5QT1NUfWApO1xyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdERhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XHJcbi8vICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBwb3N0RGF0YSxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9