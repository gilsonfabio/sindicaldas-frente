"use strict";
self["webpackHotUpdate_N_E"]("pages/logConvenio",{

/***/ "./pages/logConvenio.js":
/*!******************************!*\
  !*** ./pages/logConvenio.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Gilson_project_react_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Gilson_project_react_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Gilson_project_react_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Gilson_project_react_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/api/api */ "./pages/api/api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Gilson\\project\\react\\sindicaldas-frente\\pages\\logConvenio.js",
    _s = $RefreshSig$();








function LogConvenio() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  function sendLogin(_x) {
    return _sendLogin.apply(this, arguments);
  }

  function _sendLogin() {
    _sendLogin = (0,C_Users_Gilson_project_react_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Gilson_project_react_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var response, cnvId, cnvNomFantasia, _response, _cnvId, _cnvNomFantasia;

      return C_Users_Gilson_project_react_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(email.length > 6)) {
                _context.next = 18;
                break;
              }

              _context.prev = 2;
              _context.next = 5;
              return _pages_api_api__WEBPACK_IMPORTED_MODULE_5__.default.get("loginCnv/".concat(email, "/").concat(password));

            case 5:
              response = _context.sent;
              cnvId = response.data.cnvId;
              cnvNomFantasia = response.data.cnvNomFantasia;
              console.log(cnvId);
              console.log(cnvNomFantasia);
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
                pathname: '/sobre',
                query: {
                  id: "".concat(cnvId),
                  name: "".concat(cnvNomFantasia)
                }
              });
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              alert("Falha no login conv\xEAnio! Tente novamente. ".concat(email));

            case 16:
              _context.next = 30;
              break;

            case 18:
              _context.prev = 18;
              _context.next = 21;
              return _pages_api_api__WEBPACK_IMPORTED_MODULE_5__.default.get("loginCnvAlt/".concat(email, "/").concat(password));

            case 21:
              _response = _context.sent;
              _cnvId = _response.data.cnvId;
              _cnvNomFantasia = _response.data.cnvNomFantasia;
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
                pathname: '/sobre',
                query: {
                  id: "".concat(_cnvId),
                  name: "".concat(_cnvNomFantasia)
                }
              });
              _context.next = 30;
              break;

            case 27:
              _context.prev = 27;
              _context.t1 = _context["catch"](18);
              alert("Falha no login alt. conv\xEAnio! Tente novamente. ".concat(email));

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13], [18, 27]]);
    }));
    return _sendLogin.apply(this, arguments);
  }

  function handlePassword() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
      pathname: '/ForgetPassword'
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("section", {
      className: "login",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "max-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h2", {
          className: "login-title",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "login-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "login-column login-left",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "login-image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "login-column right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "text",
              children: "Formul\xE1rio de login Conv\xEAnio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
              onSubmit: sendLogin,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                    type: "text",
                    name: "email",
                    placeholder: "Digite o seu e-mail",
                    value: email,
                    onChange: function onChange(e) {
                      setEmail(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 72,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                    type: "password",
                    name: "password",
                    placeholder: "Digite sua senha",
                    value: password,
                    onChange: function onChange(e) {
                      setPassword(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "button-area",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  type: "submit",
                  children: "Entrar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "button-forget",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  onClick: handlePassword,
                  type: "button",
                  children: "Esqueceu a senha?"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 9
  }, this);
}

_s(LogConvenio, "TSZhDBNy8CmbxXgprY/vvMmTG1Q=");

_c = LogConvenio;
/* harmony default export */ __webpack_exports__["default"] = (LogConvenio);

var _c;

$RefreshReg$(_c, "LogConvenio");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9nQ29udmVuaW8uZjBkZjRmODc1Y2JlOTc2MGVhYTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNLLFdBQVQsR0FBdUI7QUFBQTs7QUFDbkIsa0JBQTBCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPSyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBZ0NOLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9PLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRm1CLFdBSUpDLFNBSkk7QUFBQTtBQUFBOztBQUFBO0FBQUEsdVZBSW5CLGlCQUF5QkMsQ0FBekI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQSxjQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBREosb0JBR1FOLEtBQUssQ0FBQ08sTUFBTixHQUFlLENBSHZCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFLbUNULHVEQUFBLG9CQUFvQkUsS0FBcEIsY0FBNkJFLFFBQTdCLEVBTG5DOztBQUFBO0FBS2tCTyxjQUFBQSxRQUxsQjtBQU1nQkMsY0FBQUEsS0FOaEIsR0FNd0JELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjRCxLQU50QztBQU9nQkUsY0FBQUEsY0FQaEIsR0FPaUNILFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxjQVAvQztBQVNZQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQUNBRyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsY0FBWjtBQUVBZixjQUFBQSx1REFBQSxDQUFZO0FBQ1JtQixnQkFBQUEsUUFBUSxFQUFFLFFBREY7QUFFUkMsZ0JBQUFBLEtBQUssRUFBRTtBQUFFQyxrQkFBQUEsRUFBRSxZQUFLUixLQUFMLENBQUo7QUFBa0JTLGtCQUFBQSxJQUFJLFlBQUtQLGNBQUw7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QUFBQSxzQkFQSixlQWFJO0FBQUsseUJBQVMsRUFBQyxhQUFmO0FBQUEsdUNBQ0k7QUFBUSxzQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJKLGVBaUJJO0FBQUsseUJBQVMsRUFBQyxlQUFmO0FBQUEsdUNBQ0k7QUFBUSx5QkFBTyxFQUFFRixjQUFqQjtBQUFpQyxzQkFBSSxFQUFDLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0NIOztHQTNGUXRCOztLQUFBQTtBQTZGVCwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dDb252ZW5pby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgYXBpIGZyb20gJy4uL3BhZ2VzL2FwaS9hcGknO1xyXG5cclxuZnVuY3Rpb24gTG9nQ29udmVuaW8oKSB7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzZW5kTG9naW4oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoZW1haWwubGVuZ3RoID4gNiApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgbG9naW5DbnYvJHtlbWFpbH0vJHtwYXNzd29yZH1gKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbnZJZCA9IHJlc3BvbnNlLmRhdGEuY252SWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY252Tm9tRmFudGFzaWEgPSByZXNwb25zZS5kYXRhLmNudk5vbUZhbnRhc2lhO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNudklkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY252Tm9tRmFudGFzaWEpXHJcblxyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3NvYnJlJyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogYCR7Y252SWR9YCwgbmFtZTogYCR7Y252Tm9tRmFudGFzaWF9YH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYEZhbGhhIG5vIGxvZ2luIGNvbnbDqm5pbyEgVGVudGUgbm92YW1lbnRlLiAke2VtYWlsfWApO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgbG9naW5DbnZBbHQvJHtlbWFpbH0vJHtwYXNzd29yZH1gKTtcclxuICAgICAgICAgICAgICAgIGxldCBjbnZJZCA9IHJlc3BvbnNlLmRhdGEuY252SWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgY252Tm9tRmFudGFzaWEgPSByZXNwb25zZS5kYXRhLmNudk5vbUZhbnRhc2lhO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3NvYnJlJyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpZDogYCR7Y252SWR9YCwgbmFtZTogYCR7Y252Tm9tRmFudGFzaWF9YH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYEZhbGhhIG5vIGxvZ2luIGFsdC4gY29udsOqbmlvISBUZW50ZSBub3ZhbWVudGUuICR7ZW1haWx9YCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgIH0gIFxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBhc3N3b3JkKCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvRm9yZ2V0UGFzc3dvcmQnfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luLXRpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbHVtbiBsb2dpbi1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWltYWdlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb2x1bW4gcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvcm11bMOhcmlvIGRlIGxvZ2luIENvbnbDqm5pb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRMb2dpbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIHNldSBlLW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4ge3NldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX19ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc3VhIHNlbmhhXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50cmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWZvcmdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVBhc3N3b3JkfSB0eXBlPVwiYnV0dG9uXCI+RXNxdWVjZXUgYSBzZW5oYT88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ0NvbnZlbmlvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWVudSIsIlJvdXRlciIsImFwaSIsIkxvZ0NvbnZlbmlvIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZW5kTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJnZXQiLCJyZXNwb25zZSIsImNudklkIiwiZGF0YSIsImNudk5vbUZhbnRhc2lhIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwiaWQiLCJuYW1lIiwiYWxlcnQiLCJoYW5kbGVQYXNzd29yZCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==