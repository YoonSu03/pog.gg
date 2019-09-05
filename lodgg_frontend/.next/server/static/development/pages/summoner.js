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

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: getInfo, getleagueFirst, getleagueSecond, getmatchlists, getmatches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getleagueFirst", function() { return getleagueFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getleagueSecond", function() { return getleagueSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmatchlists", function() { return getmatchlists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmatches", function() { return getmatches; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const address = "http://localhost:8080";
function getInfo(name) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userinfo", {
    params: {
      name: name
    }
  });
}
function getleagueFirst(encryptedSummonerId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userleaguesFirst", {
    params: {
      encryptedSummonerId: encryptedSummonerId
    }
  });
}
function getleagueSecond(leagueId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userleaguesSecond", {
    params: {
      leagueId: leagueId
    }
  });
}
function getmatchlists(encryptedSummonerId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/matchlists", {
    params: {
      encryptedSummonerId: encryptedSummonerId
    }
  });
}
function getmatches(matchId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/matches", {
    params: {
      matchId: matchId
    }
  });
}

/***/ }),

/***/ "./components/LolLayout/LolLayout.js":
/*!*******************************************!*\
  !*** ./components/LolLayout/LolLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\LolLayout\\LolLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const AppLayout = ({
  children
}) => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const onClick = e => {
    e.preventDefault();
    window.location = 'http://localhost:3000/summoner?name=' + username;
  };

  const onEnterClick = e => {
    if (e.charCode == 13) {
      onClick(e);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    class: "header-gnb",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    class: "header-items",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    class: "site-item",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://poro.gg/images/family/ico_lol.png",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "\uB9AC\uADF8\uC624\uBE0C\uB808\uC804\uB4DC"))))))), __jsx("div", {
    class: "sub-items",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    class: "sub-items-top",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    class: "sub-items-top-logo",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "LOD.GG")), __jsx("div", {
    class: "sub-items-top-input",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("input", {
    value: username,
    onKeyPress: onEnterClick,
    onChange: e => setUsername(e.target.value),
    placeholder: "\uCC54\uD53C\uC5B8, \uC18C\uD658\uC0AC\uBA85 \uAC80\uC0C9",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("button", {
    onClick: e => onClick(e),
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-1632768097" + " " + "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  })))), __jsx("div", {
    class: "sub-items-bottom",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    class: "sub-items-list",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "\uD648")), __jsx("li", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "\uCC54\uD53C\uC5B8\uBD84\uC11D")), __jsx("li", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "e\uC2A4\uD3EC\uCE20")), __jsx("li", {
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "\uD504\uB85C\uAD00\uC804")))))), __jsx("div", {
    class: "notice",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("div", {
    class: "notice_item",
    className: "jsx-1632768097",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("i", {
    style: {
      paddingRight: "5px"
    },
    className: "jsx-1632768097" + " " + "fas fa-exclamation-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), "\uC548\uB155\uD558\uC138\uC694 lod.gg\uC5D0 \uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1632768097",
    __self: undefined
  }, "body{margin:0;background-color:#f5f5f5;}ul{list-style-type:none;margin:0;padding:0;}a{-webkit-text-decoration:none;text-decoration:none;color:white;}.header-gnb{font-family:'Open Sans',sans-serif;height:40px;background-color:#232F46;}.header-items{height:40px;width:1050px;margin:0 auto;}.site-item{float:left;width:800px;height:40px;}.site-item ul li span{font-size:13px;color:#c0daf1;}.header-items ul{height:100%;}.header-items ul li{padding:0 16px;height:40px;width:120px;}.header-items ul li:first-child{padding-left:0px;padding-right:16px;}.header-items ul li:active{background-color:#313641;}.header-items ul li a img{vertical-align:middle;position:relative;top:-1px;width:17px;height:17px;padding-right:5px;}.header-items ul li a{line-height:40px;font-size:15px;}.sub-items{background-image:url(/static/sub_background.png);height:200px;}.sub-items-top{width:1050px;margin:0 auto;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;}.sub-items-top-logo{margin-left:14px;}.sub-items-top-input{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:300px;height:35px;}.sub-items-top-input input{float:left;font-size:12px;width:300px;border:0;line-height:35px;padding:0 12px 0 12px;}.sub-items-top-input button{background:#ffffff;height:35px;width:50px;cursor:pointer;border:none;}.sub-items-bottom{height:50px;background-color:rgba(0,0,0,.3);}.sub-items-bottom ul li{width:76px;float:left;line-height:47px;margin-right:15px;text-align:center;}.sub-items-bottom ul li:hover{border-bottom:2px solid #ffffff;}.sub-items-bottom ul li a{font-size:15px;color:#d6d6d6;}.sub-items-list{width:1050px;margin:0 auto;}.notice{height:40px;background-color:#ffc528;}.notice_item{font-size:14px;width:1050px;margin:0 auto;line-height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxMb2xMYXlvdXRcXExvbExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGlCLEFBR2tDLEFBSVksQUFLQSxBQUllLEFBS3hCLEFBS0QsQUFLSSxBQUlILEFBR0csQUFLRSxBQUlRLEFBR0gsQUFRTCxBQUlnQyxBQUlwQyxBQVNJLEFBR0osQUFPRixBQVFRLEFBT1AsQUFJRCxBQU9xQixBQUdqQixBQUlGLEFBSUQsQUFLRyxTQTNIVSxFQXVCYixBQTJERyxBQW1CSixDQW5GRSxBQWNqQixBQWlFb0MsQUFzQlAsQ0F4RFgsQUFvREEsRUF2RkEsQUFPRixBQTRFRSxBQWFELEVBcEZNLEFBZUosQUFpQm5CLEVBa0JnQixFQXRGSCxDQTJDUyxBQXVERCxDQTlFTCxFQUxFLEFBeUJsQixDQXVDZ0IsQ0EvQ0MsQUE0QkEsQUFvRGpCLENBU2tCLENBaEdsQixBQW1GQSxDQTNHYyxDQXNGQyxDQW5DZixBQW9EQSxFQTNHQSxDQVlnQixBQVloQixDQWdCQSxDQStFQSxDQXBDYSxDQWhFYixBQWlCQSxBQWtFc0IsQ0FqR3RCLEFBMENhLEFBaUJJLEVBMkJFLEFBa0NFLEVBNUJyQixHQXBGNkIsQUF1RVIsRUFwQ04sQUFVRSxDQWxERCxPQW9GQSxBQVdNLEVBdUJ0QixDQTdFZ0IsRUF4Q2hCLEFBa0RBLEVBMEIwQixLQVExQixHQS9FQSxBQW9Dc0IsRUF3QkssQ0E4QjNCLFdBbEJBLElBbkNBLHdCQWNrQywyREFVWCx3REFUQSxxQ0FVUCxZQUNBLFlBQ2hCLGdDQVhnQixZQUNoQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcTG9sTGF5b3V0XFxMb2xMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBvbkNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zdW1tb25lcj9uYW1lPScrdXNlcm5hbWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkVudGVyQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUuY2hhckNvZGUgPT0gMTMpe1xyXG4gICAgICAgICAgICBvbkNsaWNrKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyLWduYlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9mYW1pbHkvaWNvX2xvbC5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuumrOq3uOyYpOu4jOugiOyghOuTnDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLXRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLXRvcC1sb2dvXCI+PGgxPkxPRC5HRzwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaXRlbXMtdG9wLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJuYW1lfSBvbktleVByZXNzPXtvbkVudGVyQ2xpY2t9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIuyxlO2UvOyWuCwg7IaM7ZmY7IKs66qFIOqygOyDiVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IG9uQ2xpY2soZSl9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaXRlbXMtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj7tmYg8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPuyxlO2UvOyWuOu2hOyEnTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+ZeyKpO2PrOy4oDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+7ZSE66Gc6rSA7KCEPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpY2VfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCI1cHhcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICDslYjrhZXtlZjshLjsmpQgbG9kLmdn7JeQIOyYpOyLoOqyg+ydhCDtmZjsmIHtlanri4jri6QhXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItZ25iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzJGNDY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2l0ZS1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2l0ZS1pdGVtIHVsIGxpIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjMGRhZjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAgMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHVsIGxpOmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzY0MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaSBhIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvc3ViX2JhY2tncm91bmQucG5nKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtaW5wdXQgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4IDAgMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtaW5wdXQgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLWJvdHRvbSB1bCBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtYm90dG9tIHVsIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1ib3R0b20gdWwgbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q2ZDZkNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ub3RpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM1Mjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ub3RpY2VfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\LolLayout\\LolLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/LolLayout/index.js":
/*!***************************************!*\
  !*** ./components/LolLayout/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LolLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LolLayout */ "./components/LolLayout/LolLayout.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LolLayout__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Summoner/Header/Header.js":
/*!**********************************************!*\
  !*** ./components/Summoner/Header/Header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Header\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Header = ({
  userinfo
}) => {
  console.log(userinfo);
  const profileicon = `https://ddragon.leagueoflegends.com/cdn/9.17.1/img/profileicon/${userinfo.profileIconId}.png`;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3049298998" + " " + "Summoner_Header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3049298998" + " " + "Summoner_Header_Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3049298998" + " " + "Summoner_Header_Style",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3049298998" + " " + "Summoner_Header_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    src: profileicon,
    className: "jsx-3049298998" + " " + "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-3049298998" + " " + "Summoner_Header_Userinfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3049298998" + " " + "PastRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("ul", {
    className: "jsx-3049298998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("li", {
    className: "jsx-3049298998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("b", {
    className: "jsx-3049298998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "S7"), "\xA0  Gold"), __jsx("li", {
    className: "jsx-3049298998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("b", {
    className: "jsx-3049298998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "S8"), "\xA0  Diamond"))), __jsx("div", {
    class: "Summoner_rank",
    className: "jsx-3049298998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "\uB798\uB354\uB7AD\uD0B9 95,769\uC704 (\uC0C1\uC7042.753%)"), __jsx("div", {
    class: "Summoner_name",
    className: "jsx-3049298998",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, userinfo.name)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3049298998",
    __self: undefined
  }, ".Summoner_Header{border-bottom:1px solid #c6cbcb;height:220px;}.Summoner_Header_Wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:1100px;margin:0 auto;height:100%;}.Summoner_Header_Style{background:linear-gradient(rgb(194,158,82) 0px,rgb(122,90,38) 88%,rgb(168,132,73));border-radius:100%;padding:1px;}.Summoner_Header_img{border-radius:100%;}.Summoner_Header .profile{border:2px solid white;border-radius:100%;width:100px;height:100px;}.Summoner_Header_Userinfo{height:104px;margin-left:25px;}.PastRank ul li{display:inline-block;padding:3px 4px 2px 4px;margin-right:10px;background:#e0e3e3;color:#657070;font-size:11px;border:1px solid #ced3d3;border-radius:3px;}.PastRank ul li b{font-weight:bold;}.Summoner_rank{padding-top:6px;color:#555e5e;font-size:13px;}.Summoner_name{padding-top:10px;color:#242929;font-size:30px;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcSGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNpQixBQUd5RCxBQUluQixBQVU4RSxBQUt4RSxBQUdJLEFBTVYsQUFJUSxBQVVKLEFBR0QsQUFLQyxhQXJCQSxHQWlCSCxDQUhsQixBQVFrQixFQS9CbEIsRUFhNEIsRUFWTCxPQU92QixBQWlCbUIsQ0FLQSxDQW5ERixVQXVCRCxHQXRCaEIsQUFnQ3NCLEFBY3RCLENBS3FCLFFBNUJKLFNBVU0sQUFtQnZCLElBNUJBLE9BckJ1QixRQStCTCxDQXJCSyxhQXNCSixNQXJCSCxTQXNCYSxHQXJCN0Isc0JBc0JzQixrQkFDdEIsYUFsQ2lCLGFBQ0MsY0FDSCxZQUNmIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcSGVhZGVyXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHt1c2VyaW5mb30pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJpbmZvKVxyXG4gICAgY29uc3QgcHJvZmlsZWljb24gPSBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzkuMTcuMS9pbWcvcHJvZmlsZWljb24vJHt1c2VyaW5mby5wcm9maWxlSWNvbklkfS5wbmdgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJfSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyX0hlYWRlcl9XcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lcl9IZWFkZXJfU3R5bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lcl9IZWFkZXJfaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2ZpbGVcIiBzcmM9e3Byb2ZpbGVpY29ufS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJfSGVhZGVyX1VzZXJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUGFzdFJhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlM3PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgIEdvbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Uzg8L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyAgRGlhbW9uZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlN1bW1vbmVyX3JhbmtcIj7rnpjrjZTrnq3tgrkgOTUsNzY57JyEICjsg4HsnIQyLjc1MyUpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJTdW1tb25lcl9uYW1lXCI+e3VzZXJpbmZvLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuU3VtbW9uZXJfSGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNmNiY2I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5TdW1tb25lcl9IZWFkZXJfV3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5TdW1tb25lcl9IZWFkZXJfU3R5bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDE5NCwgMTU4LCA4MikgMHB4LCByZ2IoMTIyLCA5MCwgMzgpIDg4JSwgcmdiKDE2OCwgMTMyLCA3MykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5TdW1tb25lcl9IZWFkZXJfaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlN1bW1vbmVyX0hlYWRlciAucHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5TdW1tb25lcl9IZWFkZXJfVXNlcmluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlBhc3RSYW5rIHVsIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA0cHggMnB4IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlM2UzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzY1NzA3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkM2QzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QYXN0UmFuayB1bCBsaSBie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlN1bW1vbmVyX3Jhbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NWU1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuU3VtbW9uZXJfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI0MjkyOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPiBcclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Header\\Header.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Summoner/Header/index.js":
/*!*********************************************!*\
  !*** ./components/Summoner/Header/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Summoner/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Summoner/Leagues/Leagues.js":
/*!************************************************!*\
  !*** ./components/Summoner/Leagues/Leagues.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Leauges = ({
  userinfo
}) => {
  const {
    0: matchlists,
    1: setMatchlists
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: matches,
    1: setMatches
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const matchArray = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const getMatches = matches => {
    matches.map(v => {
      _api_api__WEBPACK_IMPORTED_MODULE_2__["getmatches"](v.gameId).then(response => matchArray.push(response.data)).catch(error => console.log(error));
    });
    setMatches(matchArray);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _api_api__WEBPACK_IMPORTED_MODULE_2__["getmatchlists"](userinfo.accountId).then(response => {
      setMatchlists(response.data.matches);
      return getMatches(response.data.matches);
    }).catch(error => console.log(error));
  }, [userinfo]);
  console.log(matchlists, matches);
  return __jsx("div", {
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "GameItemList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "GameItemWrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "GameItem Win",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "GameStats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "GameType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "\uC77C\uBC18"), __jsx("div", {
    className: "jsx-3101521027" + " " + "TimeStamp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "5\uC2DC\uAC04\uC804")), __jsx("div", {
    className: "jsx-3101521027" + " " + "Bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3101521027" + " " + "GameResult",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "\uC2B9\uB9AC"), __jsx("div", {
    className: "jsx-3101521027" + " " + "GameLength",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "29\uBD84 55\uCD08")), __jsx("div", {
    className: "jsx-3101521027" + " " + "GameSettingInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "ChampionImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://opgg-static.akamaized.net/images/lol/champion/LeeSin.png?image=w_46&v=1",
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-3101521027" + " " + "SummonerSpell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "Spell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://opgg-static.akamaized.net/images/lol/spell/SummonerSmite.png?image=w_22&v=15354684000",
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-3101521027" + " " + "Spell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://opgg-static.akamaized.net/images/lol/spell/SummonerSmite.png?image=w_22&v=15354684000",
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-3101521027" + " " + "Runes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "Rune",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=w_22&v=1",
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-3101521027" + " " + "Rune",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://opgg-static.akamaized.net/images/lol/perk/8010.png?image=w_22&v=1",
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-3101521027" + " " + "ChampionName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("a", {
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "\uB9AC\uC2E0"))), __jsx("div", {
    className: "jsx-3101521027" + " " + "KDA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "KDA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3101521027" + " " + "Kill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "16"), "/", __jsx("span", {
    className: "jsx-3101521027" + " " + "Death",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "6"), "/", __jsx("span", {
    className: "jsx-3101521027" + " " + "Assist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "4")), __jsx("div", {
    className: "jsx-3101521027" + " " + "KDARatio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3101521027" + " " + "KDARatio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "3.33:1"), "\uD3C9\uC810")), __jsx("div", {
    className: "jsx-3101521027" + " " + "Stats",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3101521027" + " " + "Level",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "\uB808\uBCA816"), __jsx("div", {
    className: "jsx-3101521027" + " " + "CS",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "178 (5.9)"), " CS"), __jsx("div", {
    class: "CKRate tip tpd-delegation-uid-1",
    className: "jsx-3101521027",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "\uD0AC\uAD00\uC5EC 61%")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3101521027",
    __self: undefined
  }, ".GameItemWrap{position:relative;border-radius:3px;margin-bottom:8px;}.GameItem{position:relative;background:none;}.GameItem.Win>.Content{table-layout:fixed;background-color:#a3cfec;border-color:#99b9cf;}.GameItem>.Content{display:table;width:689px;height:97px;border-collase:collapse;border:1px solid #cdd2d2;}.GameItem>.Content>.GameStats{width:70px;text-align:center;font-size:11px;color:#555;line-height:16px;}.GameItem>.Content>div{display:table-cell;height:96px;vertical-align:middle;}.GameItem>.Content>.GameStats>.GameType{font-weight:bold;width:70px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}._timeCountAssigned{font-size:inherit;cursor:help;}.GameItem.Win>.Content>.GameStats>.Bar{background:#99b9cf;}.GameItem.Win>.Content>.GameStats>.GameResult{color:#1a78ae;}.GameItem>.Content>.GameSettingInfo{width:110px;font-size:0;}.GameItem>.Content>.GameSettingInfo>.ChampionImage{display:inline-block;width:46px;height:46px;vertical-align:middle;border-radius:50%;overflow:hidden;}.GameItem>.Content>.GameSettingInfo>.ChampionImage .Image{display:block;width:100%;height:100%;background:#000;}.GameItem>.Content>.GameSettingInfo>.SummonerSpell{display:inline-block;vertical-align:middle;margin-left:4px;}.GameItem>.Content>.GameSettingInfo>.SummonerSpell>.Spell:first-child{margin-left:0;}.GameItem>.Content>.GameSettingInfo>.Runes{display:inline-block;vertical-align:middle;margin-left:4px;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune{width:22px;height:22px;margin-top:2px;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child{margin-top:0;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child>.Image{background:#000;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune{width:22px;height:22px;margin-top:2px;}.GameItem>.Content>.GameSettingInfo>.ChampionName{margin-top:8px;font-size:11px;color:#555;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.GameItem>.Content>.GameSettingInfo>.ChampionName>a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.GameItem>.Content>.KDA{font-size:11px;text-align:center;}.GameItem>.Content>.KDA>.KDA{color:#879292;font-size:15px;white-space:nowrap;}.GameItem>.Content>.KDA>.KDA>.Kill,.GameItem>.Content>.KDA>.KDA>.Assist{color:#555e5e;}.GameItem>.Content>.KDA>.KDA>.Death{color:#c6443e;}.GameItem>.Content>.KDA>.KDA>.Kill,.GameItem>.Content>.KDA>.KDA>.Assist{color:#555e5e;}.GameItem>.Content>.KDA>.KDARatio{color:#555e5e;font-size:12px;font-weight:bold;margin-top:6px;}.GameItem>.Content>.KDA>.KDARatio .KDARatio{color:#353a3a;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcTGVhZ3Vlc1xcTGVhZ3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRmlCLEFBRzJDLEFBS0EsQUFJQyxBQUtMLEFBT0gsQUFPUSxBQUtGLEFBT0MsQUFJQyxBQUdMLEFBR0YsQUFJUyxBQVFQLEFBTU8sQUFLUCxBQUdPLEFBS1YsQUFLRSxBQUdHLEFBR0wsQUFLSSxBQVNNLEFBSU4sQUFJRCxBQUtBLEFBR0EsQUFHQSxBQUdBLEFBTUEsV0FoSEksQUE0RE4sQUFXQSxDQTFDQSxDQW9DaEIsQ0F4RWdCLEFBaUNoQixBQWVlLEFBV2YsQUF5Q21CLEFBS25CLEFBR0EsQUFHQSxBQUdtQixBQU1uQixDQXJDbUIsQUFhRyxDQXJCdEIsQ0F4RGUsQ0FqQ08sQUFLRixBQW1DSixDQS9CYSxBQW1CYixBQWdCaEIsRUFVZSxBQWNXLEFBUUEsRUFNUCxBQVdBLENBMUNuQixDQVlnQixDQWhEQSxFQW1CTyxDQVpKLEFBNkZJLEFBY0YsQ0F4RnJCLEFBeURlLENBckVXLENBMEJWLENBd0RoQixDQXpHQSxFQUxzQixDQStERixDQWhEUSxBQW1FNUIsQUFXQSxHQUtzQixFQTlCRixBQVFBLENBbkVLLEFBYVYsQUFpQ1csRUEwRVAsQ0EvRkMsQ0FpRnBCLEVBVmtCLEdBNUVsQixBQW1DQSxDQS9EQSxDQXNCcUIsSUE4Q3JCLEFBUUEsQUFzQnVCLEVBK0J2QixDQWxINkIsQ0FtQkYsQ0F1RTNCLENBaEdBLENBOENzQixNQWhDdEIsTUE0RW9CLE1BM0NBLEVBckJwQixDQW5CQSxPQW9GMkIsTUEzQzNCLGlCQTRDQSIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXExlYWd1ZXNcXExlYWd1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuY29uc3QgTGVhdWdlcyA9ICh7dXNlcmluZm99KSA9PiB7XHJcbiAgICBjb25zdCBbbWF0Y2hsaXN0cywgc2V0TWF0Y2hsaXN0c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbWF0Y2hlcywgc2V0TWF0Y2hlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBtYXRjaEFycmF5ID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZ2V0TWF0Y2hlcyA9IChtYXRjaGVzKSA9PiB7XHJcbiAgICAgICAgbWF0Y2hlcy5tYXAodiA9PiB7XHJcbiAgICAgICAgICAgIGFwaS5nZXRtYXRjaGVzKHYuZ2FtZUlkKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBtYXRjaEFycmF5LnB1c2gocmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRNYXRjaGVzKG1hdGNoQXJyYXkpO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhcGkuZ2V0bWF0Y2hsaXN0cyh1c2VyaW5mby5hY2NvdW50SWQpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBzZXRNYXRjaGxpc3RzKHJlc3BvbnNlLmRhdGEubWF0Y2hlcylcclxuICAgICAgICAgICAgcmV0dXJuIGdldE1hdGNoZXMocmVzcG9uc2UuZGF0YS5tYXRjaGVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9LFt1c2VyaW5mb10pXHJcbiAgICBjb25zb2xlLmxvZyhtYXRjaGxpc3RzLCBtYXRjaGVzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVJdGVtTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lSXRlbVdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVJdGVtIFdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lVHlwZVwiPuydvOuwmDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGltZVN0YW1wXCI+PHNwYW4+NeyLnOqwhOyghDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVJlc3VsdFwiPuyKueumrDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZUxlbmd0aFwiPjI567aEIDU17LSIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVNldHRpbmdJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGE+PGltZyBzcmM9XCJodHRwczovL29wZ2ctc3RhdGljLmFrYW1haXplZC5uZXQvaW1hZ2VzL2xvbC9jaGFtcGlvbi9MZWVTaW4ucG5nP2ltYWdlPXdfNDYmdj0xXCIvPjwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyU3BlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTcGVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL29wZ2ctc3RhdGljLmFrYW1haXplZC5uZXQvaW1hZ2VzL2xvbC9zcGVsbC9TdW1tb25lclNtaXRlLnBuZz9pbWFnZT13XzIyJnY9MTUzNTQ2ODQwMDBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNwZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vb3BnZy1zdGF0aWMuYWthbWFpemVkLm5ldC9pbWFnZXMvbG9sL3NwZWxsL1N1bW1vbmVyU21pdGUucG5nP2ltYWdlPXdfMjImdj0xNTM1NDY4NDAwMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSdW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJ1bmVcIj48aW1nIHNyYz1cImh0dHBzOi8vb3BnZy1zdGF0aWMuYWthbWFpemVkLm5ldC9pbWFnZXMvbG9sL3BlcmsvODAxMC5wbmc/aW1hZ2U9d18yMiZ2PTFcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUnVuZVwiPjxpbWcgc3JjPVwiaHR0cHM6Ly9vcGdnLXN0YXRpYy5ha2FtYWl6ZWQubmV0L2ltYWdlcy9sb2wvcGVyay84MDEwLnBuZz9pbWFnZT13XzIyJnY9MVwiLz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7rpqzsi6A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJLREFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIktEQVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJLaWxsXCI+MTY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiRGVhdGhcIj42PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkFzc2lzdFwiPjQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJLREFSYXRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJLREFSYXRpb1wiPjMuMzM6MTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Y+J7KCQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3RhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxldmVsXCI+66CI67KoMTY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNTXCI+PHNwYW4+MTc4ICg1LjkpPC9zcGFuPiBDUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJDS1JhdGUgdGlwIHRwZC1kZWxlZ2F0aW9uLXVpZC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2CrOq0gOyXrCA2MSVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbVdyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbS5XaW4gPiAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2NmZWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzk5YjljZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtID4gLkNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY4OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkZDJkMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtID4gLkNvbnRlbnQgPiAuR2FtZVN0YXRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbSA+IC5Db250ZW50ID4gZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTdGF0cz4uR2FtZVR5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuX3RpbWVDb3VudEFzc2lnbmVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGhlbHA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbS5XaW4+LkNvbnRlbnQ+LkdhbWVTdGF0cz4uQmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzk5YjljZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbj4uQ29udGVudD4uR2FtZVN0YXRzPi5HYW1lUmVzdWx0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxYTc4YWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5DaGFtcGlvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5DaGFtcGlvbkltYWdlIC5JbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uU3VtbW9uZXJTcGVsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlN1bW1vbmVyU3BlbGw+LlNwZWxsOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5SdW5lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlJ1bmVzPi5SdW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uUnVuZXM+LlJ1bmU6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uUnVuZXM+LlJ1bmU6Zmlyc3QtY2hpbGQ+LkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlJ1bmVzPi5SdW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uQ2hhbXBpb25OYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uQ2hhbXBpb25OYW1lPmEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NzkyOTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQT4uS2lsbCwgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQT4uQXNzaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTVlNWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uS0RBPi5LREE+LkRlYXRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjNjQ0M2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uS0RBPi5LREE+LktpbGwsIC5HYW1lSXRlbT4uQ29udGVudD4uS0RBPi5LREE+LkFzc2lzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1ZTVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBUmF0aW8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NWU1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBUmF0aW8gLktEQVJhdGlvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNTNhM2E7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYXVnZXM7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Leauges);

/***/ }),

/***/ "./components/Summoner/Leagues/index.js":
/*!**********************************************!*\
  !*** ./components/Summoner/Leagues/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Leagues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leagues */ "./components/Summoner/Leagues/Leagues.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Leagues__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Summoner/Tier/Tier.js":
/*!******************************************!*\
  !*** ./components/Summoner/Tier/Tier.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tierinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tierinfo */ "./components/Summoner/Tierinfo/index.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Body = ({
  leagueEntriesInfo
}) => {
  return __jsx("div", {
    className: "jsx-2095890673" + " " + "rank_wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, leagueEntriesInfo && leagueEntriesInfo.map((data, i) => {
    if (data.queueType === "RANKED_SOLO_5x5") {
      console.log("solo");
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        name: "\uC194\uB85C\uB7AD\uD06C",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      });
    } else if (data.queueType === "RANKED_TFT") {
      console.log("tft");
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        name: "\uB864\uD1A0\uCCB4\uC2A4",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      });
    } else if (data.queueType === "RANKED_FLEX_SR") {
      console.log("team");
      return __jsx(_Tierinfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        name: "\uC790\uC720\uB7AD\uD06C",
        data: data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: undefined
      });
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2095890673",
    __self: undefined
  }, ".rank_wrapper.jsx-2095890673{padding-top:40px;width:1100px;height:130px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllclxcVGllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmlCLEFBRzBDLGlCQUNKLGFBQ0EsYUFDQyxjQUNsQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXFRpZXJcXFRpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaWVyaW5mbyBmcm9tICcuLi9UaWVyaW5mbyc7XHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuXHJcbmNvbnN0IEJvZHkgPSAoe2xlYWd1ZUVudHJpZXNJbmZvfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxlYWd1ZUVudHJpZXNJbmZvICYmIGxlYWd1ZUVudHJpZXNJbmZvICAubWFwKChkYXRhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5xdWV1ZVR5cGUgPT09IFwiUkFOS0VEX1NPTE9fNXg1XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb2xvXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllcmluZm8ga2V5PXtpfSBuYW1lPVwi7IaU66Gc656t7YGsXCIgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfVEZUXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZnRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGllcmluZm8ga2V5PXtpfSBuYW1lPVwi66Gk7Yag7LK07IqkXCIgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkYXRhLnF1ZXVlVHlwZSA9PT0gXCJSQU5LRURfRkxFWF9TUlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVhbVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaWVyaW5mbyBrZXk9e2l9IG5hbWU9XCLsnpDsnKDrnq3tgaxcIiBkYXRhPXtkYXRhfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5rX3dyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2R5OyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tier\\Tier.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/Summoner/Tier/index.js":
/*!*******************************************!*\
  !*** ./components/Summoner/Tier/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tier */ "./components/Summoner/Tier/Tier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tier__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Summoner/Tierinfo/Tierinfo.js":
/*!**************************************************!*\
  !*** ./components/Summoner/Tierinfo/Tierinfo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tierinfo\\Tierinfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Tierinfo = ({
  key,
  name,
  data
}) => {
  const imageFilter = (tier, rank) => {
    if (tier === "BRONZE") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          },
          __self: undefined
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: undefined
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: undefined
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/bronze_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: undefined
        });
      }
    } else if (tier === "SILVER") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: undefined
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: undefined
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: undefined
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/silver_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: undefined
        });
      }
    } else if (tier === "GOLD") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: undefined
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: undefined
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: undefined
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/gold_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: undefined
        });
      }
    } else if (tier === "PLATINUM") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: undefined
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: undefined
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: undefined
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/platinum_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: undefined
        });
      }
    } else if (tier === "DIAMOND") {
      if (rank === "IV") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_4.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: undefined
        });
      } else if (rank === "III") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_3.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: undefined
        });
      } else if (rank === "II") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_2.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: undefined
        });
      } else if (rank === "I") {
        return __jsx("img", {
          src: "https://poro.gg/images/lol/tier/diamond_1.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: undefined
        });
      }
    } else if (tier === "MASTER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/master_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: undefined
      });
    } else if (tier === "GRANDMASTER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/grandmaster_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: undefined
      });
    } else if (tier === "CHALLENGER") {
      return __jsx("img", {
        src: "https://poro.gg/images/lol/tier/challenger_1.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: undefined
      });
    }
  };

  console.log(key);
  return __jsx("div", {
    className: "jsx-1261995648" + " " + "rank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "TierImage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, imageFilter(data.tier, data.rank)), __jsx("div", {
    className: "jsx-1261995648" + " " + "TierInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1261995648" + " " + "RankType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, name), __jsx("b", {
    className: "jsx-1261995648" + " " + "TierRank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, data.tier + " " + data.rank), __jsx("span", {
    className: "jsx-1261995648" + " " + "LeaguePoints",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, data.leaguePoints, " LP"), __jsx("div", {
    class: "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "WinLose",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1261995648" + " " + "wins",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, data.wins, "\uC2B9"), __jsx("span", {
    className: "jsx-1261995648" + " " + "losses",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, data.losses, "\uD328"), " ", __jsx("br", {
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("span", {
    class: "winrate",
    className: "jsx-1261995648",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "\uC2B9\uB960 ", Math.round(data.wins / (data.wins + data.losses) * 100), "%")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1261995648",
    __self: undefined
  }, ".rank{width:300px;height:140px;border:1px solid #cdd2d2;box-shadow:0 1px #dcdfdf;background:#f2f2f2;border-radius:2px;}.TierImage{padding-top:10px;float:left;display:table-cell;vertical-align:middle;text-align:center;width:130px;height:110px;}.rank .TierImage img{width:110px;height:110px;}.TierInfo{padding-top:30px;height:30px;display:table-cell;vertical-align:middle;font-size:12px;line-height:1.5;text-align:left;}.RankType{font-size:13px;color:#879292;}.TierRank{font-size:15px;font-weight:bold;color:#1f8ecd;}.LeaguePoints{padding-left:5px;color:#555e5e;font-weight:bold;}.WinLose{font-size:14px;color:#879292;}.rank+.rank{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcVGllcmluZm9cXFRpZXJpbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GaUIsQUFHcUMsQUFRSyxBQVNMLEFBSUssQUFTRixBQUlBLEFBS0UsQUFLRixBQUlDLFlBL0NILEFBaUJBLEdBYUMsQUFJRyxBQVVILENBSWxCLENBeENlLEFBYUMsQUFrQkUsUUF0Q1csQUFpQjdCLEdBVHVCLENBYUEsQUFTdkIsQUFjQSxFQUxxQixDQUxILGNBQ2xCLENBMUIwQixDQWFBLEFBa0IxQixFQXZDNkIsbUJBU1AsQ0FhSCxLQXJCSSxVQXNCSCxFQWJKLE9BUk0sS0FTTCxFQWFHLFdBckJwQixBQVNBLEtBYUEiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcbG9kZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXFN1bW1vbmVyXFxUaWVyaW5mb1xcVGllcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGllcmluZm8gPSAoe2tleSwgbmFtZSwgZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IGltYWdlRmlsdGVyID0gKHRpZXIsIHJhbmspID0+IHtcclxuICAgICAgICBpZih0aWVyID09PSBcIkJST05aRVwiKSB7XHJcbiAgICAgICAgICAgIGlmKHJhbmsgPT09IFwiSVZcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvYnJvbnplXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2Jyb256ZV8zLnBuZ1wiLz4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyYW5rID09PSBcIklJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2Jyb256ZV8yLnBuZ1wiLz4pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihyYW5rID09PSBcIklcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvYnJvbnplXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9IGVsc2UgaWYgKHRpZXIgPT09IFwiU0lMVkVSXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9zaWx2ZXJfNC5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvc2lsdmVyXzMucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvc2lsdmVyXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9zaWx2ZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJHT0xEXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2dvbGRfMy5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9nb2xkXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJQTEFUSU5VTVwiKSB7IFxyXG4gICAgICAgICAgICBpZihyYW5rID09PSBcIklWXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzMucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICg8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvbG9sL3RpZXIvcGxhdGludW1fMi5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL3BsYXRpbnVtXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJESUFNT05EXCIpIHtcclxuICAgICAgICAgICAgaWYocmFuayA9PT0gXCJJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzQucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSUlJXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2RpYW1vbmRfMy5wbmdcIi8+KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYocmFuayA9PT0gXCJJSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzIucG5nXCIvPilcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHJhbmsgPT09IFwiSVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9kaWFtb25kXzEucG5nXCIvPilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJNQVNURVJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxpbWcgc3JjPVwiaHR0cHM6Ly9wb3JvLmdnL2ltYWdlcy9sb2wvdGllci9tYXN0ZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGllciA9PT0gXCJHUkFORE1BU1RFUlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2dyYW5kbWFzdGVyXzEucG5nXCIvPilcclxuICAgICAgICB9IGVsc2UgaWYgKHRpZXIgPT09IFwiQ0hBTExFTkdFUlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2xvbC90aWVyL2NoYWxsZW5nZXJfMS5wbmdcIi8+KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmFua1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpZXJJbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRmlsdGVyKGRhdGEudGllciwgZGF0YS5yYW5rKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaWVySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSYW5rVHlwZVwiPntuYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGIgY2xhc3NOYW1lPVwiVGllclJhbmtcIj57ZGF0YS50aWVyICsgXCIgXCIgKyBkYXRhLnJhbmt9PC9iPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiTGVhZ3VlUG9pbnRzXCI+e2RhdGEubGVhZ3VlUG9pbnRzfSBMUDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5yYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiV2luTG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3aW5zXCI+e2RhdGEud2luc33sirk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvc3Nlc1wiPntkYXRhLmxvc3Nlc33tjKg8L3NwYW4+IDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwid2lucmF0ZVwiPuyKueuloCB7TWF0aC5yb3VuZCgoZGF0YS53aW5zIC8gKGRhdGEud2lucyArIGRhdGEubG9zc2VzKSkgKiAxMDApfSU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJhbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZGQyZDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4ICNkY2RmZGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRpZXJJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5rIC5UaWVySW1hZ2UgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UaWVySW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUeXBlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzg3OTI5MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRpZXJSYW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZjhlY2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5MZWFndWVQb2ludHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTVlNWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuV2luTG9zZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NzkyOTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5rICsgLnJhbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWVyaW5mbzsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Tierinfo\\Tierinfo.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Tierinfo);

/***/ }),

/***/ "./components/Summoner/Tierinfo/index.js":
/*!***********************************************!*\
  !*** ./components/Summoner/Tierinfo/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tierinfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tierinfo */ "./components/Summoner/Tierinfo/Tierinfo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tierinfo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/summoner.js":
/*!***************************!*\
  !*** ./pages/summoner.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LolLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LolLayout */ "./components/LolLayout/index.js");
/* harmony import */ var _components_Summoner_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Summoner/Header */ "./components/Summoner/Header/index.js");
/* harmony import */ var _components_Summoner_Tier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Summoner/Tier */ "./components/Summoner/Tier/index.js");
/* harmony import */ var _components_Summoner_Leagues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Summoner/Leagues */ "./components/Summoner/Leagues/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\pages\\summoner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Summoner = () => {
  const {
    0: userinfo,
    1: setUserinfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: leagueEntriesInfo,
    1: setLeagueEntriesfirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  const {
    name
  } = router.query;

  const getInfo = () => {
    return _api_api__WEBPACK_IMPORTED_MODULE_6__["getInfo"](name).then(response => {
      setUserinfo(response.data);
      return getleagueFirst(response.data);
    }).catch(error => console.log(error));
  };

  const getleagueFirst = response => {
    return _api_api__WEBPACK_IMPORTED_MODULE_6__["getleagueFirst"](response.id).then(response => setLeagueEntriesfirst(response.data)).catch(error => console.log(error));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getInfo();
  }, [name]);
  console.log(userinfo, leagueEntriesInfo);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_components_LolLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx(_components_Summoner_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    userinfo: userinfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_components_Summoner_Tier__WEBPACK_IMPORTED_MODULE_3__["default"], {
    leagueEntriesInfo: leagueEntriesInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx(_components_Summoner_Leagues__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userinfo: userinfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Summoner);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/summoner.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ReactProject\javaproject\lod.gg\lodgg_frontend\pages\summoner.js */"./pages/summoner.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=summoner.js.map