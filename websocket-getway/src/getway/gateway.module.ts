import { Module } from '@nestjs/common';
import { MyGateway } from './getway';

@Module({
  providers: [MyGateway],
})
export class GatewayModule {}
