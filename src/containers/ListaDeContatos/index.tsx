import ContatosAdicionados from '../../components/ContatosAdicionados'
import { Contatos } from './style'

const ListaDeContatos = () => {
  return (
    <Contatos>
      <ContatosAdicionados />
      <ContatosAdicionados />
      <ContatosAdicionados />
    </Contatos>
  )
}

export default ListaDeContatos
