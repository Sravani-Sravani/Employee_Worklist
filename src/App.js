import React, {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const Worklist=lazy(()=>import("./Components/Worklist"))
const EnrollmentPage=lazy(()=>import("./Components/EnrollmentPage"))
const App = () => {
  return (
    <>
  
      <div className="app">
          <AppRoutes/>
          </div>
    </>
  );
}


const AppRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Router>
      <Routes>
      <Route exact path="/" element={ <Worklist/>}>
       
      </Route>
        <Route path="/ep" element={<EnrollmentPage/>}></Route>
        </Routes>
      </Router>
      </Suspense>
 
  );
}

export default App;
