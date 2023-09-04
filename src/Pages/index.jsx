
import { lazy } from "react"


let AuthSignIn = lazy(() => import("./AuthSignIn/AuthSignIn"));
let AuthSignUp = lazy(() => import("./AuthSignUp/AuthSignUp"));
let Document = lazy(() => import("./Document/Document"));
let Employees = lazy(() => import("./Employees/Employees"));
let EmployeesFilter = lazy(() => import("./EmployeesFilter/EmployeesFilter"));
let Tasks = lazy(() => import("./Tasks/Tasks"));
let TasksInfo = lazy(() => import("./TasksInfo/TasksInfo"));
let UserInfo = lazy(() => import("./UserInfo/UserInfo"));
let UserKPI = lazy(() => import("./UserKPI/UserKPI"));
let NotFoundPage = lazy(() => import("./NotFoundPage/NotFoundPage"));
let Layout = lazy(() => import("./Layout/Layout"));

export {
    Layout,
    AuthSignIn,
    AuthSignUp,
    Document,
    Employees,
    EmployeesFilter,
    Tasks,
    TasksInfo,
    UserInfo,
    UserKPI,
    NotFoundPage
}