
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




