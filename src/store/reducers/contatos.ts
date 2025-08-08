import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'
import Contatos from '../../models/Tarefa'

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Jessica',
      status: enums.Status.AMIGOS,
      numero: 81995464433,
      email: 'jessica@gmail.com',
      id: 1
    },
    {
      nome: 'Arthur',
      status: enums.Status.FAMILIA,
      numero: 81996099444,
      email: 'arthur@gmail.com',
      id: 2
    },
    {
      nome: 'Rosivânia',
      status: enums.Status.TRABALHO,
      numero: 81998555288,
      email: 'Rosivânia@gmail.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    }
  }
})

export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
