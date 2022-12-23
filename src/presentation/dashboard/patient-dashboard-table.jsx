import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridApi, GridCellValue, Record } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
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
    }, {
        field: "action",
        headerName: "#",
        sortable: false,
        flex: 1,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
            const onClick = (e) => {
                e.stopPropagation(); // don't select this row after clicking

                const api: GridApi = params.api;
                const thisRow: Record<string, GridCellValue> = {};

                api
                    .getAllColumns()
                    .filter((c) => c.field !== "__check__" && !!c)
                    .forEach(
                        (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                    );

                return alert(JSON.stringify(thisRow, null, 4));
            };

            return <Button onClick={onClick}>Selecionar</Button>;
        }
    }
];

export default function PatientDashboardTable({ topPatients }) {
    const [patientRequestResult, setPatientRequestResult] = useState({
        data: [],
        error: null,
    });

    useEffect(() => {
        (async () => {
            let result = await PatientAppService.topPatients({ top: topPatients });
            setPatientRequestResult(result);
        })();
    }, [topPatients]);

    return (
        <DataGrid sx={{ height: '500px' }}
            rows={patientRequestResult.data}
            rowCount={patientRequestResult.data.length}
            columns={columns}
            pageSize={topPatients}
            page={0}
            hideFooterPagination="true"
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
    );
}

