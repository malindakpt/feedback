import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { UserRoles } from "../enums/userRoles";

const CompanyAccess: React.FC = () => {
    const { compId } = useParams<{ compId?: string }>();
    const { user } = useAuthenticatedUser();

    if (user) {
        if (user.position === UserRoles.Admin || user.position === UserRoles.Owner) {
            if (user.position === UserRoles.Admin) {
                return <Outlet />;
            } else {
                if (user.companyId === compId) {
                    return <Outlet />
                } else {
                    return <Navigate to="/not-authorized" />;
                }
            }
        } else {
            return <Navigate to="/not-authorized" />;
        }
    } else {
        return <Navigate to="/not-authorized" />;
    }
}
export default CompanyAccess;
