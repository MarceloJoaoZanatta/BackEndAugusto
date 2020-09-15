import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Cliente {

  @PrimaryGeneratedColumn()
  idCliente: number;

  @Column( { length: 30 } )
  nome: String;

  @Column( { length: 30 } )
  sobrenome: String;

  @Column()
  dataNascimento: Date;

}

