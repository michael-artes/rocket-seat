import { somaFuncoes as somaNovo } from './funcoes';
import * as funcoes from './funcoes';

import nomeSomaQualquer from './soma';


//HERANÇA COM ES6
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{

}

const minhaLista = new TodoList();


document.getElementById('buttonTodo').onclick = function() {
    minhaLista.add('Novo 1');
}


//--------------------------
//METODOS STATICOS

class Matematica {

    static soma(a, b) {
        const result = a+b;
        console.log(result);
        return result;
    }
}

Matematica.soma(10, 20);


//tipo de declaracao de varival nao mutavel
const a = 1;

//só é possivel mudar valores de um objeto declarado como const ex.:

const obj = {nome: 'michael'};

obj.nome = 'Douglas';

console.log(obj);



//let - variavel definida somente dentro do escopo ex.: 

function teste(x) {
    let y = 5;

    if (x > 5) {
        console.log(x,y);
    }
}

teste(10);




//arrays

const arr = [1,3,4,8,9,10];
console.log('novo array', arr);

const newArr = arr.map((item, index) => {
    return item + index;    
});

console.log('testando o map', newArr);

const sum = arr.reduce((total, next) => {
    return total + next;
});

console.log('testando o reduce', sum);

const filter = arr.filter(item => item % 2 == 0);

console.log('testando o filter', filter);

const find = arr.find(item => {
    return item === 4;
});

console.log('testando o find', find);


//exemplo com arrow function
const arrow = () => ({nome: 'michael'});
console.log(arrow());

//e o mesmo que

function arrowNormal () {
    return {nome: 'michael'};
}

console.log(arrowNormal());


//definir valores padroes para funcoes

function soma(a = 2,b = 4) {
    return a + b;
}

console.log(soma(2,5));
console.log(soma()); //funciona pq foi definido valores padroes



//desestruturacao de objetos é quando conseguimos pegar variaveis especificos dos objetos
//ex.:

const usuario = {
    nome: 'Michael',
    idade: 26,
    endereco: {
        cidade: 'Sorriso',
        estado: 'MT',
    }
}

const { nome, endereco: {cidade} } = usuario;

console.log(nome);
console.log(cidade);

//também funcionam para funcoes
//ex.:

function mostraNome({nome, idade}) {
    console.log(nome, idade);
}

mostraNome(usuario);



//operadores rest/spread


//REST serve para pegar o resto das propriedades
//https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread

const usuario1 = {
    nome1: 'Michael',
    idade: 26,
    empresa: 'Lemontech',
}


const {nome1, ...resto } = usuario1;

console.log(nome1);
console.log(resto);


//SPREAD

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);



//template literals 

const nome2 = 'Michael';
const idade2 = 26;

console.log(`Meu nome é ${nome2} e tenho ${idade2} de idade`);


//object short syntax, propriedades com o mesmo nome não precisa reatribuir
const label = 'Label';
const titulo = 'Titulo';

const div = {
    label,
    titulo,
    nomeDiv: 'Nome div'
}

console.log(div);
console.log(somaNovo(10,5));
console.log(nomeSomaQualquer(30,40));
console.log(funcoes.subFuncoes(10,5));