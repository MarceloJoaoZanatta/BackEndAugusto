class ClsMatematica {

  public somar ( num1: number, num2: number ): number {
    return num1 + num2
  }

  public somarPromessa ( num1: number, num2: number ): Promise<number> {
    return new Promise( ( resolve, reject ) => {
      if ( num1 > 0 && num2 > 0 ) {
        resolve( num1 + num2 )
      } else {
        reject( null )
      }
    } )
  }

}

let clsMatematica: ClsMatematica = new ClsMatematica()

console.log( clsMatematica.somar( 10, 12 ) )

clsMatematica.somarPromessa( 22, -30 ).then( ( rs: number ) => {
  console.log( rs )
} ).catch( ( retornoErro: any ) => {
  console.log( retornoErro )
} )

