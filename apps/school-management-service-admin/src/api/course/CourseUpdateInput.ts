import { ClassModelUpdateManyWithoutCoursesInput } from "./ClassModelUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  classes?: ClassModelUpdateManyWithoutCoursesInput;
  creditHours?: number | null;
  description?: string | null;
  name?: string | null;
};
