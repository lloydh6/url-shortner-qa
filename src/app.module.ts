import { Module } from '@nestjs/common';
import { DecodeController } from './controllers/decode.controller';
import { EncodeController } from './controllers/encode.controller';
import { StatusController } from './controllers/status.controller';
import { UrlService } from './services/url/url.service';
import { FollowController } from './controllers/follow.controller';

@Module({
  imports: [],
  controllers: [
    EncodeController,
    DecodeController,
    StatusController,
    FollowController,
  ],
  providers: [UrlService],
})
export class AppModule {}
