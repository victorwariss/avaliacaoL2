import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PedidoService } from './pedido.service';
import { PedidosDto } from './dto/pedidos.dto';

@ApiTags('pedido')
@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  @ApiOperation({ summary: 'Empacota um ou mais pedidos' })
  @ApiResponse({
    status: 201,
    description: 'Pedidos empacotados retornados com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async criarPedidos(@Body() pedidosDto: PedidosDto) {
    const resultado = await this.pedidoService.empacotarPedidos(
      pedidosDto.pedidos,
    );
    return { pedidos: resultado };
  }
}
