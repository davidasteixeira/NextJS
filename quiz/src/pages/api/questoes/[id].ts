import questoes from '../questoes/bancoDeQuestoes'

export default (req, res) => {
    const idSelecionado = +req.query.id

    const unicaoQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if (unicaoQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaoQuestaoOuNada[0].emmbaralharRespostas()
        res.status(200).json(questaoSelecionada.paraObject());
    } else {
        res.status(204).send();

    }

}
