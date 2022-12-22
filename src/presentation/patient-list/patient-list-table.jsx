import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import PatientAppService from '../../application/services/patient/patient-app-service';
import moment from 'moment';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', hide: true, width: 120, editable: false },
    { field: 'externalId', headerName: 'Nº Atendimento', flex: 1 },
    {
        field: 'fullName',
        headerName: 'Nome',
        editable: false,
        sortable: true, flex: 4,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.givenName || ''} ${params.row.familyName || ''}`,
    },
    {
        field: 'bithDate',
        headerName: 'Data de Nascimento',
        flex: 1,
        editable: false,
        valueFormatter: params => moment(params?.value).format("DD/MM/YYYY"),
    },
    {
        field: 'age',
        headerName: 'Idade',
        type: 'number',
        flex: 1,
        editable: false,
    },
];

export default function PatientListTable({ changeSearchParameters, changeLoading, searchPatientParams }) {
    const [patientRequestResult, setPatientRequestResult] = useState({
        data: {
            items: [],
            totalItems: 0,
        },
        error: null,
    });

    useEffect(() => {
        (async () => {
            changeLoading(true);
            let result = await PatientAppService.searchPatients(searchPatientParams);
            setPatientRequestResult(result);
            changeLoading(false);
        })();
    }, [searchPatientParams]);

    return (
        <DataGrid sx={{ height: '700px' }}
            rows={patientRequestResult.data.items}
            rowCount={patientRequestResult.data.totalItems}
            columns={columns}
            pageSize={searchPatientParams.pageSize}
            page={searchPatientParams.page}
            paginationMode="server"
            onPageChange={(page) => {
                changeSearchParameters(searchPatientParams.term, page);
            }}
            rowsPerPageOptions={[searchPatientParams.pageSize]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
    );
}

