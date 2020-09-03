
export interface animalTypeInterface {
  raca: string
  nome: string
  idade: number
  cidade: string
}

export class ClsAnimal {

  private animais: Array<animalTypeInterface> = []
  private donos: Array<string> = []

  public add ( animal: animalTypeInterface ) {
    this.animais.push( animal )
  }

  public addDono ( nome: string ) {
    this.donos.push( nome )
  }

  public donosDeAnimais (): Array<string> {
    return this.donos
  }

  public animaisCadastrados (): Array<animalTypeInterface> {
    return this.animais
  }

  public ordenarDonos (): void {
    this.donos = this.donos.sort()
  }

  public ordenarAnimais (): void {
    this.animais = this.animais.sort( ( p1: animalTypeInterface, p2: animalTypeInterface ) => {

      let retorno: number = 0

      /*
      if ( p1.idade > p2.idade ) {
        retorno = 1
      } else if ( p1.idade < p2.idade ) {
        retorno = -1
      }
      */

      if ( p1.nome > p2.nome ) {
        retorno = 1
      } else if ( p1.nome < p2.nome ) {
        retorno = -1
      }

      return retorno

    } )
  }

}