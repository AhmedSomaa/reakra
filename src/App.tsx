import * as React from "react";
import { useRoutes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import UsersPage from "pages/UsersPage";
import { navigationList } from "utils/constants";

export default function App() {
    const routes = useRoutes([
        { path: "/", element: <LandingPage navLinks={navigationList} /> },
        { path: "users", element: <UsersPage /> }
    ]);
    return routes;
}
