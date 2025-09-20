import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from './produto.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Produto, (produto) => produto.pedido, {
    cascade: true,
    eager: true,
  })
  produtos: Produto[];
}
