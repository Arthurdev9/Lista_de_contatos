import { useSelector } from 'react-redux'
import ContatosAdicionados from '../../components/ContatosAdicionados'
import { RootReducer } from '../../store/store'
import * as S from './styles'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Contatos>
      {itens.map((c) => (
        <li key={c.id}>
          <ContatosAdicionados
            status={c.status}
            email={c.email}
            id={c.id}
            nome={c.nome}
            numero={c.numero}
          />
        </li>
      ))}
    </S.Contatos>
  )
}

export default ListaDeContatos
