import React, { Component } from 'react';
import BaseLayout from '../components/base-layout';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import SensorsIcon from '@mui/icons-material/Sensors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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



class Dashboard extends Component {
    render(props) {
        return (
            <BaseLayout>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <Card
                            sx={{ height: '100%' }}
                            {...props}
                        >
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{ justifyContent: 'space-between' }}
                                >
                                    <Grid item>
                                        <Typography
                                            color="textSecondary"
                                            gutterBottom
                                            variant="overline"
                                        >
                                            PACIENTES
                                        </Typography>
                                        <Typography
                                            color="textPrimary"
                                            variant="h4"
                                        >
                                            20k
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            sx={{
                                                backgroundColor: 'success.main',
                                                height: 56,
                                                width: 56
                                            }}
                                        >
                                            <MedicalServicesIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                <Box
                                    sx={{
                                        pt: 2,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ArrowDownwardIcon color="error" />
                                    <Typography
                                        color="error"
                                        sx={{
                                            mr: 1
                                        }}
                                        variant="body2"
                                    >
                                        12%
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="caption"
                                    >
                                        que o último mês
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <Card
                            sx={{ height: '100%' }}
                            {...props}
                        >
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{ justifyContent: 'space-between' }}
                                >
                                    <Grid item>
                                        <Typography
                                            color="textSecondary"
                                            gutterBottom
                                            variant="overline"
                                        >
                                            SINAIS VITAIS
                                        </Typography>
                                        <Typography
                                            color="textPrimary"
                                            variant="h4"
                                        >
                                            100k
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            sx={{
                                                backgroundColor: 'info.main',
                                                height: 56,
                                                width: 56
                                            }}
                                        >
                                            <SensorsIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                                <Box
                                    sx={{
                                        pt: 2,
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ArrowUpwardIcon color="success" />
                                    <Typography
                                        color="success"
                                        sx={{
                                            mr: 1
                                        }}
                                        variant="body2"
                                    >
                                        5%
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="caption"
                                    >
                                        que o último mês
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <Card
                            sx={{ height: '100%' }}
                            {...props}
                        >
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{ justifyContent: 'space-between' }}
                                >
                                    <Grid item>
                                        <Typography
                                            color="textSecondary"
                                            gutterBottom
                                            variant="overline"
                                        >
                                            UNIDADE DE INTERNAÇÕES
                                        </Typography>
                                        <Typography
                                            color="textPrimary"
                                            variant="h4"
                                        >
                                            15
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            sx={{
                                                backgroundColor: 'warning.main',
                                                height: 56,
                                                width: 56
                                            }}
                                        >
                                            <ApartmentIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <Card
                            sx={{ height: '100%' }}
                            {...props}
                        >
                            <CardContent>
                                <Grid
                                    container
                                    spacing={3}
                                    sx={{ justifyContent: 'space-between' }}
                                >
                                    <Grid item>
                                        <Typography
                                            color="textSecondary"
                                            gutterBottom
                                            variant="overline"
                                        >
                                            EXAMES
                                        </Typography>
                                        <Typography
                                            color="textPrimary"
                                            variant="h4"
                                        >
                                            10
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Avatar
                                            sx={{
                                                backgroundColor: 'error.main',
                                                height: 56,
                                                width: 56
                                            }}
                                        >
                                            <BloodtypeIcon />
                                        </Avatar>
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        lg={12}
                        sm={12}
                        xl={12}
                        xs={12}
                    >   <Card
              
                        {...props}
                    >
                            <CardContent   sx={{ height: '500px'}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Últimos Pacientes
                                </Typography>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                    disableSelectionOnClick
                                    experimentalFeatures={{ newEditingApi: true }}
                                />
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
            </BaseLayout>
        )
    }
}

export default Dashboard;