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
exports.id = "pages/api/list2";
exports.ids = ["pages/api/list2"];
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

/***/ "(api)/./pages/api/list2.jsx":
/*!*****************************!*\
  !*** ./pages/api/list2.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ list2)\n/* harmony export */ });\n// import { NextApiRequest, NextApiResponse } from \"next\";\nconst db = __webpack_require__(/*! ../../db/db */ \"(api)/./db/db.js\");\n\nfunction list2(req, res) {\n  console.log(req.body);\n  db.query(\"SELECT * FROM rite.t_test_result_ex1 where no = ?\", [req.query.id], function (err, result) {\n    if (err) {\n      console.log(err);\n    } else {\n      // console.log(req.body.id);\n      // console.log(\"123\");\n      // console.log(result);\n      res.json(result); // return result;\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlzdDIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLE1BQU1BLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFsQjs7QUFFZSxTQUFTQyxLQUFULENBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCO0FBQ3BDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBRyxDQUFDSSxJQUFoQjtBQUNBUCxFQUFBQSxFQUFFLENBQUNRLEtBQUgsQ0FDSSxtREFESixFQUVJLENBQUNMLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxFQUFYLENBRkosRUFHSSxVQUFVQyxHQUFWLEVBQWVDLE1BQWYsRUFBdUI7QUFDbkIsUUFBSUQsR0FBSixFQUFTO0FBQ0xMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0gsS0FGRCxNQUVPO0FBQ0g7QUFDQTtBQUNBO0FBQ0FOLE1BQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTRCxNQUFULEVBSkcsQ0FLSDtBQUNIO0FBQ0osR0FiTDtBQWVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL3BhZ2VzL2FwaS9saXN0Mi5qc3g/NDAxYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuY29uc3QgZGIgPSByZXF1aXJlKFwiLi4vLi4vZGIvZGJcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0MihyZXEsIHJlcykge1xyXG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgZGIucXVlcnkoXHJcbiAgICAgICAgXCJTRUxFQ1QgKiBGUk9NIHJpdGUudF90ZXN0X3Jlc3VsdF9leDEgd2hlcmUgbm8gPSA/XCIsXHJcbiAgICAgICAgW3JlcS5xdWVyeS5pZF0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keS5pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjEyM1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsInJlcXVpcmUiLCJsaXN0MiIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwicXVlcnkiLCJpZCIsImVyciIsInJlc3VsdCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/list2.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/list2.jsx"));
module.exports = __webpack_exports__;

})();