import { Injectable } from '@nestjs/common';
import { PedidoDto } from './dto/pedido.dto';

@Injectable()
export class PedidoService {
  private caixas = [
    { caixa_id: 'Caixa 1', dimensoes: [30, 40, 80] },
    { caixa_id: 'Caixa 2', dimensoes: [50, 50, 40] },
    { caixa_id: 'Caixa 3', dimensoes: [50, 80, 60] },
  ];

  private cabeNaCaixa(produto, caixaDimensoes): boolean {
    const pDims = [
      produto.dimensoes.altura,
      produto.dimensoes.largura,
      produto.dimensoes.comprimento,
    ].sort((a, b) => a - b);
    const cDims = [...caixaDimensoes].sort((a, b) => a - b);
    return pDims.every((d, i) => d <= cDims[i]);
  }

  async empacotarPedidos(pedidos: PedidoDto[]) {
    // Processar cada pedido individualmente
    return pedidos.map((pedido) => {
      const produtos = pedido.produtos;

      for (const caixa of this.caixas) {
        const todosCabem = produtos.every((prod) =>
          this.cabeNaCaixa(prod, caixa.dimensoes),
        );
        if (todosCabem) {
          return {
            pedido_id: pedido.pedido_id,
            caixas: [
              {
                caixa_id: caixa.caixa_id,
                produtos: produtos.map((p) => p.produto_id),
              },
            ],
          };
        }
      }

      return {
        pedido_id: pedido.pedido_id,
        caixas: [
          {
            caixa_id: null,
            produtos: produtos.map((p) => p.produto_id),
            observacao: 'Produto não cabe em nenhuma caixa disponível.',
          },
        ],
      };
    });
  }
}
