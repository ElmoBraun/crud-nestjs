import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  phone: string;

  @Prop()
  endereco: string;

  @Prop()
  bairro: string;

  @Prop()
  ponto_de_referencia: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
