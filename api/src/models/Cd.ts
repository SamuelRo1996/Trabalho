import { BaseEntity, Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./Cidade";


@Entity('cds')
export class Cd extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

  @Column()
  public cidade_id: number;

  @ManyToOne(() => Cidade, (cidade) => cidade.cds)
  @JoinColumn({ name: 'cidade_id' })
  public cidade: Promise<Cidade>;
}
