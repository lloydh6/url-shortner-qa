import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ShortenedUrlDto {
  @IsNotEmpty()
  @ApiProperty()
  shortenedUrl: string;
}
