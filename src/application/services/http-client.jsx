import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

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