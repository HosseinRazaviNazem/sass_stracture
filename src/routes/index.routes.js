import { PATHS } from 'configs/routes.config';  //1 path

import {

    HomePage,

} from 'pages';
//  2- define all pages
//3 - define prerequirment imports for routing

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, unstable_HistoryRouter, useNavigate } from "react-router-dom";
import { PrivateRtoutes } from './private.routes';
import { ProtectedForAdminRtoutes, ProtectedRtoutes } from './protected.routes';
import { PublicRtoutes } from './public.routes';
//approuting 4
export function AppRouting() {

    return(
        <BrowserRouter>
            <Routes>
                
                <Route element={<PublicRtoutes/>}>
                    <Route path={PATHS.HOME} element={<HomePage/> } />
                </Route>

                {/*<Route element={<ProtectedRtoutes/>}>*/}
                {/*    <Route path={PATHS.DASHBOARD} element={<UserProfilePage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_PROFILE} element={<UserProfilePage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_ORDERS} element={<UserOrdersPage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_WISHLIST} element={<UserWishListPage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_SETTINGS} element={<UserSettingPage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_EXIT} element={<UserExitPage />} />*/}
                {/*</Route>*/}

                {/*<Route element={<ProtectedForAdminRtoutes/>}>*/}
                {/*    <Route path={PATHS.DASHBOARD_ADMIN_ORDERS} element={<ProtectedOrdersPage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_PRODUCT} element={<UserProductPage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_QUANTITY} element={<UserQuantityPage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_CATEGORY} element={<UserCategoryPage />} />*/}
                {/*    <Route path={PATHS.DASHBOARD_USERS} element={<UsersListPage />} />*/}
                {/*</Route>*/}

                {/*<Route element={<PrivateRtoutes/>}>*/}
                {/*    <Route path={PATHS.LOGIN} element={<LoginPage />} />*/}
                {/*    <Route path={PATHS.REGISTER} element={<RegisterPage />} />*/}
                {/*</Route>*/}
                
            </Routes>
        </BrowserRouter>
    );
}

