import * as S from './styles'

const AdicionarContatos = () => {
  return (
    <S.InputsContainer>
      <S.Form>
        <S.Input type="text" placeholder="Nome do Contato" />
        <S.Input type="email" placeholder="E-mail do Contato" />
        <S.Input type="tel" placeholder="Telefone do Contato" />
        <S.Radios>
          <label>
            <input type="radio" name="status" value="amigos" />
            Amigos
          </label>
          <label>
            <input type="radio" name="status" value="trabalho" />
            Trabalho
          </label>
          <label>
            <input type="radio" name="status" value="familia" />
            Família
          </label>
        </S.Radios>
        <S.Button>Cadastrar</S.Button>
        <S.Button>Voltar</S.Button>
      </S.Form>
    </S.InputsContainer>
  )
}

export default AdicionarContatos
