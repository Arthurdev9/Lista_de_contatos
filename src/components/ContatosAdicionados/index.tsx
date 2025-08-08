import { useDispatch } from 'react-redux'
import Contatos from '../../models/Tarefa'
import * as S from './styles'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { LuDownload, LuXCircle } from 'react-icons/lu'
import { editar, remover } from '../../store/reducers/contatos'
import { useEffect, useState } from 'react'

type Dados = Contatos

const ContatosAdicionados = ({ id, email, nome, numero, status }: Dados) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  const editando = () => {
    setEstaEditando(true)
  }

  return (
    <S.Lista>
      {estaEditando ? (
        <form>
          <input type="text" value={nome} />
          <select>
            <option>{status}</option>
          </select>
          <input type="number" value={numero} />
          <input type="text" value={email} />
          <S.Icons onClick={() => setEstaEditando(false)}>
            <LuDownload />
          </S.Icons>
          <S.Icons>
            <LuXCircle />
          </S.Icons>
        </form>
      ) : (
        <>
          <S.Nome>{nome}</S.Nome>
          <S.Span>{status}</S.Span>
          <S.Sobre>{numero}</S.Sobre>
          <S.Sobre>{email}</S.Sobre>
          <S.Icons onClick={() => editando()}>
            <FaEdit />
          </S.Icons>
          <S.Icons onClick={() => dispatch(remover(id))}>
            <FaTrash />
          </S.Icons>
        </>
      )}
    </S.Lista>
  )
}

export default ContatosAdicionados
