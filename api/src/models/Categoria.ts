import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./Produto";

@Entity('categorias')
export class Categoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public nome: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  public produtos: Promise<Produto[]>;
}
