import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/contato'
import { useState } from 'react'
import { cadastrar } from '../../store/reducers/contatos'

const AdicionarContatos = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [nomeContato, setNomeContato] = useState('')
  const [emailContato, setEmailContato] = useState('')
  const [numeroContato, setNumeroContato] = useState<number | undefined>()
  const [statusContato, setStatusContato] = useState<enums.Status>(
    enums.Status.TRABALHO
  )

  const salvarContato = () => {
    if (numeroContato === undefined) {
      alert('Por favor, infrome o número do contato')
      return
    }

    dispatch(
      cadastrar({
        email: emailContato,
        nome: nomeContato,
        numero: numeroContato,
        status: statusContato
      })
    )

    setNomeContato('')
    setEmailContato('')
    setNumeroContato(undefined)
    setStatusContato(enums.Status.TRABALHO)
  }

  return (
    <S.InputsContainer>
      <S.Form>
        <S.Input
          type="text"
          placeholder="Nome do Contato"
          value={nomeContato}
          onChange={(e) => setNomeContato(e.target.value)}
        />
        <S.Input
          type="email"
          placeholder="E-mail do Contato"
          value={emailContato}
          onChange={(e) => setEmailContato(e.target.value)}
        />
        <S.Input
          type="tel"
          placeholder="Telefone do Contato"
          value={numeroContato ?? ''}
          onChange={(e) => setNumeroContato(Number(e.target.value))}
        />
        <S.Radios>
          <label>
            <input
              type="radio"
              name="status"
              value={enums.Status.AMIGOS}
              checked={statusContato === enums.Status.AMIGOS}
              onChange={() => setStatusContato(enums.Status.AMIGOS)}
            />
            Amigos
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value={enums.Status.TRABALHO}
              checked={statusContato === enums.Status.TRABALHO}
              onChange={() => setStatusContato(enums.Status.TRABALHO)}
              defaultChecked
            />
            Trabalho
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value={enums.Status.FAMILIA}
              checked={statusContato === enums.Status.FAMILIA}
              onChange={() => setStatusContato(enums.Status.FAMILIA)}
            />
            Família
          </label>
        </S.Radios>
        <S.Button onClick={salvarContato} type="button">
          Cadastrar
        </S.Button>
        <S.Button onClick={() => navigate('/')} type="button">
          Voltar
        </S.Button>
      </S.Form>
    </S.InputsContainer>
  )
}

export default AdicionarContatos
