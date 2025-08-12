import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { useDispatch } from 'react-redux'
import { FaGlobe, FaHeart, FaUsers, FaBriefcase } from 'react-icons/fa'
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
      <FiltroCard
        valor={null as any}
        texto="Todos"
        icon={<FaGlobe style={{ color: '#fff' }} />}
      />
      <FiltroCard
        valor={enums.Status.FAMILIA}
        texto="Família"
        icon={<FaHeart style={{ color: 'red' }} />}
      />
      <FiltroCard
        valor={enums.Status.AMIGOS}
        texto="Amigos"
        icon={<FaUsers style={{ color: '#fff' }} />}
      />
      <FiltroCard
        valor={enums.Status.TRABALHO}
        texto="Trabalho"
        icon={<FaBriefcase style={{ color: '#8B4513' }} />}
      />
    </S.Aside>
  )
}

export default BarraLateral
