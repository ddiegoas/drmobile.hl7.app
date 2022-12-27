import Dashboard from './presentation/dashboard/dashboard';
import PatientSearch from './presentation/patient-list/patient-search'
import ResultExamsSearch from './presentation/result-exams/result-exams-search'
import {
  useRoutes
} from "react-router-dom";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "patients", element: <PatientSearch />},
    { path: "/exam-results/:patientId", element: <ResultExamsSearch  />},
  ]);
  return routes;
}
  
export default App;