import React from 'react';
import { List, Datagrid, TextField, ShowButton } from 'react-admin';

const PersonList = props => (
  <List perPage={25} {...props}>
    <Datagrid rowClick="show">
      <TextField source="name" />
      <TextField source="preferredUsername" />
      <ShowButton basePath="/Person" />
    </Datagrid>
  </List>
);

export default PersonList;
