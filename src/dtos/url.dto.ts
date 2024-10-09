import { IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UrlDto {
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  url: string;
}
