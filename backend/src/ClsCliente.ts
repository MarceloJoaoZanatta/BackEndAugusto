import { Connection } from "typeorm"
import { Cliente } from "./entity/Cliente"

export default class ClsCliente {

  private conexao: Connection

  public constructor( conexao: Connection ) {
    this.conexao = conexao
  }

  public add ( cliente: Cliente ) {
    this.conexao.getRepository( Cliente ).save( cliente )
  }

  public procurar ( idCliente: number ): Promise<Cliente> {
    return this.conexao.getRepository( Cliente ).findOne( idCliente )
  }
  /*
  
    public calcularIdade ( dataNascimento: string ): number {
      let retorno: number = 0
  
      let data: moment.Moment = moment( dataNascimento, 'DD/MM/YYYY' )
      let hoje: moment.Moment = moment()
  
      retorno = hoje.diff( data, 'year' )
  
      return retorno
    }
  */
}