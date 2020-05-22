/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: subFuncoes, somaFuncoes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subFuncoes\", function() { return subFuncoes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"somaFuncoes\", function() { return somaFuncoes; });\nfunction subFuncoes(a, b) {\n  return a - b;\n}\nfunction somaFuncoes(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n/* harmony import */ var _soma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soma */ \"./soma.js\");\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n //HERANÇA COM ES6\n\nvar List = /*#__PURE__*/function () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log(this.data);\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoList = /*#__PURE__*/function (_List) {\n  _inherits(TodoList, _List);\n\n  var _super = _createSuper(TodoList);\n\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n\n    return _super.apply(this, arguments);\n  }\n\n  return TodoList;\n}(List);\n\nvar minhaLista = new TodoList();\n\ndocument.getElementById('buttonTodo').onclick = function () {\n  minhaLista.add('Novo 1');\n}; //--------------------------\n//METODOS STATICOS\n\n\nvar Matematica = /*#__PURE__*/function () {\n  function Matematica() {\n    _classCallCheck(this, Matematica);\n  }\n\n  _createClass(Matematica, null, [{\n    key: \"soma\",\n    value: function soma(a, b) {\n      var result = a + b;\n      console.log(result);\n      return result;\n    }\n  }]);\n\n  return Matematica;\n}();\n\nMatematica.soma(10, 20); //tipo de declaracao de varival nao mutavel\n\nvar a = 1; //só é possivel mudar valores de um objeto declarado como const ex.:\n\nvar obj = {\n  nome: 'michael'\n};\nobj.nome = 'Douglas';\nconsole.log(obj); //let - variavel definida somente dentro do escopo ex.: \n\nfunction teste(x) {\n  var y = 5;\n\n  if (x > 5) {\n    console.log(x, y);\n  }\n}\n\nteste(10); //arrays\n\nvar arr = [1, 3, 4, 8, 9, 10];\nconsole.log('novo array', arr);\nvar newArr = arr.map(function (item, index) {\n  return item + index;\n});\nconsole.log('testando o map', newArr);\nvar sum = arr.reduce(function (total, next) {\n  return total + next;\n});\nconsole.log('testando o reduce', sum);\nvar filter = arr.filter(function (item) {\n  return item % 2 == 0;\n});\nconsole.log('testando o filter', filter);\nvar find = arr.find(function (item) {\n  return item === 4;\n});\nconsole.log('testando o find', find); //exemplo com arrow function\n\nvar arrow = function arrow() {\n  return {\n    nome: 'michael'\n  };\n};\n\nconsole.log(arrow()); //e o mesmo que\n\nfunction arrowNormal() {\n  return {\n    nome: 'michael'\n  };\n}\n\nconsole.log(arrowNormal()); //definir valores padroes para funcoes\n\nfunction soma() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;\n  return a + b;\n}\n\nconsole.log(soma(2, 5));\nconsole.log(soma()); //funciona pq foi definido valores padroes\n//desestruturacao de objetos é quando conseguimos pegar variaveis especificos dos objetos\n//ex.:\n\nvar usuario = {\n  nome: 'Michael',\n  idade: 26,\n  endereco: {\n    cidade: 'Sorriso',\n    estado: 'MT'\n  }\n};\nvar nome = usuario.nome,\n    cidade = usuario.endereco.cidade;\nconsole.log(nome);\nconsole.log(cidade); //também funcionam para funcoes\n//ex.:\n\nfunction mostraNome(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  console.log(nome, idade);\n}\n\nmostraNome(usuario); //operadores rest/spread\n//REST serve para pegar o resto das propriedades\n//https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread\n\nvar usuario1 = {\n  nome1: 'Michael',\n  idade: 26,\n  empresa: 'Lemontech'\n};\n\nvar nome1 = usuario1.nome1,\n    resto = _objectWithoutProperties(usuario1, [\"nome1\"]);\n\nconsole.log(nome1);\nconsole.log(resto); //SPREAD\n\nvar arr1 = [1, 2, 3];\nvar arr2 = [4, 5, 6];\nvar arr3 = [].concat(arr1, arr2);\nconsole.log(arr3); //template literals \n\nvar nome2 = 'Michael';\nvar idade2 = 26;\nconsole.log(\"Meu nome \\xE9 \".concat(nome2, \" e tenho \").concat(idade2, \" de idade\")); //object short syntax, propriedades com o mesmo nome não precisa reatribuir\n\nvar label = 'Label';\nvar titulo = 'Titulo';\nvar div = {\n  label: label,\n  titulo: titulo,\n  nomeDiv: 'Nome div'\n};\nconsole.log(div);\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"somaFuncoes\"])(10, 5));\nconsole.log(Object(_soma__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(30, 40));\nconsole.log(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"subFuncoes\"](10, 5));\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./soma.js":
/*!*****************!*\
  !*** ./soma.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return batatinha; });\nfunction batatinha(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./soma.js?");

/***/ })

/******/ });