import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { useDispatch } from 'react-redux'
import {
  FaGlobe,
  FaHeart,
  FaUsers,
  FaBriefcase,
  FaTimes,
  FaBars
} from 'react-icons/fa'
import React, { useState } from 'react'
import { filtroNome } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const [nomeInput, setNomeInput] = useState('')
  const [sidebarAberta, setSidebarAberta] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value
    setNomeInput(valor)
    dispatch(filtroNome(valor))
  }

  return (
    <>
      {!sidebarAberta && (
        <S.ToggleButton onClick={() => setSidebarAberta(true)}>
          <FaBars />
        </S.ToggleButton>
      )}
      <S.Aside $aberta={sidebarAberta}>
        <S.CloseButton onClick={() => setSidebarAberta(false)}>
          <FaTimes />
        </S.CloseButton>
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
    </>
  )
}

export default BarraLateral
