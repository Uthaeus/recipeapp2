import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

export default function AuthLayout() {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}