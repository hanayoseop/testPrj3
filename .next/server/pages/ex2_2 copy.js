"use strict";
(() => {
var exports = {};
exports.id = 944;
exports.ids = [944];
exports.modules = {

/***/ 8476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1582);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(911);
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _pages_ex_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4142);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3682);
/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5612);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8610);
/* harmony import */ var _mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VolumeUp__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7229);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9181);
/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8823);
/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8099);
/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(443);
/* harmony import */ var _mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5953);
/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4848);
/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(1598);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_21__]);
axios__WEBPACK_IMPORTED_MODULE_21__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





























function ValueLabelComponent(props) {
  const {
    children,
    value
  } = props;
  return /*#__PURE__*/_jsx(Tooltip, {
    enterTouchDelay: 0,
    placement: "top",
    title: value,
    children: children
  });
}

function calculate(array) {
  let len = 0; // console.log(array);

  for (const num of array) {
    if (num > 0) {
      len += 1;
    }
  } // console.log("dddd" + len);


  if (len == 0) {
    return 0;
  } else {
    return (array.reduce((a, b) => a + b) / len).toFixed();
  }
}

function ex2(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_22__.useRouter)();
  const {
    0: name,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: school,
    1: setSchool
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: result_class,
    1: setResultClass
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: result_comment,
    1: setComment
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: sub1,
    1: setSub1
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub2,
    1: setSub2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub3,
    1: setSub3
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: overall1,
    1: setOverall1
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub4,
    1: setSub4
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub5,
    1: setSub5
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: overall2,
    1: setOverall2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub6,
    1: setSub6
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub7,
    1: setSub7
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub8,
    1: setSub8
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: overall3,
    1: setOverall3
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub9,
    1: setSub9
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub10,
    1: setSub10
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub11,
    1: setSub11
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub12,
    1: setSub12
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub13,
    1: setSub13
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: overall4,
    1: setOverall4
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub14,
    1: setSub14
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub15,
    1: setSub15
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub16,
    1: setSub16
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub17,
    1: setSub17
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub18,
    1: setSub18
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: overall5,
    1: setOverall5
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sum_overall1,
    1: setSumOverall1
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sum_overall2,
    1: setSumOverall2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sum_overall3,
    1: setSumOverall3
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // console.log(props.data);
    // console.log(props.data.NO);
    setSub1(props.data.RESULT01);
    setSub2(props.data.RESULT02);
    setSub3(props.data.RESULT03);
    setSub4(props.data.RESULT04);
    setSub5(props.data.RESULT05);
    setSub6(props.data.RESULT06);
    setSub7(props.data.RESULT07);
    setSub8(props.data.RESULT08);
    setSub9(props.data.RESULT09);
    setSub10(props.data.RESULT10);
    setSub11(props.data.RESULT11);
    setSub12(props.data.RESULT12);
    setSub13(props.data.RESULT13);
    setSub14(props.data.RESULT14);
    setSub15(props.data.RESULT15);
    setSub16(props.data.RESULT16);
    setSub17(props.data.RESULT17);
    setSub18(props.data.RESULT18);
    setResultClass(props.data.CLASS);
    setComment(props.data.COMMENT);
    setName(props.data.NAME);
    setSchool(props.data.SCHOOL);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sub1, sub2, sub3]); // console.log(sum);

    setOverall1(sum);
  }, [sub1, sub2, sub3]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sub4, sub5]); // console.log(sum);

    setOverall2(sum);
  }, [sub4, sub5]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sub6, sub7, sub8]); // console.log(sum);

    setOverall3(sum);
  }, [sub6, sub7, sub8]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sub9, sub10, sub11, sub12, sub13]); // console.log(sum);

    setOverall4(sum);
  }, [sub9, sub10, sub11, sub12, sub13]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sub14, sub15, sub16, sub17, sub18]); // console.log(sum);

    setOverall5(sum);
  }, [sub14, sub15, sub16, sub17, sub18]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([overall1 * 1, overall2 * 1, overall3 * 1]); // console.log(sum);

    setSumOverall1(sum);
  }, [overall1, overall2, overall3]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([overall4 * 1, overall5 * 1]); // console.log(sum);

    setSumOverall2(sum);
  }, [overall4, overall5]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sum_overall1 * 1, sum_overall2 * 1]); // console.log(sum);

    setSumOverall3(sum);
  }, [sum_overall1, sum_overall2]);

  const onChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "result_class":
        setResultClass(e.target.value); // console.log(e.target.value);

        break;

      case "result_comment":
        setComment(e.target.value);
        break;

      default:
        break;
    } // console.log(name);

  };

  const onChange2 = e => {
    setSchool(e.target.value); // console.log(name);
  };

  const handleSliderChange = (event, newValue) => {
    switch (event.target.name) {
      case "sub1":
        setSub1(newValue);
        break;

      case "sub2":
        setSub2(newValue);
        break;

      case "sub3":
        setSub3(newValue);
        break;

      case "sub4":
        setSub4(newValue);
        break;

      case "sub5":
        setSub5(newValue);
        break;

      case "sub6":
        setSub6(newValue);
        break;

      case "sub7":
        setSub7(newValue);
        break;

      case "sub8":
        setSub8(newValue);
        break;

      case "sub9":
        setSub9(newValue);
        break;

      case "sub10":
        setSub10(newValue);
        break;

      case "sub11":
        setSub11(newValue);
        break;

      case "sub12":
        setSub12(newValue);
        break;

      case "sub13":
        setSub13(newValue);
        break;

      case "sub14":
        setSub14(newValue);
        break;

      case "sub15":
        setSub15(newValue);
        break;

      case "sub16":
        setSub16(newValue);
        break;

      case "sub17":
        setSub17(newValue);
        break;

      case "sub18":
        setSub18(newValue);
        break;

      default:
        break;
    } // console.log(event.target);

  };

  const handleInputChange = event => {
    switch (event.target.name) {
      case "sub1":
        setSub1(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub2":
        setSub2(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub3":
        setSub3(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub4":
        setSub4(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub5":
        setSub5(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub6":
        setSub6(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub7":
        setSub7(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub8":
        setSub8(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub9":
        setSub9(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub10":
        sub10(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub11":
        setSub11(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub12":
        setSub12(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub13":
        setSub13(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub14":
        setSub14(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub15":
        setSub15(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub16":
        setSub16(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub17":
        setSub17(event.target.value === "" ? "" : Number(event.target.value));
        break;

      case "sub18":
        setSub18(event.target.value === "" ? "" : Number(event.target.value));
        break;

      default:
        break;
    }
  };

  const handleBlur = () => {
    if (sub1 < 0) {
      setSub1(0);
      console.log("blurSub1=0");
    } else if (sub1 > 100) {
      setSub1(100);
      console.log("blurSub1=100");
    } else if (sub2 < 0) {
      setSub2(0);
      console.log("blurSub2=0");
    } else if (sub2 > 100) {
      setSub2(100);
      console.log("blurSub2=100");
    }
  };

  function Save() {
    fetch("http://localhost:3000/api/save_ex2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        school: school,
        result01: sub1,
        result02: sub2,
        result03: sub3,
        result04: sub4,
        result05: sub5,
        result06: sub6,
        result07: sub7,
        result08: sub8,
        result09: sub9,
        result10: sub10,
        result11: sub11,
        result12: sub12,
        result13: sub13,
        result14: sub14,
        result15: sub15,
        result16: sub16,
        result17: sub17,
        result18: sub18,
        result_class: result_class,
        comment: result_comment
      })
    }).then(res => callBack(res)) // .then((data) => {
    .then(data => {// console.log(data);
    });
  }

  function callBack(res) {
    // alert("Complete  Save!");
    if (res.status == 200) {
      alert("Complete  Save!");
      window.location.href = "/";
    } else {
      alert(res.message);
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(Info, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
      className: "Header",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("h1", {
        children: "RITE DIAGNOSTIC TEST (EX2)"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
      className: "info",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
        className: "infoDiv",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "infoLabel",
          htmlFor: "component-simple",
          children: "Name"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "infoInput",
          name: "name",
          id: "name",
          onChange: onChange,
          value: name,
          placeholder: "Enter Name."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "infoLabel",
          htmlFor: "component-simple",
          children: "School/Grade"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "infoInput",
          id: "school",
          onChange: onChange2,
          value: school,
          placeholder: "Enter School/Grade."
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
      className: "Subject",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
        margin: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "subjectLabel",
          htmlFor: "component-simple",
          children: "Vocabulary"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "1) Spelling"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub1 == "number" ? sub1 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              color: "primary",
              id: "sub1",
              name: "sub1"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub1",
              value: sub1,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "2) Meaning"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub2 == "number" ? sub2 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub2"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub2",
              value: sub2,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "3) Vsage"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub3 == "number" ? sub3 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub3"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub3",
              value: sub3,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "overallDiv",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            children: "Overall\xA0:\xA0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            name: "overall1",
            children: overall1
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "subjectLabel",
          htmlFor: "component-simple",
          children: "Reading Comprehension"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "1) Main idea"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub4 == "number" ? sub4 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub4"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub4",
              value: sub4,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "2) Key details"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub5 == "number" ? sub5 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub5"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub5",
              value: sub5,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "overallDiv",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            children: "Overall\xA0:\xA0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            name: "overall2",
            children: overall2
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "subjectLabel",
          htmlFor: "component-simple",
          children: "Grammar"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "1) Basic"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub6 == "number" ? sub6 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub6"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub6",
              value: sub6,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "2) Intermediate"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub7 == "number" ? sub7 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub7"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub7",
              value: sub7,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "3) Advance"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub8 == "number" ? sub8 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub8"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub8",
              value: sub8,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "overallDiv",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            children: "Overall\xA0:\xA0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            name: "overall3",
            children: overall3
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "subjectLabel",
          htmlFor: "component-simple",
          children: "Oral"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "1) Listening Comprehension"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub9 == "number" ? sub9 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              color: "primary",
              id: "sub9",
              name: "sub9"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub9",
              value: sub9,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "2) Vocabulary"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub10 == "number" ? sub10 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub10"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub10",
              value: sub10,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "3) Structure"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub11 == "number" ? sub11 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub11"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub11",
              value: sub11,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "4) Fluency"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub12 == "number" ? sub12 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub12"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub12",
              value: sub12,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "5) Communication"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub13 == "number" ? sub13 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub13"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub13",
              value: sub13,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "overallDiv",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            children: "Overall\xA0:\xA0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            name: "overall4",
            children: overall4
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "subjectLabel",
          htmlFor: "component-simple",
          children: "Writing"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "1) Grammar"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub14 == "number" ? sub14 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              color: "primary",
              id: "sub14",
              name: "sub14"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub14",
              value: sub14,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "2) Vocabulary"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub15 == "number" ? sub15 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub15"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub15",
              value: sub15,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "3) Convention"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub16 == "number" ? sub16 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub16"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub16",
              value: sub16,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "4) Structure"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub17 == "number" ? sub17 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub17"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub17",
              value: sub17,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "5) Content"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub18 == "number" ? sub18 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub18"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
              name: "sub18",
              value: sub18,
              size: "small",
              onChange: handleInputChange,
              onBlur: handleBlur,
              inputProps: {
                step: 1,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "overallDiv",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            children: "Overall\xA0:\xA0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            name: "overall5",
            children: overall5
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
      className: "Result",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16___default()), {
        component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default()),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_13___default()), {
          sx: {
            minWidth: "100%"
          },
          "aria-label": "simple table",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17___default()), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), {
              sx: {
                "& th": {
                  fontSize: "1.25rem",
                  fontWeight: "bold"
                }
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Voca / R/C / Gr"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Oral / Writing"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Overall"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Class"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "40%",
                children: "Comment"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14___default()), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), {
              sx: {
                "&:last-child td, &:last-child th": {
                  border: 0
                }
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center" // sx={{
                //     padding: "0px 0px",
                //     borderRight: "2px solid black",
                //     backgroundColor: "lightblue",
                //     fontSize: "10rem",
                // }}
                ,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                  className: "resultLabel",
                  name: "result_phonnics",
                  children: sum_overall1
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                  name: "result_language",
                  className: "resultLabel",
                  children: sum_overall2
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                  name: "result_overall",
                  className: "resultLabel",
                  children: sum_overall3
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
                  name: "result_class",
                  className: "resultLabel",
                  inputProps: {
                    style: {
                      textAlign: "center"
                    } // readOnly: true,

                  },
                  onChange: onChange,
                  value: result_class // readOnly="true"

                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_20___default()), {
                  name: "result_comment",
                  fullWidth: true,
                  id: "outlined-multiline-static",
                  multiline: true,
                  rows: 4,
                  onChange: onChange,
                  value: result_comment,
                  InputProps: {// readOnly: true,
                  }
                })
              })]
            })
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ex2);
async function getServerSideProps(context) {
  // api 이용해서 데이터 불러오기 (async, await으로 기다려주기)
  const id = context.query.id; // const res = await fetch("https://example_site.com/user_data");
  // fetch("http://localhost:3000/api/list2")
  // const res = fetch("http://localhost:3000/api/list2", {
  //     method: "GET",
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //         no: id,
  //     }),
  // });
  // const res = fetch(`http://localhost:3000/api/list2/${id}`, {
  //     headers: {
  //         Accept: "application/json",
  //     },
  // })
  //     .then((data) => data.json())
  //     .then((data) => console.log(data));

  const res = await axios__WEBPACK_IMPORTED_MODULE_21__["default"].get(`http://192.168.35.213:3000/api/list2`, {
    params: {
      id: id
    },
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    // console.log(res.data[0]);
    return res.data[0];
  }); // page에 props로 전달하기위해, json 형식으로 변경해주기
  // 페이지 props로 전달하기 (json 형식만 가능)

  return {
    props: {
      data: res
    }
  };
}
const PrettoSlider = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Slider__WEBPACK_IMPORTED_MODULE_7___default())).withConfig({
  displayName: "ex2_2copy__PrettoSlider",
  componentId: "sc-4nmsnb-0"
})({
  // color: "#52af77",
  color: "#97DECE",
  height: 8,
  "& .MuiSlider-track": {
    border: "none"
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    // backgroundColor: "#52af77",
    backgroundColor: "#62B6B7",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": {
      display: "none"
    },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
});
const PrettoSlider2 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Slider__WEBPACK_IMPORTED_MODULE_7___default())).withConfig({
  displayName: "ex2_2copy__PrettoSlider2",
  componentId: "sc-4nmsnb-1"
})({
  // color: "#52af77",
  color: "#1160AA",
  height: 8,
  "& .MuiSlider-track": {
    border: "none"
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    // backgroundColor: "#52af77",
    backgroundColor: "#161D6E",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": {
      display: "none"
    },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
});
const green500 = "#00BFFF";
const green900 = "#1E90FF";
const CustomSlider = /*#__PURE__*/(/* unused pure expression or super */ null && (styled(Slider).withConfig({
  displayName: "ex2_2copy__CustomSlider",
  componentId: "sc-4nmsnb-2"
})(({
  theme
}) => ({
  color: green500,
  //color of the slider between thumbs
  "& .MuiSlider-thumb": {
    backgroundColor: green500 //color of thumbs

  },
  "& .MuiSlider-rail": {
    color: green900 ////color of the slider outside  teh area between thumbs

  }
}))));
const Info = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ex2_2copy__Info",
  componentId: "sc-4nmsnb-3"
})(["height:100%;max-width:100%;margin:0 auto;.btnSave{margin-top:10px;}.Header{display:flex;align-items:center;justify-content:center;font-size:15pt;}.info{display:flex;flex-direction:column;align-items:flex-end;margin-right:35px;}.infoDiv{width:150px;}.infoInput{display:flex;margin-bottom:5px;}.subjectLabel{display:flex;text-align:left;font-size:40px;font-weight:bold;color:black;text-decoration:underline;text-underline-position:under;margin-bottom:20px;}.overallLabel{display:flex;font-size:27px;font-weight:bold;color:black;text-decoration:underline;text-underline-position:under;margin-bottom:20px;margin-top:20px;}.overallDiv{display:flex;align-items:flex-end;justify-content:flex-end;}.resultLabel{display:flex;font-size:30px;font-weight:bold;color:black;margin-bottom:20px;margin-top:20px;justify-content:center;text-align:center;}"]);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8610:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VolumeUp");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 1582:
/***/ ((module) => {

module.exports = require("@mui/material/Input");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 1598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 3682:
/***/ ((module) => {

module.exports = require("@mui/material/Slider");

/***/ }),

/***/ 9181:
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ 8823:
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ 8099:
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ 443:
/***/ ((module) => {

module.exports = require("@mui/material/TableContainer");

/***/ }),

/***/ 5953:
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ 4848:
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 7738:
/***/ ((module) => {

module.exports = require("@mui/x-data-grid");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [142], () => (__webpack_exec__(8476)));
module.exports = __webpack_exports__;

})();