import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  id: number;

  @Field()
  userName: string;

  @Field()
  email?: string;

  @Field()
  password: string;
}
