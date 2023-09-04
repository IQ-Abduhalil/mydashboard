import { Suspense, memo, useState } from "react"
import { Route, Routes } from "react-router-dom"
import {
  // AuthSignIn,
  AuthSignUp,
  Document,
  Employees,
  EmployeesFilter,
  Tasks,
  TasksInfo,
  UserInfo,
  UserKPI,
  NotFoundPage,
  Layout
} from "./Pages"
import { Loader } from "./Components"
import AuthSignIn from "./Pages/AuthSignIn/AuthSignIn";


function App() {
  let [token, setToken] = useState(localStorage.getItem("authToken"));

  if (token) {
    return (
      < Routes >
        <Route index element={<Suspense fallback={<Loader LoaderText="AuthSignIn Page" />}><AuthSignIn /></Suspense>} />
        <Route path="/AuthSignIn" element={<Suspense fallback={<Loader LoaderText="AuthSignUp Page" />}><AuthSignUp /></Suspense>} />
      </Routes >
    );
  }
  else {
    return (
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loader LoaderText="Layout Page" />}><Layout /></Suspense>} >
          <Route index element={<Suspense fallback={<Loader LoaderText="Document Page" />}><Document /></Suspense>} />
          <Route path="/Employees" element={<Suspense fallback={<Loader LoaderText="Employees Page" />}><Employees /></Suspense>} />
          <Route path="/EmployeesFilter" element={<Suspense fallback={<Loader LoaderText="EmployeesFilter Page" />}><EmployeesFilter /></Suspense>} />
          <Route path="/Tasks" element={<Suspense fallback={<Loader LoaderText="Tasks Page" />}><Tasks /></Suspense>} />
          <Route path="/TasksInfo" element={<Suspense fallback={<Loader LoaderText="TasksInfo Page" />}><TasksInfo /></Suspense>} />
          <Route path="/UserInfo" element={<Suspense fallback={<Loader LoaderText="UserInfo Page" />}><UserInfo /></Suspense>} />
          <Route path="/UserKPI" element={<Suspense fallback={<Loader LoaderText="UserKPI Page" />}><UserKPI /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<Loader LoaderText="NotFoundPage Page" />}><NotFoundPage /></Suspense>} />
        </Route>
      </Routes>
    )
  }
}

export default memo(App)
