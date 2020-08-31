export class ClsAnimal {

  private tmp_raca: string = ''
  private tmp_nome: string = ''

  // Errado
  public setarNome ( nome: string ): void {
    this.tmp_nome = nome
  }

  // Errado
  public getNome (): string {
    return this.tmp_nome
  }

  // Correto
  public set raca ( novaRaca: string ) {
    this.tmp_raca = novaRaca
  }

  // Correto
  public get raca (): string {
    return this.tmp_raca
  }

  // Correto
  public agregarNaRaca ( oque: string ): void {
    this.tmp_raca = this.tmp_raca.concat( oque )
  }

}