import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionController } from './submission.controller.js';
import { SubmissionService } from './submission.service.js';
import { Submission, SubmissionSchema } from './submission.schema.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: Submission.name, schema: SubmissionSchema }])],
  controllers: [SubmissionController],
  providers: [SubmissionService],
})
export class SubmissionModule {}
