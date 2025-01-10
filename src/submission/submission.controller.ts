import { Controller, Get, Query, Param, Patch, Body } from '@nestjs/common';
import { SubmissionService } from './submission.service.js';

@Controller('submissions')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  // GET /submissions?campaignId=<id>
  @Get()
  async getSubmissions(@Query('campaignId') campaignId: string) {
    return this.submissionService.getSubmissionsByCampaign(campaignId);
  }

  // PATCH /submissions/:id
  @Patch(':id')
  async updateStatus(
    @Param('id') submissionId: string,
    @Body('status') status: 'approved' | 'rejected',
  ) {
    return this.submissionService.updateSubmissionStatus(submissionId, status);
  }
}
