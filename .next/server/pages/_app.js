"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@mui/material/CssBaseline"
var CssBaseline_ = __webpack_require__(4960);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./styles/global-styles.js

const GlobalStyle = /*#__PURE__*/(0,external_styled_components_.createGlobalStyle)(["@font-face{font-family:'GmarketSansTTFBold';font-weight:normal;font-style:normal;src:url('../styles/fonts/GmarketSansTTFBold.ttf') format('ttf');}@font-face{font-family:'GmarketSansTTFLight';font-weight:normal;font-style:normal;src:url('../styles/fonts/GmarketSansTTFLight.ttf') format('ttf');}@font-face{font-family:'GmarketSansTTFMedium';font-weight:normal;font-style:normal;src:url('../styles/fonts/GmarketSansTTFMedium.ttf') format('ttf');}html,body{padding:0;margin:0;letter-spacing:-1px;font-size:15px;font-family:GmarketSansTTFMedium,-apple-system,sans-serif !important;}.txt-c{text-align:center;}.txt-r{text-align:right;}.txt-l{text-align:left;}p{margin:0;}"]);
;// CONCATENATED MODULE: external "@mui/material"
const material_namespaceObject = require("@mui/material");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { ThemeProvider } from "styled-components";





const theme = (0,material_namespaceObject.createTheme)({
  typography: {
    // 여기에도 폰트 추가해야 mui 태그도 폰트가 바뀜
    fontFamily: "GmarketSansTTFMedium"
  }
});

const App = props => {
  const {
    Component,
    pageProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_namespaceObject.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
};

/* harmony default export */ const _app = (App);

/***/ }),

/***/ 4960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1735));
module.exports = __webpack_exports__;

})();