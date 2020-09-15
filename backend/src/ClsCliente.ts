import { Connection } from "typeorm"
import { Cliente } from "./entity/Cliente"

export default class ClsCliente {

  private conexao: Connection

  public constructor( conexao: Connection ) {
    console.log( 'Dentro do Construtor - Recebi a conexao....' )
    this.conexao = conexao
  }

  public addCliente ( cliente: Cliente ) {
    this.conexao.getRepository( Cliente ).save( cliente )
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