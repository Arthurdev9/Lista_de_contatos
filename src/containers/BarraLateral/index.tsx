import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'

const BarraLateral = () => {
  return (
    <S.Aside>
      <S.Input type="text" placeholder="Procurar Contato..." />
      <FiltroCard valor={null as any} texto="Todos" />
      <FiltroCard valor={enums.Status.AMIGOS} />
      <FiltroCard valor={enums.Status.FAMILIA} />
      <FiltroCard valor={enums.Status.TRABALHO} />
    </S.Aside>
  )
}

export default BarraLateral
