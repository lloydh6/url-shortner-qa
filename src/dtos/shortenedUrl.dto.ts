import { IsNotEmpty } from 'class-validator';

export class ShortenedUrlDto {
  @IsNotEmpty()
  shortenedUrl: string;
}
