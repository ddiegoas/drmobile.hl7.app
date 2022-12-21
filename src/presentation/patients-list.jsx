import React, { Component } from 'react';
import BaseLayout from '../components/base-layout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Divider } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



class PatientsList extends Component {
    render(props) {
        return (
            <BaseLayout>
                <Grid
                    container
                >
                    <Grid
                        item
                        lg={12}
                        sm={12}
                        xl={12}
                        xs={12} sx={{ backgroundColor: 'white', p: 2 }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            Pacientes
                        </Typography>
                        <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                        <Grid
                            container
                            spacing={3}
                        >   <Grid
                            item
                            lg={12}
                            sm={12}
                            xl={12}
                            xs={12} sx={{ mb: 1 }}
                        >
                                <OutlinedInput
                                    sx={{ flex: 1, width: '100%' }}
                                    placeholder="Peqsuise aqui o nome do paciente"
                                    inputProps={{ 'aria-label': 'Peqsuise aqui o nome do paciente' }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                            >     <SearchIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                            </Grid>
                        </Grid>
                        <DataGrid sx={{ height: '700px' }}
                            rows={rows}
                            columns={columns}
                            pageSize={20}
                            rowsPerPageOptions={[10]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Grid>
                </Grid>
            </BaseLayout>
        )
    }
}

export default PatientsList;