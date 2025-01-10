import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Submission extends Document {
  @Prop({ required: true })
  influencerId: string = ''; // Default value to ensure initialization

  @Prop({ required: true })
  campaignId: string = ''; // Default value to ensure initialization

  @Prop({ required: true })
  contentUrl: string = ''; // Default value to ensure initialization

  @Prop({ default: 'pending' })
  status: 'pending' | 'approved' | 'rejected' = 'pending'; // Default value to ensure initialization
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
