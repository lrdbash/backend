import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Submission } from './submission.schema.js';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectModel(Submission.name) private submissionModel: Model<Submission>,
  ) {}

  // Fetch submissions for a specific campaign
  async getSubmissionsByCampaign(campaignId: string): Promise<Submission[]> {
    return this.submissionModel.find({ campaignId }).exec();
  }

  // Approve or reject a submission
  async updateSubmissionStatus(submissionId: string, status: 'approved' | 'rejected') {
    const submission = await this.submissionModel.findById(submissionId).exec();
    if (!submission) {
      throw new Error('Submission not found');
    }
    submission.status = status;
    return submission.save();
  }
}
