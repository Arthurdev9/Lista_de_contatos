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
    },
    {
      nome: 'Carlos Mendes',
      status: enums.Status.AMIGOS,
      numero: 81991112233,
      email: 'carlos.mendes@example.com',
      id: 4
    },
    {
      nome: 'Fernanda Silva',
      status: enums.Status.FAMILIA,
      numero: 81992223344,
      email: 'fernanda.silva@example.com',
      id: 5
    },
    {
      nome: 'Paulo Henrique',
      status: enums.Status.TRABALHO,
      numero: 81993334455,
      email: 'paulo.henrique@example.com',
      id: 6
    },
    {
      nome: 'Mariana Costa',
      status: enums.Status.AMIGOS,
      numero: 81994445566,
      email: 'mariana.costa@example.com',
      id: 7
    },
    {
      nome: 'Ricardo Lopes',
      status: enums.Status.FAMILIA,
      numero: 81995556677,
      email: 'ricardo.lopes@example.com',
      id: 8
    },
    {
      nome: 'Patrícia Almeida',
      status: enums.Status.TRABALHO,
      numero: 81996667788,
      email: 'patricia.almeida@example.com',
      id: 9
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
    },
    cadastrar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
