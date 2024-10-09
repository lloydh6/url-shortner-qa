import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Status')
@Controller()
export class StatusController {
  @Get('/status')
  encode(): string {
    return 'Success';
  }
}
