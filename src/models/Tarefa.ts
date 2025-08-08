import * as enums from '../utils/enums/contato'

class Contatos {
  nome: string
  status: enums.Status
  numero: number
  email: string
  id: number

  constructor(
    nome: string,
    status: enums.Status,
    numero: number,
    id: number,
    email: string
  ) {
    this.nome = nome
    this.status = status
    this.numero = numero
    this.id = id
    this.email = email
  }
}

export default Contatos
