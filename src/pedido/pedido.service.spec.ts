import { Test, TestingModule } from '@nestjs/testing';
import { PedidoService } from './pedido.service';

describe('PedidoService', () => {
  let service: PedidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoService],
    }).compile();

    service = module.get<PedidoService>(PedidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should empacotar pedidos corretamente', async () => {
    const pedidos = [
      {
        pedido_id: 1,
        produtos: [
          {
            produto_id: 'PS5',
            dimensoes: { altura: 40, largura: 10, comprimento: 25 },
          },
          {
            produto_id: 'Volante',
            dimensoes: { altura: 40, largura: 30, comprimento: 30 },
          },
        ],
      },
      {
        pedido_id: 2,
        produtos: [
          {
            produto_id: 'Joystick',
            dimensoes: { altura: 15, largura: 20, comprimento: 10 },
          },
          {
            produto_id: 'Fifa 24',
            dimensoes: { altura: 10, largura: 30, comprimento: 10 },
          },
          {
            produto_id: 'Call of Duty',
            dimensoes: { altura: 30, largura: 15, comprimento: 10 },
          },
        ],
      },
    ];

    const result = await service.empacotarPedidos(pedidos);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          pedido_id: 1,
          caixas: expect.any(Array),
        }),
        expect.objectContaining({
          pedido_id: 2,
          caixas: expect.any(Array),
        }),
      ]),
    );
  });
});
