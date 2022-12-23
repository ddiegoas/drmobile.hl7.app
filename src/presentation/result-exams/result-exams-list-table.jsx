import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridApi, GridCellValue, Record } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ExamResultAppService from '../../application/services/patient/exam-result-app-service';
import moment from 'moment';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', hide: true, width: 120, editable: false },
    {
        field: 'date',
        headerName: 'Data',
        flex: 1,
        editable: false,
        valueFormatter: params => moment(params?.value).format("DD/MM/YYYY HH:mm:ss"),
    },
    { field: 'location', headerName: 'Unid. Int.', flex: 1 },
    { field: 'name', headerName: 'Exame', flex: 1 },
    { field: 'value', headerName: 'Valor', flex: 1 },
    { field: 'referenceRange', headerName: 'Referência', flex: 1 }

];

export default function ResultExamsListTable({ changeSearchParameters, changeLoading, searchExamParams }) {
    const [examRequestResult, setExamRequestResult] = useState({
        data: {
            items: [],
            totalItems: 0,
        },
        error: null,
    });

    useEffect(() => {
        (async () => {
            changeLoading(true);
            let result = await ExamResultAppService.searchExamResults(searchExamParams);
            setExamRequestResult(result);
            changeLoading(false);
        })();
    }, [searchExamParams]);

    return (
        <DataGrid sx={{ height: '400px' }}
            rows={examRequestResult.data.items}
            rowCount={examRequestResult.data.totalItems}
            columns={columns}
            pageSize={searchExamParams.pageSize}
            page={searchExamParams.page}
            paginationMode="server"
            onPageChange={(page) => {
                changeSearchParameters(searchExamParams.term, page);
            }}
            rowsPerPageOptions={[searchExamParams.pageSize]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
    );
}

