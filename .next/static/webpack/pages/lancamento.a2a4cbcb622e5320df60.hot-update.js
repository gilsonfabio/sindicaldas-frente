"use strict";
self["webpackHotUpdate_N_E"]("pages/lancamento",{

/***/ "./pages/lancamento.js":
/*!*****************************!*\
  !*** ./pages/lancamento.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Sindicaldas_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Sindicaldas_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Sindicaldas_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Sindicaldas_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/api/api */ "./pages/api/api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Sindicaldas\\front\\pages\\lancamento.js",
    _s = $RefreshSig$();








function Lancamento() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      vlrCompra = _useState3[0],
      setVlrCompra = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      qtdParcelas = _useState4[0],
      setQtdParcelas = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      user = _useState5[0],
      setUser = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      servidor = _useState6[0],
      setServidor = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      cmpCartao = _useState7[0],
      setCmpCartao = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      saldo = _useState8[0],
      setSaldo = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
      statusUsr = _useState9[0],
      setStatusUsr = _useState9[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var idCrt = router.query.nroCartao;
  var cnvId = router.query.convenio;
  var nomConvenio = router.query.nomFantasia;
  var arr_alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "!", "@", "$", "%", "&", "*"];
  /*
  $arr_alfa = array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z","!","@","$","%","&","*");
  $_dia = date('d');
  $_mes = date('m');
  $_ano = date('Y');
  $_hor = date("H");
  $_min = date("i");
  $_seg = date("s");
  $pri_letra = $arr_alfa[$_dia];
  $seg_letra = $arr_alfa[$_hor];
  $ano_alfa = (string)$_ano;
  $cod_alfa = (string)$codigo;
  $min_alfa = (string)$_min;
  $seg_alfa = (string)$_seg;
  $seguranca .= $pri_letra.$seg_letra.$ano_alfa.$min_alfa.$cod_alfa.$seg_alfa;
  */

  function cnfLancamento(_x) {
    return _cnfLancamento.apply(this, arguments);
  }

  function _cnfLancamento() {
    _cnfLancamento = (0,C_Sindicaldas_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Sindicaldas_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var cartao, response, data, dia, mes, ano, dataString, dataAtual, hor, min, seg, horaString, horaAtual, priLetra, segLetra, codSeguranca, taxAdmin, statusCmp;
      return C_Sindicaldas_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              cartao = idCrt;
              _context.next = 5;
              return _pages_api_api__WEBPACK_IMPORTED_MODULE_5__.default.get("loginUsr/".concat(cartao, "/").concat(password));

            case 5:
              response = _context.sent;
              console.log(parseFloat(saldo));
              console.log(parseFloat(vlrCompra));
              console.log(statusUsr);

              if (parseFloat(saldo) < parseFloat(vlrCompra)) {
                alert('Falha na confirmação da compra! Codigo 55');
                next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
                  pathname: '/sobre'
                });
              } else {
                if (statusUsr != 'A') {
                  alert('Falha na confirmação da compra! Codigo 54');
                  next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
                    pathname: '/'
                  });
                } else {
                  data = new Date();
                  dia = data.getDate();
                  mes = data.getMonth() + 1;
                  ano = data.getFullYear();
                  dataString = ano + '-' + mes + '-' + dia;
                  dataAtual = dataString;
                  hor = data.getHours();
                  min = data.getMinutes();
                  seg = data.getSeconds();
                  horaString = hor + ':' + min + ':' + seg;
                  horaAtual = horaString;
                  priLetra = arr_alfa[dia];
                  segLetra = arr_alfa[hor];
                  codSeguranca = priLetra + segLetra + ano + cnvId + min + seg;
                  taxAdmin = 3;
                  statusCmp = 'A';
                  _pages_api_api__WEBPACK_IMPORTED_MODULE_5__.default.post('newcompra', {
                    cmpEmissao: dataAtual,
                    cmpHorEmissao: horaAtual,
                    cmpConvenio: cnvId,
                    cmpQtdParcela: parseInt(qtdParcelas),
                    cmpVlrCompra: parseFloat(vlrCompra),
                    cmpServidor: servidor,
                    cmpCodSeguranca: codSeguranca,
                    cmpStatus: statusCmp,
                    cmpCartao: cartao
                  }).then(function () {
                    alert('Compra cadastrada com sucesso!');
                  })["catch"](function () {
                    alert('Erro no cadastro!');
                  });
                  next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/sobre');
                }
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              alert('Falha na confirmação da compra!');

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12]]);
    }));
    return _cnfLancamento.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(idCrt);
    var cartao = idCrt;
    _pages_api_api__WEBPACK_IMPORTED_MODULE_5__.default.get("findUser/".concat(cartao)).then(function (resp) {
      console.log(resp.data);
      setUser(resp.data);
      setServidor(resp.data[0].usrId);
      setSaldo(resp.data[0].usrVlrDisponivel);
      setStatusUsr(resp.data[0].usrStatus);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
          lineNumber: 122,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "login-content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "login-column login-left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "text",
              children: "Dados do Servidor(a)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, this), user.map(function (row) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dados",
                  children: ["Nome:", row.usrNome]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dados",
                  children: ["Matricula:", row.usrMatricula]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dados",
                  children: ["Mes/Ano Saldo:", row.usrMes, " / ", row.usrAno]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dados",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                    className: "saldo",
                    children: ["Saldo Disponivel: ", Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(row.usrVlrDisponivel)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, _this)]
              }, row.usrId, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 33
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "login-column right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "text",
              children: "Formul\xE1rio Conf. Lan\xE7amento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
              onSubmit: cnfLancamento,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                    type: "text",
                    name: "vlrCompra",
                    placeholder: "Digite o Valor da Compra",
                    value: vlrCompra,
                    onChange: function onChange(e) {
                      setVlrCompra(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "fields",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "field name",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
                    type: "number",
                    name: "qtdParcelas",
                    placeholder: "Digite a Qtde. Parcelas",
                    value: qtdParcelas,
                    onChange: function onChange(e) {
                      setQtdParcelas(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
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
                    lineNumber: 171,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "button-area",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  type: "submit",
                  children: "Entrar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 9
  }, this);
}

_s(Lancamento, "0RFXRSmcLpTUrD95bPLzvj4q8AU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = Lancamento;
/* harmony default export */ __webpack_exports__["default"] = (Lancamento);

var _c;

$RefreshReg$(_c, "Lancamento");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuY2FtZW50by5hMmE0Y2JjYjYyMmU1MzIwZGY2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsU0FBU08sVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNsQixrQkFBMEJOLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFnQ1IsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NWLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQXNDWiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPYSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUF3QmQsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT2UsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQWdDaEIsK0NBQVEsRUFBeEM7QUFBQSxNQUFPaUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPbUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxtQkFBMEJwQiwrQ0FBUSxDQUFDLENBQUQsQ0FBbEM7QUFBQSxNQUFPcUIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDdEIsK0NBQVEsRUFBMUM7QUFBQSxNQUFPdUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdyQixzREFBUyxFQUF4QjtBQUNBLE1BQU1zQixLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxTQUEzQjtBQUNBLE1BQU1DLEtBQUss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QUFBSyx5QkFBUyxFQUFDLGFBQWY7QUFBQSx1Q0FDSTtBQUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzRUg7O0dBcExRMUY7VUFZVUY7OztLQVpWRTtBQXNMVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sYW5jYW1lbnRvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9wYWdlcy9hcGkvYXBpJztcclxuXHJcbmZ1bmN0aW9uIExhbmNhbWVudG8oKSB7ICAgICAgICBcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmxyQ29tcHJhLCBzZXRWbHJDb21wcmFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3F0ZFBhcmNlbGFzLCBzZXRRdGRQYXJjZWxhc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZXJ2aWRvciwgc2V0U2Vydmlkb3JdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjbXBDYXJ0YW8sIHNldENtcENhcnRhb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW3NhbGRvLCBzZXRTYWxkb10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzdGF0dXNVc3IsIHNldFN0YXR1c1Vzcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaWRDcnQgPSByb3V0ZXIucXVlcnkubnJvQ2FydGFvO1xyXG4gICAgY29uc3QgY252SWQgPSByb3V0ZXIucXVlcnkuY29udmVuaW87XHJcbiAgICBjb25zdCBub21Db252ZW5pbyA9IHJvdXRlci5xdWVyeS5ub21GYW50YXNpYTtcclxuXHJcbiAgICBjb25zdCBhcnJfYWxmYSA9IFtcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIixcIiFcIixcIkBcIixcIiRcIixcIiVcIixcIiZcIixcIipcIl07XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAkYXJyX2FsZmEgPSBhcnJheShcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIixcIiFcIixcIkBcIixcIiRcIixcIiVcIixcIiZcIixcIipcIik7XHJcbiAgICAkX2RpYSA9IGRhdGUoJ2QnKTtcclxuICAgICRfbWVzID0gZGF0ZSgnbScpO1xyXG4gICAgJF9hbm8gPSBkYXRlKCdZJyk7XHJcbiAgICAkX2hvciA9IGRhdGUoXCJIXCIpO1xyXG4gICAgJF9taW4gPSBkYXRlKFwiaVwiKTtcclxuICAgICRfc2VnID0gZGF0ZShcInNcIik7XHJcbiAgICAkcHJpX2xldHJhID0gJGFycl9hbGZhWyRfZGlhXTtcclxuICAgICRzZWdfbGV0cmEgPSAkYXJyX2FsZmFbJF9ob3JdO1xyXG4gICAgJGFub19hbGZhID0gKHN0cmluZykkX2FubztcclxuICAgICRjb2RfYWxmYSA9IChzdHJpbmcpJGNvZGlnbztcclxuICAgICRtaW5fYWxmYSA9IChzdHJpbmcpJF9taW47XHJcbiAgICAkc2VnX2FsZmEgPSAoc3RyaW5nKSRfc2VnO1xyXG4gICAgJHNlZ3VyYW5jYSAuPSAkcHJpX2xldHJhLiRzZWdfbGV0cmEuJGFub19hbGZhLiRtaW5fYWxmYS4kY29kX2FsZmEuJHNlZ19hbGZhO1xyXG4gICAgKi9cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjbmZMYW5jYW1lbnRvKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgY2FydGFvID0gaWRDcnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgbG9naW5Vc3IvJHtjYXJ0YW99LyR7cGFzc3dvcmR9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnNlRmxvYXQoc2FsZG8pKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VGbG9hdCh2bHJDb21wcmEpKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdHVzVXNyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJzZUZsb2F0KHNhbGRvKSA8IHBhcnNlRmxvYXQodmxyQ29tcHJhKSApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdGYWxoYSBuYSBjb25maXJtYcOnw6NvIGRhIGNvbXByYSEgQ29kaWdvIDU1Jyk7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7cGF0aG5hbWU6ICcvc29icmUnfSlcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1c1VzciAhPSAnQScpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnRmFsaGEgbmEgY29uZmlybWHDp8OjbyBkYSBjb21wcmEhIENvZGlnbyA1NCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtwYXRobmFtZTogJy8nfSlcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpYSA9IGRhdGEuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXMgPSBkYXRhLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbm8gPSBkYXRhLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFTdHJpbmcgPSBhbm8gKyAnLScgKyBtZXMgKyAnLScgKyBkaWE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFBdHVhbCA9IGRhdGFTdHJpbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhvciA9IGRhdGEuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gZGF0YS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZyA9IGRhdGEuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBob3JhU3RyaW5nID0gaG9yICsgJzonICsgbWluICsgJzonICsgc2VnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBob3JhQXR1YWwgPSBob3JhU3RyaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcmlMZXRyYSA9IGFycl9hbGZhW2RpYV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ0xldHJhID0gYXJyX2FsZmFbaG9yXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29kU2VndXJhbmNhID0gcHJpTGV0cmEgKyBzZWdMZXRyYSArIGFubyArIGNudklkICsgbWluICsgc2VnO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXhBZG1pbiA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXR1c0NtcCA9ICdBJztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBhcGkucG9zdCgnbmV3Y29tcHJhJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXBFbWlzc2FvOiBkYXRhQXR1YWwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXBIb3JFbWlzc2FvOiBob3JhQXR1YWwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXBDb252ZW5pbzogY252SWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXBRdGRQYXJjZWxhOiBwYXJzZUludChxdGRQYXJjZWxhcyksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXBWbHJDb21wcmE6IHBhcnNlRmxvYXQodmxyQ29tcHJhKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcFNlcnZpZG9yOiBzZXJ2aWRvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcENvZFNlZ3VyYW5jYTogY29kU2VndXJhbmNhLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY21wU3RhdHVzOiBzdGF0dXNDbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcENhcnRhbzogY2FydGFvICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdDb21wcmEgY2FkYXN0cmFkYSBjb20gc3VjZXNzbyEnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0Vycm8gbm8gY2FkYXN0cm8hJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvc29icmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBhbGVydCgnRmFsaGEgbmEgY29uZmlybWHDp8OjbyBkYSBjb21wcmEhJyk7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkQ3J0KTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgY2FydGFvID0gaWRDcnQ7ICAgICAgICBcclxuICAgICAgICBhcGkuZ2V0KGBmaW5kVXNlci8ke2NhcnRhb31gKS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmRhdGEpXHJcbiAgICAgICAgICAgIHNldFVzZXIocmVzcC5kYXRhKTtcclxuICAgICAgICAgICAgc2V0U2Vydmlkb3IocmVzcC5kYXRhWzBdLnVzcklkKTtcclxuICAgICAgICAgICAgc2V0U2FsZG8ocmVzcC5kYXRhWzBdLnVzclZsckRpc3Bvbml2ZWwpO1xyXG4gICAgICAgICAgICBzZXRTdGF0dXNVc3IocmVzcC5kYXRhWzBdLnVzclN0YXR1cyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxvZ2luLXRpdGxlXCI+TG9naW48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbHVtbiBsb2dpbi1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYWRvcyBkbyBTZXJ2aWRvcihhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtyb3cudXNySWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFkb3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9tZTp7cm93LnVzck5vbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhZG9zJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdHJpY3VsYTp7cm93LnVzck1hdHJpY3VsYX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFkb3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVzL0FubyBTYWxkbzp7cm93LnVzck1lc30gLyB7cm93LnVzckFub30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFkb3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzYWxkbyc+U2FsZG8gRGlzcG9uaXZlbDoge0ludGwuTnVtYmVyRm9ybWF0KCdwdC1CUicsIHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdCUkwnfSkuZm9ybWF0KHJvdy51c3JWbHJEaXNwb25pdmVsKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbHVtbiByaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9ybXVsw6FyaW8gQ29uZi4gTGFuw6dhbWVudG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtjbmZMYW5jYW1lbnRvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2bHJDb21wcmFcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIFZhbG9yIGRhIENvbXByYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2bHJDb21wcmF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFZsckNvbXByYShlLnRhcmdldC52YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJxdGRQYXJjZWxhc1wiIHBsYWNlaG9sZGVyPVwiRGlnaXRlIGEgUXRkZS4gUGFyY2VsYXNcIiB2YWx1ZT17cXRkUGFyY2VsYXN9IG9uQ2hhbmdlPXsoZSkgPT4ge3NldFF0ZFBhcmNlbGFzKGUudGFyZ2V0LnZhbHVlKX19ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgc3VhIHNlbmhhXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHtzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9fSAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW50cmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5jYW1lbnRvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTWVudSIsIlJvdXRlciIsInVzZVJvdXRlciIsImFwaSIsIkxhbmNhbWVudG8iLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInZsckNvbXByYSIsInNldFZsckNvbXByYSIsInF0ZFBhcmNlbGFzIiwic2V0UXRkUGFyY2VsYXMiLCJ1c2VyIiwic2V0VXNlciIsInNlcnZpZG9yIiwic2V0U2Vydmlkb3IiLCJjbXBDYXJ0YW8iLCJzZXRDbXBDYXJ0YW8iLCJzYWxkbyIsInNldFNhbGRvIiwic3RhdHVzVXNyIiwic2V0U3RhdHVzVXNyIiwicm91dGVyIiwiaWRDcnQiLCJxdWVyeSIsIm5yb0NhcnRhbyIsImNudklkIiwiY29udmVuaW8iLCJub21Db252ZW5pbyIsIm5vbUZhbnRhc2lhIiwiYXJyX2FsZmEiLCJjbmZMYW5jYW1lbnRvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2FydGFvIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwicGFyc2VGbG9hdCIsImFsZXJ0IiwicHVzaCIsInBhdGhuYW1lIiwiZGF0YSIsIkRhdGUiLCJkaWEiLCJnZXREYXRlIiwibWVzIiwiZ2V0TW9udGgiLCJhbm8iLCJnZXRGdWxsWWVhciIsImRhdGFTdHJpbmciLCJkYXRhQXR1YWwiLCJob3IiLCJnZXRIb3VycyIsIm1pbiIsImdldE1pbnV0ZXMiLCJzZWciLCJnZXRTZWNvbmRzIiwiaG9yYVN0cmluZyIsImhvcmFBdHVhbCIsInByaUxldHJhIiwic2VnTGV0cmEiLCJjb2RTZWd1cmFuY2EiLCJ0YXhBZG1pbiIsInN0YXR1c0NtcCIsInBvc3QiLCJjbXBFbWlzc2FvIiwiY21wSG9yRW1pc3NhbyIsImNtcENvbnZlbmlvIiwiY21wUXRkUGFyY2VsYSIsInBhcnNlSW50IiwiY21wVmxyQ29tcHJhIiwiY21wU2Vydmlkb3IiLCJjbXBDb2RTZWd1cmFuY2EiLCJjbXBTdGF0dXMiLCJ0aGVuIiwicmVzcCIsInVzcklkIiwidXNyVmxyRGlzcG9uaXZlbCIsInVzclN0YXR1cyIsIm1hcCIsInJvdyIsInVzck5vbWUiLCJ1c3JNYXRyaWN1bGEiLCJ1c3JNZXMiLCJ1c3JBbm8iLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==