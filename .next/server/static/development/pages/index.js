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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/atoms/InstallPopup/InstallPopup.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/atoms/InstallPopup/InstallPopup.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"popup": "InstallPopup_popup__de4t1",
	"share": "InstallPopup_share__36I3H"
};


/***/ }),

/***/ "./src/components/atoms/InstallPopup/index.js":
/*!****************************************************!*\
  !*** ./src/components/atoms/InstallPopup/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InstallPopup_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InstallPopup.module.scss */ "./src/components/atoms/InstallPopup/InstallPopup.module.scss");
/* harmony import */ var _InstallPopup_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InstallPopup_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/didier/Projects/digest/src/components/atoms/InstallPopup/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InstallPopup = () => {
  return __jsx("p", {
    className: _InstallPopup_module_scss__WEBPACK_IMPORTED_MODULE_1__["popup"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "If you'd like to stay up to date, install Digest by clicking on ", __jsx("img", {
    className: _InstallPopup_module_scss__WEBPACK_IMPORTED_MODULE_1__["share"],
    src: "./images/share.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 71
    }
  }), " followed by 'Add to homescreen'");
};

/* harmony default export */ __webpack_exports__["default"] = (InstallPopup);

/***/ }),

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
	"shares": "Article_shares__2pXIB",
	"cite": "Article_cite__3yo9o"
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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, title)), __jsx("cite", {
    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__["cite"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("img", {
    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__["favicon"],
    src: `https://api.faviconkit.com/${rawUrl}/144`,
    alt: `${rawUrl} logo.`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), ` — ${author}, `, __jsx("a", {
    href: sourceUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 127
    }
  }, source)), ` `, __jsx("h6", {
    className: _Article_module_scss__WEBPACK_IMPORTED_MODULE_1__["shares"],
    title: "The amount of times this article has been mentioned on social media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
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
	"footer-class": "Footer_footer-class__1lwth"
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, "All content belongs to the respective authors/owners. Made by ", __jsx("a", {
  href: "https://twitter.com/didiercatz",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 67
  }
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 3
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, "Digest"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_atoms_InstallPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/atoms/InstallPopup */ "./src/components/atoms/InstallPopup/index.js");
/* harmony import */ var _components_molecules_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/molecules/Article */ "./src/components/molecules/Article/index.js");
/* harmony import */ var _components_molecules_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/molecules/Footer */ "./src/components/molecules/Footer/index.js");
/* harmony import */ var _components_molecules_Header___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/molecules/Header/ */ "./src/components/molecules/Header/index.js");
var _jsxFileName = "/Users/didier/Projects/digest/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Components





const articles = [{
  title: `Earth had its second-warmest March ever recorded.`,
  url: 'https://www.nbcnews.com/science/environment/earth-had-its-second-warmest-march-ever-recorded-n1185566',
  author: 'Denise Chow',
  source: 'NBC News',
  sourceUrl: 'https://www.nbcnews.com/'
}, {
  title: `Pentagon officially releases UFO videos.`,
  url: 'https://edition.cnn.com/2020/04/27/politics/pentagon-ufo-videos/index.html',
  author: 'Michael Conte',
  source: 'CNN',
  sourceUrl: 'https://cnn.com'
}, {
  title: `Suspect in New Zealand mosque shootings unexpectedly pleads guilty to 51 murder charges.`,
  url: 'https://www.washingtonpost.com/world/asia_pacific/suspect-in-new-zealand-mosque-shootings-unexpectedly-pleads-guilty-to-51-murder-charges/2020/03/26/08b0b6fc-6f01-11ea-a156-0048b62cdb51_story.html',
  author: 'Emanuel Stoakes',
  source: 'The Washington Post',
  sourceUrl: 'https://www.washingtonpost.com/'
}];

const Home = props => {
  const {
    0: showInstallMessage,
    1: setShowInstallMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Detects if device is on iOS 
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    }; // Detects if device is in standalone mode


    const isInStandaloneMode = () => 'standalone' in window.navigator && window.navigator.standalone;

    if (isIos() && !isInStandaloneMode()) {
      setShowInstallMessage(true);
    } // Checks if should display install popup notification:


    return;
  }, []);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    exit: {
      opacity: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_components_molecules_Header___WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, articles.map((article, idx) => __jsx("li", {
    key: idx,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_components_molecules_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
    article: article,
    excerpt: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }))))), showInstallMessage === true && __jsx(_components_atoms_InstallPopup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 39
    }
  }), __jsx(_components_molecules_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSW5zdGFsbFBvcHVwL0luc3RhbGxQb3B1cC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbnN0YWxsUG9wdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0FydGljbGUvQXJ0aWNsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvQXJ0aWNsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvRm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkluc3RhbGxQb3B1cCIsInBvcHVwIiwic2hhcmUiLCJBcnRpY2xlIiwiYXJ0aWNsZSIsImV4Y2VycHQiLCJ0aXRsZSIsInVybCIsImF1dGhvciIsInNvdXJjZSIsInNvdXJjZVVybCIsInBvc3QiLCJyYXdVcmwiLCJyZXBsYWNlIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwiaXNMb2FkZWQiLCJzZXRJc0xvYWRlZCIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0IiwiY2l0ZSIsImZhdmljb24iLCJzaGFyZXMiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiRm9vdGVyIiwiZm9vdGVyIiwiSGVhZGVyIiwiaGVhZGVyIiwiYXJ0aWNsZXMiLCJIb21lIiwicHJvcHMiLCJzaG93SW5zdGFsbE1lc3NhZ2UiLCJzZXRTaG93SW5zdGFsbE1lc3NhZ2UiLCJpc0lvcyIsInVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInRvTG93ZXJDYXNlIiwidGVzdCIsImlzSW5TdGFuZGFsb25lTW9kZSIsInN0YW5kYWxvbmUiLCJvcGFjaXR5IiwibWFwIiwiaWR4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLFFBQVEsQ0FBQ2MsR0FBVCxDQUFhLENBQUMvQyxPQUFELEVBQVVnRCxHQUFWLEtBQ1o7QUFBSSxPQUFHLEVBQUVBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBUyxXQUFPLEVBQUVoRCxPQUFsQjtBQUEyQixXQUFPLE1BQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURELENBREgsQ0FERixDQUZGLEVBV0dvQyxrQkFBa0IsS0FBSyxJQUF2QixJQUErQixNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYbEMsRUFZRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGO0FBZ0JELENBcENEOztBQXFDZUYsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9wdXBcIjogXCJJbnN0YWxsUG9wdXBfcG9wdXBfX2RlNHQxXCIsXG5cdFwic2hhcmVcIjogXCJJbnN0YWxsUG9wdXBfc2hhcmVfXzM2STNIXCJcbn07XG4iLCJpbXBvcnQge3BvcHVwLCBzaGFyZX0gZnJvbSAnLi9JbnN0YWxsUG9wdXAubW9kdWxlLnNjc3MnXG5cbmNvbnN0IEluc3RhbGxQb3B1cCA9ICgpID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxwIGNsYXNzTmFtZT17cG9wdXB9PlxuICAgICAgSWYgeW91J2QgbGlrZSB0byBzdGF5IHVwIHRvIGRhdGUsIGluc3RhbGwgRGlnZXN0IGJ5IGNsaWNraW5nIG9uIDxpbWcgY2xhc3NOYW1lPXtzaGFyZX0gc3JjPVwiLi9pbWFnZXMvc2hhcmUuc3ZnXCI+PC9pbWc+IGZvbGxvd2VkIGJ5ICdBZGQgdG8gaG9tZXNjcmVlbidcbiAgICA8L3A+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zdGFsbFBvcHVwIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9zdFwiOiBcIkFydGljbGVfcG9zdF9fdFhOVjhcIixcblx0XCJmYXZpY29uXCI6IFwiQXJ0aWNsZV9mYXZpY29uX18xSUJ4TFwiLFxuXHRcInNoYXJlc1wiOiBcIkFydGljbGVfc2hhcmVzX18ycFhJQlwiLFxuXHRcImNpdGVcIjogXCJBcnRpY2xlX2NpdGVfXzN5bzlvXCJcbn07XG4iLCJpbXBvcnQgeyBwb3N0LCBjaXRlLCBmYXZpY29uLCBzaGFyZXMgfSBmcm9tICcuL0FydGljbGUubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEFydGljbGUgPSAoeyBhcnRpY2xlLCBleGNlcnB0IH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIHVybCxcbiAgICBhdXRob3IsXG4gICAgc291cmNlLFxuICAgIHNvdXJjZVVybCxcbiAgICBwb3N0XG4gIH0gPSBhcnRpY2xlXG5cbiAgY29uc3QgcmF3VXJsID1cbiAgICBzb3VyY2VVcmxcbiAgICAgIC5yZXBsYWNlKCdodHRwczovLycsICcnKVxuICAgICAgLnJlcGxhY2UoJ2h0dHA6Ly8nLCAnJylcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkZWQsIHNldElzTG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgLy8gTm90ZTogdGhlIGVtcHR5IGRlcHMgYXJyYXkgW10gbWVhbnNcbiAgLy8gdGhpcyB1c2VFZmZlY3Qgd2lsbCBydW4gb25jZVxuICAvLyBzaW1pbGFyIHRvIGNvbXBvbmVudERpZE1vdW50KClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgL2FwaS9zaGFyZXM/dXJsPSR7dXJsfWApXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgc2V0SXRlbXMocmVzdWx0KTtcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcblxuICAgICAgICB9LFxuICAgICAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCB0byBoYW5kbGUgZXJyb3JzIGhlcmVcbiAgICAgICAgLy8gaW5zdGVhZCBvZiBhIGNhdGNoKCkgYmxvY2sgc28gdGhhdCB3ZSBkb24ndCBzd2FsbG93XG4gICAgICAgIC8vIGV4Y2VwdGlvbnMgZnJvbSBhY3R1YWwgYnVncyBpbiBjb21wb25lbnRzLlxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcbiAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIClcbiAgfSwgW10pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtwb3N0fT5cblxuICAgICAgPGgyPjxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPnt0aXRsZX08L2E+PC9oMj5cbiAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJleGNlcnB0XCI+XG4gICAgICAgIHtleGNlcnB0ID8gYCR7cG9zdC5zbGljZSgwLCAxNDApfS4uLmAgOiBwb3N0fVxuICAgICAgPC9wPiAqL31cbiAgICAgIDxjaXRlIGNsYXNzTmFtZT17Y2l0ZX0+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtmYXZpY29ufSBzcmM9e2BodHRwczovL2FwaS5mYXZpY29ua2l0LmNvbS8ke3Jhd1VybH0vMTQ0YH0gYWx0PXtgJHtyYXdVcmx9IGxvZ28uYH0gLz57YCDigJQgJHthdXRob3J9LCBgfTxhIGhyZWY9e3NvdXJjZVVybH0+e3NvdXJjZX08L2E+XG4gICAgICA8L2NpdGU+XG4gICAgICB7YCBgfVxuICAgICAgPGg2IGNsYXNzTmFtZT17c2hhcmVzfSB0aXRsZT1cIlRoZSBhbW91bnQgb2YgdGltZXMgdGhpcyBhcnRpY2xlIGhhcyBiZWVuIG1lbnRpb25lZCBvbiBzb2NpYWwgbWVkaWFcIj5cbiAgICAgICAge2lzTG9hZGVkID09PSB0cnVlID9cbiAgICAgICAgICAoXG4gICAgICAgICAgICBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQoaXRlbXNbJ0ZhY2Vib29rJ11bJ3NoYXJlX2NvdW50J10pXG4gICAgICAgICAgKSA6ICdMb2FkaW5nJ30gc2hhcmVze2lzTG9hZGVkID09PSB0cnVlID8gbnVsbCA6ICcuLi4nfVxuICAgICAgPC9oNj5cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyLWNsYXNzXCI6IFwiRm9vdGVyX2Zvb3Rlci1jbGFzc19fMWx3dGhcIlxufTtcbiIsImltcG9ydCB7IGZvb3RlciB9IGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXIgY2xhc3NOYW1lPXtmb290ZXJ9PlxuICAgIEFsbCBjb250ZW50IGJlbG9uZ3MgdG8gdGhlIHJlc3BlY3RpdmUgYXV0aG9ycy9vd25lcnMuIE1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZGlkaWVyY2F0elwiPkRpZGllciBDYXR6PC9hPlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18zdmpzOFwiXG59O1xuIiwiaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gIDxoZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXJ9PlxuICAgIDxoMT5EaWdlc3Q8L2gxPlxuICAgIDxwPkFnZ3JlZ2F0ZWQgY29sbGVjdGlvbiBvZiBpbXBvcnRhbnQgbmV3cyB5b3UgbWlnaHQgaGF2ZSBtaXNzZWQgZHVlIHRvIENPVklELTE5LjwvcD5cbiAgPC9oZWFkZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCBJbnN0YWxsUG9wdXAgZnJvbSAnLi4vY29tcG9uZW50cy9hdG9tcy9JbnN0YWxsUG9wdXAnXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi9jb21wb25lbnRzL21vbGVjdWxlcy9BcnRpY2xlJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL21vbGVjdWxlcy9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL21vbGVjdWxlcy9IZWFkZXIvJztcblxuY29uc3QgYXJ0aWNsZXMgPSBbXG4gIHtcbiAgICB0aXRsZTogYEVhcnRoIGhhZCBpdHMgc2Vjb25kLXdhcm1lc3QgTWFyY2ggZXZlciByZWNvcmRlZC5gLFxuICAgIHVybDogJ2h0dHBzOi8vd3d3Lm5iY25ld3MuY29tL3NjaWVuY2UvZW52aXJvbm1lbnQvZWFydGgtaGFkLWl0cy1zZWNvbmQtd2FybWVzdC1tYXJjaC1ldmVyLXJlY29yZGVkLW4xMTg1NTY2JyxcblxuICAgIGF1dGhvcjogJ0RlbmlzZSBDaG93JyxcbiAgICBzb3VyY2U6ICdOQkMgTmV3cycsXG4gICAgc291cmNlVXJsOiAnaHR0cHM6Ly93d3cubmJjbmV3cy5jb20vJyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBgUGVudGFnb24gb2ZmaWNpYWxseSByZWxlYXNlcyBVRk8gdmlkZW9zLmAsXG4gICAgdXJsOiAnaHR0cHM6Ly9lZGl0aW9uLmNubi5jb20vMjAyMC8wNC8yNy9wb2xpdGljcy9wZW50YWdvbi11Zm8tdmlkZW9zL2luZGV4Lmh0bWwnLFxuXG4gICAgYXV0aG9yOiAnTWljaGFlbCBDb250ZScsXG4gICAgc291cmNlOiAnQ05OJyxcbiAgICBzb3VyY2VVcmw6ICdodHRwczovL2Nubi5jb20nLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IGBTdXNwZWN0IGluIE5ldyBaZWFsYW5kIG1vc3F1ZSBzaG9vdGluZ3MgdW5leHBlY3RlZGx5IHBsZWFkcyBndWlsdHkgdG8gNTEgbXVyZGVyIGNoYXJnZXMuYCxcbiAgICB1cmw6ICdodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vd29ybGQvYXNpYV9wYWNpZmljL3N1c3BlY3QtaW4tbmV3LXplYWxhbmQtbW9zcXVlLXNob290aW5ncy11bmV4cGVjdGVkbHktcGxlYWRzLWd1aWx0eS10by01MS1tdXJkZXItY2hhcmdlcy8yMDIwLzAzLzI2LzA4YjBiNmZjLTZmMDEtMTFlYS1hMTU2LTAwNDhiNjJjZGI1MV9zdG9yeS5odG1sJyxcblxuICAgIGF1dGhvcjogJ0VtYW51ZWwgU3RvYWtlcycsXG4gICAgc291cmNlOiAnVGhlIFdhc2hpbmd0b24gUG9zdCcsXG4gICAgc291cmNlVXJsOiAnaHR0cHM6Ly93d3cud2FzaGluZ3RvbnBvc3QuY29tLycsXG4gIH0sXG5dXG5cbmNvbnN0IEhvbWUgPSBwcm9wcyA9PiB7XG5cbiAgY29uc3QgW3Nob3dJbnN0YWxsTWVzc2FnZSwgc2V0U2hvd0luc3RhbGxNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRGV0ZWN0cyBpZiBkZXZpY2UgaXMgb24gaU9TIFxuICAgIGNvbnN0IGlzSW9zID0gKCkgPT4ge1xuICAgICAgY29uc3QgdXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJldHVybiAvaXBob25lfGlwYWR8aXBvZC8udGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cbiAgICAvLyBEZXRlY3RzIGlmIGRldmljZSBpcyBpbiBzdGFuZGFsb25lIG1vZGVcbiAgICBjb25zdCBpc0luU3RhbmRhbG9uZU1vZGUgPSAoKSA9PiAoJ3N0YW5kYWxvbmUnIGluIHdpbmRvdy5uYXZpZ2F0b3IpICYmICh3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmUpO1xuXG4gICAgaWYgKGlzSW9zKCkgJiYgIWlzSW5TdGFuZGFsb25lTW9kZSgpKSB7XG4gICAgICBzZXRTaG93SW5zdGFsbE1lc3NhZ2UodHJ1ZSlcbiAgICB9XG4gICAgLy8gQ2hlY2tzIGlmIHNob3VsZCBkaXNwbGF5IGluc3RhbGwgcG9wdXAgbm90aWZpY2F0aW9uOlxuICAgIHJldHVyblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2IGV4aXQ9e3sgb3BhY2l0eTogMCB9fT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpZHh9PlxuICAgICAgICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXthcnRpY2xlfSBleGNlcnB0PjwvQXJ0aWNsZT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L21haW4+XG4gICAgICB7c2hvd0luc3RhbGxNZXNzYWdlID09PSB0cnVlICYmIDxJbnN0YWxsUG9wdXAgLz59XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=