"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/test";
exports.ids = ["pages/api/test"];
exports.modules = {

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ "(api)/./db/db.js":
/*!******************!*\
  !*** ./db/db.js ***!
  \******************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nconst mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\n\nlet db;\n\ntry {\n  db = mysql.createConnection({\n    user: \"rite\",\n    password: \"rite6573719@\",\n    host: \"218.155.53.116\",\n    // host: \"127.0.0.1\",\n    port: \"3306\",\n    database: \"rite\"\n  });\n} catch (err) {\n  console.error(err);\n}\n\nmodule.exports = db;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsRUFBSjs7QUFFQSxJQUFJO0FBQ0FBLEVBQUFBLEVBQUUsR0FBR0YsS0FBSyxDQUFDRyxnQkFBTixDQUF1QjtBQUN4QkMsSUFBQUEsSUFBSSxFQUFFLE1BRGtCO0FBRXhCQyxJQUFBQSxRQUFRLEVBQUUsY0FGYztBQUd4QkMsSUFBQUEsSUFBSSxFQUFFLGdCQUhrQjtBQUl4QjtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsTUFMa0I7QUFNeEJDLElBQUFBLFFBQVEsRUFBRTtBQU5jLEdBQXZCLENBQUw7QUFRSCxDQVRELENBU0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1ZDLEVBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkO0FBQ0g7O0FBRURHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlgsRUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vZGIvZGIuanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XHJcbmNvbnN0IG15c3FsID0gcmVxdWlyZShcIm15c3FsMlwiKTtcclxubGV0IGRiO1xyXG5cclxudHJ5IHtcclxuICAgIGRiID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgICAgdXNlcjogXCJyaXRlXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwicml0ZTY1NzM3MTlAXCIsXHJcbiAgICAgICAgaG9zdDogXCIyMTguMTU1LjUzLjExNlwiLFxyXG4gICAgICAgIC8vIGhvc3Q6IFwiMTI3LjAuMC4xXCIsXHJcbiAgICAgICAgcG9ydDogXCIzMzA2XCIsXHJcbiAgICAgICAgZGF0YWJhc2U6IFwicml0ZVwiLFxyXG4gICAgfSk7XHJcbn0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xyXG4iXSwibmFtZXMiOlsibXlzcWwiLCJyZXF1aXJlIiwiZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwidXNlciIsInBhc3N3b3JkIiwiaG9zdCIsInBvcnQiLCJkYXRhYmFzZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/test.jsx":
/*!****************************!*\
  !*** ./pages/api/test.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ test)\n/* harmony export */ });\n// import { NextApiRequest, NextApiResponse } from \"next\";\nconst db = __webpack_require__(/*! ../../db/db */ \"(api)/./db/db.js\");\n\nfunction test(req, res) {\n  db.query(\"SELECT no as id, exam_typ, concat(name, ' || ', school) as name, reg_date FROM rite.t_test_result_ex1 ORDER BY no desc\", function (err, result) {\n    if (err) {\n      console.log(err);\n    } else {\n      // console.log(\"123\");\n      // console.log(result);\n      res.json(result); // return result;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsTUFBTUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLHFDQUFELENBQWxCOztBQUVlLFNBQVNDLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsR0FBbkIsRUFBd0I7QUFDbkNKLEVBQUFBLEVBQUUsQ0FBQ0ssS0FBSCxDQUNJLHdIQURKLEVBRUksVUFBVUMsR0FBVixFQUFlQyxNQUFmLEVBQXVCO0FBQ25CLFFBQUlELEdBQUosRUFBUztBQUNMRSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNILEtBRkQsTUFFTztBQUNIO0FBQ0E7QUFDQUYsTUFBQUEsR0FBRyxDQUFDTSxJQUFKLENBQVNILE1BQVQsRUFIRyxDQUlIO0FBQ0g7QUFDSixHQVhMO0FBYUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vcGFnZXMvYXBpL3Rlc3QuanN4Pzk4MDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmNvbnN0IGRiID0gcmVxdWlyZShcIi4uLy4uL2RiL2RiXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdChyZXEsIHJlcykge1xyXG4gICAgZGIucXVlcnkoXHJcbiAgICAgICAgXCJTRUxFQ1Qgbm8gYXMgaWQsIGV4YW1fdHlwLCBjb25jYXQobmFtZSwgJyB8fCAnLCBzY2hvb2wpIGFzIG5hbWUsIHJlZ19kYXRlIEZST00gcml0ZS50X3Rlc3RfcmVzdWx0X2V4MSBPUkRFUiBCWSBubyBkZXNjXCIsXHJcbiAgICAgICAgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEyM1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsInJlcXVpcmUiLCJ0ZXN0IiwicmVxIiwicmVzIiwicXVlcnkiLCJlcnIiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/test.jsx"));
module.exports = __webpack_exports__;

})();