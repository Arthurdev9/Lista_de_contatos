import * as S from './styles'
import * as enums from '../../utils/enums/contato'

export type Props = {
  status: enums.Status.AMIGOS | enums.Status.FAMILIA | enums.Status.TRABALHO
}

const FiltroCard = ({ status }: Props) => {
  return (
    <S.StatusContainer>
      <S.Botao>{status}</S.Botao>
    </S.StatusContainer>
  )
}

export default FiltroCard
