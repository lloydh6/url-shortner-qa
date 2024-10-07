import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Redirect,
} from '@nestjs/common';
import { UrlService } from '../services/url/url.service';

@Controller('')
export class FollowController {
  constructor(private urlService: UrlService) {}

  @Get('/:id')
  @Redirect()
  follow(@Param('id') id: string) {
    if (id == null) {
      throw new BadRequestException('No URL id provided');
    }

    const originalUrl = this.urlService.getOriginalUrlFromId(id);

    if (!originalUrl) {
      throw new NotFoundException('No URL found');
    }

    return {
      url: originalUrl,
    };
  }
}
