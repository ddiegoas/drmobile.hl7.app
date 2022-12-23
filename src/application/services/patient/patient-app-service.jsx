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

const patientById = async (id) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: `/patient/${id}`
    });
};

const PatientAppService = {
    searchPatients, patientById, topPatients
};

export default PatientAppService;