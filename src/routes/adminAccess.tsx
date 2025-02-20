import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { UserRoles } from "../enums/userRoles";

const AdminAccess: React.FC = () => {
    const { user } = useAuthenticatedUser();

    if (!user) {
        return <Navigate to="/login" replace />; // Redirect if user is not authenticated
    }
    return user.position === UserRoles.Admin ? <Outlet /> : <Navigate to="/not-authorized" replace />;
};

export default AdminAccess;
