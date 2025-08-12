import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { useDispatch, useSelector } from 'react-redux'
import { filtroStatus } from '../../store/reducers/filtro'
import { ReactNode } from 'react'
import { RootReducer } from '../../store/store'
import { selecionarQuantidadePorStatus } from '../../store/selectors/contatoSelectors'

type Props = {
  valor: enums.Status
  texto?: string
  icon: ReactNode
}

const FiltroCard = ({ valor, texto, icon }: Props) => {
  const dispatch = useDispatch()
  const quantidade = useSelector(
    valor
      ? selecionarQuantidadePorStatus(valor)
      : (state: RootReducer) => state.contatos.itens.length
  )

  return (
    <S.StatusContainer>
      <S.Botao onClick={() => dispatch(filtroStatus(valor))}>
        <span style={{ marginRight: '8px' }}>{icon}</span>
        {texto}
        <S.Span>{quantidade}</S.Span>
      </S.Botao>
    </S.StatusContainer>
  )
}

export default FiltroCard
