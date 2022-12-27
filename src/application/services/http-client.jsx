import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL =  process.env.REACT_APP_API_HL7_URL;

const executeRequest = async (params) => {
  let data = null;
  let error = null;
  
  try {
    const result = await axios.request(params);
    data = result.data;
  } catch (fail) {
    error = fail;
  } 

  return { data, error };
};

const HttpClient = {
  executeRequest
};

export default  HttpClient;