import { useState, useEffect } from 'react';
import HttpClient from '../http-client';

const searchPatients =async (params) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: '/patient',
        params
    });
};

const byId = async  (params) => {
    return await HttpClient.executeRequest({
        method: 'get',
        url: '/patient',
        params
    });
};

const PatientAppService = {
    searchPatients, byId
};

export default PatientAppService;

// export const PatientAppService = () => {

//     const searchPatients = (params) => {
//         console.log("teste");
//         return HttpClient().executeRequest({
//             method: 'get',
//             url: '/patient',
//             params
//         });

//     };

//     return {
//         searchPatients
//     };
// }

//     // export const PatientAppService = (action, params) => {
//     //     // const [result, setResult] = useState(undefined);


//     //     useEffect(() => {
//     //         // const searchPatients = (params) => {
//     //         //     console.log("teste");
//     //         //     return HttpClient({
//     //         //         method: 'get',
//     //         //         url: '/patient',
//     //         //         params
//     //         //     });

//     //         // };
//     //         // searchPatients(params);
//     //     }, [action, params]); // execute once only

//     //     return null;
//     // };
