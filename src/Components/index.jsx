import { lazy } from "react";

const Header = lazy(() => import('./header/header'))
const Loader = lazy(() => import('./Loader/Loader'))
const Dashboard = lazy(() => import('./Dashboard/Dashboard'))
const DashboardLink = lazy(() => import('./DashboardLink/DashboardLink'))
const Fetch = lazy(() => import('./UseFetch/UseFetch'))

export {
    Header,
    Loader,
    Dashboard,
    DashboardLink,
    Fetch,
}
