import { ClassModelCreateNestedManyWithoutCoursesInput } from "./ClassModelCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutCoursesInput;
  creditHours?: number | null;
  description?: string | null;
  name?: string | null;
};
