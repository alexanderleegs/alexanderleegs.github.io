webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header.js */ "./components/header.js");
/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/about.js */ "./components/about.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_exp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/exp */ "./components/exp.js");
/* harmony import */ var _components_proj__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/proj */ "./components/proj.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\Alex\\Documents\\Website\\website\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var works = [{
        name: 'dso1',
        img: "/images/dso.png",
        text: "I spent the summer at DSO National Laboratories working on a cognitive system for awareness and response. The AI developed was meant to be able to distinguish between instances of known classes which it had been trained on, and instances of unknown classes which had little similarity to the currently known classes it was trained on. The system would then handle each case appropriately. The framework designed allowed for the system to use interchangeable modules for each of its components. During the process of this internship, I investigated uncertainty modelling in AI with Bayesian neural networks and case-based reasoning.",
        caption: "Intern",
        date: "May \'19 - Aug \'19",
        "short": "Cognitive System Framework"
      }, {
        name: 'dso1',
        img: "/images/dso.png",
        text: "My internship at DSO National Laboratories for the summer was one of my first experiences working on AI. I helped to develop an AI agent for automatic image tracking and recognition. During this internship, I investigated the effectiveness of k-means clustering and transfer learning.",
        caption: "Intern",
        date: "May \'18 - Aug \'18",
        "short": "Automatic Image Tracking and Recognition"
      }, {
        name: 'tinkertanker',
        img: "/images/tinkertanker.png",
        text: "I spent the summer of 2017 interning at Tinkertanker, where I helped out with programming classes for schools on the Micro:bit. I also worked on a physical cardboard arcade machine, building the physical machine as well as a racing arcade game for it on the Arduino and the Micro:bit.",
        caption: "Intern",
        date: "May \'17 - Jul \'17",
        "short": "Cardboard Arcade"
      }, {
        name: 'nus',
        img: "/images/nus.jpg",
        text: "I have been a TA for CS1231 Discrete Structures (Fall 2017, Fall 2018) and CS3203 Software Engineering Project (Fall 2019, Spring 2020). My teaching duties involve conducting tutorial sessions, consultation sessions, assignment grading, and project discussion.",
        caption: "Teaching Assistant",
        date: "Aug \'17 - Apr \'20",
        "short": "Teaching Assistant for various modules"
      }];
      var projs = [{
        name: 'fyp',
        img: "/images/ai.png",
        text: "I worked on developing data poisoning attacks built specifically to affect the explanations provided by model explanation algorithms without affecting the underlying model, as part of my Final Year Project.",
        caption: "AI Research",
        date: "Apr \'20",
        "short": "Data Poisoning Attacks against Model Explanation Algorithms"
      }, {
        name: 'spa',
        img: "/images/checklist.png",
        text: "I worked on a Static Program Analyzer from scratch as part of a school group project. It was able to parse programs written in a custom language using top-down recursive descent, store the data, and answer queries about the program.",
        caption: "Static Program Analyzer",
        date: "Oct \'19",
        "short": "Static Program Analyzer to parse a program and answer queries"
      }, {
        name: 'pokemon',
        img: "/images/pokemon.ico",
        text: "I wrote an AI which could compete in structured Pokémon battles online as part of a group project. We investigated the use of deep Q-learning to train our agent.",
        caption: "Pokémon AI",
        date: "Oct \'18",
        "short": "Creating a Pokémon Master through Reinforcement Learning"
      }, {
        name: 'tetris',
        img: "/images/tetris.jpg",
        text: "I wrote a Java based Tetris playing AI as part of a school group project. We used a combination of a Genetic Algorithm and a Particle Swarm algorithm to build our model.",
        caption: "Tetris AI",
        date: "Mar \'18",
        "short": "Java-based Tetris playing AI"
      }, {
        name: 'bot',
        img: "/images/telegram.jpg",
        text: "I wrote a Telegram bot for internal route planning within NUS, meant to help students find the best trip to take to get to their next class. It retrieved a student's timetable and generated the appropriate path based on the internal shuttle bus route and timings. The project won 3rd prize at <hackfestsg/>.",
        caption: "Telegram bot",
        date: "Aug \'16",
        "short": "NUS Busbot"
      }];
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 9
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }, "Alexander Lee")), __jsx(_components_header_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }
      }), __jsx("body", {
        "class": "flexfill",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }
      }, __jsx(_components_about_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }), __jsx(_components_exp__WEBPACK_IMPORTED_MODULE_10__["default"], {
        items: works,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }), __jsx(_components_proj__WEBPACK_IMPORTED_MODULE_11__["default"], {
        items: projs,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }
      })), __jsx(_components_footer_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9d07509134af49446830.hot-update.js.map