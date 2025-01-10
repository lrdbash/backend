import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from './campaign.schema.js';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name) private campaignModel: Model<Campaign>,
  ) {}

  // Fetch campaigns an influencer has joined
  async getCampaignsByInfluencer(influencerId: string): Promise<Campaign[]> {
    return this.campaignModel.find({ influencers: influencerId }).exec();
  }

  // Fetch campaign performance metrics
  async getPerformanceMetrics(campaignId: string) {
    const campaign = await this.campaignModel.findById(campaignId).exec();
    if (!campaign) {
      throw new Error('Campaign not found');
    }
    // Mock performance data
    return {
      totalPosts: 10,
      submissionDates: ['2025-01-01', '2025-01-05'],
      engagement: { likes: 500, shares: 50 },
    };
  }
}
