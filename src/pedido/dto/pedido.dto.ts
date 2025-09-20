import { ProdutoDto } from './produto.dto';

export class PedidoDto {
  pedido_id: number;
  produtos: ProdutoDto[];
}
