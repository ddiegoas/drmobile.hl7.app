import HttpClient from '../http-client';

const searchPatients = async (params) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: '/patient',
        params
    });
};

const topPatients = async (params) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: '/patient/top',
        params
    });
};

const patientById = async (params) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: '/patient',
        params
    });
};

const PatientAppService = {
    searchPatients, patientById, topPatients
};

export default PatientAppService;