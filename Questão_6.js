import Lista from "../Lista_2";

class Texto {
	constructor(t) {
		this.t = t;
		this.lista = new Lista();
	}

	listar() {
		for (let i = 0; i < this.t.length; i++) {
			this.lista.append(this.t.charAt(i));
		}
	}

	subString(a, b) {
		this.listar();
		let aux = new Lista();
		let x = this.lista.size();
		let i = 1;

		while (i <= x) {
			if (i >= a && i <= b) {
				aux.append(this.lista.removeBeginning());
			} else {
				this.lista.removeBeginning();
			}

			i++;
		}

		return aux;
	}
}

export default Texto;