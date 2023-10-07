import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cd } from "./Cd";

@Entity('cidades')
export class Cidade extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

  @OneToMany(() => Cd, (cd) => cd.cidade)
  public cds: Promise<Cd[]>;
}
