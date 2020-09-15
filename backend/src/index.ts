
import "reflect-metadata";
import { createConnection } from "typeorm";
import ClsCliente from "./ClsCliente";

createConnection().then( async connection => {

  let clsCliente: ClsCliente = new ClsCliente( connection )

  /*
  clsCliente.add( {
    nome: 'Augusto',
    dataNascimento: moment( '03/08/1994', 'DD/MM/YYYY' ).toDate(),
    sobrenome: 'César',
    idCliente: null
  } )
  */

  clsCliente.procurar( 2 ).then( rs => {
    if ( rs ) {
      // Se existir o cliente
      console.log( 'Nome do Cliente: ', rs.nome )

    } else {

      // Se não existir o cliente
      console.log( 'Cliente Inexistente.....' )

    }
  } )

} ).catch( err => {

  // Trato Erro
  console.log( 'Erro Geral do Conexão....' )
  console.log( err )

} )
