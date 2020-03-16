import Lista from "../Lista_2";

class Questao1{
    constructor(){
        this.newLista = new Lista();
    }

    push(l){
        this.newLista.add(l);
    }

    pop(){
        return this.newLista.removeBeginning();
    }

    top(){
        return this.newLista.head.proximo.dado;
    }
}

export default Questao1;