import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Pedido } from './entities/pedido.entity';
import { Produto } from './entities/produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Produto])],
  providers: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
