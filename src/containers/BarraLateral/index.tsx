import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'

const BarraLateral = () => {
  return (
    <S.Aside>
      <S.Input type="text" placeholder="Procurar Contato..." />
      <FiltroCard status={enums.Status.AMIGOS} />
      <FiltroCard status={enums.Status.FAMILIA} />
      <FiltroCard status={enums.Status.TRABALHO} />
    </S.Aside>
  )
}

export default BarraLateral
