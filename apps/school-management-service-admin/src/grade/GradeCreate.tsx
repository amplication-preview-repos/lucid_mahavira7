import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ClassModelTitle } from "../classModel/ClassModelTitle";

export const GradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="classField.id"
          reference="ClassModel"
          label="class"
        >
          <SelectInput optionText={ClassModelTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="grade" source="grade" />
        <TextInput label="student" source="student" />
      </SimpleForm>
    </Create>
  );
};
