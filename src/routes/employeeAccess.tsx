import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import { UserRoles } from '../enums/userRoles';
import { useGetUserByIdQuery } from '../api/userApi';

const EmployeeAccess: React.FC = () => {
    const { uId } = useParams<{ uId?: string }>();
    const { user: loggedInUser } = useAuthenticatedUser();

    // Fetch user data
    const { data: user, isLoading, error } = useGetUserByIdQuery(uId ?? '');
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching user details.</p>;

    if (loggedInUser) {
        if (loggedInUser.position === UserRoles.Admin) {
            return <Outlet />
        } else {
            if (loggedInUser.position === UserRoles.Owner && loggedInUser.companyId === user?.companyId) {
                return <Outlet />
            } else {
                if (loggedInUser.position === UserRoles.Manager && loggedInUser.branchId === user?.branchId) {
                    return <Outlet />
                } else {
                    if (user?.id === loggedInUser.id) {
                        return <Outlet />
                    } else {
                        return <Navigate to="/not-authorized" />;
                    }
                }
            }
        }
    } else {
        return <Navigate to="/not-authorized" />;
    }
};

export default EmployeeAccess;
