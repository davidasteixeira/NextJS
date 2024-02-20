import questoes from '../questoes/bancoDeQuestoes'

export default (req, res) => {
    console.log(questoes[0])
    console.log(typeof questoes[0])
    res.status(200).json(questoes[0].paraObject());
}
