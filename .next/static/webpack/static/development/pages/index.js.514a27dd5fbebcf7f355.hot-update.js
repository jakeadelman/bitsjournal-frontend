webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/form/LoginForm.js":
/*!**************************************!*\
  !*** ./components/form/LoginForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _FormWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormWrapper */ "./components/form/FormWrapper.js");
/* harmony import */ var _form_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../form/Input */ "./components/form/Input.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Label */ "./components/form/Label.js");
/* harmony import */ var _shared_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/Button */ "./components/shared/Button.js");


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        mutation login($email: String!, $password: String!) {\n          login(email: $email, password: $password)\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






 // import { observer } from "mobx-react-lite";
// import { UserStoreContext } from "../stores/UserStore.ts";







var Cookie = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");

var LoginForm = function LoginForm() {
  // const userStore = useContext(UserStoreContext);
  function handleSubmit(_x, _x2) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event, client) {
      var form, formData, email, password, r, isTrue;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              form = event.target;
              formData = new window.FormData(form);
              email = formData.get("email");
              password = formData.get("password");
              form.reset();
              _context.next = 8;
              return client.mutate({
                mutation: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject()),
                variables: {
                  email: email,
                  password: password
                }
              });

            case 8:
              r = _context.sent;
              console.log("LOGGING IN"); //check if login credentials are correct

              isTrue = r.data.login == "true";

              if (!(isTrue == true)) {
                _context.next = 16;
                break;
              }

              Cookie.set("isAuth", "true"); // userStore.isAuth = true;

              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/dashboard");
              _context.next = 18;
              break;

            case 16:
              setWrongCredentials(true);
              return _context.abrupt("return");

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      wrongCredentials = _useState2[0],
      setWrongCredentials = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FormWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledForm, {
      onSubmit: function onSubmit(event) {
        return handleSubmit(event, client);
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
      placeholder: "",
      name: "email",
      type: "text",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_10__["default"], null, "password"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_form_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
      placeholder: "",
      name: "password",
      type: "text",
      required: true
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: "flex",
        width: "100%"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubmitButton, {
      type: "submit"
    }, "Submit")), wrongCredentials == true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "login-alert"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
      color: "secondary",
      isOpen: wrongCredentials == true ? true : false
    }, "Wrong login credentials")) : null));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);
var StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].form.withConfig({
  displayName: "LoginForm__StyledForm",
  componentId: "zc9mcq-0"
})(["display:flex;flex-direction:column;align-items:flex-start;", ";"], function (props) {
  return props.loading && "filter: grayscale(0.5) blur(5px) opacity(0.6); pointer-events: none";
});
var SubmitButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_shared_Button__WEBPACK_IMPORTED_MODULE_11__["default"]).withConfig({
  displayName: "LoginForm__SubmitButton",
  componentId: "zc9mcq-1"
})(["align-self:flex-end;margin-right:0px;margin-left:auto;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "LoginForm__InputWrapper",
  componentId: "zc9mcq-2"
})(["position:relative;margin-bottom:24px;width:100%;"]);

/***/ })

})
//# sourceMappingURL=index.js.514a27dd5fbebcf7f355.hot-update.js.map