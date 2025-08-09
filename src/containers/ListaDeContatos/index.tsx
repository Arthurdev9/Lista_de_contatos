import { useSelector } from 'react-redux'
import ContatosAdicionados from '../../components/ContatosAdicionados'
import { RootReducer } from '../../store/store'
import * as S from './styles'

const ListaDeContatos = () => {
  const { status, nome } = useSelector((state: RootReducer) => state.filtro)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const contatosFiltrados = itens.filter((c) => {
    const statusFilter = status ? c.status === status : itens
    const nomeFilterInput = nome
      ? c.nome.toLowerCase().includes(nome.toLowerCase())
      : itens

    return statusFilter && nomeFilterInput
  })

  return (
    <S.Contatos>
      {contatosFiltrados.map((c) => (
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
