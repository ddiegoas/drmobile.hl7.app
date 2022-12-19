import React, { Component } from 'react';
import BaseLayout from '../components/base-layout';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import MoneyIcon from '@mui/icons-material/Money';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import PersonIcon from '@mui/icons-material/Person';
import SensorsIcon from '@mui/icons-material/Sensors';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';



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
                                            <PersonIcon />
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
                                            <SensorsIcon  />
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
                                                backgroundColor: 'error.main',
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
                                                backgroundColor: 'warning.main',
                                                height: 56,
                                                width: 56
                                            }}
                                        >
                                            <BloodtypeIcon   />
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
                        sx={{ height: '100%' }}
                        {...props}
                    >
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Últimos Pacientes
                                </Typography>
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
            </BaseLayout>
        )
    }
}

export default Dashboard;