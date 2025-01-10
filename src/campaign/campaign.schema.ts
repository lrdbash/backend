import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Campaign extends Document {
  @Prop({ required: true })
  title: string = ''; // Default value to ensure initialization

  @Prop({ required: true })
  deadline: Date = new Date(); // Default value to ensure initialization

  @Prop({ default: [] })
  influencers: string[] = []; // Default value to ensure initialization
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
