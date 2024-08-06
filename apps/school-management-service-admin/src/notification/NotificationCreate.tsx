import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <BooleanInput label="isRead" source="isRead" />
        <TextInput label="recipient" source="recipient" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
