import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import React, { useState } from 'react'
import { filtroNome } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const [nomeInput, setNomeInput] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setNomeInput(valor)
    dispatch(filtroNome(valor))
  }

  return (
    <S.Aside>
      <S.Input
        type="text"
        placeholder="Procurar Contato..."
        value={nomeInput}
        onChange={handleChange}
      />
      <FiltroCard valor={null as any} texto="Todos" />
      <FiltroCard valor={enums.Status.AMIGOS} />
      <FiltroCard valor={enums.Status.FAMILIA} />
      <FiltroCard valor={enums.Status.TRABALHO} />
    </S.Aside>
  )
}

export default BarraLateral
