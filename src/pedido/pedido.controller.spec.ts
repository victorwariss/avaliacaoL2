import { Test, TestingModule } from '@nestjs/testing';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './pedido.service';

describe('PedidoController', () => {
  let controller: PedidoController;
  let service: PedidoService;

  const mockPedidosResponse = [
    {
      pedido_id: 1,
      caixas: [
        {
          caixa_id: 'Caixa 1',
          produtos: ['PS5', 'Volante'],
        },
      ],
    },
    {
      pedido_id: 2,
      caixas: [
        {
          caixa_id: null,
          produtos: ['Cadeira Gamer'],
          observacao: 'Produto não cabe em nenhuma caixa disponível.',
        },
      ],
    },
  ];

  const mockPedidoService = {
    empacotarPedidos: jest.fn().mockImplementation((pedidos) =>
      pedidos.map((pedido) => {
        if (pedido.pedido_id === 2) {
          return mockPedidosResponse[1];
        }
        return mockPedidosResponse[0];
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoController],
      providers: [
        {
          provide: PedidoService,
          useValue: mockPedidoService,
        },
      ],
    }).compile();

    controller = module.get<PedidoController>(PedidoController);
    service = module.get<PedidoService>(PedidoService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empacotamento dos pedidos', async () => {
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
            produto_id: 'Cadeira Gamer',
            dimensoes: { altura: 100, largura: 100, comprimento: 100 },
          },
        ],
      },
    ];

    const result = await controller.criarPedidos({ pedidos });

    expect(result).toEqual({ pedidos: mockPedidosResponse });
    expect(service.empacotarPedidos).toHaveBeenCalledWith(pedidos);
  });
});
