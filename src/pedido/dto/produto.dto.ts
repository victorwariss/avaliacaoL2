import { ApiProperty } from '@nestjs/swagger';
import { DimensoesDto } from './dimensoes.dto';

export class ProdutoDto {
  @ApiProperty({
    example: 'PS5',
    description: 'Identificador único do produto',
  })
  produto_id: string;

  @ApiProperty({ type: DimensoesDto, description: 'Dimensões do produto' })
  dimensoes: DimensoesDto;
}
