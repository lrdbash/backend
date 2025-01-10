import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CampaignModule } from './campaign/campaign.module.js';
import { SubmissionModule } from './submission/submission.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/default-db'),
    CampaignModule,
    SubmissionModule,
  ],
})
export class AppModule {}
