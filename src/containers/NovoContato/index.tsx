import AdicionarContatos from '../../components/AdicionarContatos'
import { CadastroContainer } from './styles'

const NovoContato = () => {
  return (
    <CadastroContainer data-aos="fade-up">
      <AdicionarContatos />
    </CadastroContainer>
  )
}

export default NovoContato
