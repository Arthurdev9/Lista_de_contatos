import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'

type FiltroState = {
  nome: string
  status: enums.Status | null
}

const initialState: FiltroState = {
  nome: '',
  status: null
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    filtroStatus: (state, action: PayloadAction<enums.Status | null>) => {
      state.status = action.payload
    }
  }
})

export default filtroSlice.reducer
export const { filtroStatus } = filtroSlice.actions
