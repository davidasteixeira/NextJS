export default class RespostaModel {
    #valor: string
    #certa: boolean
    #revelada: boolean

    constructor(valor: string, certa: boolean, revelada = false) {
        this.#certa = certa
        this.#revelada = revelada
        this.#valor = valor
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
}