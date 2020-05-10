webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_atoms_InstallPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/atoms/InstallPopup */ "./src/components/atoms/InstallPopup/index.js");
/* harmony import */ var _components_molecules_Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/molecules/Article */ "./src/components/molecules/Article/index.js");
/* harmony import */ var _components_molecules_Header___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/molecules/Header/ */ "./src/components/molecules/Header/index.js");
/* harmony import */ var _components_molecules_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/molecules/Footer */ "./src/components/molecules/Footer/index.js");
var _this = undefined,
    _jsxFileName = "/Users/didier/Projects/digest/src/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Components





var articles = [{
  title: "Earth had its second-warmest March ever recorded.",
  url: 'https://www.nbcnews.com/science/environment/earth-had-its-second-warmest-march-ever-recorded-n1185566l',
  author: 'Denise Chow',
  source: 'NBC News',
  sourceUrl: 'https://www.nbcnews.com/'
}, {
  title: "Pentagon officially releases UFO videos.",
  url: 'https://edition.cnn.com/2020/04/27/politics/pentagon-ufo-videos/index.html',
  author: 'Michael Conte',
  source: 'CNN',
  sourceUrl: 'https://cnn.com'
}, {
  title: "Suspect in New Zealand mosque shootings unexpectedly pleads guilty to 51 murder charges.",
  url: 'https://www.washingtonpost.com/world/asia_pacific/suspect-in-new-zealand-mosque-shootings-unexpectedly-pleads-guilty-to-51-murder-charges/2020/03/26/08b0b6fc-6f01-11ea-a156-0048b62cdb51_story.html',
  author: 'Emanuel Stoakes',
  source: 'The Washington Post',
  sourceUrl: 'https://www.washingtonpost.com/'
}];

var Home = function Home(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showInstallMessage = _useState[0],
      setShowInstallMessage = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Detects if device is on iOS 
    var isIos = function isIos() {
      var userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    }; // Detects if device is in standalone mode


    var isInStandaloneMode = function isInStandaloneMode() {
      return 'standalone' in window.navigator && window.navigator.standalone;
    };

    if (isIos() && !isInStandaloneMode()) {
      setShowInstallMessage(true);
    } // Checks if should display install popup notification:


    return;
  }, []);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    exit: {
      opacity: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(_components_molecules_Header___WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), showInstallMessage === true && __jsx(_components_atoms_InstallPopup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 39
    }
  }), __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, articles.map(function (article, idx) {
    return __jsx("li", {
      key: idx,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(_components_molecules_Article__WEBPACK_IMPORTED_MODULE_3__["default"], {
      article: article,
      excerpt: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }));
  }))), __jsx(_components_molecules_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.43e113a33a54f8cb3a3b.hot-update.js.map