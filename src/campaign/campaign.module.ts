import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CampaignController } from './campaign.controller.js';
import { CampaignService } from './campaign.service.js';
import { Campaign, CampaignSchema } from './campaign.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }])],
  controllers: [CampaignController],
  providers: [CampaignService],
})
export class CampaignModule {}
