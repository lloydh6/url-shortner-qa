import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ShortenedUrlDto } from '../dtos/shortenedUrl.dto';
import { UrlDto } from '../dtos/url.dto';
import { UrlService } from '../services/url/url.service';

@Controller()
export class DecodeController {
  constructor(private urlService: UrlService) {}

  @Post('/decode')
  decode(@Body() shortenedUrlDto: ShortenedUrlDto): UrlDto {
    const originalUrl = this.urlService.getOriginalUrl(
      shortenedUrlDto.shortenedUrl,
    );

    if (!originalUrl) {
      throw new BadRequestException('No URL found');
    }

    return {
      url: originalUrl,
    };
  }
}
