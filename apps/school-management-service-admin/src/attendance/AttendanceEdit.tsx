import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const AttendanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <BooleanInput label="status" source="status" />
        <TextInput label="student" source="student" />
      </SimpleForm>
    </Edit>
  );
};
