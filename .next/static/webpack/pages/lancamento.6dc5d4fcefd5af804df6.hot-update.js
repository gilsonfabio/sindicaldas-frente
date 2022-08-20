"use strict";
self["webpackHotUpdate_N_E"]("pages/lancamento",{

/***/ "./pages/lancamento.js":
/*!*****************************!*\
  !*** ./pages/lancamento.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_project_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_project_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_project_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_project_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/api/api */ "./pages/api/api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\project\\sindicaldas-frente\\pages\\lancamento.js",
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
    _cnfLancamento = (0,C_project_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_project_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
      var cartao, response, data, dia, mes, ano, dataString, dataAtual, hor, min, seg, horaString, horaAtual, priLetra, segLetra, codSeguranca, taxAdmin, statusCmp, _cartao, _response, _data;

      return C_project_sindicaldas_frente_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(cnvId != 4)) {
                _context.next = 15;
                break;
              }

              _context.prev = 2;
              cartao = idCrt;
              _context.next = 6;
              return _pages_api_api__WEBPACK_IMPORTED_MODULE_5__.default.get("loginUsr/".concat(cartao, "/").concat(password));

            case 6:
              response = _context.sent;

              //console.log(parseFloat(saldo));
              //console.log(parseFloat(vlrCompra));
              //console.log(statusUsr);
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
                  next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
                    pathname: '/sobre',
                    query: {
                      id: "".concat(cnvId),
                      name: "".concat(nomConvenio)
                    }
                  });
                }
              }

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              alert('Falha na confirmação da compra!');

            case 13:
              _context.next = 43;
              break;

            case 15:
              _context.prev = 15;
              _cartao = idCrt;
              _context.next = 19;
              return _pages_api_api__WEBPACK_IMPORTED_MODULE_5__.default.get("loginUsr/".concat(_cartao, "/").concat(password));

            case 19:
              _response = _context.sent;
              _data = new Date();
              dia = _data.getDate();
              mes = _data.getMonth() + 1;
              ano = _data.getFullYear();
              dataString = ano + '-' + mes + '-' + dia;
              dataAtual = dataString;
              hor = _data.getHours();
              min = _data.getMinutes();
              seg = _data.getSeconds();
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
                cmpCartao: _cartao
              }).then(function () {
                alert('Compra cadastrada com sucesso!');
              })["catch"](function () {
                alert('Erro no cadastro!');
              });
              next_router__WEBPACK_IMPORTED_MODULE_4___default().push({
                pathname: '/sobre',
                query: {
                  id: "".concat(cnvId),
                  name: "".concat(nomConvenio)
                }
              });
              _context.next = 43;
              break;

            case 40:
              _context.prev = 40;
              _context.t1 = _context["catch"](15);
              alert('Falha na confirmação da compra!');

            case 43:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10], [15, 40]]);
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
      lineNumber: 170,
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
          lineNumber: 173,
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
              lineNumber: 176,
              columnNumber: 29
            }, this), user.map(function (row) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dados",
                  children: ["Nome:", row.usrNome]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dados",
                  children: ["Matricula:", row.usrMatricula]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "dados",
                  children: ["Mes/Ano Saldo:", row.usrMes, " / ", row.usrAno]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
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
                    lineNumber: 191,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 37
                }, _this)]
              }, row.usrId, true, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 33
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "login-column right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "text",
              children: "Formul\xE1rio Conf. Lan\xE7amento"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
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
                    lineNumber: 205,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 204,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
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
                    lineNumber: 216,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
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
                    lineNumber: 222,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "button-area",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                  type: "submit",
                  children: "Entrar"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 227,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 226,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuY2FtZW50by42ZGM1ZDRmY2VmZDVhZjgwNGRmNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsU0FBU08sVUFBVCxHQUFzQjtBQUFBOztBQUFBOztBQUNsQixrQkFBMEJOLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLG1CQUFnQ1IsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT1MsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NWLCtDQUFRLENBQUMsRUFBRCxDQUExQztBQUFBLE1BQU9XLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQXNDWiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQSxNQUFPYSxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUF3QmQsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT2UsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQWdDaEIsK0NBQVEsRUFBeEM7QUFBQSxNQUFPaUIsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxtQkFBa0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPbUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxtQkFBMEJwQiwrQ0FBUSxDQUFDLENBQUQsQ0FBbEM7QUFBQSxNQUFPcUIsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDdEIsK0NBQVEsRUFBMUM7QUFBQSxNQUFPdUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdyQixzREFBUyxFQUF4QjtBQUNBLE1BQU1zQixLQUFLLEdBQUdELE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxTQUEzQjtBQUNBLE1BQU1DLEtBQUss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QUFRLHNCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzRUg7O0dBdk9RNUY7VUFZVUY7OztLQVpWRTtBQXlPVCwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sYW5jYW1lbnRvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSc7XHJcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi9wYWdlcy9hcGkvYXBpJztcclxuXHJcbmZ1bmN0aW9uIExhbmNhbWVudG8oKSB7ICAgICAgICBcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmxyQ29tcHJhLCBzZXRWbHJDb21wcmFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3F0ZFBhcmNlbGFzLCBzZXRRdGRQYXJjZWxhc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZXJ2aWRvciwgc2V0U2Vydmlkb3JdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtjbXBDYXJ0YW8sIHNldENtcENhcnRhb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW3NhbGRvLCBzZXRTYWxkb10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtzdGF0dXNVc3IsIHNldFN0YXR1c1Vzcl0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaWRDcnQgPSByb3V0ZXIucXVlcnkubnJvQ2FydGFvO1xyXG4gICAgY29uc3QgY252SWQgPSByb3V0ZXIucXVlcnkuY29udmVuaW87XHJcbiAgICBjb25zdCBub21Db252ZW5pbyA9IHJvdXRlci5xdWVyeS5ub21GYW50YXNpYTtcclxuXHJcbiAgICBjb25zdCBhcnJfYWxmYSA9IFtcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIixcIiFcIixcIkBcIixcIiRcIixcIiVcIixcIiZcIixcIipcIl07XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAkYXJyX2FsZmEgPSBhcnJheShcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIixcIiFcIixcIkBcIixcIiRcIixcIiVcIixcIiZcIixcIipcIik7XHJcbiAgICAkX2RpYSA9IGRhdGUoJ2QnKTtcclxuICAgICRfbWVzID0gZGF0ZSgnbScpO1xyXG4gICAgJF9hbm8gPSBkYXRlKCdZJyk7XHJcbiAgICAkX2hvciA9IGRhdGUoXCJIXCIpO1xyXG4gICAgJF9taW4gPSBkYXRlKFwiaVwiKTtcclxuICAgICRfc2VnID0gZGF0ZShcInNcIik7XHJcbiAgICAkcHJpX2xldHJhID0gJGFycl9hbGZhWyRfZGlhXTtcclxuICAgICRzZWdfbGV0cmEgPSAkYXJyX2FsZmFbJF9ob3JdO1xyXG4gICAgJGFub19hbGZhID0gKHN0cmluZykkX2FubztcclxuICAgICRjb2RfYWxmYSA9IChzdHJpbmcpJGNvZGlnbztcclxuICAgICRtaW5fYWxmYSA9IChzdHJpbmcpJF9taW47XHJcbiAgICAkc2VnX2FsZmEgPSAoc3RyaW5nKSRfc2VnO1xyXG4gICAgJHNlZ3VyYW5jYSAuPSAkcHJpX2xldHJhLiRzZWdfbGV0cmEuJGFub19hbGZhLiRtaW5fYWxmYS4kY29kX2FsZmEuJHNlZ19hbGZhO1xyXG4gICAgKi9cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjbmZMYW5jYW1lbnRvKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoY252SWQgIT0gNCApe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJ0YW8gPSBpZENydDtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KGBsb2dpblVzci8ke2NhcnRhb30vJHtwYXNzd29yZH1gKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJzZUZsb2F0KHNhbGRvKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGFyc2VGbG9hdCh2bHJDb21wcmEpKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzdGF0dXNVc3IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcnNlRmxvYXQoc2FsZG8pIDwgcGFyc2VGbG9hdCh2bHJDb21wcmEpICkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ZhbGhhIG5hIGNvbmZpcm1hw6fDo28gZGEgY29tcHJhISBDb2RpZ28gNTUnKTtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtwYXRobmFtZTogJy9zb2JyZSd9KVxyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzVXNyICE9ICdBJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdGYWxoYSBuYSBjb25maXJtYcOnw6NvIGRhIGNvbXByYSEgQ29kaWdvIDU0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe3BhdGhuYW1lOiAnLyd9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhID0gZGF0YS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lcyA9IGRhdGEuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFubyA9IGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVN0cmluZyA9IGFubyArICctJyArIG1lcyArICctJyArIGRpYTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUF0dWFsID0gZGF0YVN0cmluZztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaG9yID0gZGF0YS5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW4gPSBkYXRhLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnID0gZGF0YS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhvcmFTdHJpbmcgPSBob3IgKyAnOicgKyBtaW4gKyAnOicgKyBzZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhvcmFBdHVhbCA9IGhvcmFTdHJpbmc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByaUxldHJhID0gYXJyX2FsZmFbZGlhXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnTGV0cmEgPSBhcnJfYWxmYVtob3JdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2RTZWd1cmFuY2EgPSBwcmlMZXRyYSArIHNlZ0xldHJhICsgYW5vICsgY252SWQgKyBtaW4gKyBzZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRheEFkbWluID0gMztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdHVzQ21wID0gJ0EnO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaS5wb3N0KCduZXdjb21wcmEnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcEVtaXNzYW86IGRhdGFBdHVhbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcEhvckVtaXNzYW86IGhvcmFBdHVhbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcENvbnZlbmlvOiBjbnZJZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcFF0ZFBhcmNlbGE6IHBhcnNlSW50KHF0ZFBhcmNlbGFzKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcFZsckNvbXByYTogcGFyc2VGbG9hdCh2bHJDb21wcmEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY21wU2Vydmlkb3I6IHNlcnZpZG9yLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY21wQ29kU2VndXJhbmNhOiBjb2RTZWd1cmFuY2EsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXBTdGF0dXM6IHN0YXR1c0NtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY21wQ2FydGFvOiBjYXJ0YW8gICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0NvbXByYSBjYWRhc3RyYWRhIGNvbSBzdWNlc3NvIScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRXJybyBubyBjYWRhc3RybyEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogJy9zb2JyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBgJHtjbnZJZH1gLCBuYW1lOiBgJHtub21Db252ZW5pb31gfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdGYWxoYSBuYSBjb25maXJtYcOnw6NvIGRhIGNvbXByYSEnKTtcclxuICAgICAgICB9ICBcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FydGFvID0gaWRDcnQ7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYGxvZ2luVXNyLyR7Y2FydGFvfS8ke3Bhc3N3b3JkfWApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlhID0gZGF0YS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXMgPSBkYXRhLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5vID0gZGF0YS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YVN0cmluZyA9IGFubyArICctJyArIG1lcyArICctJyArIGRpYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFBdHVhbCA9IGRhdGFTdHJpbmc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG9yID0gZGF0YS5nZXRIb3VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWluID0gZGF0YS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWcgPSBkYXRhLmdldFNlY29uZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhvcmFTdHJpbmcgPSBob3IgKyAnOicgKyBtaW4gKyAnOicgKyBzZWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBob3JhQXR1YWwgPSBob3JhU3RyaW5nO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaUxldHJhID0gYXJyX2FsZmFbZGlhXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ0xldHJhID0gYXJyX2FsZmFbaG9yXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvZFNlZ3VyYW5jYSA9IHByaUxldHJhICsgc2VnTGV0cmEgKyBhbm8gKyBjbnZJZCArIG1pbiArIHNlZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXhBZG1pbiA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0dXNDbXAgPSAnQSc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGkucG9zdCgnbmV3Y29tcHJhJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21wRW1pc3NhbzogZGF0YUF0dWFsLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtcEhvckVtaXNzYW86IGhvcmFBdHVhbCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbXBDb252ZW5pbzogY252SWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY21wUXRkUGFyY2VsYTogcGFyc2VJbnQocXRkUGFyY2VsYXMpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtcFZsckNvbXByYTogcGFyc2VGbG9hdCh2bHJDb21wcmEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtcFNlcnZpZG9yOiBzZXJ2aWRvciwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbXBDb2RTZWd1cmFuY2E6IGNvZFNlZ3VyYW5jYSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbXBTdGF0dXM6IHN0YXR1c0NtcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNtcENhcnRhbzogY2FydGFvICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0NvbXByYSBjYWRhc3RyYWRhIGNvbSBzdWNlc3NvIScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdFcnJvIG5vIGNhZGFzdHJvIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3NvYnJlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBgJHtjbnZJZH1gLCBuYW1lOiBgJHtub21Db252ZW5pb31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnRmFsaGEgbmEgY29uZmlybWHDp8OjbyBkYSBjb21wcmEhJyk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWRDcnQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjYXJ0YW8gPSBpZENydDsgICAgICAgIFxyXG4gICAgICAgIGFwaS5nZXQoYGZpbmRVc2VyLyR7Y2FydGFvfWApLnRoZW4ocmVzcCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSlcclxuICAgICAgICAgICAgc2V0VXNlcihyZXNwLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRTZXJ2aWRvcihyZXNwLmRhdGFbMF0udXNySWQpO1xyXG4gICAgICAgICAgICBzZXRTYWxkbyhyZXNwLmRhdGFbMF0udXNyVmxyRGlzcG9uaXZlbCk7XHJcbiAgICAgICAgICAgIHNldFN0YXR1c1VzcihyZXNwLmRhdGFbMF0udXNyU3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibG9naW4tdGl0bGVcIj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29sdW1uIGxvZ2luLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhZG9zIGRvIFNlcnZpZG9yKGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvdy51c3JJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYWRvcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21lOntyb3cudXNyTm9tZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFkb3MnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0cmljdWxhOntyb3cudXNyTWF0cmljdWxhfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYWRvcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZXMvQW5vIFNhbGRvOntyb3cudXNyTWVzfSAvIHtyb3cudXNyQW5vfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYWRvcyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3NhbGRvJz5TYWxkbyBEaXNwb25pdmVsOiB7SW50bC5OdW1iZXJGb3JtYXQoJ3B0LUJSJywge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0JSTCd9KS5mb3JtYXQocm93LnVzclZsckRpc3Bvbml2ZWwpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29sdW1uIHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3JtdWzDoXJpbyBDb25mLiBMYW7Dp2FtZW50b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NuZkxhbmNhbWVudG99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZsckNvbXByYVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRlIG8gVmFsb3IgZGEgQ29tcHJhXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZsckNvbXByYX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0VmxyQ29tcHJhKGUudGFyZ2V0LnZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInF0ZFBhcmNlbGFzXCIgcGxhY2Vob2xkZXI9XCJEaWdpdGUgYSBRdGRlLiBQYXJjZWxhc1wiIHZhbHVlPXtxdGRQYXJjZWxhc30gb25DaGFuZ2U9eyhlKSA9PiB7c2V0UXRkUGFyY2VsYXMoZS50YXJnZXQudmFsdWUpfX0gIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBzdWEgc2VuaGFcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4ge3NldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX19ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnRyYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmNhbWVudG87Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNZW51IiwiUm91dGVyIiwidXNlUm91dGVyIiwiYXBpIiwiTGFuY2FtZW50byIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmxyQ29tcHJhIiwic2V0VmxyQ29tcHJhIiwicXRkUGFyY2VsYXMiLCJzZXRRdGRQYXJjZWxhcyIsInVzZXIiLCJzZXRVc2VyIiwic2Vydmlkb3IiLCJzZXRTZXJ2aWRvciIsImNtcENhcnRhbyIsInNldENtcENhcnRhbyIsInNhbGRvIiwic2V0U2FsZG8iLCJzdGF0dXNVc3IiLCJzZXRTdGF0dXNVc3IiLCJyb3V0ZXIiLCJpZENydCIsInF1ZXJ5IiwibnJvQ2FydGFvIiwiY252SWQiLCJjb252ZW5pbyIsIm5vbUNvbnZlbmlvIiwibm9tRmFudGFzaWEiLCJhcnJfYWxmYSIsImNuZkxhbmNhbWVudG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJjYXJ0YW8iLCJnZXQiLCJyZXNwb25zZSIsInBhcnNlRmxvYXQiLCJhbGVydCIsInB1c2giLCJwYXRobmFtZSIsImRhdGEiLCJEYXRlIiwiZGlhIiwiZ2V0RGF0ZSIsIm1lcyIsImdldE1vbnRoIiwiYW5vIiwiZ2V0RnVsbFllYXIiLCJkYXRhU3RyaW5nIiwiZGF0YUF0dWFsIiwiaG9yIiwiZ2V0SG91cnMiLCJtaW4iLCJnZXRNaW51dGVzIiwic2VnIiwiZ2V0U2Vjb25kcyIsImhvcmFTdHJpbmciLCJob3JhQXR1YWwiLCJwcmlMZXRyYSIsInNlZ0xldHJhIiwiY29kU2VndXJhbmNhIiwidGF4QWRtaW4iLCJzdGF0dXNDbXAiLCJwb3N0IiwiY21wRW1pc3NhbyIsImNtcEhvckVtaXNzYW8iLCJjbXBDb252ZW5pbyIsImNtcFF0ZFBhcmNlbGEiLCJwYXJzZUludCIsImNtcFZsckNvbXByYSIsImNtcFNlcnZpZG9yIiwiY21wQ29kU2VndXJhbmNhIiwiY21wU3RhdHVzIiwidGhlbiIsImlkIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwIiwidXNySWQiLCJ1c3JWbHJEaXNwb25pdmVsIiwidXNyU3RhdHVzIiwibWFwIiwicm93IiwidXNyTm9tZSIsInVzck1hdHJpY3VsYSIsInVzck1lcyIsInVzckFubyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9