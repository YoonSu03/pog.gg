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

/***/ "./components/AppLayout/AppLayout.js":
/*!*******************************************!*\
  !*** ./components/AppLayout/AppLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\AppLayout\\AppLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AppLayout = ({
  children
}) => {
  return __jsx("div", {
    className: "jsx-2106928472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2106928472" + " " + "LeagueBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("nav", {
    className: "jsx-2106928472" + " " + "Navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2106928472" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-2106928472" + " " + "Menus__link Gilroy brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "QWER.GG"), __jsx("a", {
    href: "#",
    className: "jsx-2106928472" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "\uACBD\uAE30 \uACB0\uACFC"), __jsx("a", {
    href: "#",
    className: "jsx-2106928472" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "\uD504\uB85C\uBE4C\uB4DC"), __jsx("a", {
    href: "#",
    className: "jsx-2106928472" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "\uACBD\uAE30 \uC77C\uC815"), __jsx("a", {
    href: "#",
    className: "jsx-2106928472" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\uD558\uC774\uB77C\uC774\uD2B8"), __jsx("a", {
    href: "#",
    className: "jsx-2106928472" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\uCEE4\uBBA4\uB2C8\uD2F0"), __jsx("span", {
    className: "jsx-2106928472" + " " + "Menus__login float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-2106928472",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778")))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2106928472",
    __self: undefined
  }, ".LeagueBackground{position:absolute;top:0;left:0;right:0;bottom:0;position:fixed;background-repeat:no-repeat;backgroundImage:url(/static/lck_background.png);background-size:50%;background-position:50%;opacity:.3;pointer-events:none;}.Navigation{clear:both;height:3.75rem;line-height:3.75rem;background-color:#27282d;color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:10;border-bottom:1px solid #2a2b30;}.container{color:#fbfbfb;max-width:1140px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.Menus__link{font-size:1px;font-size:1rem;margin-right:1.6rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;}.Menus__link.brand{font-size:1.875rem;font-family:Gilroy;color:#db0442;margin-right:4rem;}.Menus__link:not(.brand){top:-.25rem;position:relative;color:#fbfbfb;}.Menus__login{font-size:.75px;font-size:.75rem;padding-left:1.25rem;padding-right:1.25rem;cursor:pointer;margin-top:.875rem;height:2rem;line-height:normal;border:1px solid #01d1b2;color:#01d1b2;padding-top:.4rem;}.Menus__login:hover{-webkit-animation:login 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes login{100%{border-color:#16776A;color:#16776A;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxBcHBMYXlvdXRcXEFwcExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmlCLEFBRzJDLEFBY1AsQUFXRyxBQVNBLEFBT0ssQUFNUCxBQUtJLEFBYXFCLEFBS1osV0F2RFYsQ0FpQ0csRUF0QkQsQUFTRixFQWtCRSxFQXBEWCxDQXlDYSxFQTZCQSxHQXJFWixFQWNhLEdBb0JBLENBYU4sQ0E5Q04sQUF3QkcsRUEyQlUsRUFrQnJCLENBTEwsRUF4Qm1CLENBdkNMLEdBd0JVLEVBc0J2QixFQWpDNkIsRUFaVixDQWdDRSxHQU9DLEVBV0ksT0ExQkosRUF2QlUsTUE2RGhDLENBdEJBLENBM0JlLEtBc0NJLEdBMUJHLEdBWEYsU0FaK0IsQUFrRDVCLE1BMUJGLGFBMkJMLElBMUJoQixRQVpVLEFBdUNhLE1BdENSLE1BaUJPLEtBOUJFLEFBY1ksRUFzQ1AsV0FyQjdCLE9BOUI0QixPQW9EVixLQXRDbEIsU0F1Q3NCLEdBcERQLFdBQ1MsSUFvRHhCLGdCQW5EQSIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxBcHBMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxlYWd1ZUJhY2tncm91bmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJOYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rIEdpbHJveSBicmFuZFwiIGhyZWY9XCIjXCI+UVdFUi5HRzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+6rK96riwIOqysOqzvDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+7ZSE66Gc67mM65OcPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rXCIgaHJlZj1cIiNcIj7qsr3quLAg7J287KCVPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rXCIgaHJlZj1cIiNcIj7tlZjsnbTrnbzsnbTtirg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWVudXNfX2xpbmtcIiBocmVmPVwiI1wiPuy7pOuupOuLiO2LsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJNZW51c19fbG9naW4gZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+66Gc6re47J24PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZUJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOnVybCgvc3RhdGljL2xja19iYWNrZ3JvdW5kLnBuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjgyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyYjMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWVudXNfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1lbnVzX19saW5rLmJyYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdpbHJveTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYjA0NDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1lbnVzX19saW5rOm5vdCguYnJhbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWVudXNfX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWQxYjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDFkMWIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NZW51c19fbG9naW46aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjpsb2dpbiAgIDAuM3MgZWFzZSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9naW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMxNjc3NkE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogICMxNjc3NkE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\AppLayout\\AppLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/Home/LeagueSelector.js":
/*!*******************************************!*\
  !*** ./components/Home/LeagueSelector.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\LeagueSelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const LeagueSelector = () => {
  console.log("hi");
  return __jsx("div", {
    className: "jsx-2918769045",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2918769045" + " " + "FluidContainer container-fluid LeagueSelector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2918769045" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2918769045" + " " + "TournamentSymbol LeagueSelector__highlighted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/lck_image.png",
    alt: "LCK 2019 Summer Season",
    className: "jsx-2918769045" + " " + "TournamentSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2918769045" + " " + "TournamentSymbol__label Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "LCK 2019 Summer")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2918769045",
    __self: undefined
  }, ".LeagueSelector{background-color:#27282d;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.LeagueSelector .container{position:relative;}.TournamentSymbol{padding-bottom:.625rem;border-bottom:2px solid transparent;}.TournamentSymbol__image{height:2.5rem;width:2.5rem;margin-top:.625rem;vertical-align:top;}.TournamentSymbol__badge,.TournamentSymbol__label{margin-left:.625rem;display:inline-block;vertical-align:top;margin-top:.625rem;line-height:2.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxIb21lXFxMZWFndWVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhK0IsQUFHOEMsQUFLZCxBQU9PLEFBR0ssQUFJVCxBQU1NLFdBbkJELEdBY04sSUFQakIsRUFheUIsR0FWZSxFQWZyQixFQW9CSSxHQWRELFVBTEQsQ0F5QkUsS0FMQSxFQWRELFdBU3RCLENBV3VCLEtBTHZCLENBZHFCLGFBb0JFLElBbkJ2QixlQW9CQSwyQkEzQkEiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEhvbWVcXExlYWd1ZVNlbGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY29uc3QgTGVhZ3VlU2VsZWN0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmx1aWRDb250YWluZXIgY29udGFpbmVyLWZsdWlkIExlYWd1ZVNlbGVjdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVG91cm5hbWVudFN5bWJvbCBMZWFndWVTZWxlY3Rvcl9faGlnaGxpZ2h0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJUb3VybmFtZW50U3ltYm9sX19pbWFnZVwiIHNyYz1cInN0YXRpYy9sY2tfaW1hZ2UucG5nXCIgYWx0PVwiTENLIDIwMTkgU3VtbWVyIFNlYXNvblwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVG91cm5hbWVudFN5bWJvbF9fbGFiZWwgR2lscm95XCI+TENLIDIwMTkgU3VtbWVyPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLkxlYWd1ZVNlbGVjdG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyODJkOztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuTGVhZ3VlU2VsZWN0b3IgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLlRvdXJuYW1lbnRTeW1ib2wge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5Ub3VybmFtZW50U3ltYm9sX19pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuVG91cm5hbWVudFN5bWJvbF9fYmFkZ2UsIC5Ub3VybmFtZW50U3ltYm9sX19sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMZWFndWVTZWxlY3RvcjsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\LeagueSelector.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LeagueSelector);

/***/ }),

/***/ "./components/Home/LiveStream.js":
/*!***************************************!*\
  !*** ./components/Home/LiveStream.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\LiveStream.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const LiveStream = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    class: "FluidContainer container-fluid",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    class: "container LiveStreams Intro__section",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    class: "Title Gilroy",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    class: "Title__squares",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    class: "Title__square",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square small",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square small",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), "Live STREAMING"), __jsx("div", {
    class: "LiveStreams__container",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    class: "LiveStreams__streaming",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("img", {
    class: "LiveStreams__streaming__thumbnail",
    src: "https://static-cdn.jtvnw.net/previews-ttv/live_user_rush-320x180.jpg",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("div", {
    class: "LiveStreams__streaming_player",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("figure", {
    class: "PlayerIcon LiveStreams__streaming__playerIcon small",
    style: {
      backgroundImage: "url(https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/60/FOX_Rush_2019_Split_1.png)"
    },
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("div", {
    class: "LiveStreams__streaming__playerName",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "FOX Rush"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2880612783",
    __self: undefined
  }, ".LiveStreams__container{margin-right:-.625rem;}.LiveStreams__streaming{display:inline-block;vertical-align:top;margin-bottom:1.25rem;margin-right:.625rem;width:calc(20% - .625rem);}.LiveStreams__streaming__thumbnail{width:100%;height:auto;margin-bottom:.5rem;}.PlayerIcon{width:2.5rem;height:2.5rem;background-size:cover;border-radius:50%;margin:0;}.PlayerIcon.small{width:1.875rem;height:1.875rem;}.LiveStreams__streaming__playerName{display:inline-block;vertical-align:top;position:relative;margin-left:.5rem;top:.2rem;color:#fbfbfb;}.LiveStreams__streaming__playerIcon{display:inline-block;vertical-align:top;border:1px solid #d8d8d8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxIb21lXFxMaXZlU3RyZWFtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCaUIsQUFHK0MsQUFHRCxBQU9WLEFBS0UsQUFPRSxBQUlNLEFBUUEsV0F2QlQsRUFLRSxFQU9FLE1BbkJHLEFBdUJBLEFBUUEsQ0FsQ3ZCLENBV3dCLElBS0UsSUFPMUIsU0FuQjBCLEFBdUJKLEFBUU8sR0F2QjdCLE1BS3NCLFNBV0EsSUF2QkcsR0ErQnpCLEVBbEJhLFNBQ2IsQUFVYyxPQXZCZ0IsR0F3QlosY0FDbEIsU0F4QkEiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEhvbWVcXExpdmVTdHJlYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTGl2ZVN0cmVhbSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkZsdWlkQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBMaXZlU3RyZWFtcyBJbnRyb19fc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIlRpdGxlIEdpbHJveVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGl0bGVfX3NxdWFyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGl0bGVfX3NxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRpdGxlX19zcXVhcmUgc21hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUaXRsZV9fc3F1YXJlIHNtYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMaXZlIFNUUkVBTUlOR1xyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkxpdmVTdHJlYW1zX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkxpdmVTdHJlYW1zX19zdHJlYW1pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIkxpdmVTdHJlYW1zX19zdHJlYW1pbmdfX3RodW1ibmFpbFwiIHNyYz1cImh0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvcHJldmlld3MtdHR2L2xpdmVfdXNlcl9ydXNoLTMyMHgxODAuanBnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJMaXZlU3RyZWFtc19fc3RyZWFtaW5nX3BsYXllclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiUGxheWVySWNvbiBMaXZlU3RyZWFtc19fc3RyZWFtaW5nX19wbGF5ZXJJY29uIHNtYWxsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vZ2FtZXBlZGlhLmN1cnNlY2RuLmNvbS9sb2xlc3BvcnRzX2dhbWVwZWRpYV9lbi82LzYwL0ZPWF9SdXNoXzIwMTlfU3BsaXRfMS5wbmcpXCJ9fT48L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkxpdmVTdHJlYW1zX19zdHJlYW1pbmdfX3BsYXllck5hbWVcIj5GT1ggUnVzaDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5MaXZlU3RyZWFtc19fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxpdmVTdHJlYW1zX19zdHJlYW1pbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjAlIC0gLjYyNXJlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5MaXZlU3RyZWFtc19fc3RyZWFtaW5nX190aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlBsYXllckljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QbGF5ZXJJY29uLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGl2ZVN0cmVhbXNfX3N0cmVhbWluZ19fcGxheWVyTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGl2ZVN0cmVhbXNfX3N0cmVhbWluZ19fcGxheWVySWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXZlU3RyZWFtOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\LiveStream.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LiveStream);

/***/ }),

/***/ "./components/Home/MatchSchedule.js":
/*!******************************************!*\
  !*** ./components/Home/MatchSchedule.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\MatchSchedule.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const MatchSchedule = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    class: "FluidContainer container-fluid",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    class: "container Intro_section",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    class: "Title Gilroy",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "MATCH SCHEDULE", __jsx("div", {
    class: "Title__squares",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    class: "Title__square",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square small",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square small",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }))), __jsx("ul", {
    class: "RecentMatches",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    class: "RecentMatches__split Gilroy",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "LCK 2019 Summer Season"), __jsx("li", {
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    class: "MatchBar",
    href: "#",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    class: "MatchBar__column date Gilroy finished",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "2019.09.16", __jsx("br", {
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), "13:00"), __jsx("div", {
    class: "MatchBar__column home",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("span", {
    class: "Gilroy MatchBar__team__line",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "DFM"), __jsx("figure", {
    class: "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    class: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/DFM.png)"
    },
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))), __jsx("div", {
    class: "MatchBar__column board",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    class: "ScoreBoard Gilroy MatchBar__column__score",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    class: "ScoreBoard__overlay",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "RESULT"), "3:1")), __jsx("div", {
    class: "MatchBar__column away",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("figure", {
    class: "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    class: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/V3.png)"
    },
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), __jsx("span", {
    class: "Gilroy MatchBar__team__line",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "V3")), __jsx("div", {
    class: "MatchBar__column arrow Gilroy",
    className: "jsx-1100016805",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "DETAIL")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1100016805",
    __self: undefined
  }, ".RecentMatches{padding:0;margin:-1.5rem 0 0;}.RecentMatches__split{float:right;margin:.625rem;}.RecentMatches li,.RecentMatchesul{margin:0;list-style:none;}.MatchBar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:5rem;background-color:#27282d;width:100%;color:#fbfbfb;-webkit-transition:background-color .15s;-webkit-transition:background-color .15s;transition:background-color .15s;margin-bottom:.125rem;position:relative;}.MatchBar__column.arrow,.MatchBar__column.date{width:6.25rem;}.MatchBar__column.date{padding-left:1.25rem;}.MatchBar__column.finished{color:#5b5c64;}.MatchBar__column{white-space:nowrap;position:relative;}.MatchBar__column.home{text-align:right;}.MatchBar__column.away,.MatchBar__column.home{width:30%;}.MatchBar__column.board{text-align:center;}.MatchBar__column.away{text-align:left;}.MatchBar__column.away,.MatchBar__column.home{width:30%;}.MatchBar__column{white-space:nowrap;position:relative;}.MatchBar__column.arrow,.MatchBar__column.date{width:6.25rem;}.MatchBar__column.arrow{text-align:right;padding-right:1.25rem;justify-self:right;}.ScoreBoard{position:relative;width:7.5rem;height:2.5rem;line-height:2.5rem;background-color:#1e2025;overflow-y:hidden;cursor:pointer;}.ScoreBoard__overlay{position:absolute;top:0;width:100%;height:100%;-webkit-transition:top .15s;-webkit-transition:top .15s;transition:top .15s;background-color:#db0442;}.ScoreBoard__overlay:hover{-webkit-animation:overlay 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes overlay{100%{-webkit-transition:top .15s;transition:top .15s;-webkit-transition-property:top;transition-property:top;-webkit-transition-duration:0.15s;transition-duration:0.15s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;}}.MatchBar__team__line{margin:0 1.5625rem;position:relative;top:-1.3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxIb21lXFxNYXRjaFNjaGVkdWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEaUIsQUFHbUMsQUFJRSxBQUlILEFBSUksQUFhQyxBQUdPLEFBR1AsQUFHSyxBQUlGLEFBR1AsQUFHUSxBQUdGLEFBR04sQUFHUyxBQUlMLEFBR0csQUFLQyxBQVNBLEFBU29CLEFBS2QsQUFRTCxTQXZGSCxDQVJHLEFBeUN2QixBQVNBLEVBOUNtQixFQXFCbkIsQUFNQSxBQTBCQSxFQVZBLENBVEEsQUFzQjBCLENBaEIxQixBQXFCaUIsQUFTUCxDQXhDWSxBQW1CQSxBQTJDQSxFQXBFdEIsR0ErQ2UsQ0FsRWYsRUFKQSxFQUpBLEVBaUVrQixJQVVGLEVBekNoQixBQW1CQSxBQTJDZ0IsQ0FiakIsQ0F2QndCLE1BTUEsRUFVUyxDQVdBLENBVWhDLFNBcENBLE1BTTZCLE9BZ0I3QixHQXhFdUIsQ0FrRUMsY0FURixlQW9CWSxHQW5CZixlQUNuQixDQVE2Qix5QkFDN0IsZ0JBVXdDLEdBN0VOLHFFQThFTiw4Q0E3RVosRUE4RVosVUE3RXlCLHlCQUNkLFdBQ0csY0FDMkIseUNBQ1IsMEVBQ1gsc0JBQ0osa0JBQ3RCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxIb21lXFxNYXRjaFNjaGVkdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE1hdGNoU2NoZWR1bGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJGbHVpZENvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgSW50cm9fc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIlRpdGxlIEdpbHJveVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNQVRDSCBTQ0hFRFVMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGl0bGVfX3NxdWFyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGl0bGVfX3NxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRpdGxlX19zcXVhcmUgc21hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUaXRsZV9fc3F1YXJlIHNtYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiUmVjZW50TWF0Y2hlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUmVjZW50TWF0Y2hlc19fc3BsaXQgR2lscm95XCI+TENLIDIwMTkgU3VtbWVyIFNlYXNvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIk1hdGNoQmFyXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiTWF0Y2hCYXJfX2NvbHVtbiBkYXRlIEdpbHJveSBmaW5pc2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDE5LjA5LjE2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzOjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIk1hdGNoQmFyX19jb2x1bW4gaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIkdpbHJveSBNYXRjaEJhcl9fdGVhbV9fbGluZVwiPkRGTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cIlRlYW1TeW1ib2wgTWF0Y2hCYXJfX2NvbHVtbl9fc3ltYm9sIGhpZGRlbi1pbi1waG9uZSBjaXJjbGVsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9ERk0ucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJNYXRjaEJhcl9fY29sdW1uIGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJTY29yZUJvYXJkIEdpbHJveSBNYXRjaEJhcl9fY29sdW1uX19zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlNjb3JlQm9hcmRfX292ZXJsYXlcIj5SRVNVTFQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiTWF0Y2hCYXJfX2NvbHVtbiBhd2F5XCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiVGVhbVN5bWJvbCBNYXRjaEJhcl9fY29sdW1uX19zeW1ib2wgaGlkZGVuLWluLXBob25lIGNpcmNsZWxlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9WMy5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJHaWxyb3kgTWF0Y2hCYXJfX3RlYW1fX2xpbmVcIj5WMzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIk1hdGNoQmFyX19jb2x1bW4gYXJyb3cgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFVEFJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuUmVjZW50TWF0Y2hlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLTEuNXJlbSAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SZWNlbnRNYXRjaGVzX19zcGxpdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmVjZW50TWF0Y2hlcyBsaSwgLlJlY2VudE1hdGNoZXN1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI4MmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjEyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5hcnJvdywgLk1hdGNoQmFyX19jb2x1bW4uZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2LjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5maW5pc2hlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWI1YzY0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4uaG9tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5hd2F5LCAuTWF0Y2hCYXJfX2NvbHVtbi5ob21lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4uYm9hcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NYXRjaEJhcl9fY29sdW1uLmF3YXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5hd2F5LCAuTWF0Y2hCYXJfX2NvbHVtbi5ob21lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NYXRjaEJhcl9fY29sdW1uLmFycm93LCAuTWF0Y2hCYXJfX2NvbHVtbi5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NYXRjaEJhcl9fY29sdW1uLmFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5TY29yZUJvYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNy41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAyNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5TY29yZUJvYXJkX19vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIwNDQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuU2NvcmVCb2FyZF9fb3ZlcmxheSA6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjpvdmVybGF5ICAwLjNzIGVhc2UgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIG92ZXJsYXl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgLjE1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX3RlYW1fX2xpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMS41NjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEuM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXRjaFNjaGVkdWxlOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\MatchSchedule.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MatchSchedule);

/***/ }),

/***/ "./components/Home/TeamIntro.js":
/*!**************************************!*\
  !*** ./components/Home/TeamIntro.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\TeamIntro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const TeamIntro = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3733778277" + " " + "Intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-3733778277" + " " + "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), "LEAGUE OF LEGENDS CHAMPIONS KOREA TEAMS"), __jsx("div", {
    className: "jsx-3733778277" + " " + "LeagueTeams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "LeagueTeams__teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "AF"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "DWG"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "GEN"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "GRF"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "HLE"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "SKT"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "JAG"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "KT"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "KZ"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "SB")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3733778277",
    __self: undefined
  }, ".Intro{background-color:#1e2025;padding-top:2.5rem;padding-bottom:2.5rem;}.Title{font-size:1.875px;font-size:1.875rem;position:relative;padding-top:1rem;color:#fbfbfb;text-transform:uppercase;}.Title__squares{font-size:0;position:absolute;top:0;}.Title__square{display:inline-block;vertical-align:top;width:10px;height:8px;margin-right:2px;background-color:#db0442;}.Title__square.small{width:8px;}.LeagueTeams{text-align:center;margin-bottom:3rem;}.LeagueTeams__link{margin-bottom:1.25rem;display:inline-block;}.LeagueSelector .container{position:relative;}.LeagueTeams__link:not(:last-child){margin-right:1.25rem;}.TeamSymbol.large{width:5rem;height:5rem;}.LeagueTeams__team{text-align:center;background-color:#fff;width:4.6875rem!important;height:4.6875rem!important;}.LeagueTeams__team:hover{-webkit-animation:team 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes team{0%{-webkit-transform:scale(1.0,1.0);}100%{-webkit-transform:scale(1.1,1.1);}}.TeamSymbol{display:inline-block;width:3.75rem;height:3.75rem;position:relative;margin:0;}.TeamSymbol:not(.circleless){border:1px solid #d8d8d8;border-radius:50%;background-color:#fbfbfb;}.TeamSymbol__image{width:100%;height:100%;-webkit-transform:scale(.7);-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);background-size:contain;background-repeat:no-repeat;background-position:50%;}.TeamSymbol__acronym{margin-top:.625rem;display:inline-block;color:#5b5c64;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxIb21lXFxUZWFtSW50cm8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZpQixBQUdrRCxBQUtQLEFBUU4sQUFLUyxBQVFYLEFBR1EsQUFJSSxBQUlKLEFBR0csQUFHVixBQUlPLEFBT2tCLEFBTXJDLEFBR0EsQUFHc0IsQUFPSSxBQUtkLEFBVVEsVUE3RHZCLENBaUJnQixBQW1DQSxDQWpFTSxNQVJDLEFBd0JBLEFBUXZCLEFBVTBCLENBeUNELEVBdEVGLEFBc0J2QixBQTBCa0IsQ0FqQ08sQ0FXekIsQUFtQ2dDLEVBL0VULEFBeUVELEtBM0RaLEdBNkNOLEFBR0EsRUFQTCxBQVlvQixDQXBEbkIsQ0FUc0IsQUF3QnRCLEdBWGUsQUE2QmUsQUF5Q1osR0F2RGxCLEFBd0M2QixDQXpFSCxNQW1FSixDQWhEUCxBQTREUyxHQVV4QixDQW5GcUIsT0FjQSxJQW5CckIsQUErQytCLEVBTS9CLEFBY2EsQUFNYixJQW5Fa0IsS0E4RGxCLEVBaEQ2QixPQWJBLE9BMEM3QixXQTVCQSxPQWJBLFlBdUU0Qix3QkFDSSw0QkFDSix3QkFFNUIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEhvbWVcXFRlYW1JbnRyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUZWFtSW50cm8gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSW50cm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRmx1aWRDb250YWluZXIgY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlRpdGxlIEdpbHJveVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMRUFHVUUgT0YgTEVHRU5EUyBDSEFNUElPTlMgS09SRUEgVEVBTVNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMZWFndWVUZWFtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fdGVhbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0FGLnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5BRjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkRXRzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkdFTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkdSRjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkhMRTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPlNLVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkpBRzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPktUPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9BRi5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+S1o8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0FGLnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5TQjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5JbnRybyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UaXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UaXRsZV9fc3F1YXJlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UaXRsZV9fc3F1YXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIwNDQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuVGl0bGVfX3NxdWFyZS5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5MZWFndWVUZWFtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZVRlYW1zX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGVhZ3VlU2VsZWN0b3IgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZVRlYW1zX19saW5rOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UZWFtU3ltYm9sLmxhcmdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZVRlYW1zX190ZWFtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNC42ODc1cmVtIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0LjY4NzVyZW0haW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZVRlYW1zX190ZWFtOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246dGVhbSAgIDAuM3MgZWFzZSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdGVhbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgMCV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wLCAxLjApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuVGVhbVN5bWJvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UZWFtU3ltYm9sOm5vdCguY2lyY2xlbGVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UZWFtU3ltYm9sX19pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UZWFtU3ltYm9sX19hY3JvbnltIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzViNWM2NDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtSW50cm87Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\TeamIntro.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamIntro);

/***/ }),

/***/ "./components/Home/TeamRank.js":
/*!*************************************!*\
  !*** ./components/Home/TeamRank.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\TeamRank.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const TeamRank = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    class: "FluidContainer container-fluid",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    class: "container Intro_section",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    class: "Title Gilroy",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    class: "Title__squares",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    class: "Title__square",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square small",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    class: "Title__square small",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), "LCK 2019 Summer \uC21C\uC704"), __jsx("div", {
    class: "Ranks",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("table", {
    class: "RankTable Gilroy Ranks--desktop",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("thead", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("th", {
    colspan: "3",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("th", {
    scope: "col",
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "\uC2B9-\uD328")), __jsx("th", {
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "\uC138\uD2B8")), __jsx("th", {
    scope: "col",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "\uB4DD\uC2E4\uCC28")))), __jsx("tbody", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("tr", {
    class: "RankTable__row RankTable__lead",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("td", {
    class: "RankTabe__row__logo",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"
    },
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "1"), __jsx("td", {
    class: "RankTable__name",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("span", {
    class: "hidden-in-mobile",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Griffin")), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "13W\xA05L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "72.2%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "29W\xA013L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "69.0%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "16"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1057806656",
    __self: undefined
  }, ".Ranks table{width:100%;}.RankTable{border-collapse:initial;border-spacing:0 1rem;width:100%;}thead{display:table-header-group;vertical-align:middle;border-color:inherit;}.RankTable thead th:first-child{font-size:1.875px;font-size:1.875rem;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}th{text-align:inherit;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}tbody{display:table-row-group;vertical-align:middle;border-color:inherit;}.RankTable tbody td:first-child{width:5rem;position:relative;background-color:#fbfbfb;background-size:60%;background-position:.625rem;background-repeat:no-repeat;}.RankTable tbody td{height:3.75rem;-webkit-transition:background-color .15s;-webkit-transition:background-color .15s;transition:background-color .15s;background-color:#5b5c64;}.RankTable tbody tr.RankTable__lead td:not(:first-child){background-color:#db0442;}.RankTable tbody td:nth-child(2){font-size:1.5px;font-size:1.5rem;text-align:center;width:3rem;}.RankTable tbody td:nth-child(4){width:6rem;}.RankTable tbody td:last-child{width:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxIb21lXFxUZWFtUmFuay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2lCLEFBR29DLEFBR2EsQUFLRyxBQUtULEFBSUYsQUFJRyxBQUdILEFBSVEsQUFLYixBQVFJLEFBTVUsQUFHVCxBQU1MLEFBR0EsV0ExRGYsQUFpQ3NCLEFBdUJ0QixBQUdBLElBbEI2QyxDQXhCaEIsQUFPQSxBQTBCUixFQXJDRSxDQVF2QixLQWxCMEIsQUF5QkEsQ0FtQjFCLEVBdkMwQixFQTBCRyxJQWlCUCxJQXJDdEIsSUFJQSxBQU9BLEtBckJlLEFBeUJVLEdBcEJBLEVBMkNWLEdBakJTLEVBT2EsQ0FyQ3JDLEtBZ0RBLEtBdkJBLEdBcEJBLElBMEJnQyw0QkFDQSw0QkFDaEMsQUFLNkIseUJBQzdCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxIb21lXFxUZWFtUmFuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBUZWFtUmFuayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkZsdWlkQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBJbnRyb19zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiVGl0bGUgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUaXRsZV9fc3F1YXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRpdGxlX19zcXVhcmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlRpdGxlX19zcXVhcmUgc21hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExDSyAyMDE5IFN1bW1lciDsiJzsnIRcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJSYW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJSYW5rVGFibGUgR2lscm95IFJhbmtzLS1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjb2xzcGFuPVwiMlwiPjxzcGFuPuyKuS3tjKg8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+PHNwYW4+7IS47Yq4PC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjxzcGFuPuuTneyLpOywqDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cIlJhbmtUYWJsZV9fcm93IFJhbmtUYWJsZV9fbGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJSYW5rVGFiZV9fcm93X19sb2dvXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvR1JGLnBuZylcIn19PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiUmFua1RhYmxlX19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlbi1pbi1tb2JpbGVcIj5HcmlmZmluPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxM1cmbmJzcDs1TFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NzIuMiU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MjlXJm5ic3A7MTNMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjY5LjAlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE2PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rcyB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItc3BhY2luZzogMCAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0aGVhZCB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy4xMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0aGVhZCB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy4xMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0Ym9keSB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzViNWM2NDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0Ym9keSB0ci5SYW5rVGFibGVfX2xlYWQgdGQ6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIwNDQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRkOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1SYW5rOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\Home\\TeamRank.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamRank);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var _components_Home_LeagueSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/LeagueSelector */ "./components/Home/LeagueSelector.js");
/* harmony import */ var _components_Home_TeamIntro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/TeamIntro */ "./components/Home/TeamIntro.js");
/* harmony import */ var _components_Home_LiveStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/LiveStream */ "./components/Home/LiveStream.js");
/* harmony import */ var _components_Home_MatchSchedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/MatchSchedule */ "./components/Home/MatchSchedule.js");
/* harmony import */ var _components_Home_TeamRank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/TeamRank */ "./components/Home/TeamRank.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Home = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Home_LeagueSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_components_Home_TeamIntro__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(_components_Home_LiveStream__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(_components_Home_MatchSchedule__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_components_Home_TeamRank__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ReactProject\javaproject\lod.gg\e-pog_frontend\pages\index.js */"./pages/index.js");


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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map