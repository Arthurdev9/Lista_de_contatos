import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { filtroStatus } from '../../store/reducers/filtro'

type Props = {
  valor: enums.Status
  texto?: string
}

const FiltroCard = ({ valor, texto }: Props) => {
  const dispatch = useDispatch()

  return (
    <S.StatusContainer>
      <S.Botao onClick={() => dispatch(filtroStatus(valor))}>
        {valor || texto}
      </S.Botao>
    </S.StatusContainer>
  )
}

export default FiltroCard
