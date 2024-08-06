import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const AttendanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <BooleanInput label="status" source="status" />
        <TextInput label="student" source="student" />
      </SimpleForm>
    </Create>
  );
};
