/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClassModelUpdateManyWithoutCoursesInput } from "./ClassModelUpdateManyWithoutCoursesInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CourseUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ClassModelUpdateManyWithoutCoursesInput,
  })
  @ValidateNested()
  @Type(() => ClassModelUpdateManyWithoutCoursesInput)
  @IsOptional()
  @Field(() => ClassModelUpdateManyWithoutCoursesInput, {
    nullable: true,
  })
  classes?: ClassModelUpdateManyWithoutCoursesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  creditHours?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { CourseUpdateInput as CourseUpdateInput };
