"use strict";
(() => {
var exports = {};
exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 1768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7738);
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8464);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9648);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_24__]);
axios__WEBPACK_IMPORTED_MODULE_24__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






























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

function ex1(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_25__.useRouter)();
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
    0: sub4,
    1: setSub4
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub5,
    1: setSub5
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
    0: overall1,
    1: setOverall1
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sub8,
    1: setSub8
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
    0: overall2,
    1: setOverall2
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: sum_overall,
    1: setSumOverall
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: tableData,
    1: setTableData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // useEffect
  // [sub1, sub2, sub3, sub4, sub5, sub6, sub7] 배열안에 있는 useState 값이 바뀌면
  // let sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7;
  // console.log(sum);
  // setOverall1(sum);

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(props.data);
    console.log(props.data.NO);
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
    setResultClass(props.data.CLASS);
    setComment(props.data.COMMENT);
    setName(props.data.NAME);
    setSchool(props.data.SCHOOL);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sub1, sub2, sub3, sub4, sub5, sub6, sub7]); // console.log(sum);

    setOverall1(sum);
  }, [sub1, sub2, sub3, sub4, sub5, sub6, sub7]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([sub8, sub9, sub10]); // console.log(sum);

    setOverall2(sum);
  }, [sub8, sub9, sub10]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let sum = calculate([overall1 * 1, overall2 * 1]); //string으로 받아져서 number로 자동형변환
    // console.log(sum);
    // console.log(overall1);
    // console.log(overall2);

    setSumOverall(sum);
  }, [overall1, overall2]);

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
        setSub1(newValue); // console.log(newValue);

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

      default:
        break;
    } // console.log(event.target);
    // var sum = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7;
    // console.log(sum);
    // setOverall1(sum);

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
        setSub10(event.target.value === "" ? "" : Number(event.target.value));
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
    // alert("Complete  Save!");
    fetch("http://192.168.35.233:3000/api/save_ex1", {
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
        result_class: result_class,
        comment: result_comment
      })
    }).then(res => callBack(res)) // .then((data) => {
    .then(data => {
      console.log(data);
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
  } // // 이건 고정적으로 값 넣으면 되고
  // const columns = [
  //     { field: "id", headerName: "ID", width: 90 },
  //     {
  //         field: "phonics_overall",
  //         headerName: "Phonics",
  //         type: "number",
  //         width: 150,
  //         editable: false,
  //     },
  //     {
  //         field: "language_overall",
  //         headerName: "Language",
  //         type: "number",
  //         width: 150,
  //         editable: false,
  //         sortable: false,
  //     },
  //     {
  //         field: "overall",
  //         headerName: "Overall",
  //         type: "number",
  //         width: 150,
  //         editable: false,
  //         sortable: false,
  //     },
  //     {
  //         field: "class",
  //         headerName: "Class",
  //         // description: "This column has a value getter and is not sortable.",
  //         sortable: false,
  //         editable: true,
  //         width: 200,
  //     },
  //     {
  //         field: "comment",
  //         headerName: "Comment",
  //         sortable: false,
  //         filt
  //         editable: true,
  //         width: 400,
  //         // valueGetter: (params) =>
  //         //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //     },
  // ];
  // // 이부분은 DB에서 가져와서 아래 형식으로 맞춰져야할듯
  // const rows = [
  //     { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //     { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //     { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //     { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //     { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //     { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //     { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //     { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)(Info, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
      className: "Header",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("h1", {
        children: "RITE DIAGNOSTIC TEST (EX1)"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
      className: "info",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
        className: "infoDiv",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "infoLabel",
          htmlFor: "component-simple",
          children: "Name"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "infoInput",
          name: "name",
          id: "name",
          onChange: onChange,
          value: name // placeholder="Enter Name."
          ,
          inputProps: {
            readOnly: true
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "infoLabel",
          htmlFor: "component-simple",
          children: "School/Grade"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
          className: "infoInput",
          id: "school",
          onChange: onChange2,
          value: school // placeholder="Enter School/Grade."
          ,
          inputProps: {
            readOnly: true
          }
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
      className: "Subject",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_8___default()), {
        margin: 4,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "subjectLabel",
          htmlFor: "component-simple",
          children: "Phonnics"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "1) Uppercase/Lowercase"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub1 == "number" ? sub1 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              color: "primary",
              id: "sub1",
              name: "sub1"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "2) Phonetic"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub2 == "number" ? sub2 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub2"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "3) Short vowel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub3 == "number" ? sub3 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub3"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "4) Long vowel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub4 == "number" ? sub4 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub4"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "5) Double consonant"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub5 == "number" ? sub5 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub5"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "6) Vowel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub6 == "number" ? sub6 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub6"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "7) Sight words"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider, {
              valueLabelDisplay: "auto",
              value: typeof sub7 == "number" ? sub7 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub7"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
          className: "overallDiv",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            children: "Overall\xA0:\xA0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            name: "overall1",
            children: overall1
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
          className: "subjectLabel",
          htmlFor: "component-simple",
          children: "Language"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "1) Theme words"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub8 == "number" ? sub8 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              color: "primary",
              id: "sub8",
              name: "sub8"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "2) Simple directions"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub9 == "number" ? sub9 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub9"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10___default()), {
          id: "input-slider",
          gutterBottom: true,
          children: "3) Fluency"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
          container: true,
          spacing: 2,
          alignItems: "center",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            xs: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx(PrettoSlider2, {
              valueLabelDisplay: "auto",
              value: typeof sub10 == "number" ? sub10 : 0,
              onChange: handleSliderChange,
              "aria-labelledby": "input-slider",
              name: "sub10"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9___default()), {
            item: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
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
                "aria-labelledby": "input-slider",
                readOnly: true
              }
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)("div", {
          className: "overallDiv",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            children: "Overall\xA0:\xA0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: "overallLabel",
            htmlFor: "component-simple",
            name: "overall2",
            children: overall2
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx("div", {
      className: "Result",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableContainer__WEBPACK_IMPORTED_MODULE_16___default()), {
        component: (_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19___default()),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_Table__WEBPACK_IMPORTED_MODULE_13___default()), {
          sx: {
            minWidth: "100%"
          },
          "aria-label": "simple table",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_17___default()), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), {
              sx: {
                "& th": {
                  fontSize: "1.25rem",
                  fontWeight: "bold"
                }
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Phonnics"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Language"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Overall"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "15%",
                children: "Class"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                width: "40%",
                children: "Comment"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_14___default()), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsxs)((_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_18___default()), {
              sx: {
                "&:last-child td, &:last-child th": {
                  border: 0
                }
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center" // sx={{
                //     padding: "0px 0px",
                //     borderRight: "2px solid black",
                //     backgroundColor: "lightblue",
                //     fontSize: "10rem",
                // }}
                ,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                  className: "resultLabel",
                  name: "result_phonnics",
                  children: overall1
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                  name: "result_language",
                  className: "resultLabel",
                  children: overall2
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_5___default()), {
                  name: "result_overall",
                  className: "resultLabel",
                  children: sum_overall
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_Input__WEBPACK_IMPORTED_MODULE_2___default()), {
                  name: "result_class",
                  className: "resultLabel",
                  inputProps: {
                    style: {
                      textAlign: "center"
                    },
                    readOnly: true
                  },
                  onChange: onChange,
                  value: result_class
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_15___default()), {
                align: "center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_26__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_20___default()), {
                  name: "result_comment",
                  fullWidth: true,
                  id: "outlined-multiline-static",
                  multiline: true,
                  rows: 4,
                  onChange: onChange,
                  value: result_comment,
                  InputProps: {
                    readOnly: true
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

  const res = await axios__WEBPACK_IMPORTED_MODULE_24__["default"].get(`http://192.168.35.213:3000/api/list2`, {
    params: {
      id: id
    },
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    console.log(res.data[0]);
    return res.data[0];
  }); // page에 props로 전달하기위해, json 형식으로 변경해주기
  // 페이지 props로 전달하기 (json 형식만 가능)

  return {
    props: {
      data: res
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ex1);
const PrettoSlider = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1___default()((_mui_material_Slider__WEBPACK_IMPORTED_MODULE_7___default())).withConfig({
  displayName: "ex1_2copy__PrettoSlider",
  componentId: "sc-rr09yn-0"
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
  displayName: "ex1_2copy__PrettoSlider2",
  componentId: "sc-rr09yn-1"
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
  displayName: "ex1_2copy__CustomSlider",
  componentId: "sc-rr09yn-2"
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
  displayName: "ex1_2copy__Info",
  componentId: "sc-rr09yn-3"
})(["height:100%;max-width:100%;margin:0 auto;.btnSave{margin-top:10px;}.Header{display:flex;align-items:center;justify-content:center;font-size:15pt;}.info{display:flex;flex-direction:column;align-items:flex-end;margin-right:35px;}.infoDiv{width:150px;}.infoInput{display:flex;margin-bottom:5px;}.subjectLabel{display:flex;text-align:left;font-size:40px;font-weight:bold;font-family:\"Lucida Sans\",\"Lucida Sans Regular\",\"Lucida Grande\",\"Lucida Sans Unicode\",Geneva,Verdana,sans-serif,-apple-system,sans-serif !important;color:black;text-decoration:underline;text-underline-position:under;margin-bottom:20px;}.overallLabel{display:flex;font-size:27px;font-weight:bold;color:black;text-decoration:underline;text-underline-position:under;margin-bottom:20px;margin-top:20px;}.overallDiv{display:flex;align-items:flex-end;justify-content:flex-end;}.resultLabel{display:flex;font-size:30px;font-weight:bold;color:black;margin-bottom:0px;margin-top:0px;justify-content:center;text-align:center;}.resultComment{display:flex;font-size:50px;font-weight:bold;color:black;margin-bottom:0px;margin-top:0px;justify-content:center;text-align:center;}"]);
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

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

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
var __webpack_exports__ = __webpack_require__.X(0, [464,142], () => (__webpack_exec__(1768)));
module.exports = __webpack_exports__;

})();