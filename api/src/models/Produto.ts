import { BaseEntity, Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./Categoria";


@Entity('produto')
export class Produto extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

  @Column()
  public categoria_id: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
  @JoinColumn({ name: 'categoria_id' })
  public categoria: Promise<Categoria>;
}