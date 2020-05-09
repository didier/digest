webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/molecules/Article/index.js":
/*!***************************************************!*\
  !*** ./src/components/molecules/Article/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.module.scss */ "./src/components/molecules/Article/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/didier/Projects/digest/src/components/molecules/Article/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Article = function Article(_ref) {
  var article = _ref.article,
      excerpt = _ref.excerpt;
  var title = article.title,
      url = article.url,
      author = article.author,
      source = article.source,
      sourceUrl = article.sourceUrl,
      post = article.post;
  var rawUrl = sourceUrl.replace('https://', '').replace('http://', '');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      items = _useState3[0],
      setItems = _useState3[1]; // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("/api/shares?url=".concat(url)).then(function (res) {
      return res.json();
    }).then(function (result) {
      setItems(result);
      setIsLoaded(true);
      console.log(result);
    }, // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);
  return __jsx("article", {
    className: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, title)), __jsx("p", {
    className: "excerpt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, excerpt ? "".concat(post.slice(0, 140), "...") : post), __jsx("cite", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__["favicon"],
    src: "https://api.faviconkit.com/".concat(rawUrl, "/144"),
    alt: "".concat(rawUrl, " logo."),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), " \u2014 ".concat(author, ", "), __jsx("a", {
    href: sourceUrl,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 127
    }
  }, source)), " | ", __jsx("h6", {
    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__["shares"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, isLoaded === true ? new Intl.NumberFormat().format(items['Facebook']['share_count']) : 'Loading', " shares", isLoaded === true ? null : '...'));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ })

})
//# sourceMappingURL=index.js.762835c92ef306b67045.hot-update.js.map