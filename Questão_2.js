import Lista from "../Lista_2"

class Questao2{
    constructor(){
        this.newLista = new Lista();
    }

    enqueue(l){
        this.newLista.append(l);
    }

    dequeue(){
        return this.newLista.removeBeginning();
    }

    front(){
        return this.newLista.proximo.dado;
    }
}

export default Questao2;