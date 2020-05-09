module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/molecules/Article/Article.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/molecules/Article/Article.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"post": "Article_post__tXNV8",
	"favicon": "Article_favicon__1IBxL",
	"shares": "Article_shares__2pXIB"
};


/***/ }),

/***/ "./src/components/molecules/Article/index.js":
/*!***************************************************!*\
  !*** ./src/components/molecules/Article/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.module.scss */ "./src/components/molecules/Article/Article.module.scss");
/* harmony import */ var _Article_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Article_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/didier/Projects/digest/src/components/molecules/Article/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Article = ({
  article,
  excerpt
}) => {
  const {
    title,
    url,
    author,
    source,
    sourceUrl,
    post
  } = article;
  const rawUrl = sourceUrl.replace('https://', '').replace('http://', '');
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isLoaded,
    1: setIsLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch(`/api/shares?url=${url}`).then(res => res.json()).then(result => {
      setItems(result);
      setIsLoaded(true);
      console.log(result);
    }, // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    error => {
      setIsLoaded(true);
      setError(error);
    });
  }, []);
  return __jsx("article", {
    className: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, title)), __jsx("p", {
    className: "excerpt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, excerpt ? `${post.slice(0, 140)}...` : post), __jsx("cite", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__["favicon"],
    src: `https://api.faviconkit.com/${rawUrl}/144`,
    alt: `${rawUrl} logo.`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), ` — ${author}, `, __jsx("a", {
    href: sourceUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 127
    }
  }, source)), "| ", __jsx("h6", {
    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__["shares"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, isLoaded === true ? new Intl.NumberFormat().format(items['Facebook']['share_count']) : 'Loading', " shares", isLoaded === true ? null : '...'));
};

/* harmony default export */ __webpack_exports__["default"] = (Article);

/***/ }),

/***/ "./src/components/molecules/Footer/Footer.module.scss":
/*!************************************************************!*\
  !*** ./src/components/molecules/Footer/Footer.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "Footer_footer__1mW7r"
};


/***/ }),

/***/ "./src/components/molecules/Footer/index.js":
/*!**************************************************!*\
  !*** ./src/components/molecules/Footer/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/components/molecules/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/didier/Projects/digest/src/components/molecules/Footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => __jsx("footer", {
  className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_1__["footer"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "All content belongs to the respective authors/owners. Made by ", __jsx("a", {
  href: "https://didiercatz.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Didier Catz"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/molecules/Header/Header.module.scss":
/*!************************************************************!*\
  !*** ./src/components/molecules/Header/Header.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__3vjs8"
};


/***/ }),

/***/ "./src/components/molecules/Header/index.js":
/*!**************************************************!*\
  !*** ./src/components/molecules/Header/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ "./src/components/molecules/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/didier/Projects/digest/src/components/molecules/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx("header", {
  className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__["header"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Digest"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Aggregated collection of important news you might have missed due to COVID-19."));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_molecules_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/molecules/Article */ "./src/components/molecules/Article/index.js");
/* harmony import */ var _components_molecules_Header_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/molecules/Header/index */ "./src/components/molecules/Header/index.js");
/* harmony import */ var _components_molecules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/molecules/Footer */ "./src/components/molecules/Footer/index.js");
var _jsxFileName = "/Users/didier/Projects/digest/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const articles = [{
  title: `Pentagon confirms UFOs.`,
  url: 'https://edition.cnn.com/2020/04/27/politics/pentagon-ufo-videos/index.html',
  author: 'Michael Conte',
  source: 'CNN',
  sourceUrl: 'https://cnn.com',
  post: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis quasi exercitationem qui aut, nemo numquam repudiandae reiciendis accusantium magni, doloribus non maiores. Hic, et repellendus cumque dicta ea itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic obcaecati maiores odit reprehenderit repudiandae, aliquid quis ea facilis doloremque, nisi placeat voluptatum dolores sint sunt, explicabo cum ratione! Incidunt tempora earum eum temporibus saepe aliquam molestias, laborum asperiores sed?`
}, {
  title: `Suspect in New Zealand mosque shootings unexpectedly pleads guilty to 51 murder charges.`,
  url: 'https://www.washingtonpost.com/world/asia_pacific/suspect-in-new-zealand-mosque-shootings-unexpectedly-pleads-guilty-to-51-murder-charges/2020/03/26/08b0b6fc-6f01-11ea-a156-0048b62cdb51_story.html',
  author: 'Emanuel Stoakes',
  source: 'The Washington Post',
  sourceUrl: 'https://www.washingtonpost.com/',
  post: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis quasi exercitationem qui aut, nemo numquam repudiandae reiciendis accusantium magni, doloribus non maiores. Hic, et repellendus cumque dicta ea itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic obcaecati maiores odit reprehenderit repudiandae, aliquid quis ea facilis doloremque, nisi placeat voluptatum dolores sint sunt, explicabo cum ratione! Incidunt tempora earum eum temporibus saepe aliquam molestias, laborum asperiores sed?`
}];

const Home = props => __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
  exit: {
    opacity: 0
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx(_components_molecules_Header_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("main", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, articles.map((article, idx) => __jsx("li", {
  key: idx,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(_components_molecules_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
  article: article,
  excerpt: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}))))), __jsx(_components_molecules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/didier/Projects/digest/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map