import { ClsAnimal } from "./ClsAnimal"

let clsAnimal: ClsAnimal = new ClsAnimal()

clsAnimal.add( {
  idade: 10,
  nome: 'Sophie',
  raca: 'Golden',
  cidade: 'Divinopolis'
} )

clsAnimal.add( {
  idade: 5,
  nome: 'Pestia',
  raca: 'Vira Lata',
  cidade: 'Divinopolis'
} )

clsAnimal.addDono( 'Zanatta' )
clsAnimal.addDono( 'Augusto' )

clsAnimal.ordenarDonos()
clsAnimal.ordenarAnimais()

console.log( "Donos dos animais" )
console.log( "=================" )
console.log( clsAnimal.donosDeAnimais() )

console.log( "\n\n\n\n" )
console.log( "Animais Cadastrados" )
console.log( "===================" )
console.log( clsAnimal.animaisCadastrados() )