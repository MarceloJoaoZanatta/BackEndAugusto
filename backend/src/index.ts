
import "reflect-metadata";
import { createConnection } from "typeorm";
import ClsCliente from "./ClsCliente";

import * as moment from 'moment'; // ou import moment = require( "moment" )

createConnection().then( async connection => {

  let clsCliente: ClsCliente = new ClsCliente( connection )

  clsCliente.addCliente( {
    nome: 'Augusto XXXX LSADJFG DFLKG SDFGJLASD FJLKASD FLKSJDF LKSAJDFLKA SKFD ',
    dataNascimento: moment( '03/08/1994', 'DD/MM/YYYY' ).toDate(),
    sobrenome: 'César',
    idCliente: null
  } )

} )
