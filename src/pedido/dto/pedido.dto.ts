import { ApiProperty } from '@nestjs/swagger';
import { ProdutoDto } from './produto.dto';

export class PedidoDto {
  @ApiProperty({ example: 1, description: 'Identificador único do pedido' })
  pedido_id: number;

  @ApiProperty({
    type: [ProdutoDto],
    description: 'Lista de produtos do pedido',
  })
  produtos: ProdutoDto[];
}
