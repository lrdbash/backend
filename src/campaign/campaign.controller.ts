import { Controller, Get, Param, Query } from '@nestjs/common';
import { CampaignService } from './campaign.service.js';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  // GET /campaigns?influencerId=<id>
  @Get()
  async getCampaigns(@Query('influencerId') influencerId: string) {
    return this.campaignService.getCampaignsByInfluencer(influencerId);
  }

  // GET /campaigns/:id/performance
  @Get(':id/performance')
  async getPerformance(@Param('id') campaignId: string) {
    return this.campaignService.getPerformanceMetrics(campaignId);
  }
}
