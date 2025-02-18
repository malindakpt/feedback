import React from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import { UserRoles } from '../enums/userRoles';
import { useUserByUId } from '../hooks/useUserByUId';

const EmployeeAccess: React.FC = () => {
    const { uId } = useParams<{ uId?: string }>();
    const { user: loggedInUser } = useAuthenticatedUser();
    const { user: userToView } = useUserByUId(uId ?? '');
    
    if (!userToView) {
        return <p>Loading...</p>; // or a spinner
    }

    if (loggedInUser) {
        if (loggedInUser.position === UserRoles.Admin) {
            return <Outlet />
        } else {
            if (loggedInUser.position === UserRoles.Owner && loggedInUser.companyId === userToView?.companyId) {
                return <Outlet />
            } else {
                if (loggedInUser.position === UserRoles.Manager && loggedInUser.branchId === userToView?.branchId) {
                    return <Outlet />
                } else {
                    if (userToView?.id === loggedInUser.id) {
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
