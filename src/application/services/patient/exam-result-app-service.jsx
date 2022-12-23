import HttpClient from '../http-client';

const findPatientLocation = async (patientId) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: `/examResults/${patientId}/locations`
    });
};

const findExamsPatientLocation = async (patientId, locationId) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: `/examResults/${patientId}/exams/${locationId}`
    });
};

const searchExamResults = async (params) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: `/examResults`,
        params
    });
};


const ExamResultAppService = {
    findPatientLocation, findExamsPatientLocation, searchExamResults
};

export default ExamResultAppService;