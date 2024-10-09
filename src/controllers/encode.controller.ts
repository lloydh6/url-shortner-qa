import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ShortenedUrlDto } from '../dtos/shortenedUrl.dto';
import { UrlDto } from '../dtos/url.dto';
import { UrlService } from '../services/url/url.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Encode')
@Controller()
export class EncodeController {
  constructor(private urlService: UrlService) {}

  @Post('/encode')
  encode(@Body() urlDto: UrlDto): ShortenedUrlDto {
    if (urlDto == null) {
      throw new BadRequestException('No URL provided');
    }

    if (urlDto.url == '') {
      throw new BadRequestException('No URL provided');
    }

    const shortenedUrl = this.urlService.createShortenedUrl(urlDto.url);

    return {
      shortenedUrl: shortenedUrl,
    };
  }
}
