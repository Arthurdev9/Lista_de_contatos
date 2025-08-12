import { useDispatch } from 'react-redux'
import Contatos from '../../models/Tarefa'
import * as S from './styles'
import { FaTrash, FaEdit, FaStar } from 'react-icons/fa'
import { LuDownload, LuXCircle } from 'react-icons/lu'
import { editar, remover } from '../../store/reducers/contatos'
import { useEffect, useState } from 'react'
import { Status } from '../../utils/enums/contato'

export type Dados = Contatos

const ContatosAdicionados = ({ id, email, nome, numero, status }: Dados) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const [novoNome, setNovoNome] = useState(nome)
  const [novoEmail, setNovoEmail] = useState(email)
  const [novoNumero, setNovoNumero] = useState(numero)
  const [novoStatus, setNovoStatus] = useState(status)

  const salvarEdicao = () => {
    dispatch(
      editar({
        email: novoEmail,
        nome: novoNome,
        numero: novoNumero,
        status: novoStatus,
        id
      })
    )
    setEstaEditando(false)
  }

  const iniciarEdicao = () => {
    setEstaEditando(true)
  }

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setNovoNome(nome)
    setNovoEmail(email)
    setNovoNumero(numero)
    setNovoStatus(status)
  }

  return (
    <S.Lista>
      {estaEditando ? (
        <>
          <S.Form onSubmit={(e) => e.preventDefault()}>
            <S.Input
              type="text"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />
            <S.Select
              value={novoStatus}
              onChange={(e) => setNovoStatus(e.target.value as Status)}
            >
              <option value={Status.AMIGOS}>Amigos</option>
              <option value={Status.FAMILIA}>Família</option>
              <option value={Status.TRABALHO}>Trabalho</option>
            </S.Select>
            <S.Input
              type="number"
              value={novoNumero}
              onChange={(e) => setNovoNumero(Number(e.target.value))}
            />
            <S.Input
              type="email"
              value={novoEmail}
              onChange={(e) => setNovoEmail(e.target.value)}
            />
          </S.Form>
          <S.Icons onClick={() => salvarEdicao()}>
            <LuDownload />
          </S.Icons>
          <S.Icons onClick={cancelarEdicao}>
            <LuXCircle />
          </S.Icons>
        </>
      ) : (
        <>
          <S.Nome>{nome}</S.Nome>
          <S.Span>{status}</S.Span>
          <S.Sobre>{numero}</S.Sobre>
          <S.Sobre>{email}</S.Sobre>
          <S.Icons onClick={iniciarEdicao}>
            <FaEdit style={{ color: '#627cf1' }} />
          </S.Icons>
          <S.Icons onClick={() => dispatch(remover(id))}>
            <FaTrash style={{ color: 'red' }} />
          </S.Icons>
        </>
      )}
    </S.Lista>
  )
}

export default ContatosAdicionados
