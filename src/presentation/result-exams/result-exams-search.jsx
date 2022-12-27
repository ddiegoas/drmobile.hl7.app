import React, { useState, useEffect } from 'react';
import BaseLayout from '../../components/base-layout';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Divider, Backdrop, CircularProgress } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ResultExamsListTable from './result-exams-list-table';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ExamResultAppService from '../../application/services/examResults/exam-result-app-service';
import PatientAppService from '../../application/services/patient/patient-app-service';
import moment from 'moment';
import { useParams } from 'react-router-dom';


export default function ResultExamsSearch(props: any) {
    const [patientLocations, setPatientLocations] = useState({
        data: [],
        error: null,
    });
    const [exams, setExams] = useState({
        data: [],
        error: null,
    });
    const [patient, setPatient] = useState({});
    const [loading, setLoading] = useState(false);
    const [searchExamParams, setSearchExamParams] = useState({
        patientId: useParams().patientId,
        locationId: null,
        examId: null,
        startDate: moment().add(-6, 'M').format("YYYY-MM-DD"),
        endDate: moment().format("YYYY-MM-DD"),
        startDatePicker: moment().add(-6, 'M'),
        endDatePicker: moment(),
        page: 0,
        pageSize: 50,
    });

    useEffect(() => {
        (async () => {

            let patientLocations = await ExamResultAppService.findPatientLocation(searchExamParams.patientId);
            setPatientLocations(patientLocations);

            let patient = await PatientAppService.patientById(searchExamParams.patientId);

            setPatient(patient);
        })();
    }, []);

    const changeLoading = (loading = false) => {
        setLoading(loading);
    };

    const changeSearchParameters = ({ locationId = searchExamParams.locationId, examId = searchExamParams.examId, patientId = searchExamParams.patientId, startDatePicker = searchExamParams.startDatePicker, endDatePicker = searchExamParams.endDatePicker, page = searchExamParams.Page, pageSize = searchExamParams.pageSize }) => {

        setSearchExamParams({
            ...searchExamParams,

            examId: examId,
            patientId: patientId,
            locationId: locationId,
            startDate: startDatePicker.format("YYYY-MM-DD"),
            endDate: endDatePicker.format("YYYY-MM-DD"),
            page: page,
            pageSize: pageSize,
            startDatePicker: startDatePicker,
            endDatePicker: endDatePicker,
        });

    };

    const handleOnChange = (e) => {


        if (e.target.name === "location-select") {
            (async () => {
                if (e.target.value != null) {
                    let result = await ExamResultAppService.findExamsPatientLocation(searchExamParams.patientId, e.target.value);
                    setExams(result);
                } else {
                    setExams({
                        data: [],
                        error: null,
                    });
                }
            })();
            changeSearchParameters({ locationId: e.target.value });
        } else if (e.target.name === "exam-select") {
            changeSearchParameters({ examId: e.target.value });
        }
    };

    return (
        <BaseLayout>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Grid
                    container={true}
                >
                    <Grid
                        item
                        lg={12}
                        sm={12}
                        xl={12}
                        sx={{ backgroundColor: 'white', p: 2 }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            Informações do Paciente
                        </Typography>
                        <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                        <Card lg={12}>

                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {patient.data?.givenName} {patient.data?.familyName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Grid
                                        container={true}
                                    >          <Grid
                                        item
                                        lg={12}
                                        sm={12}
                                        xl={12}
                                    >
                                            <strong>Nº Atendimento: </strong>{patient.data?.externalId}
                                        </Grid>
                                        <Grid
                                            item
                                            lg={12}
                                            sm={12}
                                            xl={12}
                                        >
                                            <strong>Data de Nascimento: </strong>{moment(patient.data?.bithDate).format("DD/MM/YYYY")}
                                        </Grid>
                                        <Grid
                                            item
                                            lg={12}
                                            sm={12}
                                            xl={12}
                                        >
                                            <strong>Idade: </strong>{patient.data?.age}
                                        </Grid>

                                    </Grid>
                                </Typography>
                                <Typography gutterBottom variant="h6" sx={{ mt: 2 }} component="div">
                                    Sinais Vitais
                                </Typography>
                                <Divider sx={{ mt: 1, mb: 1 }}></Divider>
                                <Grid
                                    container={true}
                                    spacing={3}
                                    sx={{ mb: 1 }}
                                >
                                    <Grid
                                        item
                                        lg={4}
                                        sm={4}
                                        xl={4}
                                    >
                                        <FormControl sx={{ width: "100%" }}>
                                            <InputLabel>Unidate de Internação</InputLabel>
                                            <Select
                                                id="location-select"
                                                value={searchExamParams.locationId}
                                                defaultValue={searchExamParams.locationId}
                                                onInputChange={handleOnChange}
                                                onChange={handleOnChange}
                                                name="location-select"
                                                label="Unidade de Internação"
                                            >
                                                <MenuItem value={null}>
                                                    <em>Nenhum</em>
                                                </MenuItem>
                                                {patientLocations.data.map((value) => (
                                                    <MenuItem value={value.id} key={value.id}>
                                                        {value.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid
                                        item
                                        lg={4}
                                        sm={4}
                                        xl={4}
                                    >
                                        <FormControl sx={{ width: "100%" }}>
                                            <InputLabel>Exame</InputLabel>
                                            <Select
                                                id="exam-select"
                                                value={searchExamParams.examId}
                                                defaultValue={searchExamParams.examId}
                                                onChange={handleOnChange}
                                                name="exam-select"
                                                label="Exame"
                                            >
                                                <MenuItem value={null}>
                                                    <em>Nenhum</em>
                                                </MenuItem>
                                                {exams.data.map((value) => (
                                                    <MenuItem value={value.id} key={value.id}>
                                                        {value.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>

                                    </Grid>
                                    <Grid
                                        item
                                        lg={2}
                                        sm={2}
                                        xl={2}
                                    >
                                        <FormControl sx={{ width: "100%" }}>


                                            <DesktopDatePicker
                                                label="Data Inicial"
                                                inputFormat="DD/MM/YYYY"
                                                id="start-date-datepicker"
                                                name="start-date-datepicker"
                                                onChange={(newValue) => {
                                                    changeSearchParameters({ startDatePicker: newValue });
                                                }}
                                                value={searchExamParams.startDatePicker}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={2}
                                        sm={2}
                                        xl={2}
                                    >
                                        <FormControl sx={{ width: "100%" }}>
                                            <DesktopDatePicker
                                                label="Data Final"
                                                inputFormat="DD/MM/YYYY"
                                                id="end-date-datepicker"
                                                name="end-date-datepicker"
                                                minDate={searchExamParams.startDatePicker}
                                                maxDate={moment()}
                                                onChange={(newValue) => {
                                                    changeSearchParameters({ endDatePicker: newValue });
                                                }}
                                                value={searchExamParams.endDatePicker}
                                                renderInput={(params) => <TextField {...params} />}
                                            />
                                        </FormControl>
                                    </Grid>


                                </Grid>
                                <ResultExamsListTable changeSearchParameters={changeSearchParameters} changeLoading={changeLoading} searchExamParams={searchExamParams}></ResultExamsListTable>
                            </CardContent>
                        </Card>

                    </Grid>
                </Grid>
            </LocalizationProvider>
        </BaseLayout >
    );
}

