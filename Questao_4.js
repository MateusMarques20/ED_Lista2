import Lista from "../Lista_2";

class Questao4{
    constructor(){
        this.Lista = new Lista();
    }

    alteraOrdem(){
        let d = new Lista();
        while(this.newLista.size() > 0){
            d.append(this.newLista.removeEnd());
        }
        return d.toString();
    }

    add(l){
        this.newLista.append(l);
    }
}

export default Questao4;