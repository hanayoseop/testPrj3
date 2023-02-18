"use strict";
(() => {
var exports = {};
exports.id = 664;
exports.ids = [664];
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

/***/ 7726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4537);
/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);


const db = __webpack_require__(3212);

function save(req, res) {
  // console.log(req.body.name);
  // console.log(req.body);
  db.query("insert into rite.t_test_result_ex1 (name, school, result01, result02, result03, result04, result05, result06, result07, result08, result09, result10, class, comment, reg_date, exam_typ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,SYSDATE(),'EX1')", [req.body.name, req.body.school, req.body.result01, req.body.result02, req.body.result03, req.body.result04, req.body.result05, req.body.result06, req.body.result07, req.body.result08, req.body.result09, req.body.result10, req.body.result_class, req.body.comment], function (err, result) {
    if (err) {
      console.log(err); // console.log(req.body);
    } else {
      // console.log(result);
      res.json(result);
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
var __webpack_exports__ = (__webpack_exec__(7726));
module.exports = __webpack_exports__;

})();