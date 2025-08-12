import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { useDispatch, useSelector } from 'react-redux'
import { filtroStatus } from '../../store/reducers/filtro'
import { ReactNode } from 'react'

type Props = {
  valor: enums.Status
  texto?: string
  icon: ReactNode
}

const FiltroCard = ({ valor, texto, icon }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.StatusContainer>
      <S.Botao onClick={() => dispatch(filtroStatus(valor))}>
        <span style={{ marginRight: '8px' }}>{icon}</span>
        {valor || texto}
      </S.Botao>
    </S.StatusContainer>
  )
}

export default FiltroCard
