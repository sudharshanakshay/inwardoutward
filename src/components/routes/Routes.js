import { lazy } from "react";

const routes = [
    {
        path: 'dashboard',
        component: lazy(() => import('../../pages/dashboard/dashboard')),
        // extact: true
    },
];

export default routes;