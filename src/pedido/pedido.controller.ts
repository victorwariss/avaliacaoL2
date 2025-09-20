import { Body, Controller, Post } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidosDto } from './dto/pedidos.dto';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async criarPedidos(@Body() pedidosDto: PedidosDto) {
    const resultado = await this.pedidoService.empacotarPedidos(
      pedidosDto.pedidos,
    );
    return { pedidos: resultado }; // Aqui encapsula o array dentro do objeto { pedidos: [...] }
  }
}
