import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  produto_id: string;

  @Column()
  altura: number;

  @Column()
  largura: number;

  @Column()
  comprimento: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.produtos, { onDelete: 'CASCADE' })
  pedido: Pedido;
}
