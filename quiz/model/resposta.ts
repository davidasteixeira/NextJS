export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#certa = certa
        this.#revelada = revelada
        this.#valor = valor
    }

    static certa(valor: string) {
        return new RespostaModel(valor, true);
    }

    static errada(valor: string) {
        return new RespostaModel(valor, false)
    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    paraObject() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada

        }
    }
}