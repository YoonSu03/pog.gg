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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
    className: "jsx-3425952613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-3425952613" + " " + "Navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3425952613" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link Gilroy brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "E-Pog.GG"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "\uACBD\uAE30 \uACB0\uACFC"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "\uD504\uB85C\uBE4C\uB4DC"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "\uACBD\uAE30 \uC77C\uC815"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "\uD558\uC774\uB77C\uC774\uD2B8"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\uCEE4\uBBA4\uB2C8\uD2F0"), __jsx("span", {
    className: "jsx-3425952613" + " " + "Menus__login float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3425952613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778")))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3425952613",
    __self: undefined
  }, ".Navigation{clear:both;height:3.75rem;line-height:3.75rem;background-color:#27282d;color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:10;border-bottom:1px solid #2a2b30;}.container{color:#fbfbfb;max-width:1140px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.Menus__link{font-size:1px;font-size:1rem;margin-right:1.6rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;}.Menus__link.brand{font-size:1.875rem;font-family:Gilroy;color:#db0442;margin-right:4rem;}.Menus__link:not(.brand){top:-.25rem;position:relative;color:#fbfbfb;}.Menus__login{font-size:.75px;font-size:.75rem;padding-left:1.25rem;padding-right:1.25rem;cursor:pointer;margin-top:.875rem;height:2rem;line-height:normal;border:1px solid #01d1b2;color:#01d1b2;padding-top:.4rem;}.Menus__login:hover{-webkit-animation:login 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes login{100%{border-color:#16776A;color:#16776A;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxBcHBMYXlvdXRcXEFwcExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmlCLEFBR29DLEFBV0csQUFTQSxBQU9LLEFBTVAsQUFLSSxBQWFxQixBQUtaLFdBdkRWLENBaUNHLEVBdEJELEFBU0YsRUFrQkUsR0FYRSxFQTZCQSxLQXZEQyxHQW9CQSxDQWFOLENBdEJILEVBMkJVLEVBa0JyQixDQUxMLEVBeEJtQixJQWZLLEVBc0J2QixFQWpDNkIsR0FvQlIsR0FPQyxFQVdJLE9BMUJKLFFBc0N0QixDQXRCQSxDQTNCZSxLQXNDSSxHQTFCRyxHQVhGLFNBc0NHLE1BMUJGLGFBMkJMLElBMUJoQixRQVpVLEFBdUNhLE1BdENSLE1BaUJPLEtBaEJjLEVBc0NQLFdBckI3QixjQXNCa0IsS0F0Q2xCLFNBdUNzQixrQkFDdEIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEFwcExheW91dFxcQXBwTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJOYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rIEdpbHJveSBicmFuZFwiIGhyZWY9XCIjXCI+RS1Qb2cuR0c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWVudXNfX2xpbmtcIiBocmVmPVwiI1wiPuqyveq4sCDqsrDqs7w8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWVudXNfX2xpbmtcIiBocmVmPVwiI1wiPu2UhOuhnOu5jOuTnDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+6rK96riwIOydvOyglTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+7ZWY7J2065287J207Yq4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rXCIgaHJlZj1cIiNcIj7su6TrrqTri4jti7A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiTWVudXNfX2xvZ2luIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuuhnOq3uOyduDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5OYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI4MmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJhMmIzMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1lbnVzX19saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NZW51c19fbGluay5icmFuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHaWxyb3k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZGIwNDQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NZW51c19fbGluazpub3QoLmJyYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1lbnVzX19sb2dpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDFkMWIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAxZDFiMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IC40cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWVudXNfX2xvZ2luOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246bG9naW4gICAwLjNzIGVhc2UgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxvZ2lue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTY3NzZBO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICAjMTY3NzZBO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\components\\AppLayout\\AppLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const EPogg = ({
  Component
}) => {
  console.log("hi");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-1573724804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "e-pog.gg")), __jsx(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(Component, {
    className: "jsx-1573724804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1573724804",
    __self: undefined
  }, ".LeagueBackground{position:absolute;top:0;left:0;right:0;bottom:0;position:fixed;background-repeat:no-repeat;background-image:url(/static/lck_background.png);background-size:50%;background-position:50%;opacity:.3;pointer-events:none;}*{box-sizing:border-box;}body{margin:0;font-family:Spoqa Han Sans,Spoqa Han Sans JP,\"Sans-serif\",\"sans-serif\",Apple SD Gothic Neo,Helvetica Neue,Arial;font-size:1rem;background-color:#1e2025;font-weight:400;line-height:1.5;}a{-webkit-text-decoration:none;text-decoration:none;color:white;}img,svg{vertical-align:middle;}td{display:table-cell;vertical-align:inherit;}.Icon,.Menus__link{display:inline-block;}.Gilroy{font-family:Gilroy,Spoqa Han Sans,Spoqa Han Sans JP,\"Sans-serif\";font-weight:700;}.float-right{float:right!important;}.FluidContainer{background-color:#1e2025;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGUtcG9nX2Zyb250ZW5kXFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlYSxBQUd1QyxBQWNJLEFBR2IsQUFRWSxBQUlDLEFBR0gsQUFJRSxBQUc0QyxBQUkzQyxBQUdHLFNBNUJ1RixTQWpCMUcsQ0FnQ2lCLEVBSTNCLENBdEJBLEFBZUEsQUFjQSxFQTFDVyxDQTZDWCxNQTVDWSxRQUNDLEdBOEJiLE1BN0JtQixFQXFCSCxZQUNoQixDQXJCZ0MsRUFrQ1osZ0JBQ3BCLFVBbENvRCw4QkFZakMsZUFDVSxJQVpMLG9CQUNJLENBWVIsZ0JBQ0EsT0FaTCxTQWFmLEVBWndCLG9CQUN4QiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0FwcExheW91dCc7XHJcblxyXG5jb25zdCBFUG9nZyA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhpXCIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPmUtcG9nLmdnPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudC8+XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIC5MZWFndWVCYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgvc3RhdGljL2xja19iYWNrZ3JvdW5kLnBuZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogU3BvcWEgSGFuIFNhbnMsU3BvcWEgSGFuIFNhbnMgSlAsXCJTYW5zLXNlcmlmXCIsXCJzYW5zLXNlcmlmXCIsQXBwbGUgU0QgR290aGljIE5lbyxIZWx2ZXRpY2EgTmV1ZSxBcmlhbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAyNTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nLCBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5JY29uLCAuTWVudXNfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5HaWxyb3kge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ksU3BvcWEgSGFuIFNhbnMsU3BvcWEgSGFuIFNhbnMgSlAsXCJTYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mbG9hdC1yaWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5GbHVpZENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAyNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRVBvZ2c7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\e-pog_frontend\\pages\\_app.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EPogg);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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
//# sourceMappingURL=_app.js.map