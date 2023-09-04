import './Dashboard.scss';

import React, { Suspense, memo } from 'react'
import Test_Frontend_Dashboard_Image from '../../assets/Test_Frontend_Dashboard_Image.png'
import Document_Home_Page_Icon from '../../assets/Icons/Document_Home_Page_Icon.png'
import Employees_Page_Icon from '../../assets/Icons/Employees_Page_Icon.png'
import Tasks_Page_Icon from '../../assets/Icons/Tasks_Page_Icon.png'
import User_Info_Icon from '../../assets/Icons/User_Info_Icon.png'
import User_KPI_Icon from '../../assets/Icons/User_KPI_Icon.png'
import Settings_Icon from '../../assets/Icons/Settings_Icon.png'
import logout from '../../assets/Icons/logout.png'
import DashboardLink from '../DashboardLink/DashboardLink';
import Loader from '../Loader/Loader';




function Dashboard() {
    return (
        <>
            <div className='DashboardWrapper'>
                <div className="DashboardreDirectBox">
                    <ul className="Preferences_Items">
                        <Suspense fallback={<Loader />}><DashboardLink navlink='/Dashboard' imgLink={Test_Frontend_Dashboard_Image} imgTitle='Test_Frontend_Dashboard_Image' pageName='Dashboard' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink pageName='Main menu' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink navlink='/Document' imgLink={Document_Home_Page_Icon} imgTitle='Document_Home_Page_Icon' pageName='Document' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink navlink='/Employees' imgLink={Employees_Page_Icon} imgTitle='Employees_Page_Icon' pageName='Employees' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink navlink='/TasksPage' imgLink={Tasks_Page_Icon} imgTitle='Tasks_Page_Icon' pageName='Tasks Page' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink navlink='/UserInfo' imgLink={User_Info_Icon} imgTitle='User_Info_Icon' pageName='User Info' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink navlink='/UserKPI' imgLink={User_KPI_Icon} imgTitle='User_KPI_Icon' pageName='User KPI' /></Suspense>
                    </ul>
                </div>
                <div className="PreferencesWrapper">
                    <ul className="Preferences_Items">
                        <Suspense fallback={<Loader />}><DashboardLink pageName='Preferences' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink navlink='/' imgLink={Settings_Icon} imgTitle='Settings_Icon' pageName='Sozlamalar' /></Suspense>
                        <Suspense fallback={<Loader />}><DashboardLink imgLink={logout} imgTitle='logout' pageName='Chiqish' /></Suspense>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default memo(Dashboard)