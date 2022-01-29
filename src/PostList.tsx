import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Create, DateTimeInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PostCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="teaser" options={{multiline: true}} />
            <RichTextInput source="body" />
            <DateTimeInput label="入店時刻" source="published_at" defaultValue={new Date()} disabled />
        </SimpleForm>
    </Create>
);

export const PostList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const PostEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);