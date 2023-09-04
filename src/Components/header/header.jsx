import './header.scss';
import { Suspense, memo } from 'react';
import Loader from '../Loader/Loader';
import DashboardLink from '../DashboardLink/DashboardLink';
import Document_Home_Page_Icon from '../../assets/Icons/Document_Home_Page_Icon.png'


function Header() {
  return (
    <header>
      <ul className='headerItems'>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/Document' imgLink={Document_Home_Page_Icon} pageName='Home' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/AuthSignUp' pageName='AuthSignUp' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/AuthSignIn' pageName='AuthSignIn' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/Employees' pageName='Employees' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/EmployeesFilter' pageName='EmployeesFilter' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/Tasks' pageName='Tasks' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/TasksInfo' pageName='TasksInfo' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/UserInfo' pageName='UserInfo' /></Suspense>
        <Suspense fallback={<Loader />}><DashboardLink navlink='/UserKPI' pageName='UserKPI' /></Suspense>
      </ul>

    </header>
  );
}
export default memo(Header)