webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/LolLayout/LolLayout.js":
/*!*******************************************!*\
  !*** ./components/LolLayout/LolLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\LolLayout\\LolLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _onClick = function onClick(e) {
    e.preventDefault();
    window.location = 'http://localhost:3000/summoner?name=' + username;
  };

  var onEnterClick = function onEnterClick(e) {
    if (e.charCode == 13) {
      _onClick(e);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    "class": "header-gnb",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    "class": "header-items",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    "class": "site-item",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    src: "https://poro.gg/images/family/ico_lol.png",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uB9AC\uADF8\uC624\uBE0C\uB808\uC804\uB4DC"))))))), __jsx("div", {
    "class": "sub-items",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    "class": "sub-items-top",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    "class": "sub-items-top-logo",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("img", {
    src: "../../static/main_logo.png",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uD3EC\uADF8\uC9C0\uC9C0")), __jsx("div", {
    "class": "sub-items-top-input",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("input", {
    value: username,
    onKeyPress: onEnterClick,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    placeholder: "\uCC54\uD53C\uC5B8, \uC18C\uD658\uC0AC\uBA85 \uAC80\uC0C9",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick(e) {
      return _onClick(e);
    },
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1604195779" + " " + "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })))), __jsx("div", {
    "class": "sub-items-bottom",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    "class": "sub-items-list",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\uD648")), __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\uCC54\uD53C\uC5B8\uBD84\uC11D")), __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "e\uC2A4\uD3EC\uCE20")), __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uD504\uB85C\uAD00\uC804")))))), __jsx("div", {
    "class": "notice",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    "class": "notice_item",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("i", {
    style: {
      paddingRight: "5px"
    },
    className: "jsx-1604195779" + " " + "fas fa-exclamation-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), "\uC548\uB155\uD558\uC138\uC694 lod.gg\uC5D0 \uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1604195779",
    __self: this
  }, "body{margin:0;background-color:#f5f5f5;}ul{list-style-type:none;margin:0;padding:0;}a{-webkit-text-decoration:none;text-decoration:none;color:white;}.header-gnb{font-family:'Open Sans',sans-serif;height:40px;background-color:#232F46;}.header-items{height:40px;width:1050px;margin:0 auto;}.site-item{float:left;width:800px;height:40px;}.site-item ul li span{font-size:13px;color:#c0daf1;}.header-items ul{height:100%;}.header-items ul li{padding:0 16px;height:40px;width:120px;}.header-items ul li:first-child{padding-left:0px;padding-right:16px;}.header-items ul li:active{background-color:#313641;}.header-items ul li a img{vertical-align:middle;position:relative;top:-1px;width:17px;height:17px;padding-right:5px;}.header-items ul li a{line-height:40px;font-size:15px;}.sub-items{background-image:url(/static/sub_background.png);height:200px;}.sub-items-top{width:1050px;margin:0 auto;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;}.sub-items-top-logo{margin-left:14px;}.sub-items-top-logo>span{line-height:70px;}.sub-items-top-logo>img{width:150px;height:70px;}.sub-items-top-input{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:300px;height:35px;}.sub-items-top-input input{float:left;font-size:12px;width:300px;border:0;line-height:35px;padding:0 12px 0 12px;}.sub-items-top-input button{background:#ffffff;height:35px;width:50px;cursor:pointer;border:none;}.sub-items-bottom{height:50px;background-color:rgba(0,0,0,.3);}.sub-items-bottom ul li{width:76px;float:left;line-height:47px;margin-right:15px;text-align:center;}.sub-items-bottom ul li:hover{border-bottom:2px solid #ffffff;}.sub-items-bottom ul li a{font-size:15px;color:#d6d6d6;}.sub-items-list{width:1050px;margin:0 auto;}.notice{height:40px;background-color:#ffc528;}.notice_item{font-size:14px;width:1050px;margin:0 auto;line-height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxMb2xMYXlvdXRcXExvbExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGlCLEFBR2tDLEFBSVksQUFLQSxBQUllLEFBS3hCLEFBS0QsQUFLSSxBQUlILEFBR0csQUFLRSxBQUlRLEFBR0gsQUFRTCxBQUlnQyxBQUlwQyxBQVNJLEFBR0EsQUFHTCxBQUlDLEFBT0YsQUFRUSxBQU9QLEFBSUQsQUFPcUIsQUFHakIsQUFJRixBQUlELEFBS0csU0FsSVUsRUF1QmIsQUFrRUcsQUFtQkosQ0ExRkUsQUFjakIsQUE4Q2dCLEFBMEJvQixBQXNCUCxDQS9EWCxBQTJEQSxFQTlGQSxBQU9GLEFBbUZFLEFBYUQsRUEzRk0sQUFlSixBQWlCbkIsQUFHQSxFQXNCZ0IsRUE3RkgsQ0EyQ1MsQUE4REQsQ0FyRkwsQ0F1RGhCLENBNURrQixBQXlCbEIsQ0E4Q2dCLENBdERDLEFBNEJBLEFBMkRqQixDQVNrQixDQXZHbEIsQUEwRkEsQ0FsSGMsQ0E2RkMsQ0ExQ2YsQUEyREEsRUFsSEEsQ0FZZ0IsQUFZaEIsQ0FnQkEsQ0FzRkEsQ0FwQ2EsQ0F2RWIsQUFpQkEsQUF5RXNCLENBeEd0QixBQTBDYSxBQWlCSSxFQWtDRSxBQWtDRSxFQTVCckIsR0EzRjZCLEFBOEVSLEVBM0NOLEFBVUUsQ0FsREQsT0EyRkEsQUFXTSxFQXVCdEIsQ0FwRmdCLEVBeENoQixBQWtEQSxFQWlDMEIsS0FRMUIsR0F0RkEsQUFvQ3NCLEVBK0JLLENBOEIzQixXQWxCQSxJQTFDQSx3QkFja0MsMkRBaUJYLHdEQWhCQSxxQ0FpQlAsWUFDQSxZQUNoQixnQ0FsQmdCLFlBQ2hCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxMb2xMYXlvdXRcXExvbExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBBcHBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3N1bW1vbmVyP25hbWU9Jyt1c2VybmFtZTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9uRW50ZXJDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZS5jaGFyQ29kZSA9PSAxMyl7XHJcbiAgICAgICAgICAgIG9uQ2xpY2soZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXItZ25iXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3Bvcm8uZ2cvaW1hZ2VzL2ZhbWlseS9pY29fbG9sLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+66as6re47Jik67iM66CI7KCE65OcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaXRlbXMtdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWItaXRlbXMtdG9wLWxvZ29cIj48aW1nIHNyYz17XCIuLi8uLi9zdGF0aWMvbWFpbl9sb2dvLnBuZ1wifS8+PHNwYW4+7Y+s6re47KeA7KeAPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLXRvcC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25LZXlQcmVzcz17b25FbnRlckNsaWNrfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCLssZTtlLzslrgsIOyGjO2ZmOyCrOuqhSDqsoDsg4lcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrKGUpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtcy1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+7ZmIPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj7ssZTtlLzslrjrtoTshJ08L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPmXsiqTtj6zsuKA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPu2UhOuhnOq0gOyghDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90aWNlX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXhjbGFtYXRpb24tY2lyY2xlXCIgc3R5bGU9e3twYWRkaW5nUmlnaHQ6IFwiNXB4XCJ9fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAg7JWI64WV7ZWY7IS47JqUIGxvZC5nZ+yXkCDsmKTsi6DqsoPsnYQg7ZmY7JiB7ZWp64uI64ukIVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWduYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyRjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpdGUtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnNpdGUtaXRlbSB1bCBsaSBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzBkYWYxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWwgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogIDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHVsIGxpOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaTphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTM2NDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWwgbGkgYSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWwgbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL3N1Yl9iYWNrZ3JvdW5kLnBuZyk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtdG9wLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtbG9nbyA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtbG9nbyA+aW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtdG9wLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcC1pbnB1dCBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEycHggMCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcC1pbnB1dCBidXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLWJvdHRvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtYm90dG9tIHVsIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1ib3R0b20gdWwgbGk6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLWJvdHRvbSB1bCBsaSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDZkNmQ2O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdGljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzUyODtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdGljZV9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0OyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\LolLayout\\LolLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=_app.js.bc3a257f820e6b4192f7.hot-update.js.map