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
    { path: "exam-results", element: <ResultExamsSearch />},
    // ...
  ]);
  return routes;


}

// ReactDOM.render(<App />, document.getElementById('page'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
  
export default App;

// function App() {
//   return (
//     <div style={{ width: '100%', height:'100%' }}>
//       {/* <Dashboard /> */}
//             <PatientSearch />
//     </div>
//   )
// }

// export default App;
