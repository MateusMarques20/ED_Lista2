import Lista from "../Lista_2";

class Questao5{
    constructor(){
        this.Lista = new Lista();
    }

    sortear(){
        let i = 0;
        while(i < 10){
            this.newLista.addAt(Math.floor(Math.random() * (5 - 1) + 1), this.newLista.removeEnd());
            i++;
        }
        return this.newLista.toString();
    }

    add(l){
        this.newLista.append(l);
    }
}

export default Questao5;