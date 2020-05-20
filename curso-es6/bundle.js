"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//HERANÇA COM ES6
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _super.apply(this, arguments);
  }

  return TodoList;
}(List);

var minhaLista = new TodoList();

document.getElementById('buttonTodo').onclick = function () {
  minhaLista.add('Novo 1');
}; //--------------------------
//METODOS STATICOS


var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      var result = a + b;
      console.log(result);
      return result;
    }
  }]);

  return Matematica;
}();

Matematica.soma(10, 20); //tipo de declaracao de varival nao mutavel

var a = 1; //só é possivel mudar valores de um objeto declarado como const ex.:

var obj = {
  nome: 'michael'
};
obj.nome = 'Douglas';
console.log(obj); //let - variavel definida somente dentro do escopo ex.: 

function teste(x) {
  var y = 5;

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10); //arrays

var arr = [1, 3, 4, 8, 9, 10];
console.log('novo array', arr);
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log('testando o map', newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log('testando o reduce', sum);
var filter = arr.filter(function (item) {
  return item % 2 == 0;
});
console.log('testando o filter', filter);
var find = arr.find(function (item) {
  return item === 4;
});
console.log('testando o find', find); //exemplo com arrow function

var arrow = function arrow() {
  return {
    nome: 'michael'
  };
};

console.log(arrow()); //e o mesmo que

function arrowNormal() {
  return {
    nome: 'michael'
  };
}

console.log(arrowNormal()); //definir valores padroes para funcoes

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return a + b;
}

console.log(soma(2, 5));
console.log(soma()); //funciona pq foi definido valores padroes
//desestruturacao de objetos é quando conseguimos pegar variaveis especificos dos objetos
//ex.:

var usuario = {
  nome: 'Michael',
  idade: 26,
  endereco: {
    cidade: 'Sorriso',
    estado: 'MT'
  }
};
var nome = usuario.nome,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(cidade); //também funcionam para funcoes
//ex.:

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario); //operadores rest/spread
//REST serve para pegar o resto das propriedades
//https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread

var usuario1 = {
  nome1: 'Michael',
  idade: 26,
  empresa: 'Lemontech'
};

var nome1 = usuario1.nome1,
    resto = _objectWithoutProperties(usuario1, ["nome1"]);

console.log(nome1);
console.log(resto); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); //template literals 

var nome2 = 'Michael';
var idade2 = 26;
console.log("Meu nome \xE9 ".concat(nome2, " e tenho ").concat(idade2, " de idade")); //object short syntax, propriedades com o mesmo nome não precisa reatribuir

var label = 'Label';
var titulo = 'Titulo';
var div = {
  label: label,
  titulo: titulo,
  nomeDiv: 'Nome div'
};
console.log(div);
