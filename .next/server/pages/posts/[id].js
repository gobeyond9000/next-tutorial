(function() {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\SLaSh068\\Desktop\\next.js\\pages\\posts\\[id].js";



function PostId({
  data
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: "Page is Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 16
    }, this);
  }

  console.log(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: data.body
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/images/back.jpg",
      alt: "back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (PostId);
async function getStaticPaths() {
  const paths = ["/posts/1", "/posts/2", "/posts/3"];
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps({
  query,
  params
}) {
  const {
    id
  } = query || params;
  const res = await fetch(`${process.env.API_BASE_URL}/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  };
} // export async function getServerSideProps({ query }) {
//   const { id } = query;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvcG9zdHMvW2lkXS5qcyIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUG9zdElkIiwiZGF0YSIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJib2R5IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJxdWVyeSIsInBhcmFtcyIsImlkIiwicmVzIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX0JBU0VfVVJMIiwianNvbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQjtBQUFFQztBQUFGLENBQWhCLEVBQTBCO0FBQ3RCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ25CLHdCQUFPO0FBQUssZUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUNIQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0EsSUFBSSxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVNO0FBQUEsZ0JBQUlOLElBQUksQ0FBQ087QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk4sZUFHTTtBQUFLLFNBQUcsRUFBRSxrQkFBVjtBQUE4QixTQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0FBRUQsK0RBQWVSLE1BQWY7QUFFTyxlQUFlUyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLEtBQUssR0FBRyxDQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLFVBQXpCLENBQWQ7QUFDQSxTQUFPO0FBQUVBLFNBQUY7QUFBU0MsWUFBUSxFQUFFO0FBQW5CLEdBQVA7QUFDRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUMsT0FBRjtBQUFTQztBQUFULENBQTlCLEVBQWlEO0FBQ3RELFFBQU07QUFBRUM7QUFBRixNQUFTRixLQUFLLElBQUlDLE1BQXhCO0FBQ0EsUUFBTUUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBYSxVQUFTTCxFQUFHLEVBQXpDLENBQXZCO0FBQ0EsUUFBTWQsSUFBSSxHQUFHLE1BQU1lLEdBQUcsQ0FBQ0ssSUFBSixFQUFuQjtBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xyQjtBQURLO0FBREYsR0FBUDtBQUtELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJOzs7Ozs7Ozs7OztBQzdDQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wb3N0cy9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFBvc3RJZCh7IGRhdGEgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJcIj5QYWdlIGlzIExvYWRpbmcuLi48L2Rpdj5cclxuICAgIH1cclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntkYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8cD57ZGF0YS5ib2R5fTwvcD5cclxuICAgICAgICAgIDxpbWcgc3JjPXtcIi9pbWFnZXMvYmFjay5qcGdcIn0gYWx0PVwiYmFja1wiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SWQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcGF0aHMgPSBbXCIvcG9zdHMvMVwiLCBcIi9wb3N0cy8yXCIsIFwiL3Bvc3RzLzNcIl07XHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiB0cnVlIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHF1ZXJ5LCBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5IHx8IHBhcmFtcztcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfQkFTRV9VUkx9L3Bvc3RzLyR7aWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbi8vICAgY29uc3QgeyBpZCB9ID0gcXVlcnk7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8ke2lkfWApO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBkYXRhLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9