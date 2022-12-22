import React, { useState, useEffect, useRef } from 'react';
import BaseLayout from '../../components/base-layout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Divider, Backdrop, CircularProgress } from '@mui/material';
import PatientListTable from './patient-list-table';
import ClearIcon from '@mui/icons-material/Clear';

export default function PatientSearch(props: any) {
    const [term, setTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchPatientParams, setSearchPatientParams] = useState({
        term: '',
        page: 0,
        pageSize: 100,

    });

    const changeLoading = (loading = false) => {
        console.log(loading);
        setLoading(loading);

    };
    const changeSearchParameters = (term, page = searchPatientParams.Page, pageSize = searchPatientParams.pageSize) => {
        setTerm(term);
        setSearchPatientParams({
            ...searchPatientParams,
            page: page,
            term: term,
            pageSize: pageSize
        });

    };

    const handleOnChange = (e) => {
        setTerm(e.target.value);

    };
    return (
        <BaseLayout>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid
                container
            >
                <Grid
                    item
                    lg={12}
                    sm={12}
                    xl={12}
                    sx={{ backgroundColor: 'white', p: 2 }}
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
                        sx={{ mb: 1 }}
                    >
                            <OutlinedInput
                                sx={{ flex: 1, width: '100%' }}
                                onChange={handleOnChange}
                                placeholder="Peqsuise aqui o nome do paciente"
                                value={term}
                                inputProps={{ 'aria-label': 'Peqsuise aqui o nome do paciente' }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => {
                                                changeSearchParameters("");
                                            }}
                                        >     <ClearIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => {
                                                changeSearchParameters(term);
                                            }}
                                        >     <SearchIcon />
                                        </IconButton>

                                    </InputAdornment>

                                }
                            />

                        </Grid>
                    </Grid>
                    <PatientListTable changeSearchParameters={changeSearchParameters} changeLoading={changeLoading} searchPatientParams={searchPatientParams}></PatientListTable>
                </Grid>
            </Grid>

        </BaseLayout>
    );
}

