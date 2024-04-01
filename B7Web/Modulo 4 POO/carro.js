class Carro {
    
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    SetMarca(_marca) {
        this.marca = _marca;
    }

    SetModelo(_modelo) {
        this.modelo = _modelo;
    }
}

let carro1 = new Carro("Ford", "Ka");
// carro1.SetMarca();
// carro1.SetModelo();

console.log(`A marca do carro é ${carro1.marca}, sendo o modelo: ${carro1.modelo}`);