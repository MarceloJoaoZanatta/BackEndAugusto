import { ClsAnimal } from "./ClsAnimal"

console.log( "Augutos" )

let x: ClsAnimal = new ClsAnimal()

x.setarNome( "Fleek" )

console.log( x.getNome() )

x.raca = 'Golden'

x.agregarNaRaca(' Retriever')

console.log( x.raca )
