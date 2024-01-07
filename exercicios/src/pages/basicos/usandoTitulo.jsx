import Titulo from "../../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Pagina de Cadastro"
        secundario="Incluir, alterar e execluir cadastro"
      />
      <Titulo
        principal="Pagina de Login"
        secundario="Inform seu email e senha"
        pequeno={true}
      />
      <Titulo
        principal="Pagina de Cadastro"
        secundario="Incluir, alterar e execluir cadastro"
      />
    </div>
  );
}
