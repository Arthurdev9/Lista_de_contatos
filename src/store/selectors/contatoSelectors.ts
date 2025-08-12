import { RootReducer } from '../store'
import * as enums from '../../utils/enums/contato'

export const selecionarQuantidadePorStatus =
  (status: enums.Status) => (state: RootReducer) => {
    return state.contatos.itens.filter((c) => c.status === status).length
  }
