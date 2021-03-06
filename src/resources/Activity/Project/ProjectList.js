import React from 'react';
import { Datagrid, TextField, EditButton, ShowButton } from 'react-admin';
import { MultiViewsList } from '@semapps/archipelago-layout';
import { MapList } from '@semapps/geo-components';
import ProjectFilterSidebar from "./ProjectFilterSidebar";
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';

const ProjectList = props => (
  <MultiViewsList
    views={{
      map: {
        label: 'Carte',
        icon: MapIcon,
        perPage: 1000,
        pagination: false,
        list:
          <MapList
            latitude={record => record.location && record.location.latitude }
            longitude={record => record.location && record.location.longitude }
            label={record => record['pair:label']}
            description={record => record['pair:description']}
            scrollWheelZoom
          />
      },
      list: {
        label: 'Liste',
        icon: ListIcon,
        sort: { field: 'pair:label', order: 'DESC' },
        perPage: 25,
        list:
          <Datagrid rowClick="show">
            <TextField source="pair:label" />
            <ShowButton basePath="/Project" />
            <EditButton basePath="/Project" />
          </Datagrid>
      }
    }}
    aside={<ProjectFilterSidebar />}
    {...props}
  />
);

export default ProjectList;
