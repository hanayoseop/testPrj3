"use strict";
(() => {
var exports = {};
exports.id = 318;
exports.ids = [318];
exports.modules = {

/***/ 7993:
/***/ ((module) => {

module.exports = require("mysql2");

/***/ }),

/***/ 4537:
/***/ ((module) => {

module.exports = require("next");

/***/ }),

/***/ 3212:
/***/ ((module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

const mysql = __webpack_require__(7993);

let db;

try {
  db = mysql.createConnection({
    user: "rite",
    password: "rite6573719@",
    host: "218.155.53.116",
    // host: "127.0.0.1",
    port: "3306",
    database: "rite"
  });
} catch (err) {
  console.error(err);
}

module.exports = db;

/***/ }),

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4537);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);


const db = __webpack_require__(3212);

function test(req, res) {
  db.query("SELECT no as id, exam_typ, concat(name, ' || ', school) as name, reg_date FROM rite.t_test_result_ex1 ORDER BY no desc", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      // console.log("123");
      // console.log(result);
      res.json(result); // return result;
    }
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(793));
module.exports = __webpack_exports__;

})();