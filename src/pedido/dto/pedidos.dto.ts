import { ApiProperty } from '@nestjs/swagger';
import { PedidoDto } from './pedido.dto';

export class PedidosDto {
  @ApiProperty({ type: [PedidoDto], description: 'Lista de pedidos' })
  pedidos: PedidoDto[];
}
